import React from 'react';
import { SafeAreaView } from 'react-native';
import CustomText, { TextTypes } from '../components/CustomText';

export function SecondScreen(): React.ReactElement {

  return (<SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <CustomText type={TextTypes.H1}>Pension</CustomText>
  </SafeAreaView>);
}
