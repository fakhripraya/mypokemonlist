import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

/*Pokemon SECTION*/

export const Background = styled.img`
    /* Set rules to fill background */
    min-height: 50%;
    min-width: 1024px;
        
    /* Set up proportionate scaling */
    width: 100%;
    height: 100%;
    /* Set up positioning */
    position: fixed;
    top: 0;
    left: 0;
    z-index: -999;
`

export const FAButton = styled.div`
    position: fixed;
    display: ${({ showfa }) => (showfa ? 'flex' : 'none')};
    width:100%;
    justify-content: flex-end;
    margin-left: -20px;
    transition: 0.8s all ease;
`

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
    max-width: 2000px;
    margin: 0 auto;
    display: grid;
    align-items: center;
    align-self: center;
    grid-template-columns: 1fr;
    background-color: transparent;
    
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
    background-color: #2F3136;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
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
    
    @media screen and (min-width: 2000px){
        height: 300px;
        width: 250px;
    }
`

export const PokemonIcon = styled.img`
    height: 75%;
    width: 75%;
    margin-bottom: 10px;
`

export const PokemonH1 = styled.h1`
    font-size: 2rem;
    color: #fff;
    margin-bottom: 10px;
    text-align: center;
    
    @media screen and (min-width: 480px){
        font-size: 2.5rem;
    }
`

export const PokemonH2Cont = styled.h2`
    color: #fff;
    font-size: 1rem;
    margin-bottom: 64px;
    text-align: center;
`

export const PokemonH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    text-align: center;
`

export const PokemonP = styled.p`
    font-size: 1rem;
    text-align: center;
`