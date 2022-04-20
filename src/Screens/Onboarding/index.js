import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

// Dependencias
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

// Imports Local
import styles from './styles'

export default ({ navigation }) => {
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../../Assets/logo.png')}
                    style={styles.logo}
                // resizeMode="stretch"
                />
            </View>
            <Animatable.View
                style={[styles.footer, {
                    backgroundColor: colors.background
                }]}
                animation="fadeInUpBig"
            >
                <Text style={[styles.title, {
                    color: colors.text
                }]}>Encontre a melhor comida em sua localidade!</Text>
                <Text style={styles.text}>Entre com uma conta ou cadastre-se</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <LinearGradient
                            colors={['#007f5f', '#007f5f']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Vamos lá!</Text>
                            <MaterialIcons
                                name="navigate-next"
                                color="#fff"
                                size={20}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={styles.textPrivate}>
                    <Text style={styles.color_textPrivate}>
                        Ao se inscrever você concorda com nossos
                    </Text>
                    <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>
                        {" "}Termos de serviço
                    </Text>
                    <Text style={styles.color_textPrivate}>
                        {" "}e
                    </Text>
                    <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>
                        {" "}Política de Privacidade
                    </Text>
                </View>
            </Animatable.View>
        </View >
    );
};