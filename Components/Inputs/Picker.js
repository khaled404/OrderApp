import React from 'react';
import {StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fonts} from '../../Constants/appConfig';
import {Icon, Label, View} from 'native-base';
const Picker = prpos => {
  return (
    <View style={{...styles.pickerContainer, ...prpos.containerStyle}}>
      {prpos.labelTitle && (
        <Label style={styles.label}>{prpos.labelTitle}</Label>
      )}
      <View style={styles.pickerContent}>
        <Icon
          name={prpos.iconName}
          type="FontAwesome5"
          style={{...styles.pickerIcon, ...prpos.iconStyle}}
        />
        <RNPickerSelect
          onValueChange={prpos.onValueChange}
          placeholder={prpos.placeholder}
          style={{...pickerSelectStyles, ...prpos.style}}
          useNativeAndroidPickerStyle={false}
          items={prpos.items}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    alignSelf: 'flex-end',
    fontFamily: fonts.bold,
    fontSize: wp('3.3%'),
    color: 'rgb(80, 80, 80)',
    marginRight: wp('2.5%'),
  },
  pickerContainer: {marginTop: hp('1%')},
  pickerContent: {
    marginTop: hp('1%'),
    width: '100%',
    alignSelf: 'flex-end',
    borderColor: 'rgb(227, 227, 227)',
    borderWidth: wp('.3%'),
    borderRadius: wp('2%'),
    position: 'relative',
    paddingHorizontal: wp('3%'),
    backgroundColor: '#fff',
  },
  pickerIcon: {
    fontSize: wp('2%'),
    position: 'absolute',
    left: '8%',
    top: wp('5.5%'),
    color: 'rgb(80, 80, 80)',
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontFamily: fonts.light,
    fontSize: wp('3.7%'),
    color: 'rgb(80,80,80)',
    marginRight: 3,
  },
  inputAndroid: {
    fontFamily: fonts.light,
    fontSize: wp('3.7%'),
    color: 'rgb(80,80,80)',
    marginRight: 3,
  },
});

export default Picker;
