import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomInput/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const NewPasswordScreen = () => {
  const {control, handleSubmit} = useForm();

  const navigation = useNavigation();

  const onSubmitPressed = data => {
    console.warn(data);
    // console.warn('onSendPressed');
    navigation.navigate('Home');
  };
  const onSignInPressed = () => {
    //console.warn('onSignInPressed');
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <Text style={styles.text1}>Username *</Text>
          <CustomInput
            name="Username"
            placeholder="Enter your name"
            control={control}
            rules={{
              required: 'Username is required'
            }}
          />
          <Text style={styles.text1}>Confirmation Code *</Text>
          <CustomInput
            name="code"
            placeholder="Code"
            control={control}
            rules={{
              required: 'Code is required'
            }}
          />
        
        <>
          <Text style={styles.text2}>Password *</Text>
          <CustomInput 
          name="password" 
          placeholder="Enter your new password" 
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
          />
        </>
        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />

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
    marginRight: 220,
    fontWeight: 'bold',
    fontSize: 14,
  },
  text2: {
    marginRight: 273,
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default NewPasswordScreen;
