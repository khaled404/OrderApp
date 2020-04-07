import React, {useState} from 'react';
import {StyleSheet, Modal} from 'react-native';
import {View, Container} from 'native-base';
import MinHeader from '../Components/Header/MinHeader';
import {FlatList} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TabBar from '../Components/TabBar/TabBar';
import LottieView from 'lottie-react-native';
import MenuModel from '../Components/DataModels/MenuModel';

const MenuScreen = props => {
  const menuData = [
    {
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/burger.png'),
      title: 'كلاسيك آنجوس برجر',
      description:
        'قطعة برجر آنجوس، 2 شريحة جبنة سويسري، طماطم، خس، بصل و صوص مايونيز بالفلفل، يقدم فى خبز كيزر بالشوفان',
      price: '50 ريال',
    },
    {
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/burger.png'),
      title: 'كلاسيك آنجوس برجر',
      description:
        'قطعة برجر آنجوس، 2 شريحة جبنة سويسري، طماطم، خس، بصل و صوص مايونيز بالفلفل، يقدم فى خبز كيزر بالشوفان',
      price: '50 ريال',
    },
    {
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/burger.png'),
      title: 'كلاسيك آنجوس برجر',
      description:
        'قطعة برجر آنجوس، 2 شريحة جبنة سويسري، طماطم، خس، بصل و صوص مايونيز بالفلفل، يقدم فى خبز كيزر بالشوفان',
      price: '50 ريال',
    },
    {
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/burger.png'),
      title: 'كلاسيك آنجوس برجر',
      description:
        'قطعة برجر آنجوس، 2 شريحة جبنة سويسري، طماطم، خس، بصل و صوص مايونيز بالفلفل، يقدم فى خبز كيزر بالشوفان',
      price: '50 ريال',
    },
    {
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/burger.png'),
      title: 'كلاسيك آنجوس برجر',
      description:
        'قطعة برجر آنجوس، 2 شريحة جبنة سويسري، طماطم، خس، بصل و صوص مايونيز بالفلفل، يقدم فى خبز كيزر بالشوفان',
      price: '50 ريال',
    },
    {
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/burger.png'),
      title: 'كلاسيك آنجوس برجر',
      description:
        'قطعة برجر آنجوس، 2 شريحة جبنة سويسري، طماطم، خس، بصل و صوص مايونيز بالفلفل، يقدم فى خبز كيزر بالشوفان',
      price: '50 ريال',
    },
    {
      id: JSON.stringify(Math.random() * 100),
      image: require('../assets/images/burger.png'),
      title: 'كلاسيك آنجوس برجر',
      description:
        'قطعة برجر آنجوس، 2 شريحة جبنة سويسري، طماطم، خس، بصل و صوص مايونيز بالفلفل، يقدم فى خبز كيزر بالشوفان',
      price: '50 ريال',
    },
  ];
  const [loder, setloder] = useState(false);

  return (
    <Container>
      <Modal animationType="fade" transparent={false} visible={loder}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <LottieView
            source={require('../Animation/pizza.json')}
            autoPlay
            loop
          />
        </View>
      </Modal>

      <MinHeader title="برجر الآنجوس" back cart titleLG />
      <View style={styles.container}>
        <FlatList
          data={menuData}
          renderItem={item => (
            <MenuModel
              {...item}
              onPress={() => {
                setloder(true);
                setTimeout(async () => {
                  await props.navigation.navigate('ChooseOrder');
                  setloder(false);
                }, 500);
              }}
            />
          )}
        />
      </View>
      <TabBar />
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: hp('16%'),
  },
  icons: {
    fontSize: wp('5.5%'),
    color: '#fff',
    marginRight: wp('4%'),
  },
});
export default MenuScreen;
