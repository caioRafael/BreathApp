import { useContext } from "react";
import { AppContext } from "../context/AppConntext";

export function useApp(){
    const app = useContext(AppContext)
    return app
}