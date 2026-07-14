

/* Zona1: importaciones componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Saludo} from './components/Saludo';
import {Saludo2} from './components/Saludo2';
/*   Zona2: main  - componentes */
export default function App() {
  return (
    <View style={styles.container}>
       <Image source={require('./assets/favicon.png')}/>
       <Text>Hola mundo RN</Text>
      <Text>---------------------------------------</Text>
      
<Saludo></Saludo>
<Saludo/>.
 <Text>---------------------------------------</Text>
 <Saludo2/>
      <StatusBar style="auto" />
    </View>
  );
}
/* zona 3: maquillaje estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
