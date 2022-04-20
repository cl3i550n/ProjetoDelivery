import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Platform, StyleSheet, ScrollView, Alert } from 'react-native';

// Dependencias
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

// Imports Local
import styles from './styles'

export default props => {

    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputUser = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

    const textInputEmail = (val) => {
        setData({
            ...data,
            email: val
        });
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Criando Cadastro</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.text_footer}>Usuário</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Usuário"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputUser(val)}
                        />
                        {data.check_textInputChange ?
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                            : null}
                    </View>

                    <Text style={[styles.text_footer, {
                        marginTop: 30
                    }]}>Email</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="envelope"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Email"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputEmail(val)}
                        />
                        {data.check_textInputChange ?
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                            : null}
                    </View>

                    <Text style={[styles.text_footer, {
                        marginTop: 30
                    }]}>Senha</Text>
                    <View style={styles.action}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Senha"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>

                    <Text style={[styles.text_footer, {
                        marginTop: 30
                    }]}>Confirme a Senha</Text>
                    <View style={styles.action}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Confirme a Senha"
                            secureTextEntry={data.confirm_secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handleConfirmPasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateConfirmSecureTextEntry}
                        >
                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={styles.textPrivate}>
                        <Text style={styles.color_textPrivate}>
                            Ao se inscrever você concorda com nossos
                        </Text>
                        <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Termos de serviço</Text>
                        <Text style={styles.color_textPrivate}>{" "}e</Text>
                        <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Política de Privacidade</Text>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn}
                            onPress={() => {
                                Alert.alert('SUCESSO!', 'Simulação de cadastro com sucesso', [
                                    { text: 'Ok' }
                                ]);
                            }}
                        >
                            <LinearGradient
                                colors={['#007f5f', '#007f5f']}
                                style={styles.signIn}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff'
                                }]}>Cadastrar</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => props.navigation.goBack()}
                            style={[styles.signIn, {
                                borderColor: '#007f5f',
                                borderWidth: 1,
                                marginTop: 15,
                                marginBottom: 15
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: '#007f5f'
                            }]}>Fazer Login</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Animatable.View>
        </View>
    );
};