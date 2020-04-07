import React from 'react';
import {StyleSheet} from 'react-native';
import MinHeader from '../Components/Header/MinHeader';
import MapView, {Marker, PROVIDER_DEFAULT} from 'react-native-maps';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TabBar from '../Components/TabBar/TabBar';
import {Container} from 'native-base';

const MapScreen = props => {
  return (
    <Container>
      <MinHeader title="الخريطة" back />
      <MapView
        provider={PROVIDER_DEFAULT}
        style={styles.mapStyle}
        region={{
          latitude: 24.719329,
          longitude: 46.68,
          latitudeDelta: 0,
          longitudeDelta: 1.14,
        }}>
        <Marker
          coordinate={{latitude: 24.763, longitude: 46.5958}}
          image={require('../assets/images/marker.png')}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Marker
          coordinate={{latitude: 24.63, longitude: 46.7777}}
          image={require('../assets/images/marker.png')}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Marker
          coordinate={{latitude: 24.69, longitude: 46.3777}}
          image={require('../assets/images/marker.png')}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Marker
          coordinate={{latitude: 24.99, longitude: 46.3978}}
          image={require('../assets/images/marker.png')}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Marker
          coordinate={{latitude: 25.249, longitude: 46.27}}
          image={require('../assets/images/marker.png')}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Marker
          coordinate={{latitude: 25.249, longitude: 46.27}}
          image={require('../assets/images/marker.png')}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Marker
          coordinate={{latitude: 25.249, longitude: 46.27}}
          image={require('../assets/images/marker.png')}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Marker
          coordinate={{latitude: 25.349, longitude: 46.52}}
          image={require('../assets/images/marker.png')}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Marker
          coordinate={{latitude: 25.58, longitude: 46.82}}
          image={require('../assets/images/marker.png')}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Marker
          coordinate={{latitude: 25.2, longitude: 46.82}}
          image={require('../assets/images/marker.png')}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Marker
          coordinate={{latitude: 25.28, longitude: 46.69}}
          image={require('../assets/images/marker.png')}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Marker
          coordinate={{latitude: 24.88, longitude: 47.06}}
          image={require('../assets/images/marker.png')}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Marker
          coordinate={{latitude: 25.38, longitude: 46.9}}
          image={require('../assets/images/marker.png')}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
      </MapView>
      <TabBar />
    </Container>
  );
};
const styles = StyleSheet.create({
  mapStyle: {
    width: wp('100%'),
    height: hp('100%'),
  },
});
export default MapScreen;
