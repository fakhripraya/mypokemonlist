import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const HeroWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    height: 750px;
    width: 100%;
    position: relative;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

    @media screen and (max-width: 1260px){
        height: 500px;
    }
`

export const HeroBgWrapper = styled.div`
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroIcon = styled.img`
    width: auto;
    height: auto;
`

export const HeroH1 = styled.h1`
    color: #202020;
    font-size: 48px;
    font-weight: bold;
    text-align: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 5px;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-bottom: 10px;
    color: #202020;
    font-size: 24px;
    text-align: center;
    justify-content: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const HeroSearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`

export const CustomButtonCarouselWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    height: 100%;
    width: 100%;
    margin-left: 30px;
`

export const CustomButtonCarousel = styled(Link)`
    border-radius: 50px;
    background: #33c9ff;
    white-space: nowrap;
    z-index: 1;
    padding: 10px 22px;
    margin: 0 5px;
    color: #fff;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

/*Pokemon SECTION*/

export const PokemonContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 100%;
    padding-bottom: 50px;
`

export const PokemonWrapper = styled.div`
    width: 80%;
    max-width: 2000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    align-self: center;
    background-color: transparent;

    @media screen and (max-width: 2000px){
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    @media screen and (max-width: 1200px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 440px){
        grid-template-columns: 1fr;
    }
`

export const PokemonCardWrapper = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: auto;
    padding: 10px;
`

export const PokemonCard = styled.div`
    background-color: #D53B47;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 250px;
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 2000px){
        height: 200px;
        width: 150px;
    }

    @media screen and (max-width: 1200px){
        height: 200px;
        width: 150px;
    }

    @media screen and (max-width: 1000px){
        height: 200px;
        width: 150px;
    }

    @media screen and (max-width: 768px){
        height: 200px;
        width: 150px;
    }

    @media screen and (max-width: 440px){
        height: auto;
        width: auto;
    }
`

export const PokemonIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const PokemonH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 10px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const PokemonH2Cont = styled.h2`
    font-size: 1rem;
    margin-bottom: 64px;
`

export const PokemonH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const PokemonP = styled.p`
    font-size: 1rem;
    text-align: center;
`