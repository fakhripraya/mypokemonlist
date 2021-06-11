import { TypeColors } from '../Datas/type-color';
import { getOwnedFromArray, getTypeColorFromArray } from '../Function/array';

const array = [
    {
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        owned: 4,
        pokeList: ['gyudon', 'ebifurai', 'kutilang', 'majapahit'],
        pokemon: {
            id: 1,
            name: "bulbasaur"
        }
    },
    {
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        owned: 2,
        pokeList: ['matila', 'sukican'],
        pokemon: {
            id: 6,
            name: "charizard"
        }
    }
]

const comparison = {
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    name: "bulbasaur",
}

const typeComparison = {
    type: {
        name: "bug"
    }
}

test('get the owned count from array with comparison', () => {
    expect(getOwnedFromArray(array, comparison)).toBe(4)
})

test('get the color from type with comparison', () => {
    expect(getTypeColorFromArray(TypeColors, typeComparison)).toBe('#A8B820')
})
