import React, {useState, useEffect} from 'react';
import {StyleSheet, Modal, Image} from 'react-native';
import {Container, Content, View, Text} from 'native-base';
import MinHeader from '../Components/Header/MinHeader';
import TabBar from '../Components/TabBar/TabBar';
import {minStyles} from '../Styles/Styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fonts} from '../Constants/appConfig';
import CartModel from '../Components/DataModels/CartModel';
import FormButtom from '../Components/Buttons/FormButtom';
import LottieView from 'lottie-react-native';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

const CartScreen = props => {
  const cartData = useSelector(state => state.cart.cartData);
  // const totalAmount = useSelector(state => state.cart.totalAmount);
  const [data, setData] = useState([]);
  const [loder, setloder] = useState(false);
  const addData = async () => {
    if (cartData.length != 0) {
      try {
        await AsyncStorage.setItem('@cartData', JSON.stringify(cartData));
        console.log('done');
      } catch (e) {
        console.log('error');
      }
    }
  };
  const renderData = async () => {
    try {
      const value = await AsyncStorage.getItem('@cartData');
      if (value !== null) {
        setData(JSON.parse(value));
      }
    } catch (e) {
      console.log('error');
    }
  };
  useEffect(() => {
    addData();
  }, [cartData]);
  useEffect(() => {
    renderData();
  }, []);
  return (
    <Container>
      <MinHeader title="السلة" back cart shoppingTotal="4" />
      <Modal animationType="fade" transparent={false} visible={loder}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <LottieView
            source={require('../Animation/plate.json')}
            autoPlay
            loop
          />
        </View>
      </Modal>

      <Content>
        <View>
          <View style={minStyles.minMargin}>
            <Text style={styles.title}>معلومات الطلب</Text>
          </View>
        </View>
        {data.map(item => (
          <CartModel item={item} key={item.id} />
        ))}
        <View style={{...styles.total, ...minStyles.minMargin}}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>الإجمالي</Text>
            <Text style={styles.price}>{`78 ريال`}</Text>
          </View>
          <FormButtom
            title="اتمام الطلب"
            style={{
              ...minStyles.button,
              marginBottom: hp('8%'),
              marginTop: hp('4%'),
            }}
            textStyle={{color: '#fff'}}
            containerStyle={styles.minBtn}
            onPress={() => {
              setloder(true);
              setTimeout(async () => {
                await props.navigation.navigate('Complete');
                setloder(false);
              }, 500);
            }}
          />
        </View>
      </Content>
      <TabBar />
    </Container>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: wp('3.5%'),
    fontFamily: fonts.bold,
    marginTop: hp('3%'),
    color: 'rgb(201, 51, 65)',
  },
  price: {
    fontFamily: fonts.bold,
    fontSize: wp('3%'),
    color: 'rgb(201, 51, 65)',
  },
  labelContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: fonts.bold,
    fontSize: wp('3%'),
    color: 'rgb(78, 78, 78)',
  },
  minBtn: {
    marginHorizontal: wp('6%'),
    marginBottom: hp('6%'),
    marginTop: hp('6.5%'),
  },
});

export default CartScreen;
