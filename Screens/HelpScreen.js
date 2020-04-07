import React from 'react';
import {StyleSheet, Image} from 'react-native';
import MinHeader from '../Components/Header/MinHeader';
import {Container, Content, View, Text, Icon} from 'native-base';
import TabBar from '../Components/TabBar/TabBar';
import {minStyles} from '../Styles/Styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fonts} from '../Constants/appConfig';

const HelpScreen = () => {
  return (
    <Container>
      <MinHeader title="محتاج مساعدة" back titleLG />
      <Content>
        <View style={minStyles.mainBorderBtn}>
          <View style={[minStyles.minMargin, styles.padding]}>
            <View style={styles.container}>
              <View style={styles.imagContainer}>
                <Image
                  source={require('../assets/images/exclamationMark.png')}
                  style={[minStyles.imageResponsive, {marginTop: hp('-3%')}]}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>تأخر طلبك عليك؟</Text>
                <Text style={styles.text}>تبي تضيف علي طلبك؟</Text>
                <Text style={styles.text}>أسرع طريقة تتواصل مع المطعم على</Text>
                <View style={styles.iconBox}>
                  <View style={styles.iconImg}>
                    <Image
                      source={require('../assets/images/phoneIcon.png')}
                      style={minStyles.imageResponsive}
                    />
                  </View>
                  <Text style={styles.iconText}>0000-000-0000</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[minStyles.minMargin, styles.padding]}>
          <View style={styles.container}>
            <View style={styles.imagContainer}>
              <Image
                source={require('../assets/images/faultMark.png')}
                style={[minStyles.imageResponsive, {marginTop: hp('-3%')}]}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>إذا عندك شكوي علي الخدمة</Text>
              <Text style={styles.text}>تواصل معنا وما يكون خاطرك إلا طيب</Text>
              <View style={styles.iconBox}>
                <View style={styles.iconImg}>
                  <Image
                    source={require('../assets/images/phoneIcon.png')}
                    style={minStyles.imageResponsive}
                  />
                </View>
                <Text style={styles.iconText}>0000-000-0000</Text>
              </View>
              <View style={[styles.iconBox, {marginTop: hp('1%')}]}>
                <View style={styles.iconImg}>
                  <Image
                    source={require('../assets/images/emailIcon.png')}
                    style={minStyles.imageResponsive}
                  />
                </View>
                <Text style={styles.iconText}>info@ifoods.com</Text>
              </View>
            </View>
          </View>
        </View>
      </Content>
      <TabBar />
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
  },
  padding: {
    paddingVertical: hp('4%'),
  },
  imagContainer: {
    width: wp('16%'),
  },
  textContainer: {
    marginRight: wp('5%'),
  },
  text: {
    color: 'rgb(80, 80, 80)',
    fontSize: wp('3.8%'),
    fontFamily: fonts.roman,
    marginBottom: hp('-1%'),
  },
  iconBox: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  iconImg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('6%'),
    height: wp('6%'),
    marginLeft: wp('2%'),
  },
  iconText: {
    fontFamily: fonts.roman,
    color: 'rgb(80, 80, 80)',
    fontSize: wp('3.7%'),
  },
});
export default HelpScreen;
