export function getOwnedFromArray(array, comparison) {
    let owned = 0;

    if (array.length !== 0) {
        array.forEach((item, index) => {
            if (item.pokemon.name === comparison.name) {
                owned = item.owned;
            }
        })
    }

    return owned
}

export function getTypeColorFromArray(array, comparison) {
    let colorHex = 'rgba(0, 0, 0, 0.5)';

    array.forEach((item, index) => {
        if (comparison.type.name === item.title)
            colorHex = item.color;
    })

    return colorHex
}