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
        backgroundColor: '#87BEF9',
        position: 'absolute',
        bottom: 16
    },

    textButton:{
        fontSize: 20,
        fontWeight: '700',
        color: '#fff'
    }, 

    animation:{
        width: '100%'
    }, 

    header: {
        position: "absolute",
        top: 20,
        width: "100%",
        padding: 20,
        justifyContent: 'space-between', 
        flexDirection: "row"
    },

    animationButton:{
        width: 100,
        height: 100,
        borderWidth: 2
        // margin: 15
    }, 

    content: {
        maxHeight: '20%',
        width: '90%',
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        // margin: 5
    }
})