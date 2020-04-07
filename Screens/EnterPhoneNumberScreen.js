import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {minStyles} from '../Styles/Styles';
import Colors from '../Constants/Colors';
import {Text, Container, Content, View, Icon} from 'native-base';
import {fonts} from '../Constants/appConfig';
import CodeInput from '../Components/Inputs/CodeInput';
import FormButtom from '../Components/Buttons/FormButtom';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const EnterPhoneNumberScreen = prpos => {
  const [checkBoxState, setCheckBoxState] = useState(false);
  const [placeholderState, setPlaceholderState] = useState(true);
  const [placeholderText, setPlaceholderText] = useState('000000000');
  const [toBottomAnimtion] = useState(new Animated.Value(hp('-20%')));
  const [opacityAnimtion] = useState(new Animated.Value(0));

  const placeholderHandler = text => {
    if (text.length > 0) {
      setPlaceholderState(false);
      setPlaceholderText(text);
    } else {
      setPlaceholderState(true);
      setPlaceholderText('000000000');
    }
  };
  useEffect(() => {
    Animated.spring(toBottomAnimtion, {
      toValue: hp('0%'),
      duration: 450,
      delay: 500,
    }).start();
    Animated.spring(opacityAnimtion, {
      toValue: 1,
      duration: 450,
      delay: 500,
    }).start();
  });
  return (
    <Container style={minStyles.redScreen}>
      <Content>
        <Animated.View
          style={[
            minStyles.logoContainer,
            {
              transform: [{translateY: toBottomAnimtion}],
              opacity: opacityAnimtion,
            },
          ]}>
          <Image
            source={require('../assets/images/logo.png')}
            style={minStyles.imageResponsive}
          />
        </Animated.View>
        <Text style={styles.formTitle}>تسجيل الدخول/ إنشاء حساب</Text>
        <CodeInput
          text={placeholderText}
          placeholderState={placeholderState}
          textHandler={placeholderHandler}
          label={true}
          maxLength={8}
        />
        <View style={[styles.termsContainer, minStyles.minMargin]}>
          <TouchableOpacity
            onPress={() => {
              setCheckBoxState(checked => !checked);
            }}>
            <View
              style={[
                styles.checkBox,
                checkBoxState && {backgroundColor: Colors.colorYellow},
              ]}>
              <Icon
                name="check"
                type="FontAwesome"
                style={styles.checkBoxActive}
              />
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.termsText}>
              أقر أنني قرأت جميع الشروط والاحكام وسياسة الخصوصية
            </Text>
            <Text style={styles.termsText}> الخاصة بالتطبيق </Text>
          </View>
        </View>
        <FormButtom
          title="إستمرار"
          onPress={() => {
            prpos.navigation.navigate('ActivationCodeScreen');
          }}
          white
          containerStyle={minStyles.minMargin}
        />
        <View style={styles.langContainer}>
          <TouchableOpacity>
            <Text style={styles.lang}>Change to English</Text>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );
};
const styles = StyleSheet.create({
  formTitle: {
    color: '#fff',
    fontSize: wp('4%'),
    fontFamily: fonts.bold,
    alignSelf: 'center',
    marginBottom: hp('4%'),
  },
  termsContainer: {
    flexDirection: 'row-reverse',
    marginTop: hp('2.3%'),
  },
  checkBox: {
    borderRadius: 3,
    backgroundColor: '#fff',
    borderColor: '#fff',
    width: wp('4%'),
    height: wp('4%'),
    marginTop: 3,
    marginTop: wp('1.2%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBoxActive: {
    fontSize: wp('3.2%'),
    color: '#fff',
  },
  termsText: {
    marginRight: wp('2%'),
    fontSize: 12,
    fontFamily: fonts.light,
    color: '#fff',
    borderBottomColor: '#fff',
    borderBottomWidth: 0.2,
    alignSelf: 'flex-end',
  },
  langContainer: {
    marginTop: hp('10%'),
    marginBottom: hp('5%'),
  },
  lang: {
    alignSelf: 'center',
    fontSize: wp('3%'),
    fontFamily: fonts.light,
    color: '#fff',
  },
});
export default EnterPhoneNumberScreen;
