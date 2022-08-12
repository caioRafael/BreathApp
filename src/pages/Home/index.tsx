import { FC, useCallback, useRef, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Lottie from 'lottie-react-native';

import {styles} from './styles'

import breathe from '../../animations/breathe.json'

const Home: FC = () => {
    const {container, button, textButton} = styles
    const [loop, setLoop] = useState<boolean>(false)
    const animation = useRef<Lottie>(null)

    const startAnimation = useCallback(() => {
        setLoop(!loop)
        animation.current?.reset()
        animation.current?.play()
        
        if(!loop === false){
            animation.current?.pause()
        }
    }, [loop])

    return ( 
        <View>
            <SafeAreaView style={container}>
                <Lottie autoSize source={breathe} autoPlay loop={loop} ref={animation} duration={20000}/>

                <TouchableOpacity
                    onPress={startAnimation}
                    style={button}
                >
                    <Text style={textButton}>
                        {loop ? 'Parar' : 'Iniciar'}
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
     );
}
 
export default Home;