import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

/*---------------------------------------------------LOWER NAV---------------------------------------------------*/

export const Nav = styled.nav`
    background: #D53B47;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom: solid 1.1px rgba(0,0,0,0.3);

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

    @media screen and (max-width: 1260px){
        height: 80px;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 2000px;
`

export const NavLogo = styled(Link)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    max-width: 230px;
`

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 1260px){
        color: #fff;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 1260px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-size: 1.25rem;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    &:hover{
        transition: all 0.1s ease-in-out;
        color: #000;
        border-bottom: 5px solid #000;
    }
`

/*---------------------------------------------------END OF LOWER NAV---------------------------------------------------*/


/*---------------------------------------------------MOBILE NAV---------------------------------------------------*/

export const DrawerWrapper = styled.div`
    display: none;

    @media screen and (max-width: 1260px){
        display: contents;
    }
`

/*---------------------------------------------------END OF MOBILE NAV---------------------------------------------------*/