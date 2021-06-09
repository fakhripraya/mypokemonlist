import {
    HeroWrapper,
    HeroContent,
    HeroBgWrapper,
    HeroIcon,
    HeroH1,
    HeroP,
    HeroButton,
    HeroSearchWrapper,
    PokemonContainer,
    PokemonWrapper,
    PokemonCardWrapper,
    PokemonCard,
    PokemonIcon,
    PokemonH1,
    PokemonH2Cont,
    PokemonH2,
    PokemonP,
    PokemonButton,
} from './PokemonDetailElement';
import { useLocation } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GET_POKEMONS_DETAILS } from '../../GraphQL/Queries';

export default function PokemonDetail() {

    const location = useLocation()
    const { pokemonName, owned } = location.state
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const { loading, error, data, fetchMore } = useQuery(GET_POKEMONS_DETAILS, {
        variables: {
            name: pokemonName
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
        return (
            <HeroWrapper>
                <HeroBgWrapper />
                <HeroContent>
                    <HeroIcon alt={selectedPokemon.name} src={selectedPokemon.sprites.front_default} />
                    <HeroH1>{selectedPokemon.name.toUpperCase()}</HeroH1>
                    <HeroP>Owned: {owned}</HeroP>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <HeroButton style={{ marginRight: '10px' }} onClick={async () => {
                        }}>
                            <h1 style={{ color: 'white', fontSize: 18 }}>
                                Catch
                            </h1>
                        </HeroButton>
                        <HeroButton>
                            <h1 style={{ color: 'white', fontSize: 18 }}>
                                Details
                            </h1>
                        </HeroButton>
                    </div>

                    <HeroSearchWrapper>
                    </HeroSearchWrapper>
                </HeroContent>
            </HeroWrapper>
        )
    }
    else {
        return ('loading...')
    }

}
