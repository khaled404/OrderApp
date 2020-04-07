import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Icon, Container} from 'native-base';
import MinHeader from '../Components/Header/MinHeader';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TabBar from '../Components/TabBar/TabBar';
import SearchModel from '../Components/DataModels/SearchModel';

const FavoriteScreen = props => {
  const SearchData = [
    {
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/searchImg1.png'),
      title: 'الطازج',
      type: 'شرقي',
      time: '11:00 PM : 10:00 AM',
      minimum: 'الحد الأدني للطلب 30 ريال',
      deliveryTime: 'التوصيل خلال 30 دقيقة',
      evaluation: '( 263 )',
    },
    {
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/searchImg2.png'),
      title: 'البيك',
      type: 'شرقي',
      time: '11:00 PM : 10:00 AM',
      minimum: 'الحد الأدني للطلب 30 ريال',
      deliveryTime: 'التوصيل خلال 30 دقيقة',
      evaluation: '( 263 )',
    },
    {
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/searchImg3.png'),
      title: 'برجر كينج',
      type: 'شرقي',
      time: '11:00 PM : 10:00 AM',
      minimum: 'الحد الأدني للطلب 30 ريال',
      deliveryTime: 'التوصيل خلال 30 دقيقة',
      evaluation: '( 263 )',
    },
    {
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/searchImg4.png'),
      title: 'هاردييز',
      type: 'شرقي',
      time: '11:00 PM : 10:00 AM',
      minimum: 'الحد الأدني للطلب 30 ريال',
      deliveryTime: 'التوصيل خلال 30 دقيقة',
      evaluation: '( 263 )',
    },
    {
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/searchImg5.png'),
      title: 'مندي الرياض',
      type: 'شرقي',
      time: '11:00 PM : 10:00 AM',
      minimum: 'الحد الأدني للطلب 30 ريال',
      deliveryTime: 'التوصيل خلال 30 دقيقة',
      evaluation: '( 263 )',
    },
    {
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/searchImg6.png'),
      title: 'بوبايز',
      type: 'شرقي',
      time: '11:00 PM : 10:00 AM',
      minimum: 'الحد الأدني للطلب 30 ريال',
      deliveryTime: 'التوصيل خلال 30 دقيقة',
      evaluation: '( 263 )',
    },
  ];

  return (
    <Container>
      <MinHeader title="المفضلة" />
      <View style={styles.container}>
        <FlatList
          data={SearchData}
          renderItem={item => (
            <SearchModel
              {...item}
              remove
              onPress={() => {
                props.navigation.navigate('Restauran');
              }}
            />
          )}
        />
      </View>
      <TabBar />
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: hp('15%'),
  },
  icons: {
    fontSize: wp('5.5%'),
    color: '#fff',
    marginRight: wp('4%'),
  },
});
export default FavoriteScreen;
