import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  View,
  Text,
  Container,
  Content,
  ActionSheet,
  Icon,
  Form,
} from 'native-base';
import MinHeader from '../Components/Header/MinHeader';
import TabBar from '../Components/TabBar/TabBar';
import {minStyles} from '../Styles/Styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fonts} from '../Constants/appConfig';
import Colors from '../Constants/Colors';
import FormButtom from '../Components/Buttons/FormButtom';

var BUTTONS = ['عربي', 'English', 'Cancel'];
var BUTTONS2 = ['Facebook', 'Whatsapp', 'Twitter', 'Massage', 'Cancel'];
var CANCEL_INDEX = 5;
const MoreScreen = props => {
  const [actionSheet, setActionSheet] = useState({});
  const {navigate} = props.navigation;
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
      <MinHeader title="ايفودز" />
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
          }}>
          <View style={styles.container}>
            <View style={styles.content}>
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
                <FormButtom
                  title="إرسال"
                  style={minStyles.button}
                  textStyle={{color: '#fff'}}
                  containerStyle={styles.minBtn}
                  onPress={() => {
                    setToglePopUp(false);
                  }}
                />
              </Form>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>

      <Content>
        <View style={styles.userContainer}>
          <View style={styles.imgContainer}>
            <Image
              source={require('../assets/images/userIcon.png')}
              style={minStyles.imageResponsive}
            />
          </View>
          <Text style={[styles.userInfo, {fontFamily: fonts.bold}]}>
            اسفرت وانورت يا هناي
          </Text>
          <Text style={styles.userInfo}>0000 - 000 - 0000</Text>
        </View>
        <View style={styles.moreContainer}>
          <TouchableOpacity
            onPress={() => {
              navigate('ProfileSettings');
            }}>
            <View style={styles.itemContainer}>
              <View
                style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
                <Icon name="cog" type="FontAwesome" style={styles.icon} />
                <Text style={styles.labol}>إعدادات الملف الشخصي</Text>
              </View>
              <View style={styles.leftBox}>
                <Icon
                  name="chevron-left"
                  type="FontAwesome"
                  style={styles.chevron}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.itemContainer}>
              <View
                style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
                <Icon
                  name="credit-card"
                  type="FontAwesome5"
                  style={styles.icon}
                  solid
                />
                <Text style={styles.labol}>تحديد طريقة الدفع</Text>
              </View>
              <View style={styles.leftBox}>
                <Icon
                  name="chevron-left"
                  type="FontAwesome"
                  style={styles.chevron}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigate('Help');
            }}>
            <View style={styles.itemContainer}>
              <View
                style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
                <Icon name="phone" type="FontAwesome" style={styles.icon} />
                <Text style={styles.labol}>اتصل بنا</Text>
              </View>
              <View style={styles.leftBox}>
                <Icon
                  name="chevron-left"
                  type="FontAwesome"
                  style={styles.chevron}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'عن ايفودز',
                'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ...',
                [{text: 'تم'}],
              );
            }}>
            <View style={styles.itemContainer}>
              <View
                style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
                <Icon
                  name="file-alt"
                  type="FontAwesome5"
                  style={styles.icon}
                  solid
                />
                <Text style={styles.labol}>عن ايفودز</Text>
              </View>
              <View style={styles.leftBox}>
                <Icon
                  name="chevron-left"
                  type="FontAwesome"
                  style={styles.chevron}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigate('Info');
            }}>
            <View style={styles.itemContainer}>
              <View
                style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
                <Icon
                  name="exclamation-triangle"
                  type="FontAwesome"
                  style={styles.icon}
                />
                <Text style={styles.labol}>سياسة الإستخدام</Text>
              </View>
              <View style={styles.leftBox}>
                <Icon
                  name="chevron-left"
                  type="FontAwesome"
                  style={styles.chevron}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.itemContainer}>
              <View
                style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
                <Icon name="flag" type="FontAwesome" style={styles.icon} />
                <Text style={styles.labol}>صوت لتصلك خدمتنا</Text>
              </View>
              <View style={styles.leftBox}>
                <Icon
                  name="chevron-left"
                  type="FontAwesome"
                  style={styles.chevron}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              ActionSheet.show(
                {
                  options: BUTTONS,
                  cancelButtonIndex: CANCEL_INDEX,
                  title: 'اختيار لغه',
                },
                buttonIndex => {
                  setActionSheet({clicked: BUTTONS[buttonIndex]});
                },
              );
            }}>
            <View style={styles.itemContainer}>
              <View
                style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
                <Icon name="globe" type="FontAwesome" style={styles.icon} />
                <Text style={styles.labol}>Change to English</Text>
              </View>
              <View style={styles.leftBox}>
                <Icon
                  name="chevron-left"
                  type="FontAwesome"
                  style={styles.chevron}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.itemContainer}>
              <View
                style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
                <Icon
                  name="mobile-alt"
                  type="FontAwesome5"
                  style={styles.icon}
                />
                <Text style={styles.labol}>إصدار التطبيق</Text>
              </View>
              <View style={styles.leftBox}>
                <Text style={styles.labol}>1.1</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setToglePopUp(true);
            }}>
            <View style={styles.itemContainer}>
              <View
                style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
                <Icon name="star" type="FontAwesome" style={styles.icon} />
                <Text style={styles.labol}>قيم التطبيق</Text>
              </View>
              <View style={styles.leftBox}>
                <Icon
                  name="chevron-left"
                  type="FontAwesome"
                  style={styles.chevron}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              ActionSheet.show(
                {
                  options: BUTTONS2,
                  cancelButtonIndex: CANCEL_INDEX,
                  title: 'شارك التطبيق',
                },
                buttonIndex => {
                  setActionSheet({clicked: BUTTONS2[buttonIndex]});
                },
              );
            }}>
            <View style={styles.itemContainer}>
              <View
                style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
                <Icon name="share-alt" type="FontAwesome" style={styles.icon} />
                <Text style={styles.labol}>شارك التطبيق</Text>
              </View>
              <View style={styles.leftBox}>
                <Icon
                  name="chevron-left"
                  type="FontAwesome"
                  style={styles.chevron}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('هل انت متاكد انك تريد تسجيل الخروج', '', [
                {text: 'لا', style: 'cancel'},
                {text: 'نعم'},
              ]);
            }}>
            <View style={[styles.itemContainer, {borderBottomWidth: 0}]}>
              <View
                style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
                <Icon name="sign-out" type="FontAwesome" style={styles.icon} />
                <Text style={styles.labol}>تسجيل الخروج</Text>
              </View>
              <View style={styles.leftBox}>
                <Icon
                  name="chevron-left"
                  type="FontAwesome"
                  style={styles.chevron}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Content>
      <TabBar />
    </Container>
  );
};
const styles = StyleSheet.create({
  userContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: hp('2%'),
  },
  imgContainer: {
    width: wp('28%'),
    marginBottom: hp('2%'),
  },
  moreContainer: {
    marginBottom: hp('10%'),
  },
  userInfo: {
    fontFamily: fonts.roman,
    color: 'rgb(77, 77, 77)',
    fontSize: wp('3%'),
  },
  itemContainer: {
    flexDirection: 'row-reverse',
    paddingHorizontal: wp('6%'),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('2%'),
    borderBottomColor: 'rgb(230, 230, 230)',
    borderBottomWidth: wp('.2%'),
  },
  icon: {
    fontSize: wp('3.5%'),
    color: 'rgb(77, 77, 77)',
  },
  labol: {
    fontSize: wp('3.4%'),
    marginRight: wp('3%'),
    color: 'rgb(77, 77, 77)',
    fontFamily: fonts.light,
    marginBottom: hp('.3%'),
  },
  chevron: {
    fontSize: wp('2%'),
    color: 'rgb(77, 77, 77)',
  },
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
    height: '30%',
    borderRadius: 4,
    paddingHorizontal: wp('6%'),
    paddingVertical: wp('5%'),
    textAlign: 'center',
    alignItems: 'center',
  },
  starsConatner: {
    flexDirection: 'row-reverse',
    marginTop: hp('1%'),
  },
  starIcon: {
    marginHorizontal: wp('.5%'),
    fontSize: wp('8%'),
    color: 'rgb(206, 206, 206)',
    marginBottom: hp('2%'),
  },
});

export default MoreScreen;
