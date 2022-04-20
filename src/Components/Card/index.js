import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

// Imports Locais
import styles from './styles'
import StarRating from '../StarRating';

export default ({ props, itemData, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <View style={styles.cardImgWrapper}>
                    <Image
                        source={itemData.image}
                        resizeMode="cover"
                        style={styles.cardImg}
                    />
                </View>
                <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}>{itemData.title}</Text>
                    <StarRating ratings={itemData.ratings} reviews={itemData.reviews} />
                    <Text numberOfLines={2} style={styles.cardDetails}>{itemData.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};