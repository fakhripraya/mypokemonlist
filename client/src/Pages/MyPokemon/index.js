import React, { Fragment, useState } from 'react';
import {
    PokemonContainer,
    PokemonWrapper,
    PokemonCardWrapper,
    PokemonCard,
    PokemonIcon,
    PokemonH1,
    PokemonH2Cont,
    PokemonH2,
    PokemonP,
    FAButton,
    Background
} from './MyPokemonElements';
import Fab from '@material-ui/core/Fab';
import { useSelector } from 'react-redux';
import NavigationIcon from '@material-ui/icons/Navigation';
import Hape1 from '../../Assets/Images/hape1.png';
import Hape2 from '../../Assets/Images/hape2.png';
import Hape3 from '../../Assets/Images/hape3.png';
import Hape4 from '../../Assets/Images/hape4.png';
import Hape5 from '../../Assets/Images/hape5.png';
import Hape6 from '../../Assets/Images/hape6.png';
import HapeBG from '../../Assets/Images/my_hapelist_bg.png';

export default function MyPokemon() {

    const [FADisplay, setFADisplay] = useState(false);

    const showFAButton = () => {
        if (window.scrollY >= window.innerHeight) {
            setFADisplay(true)
        } else {
            setFADisplay(false)
        }
    }

    window.addEventListener('scroll', showFAButton);

    function PokemonList() {

        // get all my pokemon information
        let myPokemons = useSelector(state => state.MyPokemonReducer.myPokemons);

        function HapeImage({ name }) {

            if (name === "Shujin hape") {
                return <PokemonIcon style={{ borderRadius: '50%', backgroundColor: 'white' }} src={Hape1} alt={name} />
            } else if (name === "Shinju hape") {
                return <PokemonIcon style={{ borderRadius: '50%', backgroundColor: 'white' }} src={Hape2} alt={name} />
            } else if (name === "Kojin hape") {
                return <PokemonIcon style={{ borderRadius: '50%', backgroundColor: 'white' }} src={Hape3} alt={name} />
            } else if (name === "Jojo hape") {
                return <PokemonIcon style={{ borderRadius: '50%', backgroundColor: 'white' }} src={Hape5} alt={name} />
            } else if (name === "Digimental hape") {
                return <PokemonIcon style={{ borderRadius: '50%', backgroundColor: 'white' }} src={Hape4} alt={name} />
            } else {
                return <PokemonIcon style={{ borderRadius: '50%', backgroundColor: 'white' }} src={Hape6} alt={name} />
            }
        }

        function GetOwnedPokemon({ pokemon, index }) {

            return (
                <PokemonCardWrapper key={index}>
                    <PokemonCard to={{
                        pathname: "/detail",
                        state: {
                            pokemon: pokemon.pokemon,
                        },
                    }}>
                        <HapeImage name={pokemon.pokemon.name} />
                        {/* <PokemonIcon style={{ borderRadius: '50%', backgroundColor: 'white' }} src={pokemon.img} alt={pokemon.pokemon.name} /> */}
                        <PokemonH2 style={{ color: 'white', textDecoration: 'none' }}>{pokemon.pokemon.name !== null ? pokemon.pokemon.name.toUpperCase() : ""}</PokemonH2>
                        <PokemonP style={{ color: 'white', textDecoration: 'none' }}>Owned: {pokemon.owned}</PokemonP>
                    </PokemonCard>
                </PokemonCardWrapper>
            )
        }

        return (
            <Fragment>
                <FAButton showfa={FADisplay}>
                    <Fab color="secondary" aria-label="add" onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                    }}>
                        <NavigationIcon />
                    </Fab>
                </FAButton>
                <PokemonContainer>
                    <PokemonH1>My Hapebeast</PokemonH1>
                    <PokemonH2Cont>Select your favorite Hapebeast</PokemonH2Cont>
                    <PokemonWrapper>
                        {myPokemons.map((item, index) => {
                            return (
                                <GetOwnedPokemon pokemon={item} index={index} key={index} />
                            )
                        })}
                    </PokemonWrapper>
                </PokemonContainer>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <PokemonList />
            <Background src={HapeBG} alt="my_pokemon_bg" />
        </Fragment>
    )
}
