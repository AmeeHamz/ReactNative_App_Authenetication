import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomInput/CustomButton';
import { useNavigation } from '@react-navigation/native';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import {useForm} from 'react-hook-form';

const ConfirmEmailScreen = () => {
  const {control, handelSubmit} = useForm();

  const navigation = useNavigation ();

  const onConfirmPressed = (data) => {
   console.warn(data);
   navigation.navigate('Home');
  };

  const onSignInPressed = () => {
    console.warn('onSignInPressed');
    // navigation.navigate('SignIn');  
  };
  const onResendPressed = () => {
   console.warn('onResendPressed');
  //  navigation.navigate('Home');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <CustomInput
          name="code"
          control={control}
          placeholder="Enter your confirmation code"
          rules={{
            required: 'Confirmation code is required',
          }}
        />

        <CustomButton text="Confirm"
         onPress={handelSubmit(onConfirmPressed)} 
         />

        <CustomButton
          text="Resend code"
          onPress={onResendPressed}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ConfirmEmailScreen;
