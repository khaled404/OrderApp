import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fonts} from '../../Constants/appConfig';
import {Icon} from 'native-base';
import Colors from '../../Constants/Colors';

const RadioButton = prpos => {
  return (
    <View style={styles.radioLabel}>
      <TouchableOpacity onPress={prpos.onRadioPress}>
        <View style={styles.radioBox}>
          <View style={styles.radioButton}>
            <View style={prpos.active ? styles.RadioActive : null}></View>
          </View>
          <Text style={styles.title}>{prpos.title}</Text>
        </View>
      </TouchableOpacity>
      {prpos.active && prpos.onPlus ? (
        <View style={styles.quantityControlar}>
          <TouchableOpacity activeOpacity={0.5} onPress={prpos.onPlus}>
            <View style={styles.quantityControl}>
              <Icon
                name="plus"
                type="FontAwesome5"
                style={styles.quantityIcon}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.quantityNum}>
            {prpos.quantity ? JSON.stringify(prpos.quantity) : '1'}
          </Text>
          <TouchableOpacity activeOpacity={0.5} onPress={prpos.onMinus}>
            <View style={styles.quantityControl}>
              <Icon
                name="minus"
                type="FontAwesome5"
                style={styles.quantityIcon}
              />
            </View>
          </TouchableOpacity>
        </View>
      ) : null}
      {prpos.price && <Text style={styles.price}>{prpos.price}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.bold,
    fontSize: wp('3%'),
    color: 'rgb(80, 80, 80)',
    marginRight: wp('2%'),
  },

  radioBox: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  radioButton: {
    width: wp('3%'),
    height: wp('3%'),
    backgroundColor: '#e9e9e9',
    marginTop: hp('.6%'),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioLabel: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('2%'),
    marginLeft: wp('2%'),
    marginRight: wp('4%'),
    marginTop: 9,
  },
  price: {
    fontFamily: fonts.bold,
    fontSize: wp('3%'),
    color: 'rgb(201, 51, 65)',
  },
  quantityControlar: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: '37%',
  },
  quantityControl: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('7%'),
    height: wp('7%'),
    backgroundColor: 'rgb(233, 233, 233)',
  },
  quantityIcon: {
    color: 'rgb(194, 194, 194)',
    fontSize: wp('4.7%'),
  },
  quantityNum: {
    fontSize: wp('3.5%'),
    color: 'rgb(80, 80, 80)',
    fontFamily: fonts.roman,
    marginHorizontal: wp('4%'),
  },
  RadioActive: {
    width: '50%',
    height: '50%',
    backgroundColor: Colors.colorYellow,
    borderRadius: 50,
  },
});

export default RadioButton;
