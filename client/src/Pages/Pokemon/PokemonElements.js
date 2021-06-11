import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { keyframes } from '@emotion/react'

export const HeroWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    height: 500px;
    width: 100%;
    position: relative;
    
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
    
    // desktop
    @media screen and (min-width: 1260px){
        height: 750px;
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
    width: 300px;
    height: 300px;
`

export const HeroH1 = styled.h1`
    color: #202020;
    font-weight: bold;
    text-align: center;
    font-size: 32px;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 5px;
    
    @media screen and (min-width: 480px){
        font-size: 40px;
    }
    
    @media screen and (min-width: 768px){
        font-size: 48px;
    }
`

export const HeroP = styled.p`
    margin-bottom: 10px;
    color: #202020;
    font-size: 18px;
    text-align: center;
    justify-content: center;
    max-width: 600px;

    @media screen and (min-width: 480px){
        font-size: 24px;
    }
`

export const HeroButton = styled.button`
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: auto;
    height: auto;
    padding: 10px 25px;
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: rgba(30,30,30,0.9);
    border-radius: 10px;
    
    @media screen and (min-width: 330px){
        padding: 20px 50px;
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
    width: 100%;
    margin: 0 auto;
    max-width: 2000px;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr;
    align-self: center;
    background-color: transparent;
    text-align: center;
    
    @media screen and (min-width: 440px){
        grid-template-columns: 1fr 1fr;
    }
    
    @media screen and (min-width: 768px){
        grid-template-columns: 1fr 1fr 1fr;
    }
    
    // desktop
    @media screen and (min-width: 1000px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    
    @media screen and (min-width: 1200px){
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    
    // wide screen
    @media screen and (min-width: 2000px){
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
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

export const PokemonCard = styled(Link)`
    background-color: #D53B47;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 150px;
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    border-radius: 10px;
    text-decoration: none;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    // wide screen
    @media screen and (min-width: 2000px){
        height: 300px;
        width: 250px;
    }
`

export const PokemonIcon = styled.img`
    height: 50%;
    width: 75%;
    margin-bottom: 10px;
`

export const PokemonH1 = styled.h1`
    font-size: 2rem;
    color: #000;
    margin-bottom: 10px;
    text-align: center;

    @media screen and (min-width: 480px){
        font-size: 2.5rem;
    }
`

export const PokemonH2Cont = styled.h2`
    font-size: 1rem;
    margin-bottom: 64px;
    text-align: center;
`

export const PokemonH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const PokemonP = styled.p`
    font-size: 1rem;
    text-align: center;
`

export const PokemonButton = styled.button`
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: auto;
    height: auto;
    padding: 5px 15px;
    margin: 50px auto;
    background-color: rgba(30,30,30,0.9);
    border-radius: 10px;
    
    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
    
    @media screen and (min-width: 215px){
        padding: 20px 50px;
    }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const RotatingLoadingContainer = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
    padding-left: auto;
    padding-right: auto;
    justify-content: center;
    align-items:center;
`

export const RotatingLoading = styled.div`
    display: block;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
    text-align: center;
`

export const ErrorH1 = styled.h1`
    color: #202020;
    font-weight: bold;
    text-align: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 32px;

    @media screen and (min-width: 480px){
        font-size: 40px;
    }

    // if screen is desktop size
    @media screen and (min-width: 768px){
        font-size: 48px;
    }

`