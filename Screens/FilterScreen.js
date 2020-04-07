import React from 'react';
import {StyleSheet} from 'react-native';
import MinHeader from '../Components/Header/MinHeader';
import {Container, Content, Text, View} from 'native-base';
import TabBar from '../Components/TabBar/TabBar';
import Picker from '../Components/Inputs/Picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {minStyles} from '../Styles/Styles';
import FormButtom from '../Components/Buttons/FormButtom';
import Colors from '../Constants/Colors';

const FilterScreen = props => {
  const pickerItems1 = [
    {label: 'سوري', value: 'سوري'},
    {label: 'مصري', value: 'مصري'},
    {label: 'سعودي', value: 'سعودي'},
  ];
  const pickerItems2 = [
    {label: 'الأعلي تقييماً', value: 'الأعلي تقييماً'},
    {label: 'الأعلي تقييماً', value: 'الأعلي تقييماً'},
    {label: 'الأعلي تقييماً', value: 'الأعلي تقييماً'},
  ];
  const pickerItems3 = [
    {label: '10 كم', value: '10 كم'},
    {label: '8 كم', value: '8 كم'},
    {label: '5 كم', value: '5 كم'},
  ];
  return (
    <Container>
      <MinHeader title="فلترة البحث" done titleLG />
      <Content>
        <View style={[minStyles.minMargin, styles.container]}>
          <View style={styles.pickerContainer}>
            <Picker
              labelTitle="نوع الأكل"
              placeholder={{}}
              iconName="chevron-down"
              items={pickerItems1}
              onValueChange={value => console.log(value)}
              iconStyle={styles.iconStyle}
              iconName="caret-down"
            />
          </View>
          <View style={styles.pickerContainer}>
            <Picker
              labelTitle="التقييم"
              placeholder={{}}
              iconName="chevron-down"
              items={pickerItems2}
              onValueChange={value => console.log(value)}
              iconStyle={styles.iconStyle}
              iconName="caret-down"
            />
          </View>
          <View style={styles.filterBox}>
            <Picker
              labelTitle="البعد الجغرافي"
              placeholder={{}}
              iconName="chevron-down"
              items={pickerItems3}
              onValueChange={value => console.log(value)}
              iconStyle={styles.iconStyle}
              iconName="caret-down"
              containerStyle={{width: wp('52%')}}
            />
            <FormButtom
              title="عرض الخريطة"
              style={styles.button}
              textStyle={{color: '#fff'}}
              containerStyle={minStyles.btnContainerStyle}
              onPress={() => {
                props.navigation.navigate('Map');
              }}
            />
          </View>
        </View>
      </Content>
      <TabBar />
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: hp('4%'),
  },
  filterBox: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconStyle: {
    fontSize: wp('3%'),
  },
  button: {
    backgroundColor: Colors.primaryColor,
    width: wp('35%'),
    height: hp('6.8%'),
    marginTop: hp('3%'),
  },
  pickerContainer: {
    marginBottom: hp('2%'),
  },
});

export default FilterScreen;
