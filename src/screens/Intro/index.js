import React from 'react';

import {Button, Dimensions, StatusBar} from 'react-native';

import styled from 'styled-components';

import {su} from '~/utils';
import {Spacing, Flex} from '~components';

const Container = styled.ImageBackground.attrs({
  source: require('~assets/images/landing.jpeg'),
  imageStyle: {
    opacity: 0.3,
  },
  resizeMode: 'cover',
})`
  align-items: center;
  flex: 1;
  padding-right: ${su(20)};
  padding-left: ${su(20)};
`;

const Logo = styled.Image.attrs({
  source: require('~assets/images/logo.png'),
  resizeMode: 'contain',
  window: Dimensions.get('window'),
})`
  height: ${p => su(p.window.height * 0.11)};
  margin-top: ${p => su(p.window.height * 0.11)};
  margin-bottom: ${p => su(p.window.height * 0.11)};
  width: ${p => su(p.window.height * 0.11 * (1950 / 662))};
`;

const WelcomeText = styled.Text`
  color: #000;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`;

const InstructionsText = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 14px;
  margin-top: ${p => su(p.marginTop || 20)};
  text-align: center;
`;

const Intro = ({navigation}) => (
  <Container>
    <StatusBar barStyle="light-content" backgroundColor="#5d99c6" />
    <Logo />
    <WelcomeText>Bienvenidos a Nookotron!</WelcomeText>
    <InstructionsText>Gestiona todos los elementos de tu isla</InstructionsText>

    <Spacing y="60" />

    <Button
      onPress={() => navigation.navigate('Drawer', {screen: 'Home'})}
      title="Empieza"
      color="#90caf9"
      accessibilityLabel="Haz click aquí para empezar"
    />

    <Spacing y="140" />

    <Flex dir="column" align="center">
      <InstructionsText>Una producción de Juvisland</InstructionsText>
      <InstructionsText marginTop={su(5)}>Javier ❤ Júlia</InstructionsText>
    </Flex>
  </Container>
);

export default Intro;
