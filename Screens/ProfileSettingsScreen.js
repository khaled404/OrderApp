import React, {useRef} from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import {
  View,
  Text,
  Container,
  Content,
  Form,
  Item,
  Label,
  Button,
} from 'native-base';
import {fonts} from '../Constants/appConfig';
import Colors from '../Constants/Colors';
import MinHeader from '../Components/Header/MinHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {minStyles} from '../Styles/Styles';
import FormButtom from '../Components/Buttons/FormButtom';
import Picker from '../Components/Inputs/Picker';
import TabBar from '../Components/TabBar/TabBar';

const ProfileSettingsScreen = () => {
  const pickerItems = [
    {label: 'جدة', value: 'جدة'},
    {label: 'جدة', value: 'جدة'},
    {label: 'جدة', value: 'جدة'},
  ];
  const email = useRef(null);

  return (
    <Container>
      <MinHeader title="إعدادات الملف الشخصي" titleLG />
      <Content>
        <KeyboardAvoidingView>
          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.userImage}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('../assets/images/userIcon.png')}
                  style={minStyles.imageResponsive}
                />
              </View>
              <Text style={styles.addImage}>اضافة الصورة الشخصية</Text>
            </View>
          </TouchableOpacity>
          <Form style={minStyles.minMargin}>
            <Item stackedLabel last style={styles.item}>
              <Label style={styles.label}>الاسم</Label>
              <TextInput
                style={styles.input}
                placeholder="الاسم"
                placeholderTextColor="rgb(80, 80, 80)"
                returnKeyType="next"
                blurOnSubmit={false}
                onSubmitEditing={() => {
                  email.current.focus();
                }}
              />
            </Item>
            <Item stackedLabel last style={styles.item}>
              <Label style={styles.label}>البريد الإلكتروني</Label>
              <TextInput
                style={styles.input}
                keyboardType="email-address"
                placeholder="user@email.com"
                placeholderTextColor="rgb(80, 80, 80)"
                ref={email}
              />
            </Item>
            <Picker
              iconName="chevron-down"
              labelTitle="المدينة"
              placeholder={{}}
              items={pickerItems}
              onValueChange={value => console.log(value)}
            />
            <Item stackedLabel last style={styles.item}>
              <Label style={styles.label}>رقم الجوال</Label>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="00966540000000"
                placeholderTextColor="rgb(80, 80, 80)"
              />
              <Button light style={styles.smallBtn}>
                <Text style={styles.smallBtnTitle}> تغيير </Text>
              </Button>
            </Item>

            <FormButtom
              title="تحديث"
              style={minStyles.button}
              textStyle={{color: '#fff'}}
              containerStyle={minStyles.btnContainerStyle}
            />
          </Form>
        </KeyboardAvoidingView>
      </Content>
      <TabBar />
    </Container>
  );
};
const styles = StyleSheet.create({
  titleTop: {
    fontSize: wp('5%'),
    fontFamily: fonts.bold,
    color: Colors.primaryColor,
    alignSelf: 'center',
    marginTop: hp('2%'),
    marginBottom: hp('3%'),
  },
  userImage: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  imageContainer: {
    width: wp('30%'),
  },
  addImage: {
    fontSize: wp('3.8%'),
    fontFamily: fonts.light,
    color: 'rgb(80, 80, 80)',
    marginTop: hp('3%'),
  },
  label: {
    alignSelf: 'flex-end',
    fontFamily: fonts.bold,
    fontSize: wp('3.3%'),
    color: 'rgb(80, 80, 80)',
    marginRight: wp('2.5%'),
  },
  input: {
    textAlign: 'right',
    alignSelf: 'flex-end',
    width: '104.6%',
    borderColor: 'rgb(227, 227, 227)',
    borderWidth: wp('.3%'),
    borderRadius: wp('2%'),
    marginTop: hp('2%'),
    paddingRight: wp('7%'),
    fontFamily: fonts.light,
    fontSize: wp('3%'),
  },
  item: {
    borderColor: 'transparent',
  },
  smallBtn: {
    position: 'absolute',
    left: wp('1.5%'),
    top: '51.8%',
    height: hp('6%'),
    backgroundColor: 'rgb(195, 195, 195)',
    borderRadius: 3.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallBtnTitle: {
    fontFamily: fonts.bold,
    fontSize: wp('3%'),
    color: '#fff',
  },
});
export default ProfileSettingsScreen;
