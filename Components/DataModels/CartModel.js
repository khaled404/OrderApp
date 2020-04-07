import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Icon, View, Text} from 'native-base';
import {minStyles} from '../../Styles/Styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fonts} from '../../Constants/appConfig';

const CartModel = prpos => {
  const {
    image,
    title,
    description,
    price,
    typeImag,
    typeTotalAndDelivery,
    typeTotal,
    titleTotal,
    titleDelivery,
    priceTotal,
    priceDelivery,
  } = prpos.item;
  if (typeImag || image) {
    return (
      <View style={minStyles.mainBorderBtn}>
        <View style={{...styles.container, ...minStyles.minMargin}}>
          {!prpos.more && (
            <TouchableOpacity>
              <View style={styles.removeContainer}>
                <Icon
                  name="times"
                  type="FontAwesome5"
                  style={styles.removeIcon}
                />
              </View>
            </TouchableOpacity>
          )}
          <View
            style={
              !prpos.more
                ? styles.imgContainer
                : {...styles.imgContainer, marginRight: undefined}
            }>
            <Image source={{uri: image}} style={minStyles.imageResponsive} />
          </View>
          <View
            style={
              !prpos.more ? styles.infoBox : {...styles.infoBox, width: '82%'}
            }>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
            <Text style={styles.price}>{`${price} ريال`}</Text>
          </View>
        </View>
      </View>
    );
  } else if (typeTotalAndDelivery && prpos.more && !prpos.onlyTotal) {
    return (
      <View style={minStyles.mainBorderBtn}>
        <View style={minStyles.minMargin}>
          <View style={{...styles.infoBox, width: '100%'}}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{titleTotal}</Text>
            </View>
            <Text style={styles.price}>{priceTotal}</Text>
          </View>
          <View style={{...styles.infoBox, width: '100%', marginTop: hp('2%')}}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{titleDelivery}</Text>
            </View>
            <Text style={styles.price}>{priceDelivery}</Text>
          </View>
        </View>
      </View>
    );
  } else if (typeTotal && prpos.more) {
    return (
      <View
        style={{
          ...styles.infoBox,
          ...minStyles.minMargin,
          width: '88%',
          marginTop: hp('2%'),
          marginBottom: hp('12%'),
        }}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleTotal}>{titleTotal}</Text>
        </View>
        <Text style={styles.priceTotal}>{priceTotal}</Text>
      </View>
    );
  } else {
    return null;
  }
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  imgContainer: {
    width: wp('15%'),
    padding: wp('1.5%'),
    marginRight: wp('2%'),
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
  titleContainer: {
    marginRight: wp('2%'),
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: wp('3.3%'),
    color: 'rgb(80, 80, 80)',
  },
  description: {
    fontFamily: fonts.roman,
    fontSize: wp('2.2%'),
    width: '80%',
    textAlign: 'right',
    alignSelf: 'flex-end',
    color: 'rgb(182, 182, 182)',
  },

  infoBox: {
    flexDirection: 'row-reverse',
    width: '70%',
    justifyContent: 'space-between',
  },
  price: {
    fontFamily: fonts.bold,
    fontSize: wp('3%'),
    color: 'rgb(201, 51, 65)',
  },
  titleTotal: {
    fontFamily: fonts.bold,
    fontSize: wp('3.8%'),
    color: 'rgb(80, 80, 80)',
  },
  priceTotal: {
    fontFamily: fonts.bold,
    fontSize: wp('3.8%'),
    color: 'rgb(201, 51, 65)',
  },
});
export default CartModel;
