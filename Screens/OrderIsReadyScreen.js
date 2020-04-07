import React from 'react';
import {Image} from 'react-native';
import {Container, Content, Text, View, Icon} from 'native-base';
import MinHeader from '../Components/Header/MinHeader';
import TabBar from '../Components/TabBar/TabBar';
import {minStyles} from '../Styles/Styles';
import Colors from '../Constants/Colors';
import CartModel from '../Components/DataModels/CartModel';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FormButtom from '../Components/Buttons/FormButtom';

const OrderIsReadyScreen = () => {
  const cartItems = [
    {
      typeImag: true,
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/burger2.png'),
      title: 'كلاسيك آنجوس برجر',
      description: 'x  2 الحجم المتوسط بدون بصل ',
      price: '150 ريال',
    },
    {
      typeImag: true,
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/7up.png'),
      title: 'سفن اب',
      description: '',
      price: '3 ريال',
    },
    {
      typeImag: true,
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/salad.png'),
      title: 'سلطة ملفوف',
      description: '',
      price: '7 ريال',
    },
    {
      typeImag: true,
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/chickpeas.png'),
      title: 'حمص',
      description: '',
      price: '5 ريال',
    },
    {
      typeTotalAndDelivery: true,
      id: JSON.stringify(Math.random() * 100),
      titleTotal: 'مجموع الطلبات',
      titleDelivery: 'خدمة التوصيل',
      priceTotal: '165 ريال',
      priceDelivery: '6 ريال',
    },
    {
      typeTotal: true,
      id: JSON.stringify(Math.random() * 100),
      titleTotal: 'الإجمالي',
      priceTotal: '171 ريال',
    },
  ];

  return (
    <Container>
      <MinHeader title="تفاصيل الطلب" back titleLG />
      <Content>
        <View>
          <View style={minStyles.topHeaderContainer}>
            <View
              style={{...minStyles.orderImageContainer, marginTop: hp('1%')}}>
              <Image
                source={require('../assets/images/albaik.png')}
                style={minStyles.imageResponsive}
              />
            </View>
            <View style={minStyles.orderNumberContainer}>
              <Text style={minStyles.orderNumberTitle}>
                <Text
                  style={{
                    ...minStyles.orderNumberTitle,
                    color: Colors.primaryColor,
                  }}>
                  رقم الطلب
                </Text>{' '}
                25647
              </Text>
              <View>
                <Text style={minStyles.orderNumberTitle}>
                  الطلب جاهز للإستلام
                </Text>
              </View>
            </View>
            <View
              style={{
                ...minStyles.orderImageContainer,
                marginTop: heightPercentageToDP('4%'),
                marginBottom: heightPercentageToDP('1%'),
              }}>
              <Image
                source={require('../assets/images/FoodBag.png')}
                style={{...minStyles.imageResponsive, width: wp('18%')}}
              />
            </View>
          </View>
        </View>
        <View style={minStyles.boxTop}>
          <Text style={minStyles.boxTopTitle}>موقع المطعم علي الخريطة</Text>
          <Icon
            name="map-marker-alt"
            type="FontAwesome5"
            style={minStyles.boxToIcon}
          />
        </View>
        <View>
          <Text style={minStyles.minOrderTitle}> معلومات الطلب</Text>
          {cartItems.map(items => {
            return (
              <CartModel more onlyTotal item={{...items}} key={items.id} />
            );
          })}
        </View>
        <View style={minStyles.buttonContainer}>
          <FormButtom
            title="محتاج مساعدة؟"
            style={minStyles.button}
            textStyle={{color: '#fff'}}
            containerStyle={minStyles.minMargin}
          />
        </View>
      </Content>
      <TabBar />
    </Container>
  );
};

export default OrderIsReadyScreen;
