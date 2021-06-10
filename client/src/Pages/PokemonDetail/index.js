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
    ModalInput,
    ModalCloseButton
} from './PokemonDetailElement';
import { GetMyNewestState } from '../../Redux';
import { useLocation } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useState, useRef, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GET_POKEMON_DETAILS } from '../../GraphQL/Queries';
import { TypeColors } from '../../Datas/type-color';
import Modal from '../../Components/Modal';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        width: "50%",
    },
}));

export default function PokemonDetail() {

    const classes = useStyles();
    const dispatch = useDispatch()
    const location = useLocation()
    const { pokemon, owned } = location.state
    const [selectedPokemon, setSelectedPokemon] = useState(null)
    const [open, setOpen] = useState(false)
    const [open2nd, setOpen2nd] = useState(false)
    const [catchPoke, setCatchPoke] = useState({
        name: "",
        quote: "",
        img: "",
        showInput: false,
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

        let selected = null;

        myPokemons.forEach((item) => {
            if (pokemon.name === item.pokemon.name) {
                selected = item;
            }
        })

        function GetMoves({ move, index }) {

            return (
                <MoveCardWrapper key={index}>
                    <MoveCard >
                        <MoveH2 style={{ color: 'white', textDecoration: 'none' }}>{move.move.name !== null ? move.move.name.toUpperCase() : ""}</MoveH2>
                    </MoveCard>
                </MoveCardWrapper>
            )
        }

        function ShowMyBag() {

            function GetMyPokemons({ pokemon, index }) {

                return (
                    <MoveCardWrapper key={index}>
                        <MoveCard >
                            <MoveH2 style={{ color: 'white', textDecoration: 'none' }}>{pokemon !== null ? pokemon.toUpperCase() : ""}</MoveH2>
                        </MoveCard>
                    </MoveCardWrapper>
                )
            }

            if (selected !== null) {
                return (
                    <MoveContainer>
                        <MoveH1>My Bag</MoveH1>
                        <MoveWrapper>
                            {selected.pokeList.map((item, index) => {
                                return (
                                    <GetMyPokemons pokemon={item} index={index} key={index} />
                                )
                            })}
                        </MoveWrapper>
                    </MoveContainer>
                )
            } else {
                return (
                    <MoveContainer>
                        <MoveH1>My Bag</MoveH1>
                    </MoveContainer>
                )
            }

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

            const textRef = useRef();

            function ModalInputShow() {
                if (catchPoke.showInput === true) {
                    return (
                        <Fragment>
                            <ModalInput ref={textRef} type="text" id="name" name="name" placeholder="Your Pokemon name.." />
                            <div className={classes.root}>
                                <Collapse in={open2nd}>
                                    <Alert
                                        severity="error"
                                        action={
                                            <IconButton
                                                aria-label="close"
                                                color="inherit"
                                                size="small"
                                                onClick={() => {
                                                    setOpen2nd(false);
                                                }}
                                            >
                                                <CloseIcon fontSize="inherit" />
                                            </IconButton>
                                        }
                                    >
                                        {'The name is unavailable, please try a different name'}
                                    </Alert>
                                </Collapse>
                            </div>
                            <ModalCloseButton onClick={() => {

                                let isNew = true;
                                let isNameValid = true;

                                if (myPokemons.length !== 0) {
                                    myPokemons.forEach((item) => {
                                        if (item.pokemon.name === selectedPokemon.name) {
                                            item.pokeList.forEach((item) => {
                                                if (item === textRef.current.value) {
                                                    isNameValid = false;
                                                    return;
                                                }
                                            })

                                            if (!isNameValid)
                                                return;

                                            item.owned++
                                            item.pokeList.push(textRef.current.value)
                                            isNew = false;
                                        }
                                    })

                                    if (!isNameValid) {
                                        setOpen2nd(true);
                                        return;
                                    }

                                    if (isNew)
                                        myPokemons.push({ pokemon: selectedPokemon, owned: owned + 1, pokeList: [textRef.current.value], img: pokemon.image })

                                } else
                                    myPokemons.push({ pokemon: selectedPokemon, owned: owned + 1, pokeList: [textRef.current.value], img: pokemon.image })

                                let newArr = [...myPokemons]
                                dispatch(GetMyNewestState(newArr))
                                setOpen2nd(false);
                                setOpen(false)
                            }}>
                                <h3 style={{ color: 'white', fontSize: 18 }}>Yeay !!</h3>
                            </ModalCloseButton>
                        </Fragment>
                    )
                }
                else {
                    return (
                        <Fragment >
                            <ModalCloseButton onClick={() => {
                                setOpen(false)
                            }}>
                                <h3 style={{ color: 'white', fontSize: 18 }}>Okay :(</h3>
                            </ModalCloseButton>
                        </Fragment>
                    )
                }
            }

            return (
                <ModalContainer>
                    <ModalImage src={catchPoke.img} />
                    <ModalTitle>
                        {catchPoke.name}
                    </ModalTitle>
                    <ModalSecondTitle>
                        {catchPoke.quote}
                    </ModalSecondTitle>
                    <ModalInputShow />
                </ModalContainer>
            )
        }

        let thisOwned = 0;

        if (myPokemons.length !== 0) {
            myPokemons.forEach((item, index) => {
                if (item.pokemon.name === selectedPokemon.name) {
                    thisOwned = item.owned;
                }
            })
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
                                    quote: "Give your poke-poke a nickname boi!",
                                    img: "https://pokemon-web-app.web.app/static/media/gotcha.e52aa4c3.png",
                                    showInput: true
                                })
                            }
                            else {
                                setCatchPoke({
                                    name: "Failed to catch " + selectedPokemon.name + "...",
                                    quote: "dang It ran away...",
                                    img: "https://pokemon-web-app.web.app/static/media/footprints.187beaa7.png",
                                    showInput: false
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
                <ShowMyBag />
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
