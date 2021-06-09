import { MY_POKEMON } from './types'

export const GetMyNewestState = (newArray) => {
    return {
        type: MY_POKEMON,
        newArray: newArray
    }
}
