import * as React from 'react';
import { View } from 'react-native';
import { PerfilPicture } from '../../../components/molecules/PerfilPicture';
import { Button } from '../../../components/atoms/Button';

const Login = () => (
  <View style={{ backgroundColor: 'white', height: '100%' }}>
    <PerfilPicture
      source="https://cdn.myanimelist.net/images/characters/8/437727.jpg"
    />
    <Button
      color="blue"
      onPress={() => console.log('Pressed me.')}
      size="normal"
      text="INGRESAR AL SISTEMA"
      ghost
    />
  </View>
);

export default Login;
