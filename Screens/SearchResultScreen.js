import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, FlatList, Modal} from 'react-native';
import {View, Icon, Container} from 'native-base';
import MinHeader from '../Components/Header/MinHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TabBar from '../Components/TabBar/TabBar';
import SearchModel from '../Components/DataModels/SearchModel';
import LottieView from 'lottie-react-native';

const SearchData = [
  {
    id: '1',
    image: require('../assets/images/searchImg1.png'),
    title: 'الطازج',
    type: 'شرقي',
    time: '11:00 PM : 10:00 AM',
    minimum: 'الحد الأدني للطلب 30 ريال',
    deliveryTime: 'التوصيل خلال 30 دقيقة',
    evaluation: '( 263 )',
  },
  {
    id: '2',
    image: require('../assets/images/searchImg2.png'),
    title: 'البيك',
    type: 'شرقي',
    time: '11:00 PM : 10:00 AM',
    minimum: 'الحد الأدني للطلب 30 ريال',
    deliveryTime: 'التوصيل خلال 30 دقيقة',
    evaluation: '( 263 )',
  },
  {
    id: '3',
    image: require('../assets/images/searchImg3.png'),
    title: 'برجر كينج',
    type: 'شرقي',
    time: '11:00 PM : 10:00 AM',
    minimum: 'الحد الأدني للطلب 30 ريال',
    deliveryTime: 'التوصيل خلال 30 دقيقة',
    evaluation: '( 263 )',
  },
  {
    id: '4',
    image: require('../assets/images/searchImg4.png'),
    title: 'هاردييز',
    type: 'شرقي',
    time: '11:00 PM : 10:00 AM',
    minimum: 'الحد الأدني للطلب 30 ريال',
    deliveryTime: 'التوصيل خلال 30 دقيقة',
    evaluation: '( 263 )',
  },
  {
    id: '5',
    image: require('../assets/images/searchImg5.png'),
    title: 'مندي الرياض',
    type: 'شرقي',
    time: '11:00 PM : 10:00 AM',
    minimum: 'الحد الأدني للطلب 30 ريال',
    deliveryTime: 'التوصيل خلال 30 دقيقة',
    evaluation: '( 263 )',
  },
  {
    id: '6',
    image: require('../assets/images/searchImg6.png'),
    title: 'بوبايز',
    type: 'شرقي',
    time: '11:00 PM : 10:00 AM',
    minimum: 'الحد الأدني للطلب 30 ريال',
    deliveryTime: 'التوصيل خلال 30 دقيقة',
    evaluation: '( 263 )',
  },
];
const SearchResultScreen = props => {
  const [loder, setloder] = useState(false);

  return (
    <Container>
      <Modal animationType="fade" transparent={false} visible={loder}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <LottieView
            source={require('../Animation/food-carousel.json')}
            autoPlay
            loop
          />
        </View>
      </Modal>

      <MinHeader title="المطاعم" back>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('filter');
          }}>
          <Icon name="filter" type="FontAwesome" style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Search');
          }}>
          <Icon name="search" type="FontAwesome" style={styles.icons} />
        </TouchableOpacity>
      </MinHeader>
      <View style={styles.container}>
        <FlatList
          data={SearchData}
          renderItem={item => (
            <SearchModel
              {...item}
              onPress={() => {
                setloder(true);
                setTimeout(async () => {
                  await props.navigation.navigate('Restauran');
                  setloder(false);
                }, 500);
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
export default SearchResultScreen;
