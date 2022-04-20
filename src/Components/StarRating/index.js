import React from 'react';
import { View, Text } from 'react-native';

// Dependencias
import Ionicons from 'react-native-vector-icons/Ionicons';

// Imports Locais
import styles from './styles'

export default props => {

    // Este Array conterá nossas tags de estrela. 
    // Incluiremos este array entre a tag view.
    let stars = [];

    // Repetir 5 vezes
    for (var i = 1; i <= 5; i++) {
        // Definir o caminho para estrelas cheias
        let name = 'ios-star';
        // Se as classificações forem mais baixas, 
        // defina o caminho para estrelas não preenchidas
        if (i > props.ratings) {
            name = 'ios-star-outline';
        }

        stars.push((<Ionicons name={name} size={15} style={styles.star} key={i} />));
    }

    return (
        <View style={styles.container}>
            {stars}
            <Text style={styles.text}>({props.reviews})</Text>
        </View>
    );
}