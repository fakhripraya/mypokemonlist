import React from 'react';
import MyPokemonList from '../Assets/Logos/iconfinder_1543558_game_pokeball_pokemon_pokemon go_pokemongo_icon.svg'
import PokemonList from '../Assets/Logos/iconfinder_1543570_game_pokeball_pokemon_pokemon go_pokemongo_icon.svg'

export const SidebarData = [
    {
        title: 'Hape List',
        path: '/',
        icon: <img src={PokemonList} alt="Pokemon" style={{ width: '35px', marginRight: '10px' }} />,
    },
    {
        title: 'My Hapebeast',
        path: '/me',
        icon: <img src={MyPokemonList} alt="My Pokemon" style={{ width: '35px' }} />,
    }
];