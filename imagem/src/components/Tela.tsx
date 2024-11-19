import {View,StyleSheet, Image,Text} from "react-native"
export const Tela = () => {
    return(
        <View style={styles.container}>
            <View style={styles.statusBar}/>
                <Text style={styles.statusBarText}>   Tudo       Desenhos       Outfit       Flores       Wallpaper❤️ </Text>
                
            <View/>
            <View style={styles.imageContainer}>
            <Image 
           style={styles.foto1}
           source={{
           uri: "https://i.pinimg.com/736x/cd/31/68/cd316860806cdfe3ecfc57991774f56e.jpg"
    }}/> 
            <Image
            style={styles.foto2}
            source={{
            uri: "https://i.pinimg.com/736x/52/9b/27/529b270ff44c2a669338098c75fb6df7.jpg"
    }} />
     <Image
            style={styles.foto3}
            source={{
            uri: "https://i.pinimg.com/736x/e3/e2/ad/e3e2ad259dd57fde89f58dae95b14ac2.jpg"
    }} />
    <Image
            style={styles.foto4}
            source={{
            uri: "https://i.pinimg.com/736x/49/9a/78/499a78f2fb67dda9bb8c03f80a2dcdb6.jpg"
    }} />

    </View>
    <View style={styles.footer} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1, 
    },
    statusBar: {
        position: 'absolute',
        top: 0,
        width: "100%",
        height: 80,
        backgroundColor: "#0f1111",
       
      },
      statusBarText:{
        color: "#fff", 
        fontSize: 16, 
        fontWeight: 'bold',
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        zIndex:1,
       
      },
      footer: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        height: 60,
        backgroundColor: "#0f1111",
        zIndex: 1,
    },
    imageContainer: {
        flex:1,
        flexDirection: "row",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
        padding:10,
        width: "100%",
        height:"100%",
    },
    foto1: {
    width: "44%",
    height: "39%",
    margin: 20,
    borderRadius: 20,
    alignSelf: "flex-start",
    },
    foto2: {
    width: "45%",
    height: "43%",
    margin: 0,
    borderRadius: 20,
    alignSelf:"flex-end",

     },
    foto3: {
    width: "48%",
    height: "36%",
    margin: 10,
    borderRadius: 20,
    },
    foto4: {
    width: "41%",
    height: "31%",
    margin: 10,
    borderRadius: 20,
    alignSelf: "flex-end",
    }

})