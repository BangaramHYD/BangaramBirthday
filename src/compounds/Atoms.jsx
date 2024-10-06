import { atom, selector } from "recoil";

export const buttonstateatom = atom(
    {
        key:'state',
        default:false
    }
)

export const button = selector(
    {
        key:'buttonselector',
        get:({get})=>{
            const state = get(buttonstateatom)
            return state
        }
    }
)