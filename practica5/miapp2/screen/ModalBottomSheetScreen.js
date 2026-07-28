import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native';

export default function ModalBottomSheetScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleModal = () => setModalVisible(!modalVisible);
  const toggleBottomSheet = () => setBottomSheetVisible(!bottomSheetVisible);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Práctica de componentes</Text>

      <Pressable style={styles.button} onPress={toggleModal}>
        <Text style={styles.buttonText}>Abrir modal clásico</Text>
      </Pressable>

      <Pressable style={styles.buttonSecondary} onPress={toggleBottomSheet}>
        <Text style={styles.buttonText}>Abrir bottom sheet</Text>
      </Pressable>

      {/* Modal clásico */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Este es un modal centrado clásico.
            </Text>

            <Pressable style={styles.buttonClose} onPress={toggleModal}>
              <Text style={styles.textStyle}>Cerrar modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Bottom Sheet */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={bottomSheetVisible}
        onRequestClose={toggleBottomSheet}
      >
        <View style={styles.bottomSheetContainer}>
          <View style={styles.bottomSheetView}>
            <Text style={styles.modalText}>
              Este es un bottom sheet nativo.
            </Text>

            <Pressable
              style={styles.buttonClose}
              onPress={toggleBottomSheet}
            >
              <Text style={styles.textStyle}>Ocultar panel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
  },

  title: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: '600',
  },

  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: 220,
    alignItems: 'center',
  },

  buttonSecondary: {
    backgroundColor: '#34C759',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: 220,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },

  modalView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },

  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 16,
  },

  buttonClose: {
    backgroundColor: '#FF3B30',
    padding: 12,
    borderRadius: 10,
    marginTop: 15,
    width: '100%',
  },

  textStyle: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  bottomSheetContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },

  bottomSheetView: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
});