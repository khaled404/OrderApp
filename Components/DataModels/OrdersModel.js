import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {View, Text, Icon} from 'native-base';
import {minStyles} from '../../Styles/Styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fonts} from '../../Constants/appConfig';

const OrdersModel = prpos => {
  const {image, title, type, time, state} = prpos.item;

  return (
    <View>
      <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.container}>
          <View style={styles.imageContaner}>
            <Image source={image} style={minStyles.imageResponsive} />
          </View>
          <View>
            <View style={styles.infoTop}>
              <View style={styles.infoTop}>
                <Text style={styles.title}>{title}</Text>
                <View>
                  {state ? (
                    <Text style={styles.state}>{state}</Text>
                  ) : (
                    <View style={{position: 'absolute', top: hp('-2%')}}>
                      <TouchableOpacity>
                        <View style={styles.removeContainer}>
                          <Icon
                            name="times"
                            type="FontAwesome5"
                            style={styles.removeIcon}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            </View>
            <View style={styles.infoBottom}>
              <View style={styles.iconContainer}>
                <Icon
                  name="calendar"
                  type="FontAwesome5"
                  style={styles.minIcon}
                />
                <Text style={styles.text}>{time}</Text>
              </View>
              <View style={styles.iconContainer}>
                {/* <Icon
                  name="utensils"
                  type="FontAwesome5"
                  style={styles.minIcon}
                /> */}
                <Image
                  source={require('../../assets/images/foodIcon.png')}
                  style={{
                    resizeMode: 'contain',
                    width: wp('3.8%'),
                    marginLeft: wp('1.7%'),
                    marginTop: wp('.7%'),
                  }}
                />

                <Text style={styles.text}>{type}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    borderBottomColor: 'rgb(230, 230, 230)',
    borderBottomWidth: wp('.2%'),
    paddingBottom: hp('1%'),
    paddingTop: hp('1%'),
  },
  imageContaner: {
    width: wp('20%'),
  },
  infoTop: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('77%'),
    position: 'relative',
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: wp('3.2%'),
    color: 'rgb(80, 80, 80)',
  },
  state: {
    color: 'rgba(201, 51, 65, 0.902)',
    fontFamily: fonts.light,
    fontSize: wp('3.5%'),
    position: 'absolute',
    top: hp('-2.5%'),
  },
  infoBottom: {
    justifyContent: 'center',
  },
  iconContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginTop: hp('1%'),
  },
  minIcon: {
    color: 'rgb(78, 78, 78)',
    fontSize: wp('3.5%'),
    marginLeft: wp('1.7%'),
  },
  text: {
    fontSize: wp('3%'),
    fontFamily: fonts.roman,
    color: 'rgba(78, 78, 78, 0.902)',
  },
  removeContainer: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('6%'),
    height: wp('6%'),
    backgroundColor: 'rgb(233, 233, 233)',
  },
  removeIcon: {
    color: 'rgb(194, 194, 194)',
    fontSize: wp('4%'),
  },
});
export default OrdersModel;
