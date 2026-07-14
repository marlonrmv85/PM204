//Zona 1 de importaciones 

import React,{useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';

//zona 2 componentes principal

export default function ImageBackgroundScreen() {
    const [blur, setBlur]= useState(0);

    const imagenes=[
        requiere('../assets/fondo1.jpg'),
        requiere('../assets/fondo2.jpg'),
        requiere('../assets/fondo3.jpg'),
    ];

    return (
        <imageBackground source={imagenes[imagenindex]} style={styles.contenedor} imageStyle={styles.imagen}
        blurRadius={blur} on lLoad={() => console.log('imagen cargada')}
        onError={(error) => console.warn('error al cargar la imagen', error)}>
            <View style={styles.tarjeta}>
                <Text style={styles.subtitulo}>Imagebackground</Text>
                <text style={styles.etiqueta}>imagen{imagenindex+1}de {imagenes.length}</text>
                <Button title='Cambiar imagen' onPress={() => setImagenIndex((imagenindex+1)%imagenes.length)}/>
                    color="#00B4D8"
                /
                <view style={styles.espacio}/>
                <text   style={styles.etiqueta}>blur: {blur}</text>
                <Button title={blur>0?'quitar blur':'aplicar blur'}  onPress={() => setBlur(blur>0?0:10)}
                color='#7B68EE'
                />

            </View>
        </imageBackground>
    );
}
//ZONA 3: estilos
const styles = StyleSheet.create({
    contenedor:{
        flex:1,
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    imagen:{
        resizeMode:'cover',
        opacity:0.75
    },
    tarjeta:{
        backgroundColor:'rgba(0,0,0,0.65    )', 
        padding:24,
        borderRadius:16,
        alignItems:'center',
        borderWidth:1,
        borderColor:'rgba(255,255,255,0.2)'
        },
        subtitulo:{
            color;'#dddddd'
            fontSize:24,
            marginBottom:20,
            fontStyle:'italic',
        },
        etiqueta:{
            color:'rgba(255,255,255,0.7)',
            fontSize:11,
            marginBottom:6
            textAlign:'center',
        },
        espacio:{
            height:12,
        }
    });

    :)))))