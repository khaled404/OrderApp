import React from 'react';
import {View, Text, Container, Content} from 'native-base';
import MinHeader from '../Components/Header/MinHeader';
import TabBar from '../Components/TabBar/TabBar';
import {minStyles} from '../Styles/Styles';

const InfoScreen = props => {
  return (
    <Container>
      <MinHeader title="سياسة الإستخدام" back titleLG />
      <Content>
        <View style={minStyles.minMargin}>
          <Text style={minStyles.minTitle}>سياسة الإستخدام</Text>
          <Text style={minStyles.orderNumberTitle}>
            لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
            ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور
            او فلاير على سبيل المثال ... او نماذج مواقع انترنت ...
          </Text>
        </View>
      </Content>
      <TabBar />
    </Container>
  );
};
export default InfoScreen;
