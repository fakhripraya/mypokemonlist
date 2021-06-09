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
    align-self: center;
    justify-content: center;
`

export const HeroIcon = styled.img`
    width: 250px;
    height: 250px;
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

export const HeroButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    height: 70px;
    width: 145px;
    padding: 10px;
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: rgba(30,30,30,0.9);
    border-radius: 10px;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 330px){
        height: 60px;
        width: 95px;
    }
`

/*Type Section*/

export const TypeWrapper = styled.li`
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 100%;
    padding-bottom: 50px;
`

/*Pokemon SECTION*/

export const MoveContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 100%;
    padding-bottom: 50px;
`

export const MoveWrapper = styled.div`
    width: 100%;
    max-width: 2000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    align-self: center;
    background-color: transparent;
    

    @media screen and (max-width: 2000px){
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }

    @media screen and (max-width: 1650px){
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }

    @media screen and (max-width: 1450px){
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }

    @media screen and (max-width: 1250px){
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr 1fr 1fr ;
    }

    @media screen and (max-width: 858px){
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 440px){
        grid-template-columns: 1fr;
    }
`

export const MoveCardWrapper = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: auto;
    padding: 10px;
`

export const MoveCard = styled.div`
    background-color: #D53B47;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 125px;
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    border-radius: 10px;

    @media screen and (max-width: 330px){
        height: 40px;
        width: 75px;
    }
`

export const MoveH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 25px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const MoveH2 = styled.h2`
    font-size: 14px;
    margin-bottom: 10px;
`

/*Modal Section*/

export const ModalContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    align-items: center;
`

export const ModalImage = styled.img`
    height: 200px;
    width: 200px;
`

export const ModalTitle = styled.h1`
    font-size: 2rem;
    color: #000;
    margin-bottom: 25px;

    @media screen and (max-width: 600px){
        font-size: 1.5rem;
    }

    @media screen and (max-width: 480px){
        font-size: 1rem;
    }

    @media screen and (max-width: 300px){
        font-size: 0.95rem;
    }

    @media screen and (max-width: 295px){
        font-size: 0.75rem;
    }
`

export const ModalSecondTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;

    @media screen and (max-width: 600px){
        font-size: 1rem;
    }

    @media screen and (max-width: 480px){
        font-size: 0.95rem;
    }

    @media screen and (max-width: 300px){
        font-size: 0.75rem;
    }

    @media screen and (max-width: 280px){
        font-size: 0.5rem;
    }
`

export const ModalCloseButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    height: 70px;
    width: 145px;
    padding: 10px;
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: rgba(30,30,30,0.9);
    border-radius: 10px;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 330px){
        height: 60px;
        width: 95px;
    }
`