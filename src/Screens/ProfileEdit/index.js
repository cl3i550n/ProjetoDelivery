import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, TextInput, Alert } from 'react-native';

// Dependencias
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';

// Imports Local
import styles from './style'

export default props => {

    const [image, setImage] = useState('https://i.ibb.co/NxzPmKz/Whats-App-Image-2022-01-19-at-17-59-12.jpg');
    const { colors } = useTheme();

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            compressImageMaxWidth: 300,
            compressImageMaxHeight: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            console.log(image);
            setImage(image.path);
            this.bs.current.snapTo(1);
        });
    }

    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            console.log(image);
            setImage(image.path);
            this.bs.current.snapTo(1);
        });
    }

    renderInner = () => (
        <View style={styles.panel}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.panelTitle}>Enviar Foto</Text>
                <Text style={styles.panelSubtitle}>Escolha sua foto de Perfil</Text>
            </View>
            <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
                <Text style={styles.panelButtonTitle}>Tirar Foto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
                <Text style={styles.panelButtonTitle}>Escolha da Galeria</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.panelButton}
                onPress={() => this.bs.current.snapTo(1)}>
                <Text style={styles.panelButtonTitle}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    );

    renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle} />
            </View>
        </View>
    );

    bs = React.createRef();
    fall = new Animated.Value(1);

    return (
        <View style={styles.container}>
            <BottomSheet
                ref={this.bs}
                snapPoints={[330, 0]}
                renderContent={this.renderInner}
                renderHeader={this.renderHeader}
                initialSnap={1}
                callbackNode={this.fall}
                enabledGestureInteraction={true}
            />
            <Animated.View style={{
                margin: 20,
                opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
            }}>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
                        <View
                            style={{
                                height: 100,
                                width: 100,
                                borderRadius: 15,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <ImageBackground
                                source={{
                                    uri: image,
                                }}
                                style={{ height: 100, width: 100 }}
                                imageStyle={{ borderRadius: 15 }}>
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Icon
                                        name="camera"
                                        size={35}
                                        color="#fff"
                                        style={{
                                            opacity: 0.7,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderWidth: 1,
                                            borderColor: '#fff',
                                            borderRadius: 10,
                                        }}
                                    />
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
                        Seu_Nome_Aqui
                    </Text>
                </View>

                <View style={styles.action}>
                    <FontAwesome name="user-o" color={colors.text} size={20} />
                    <TextInput
                        placeholder="Nome"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[
                            styles.textInput,
                            {
                                color: colors.text,
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color={colors.text} size={20} />
                    <TextInput
                        placeholder="Sobrenome"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[
                            styles.textInput,
                            {
                                color: colors.text,
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>
                    <Feather name="phone" color={colors.text} size={20} />
                    <TextInput
                        placeholder="Cell ou Tell"
                        placeholderTextColor="#666666"
                        keyboardType="number-pad"
                        autoCorrect={false}
                        style={[
                            styles.textInput,
                            {
                                color: colors.text,
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="envelope-o" color={colors.text} size={20} />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#666666"
                        keyboardType="email-address"
                        autoCorrect={false}
                        style={[
                            styles.textInput,
                            {
                                color: colors.text,
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="globe" color={colors.text} size={20} />
                    <TextInput
                        placeholder="País"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[
                            styles.textInput,
                            {
                                color: colors.text,
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>
                    <Icon name="map-marker-outline" color={colors.text} size={20} />
                    <TextInput
                        placeholder="Cidade"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[
                            styles.textInput,
                            {
                                color: colors.text,
                            },
                        ]}
                    />
                </View>
                <TouchableOpacity
                    style={styles.commandButton}
                    onPress={() => {
                        Alert.alert(
                            'SUCESSO!',
                            'Simulação de edição do perfil com sucesso',
                            [
                                { text: 'Ok' }
                            ]);
                    }}>
                    <Text style={styles.panelButtonTitle}>Alterar Dados</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};
