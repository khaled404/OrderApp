import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Icon} from 'native-base';
import {withNavigation} from 'react-navigation';
import {Touchable, fonts} from '../../Constants/appConfig';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../Constants/Colors';

const TabBar = props => {
  const {state, navigate} = props.navigation;
  // console.log(navigate);

  return (
    <View style={{...styles.tabContainer, ...props.containerStyle}}>
      <View style={styles.tabButton}>
        <Touchable
          onPress={() => {
            navigate('More');
          }}>
          <View style={styles.tabTextContainer}>
            <Icon
              name="ellipsis-h"
              type="FontAwesome5"
              style={
                state.routeName === 'More'
                  ? {
                      ...styles.tabIcon,
                      ...props.color,
                      color: Colors.primaryColor,
                    }
                  : {...styles.tabIcon, ...props.color}
              }
            />
            <Text
              style={
                state.routeName === 'More'
                  ? {
                      ...styles.tabText,
                      ...props.color,
                      color: Colors.primaryColor,
                    }
                  : {...styles.tabText, ...props.color}
              }>
              المزيد
            </Text>
          </View>
        </Touchable>
      </View>
      <View style={styles.tabButton}>
        <Touchable
          onPress={() => {
            navigate('Offers');
          }}>
          <View style={styles.tabTextContainer}>
            <Icon
              name="percent"
              type="FontAwesome"
              style={
                state.routeName === 'Offers'
                  ? {
                      ...styles.tabIcon,
                      ...props.color,
                      color: Colors.primaryColor,
                    }
                  : {...styles.tabIcon, ...props.color}
              }
            />
            <Text
              style={
                state.routeName === 'Offers'
                  ? {
                      ...styles.tabText,
                      ...props.color,
                      color: Colors.primaryColor,
                    }
                  : {...styles.tabText, ...props.color}
              }>
              العروض
            </Text>
          </View>
        </Touchable>
      </View>
      <View style={styles.tabButton}>
        <Touchable
          onPress={() => {
            navigate('Result');
          }}>
          <View style={styles.tabTextContainer}>
            <Icon
              name="home"
              type="FontAwesome"
              style={
                state.routeName === 'Result'
                  ? {
                      ...styles.tabIcon,
                      ...props.color,
                      color: Colors.primaryColor,
                    }
                  : {...styles.tabIcon, ...props.color}
              }
            />
            <Text
              style={
                state.routeName === 'Result'
                  ? {
                      ...styles.tabText,
                      ...props.color,
                      color: Colors.primaryColor,
                    }
                  : {...styles.tabText, ...props.color}
              }>
              الرئيسية
            </Text>
          </View>
        </Touchable>
      </View>
      <View style={styles.tabButton}>
        <Touchable
          onPress={() => {
            navigate('Orders');
          }}>
          <View style={styles.tabTextContainer}>
            <Icon
              name="clipboard-list"
              type="FontAwesome5"
              style={
                state.routeName === 'Orders'
                  ? {
                      ...styles.tabIcon,
                      ...props.color,
                      color: Colors.primaryColor,
                    }
                  : {...styles.tabIcon, ...props.color}
              }
            />
            <Text
              style={
                state.routeName === 'Orders'
                  ? {
                      ...styles.tabText,
                      ...props.color,
                      color: Colors.primaryColor,
                    }
                  : {...styles.tabText, ...props.color}
              }>
              الطلبات
            </Text>
          </View>
        </Touchable>
      </View>
      <View style={styles.tabButton}>
        <Touchable
          onPress={() => {
            navigate('Favorite');
          }}>
          <View style={styles.tabTextContainer}>
            <Icon
              name="star"
              type="FontAwesome"
              style={
                state.routeName === 'Favorite'
                  ? {
                      ...styles.tabIcon,
                      ...props.color,
                      color: Colors.primaryColor,
                    }
                  : {...styles.tabIcon, ...props.color}
              }
            />
            <Text
              style={
                state.routeName === 'Favorite'
                  ? {
                      ...styles.tabText,
                      ...props.color,
                      color: Colors.primaryColor,
                    }
                  : {...styles.tabText, ...props.color}
              }>
              المفضلة
            </Text>
          </View>
        </Touchable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopColor: '#d6d6d6',
    borderTopWidth: hp('.07%'),
    height: hp('8%'),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  tabButton: {
    width: wp('20%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTextContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  tabIcon: {
    color: 'rgb(195, 195, 195)',
    fontSize: wp('6%'),
  },
  tabText: {
    fontSize: wp('3%'),
    fontFamily: fonts.roman,
    color: 'rgb(80, 80, 80)',
  },
});
export default withNavigation(TabBar);
