import React, { Fragment } from 'react';
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
} from './MyPokemonElements';
import { useSelector } from 'react-redux';

export default function MyPokemon() {

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
