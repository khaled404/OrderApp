import React, {useState} from 'react';
import {StyleSheet, Image, Modal} from 'react-native';
import {Container, Icon, Text, View, Content} from 'native-base';
import MinHeader from '../Components/Header/MinHeader';
import {minStyles} from '../Styles/Styles';
import FormButtom from '../Components/Buttons/FormButtom';
import Colors from '../Constants/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fonts} from '../Constants/appConfig';
import TabBar from '../Components/TabBar/TabBar';
import MapView, {Marker, PROVIDER_DEFAULT} from 'react-native-maps';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';

const RestaurantScreen = props => {
  const restaurantMenuData = [
    {id: JSON.stringify(Math.random() * 100), type: 'برجر الآنجوس'},
    {id: JSON.stringify(Math.random() * 100), type: 'دجاج'},
    {id: JSON.stringify(Math.random() * 100), type: 'لحوم'},
    {id: JSON.stringify(Math.random() * 100), type: 'دجاج تندر'},
    {id: JSON.stringify(Math.random() * 100), type: 'أصناف جانبية'},
    {id: JSON.stringify(Math.random() * 100), type: 'المشروبات'},
  ];
  const [loder, setloder] = useState(false);
  const [loder2, setloder2] = useState(false);

  return (
    <Container>
      <MinHeader title="هاردييز" back cart />
      <Modal animationType="fade" transparent={false} visible={loder}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <LottieView
            source={require('../Animation/heart.json')}
            autoPlay
            loop
          />
        </View>
      </Modal>
      <Modal animationType="fade" transparent={false} visible={loder2}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <LottieView
            source={require('../Animation/fast-food.json')}
            autoPlay
            loop
          />
        </View>
      </Modal>

      <Content style={{marginBottom: hp('.2%')}}>
        <View>
          <View style={styles.container}>
            <View style={styles.imageContaner}>
              <Image
                source={require('../assets/images/searchImg4.png')}
                style={minStyles.imageResponsive}
              />
            </View>
            <FormButtom
              title="اضف إلي المفضلة"
              style={styles.button}
              textStyle={styles.buttonText}
              containerStyle={styles.buttonContainer}
              onPress={() => {
                setloder(true);
                setTimeout(async () => {
                  await props.navigation.navigate('Favorite');
                  setloder(false);
                }, 500);
              }}
            />
            <View style={styles.infoBox}>
              <View style={styles.infoContainer}>
                <View style={styles.starsContainer}>
                  <Icon
                    name="star"
                    type="FontAwesome5"
                    style={{...styles.star, color: '#f6bb2d'}}
                    solid
                  />
                  <Icon
                    name="star"
                    type="FontAwesome5"
                    style={{...styles.star, color: '#f6bb2d'}}
                    solid
                  />
                  <Icon
                    name="star"
                    type="FontAwesome5"
                    style={{...styles.star, color: '#f6bb2d'}}
                    solid
                  />
                  <Icon
                    name="star"
                    type="FontAwesome5"
                    style={{...styles.star, color: '#f6bb2d'}}
                    solid
                  />
                  <Icon
                    name="star"
                    type="FontAwesome5"
                    style={styles.star}
                    solid
                  />
                  <View>
                    <Text style={styles.evaluationText}>( 263 )</Text>
                  </View>
                </View>
                <Text style={styles.deliveryTime}>التوصيل خلال 30 دقيقة</Text>
              </View>
              <View style={styles.infoContainer}>
                <View style={styles.infoCotent}>
                  <Image
                    source={require('../assets/images/foodIcon.png')}
                    style={{
                      resizeMode: 'contain',
                      width: wp('3.8%'),
                      marginLeft: wp('1.7%'),
                      marginTop: wp('.7%'),
                    }}
                  />
                  <Text style={styles.text}>شرقي</Text>
                </View>
                <View style={styles.infoCotent}>
                  <Icon
                    name="clock"
                    type="FontAwesome5"
                    style={styles.minIcon}
                  />
                  <Text style={styles.text}>11:00 PM : 10:00 AM</Text>
                </View>
                <View style={styles.infoCotent}>
                  <Icon
                    name="money-bill-alt"
                    type="FontAwesome5"
                    style={styles.minIcon}
                  />
                  <Text style={styles.text}>الحد الأدني للطلب 30 ريال</Text>
                </View>
              </View>
            </View>
            <View style={styles.mapImage}>
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
                  coordinate={{latitude: 24.683, longitude: 46.6858}}
                  image={require('../assets/images/marker.png')}
                />
              </MapView>
            </View>
            <View style={styles.restaurant}>
              <Image
                source={require('../assets/images/foodIcon2.png')}
                style={{resizeMode: 'contain', width: wp('4.5%')}}
              />
              <Text style={styles.restaurantText}>قائمة الطعام</Text>
            </View>
          </View>
        </View>
        {restaurantMenuData.map(item => (
          <TouchableOpacity
            onPress={() => {
              setloder2(true);
              setTimeout(async () => {
                await props.navigation.navigate('Menu');
                setloder2(false);
              }, 500);
            }}
            key={item.id}>
            <View style={styles.itemsContainer}>
              <Text style={styles.itemsText}>{item.type}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </Content>

      <TabBar />
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContaner: {
    width: '55%',
    marginTop: hp('2%'),
  },
  buttonContainer: {
    marginHorizontal: undefined,
    marginTop: hp('-2%'),
  },
  button: {
    backgroundColor: Colors.primaryColor,
    height: hp('4.5%'),
    padding: wp('2%'),
  },
  buttonText: {
    color: '#fff',
    fontSize: wp('3%'),
  },
  infoContainer: {
    flexDirection: 'row-reverse',
    marginTop: hp('1.3%'),
    alignItems: 'center',
  },
  starsContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginLeft: wp('2%'),
  },
  star: {
    fontSize: wp('2%'),
    marginRight: wp('.1%'),
    color: '#d0d0d0',
  },
  evaluationText: {
    fontSize: wp('3.3%'),
    color: 'rgba(153, 153, 153, 0.902)',
    fontFamily: fonts.light,
    marginRight: wp('1.3%'),
    marginBottom: wp('.5%'),
  },
  deliveryTime: {
    color: 'rgba(201, 51, 65, 0.902)',
    fontFamily: fonts.light,
    fontSize: wp('3.5%'),
    marginRight: '4%',
  },
  infoBox: {
    alignItems: 'center',
  },
  infoCotent: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginHorizontal: wp('1.8%'),
  },
  minIcon: {
    color: 'rgb(78, 78, 78)',
    fontSize: wp('3.6%'),
    marginLeft: wp('1.7%'),
  },
  text: {
    fontSize: wp('2.6%'),
    fontFamily: fonts.roman,
    color: 'rgba(78, 78, 78, 0.902)',
  },
  mapImage: {
    width: '100%',
    height: hp('21.3%'),
    marginTop: hp('1.5%'),
  },
  mapStyle: {
    width: '100%',
    height: '100%',
  },

  restaurant: {
    backgroundColor: Colors.primaryColor,
    width: '100%',
    textAlign: 'left',
    flexDirection: 'row-reverse',
    paddingVertical: hp('1.7%'),
    paddingHorizontal: wp('5%'),
    alignItems: 'center',
  },
  restaurantIcon: {
    color: '#fff',
    fontSize: wp('4.5%'),
  },
  restaurantText: {
    color: '#fff',
    fontSize: wp('4%'),
    fontFamily: fonts.bold,
    marginRight: wp('3%'),
  },
  itemsContainer: {
    borderBottomColor: 'rgb(230, 230, 230)',
    borderBottomWidth: wp('.2%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: hp('3%'),
  },
  itemsText: {
    fontFamily: fonts.roman,
    color: 'rgb(80, 80, 80)',
    fontSize: wp('3%'),
  },
});
export default RestaurantScreen;
