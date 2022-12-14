import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%', 
        height: '100%',
        position: "relative"
    },

    button:{
        width: 200,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#87BEF9'
    },

    textButton:{
        fontSize: 20,
        fontWeight: '700',
        color: '#fff'
    }, 

    animation:{
        maxWidth: '100%'
    }, 

    header: {
        position: "absolute",
        top: 20,
        width: "100%",
        padding: 20,
        justifyContent: 'space-between', 
        flexDirection: "row"
    }
})