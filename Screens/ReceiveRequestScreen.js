import React, {useState} from 'react';
import {StyleSheet, Image} from 'react-native';
import {View, Text, Container, Content} from 'native-base';
import MinHeader from '../Components/Header/MinHeader';
import TabBar from '../Components/TabBar/TabBar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../Constants/Colors';
import {fonts} from '../Constants/appConfig';
import {minStyles} from '../Styles/Styles';
import RadioButton from '../Components/Buttons/RadioButton';
import FormButtom from '../Components/Buttons/FormButtom';

const ReceiveRequestScreen = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  return (
    <Container>
      <MinHeader title="إتمام الطلب" back cart shoppingTotal="4" titleLG />
      <Content>
        <View style={minStyles.mainBorderBtn}>
          <View style={minStyles.minMargin}>
            <Text style={minStyles.minTitle}>طريقة إستلام الطلب</Text>
            <RadioButton
              title="استلام الطلب من الفرع"
              active={active1}
              onRadioPress={() => {
                setActive1(a => !a);
              }}
            />
            <Text style={[minStyles.minTitle, {marginTop: 0}]}>
              وسيلة الدفع
            </Text>

            <RadioButton
              title="الدفع عند الإستلام"
              active={active2}
              onRadioPress={() => {
                setActive2(a => !a);
              }}
            />
          </View>
        </View>
        <View style={minStyles.minMargin}>
          <View style={minStyles.labelContainer}>
            <Text style={minStyles.label}>الإجمالي</Text>
            <Text style={minStyles.price}>177 ريال</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/timeLg.png')}
            style={[
              minStyles.imageResponsive,
              {width: wp('30%'), height: hp('23%')},
            ]}
          />
          <Text style={styles.timer}>مدة تجهيز الطلب 30 دقيقة</Text>
        </View>
        <FormButtom
          title="تنفيذ الطلب"
          style={minStyles.button}
          textStyle={{color: '#fff'}}
        />
      </Content>
      <TabBar />
    </Container>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  price: {
    color: Colors.primaryColor,
    fontFamily: fonts.light,
    fontSize: wp('3%'),
    marginRight: wp('-2%'),
  },
  timer: {
    fontSize: wp('4.5%'),
    fontFamily: fonts.roman,
    color: 'rgb(80, 80, 80)',
  },
});
export default ReceiveRequestScreen;
