import React from 'react';
import { View, FlatList } from 'react-native';

// Imports Local
import { StoresWithCoords } from '../../Mock/StoresWithCoords'
import Card from '../../Components/Card';
import styles from './styles';

export default props => {

    const renderItem = ({ item }) => {
        return (
            <Card
                itemData={item}
                onPress={() => props.navigation.navigate('StoreDetail', { itemData: item })}
            />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={StoresWithCoords}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};