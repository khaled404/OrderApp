import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {
  Container,
  Content,
  Text,
  View,
  Icon,
  Textarea,
  Form,
} from 'native-base';
import MinHeader from '../Components/Header/MinHeader';
import TabBar from '../Components/TabBar/TabBar';
import {minStyles} from '../Styles/Styles';
import Colors from '../Constants/Colors';
import CartModel from '../Components/DataModels/CartModel';
import {fonts} from '../Constants/appConfig';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FormButtom from '../Components/Buttons/FormButtom';
const DoneScreen = () => {
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

  const [togglePopUp, setToglePopUp] = useState(false);
  const [toTopAnim] = useState(new Animated.Value(hp('100%')));
  const [fadeAnim] = useState(new Animated.Value(0));
  const [star1, setStart1] = useState(false);
  const [star2, setStart2] = useState(false);
  const [star3, setStart3] = useState(false);
  const [star4, setStart4] = useState(false);
  const [star5, setStart5] = useState(false);

  useEffect(() => {
    if (togglePopUp) {
      Animated.spring(toTopAnim, {
        toValue: hp('0%'),
        duration: 350,
      }).start();
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 450,
      }).start();
    } else {
      Animated.spring(toTopAnim, {
        toValue: hp('100%'),
        duration: 250,
      }).start();
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 450,
      }).start();
    }
  }, [togglePopUp, toTopAnim]);
  return (
    <Container>
      <MinHeader title="تفاصيل الطلب" back titleLG />
      <Animated.View
        style={
          togglePopUp
            ? {
                ...styles.overlay,
                zIndex: 1,
                opacity: fadeAnim,
                backgroundColor: 'rgba(0, 0, 0,0.851)',
              }
            : styles.overlay
        }></Animated.View>
      <Animated.View
        style={{
          ...styles.popUpContainer,
          transform: [{translateY: toTopAnim}],
        }}>
        <TouchableWithoutFeedback
          onPress={() => {
            setToglePopUp(false);
            Keyboard.dismiss();
          }}>
          <View style={styles.container}>
            <View style={styles.content}>
              <Text style={styles.popUpTitle}>يرجي تقييم الخدمة</Text>
              <View style={styles.starsConatner}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    setStart1(a => !a);
                    setStart2(false);
                    setStart3(false);
                    setStart4(false);
                    setStart5(false);
                  }}>
                  <Icon
                    name="star"
                    type="FontAwesome5"
                    solid={star1}
                    style={[
                      styles.starIcon,
                      star1 && {color: Colors.colorYellow},
                    ]}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    setStart1(true);
                    setStart2(true);
                    setStart3(false);
                    setStart4(false);
                    setStart5(false);
                  }}>
                  <Icon
                    name="star"
                    type="FontAwesome5"
                    solid={star2}
                    style={[
                      styles.starIcon,
                      star2 && {color: Colors.colorYellow},
                    ]}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    setStart1(true);
                    setStart2(true);
                    setStart3(true);
                    setStart4(false);
                    setStart5(false);
                  }}>
                  <Icon
                    name="star"
                    type="FontAwesome5"
                    solid={star3}
                    style={[
                      styles.starIcon,
                      star3 && {color: Colors.colorYellow},
                    ]}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    setStart1(true);
                    setStart2(true);
                    setStart3(true);
                    setStart4(true);
                    setStart5(false);
                  }}>
                  <Icon
                    name="star"
                    type="FontAwesome5"
                    solid={star4}
                    style={[
                      styles.starIcon,
                      star4 && {color: Colors.colorYellow},
                    ]}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    setStart1(true);
                    setStart2(true);
                    setStart3(true);
                    setStart4(true);
                    setStart5(true);
                  }}>
                  <Icon
                    name="star"
                    type="FontAwesome5"
                    solid={star5}
                    style={[
                      styles.starIcon,
                      star5 && {color: Colors.colorYellow},
                    ]}
                  />
                </TouchableOpacity>
              </View>
              <Form
                style={{
                  width: '100%',
                  height: '100%',
                }}>
                <Text style={styles.textareaTitle}>ملاحظات</Text>
                <Textarea
                  returnKeyType="done"
                  keyboardType="default"
                  rowSpan={4}
                  bordered
                  style={styles.textarea}
                />
                <FormButtom
                  title="إرسال"
                  style={minStyles.button}
                  textStyle={{color: '#fff'}}
                  containerStyle={styles.minBtn}
                  onPress={() => {
                    setToglePopUp(false);
                    Keyboard.dismiss();
                  }}
                />
              </Form>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>
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
                <Text style={minStyles.orderNumberTitle}>تم التسليم </Text>
              </View>
            </View>
            <View
              style={{
                ...minStyles.orderImageContainer,
                marginTop: hp('1%'),
              }}>
              <Image
                source={require('../assets/images/done.png')}
                style={{...minStyles.imageResponsive, width: wp('18%')}}
              />
            </View>
          </View>
        </View>
        <View style={minStyles.boxTop}>
          <Text style={minStyles.boxTopTitle}>
            (: بالعافية عليك .. ولا تنسي تسمي
          </Text>
        </View>
        <View>
          <Text style={minStyles.minOrderTitle}>معلومات الطلب</Text>
          {cartItems.map(items => {
            return <CartModel more item={{...items}} key={items.id} />;
          })}
        </View>

        <View style={minStyles.buttonContainer}>
          <FormButtom
            title="تقييم الخدمة"
            style={{...minStyles.button, marginBottom: hp('-1%')}}
            textStyle={{color: '#fff'}}
            onPress={() => {
              setToglePopUp(true);
            }}
          />
          <FormButtom
            title="محتاج مساعدة؟"
            style={minStyles.button}
            textStyle={{color: '#fff'}}
          />
        </View>
      </Content>
      <TabBar />
    </Container>
  );
};
const styles = StyleSheet.create({
  popUpContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 2,
    transform: [{translateY: hp('100%')}],
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#FFF',
    width: '90%',
    height: '50%',
    borderRadius: 4,
    paddingHorizontal: wp('6%'),
    paddingVertical: wp('5%'),
    textAlign: 'center',
    alignItems: 'center',
  },
  popUpTitle: {
    fontFamily: fonts.bold,
    color: wp('4%'),
    color: Colors.primaryColor,
  },
  starsConatner: {
    flexDirection: 'row-reverse',
    marginTop: hp('1%'),
  },
  starIcon: {
    marginHorizontal: wp('.5%'),
    fontSize: wp('6%'),
    color: 'rgb(206, 206, 206)',
  },
  textareaTitle: {
    fontFamily: fonts.bold,
    fontSize: wp('3%'),
    marginRight: wp('6%'),
    marginBottom: hp('1%'),
    marginTop: hp('1%'),
    color: 'rgb(80, 80, 80)',
  },
  textarea: {
    borderRadius: 10,
  },
  minBtn: {
    marginHorizontal: wp('18%'),
  },
});
export default DoneScreen;
