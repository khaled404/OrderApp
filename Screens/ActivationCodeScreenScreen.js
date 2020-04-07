import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {minStyles} from '../Styles/Styles';
import {Text, Container, Content, View} from 'native-base';
import {fonts} from '../Constants/appConfig';
import CodeInput from '../Components/Inputs/CodeInput';
import FormButtom from '../Components/Buttons/FormButtom';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ActivationCodeScreen = props => {
  const [placeholderState, setPlaceholderState] = useState(true);
  const [placeholderText, setPlaceholderText] = useState('0000');
  const placeholderHandler = text => {
    if (text.length > 0) {
      setPlaceholderState(false);
      setPlaceholderText(text);
    } else {
      setPlaceholderState(true);
      setPlaceholderText('0000');
    }
  };
  return (
    <Container style={minStyles.redScreen}>
      <Content>
        <View style={minStyles.logoContainer}>
          <Image
            source={require('../assets/images/logo.png')}
            style={minStyles.imageResponsive}
          />
        </View>
        <View style={styles.titleContaoner}>
          <Text style={styles.formTitle}>تم إرسال رسالة قصيرة علي جوالك</Text>
          <Text style={styles.formTitle}>بكود التفعيل</Text>
        </View>
        <CodeInput
          text={placeholderText}
          placeholderState={placeholderState}
          textHandler={placeholderHandler}
          label={false}
          maxLength={4}
        />

        <FormButtom
          title="تأكيد"
          onPress={() => {
            props.navigation.navigate('RegistrationInformation');
          }}
          white
        />
      </Content>
    </Container>
  );
};
const styles = StyleSheet.create({
  titleContaoner: {
    marginBottom: hp('3%'),
  },
  formTitle: {
    color: '#fff',
    fontSize: wp('4%'),
    fontFamily: fonts.bold,
    alignSelf: 'center',
  },
});
export default ActivationCodeScreen;
