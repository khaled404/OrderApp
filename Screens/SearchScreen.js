import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  StatusBar,
  ImageBackground,
  Modal,
} from 'react-native';
import {View, Container, Content} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Picker from '../Components/Inputs/Picker';
import TabBar from '../Components/TabBar/TabBar';
import {fonts} from '../Constants/appConfig';
import {minStyles} from '../Styles/Styles';
import FormButtom from '../Components/Buttons/FormButtom';
import LottieView from 'lottie-react-native';

const SearchScreen = props => {
  const pickerItems1 = [
    {label: 'جدة', value: 'جدة'},
    {label: 'جدة', value: 'جدة'},
  ];
  const pickerItems2 = [
    {label: 'جدة', value: 'جدة'},
    {label: 'جدة', value: 'جدة'},
  ];
  const [loder, setloder] = useState(false);
  return (
    <Container>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Modal animationType="fade" transparent={false} visible={loder}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <LottieView
            source={require('../Animation/search-location.json')}
            autoPlay
            loop
          />
        </View>
      </Modal>
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={{width: '100%', height: '100%'}}
        imageStyle={{resizeMode: 'cover'}}>
        <Content>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/logo.png')}
              style={minStyles.imageResponsive}
            />
          </View>
          <View style={minStyles.minMargin}>
            <Picker
              placeholder={{label: 'الحي', value: null}}
              iconName="chevron-down"
              items={pickerItems1}
              style={pickerStyles}
              onValueChange={value => console.log(value)}
              containerStyle={{marginTop: 0}}
              iconStyle={styles.iconStyle}
              iconName="caret-down"
            />
            <Picker
              placeholder={{label: 'التصنيف', value: null}}
              iconName="chevron-down"
              items={pickerItems2}
              style={pickerStyles}
              onValueChange={value => console.log(value)}
              containerStyle={{marginTop: 0}}
              iconStyle={styles.iconStyle}
              iconName="caret-down"
            />
            <FormButtom
              title="حفظ"
              style={minStyles.button}
              textStyle={{color: '#fff'}}
              containerStyle={minStyles.btnContainerStyle}
              onPress={() => {
                setloder(true);
                setTimeout(async () => {
                  await props.navigation.navigate('Result');
                  setloder(false);
                }, 500);
              }}
            />
          </View>
        </Content>
        <TabBar
          color={{color: '#fff'}}
          containerStyle={styles.tabBarContainerStyle}
        />
      </ImageBackground>
    </Container>
  );
};
const styles = StyleSheet.create({
  logoContainer: {
    width: wp('50%'),
    marginRight: wp('10%'),
    marginTop: hp('3%'),
    marginBottom: hp('7%'),
    alignSelf: 'center',
  },
  iconStyle: {
    fontSize: wp('3%'),
  },
  tabBarContainerStyle: {
    backgroundColor: 'transparent',
    borderTopWidth: hp('.1%'),
    borderTopColor: '#ffffff50',
  },
});
const pickerStyles = StyleSheet.create({
  placeholder: {
    fontFamily: fonts.light,
    fontSize: wp('3.7%'),
    color: 'rgb(80, 80, 80)',
  },
});

export default SearchScreen;
