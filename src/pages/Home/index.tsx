import { FC, useRef, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Lottie from 'lottie-react-native'

import {styles} from './styles'

import breathe from '../../animations/breathe.json'

const Home: FC = () => {
    const {container} = styles
    const [loop, setLoop] = useState<boolean>(false)
    const animation = useRef(null)

    const startAnimation = () => {
        animation.current?.reset()
        animation.current?.play()
        setLoop(!loop)
    }
    return ( 
        <SafeAreaView style={container}>
            <Lottie autoSize source={breathe} autoPlay loop={loop} ref={animation} progress={30000}/>

            <TouchableOpacity
                onPress={startAnimation}
            >
                <Text>
                    Iniciar
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
     );
}
 
export default Home;