import React from 'react';

import {
  Text,
  Button,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar,
} from 'react-native';

import {Spacing, Flex} from '~/components';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  instructions: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  logo: {
    height: Dimensions.get('window').height * 0.11,
    marginVertical: Dimensions.get('window').height * 0.11,
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
  },
  welcome: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backgroundImageStyle: {
    opacity: 0.3,
  },
});

const Intro = ({navigation}) => (
  <ImageBackground
    source={require('~assets/images/landing.jpeg')}
    style={styles.container}
    imageStyle={styles.backgroundImageStyle}
    resizeMode="cover">
    <StatusBar barStyle="light-content" backgroundColor="#5d99c6" />
    <Image
      source={require('~assets/images/logo.png')}
      style={styles.logo}
      resizeMode="contain"
    />
    <Text style={styles.welcome}>Bienvenidos a Nookotron!</Text>
    <Text style={styles.instructions}>
      Gestiona todos los elementos de tu isla
    </Text>

    <Spacing y="60" />

    <Button
      onPress={() => navigation.navigate('Drawer', {screen: 'Home'})}
      title="Empieza"
      color="#90caf9"
      accessibilityLabel="Haz click aquí para empezar"
    />

    <Spacing y="140" />

    <Flex dir="column" align="center">
      <Text style={styles.instructions}>Una producción de Juvisland</Text>
      <Text style={[styles.instructions, styles.fileName]}>Javier ❤ Júlia</Text>
    </Flex>
  </ImageBackground>
);

export default Intro;
