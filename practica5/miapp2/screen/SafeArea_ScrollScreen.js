import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, touch, View, Image } from 'react-native';
import { safeAreaView} from 'react-native-safe-area-context';
import {useState} from 'react';



export default function SafeArea_ScrollScreen() {
  return (
    <SafeAreaView style={styles.safe}edges={['top', 'bottom']}>
    <View style={styles.container} >

    <Text style={styles.title}>Mis tareas</Text>
      <StatusBar style="auto" />
    </View>
    
    {mostrarMensaje && (
      <View style={stylesSheet.safe}edge=>
    )}
    </SafeAreaView>
  );
}

/*Zona3: Estilos y posicionamiento*/
const style = StyleSheet.create({
  container: {
    safe:{flex:1, blackgroundColor : '#fff' },
    encabezado:{padding: 20, backgroundColor: '#f111'},
    title: {color: '#fff', frontSize:22, fontWeight: '700'},
  }
});