import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

// Dependencias
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Imports Local
import StarRating from '../../Components/StarRating';
import styles from './styles';

export default props => {

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.sliderContainer}>
                <Swiper
                    autoplay
                    horizontal={false}
                    height={200}
                    activeDotColor="#007f5f">
                    <View style={styles.slide}>
                        <Image
                            source={require('../../Assets/Banners/food-banner1.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../../Assets/Banners/food-banner2.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../../Assets/Banners/food-banner3.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                </Swiper>
            </View>

            <View style={styles.categoryContainer}>
                <TouchableOpacity
                    style={styles.categoryBtn}
                    onPress={() =>
                        props.navigation.navigate('ListOfStores', { title: 'Restaurantes' })
                    }>
                    <View style={styles.categoryIcon}>
                        <Ionicons name="ios-restaurant" size={35} color="#007f5f" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Restaurantes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.categoryBtn}
                    onPress={() =>
                        props.navigation.navigate('ListOfStores', { title: 'Centro de Fastfood' })
                    }>
                    <View style={styles.categoryIcon}>
                        <MaterialCommunityIcons
                            name="food-fork-drink"
                            size={35}
                            color="#007f5f"
                        />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Centro de Fastfood</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                    <View style={styles.categoryIcon}>
                        <MaterialCommunityIcons name="food" size={35} color="#007f5f" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Petiscos</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                    <View style={styles.categoryIcon}>
                        <Fontisto name="hotel" size={35} color="#007f5f" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Hoteis</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                    <View style={styles.categoryIcon}>
                        <Ionicons name="md-restaurant" size={35} color="#007f5f" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Jantar Fora</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                    <View style={styles.categoryIcon}>
                        <MaterialIcons name="expand-more" size={35} color="#007f5f" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Mostre Mais</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsWrapper}>
                <Text
                    style={{
                        alignSelf: 'center',
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#333',
                    }}>
                    Visto Recentemente
                </Text>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../../Assets/Banners/food-banner2.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>Lugar de comida incrível</Text>
                        <StarRating ratings={4} reviews={99} />
                        <Text style={styles.cardDetails}>
                            Descrição incrível para este lugar incrível
                        </Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../../Assets/Banners/food-banner3.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>Lugar de comida incrível</Text>
                        <StarRating ratings={4} reviews={99} />
                        <Text style={styles.cardDetails}>
                            Descrição incrível para este lugar incrível
                        </Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../../Assets/Banners/food-banner4.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>Lugar de comida incrível</Text>
                        <StarRating ratings={4} reviews={99} />
                        <Text style={styles.cardDetails}>
                            Descrição incrível para este lugar incrível
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};