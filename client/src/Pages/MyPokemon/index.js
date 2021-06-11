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
    FAButton
} from './MyPokemonElements';
import Fab from '@material-ui/core/Fab';
import { useSelector } from 'react-redux';
import NavigationIcon from '@material-ui/icons/Navigation';

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

        function GetOwnedPokemon({ pokemon, index }) {

            return (
                <PokemonCardWrapper key={index}>
                    <PokemonCard to={{
                        pathname: "/detail",
                        state: {
                            pokemon: pokemon.pokemon,
                        },
                    }}>
                        <PokemonIcon style={{ borderRadius: '50%', backgroundColor: 'white' }} src={pokemon.img} alt={pokemon.pokemon.name} />
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
                    <PokemonH1>My Pokemon List</PokemonH1>
                    <PokemonH2Cont>Select your favorite pokemon</PokemonH2Cont>
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
        </Fragment>
    )
}
