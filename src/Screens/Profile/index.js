import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper';

// Dependencias
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-share';

// Imports Local
import files from '../../Assets/filesBase64';
import styles from './styles'

export default props => {

  const myCustomShare = async () => {
    const shareOptions = {
      message: 'Peça sua próxima refeição no aplicativo Food Finder!. Eu já pedi mais de 10 refeições nele. Recomendo!',
      url: files.appLogo
    }

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log('Error => ', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri: 'https://i.ibb.co/NxzPmKz/Whats-App-Image-2022-01-19-at-17-59-12.jpg',
            }}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={[styles.title, {
              marginTop: 15,
              marginBottom: 5,
            }]}>
              Developer Cleisson
            </Title>
            <Caption
              style={styles.caption}>
              @cleisson_andrade
            </Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text
            style={{ marginLeft: 20 }}>
            Bahia, Brasil
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text
            style={{ marginLeft: 20 }}>
            073 98181-8181
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text
            style={{ marginLeft: 20 }}>
            cleisson@outlook.com.br
          </Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View style={[styles.infoBox, {
          borderRightColor: '#dddddd',
          borderRightWidth: 1
        }]}>
          <Title>R$140,50</Title>
          <Caption>Dinheiro</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>12</Title>
          <Caption>Pedidos</Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => { props.navigation.navigate('Bookmarks') }}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#007f5f" size={25} />
            <Text style={styles.menuItemText}>
              Seus Favoritos
            </Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => { }}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#007f5f" size={25} />
            <Text style={styles.menuItemText}>
              Pagamento
            </Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={myCustomShare}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#007f5f" size={25} />
            <Text style={styles.menuItemText}>
              Compartilhe o DeliveryLanches!
            </Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => { props.navigation.navigate('Support') }}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#007f5f" size={25} />
            <Text style={styles.menuItemText}>
              Suporte
            </Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => { props.navigation.navigate('Settings') }}>
          <View style={styles.menuItem}>
            <Icon name="cog-outline" color="#007f5f" size={25} />
            <Text style={styles.menuItemText}>
              Configurações
            </Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};
