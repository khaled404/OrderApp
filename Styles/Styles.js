import {StyleSheet} from 'react-native';
import Colors from '../Constants/Colors';
import {Size, fonts} from '../Constants/appConfig';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const minStyles = StyleSheet.create({
  redScreen: {
    backgroundColor: Colors.primaryColor,
    flex: 1,
  },
  logoContainer: {
    width: Size('w', 278),
    height: 250,
    marginRight: Size('w', 75),
    alignSelf: 'center',
  },
  imageResponsive: {
    width: '100%',
    resizeMode: 'contain',
    flex: 1,
  },
  btnContainerStyle: {
    marginHorizontal: 0,
  },
  button: {
    backgroundColor: Colors.primaryColor,
    width: '100%',
    alignSelf: 'center',
    marginBottom: hp('13%'),
  },
  minMargin: {
    marginRight: wp('6%'),
    marginLeft: wp('6%'),
  },
  mainBorderBtn: {
    borderBottomColor: 'rgb(230, 230, 230)',
    borderBottomWidth: wp('.2%'),
    paddingBottom: hp('1.5%'),
    paddingTop: hp('2%'),
  },
  minTitle: {
    color: Colors.primaryColor,
    fontFamily: wp('3%'),
    fontFamily: fonts.bold,
    marginTop: hp('2%'),
  },
  topHeaderContainer: {
    flexDirection: 'row-reverse',
    marginRight: wp('6%'),
    marginLeft: wp('6%'),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('-2%'),
  },
  orderImageContainer: {
    width: wp('22%'),
    justifyContent: 'center',
    alignItems: 'center',
    height: wp('30%'),
  },
  orderNumberContainer: {
    width: wp('45%'),
  },
  orderNumberTitle: {
    fontSize: wp('3%'),
    fontFamily: fonts.roman,
    color: 'rgb(80, 80, 80)',
  },
  timer: {
    fontSize: wp('5%'),
    fontFamily: fonts.light,
    color: 'rgb(201, 51, 65)',
    marginTop: hp('-2%'),
    textAlign: 'center',
  },
  minOrderTitle: {
    color: Colors.primaryColor,
    fontFamily: wp('3%'),
    fontFamily: fonts.bold,
    marginTop: hp('2%'),
    marginRight: wp('6%'),
    marginLeft: wp('6%'),
  },
  boxTop: {
    width: '100%',
    backgroundColor: Colors.primaryColor,
    paddingVertical: hp('1.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('2%'),
    flexDirection: 'row',
  },
  boxTopTitle: {
    color: '#fff',
    fontFamily: fonts.light,
    fontSize: wp('3.5%'),
  },
  buttonContainer: {
    marginTop: hp('-8%'),
  },
  price: {
    fontFamily: fonts.bold,
    fontSize: wp('3.5%'),
    color: 'rgb(201, 51, 65)',
  },
  labelContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginTop: hp('1%'),
  },
  label: {
    fontFamily: fonts.bold,
    fontSize: wp('3.5%'),
    color: 'rgb(78, 78, 78)',
  },
  boxToIcon: {
    fontSize: wp('2.8%'),
    color: '#fff',
    marginHorizontal: wp('1.2%'),
    marginTop: hp('.5%'),
  },
});
