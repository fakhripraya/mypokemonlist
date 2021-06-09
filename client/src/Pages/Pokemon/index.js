import React, { Fragment, useEffect } from 'react';
import {
    HeroWrapper,
    HeroContent,
    HeroBgWrapper,
    HeroIcon,
    HeroH1,
    HeroP,
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
} from './PokemonElements';
import PokemonImage from '../../Assets/Images/Papi_Kost_4.png';

export default function Pokemon() {

    useEffect(() => {
        return () => {
        }
    }, [])

    function SelectedPokemon() {
        return (
            <HeroWrapper>
                <HeroBgWrapper />
                <HeroContent>
                    <HeroIcon alt="a" src={PokemonImage} />
                    <HeroH1>Bingung Cari Kosan?</HeroH1>
                    <HeroP>Sini papi bantuin cari</HeroP>
                    <HeroSearchWrapper>
                    </HeroSearchWrapper>
                </HeroContent>
            </HeroWrapper>
        )
    }

    function PokemonList() {

        return (
            <PokemonContainer>
                <PokemonH1>Pokemon List</PokemonH1>
                <PokemonH2Cont>Select your favorite pokemon</PokemonH2Cont>
                <PokemonWrapper>
                    <PokemonCardWrapper>
                        <PokemonCard>
                            <PokemonH2>Kontrakan</PokemonH2>
                            <PokemonP>Kontrakan yang cocok dan cozy untuk kamu!</PokemonP>
                        </PokemonCard>
                    </PokemonCardWrapper>
                    <PokemonCardWrapper>
                        <PokemonCard>
                            <PokemonH2>Apartemen</PokemonH2>
                            <PokemonP>Apartemen nyaman dengan kualitas premium!</PokemonP>
                        </PokemonCard>
                    </PokemonCardWrapper>
                    <PokemonCardWrapper>
                        <PokemonCard>
                            <PokemonH2>Apartemen</PokemonH2>
                            <PokemonP>Apartemen nyaman dengan kualitas premium!</PokemonP>
                        </PokemonCard>
                    </PokemonCardWrapper>
                    <PokemonCardWrapper>
                        <PokemonCard>
                            <PokemonH2>Kontrakan</PokemonH2>
                            <PokemonP>Kontrakan yang cocok dan cozy untuk kamu!</PokemonP>
                        </PokemonCard>
                    </PokemonCardWrapper>
                    <PokemonCardWrapper>
                        <PokemonCard>
                            <PokemonH2>Apartemen</PokemonH2>
                            <PokemonP>Apartemen nyaman dengan kualitas premium!</PokemonP>
                        </PokemonCard>
                    </PokemonCardWrapper>
                    <PokemonCardWrapper>
                        <PokemonCard>
                            <PokemonH2>Apartemen</PokemonH2>
                            <PokemonP>Apartemen nyaman dengan kualitas premium!</PokemonP>
                        </PokemonCard>
                    </PokemonCardWrapper>
                    <PokemonCardWrapper>
                        <PokemonCard>
                            <PokemonH2>Kontrakan</PokemonH2>
                            <PokemonP>Kontrakan yang cocok dan cozy untuk kamu!</PokemonP>
                        </PokemonCard>
                    </PokemonCardWrapper>
                    <PokemonCardWrapper>
                        <PokemonCard>
                            <PokemonH2>Apartemen</PokemonH2>
                            <PokemonP>Apartemen nyaman dengan kualitas premium!</PokemonP>
                        </PokemonCard>
                    </PokemonCardWrapper>
                    <PokemonCardWrapper>
                        <PokemonCard>
                            <PokemonH2>Apartemen</PokemonH2>
                            <PokemonP>Apartemen nyaman dengan kualitas premium!</PokemonP>
                        </PokemonCard>
                    </PokemonCardWrapper>
                    <PokemonCardWrapper>
                        <PokemonCard>
                            <PokemonH2>Kontrakan</PokemonH2>
                            <PokemonP>Kontrakan yang cocok dan cozy untuk kamu!</PokemonP>
                        </PokemonCard>
                    </PokemonCardWrapper>
                    <PokemonCardWrapper>
                        <PokemonCard>
                            <PokemonH2>Apartemen</PokemonH2>
                            <PokemonP>Apartemen nyaman dengan kualitas premium!</PokemonP>
                        </PokemonCard>
                    </PokemonCardWrapper>
                    <PokemonCardWrapper>
                        <PokemonCard>
                            <PokemonH2>Apartemen</PokemonH2>
                            <PokemonP>Apartemen nyaman dengan kualitas premium!</PokemonP>
                        </PokemonCard>
                    </PokemonCardWrapper>
                </PokemonWrapper>
            </PokemonContainer>
        )
    }

    return (
        <Fragment>
            <SelectedPokemon />
            <PokemonList />
        </Fragment>
    )
}
