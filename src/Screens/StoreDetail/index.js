import React, { useRef } from 'react';
import { View, Text, Image, Platform } from 'react-native';

// Dependencias
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Imports Locais
import styles from './styles';

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

export default ({ props, route }) => {

  const itemData = route.params.itemData;
  const navTitleView = useRef(null);

  return (
    <View style={styles.container}>
      <HeaderImageScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.3}
        renderHeader={() => (
          <Image source={itemData.image} style={styles.image} />
        )}
        renderForeground={() => (
          <View style={styles.titleContainer}>
            <Text style={styles.imageTitle}>{itemData.title}</Text>
          </View>
        )}
        renderFixedForeground={() => (
          <Animatable.View style={styles.navTitleView} ref={navTitleView}>
            <Text style={styles.navTitle}>{itemData.title}</Text>
          </Animatable.View>
        )}>
        <TriggeringView
          style={styles.section}
          onHide={() => navTitleView.current.fadeInUp(200)}
          onDisplay={() => navTitleView.current.fadeOut(100)}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Visão Geral</Text>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
              <FontAwesome name="star" size={16} color="#007f5f" />
              <Text style={{ marginHorizontal: 2 }}>{itemData.rating}</Text>
              <Text>({itemData.reviews})</Text>
            </View>
          </View>
        </TriggeringView>
        <View style={[styles.section, styles.sectionLarge]}>
          <Text style={styles.sectionContent}>{itemData.description}</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.categories}>
            {itemData.categories.map((category, index) => (
              <View style={styles.categoryContainer} key={index}>
                <FontAwesome name="tag" size={16} color="#fff" />
                <Text style={styles.category}>{category}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={[styles.section, { height: 250 }]}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{ flex: 1 }}
            region={{
              latitude: itemData.coordinate.latitude,
              longitude: itemData.coordinate.longitude,
              latitudeDelta: 0.00864195044303443,
              longitudeDelta: 0.000142817690068,
            }}>
            <MapView.Marker
              coordinate={itemData.coordinate}
              image={require('../../Assets/map_marker.png')}
            />
          </MapView>
        </View>
      </HeaderImageScrollView>
    </View>
  );
};