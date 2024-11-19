import { View,StyleSheet,Text} from "react-native";
import { Tela } from "./src/components/Tela";



export default function App() {
  return ( 
    <View style={styles.container}>
    <Tela/>
    </View>
  ) 
}

const styles = StyleSheet.create ({
  container: {
    flex:1, 
    backgroundColor: "#0f1111",
  }
 
})
 


