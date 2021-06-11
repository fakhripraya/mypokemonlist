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
    ModalCloseButton,
    PokemonCardWrapper,
    PokemonCard,
    PokemonIcon,
    PokemonContainer,
    PokemonWrapper,
    PokemonH2,
    PokemonH1,
    PokemonButton,
    RotatingLoadingContainer,
    RotatingLoading,
    ErrorH1
} from './PokemonDetailElement';
import { useQuery } from '@apollo/client';
import Modal from '../../Components/Modal';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from "react-router-dom";
import { GetMyNewestState } from '../../Redux';
import { useLocation } from "react-router-dom";
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';
import { TypeColors } from '../../Datas/type-color';
import Pikachu from '../../Assets/Images/wkwkwk.png';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { GET_POKEMON_DETAILS } from '../../GraphQL/Queries';
import React, { useEffect, useState, useRef, Fragment } from 'react';
import { getOwnedFromArray, getTypeColorFromArray } from '../../Function/array';

const useStyles = makeStyles(() => ({
    root: {
        width: "50%",
    },
}));

export default function PokemonDetail() {

    let history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch()
    const location = useLocation()
    const pokemon = typeof (location.state) !== 'undefined' ? location.state.pokemon : { name: "" }
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

    const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, {
        variables: {
            name: pokemon.name
        }
    });

    useEffect(() => {

        if (!loading && !error) {
            setSelectedPokemon(data.pokemon)
        }

    }, [data, loading, error]);

    if (typeof (location.state) === 'undefined') {
        history.push("/");
    }

    if (!loading && !error && selectedPokemon !== null) {

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
                    <PokemonCardWrapper key={index}>
                        <PokemonCard >
                            <PokemonIcon style={{ borderRadius: '50%', backgroundColor: 'white' }} alt={selectedPokemon.name} src={selectedPokemon.sprites.front_default} />
                            <PokemonH2 style={{ color: 'white', textDecoration: 'none' }}>{pokemon !== null ? pokemon.toUpperCase() : ""}</PokemonH2>
                            <PokemonButton onClick={() => {

                                let selectedIndex;
                                let selectedName;

                                selected.pokeList.map((item, index) => {
                                    if (item.toUpperCase() === pokemon.toUpperCase()) {
                                        selectedIndex = index
                                        selectedName = item
                                    }
                                })

                                let isCleared = false;
                                let parentIndex;

                                myPokemons.forEach((item, index) => {
                                    if (selectedPokemon.name === item.pokemon.name) {
                                        item.pokeList.splice(selectedIndex, 1);
                                        item.owned--;
                                        setCatchPoke({
                                            name: "You successfully release " + selectedName,
                                            quote: "goodbye :')",
                                            img: "https://pokemon-web-app.web.app/static/media/footprints.187beaa7.png",
                                            showInput: false
                                        })
                                        setOpen(true)
                                    }

                                    if (item.pokeList.length === 0) {
                                        isCleared = true
                                        parentIndex = index
                                    }
                                })

                                if (isCleared) {
                                    myPokemons.splice(parentIndex, 1)
                                }

                                let newArr = [...myPokemons]
                                dispatch(GetMyNewestState(newArr))

                            }}>
                                <h1 style={{ color: 'white', fontSize: 18 }}>
                                    Release
                                </h1>
                            </PokemonButton>
                        </PokemonCard>
                    </PokemonCardWrapper>
                )
            }

            if (selected !== null) {
                return (
                    <PokemonContainer>
                        <PokemonH1>Owned {selectedPokemon.name}</PokemonH1>
                        <PokemonWrapper>
                            {selected.pokeList.map((item, index) => {
                                return (
                                    <GetMyPokemons pokemon={item} index={index} key={index} />
                                )
                            })}
                        </PokemonWrapper>
                    </PokemonContainer>
                )
            } else {
                return (
                    <MoveContainer>
                        <MoveH1>Owned {selectedPokemon.name}</MoveH1>
                        <MoveCardWrapper>
                            <MoveCard >
                                <MoveH2 style={{ color: 'white', textDecoration: 'none' }}>Empty</MoveH2>
                            </MoveCard>
                        </MoveCardWrapper>
                    </MoveContainer>
                )
            }

        }

        function GetTypes({ type, index }) {

            let colorHex = getTypeColorFromArray(TypeColors, type);

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

                                if (textRef.current.value === "") {
                                    setOpen2nd(true);
                                    return;
                                }

                                let isNew = true;
                                let isNameValid = true;
                                let newArr = [...myPokemons]

                                if (newArr.length !== 0) {
                                    newArr.forEach((item) => {
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
                                        newArr.push({ pokemon: selectedPokemon, owned: 1, pokeList: [textRef.current.value], img: pokemon.image })

                                } else
                                    newArr.push({ pokemon: selectedPokemon, owned: 1, pokeList: [textRef.current.value], img: pokemon.image })

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

        let thisOwned = getOwnedFromArray(myPokemons, selectedPokemon);

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
    else if (error) {
        return (<ErrorH1>Error! {error.message}</ErrorH1>)
    }
    else {
        return (<RotatingLoadingContainer><RotatingLoading><img style={{ height: '150px', width: '150px' }} src={Pikachu} alt="pika_meme_loading" /></RotatingLoading></RotatingLoadingContainer>);
    }

}
