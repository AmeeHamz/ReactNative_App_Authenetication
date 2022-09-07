import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomInput/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ForgotPasswordScreen = () => {
  const {control, handleSubmit} = useForm();
const navigation = useNavigation();

  const onSendPressed = (data) => {
    console.warn(data);
   // console.warn('onSendPressed');
   navigation.navigate('NewPassword');
  };
  const onSignInPressed = () => {
   // console.warn('onSignInPressed');
   navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <>
          <Text style={styles.text1}>Enter your name *</Text>
          <CustomInput
          name="code"
          control={control}
            placeholder="Username"
            rules={{
              required: 'Username is required'
            }}
          />
        </>
        <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />

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
  text1: {
    textAlign: 'left',
    marginRight: 232,
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default ForgotPasswordScreen;
