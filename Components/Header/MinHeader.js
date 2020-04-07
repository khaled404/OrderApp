import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {Header, Body, Title, Left, Icon, Right, View, Text} from 'native-base';
import {fonts, Size} from '../../Constants/appConfig';
import Colors from '../../Constants/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {withNavigation} from 'react-navigation';
import LottieView from 'lottie-react-native';

const MinHeader = props => {
  const [loder, setloder] = useState(false);

  return (
    <Header
      androidStatusBarColor={Colors.primaryColor}
      iosBarStyle={Colors.primaryColor}
      noShadow
      style={{backgroundColor: Colors.primaryColor}}>
      <Modal animationType="fade" transparent={false} visible={loder}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <LottieView
            source={require('../../Animation/cart2.json')}
            autoPlay
            loop
          />
        </View>
      </Modal>

      <Left>
        {props.back && (
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Icon
              name="chevron-left"
              type="FontAwesome"
              style={styles.backIcon}
            />
          </TouchableOpacity>
        )}
        {props.done && (
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Icon name="check" type="FontAwesome" style={styles.backIcon} />
          </TouchableOpacity>
        )}
      </Left>
      <Body
        style={
          props.titleLG
            ? {...styles.titleContainer, marginLeft: wp('19%')}
            : styles.titleContainer
        }>
        <Title style={styles.haederTitle}> {props.title} </Title>
      </Body>
      <Right>
        {props.cart ? (
          <TouchableOpacity
            onPress={() => {
              setloder(true);
              setTimeout(async () => {
                await props.navigation.navigate('Cart');
                setloder(false);
              }, 500);
            }}>
            <View style={styles.shoppingContainer}>
              {props.shoppingTotal && (
                <View style={styles.shoppingNumContainer}>
                  <Text style={styles.shoppingNum}>{props.shoppingTotal}</Text>
                </View>
              )}
              <Icon
                name="shopping-basket"
                type="FontAwesome"
                style={styles.rightIcon}
              />
            </View>
          </TouchableOpacity>
        ) : (
          props.children
        )}
      </Right>
    </Header>
  );
};
const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    flexDirection: 'row',
    // width: wp('100%'),
    // backgroundColor: '#000',
  },
  haederTitle: {
    fontFamily: fonts.bold,
    fontSize: Size('w', 36),
    color: '#fff',
    alignSelf: 'flex-start',
  },
  backIcon: {
    fontSize: wp('5%'),
    color: '#fff',
    marginLeft: wp('1.5%'),
    marginTop: wp('1%'),
  },
  rightIcon: {
    fontSize: wp('5.5%'),
    color: '#fff',
    marginRight: wp('2%'),
    zIndex: -1,
    position: 'relative',
  },
  shoppingContainer: {
    position: 'relative',
  },
  shoppingNumContainer: {
    backgroundColor: Colors.colorYellow,
    borderRadius: 50,
    width: wp('4%'),
    height: wp('4%'),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: wp('.7%'),
    top: hp('-.1%'),
  },
  shoppingNum: {
    color: '#fff',
    fontFamily: fonts.bold,
    fontSize: wp('3%'),
    marginTop: hp('-.7%'),
  },
});
export default withNavigation(MinHeader);
