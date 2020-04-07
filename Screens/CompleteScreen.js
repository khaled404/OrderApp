import React, {useState} from 'react';
import {StyleSheet, Modal} from 'react-native';
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
import LottieView from 'lottie-react-native';

const CompleteScreen = props => {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [loder, setloder] = useState(false);

  return (
    <Container>
      <MinHeader title="السلة" back cart shoppingTotal="4" />
      <Modal animationType="fade" transparent={false} visible={loder}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <LottieView
            source={require('../Animation/delivery.json')}
            autoPlay
            loop
          />
        </View>
      </Modal>

      <Content>
        <View style={minStyles.minMargin}>
          <Text style={minStyles.minTitle}>طريقة إستلام الطلب</Text>
          <View style={styles.top}>
            <RadioButton
              title="التوصيل للمنازل"
              active={active1}
              onRadioPress={() => {
                setActive1(true);
                setActive2(false);
              }}
            />
            <Text style={styles.price}>“سعر الخدمة 10 ريال”</Text>
          </View>
          <RadioButton
            title="استلام الطلب من الفرع"
            active={active2}
            onRadioPress={() => {
              setActive1(false);
              setActive2(true);
            }}
          />
        </View>
        <FormButtom
          title="التالي"
          style={minStyles.button}
          textStyle={{color: '#fff'}}
          containerStyle={styles.minBtn}
          onPress={() => {
            setloder(true);
            setTimeout(async () => {
              await props.navigation.navigate('CompleteRequest');
              setloder(false);
            }, 500);
          }}
        />
      </Content>
      <TabBar />
    </Container>
  );
};
const styles = StyleSheet.create({
  top: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: hp('-1%'),
    marginTop: hp('1%'),
  },
  price: {
    color: Colors.primaryColor,
    fontFamily: fonts.light,
    fontSize: wp('3%'),
    marginRight: wp('-2%'),
  },
  minBtn: {
    marginTop: hp('7%'),
  },
});
export default CompleteScreen;
