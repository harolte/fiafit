import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';  



export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.loginBox}>
          <Text style={styles.loginTitle}>INICIAR SESIÓN</Text>
          <Text style={styles.loginTitle2}>Usuario</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#888"
          />

          <Text style={styles.loginTitle2}>Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#888"
            secureTextEntry
          />
          <b>
            </b>          
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Dashboard')}
          >
            
            <Text style={styles.buttonText}>INGRESAR</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
            <Text style={styles.linkText}>¿Deseas restablecer la contraseña?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.linkText}>
              Si no tienes una cuenta <Text style={styles.registerText}>REGISTRATE</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
     
     


    </View>
    
    
  );
}
