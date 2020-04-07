import React from 'react';
import {Image, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {Container, View} from 'native-base';
import MinHeader from '../Components/Header/MinHeader';
import TabBar from '../Components/TabBar/TabBar';

import {minStyles} from '../Styles/Styles';
import {heightPercentageToDP} from 'react-native-responsive-screen';
const OffersScreen = () => {
  const banners = [
    {
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/banner1.png'),
    },
    {
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/banner2.png'),
    },
    {
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/banner3.png'),
    },
    {
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/banner1.png'),
    },
    {
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/banner2.png'),
    },
    {
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/banner3.png'),
    },
  ];

  return (
    <Container>
      <MinHeader title="المفضلة" />
      <View style={styles.container}>
        <FlatList
          data={banners}
          renderItem={item => (
            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.imagContainer}>
                <Image
                  source={item.item.image}
                  style={minStyles.imageResponsive}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <TabBar />
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: heightPercentageToDP('-5%'),
    marginBottom: heightPercentageToDP('16%'),
    zIndex: -1,
  },
  imagContainer: {
    height: heightPercentageToDP('31%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default OffersScreen;
