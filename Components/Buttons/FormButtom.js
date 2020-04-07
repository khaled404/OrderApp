import React from 'react';
import {StyleSheet, TouchableNativeFeedback} from 'react-native';
import {View, Text} from 'native-base';
import {Size, fonts, Touchable} from '../../Constants/appConfig';
import Colors from '../../Constants/Colors';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const FormButtom = props => {
  return (
    <View style={{...styles.buttonContainer, ...props.containerStyle}}>
      <Touchable
        onPress={props.onPress}
        background={
          props.white
            ? TouchableNativeFeedback.Ripple('rgba(0,0,0,.5)')
            : TouchableNativeFeedback.Ripple('rgba(250,250,250,.5)')
        }>
        <View style={{...styles.buttonContent, ...props.style}}>
          <Text style={{...styles.buttonText, ...props.textStyle}}>
            {props.title}
          </Text>
        </View>
      </Touchable>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: widthPercentageToDP('6%'),
    marginTop: Size('h', 33),
  },
  buttonContent: {
    height: Size('h', 100),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: Size('h', 10),
  },
  buttonText: {
    fontSize: Size('w', 30),
    color: Colors.primaryColor,
    fontFamily: fonts.bold,
  },
});

export default FormButtom;
