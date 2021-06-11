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
    ErrorH1,
    FAButton
} from './PokemonElements';
import Fab from '@material-ui/core/Fab';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../../GraphQL/Queries';
import Pikachu from '../../Assets/Images/wkwkwk.png';
import { getOwnedFromArray } from '../../Function/array';
import NavigationIcon from '@material-ui/icons/Navigation';

export default function Pokemon() {

    const offset = 0;
    let [pokemons, setPokemons] = useState([]);
    const [offsetNext, setOffsetsNext] = useState(18);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [FADisplay, setFADisplay] = useState(false);

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

    const showFAButton = () => {
        if (window.scrollY >= window.innerHeight) {
            setFADisplay(true)
        } else {
            setFADisplay(false)
        }
    }

    window.addEventListener('scroll', showFAButton);

    if (loading)
        return (<RotatingLoadingContainer><RotatingLoading><img style={{ height: '150px', width: '150px' }} alt="pika_meme_loading" src={Pikachu} /></RotatingLoading></RotatingLoadingContainer>);

    if (error) return (<ErrorH1>Error! { error.message}</ErrorH1>);

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
                <FAButton showfa={FADisplay}>
                    <Fab color="secondary" aria-label="add" onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                    }}>
                        <NavigationIcon />
                    </Fab>
                </FAButton>
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
                                    Load More !!
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
