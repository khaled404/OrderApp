import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {View, Text, Icon} from 'native-base';
import {minStyles} from '../../Styles/Styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fonts} from '../../Constants/appConfig';

const SearchModel = prpos => {
  const {
    image,
    title,
    type,
    time,
    minimum,
    deliveryTime,
    evaluation,
    remove,
  } = prpos.item;

  return (
    <View>
      <TouchableOpacity activeOpacity={0.6} onPress={prpos.onPress}>
        <View style={styles.container}>
          <View style={styles.imageContaner}>
            <Image source={image} style={minStyles.imageResponsive} />
          </View>
          <View style={styles.ItemData}>
            <View style={styles.infoTop}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.starsContainer}>
                  <Icon
                    name="star"
                    type="FontAwesome5"
                    style={{...styles.star, color: '#f6bb2d'}}
                    solid
                  />
                  <Icon
                    name="star"
                    type="FontAwesome5"
                    style={{...styles.star, color: '#f6bb2d'}}
                    solid
                  />
                  <Icon
                    name="star"
                    type="FontAwesome5"
                    style={{...styles.star, color: '#f6bb2d'}}
                    solid
                  />
                  <Icon
                    name="star"
                    type="FontAwesome5"
                    style={{...styles.star, color: '#f6bb2d'}}
                    solid
                  />
                  <Icon
                    name="star"
                    type="FontAwesome5"
                    style={styles.star}
                    solid
                  />
                  <View>
                    <Text style={styles.evaluationText}>{evaluation}</Text>
                  </View>
                </View>
              </View>
              {prpos.remove ? (
                <View style={{position: 'absolute', right: 0, top: 0}}>
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
              ) : (
                <Text style={styles.deliveryTime}>{deliveryTime}</Text>
              )}
            </View>
            <View style={styles.infoCenter}>
              <View style={styles.typeContiner}>
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
              <View style={styles.timeContiner}>
                <Icon
                  name="clock-o"
                  type="FontAwesome"
                  style={styles.minIcon}
                />
                <Text style={styles.text}>{time}</Text>
              </View>
            </View>
            <View style={styles.infoBottom}>
              <Icon name="money" type="FontAwesome" style={styles.minIcon} />
              <Text style={styles.text}>{minimum}</Text>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    width: wp('77%'),

    position: 'relative',
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: wp('3.2%'),
    color: 'rgb(80, 80, 80)',
  },
  star: {
    fontSize: wp('2%'),
    // marginRight: wp('.1%'),
    color: '#d0d0d0',
    marginTop: hp('.5%'),
  },
  evaluationText: {
    fontSize: wp('3%'),
    color: 'rgba(153, 153, 153, 0.902)',
    fontFamily: fonts.light,
    marginRight: wp('1.3%'),
    // marginBottom: wp('.4%'),
  },
  deliveryTime: {
    color: 'rgba(201, 51, 65, 0.902)',
    fontFamily: fonts.light,
    fontSize: wp('3.5%'),
    marginRight: '4%',
    position: 'absolute',
    right: wp('-3%'),
    top: 0,
  },
  titleContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  starsContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginLeft: wp('2%'),
  },
  infoCenter: {
    flexDirection: 'row-reverse',
    marginVertical: hp('1.5%'),
  },
  typeContiner: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  timeContiner: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginLeft: wp('9%'),
  },
  infoBottom: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
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
export default SearchModel;
