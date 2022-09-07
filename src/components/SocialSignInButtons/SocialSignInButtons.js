import React from 'react';
import {View, Text } from 'react-native';
import CustomButton from '../CustomInput/CustomButton';

  const SocialSignInButtons = () => {
        const onSignInFacebook = () => {
            console.warn('SignInFacebook');
          };
        
          const onSignInGoogle = () => {
            console.warn('SignInGoogle');
          };
        
          const onSignInApple = () => {
            console.warn('SignInApple');
          };
  return (
    <>
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButtons;
