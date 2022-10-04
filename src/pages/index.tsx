import Home from './Home/index';
import Settings from './Settings/index';
import { useApp } from './../hooks/useApp';
import { pageEnum } from '../Enum/pageEnum';

export default function Pages(){
    const {page} = useApp()

    if(page === pageEnum.home) return <Home/>
    if(page === pageEnum.settings) return <Settings/>

    return <></>
}