import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, Modal} from 'react-native';
import {Container, Text, View, Content, Item} from 'native-base';
import MinHeader from '../Components/Header/MinHeader';
import {minStyles} from '../Styles/Styles';
import FormButtom from '../Components/Buttons/FormButtom';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fonts} from '../Constants/appConfig';
import TabBar from '../Components/TabBar/TabBar';
import RadioButton from '../Components/Buttons/RadioButton';
import LottieView from 'lottie-react-native';
import {useSelector, useDispatch} from 'react-redux';
import {checked, minus, plus, addToCart} from '../store/actions/cart';
const ChooseOrderScreen = props => {
  const dispatch = useDispatch();
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const MenuData = useSelector(state => state.cart.MenuData);
  const [loder, setloder] = useState(false);
  return (
    <Container>
      <MinHeader title="برجر الآنجوس" back cart titleLG />
      <Modal animationType="fade" transparent={false} visible={loder}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <LottieView
            source={require('../Animation/cart2.json')}
            autoPlay
            loop
          />
        </View>
      </Modal>
      <Content>
        <View style={{...styles.topContainer, ...minStyles.mainBorderBtn}}>
          <View style={styles.imageContaner}>
            <Image
              source={require('../assets/images/burger.png')}
              style={minStyles.imageResponsive}
            />
          </View>
          <View style={styles.caption}>
            <Text style={styles.title}>كلاسيك آنجوس برجر</Text>
            <Text style={styles.description}>
              قطعة برجر آنجوس، 2 شريحة جبنة سويسري، طماطم، خس، بصل و صوص مايونيز
              بالفلفل، يقدم فى خبز كيزر بالشوفان
            </Text>
          </View>
        </View>
        {MenuData.map((sction, index) => {
          return (
            <View style={minStyles.mainBorderBtn} key={index}>
              <View style={minStyles.minMargin}>
                {sction.map(item => (
                  <View key={JSON.stringify(item.id)}>
                    {item.minTitle && (
                      <Text style={styles.label}>{item.minTitle}</Text>
                    )}
                    {item.price ? (
                      <RadioButton
                        key={item.id}
                        title={item.title}
                        price={item.price && `${item.price} ريال`}
                        quantity={item.quantity}
                        onRadioPress={() => {
                          dispatch(checked(item.id, item.checked));
                        }}
                        active={item.checked}
                        onPlus={() => {
                          dispatch(plus(item.id));
                        }}
                        onMinus={() => {
                          dispatch(minus(item.id));
                        }}
                      />
                    ) : (
                      <RadioButton
                        key={item.id}
                        title={item.title}
                        onRadioPress={() => {
                          dispatch(checked(item.id, item.checked));
                        }}
                        active={item.checked}
                      />
                    )}
                  </View>
                ))}
              </View>
            </View>
          );
        })}
        {/* {MenuData.map((sction, index) => (
          <View style={minStyles.mainBorderBtn} key={index}>
            <View style={minStyles.minMargin}>
              {sction.map(item => (
                <View key={item.id}>
                  {item.minTitle && (
                    <Text style={styles.label}>{item.minTitle}</Text>
                  )}
                  {item.price ? (
                    <RadioButton
                      key={item.id}
                      title={item.title}
                      price={item.price && `${item.price} ريال`}
                      quantity={item.quantity}
                      onRadioPress={() => {
                        dispatch(checked(item.id, item.checked));
                      }}
                      active={item.checked}
                      onPlus={() => {
                        dispatch(plus(item.id));
                      }}
                      onMinus={() => {
                        dispatch(minus(item.id));
                      }}
                    />
                  ) : (
                    <RadioButton
                      key={item.id}
                      title={item.title}
                      onRadioPress={() => {
                        dispatch(checked(item.id, item.checked));
                      }}
                      active={item.checked}
                    />
                  )}
                </View>
              ))}
            </View>
          </View>
        ))} */}
        <View style={styles.total}>
          <View style={styles.radioLabel}>
            <Text style={{...styles.label, marginBottom: undefined}}>
              الإجمالي
            </Text>
            <Text style={styles.price}>{`${totalAmount} ريال`}</Text>
          </View>
          <FormButtom
            title="اضف إلي السلة"
            style={minStyles.button}
            textStyle={{color: '#fff'}}
            containerStyle={styles.minBtn}
            onPress={() => {
              dispatch(addToCart());
              setloder(true);
              setTimeout(async () => {
                await props.navigation.navigate('Cart');
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
  labelStyle: {
    marginVertical: hp('.5%'),
  },
  topContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContaner: {
    width: '50%',
    height: hp('12.5%'),
    marginTop: hp('4%'),
  },
  caption: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: wp('3%'),
    color: 'rgb(80, 80, 80)',
    marginRight: wp('2%'),
  },
  description: {
    fontFamily: fonts.light,
    fontSize: wp('2.8%'),
    color: 'rgb(80, 80, 80)',
    textAlign: 'center',
    width: wp('70%'),
  },
  label: {
    fontFamily: fonts.bold,
    fontSize: wp('3%'),
    color: 'rgb(78, 78, 78)',
    marginBottom: hp('2%'),
  },
  radioBox: {
    flexDirection: 'row-reverse',
  },
  radioLabelBox: {
    width: '100%',
  },
  radioLabel: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('-1.1%'),
    marginBottom: hp('2%'),
    marginLeft: wp('2%'),
    marginRight: wp('4%'),
  },
  price: {
    fontFamily: fonts.bold,
    fontSize: wp('3%'),
    color: 'rgb(201, 51, 65)',
  },
  quantityControlar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityControl: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('7%'),
    height: wp('7%'),
    backgroundColor: 'rgb(233, 233, 233)',
  },
  quantityIcon: {
    color: 'rgb(194, 194, 194)',
    fontSize: wp('4.7%'),
  },
  quantityNum: {
    fontSize: wp('3.5%'),
    color: 'rgb(80, 80, 80)',
    fontFamily: fonts.roman,
    marginHorizontal: wp('4%'),
  },
  total: {
    marginTop: hp('2%'),
    marginHorizontal: wp('2.9%'),
  },
  minBtn: {
    marginHorizontal: wp('6%'),
    marginTop: hp('4%'),
  },
});
export default ChooseOrderScreen;
