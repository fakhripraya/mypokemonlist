import React, { Fragment, useEffect, useState } from 'react';
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
    PokemonButton,
    RotatingLoadingContainer,
    RotatingLoading,
} from './PokemonElements';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../../GraphQL/Queries';
import Pikachu from '../../Assets/Images/wkwkwk.png';
import { getOwnedFromArray } from '../../Function/array';

export default function Pokemon() {

    const offset = 0;
    let [pokemons, setPokemons] = useState([]);
    const [offsetNext, setOffsetsNext] = useState(18);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const { loading, error, data, fetchMore } = useQuery(GET_POKEMONS, {
        variables: {
            offset: offset,
            limit: 18
        }
    });

    useEffect(() => {

        if (!loading && !error)
            setPokemons(data.pokemons.results);

    }, [data, loading, error]);

    if (loading)
        return (<RotatingLoadingContainer><RotatingLoading><img style={{ height: '150px', width: '150px' }} alt="pika_meme_loading" src={Pikachu} /></RotatingLoading></RotatingLoadingContainer>);

    if (error) return `Error! ${error.message}`;

    function PokemonList() {

        // get all my pokemon information
        let myPokemons = useSelector(state => state.MyPokemonReducer.myPokemons);

        function LoadingMore() {
            return (
                <RotatingLoadingContainer><RotatingLoading><img style={{ height: '150px', width: '150px' }} alt="pika_meme_loading" src={Pikachu} /></RotatingLoading></RotatingLoadingContainer>
            );
        }

        function GetOwnedPokemon({ pokemon, index }) {

            let owned = getOwnedFromArray(myPokemons, pokemon);

            return (
                <PokemonCardWrapper key={index}>
                    <PokemonCard to={{
                        pathname: "/detail",
                        state: {
                            pokemon: pokemon,
                        },
                    }}>
                        <PokemonIcon style={{ borderRadius: '50%', backgroundColor: 'white' }} src={pokemon.image} alt={pokemon.name} />
                        <PokemonH2 style={{ color: 'white', textDecoration: 'none' }}>{pokemon.name !== null ? pokemon.name.toUpperCase() : ""}</PokemonH2>
                        <PokemonP style={{ color: 'white', textDecoration: 'none' }}>Owned: {owned}</PokemonP>
                    </PokemonCard>
                </PokemonCardWrapper>
            )
        }

        return (
            <Fragment>
                <PokemonContainer>
                    <PokemonH1>Pokemon List</PokemonH1>
                    <PokemonH2Cont>Gotta catch ’em all</PokemonH2Cont>
                    <PokemonWrapper>
                        {pokemons.map((item, index) => {
                            return (
                                <GetOwnedPokemon pokemon={item} index={index} key={index} />
                            )
                        })}
                    </PokemonWrapper>
                    {
                        (isLoadingMore ? (
                            <LoadingMore />
                        ) : (
                            <PokemonButton onClick={async () => {

                                setIsLoadingMore(true);
                                const { error, data } = await fetchMore({
                                    variables: {
                                        offset: offset + offsetNext,
                                        limit: 18,
                                    },
                                });

                                if (error) {
                                    alert('error: fetching data failed')
                                    return;
                                }

                                setIsLoadingMore(false);
                                setOffsetsNext(offsetNext + 18)

                                let newArray = [...pokemons];
                                newArray.push(...data.pokemons.results)
                                setPokemons(newArray)
                            }}>
                                <h1 style={{ color: 'white', fontSize: 18 }}>
                                    Load More
                                </h1>
                            </PokemonButton>
                        ))
                    }
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
