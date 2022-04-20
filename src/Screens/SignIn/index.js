/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';

// Dependencias
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';

// Imports Locais
import { AuthContext } from '../../Context/AppContext';
import Users from '../../Mock/Users';
import styles from './styles';

export default props => {
    const [data, setData] = useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { colors } = useTheme();
    const { signIn } = useContext(AuthContext);

    const textInputChange = val => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true,
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false,
            });
        }
    };

    const handlePasswordChange = val => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true,
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false,
            });
        }
    };

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        });
    };

    const handleValidUser = val => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true,
            });
        } else {
            setData({
                ...data,
                isValidUser: false,
            });
        }
    };

    const loginHandle = (userName, password) => {
        const foundUser = Users.filter(item => {
            return userName === item.username && password === item.password;
        });

        if (data.username.length === 0 || data.password.length === 0) {
            Alert.alert(
                'Preencha os campos!',
                'O campo de nome de usuário ou senha não pode ficar vazios.',
                [{ text: 'Ok' }],
            );
            return;
        }

        if (foundUser.length === 0) {
            Alert.alert('Ops!', 'Nome de usuário ou senha está incorreto.', [
                { text: 'Ok' },
            ]);
            return;
        }
        signIn(foundUser);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>{'Bem Vindo(a)!'}</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[
                    styles.footer,
                    {
                        backgroundColor: colors.background,
                    },
                ]}>
                <Text
                    style={[
                        styles.text_footer,
                        {
                            color: colors.text,
                        },
                    ]}>
                    Usuário
                </Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color={colors.text} size={20} />
                    <TextInput
                        placeholder="Usuário"
                        placeholderTextColor="#666666"
                        style={[
                            styles.textInput,
                            {
                                color: colors.text,
                            },
                        ]}
                        autoCapitalize="none"
                        onChangeText={val => textInputChange(val)}
                        onEndEditing={e => handleValidUser(e.nativeEvent.text)}
                    />
                    {data.check_textInputChange ? (
                        <Animatable.View animation="bounceIn">
                            <Feather name="check-circle" color="green" size={20} />
                        </Animatable.View>
                    ) : null}
                </View>
                {data.isValidUser ? null : (
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>
                            O nome de usuário deve ter mais que 4 caracteres.
                        </Text>
                    </Animatable.View>
                )}

                <Text
                    style={[
                        styles.text_footer,
                        {
                            color: colors.text,
                            marginTop: 35,
                        },
                    ]}>
                    Senha
                </Text>
                <View style={styles.action}>
                    <Feather name="lock" color={colors.text} size={20} />
                    <TextInput
                        placeholder="Senha"
                        placeholderTextColor="#666666"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={[
                            styles.textInput,
                            {
                                color: colors.text,
                            },
                        ]}
                        autoCapitalize="none"
                        onChangeText={val => handlePasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ? (
                            <Feather name="eye-off" color="grey" size={20} />
                        ) : (
                            <Feather name="eye" color="grey" size={20} />
                        )}
                    </TouchableOpacity>
                </View>
                {data.isValidPassword ? null : (
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>
                            A senha deve ter no mínimo 8 caracteres.
                        </Text>
                    </Animatable.View>
                )}

                <TouchableOpacity
                    onPress={() => props.navigation.navigate('ForgotPassword')}>
                    <Text style={{ color: '#007f5f', marginTop: 15 }}>
                        Esqueceu a senha?
                    </Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {
                            loginHandle(data.username, data.password);
                        }}>
                        <LinearGradient
                            colors={['#007f5f', '#007f5f']}
                            style={styles.signIn}>
                            <Text
                                style={[
                                    styles.textSign,
                                    {
                                        color: '#fff',
                                    },
                                ]}>
                                Fazer Login
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('SignUp')}
                        style={[
                            styles.signIn,
                            {
                                borderColor: '#007f5f',
                                borderWidth: 1,
                                marginTop: 15,
                            },
                        ]}>
                        <Text
                            style={[
                                styles.textSign,
                                {
                                    color: '#007f5f',
                                },
                            ]}>
                            Cadastre-se
                        </Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};
