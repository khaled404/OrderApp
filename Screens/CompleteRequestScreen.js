import React, {useState} from 'react';
import {StyleSheet, Modal} from 'react-native';
import {Container, Text, View, Content, Textarea, Form} from 'native-base';
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
import MapView, {Marker, PROVIDER_DEFAULT} from 'react-native-maps';
import LottieView from 'lottie-react-native';

const CompleteRequestScreen = props => {
  const [active, setActive] = useState(true);
  const [loder, setloder] = useState(false);

  return (
    <Container>
      <MinHeader title="السلة" back cart shoppingTotal="4" />
      <Modal animationType="fade" transparent={false} visible={loder}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <LottieView
            source={require('../Animation/food.json')}
            autoPlay
            loop
          />
        </View>
      </Modal>

      <Content>
        <View style={minStyles.minMargin}>
          <Text style={minStyles.minTitle}>وسيلة الدفع</Text>
          <RadioButton
            title="الدفع عند الإستلام"
            active={active}
            onRadioPress={() => {
              setActive(a => !a);
            }}
          />
          <Text style={styles.mapTitle}>حدد مكانك علي الخريطة</Text>
        </View>
        <View style={styles.mapImage}>
          <MapView
            provider={PROVIDER_DEFAULT}
            style={styles.mapStyle}
            region={{
              latitude: 24.719329,
              longitude: 46.68,
              latitudeDelta: 0,
              longitudeDelta: 1.14,
            }}>
            <Marker
              coordinate={{latitude: 24.683, longitude: 46.6858}}
              image={require('../assets/images/marker.png')}
            />
          </MapView>
        </View>
        <View style={minStyles.minMargin}>
          <Form>
            <Text style={styles.mapTitle}>اكتب عنوانك بالتفصيل</Text>
            <Textarea rowSpan={3} bordered style={styles.textarea} />
            <FormButtom
              title="تنفيذ الطلب"
              style={minStyles.button}
              textStyle={{color: '#fff'}}
              containerStyle={styles.minBtn}
              onPress={() => {
                setloder(true);
                setTimeout(async () => {
                  await props.navigation.navigate('WaitForAcceptance');
                  setloder(false);
                }, 500);
              }}
            />
          </Form>
        </View>
      </Content>
      <TabBar />
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContaner: {
    width: '50%',
    height: hp('16%'),
  },
  mapTitle: {
    fontFamily: fonts.bold,
    fontSize: wp('3%'),
    marginRight: wp('6%'),
    marginBottom: hp('1%'),
  },
  textarea: {
    borderRadius: 10,
  },
  minBtn: {
    marginHorizontal: undefined,
    marginTop: hp('6%'),
  },
  mapImage: {
    width: '100%',
    height: hp('21.3%'),
    marginTop: hp('1.5%'),
    marginBottom: hp('1.5%'),
  },
  mapStyle: {
    width: '100%',
    height: '100%',
  },
});
export default CompleteRequestScreen;
