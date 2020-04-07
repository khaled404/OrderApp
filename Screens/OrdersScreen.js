import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Container, Content, Icon} from 'native-base';
import MinHeader from '../Components/Header/MinHeader';
import TabBar from '../Components/TabBar/TabBar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../Constants/Colors';
import {fonts} from '../Constants/appConfig';
import OrdersModel from '../Components/DataModels/OrdersModel';

const OrdersScreen = () => {
  const orders = [
    {
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/searchImg1.png'),
      title: 'رقم الطلب 2121544',
      type: 'كلاسيك آنجوس برجر - سفن اب - سلطة ملفوف - حمص',
      time: 'السبت 2017-05-20',
      state: 'هذا الطلب قيد التنفيذ',
    },
    {
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/searchImg2.png'),
      title: 'رقم الطلب 2121544',
      type: 'كلاسيك آنجوس برجر - سفن اب - سلطة ملفوف - حمص',
      time: 'السبت 2017-05-20',
    },
    {
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/searchImg3.png'),
      title: 'رقم الطلب 2121544',
      type: 'كلاسيك آنجوس برجر - سفن اب - سلطة ملفوف - حمص',
      time: 'السبت 2017-05-20',
    },
    {
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/searchImg4.png'),
      title: 'رقم الطلب 2121544',
      type: 'كلاسيك آنجوس برجر - سفن اب - سلطة ملفوف - حمص',
      time: 'السبت 2017-05-20',
    },
    {
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/searchImg5.png'),
      title: 'رقم الطلب 2121544',
      type: 'كلاسيك آنجوس برجر - سفن اب - سلطة ملفوف - حمص',
      time: 'السبت 2017-05-20',
    },
    {
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/searchImg6.png'),
      title: 'رقم الطلب 2121544',
      type: 'كلاسيك آنجوس برجر - سفن اب - سلطة ملفوف - حمص',
      time: 'السبت 2017-05-20',
    },
  ];

  return (
    <Container>
      <MinHeader title="الطلبات" />
      <Content>
        <View style={{marginBottom: hp('7.5%')}}>
          <View style={styles.alert}>
            <Icon
              name="exclamation-triangle"
              type="FontAwesome"
              style={styles.alertIcon}
            />
            <Text style={styles.alertText}>
              حرصا منا عل تقديم خدمة افضل واسرع ساعدنا بتقييم طلباتك السابقة
              لديك عدد 2 طلب لم يتم تقييمهم
            </Text>
          </View>
          {orders.map(item => (
            <OrdersModel item={item} key={item.id} />
          ))}
        </View>
      </Content>
      <TabBar />
    </Container>
  );
};
const styles = StyleSheet.create({
  alert: {
    backgroundColor: '#f7f7f7',
    paddingVertical: hp('2%'),
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
    paddingHorizontal: wp('6%'),
  },
  alertIcon: {
    fontSize: wp('3%'),
    color: Colors.primaryColor,
    marginTop: hp('1%'),
    marginLeft: hp('1%'),
  },
  alertText: {
    color: Colors.primaryColor,
    fontSize: wp('3%'),
    fontFamily: fonts.light,
    width: '90%',
  },
});
export default OrdersScreen;
