import React, { Fragment, useEffect, useState } from 'react';
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
} from './PokemonElements';
import {
    GetMyNewestState,
} from '../../Redux';
import { gql, useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../../GraphQL/Queries';
import { useSelector, useDispatch } from 'react-redux';

export default function Pokemon() {

    const dispatch = useDispatch();
    let [pokemons, setPokemons] = useState([]);
    const [offset, setOffsets] = useState(0);
    const [offsetNext, setOffsetsNext] = useState(18);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const { loading, error, data, fetchMore } = useQuery(GET_POKEMONS, {
        variables: {
            offset: offset,
            limit: 18
        }
    });

    useEffect(() => {

        if (!loading && !error)
            setPokemons(data.pokemons.results);

        return () => {

        }
    }, [data]);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    function SelectedPokemon() {
        if (selectedPokemon !== null) {
            return (
                <HeroWrapper>
                    <HeroBgWrapper />
                    <HeroContent>
                        <HeroIcon alt="a" src={selectedPokemon.pokemon.image} />
                        <HeroH1>{selectedPokemon.pokemon.name.toUpperCase()}</HeroH1>
                        <HeroP>Owned: {selectedPokemon.owned}</HeroP>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <HeroButton style={{ marginRight: '10px' }} onClick={async () => {

                                setIsLoadingMore(true);

                                const { error, data } = await fetchMore({
                                    variables: {
                                        offset: offset + offsetNext,
                                        limit: 18,
                                    },
                                });

                                if (error) {
                                    alert(error.message)
                                }

                                setIsLoadingMore(false);
                                setOffsetsNext(offsetNext + 18)

                                let newArray = [...pokemons];
                                newArray.push(...data.pokemons.results)
                                setPokemons(newArray)
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
        } else {
            return null
        }

    }

    function PokemonList() {

        // get all my pokemon information
        let myPokemons = useSelector(state => state.MyPokemonReducer.myPokemons);

        function LoadingMore() {
            return (
                <PokemonButton disabled={true}>
                    <h1 style={{ color: 'white', fontSize: 18 }}>
                        Loading...
                    </h1>
                </PokemonButton>
            );
        }

        function GetOwnedPokemon({ pokemon, index }) {

            let owned = 0;

            if (myPokemons.length !== 0) {
                myPokemons.forEach((item, index) => {
                    if (item.name === pokemon.name) {
                        owned = item.owned;
                    }
                })
            }

            return (
                <PokemonCardWrapper key={index}>
                    <PokemonCard to={{
                        pathname: "/detail",
                        state: {
                            pokemonName: pokemon.name,
                            owned: owned,
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
                    <PokemonH2Cont>Select your favorite pokemon</PokemonH2Cont>
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
                                const { loading, error, data } = await fetchMore({
                                    variables: {
                                        offset: offset + offsetNext,
                                        limit: 18,
                                    },
                                });
                                setIsLoadingMore(false);
                                setOffsetsNext(offsetNext + 18)

                                console.log(loading)
                                console.log(error)
                                console.log(data)
                                console.log(pokemons)
                                console.log(data.pokemons.results)

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
            <SelectedPokemon />
            <PokemonList />
        </Fragment>
    )
}
