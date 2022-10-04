import { FC, useCallback, useRef, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons'; 
import Lottie from 'lottie-react-native';

import {styles} from './styles'

import breathe from '../../animations/breathe.json'
import { useApp } from "../../hooks/useApp";
import { animationsList } from "../../context/AppConntext";

const Home: FC = () => {
    const {navigateTo, animation, duration} = useApp()
    const {
        container, 
        button, 
        textButton, 
        animation: animationStyle,
        header
    } = styles
    const [loop, setLoop] = useState<boolean>(false)
    const animationRef = useRef<Lottie>(null)

    const startAnimation = useCallback(() => {
        setLoop(!loop)
        animationRef.current?.reset()
        animationRef.current?.play()
        
        if(!loop === false){
            animationRef.current?.pause()
        }
    }, [loop])

    return ( 
        <View>
            <SafeAreaView style={container}>
                <View style={header}>
                    <TouchableOpacity onPress={() => navigateTo(2)}>
                        <Feather name="settings" size={24} color='#87BEF9' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="help-circle" size={24} color='#87BEF9' />
                    </TouchableOpacity>
                </View>
                <Lottie 
                    autoSize 
                    source={animationsList[animation]} 
                    autoPlay 
                    loop={loop} 
                    ref={animationRef} 
                    duration={duration}
                    style={animationStyle}
                />

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