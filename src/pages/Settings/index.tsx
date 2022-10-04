import { Text, TouchableOpacity, View, ScrollView } from "react-native"
import { FC } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import Lottie from 'lottie-react-native';

import { useApp } from "../../hooks/useApp";
import { animationsList } from "../../context/AppConntext";
import {styles} from './styles'
import { useState } from 'react';


const Settings: FC = () => {
    const {navigateTo, duration, animation: animationNumber, saveSettings} = useApp()
    const {
        container, 
        button,
        textButton, 
        header,
        animationButton,
        animation,
        content
    } = styles
    const [selectedItem, setSelectedItem] = useState<number>(animationNumber)
    
    return(
        <View style={container}>
            <View style={header}>
                <TouchableOpacity onPress={() => navigateTo(1)}>
                    <AntDesign name="arrowleft" size={24} color="#87BEF9" />
                </TouchableOpacity>
            </View>
            {/* <Text>ola mundo</Text> */}
            <ScrollView style={content} horizontal>
                {animationsList.map((item, index) => (
                    <TouchableOpacity 
                        style={[
                            animationButton, 
                            {borderColor: selectedItem === index ? '#87BEF9' : 'transparent'}
                            ]} 
                            key={index}
                            onPress={() => setSelectedItem(index)}
                        >
                        <Lottie  
                            autoSize
                            style={animation}
                            source={item} 
                            autoPlay 
                            duration={10000}
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <TouchableOpacity style={button} onPress={() => saveSettings({
                animationsSelected:selectedItem, 
                timingSelected: duration
            })}>    
                <Text style={textButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Settings