import { createContext, ReactNode, useState } from "react";
import Lottie from 'lottie-react-native';
import { pageEnum } from "../Enum/pageEnum";

import breathe from '../animations/breathe.json'
import boyBreathe from '../animations/boy-breathe.json'
import quadraticBreathing from '../animations/quadratic-breathing.json'
import lungsBreathing from '../animations/lungs-breathing.json'

export const animationsList = [
    breathe,
    boyBreathe,
    quadraticBreathing,
    lungsBreathing
]

interface AppContextData{
    page: pageEnum
    navigateTo: (pageDirection: pageEnum) => void
    animation: number
    duration: number
    saveSettings: (settings: NewSettings) => void
}

interface AppProviderProps{
    children: ReactNode
}

export interface NewSettings{
    animationsSelected: number
    timingSelected: number
}

export const AppContext = createContext({} as AppContextData)

export function AppProvider({children}: AppProviderProps){
    const [page, setPage] = useState<pageEnum>(1)
    const [animation, setAnimation] = useState<number>(0)
    const [duration, setDuration] = useState<number>(20000)

    const navigateTo = (pageDirection: pageEnum) => {
        setPage(pageDirection)
    }

    const saveSettings = (settings: NewSettings) => {
        setAnimation(settings.animationsSelected)
        setDuration(settings.timingSelected)
        navigateTo(1)
    }

    return (
        <AppContext.Provider value={{
            page, 
            navigateTo, 
            animation, 
            duration,
            saveSettings
        }}>
            {children}
        </AppContext.Provider>
    )
}