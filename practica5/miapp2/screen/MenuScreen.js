/* Zona 1: Importaciones componentes y archivos*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React,{useState} from 'react';
import TarjetasScreen from './TarjetasScreen';
import SafeAreaScreen from './SafeAreaScreen';
import ScrollScreen from './ScrollScreen';

/* Zona2: Main - componentes */
export default function MenuScreen() {
    const [screen, setScreen]= useState('menu');

    switch(screen){
        case 'tarjetas':
            return <TarjetasScreen/>;
            case 'SafeArea':
                return <SafeAreaScreen/>;
                case 'Scroll':
                  return <SafeArea_ScrollScreen/>;
                  case 'Pressable':
                    return <PressableScreen/>;
                    case 'Switch':
                      return <SwitchScreen/>;
                      case 'TextInput':
                        return <TextInputScreen/>;
                        case 'Alert':
                          return <AlertScreen/>;
                          case 'FlatList':
                            return <FlatListScreen/>;

                case 'menu':
                    default:
  return (
    <View style={styles.container} >
      <>
        <Button title='Practica Tarjetas' onPress={() => setScreen('tarjetas')}/>
        <Button title='Practica SafeAreaView' onPress={() => setScreen('SafeArea')}/>
        <Button title='Practica ScrollView' onPress={() => setScreen('Scroll')}/>
        <Button title='Practica Pressable' onPress={() => setScreen('Pressable')}/>
        <Button title='Practica Switch' onPress={() => setScreen('Switch')}/>
        <Button title='Practica TextInput' onPress={() => setScreen('TextInput')}/>
        <Button title='Practica Alert' onPress={() => setScreen('Alert')}/>
        <Button title='Practica FlatList' onPress={() => setScreen('FlatList')}/>
      </>
      <StatusBar style="auto" />
    </View>
        );
    }
}

/*Zona3: Estilos y posicionamiento*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row', /*Posicionamiento horizontal */ /*column-reverse invierte el orden de los componentes */
  }
});