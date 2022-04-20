import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles'

export default props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tela de Suporte</Text>
            <Text style={styles.text}>Em Desenvolvimento</Text>
            <Button
                title="Clique Aqui Para voltar"
                onPress={() => props.navigation.goBack()}
            />
        </View>
    );
};