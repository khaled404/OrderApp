import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Size, fonts} from '../../Constants/appConfig';
import Colors from '../../Constants/Colors';
import {minStyles} from '../../Styles/Styles';

const CodeInput = props => {
  return (
    <View style={minStyles.minMargin}>
      <View style={styles.inputContainer}>
        {props.label && <Text style={styles.label}>+966 - </Text>}
        <View style={styles.inputContent}>
          {props.label ? (
            <Text
              style={
                props.placeholderState
                  ? styles.placeholder
                  : {...styles.placeholder, color: '#fff'}
              }>
              {props.text}
            </Text>
          ) : (
            <Text
              style={
                props.placeholderState
                  ? {
                      ...styles.placeholder,
                      alignSelf: 'center',
                    }
                  : {
                      ...styles.placeholder,
                      color: '#fff',
                      alignSelf: 'center',
                    }
              }>
              {props.text}
            </Text>
          )}
          <TextInput
            style={
              props.label
                ? styles.input
                : {...styles.input, textAlign: 'center'}
            }
            onChangeText={props.textHandler}
            keyboardType="numeric"
            maxLength={props.maxLength}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  formContainer: {
    // marginHorizontal: Size('w', 80),
  },
  inputContainer: {
    backgroundColor: Colors.colorDark,
    borderRadius: Size('w', 10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: Size('w', 40.715),
    fontFamily: fonts.light,
    color: '#fff',
    letterSpacing: Size('w', 5),
  },
  inputContent: {
    position: 'relative',
    width: Size('w', 223),
  },
  placeholder: {
    position: 'absolute',
    top: Size('h', 7),
    fontSize: Size('w', 40.715),
    fontFamily: fonts.light,
    color: Colors.primaryColor,
    letterSpacing: Size('w', 5),
  },
  input: {
    color: '#fff',
    fontSize: Size('w', 40.715),
    fontFamily: fonts.light,
    letterSpacing: Size('w', 5),
    alignItems: 'center',
    justifyContent: 'center',
    color: 'transparent',
  },
});

export default CodeInput;
