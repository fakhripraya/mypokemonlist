import {
    HeroWrapper,
    HeroContent,
    HeroBgWrapper,
    HeroIcon,
    HeroH1,
    HeroP,
    HeroButton,
    MoveContainer,
    MoveWrapper,
    MoveCardWrapper,
    MoveCard,
    TypeWrapper,
    MoveH1,
    MoveH2,
    ModalContainer,
    ModalImage,
    ModalTitle,
    ModalSecondTitle,
    ModalCloseButton
} from './PokemonDetailElement';
import { GetMyNewestState } from '../../Redux';
import { useLocation } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GET_POKEMON_DETAILS } from '../../GraphQL/Queries';
import { TypeColors } from '../../Datas/type-color'
import Modal from '../../Components/Modal'

export default function PokemonDetail() {

    const dispatch = useDispatch()
    const location = useLocation()
    const { pokemon, owned } = location.state
    const [selectedPokemon, setSelectedPokemon] = useState(null)
    const [open, setOpen] = useState(false)
    const [catchPoke, setCatchPoke] = useState({
        name: "",
        quote: "",
    })

    let myPokemons = useSelector(state => state.MyPokemonReducer.myPokemons)

    const { loading, error, data, fetchMore } = useQuery(GET_POKEMON_DETAILS, {
        variables: {
            name: pokemon.name
        }
    });

    useEffect(() => {

        if (!loading && !error) {
            setSelectedPokemon(data.pokemon)
        }

        return () => {

        }
    }, [data]);

    if (!loading && selectedPokemon !== null) {

        function GetMoves({ move, index }) {

            return (
                <MoveCardWrapper key={index}>
                    <MoveCard >
                        <MoveH2 style={{ color: 'white', textDecoration: 'none' }}>{move.move.name !== null ? move.move.name.toUpperCase() : ""}</MoveH2>
                    </MoveCard>
                </MoveCardWrapper>
            )
        }

        function GetTypes({ type, index }) {

            let colorHex;

            TypeColors.forEach((item, index) => {
                if (type.type.name === item.title)
                    colorHex = item.color;
            })

            return (
                <MoveCardWrapper key={index}>
                    <MoveCard style={{ backgroundColor: colorHex }} >
                        <MoveH2 style={{ color: 'white', textDecoration: 'none' }}>{type.type.name !== null ? type.type.name.toUpperCase() : ""}</MoveH2>
                    </MoveCard>
                </MoveCardWrapper>
            )
        }

        const ModalBody = props => {
            return (
                <ModalContainer>
                    <ModalImage src={'https://pokemon-web-app.web.app/static/media/gotcha.e52aa4c3.png'} />
                    <ModalTitle>
                        {catchPoke.name}
                    </ModalTitle>
                    <ModalSecondTitle>
                        {catchPoke.quote}
                    </ModalSecondTitle>
                    <ModalCloseButton onClick={() => {
                        setOpen(false)
                    }}>
                        <h3 style={{ color: 'white', fontSize: 18 }}>Okay</h3>
                    </ModalCloseButton>
                </ModalContainer>
            )
        }

        let thisOwned = 0;

        if (myPokemons.length !== 0) {
            thisOwned = 1;
        }

        return (
            <Fragment>
                <HeroWrapper>
                    <HeroBgWrapper />
                    <HeroContent>
                        <HeroIcon alt={selectedPokemon.name} src={selectedPokemon.sprites.front_default} />
                        <HeroH1>{selectedPokemon.name.toUpperCase()}</HeroH1>
                        <TypeWrapper>
                            {selectedPokemon.types.map((item, index) => {
                                return (
                                    <GetTypes type={item} index={index} key={index} />
                                )
                            })}
                        </TypeWrapper>
                        <HeroP>Owned: {thisOwned}</HeroP>
                        <HeroButton onClick={async () => {

                            if (Math.random() > 0.5) {
                                setCatchPoke({
                                    name: "Successfully catch " + selectedPokemon.name + "!",
                                    quote: "Gotta catch em' all boi!"
                                })

                                if (myPokemons.length !== 0) {
                                    myPokemons.forEach((item, index) => {
                                        if (item.pokemon.name === selectedPokemon.name) {
                                            item.owned++
                                            return;
                                        }
                                    })
                                } else {
                                    myPokemons.push({ pokemon: selectedPokemon, owned: owned + 1 })
                                }

                                console.log(myPokemons)

                                dispatch(GetMyNewestState(myPokemons))
                            }
                            else {
                                setCatchPoke({
                                    name: "Failed to catch " + selectedPokemon.name + "...",
                                    quote: "dang It ran away..."
                                })
                            }

                            setOpen(true)

                        }}>
                            <h1 style={{ color: 'white', fontSize: 18 }}>
                                Catch
                        </h1>
                        </HeroButton>
                    </HeroContent>
                </HeroWrapper>
                <MoveContainer>
                    <MoveH1>Moves</MoveH1>
                    <MoveWrapper>
                        {selectedPokemon.moves.map((item, index) => {
                            return (
                                <GetMoves move={item} index={index} key={index} />
                            )
                        })}
                    </MoveWrapper>
                </MoveContainer>
                <Modal open={open} setOpen={setOpen} Body={ModalBody} />
            </Fragment >
        )
    }
    else {
        return ('loading...')
    }

}
