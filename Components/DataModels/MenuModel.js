import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {View, Text, Icon} from 'native-base';
import {minStyles} from '../../Styles/Styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fonts} from '../../Constants/appConfig';
import Colors from '../../Constants/Colors';

const SearchModel = prpos => {
  const {image, title, description, price} = prpos.item;

  return (
    <View>
      <TouchableOpacity activeOpacity={0.6} onPress={prpos.onPress}>
        <View style={styles.container}>
          <View style={styles.imageContaner}>
            <Image source={image} style={minStyles.imageResponsive} />
          </View>
          <View style={styles.ItemData}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>{price}</Text>
          </View>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={prpos.onPress}>
            <Icon name="arrow-left" type="FontAwesome" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
    borderBottomColor: 'rgb(230, 230, 230)',
    borderBottomWidth: wp('.2%'),
    paddingBottom: hp('2%'),
    paddingTop: hp('2%'),
    position: 'relative',
  },
  imageContaner: {
    width: wp('23%'),
    paddingHorizontal: wp('1.3%'),
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: wp('3.4%'),
    color: 'rgb(80, 80, 80)',
  },
  description: {
    fontFamily: fonts.light,
    fontSize: wp('2.5%'),
    color: 'rgb(80, 80, 80)',
    width: '50%',
    alignSelf: 'flex-end',
    marginVertical: hp('.5%'),
  },
  price: {
    fontFamily: fonts.bold,
    fontSize: wp('3.3%'),
    color: Colors.primaryColor,
  },
  iconContainer: {
    position: 'absolute',
    right: wp('5%'),
    top: '60%',
  },
  icon: {
    fontSize: wp('3.7%'),
    color: 'rgb(208, 208, 208)',
  },
});

export default SearchModel;
