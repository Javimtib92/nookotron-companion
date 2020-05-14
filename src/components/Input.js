import * as React from 'react';
import {Dimensions, Text, View, Animated, Easing} from 'react-native';
import styled from 'styled-components';
import {su, renderNode} from '~/utils';
import {Colors} from '~/vars';
import {Icon} from '~components';

const window = Dimensions.get('window');

const Container = styled.View.attrs(p => ({
  containerStyle: p.containerStyle || {},
}))`
  width: ${window.width}px;
  padding-horizontal: ${su(10)};
`;

const InputContainer = styled(Animated.View).attrs(p => ({
  inputContainerStyle: p.inputContainerStyle || {},
  style: p.style,
}))`
  flex-direction: row;
  border-bottom-width: 1px;
  align-items: center;
  border-color: ${Colors.gray};
`;

const InputComponent = styled.TextInput.attrs(p => ({
  style: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 18,
    flex: 1,
    minHeight: 40,
    ...(p.disabledInput || {}),
    ...(p.disabledInputStyle || {}),
  },
}))``;

const LeftIconContainer = styled.View.attrs(p => ({
  style: p.leftIconContainerStyle || {},
}))`
  height: 40px;
  justify-content: center;
  align-items: center;
  padding-right: ${su(4)};
  margin-vertical: ${su(4)};
`;

const RightIconContainer = styled.View.attrs(p => ({
  style: p.rightIconContainerStyle || {},
}))`
  height: 40px;
  justify-content: center;
  align-items: center;
  padding-right: ${su(4)};
  margin-vertical: ${su(4)};
`;

const Input = React.forwardRef(
  (
    {
      containerStyle,
      disabled,
      disabledInputStyle,
      inputContainerStyle,
      leftIcon,
      leftIconContainerStyle,
      rightIcon,
      rightIconContainerStyle,
      inputStyle,
      errorProps,
      errorStyle,
      errorMessage,
      label,
      labelStyle,
      labelProps,
      renderErrorMessage = true,
      ...attributes
    },
    inputRef,
  ) => {
    const animation = React.useRef(new Animated.Value(0));

    const hideErrorMessage = !renderErrorMessage && !errorMessage;

    const isFocused = () => {
      return inputRef.isFocused();
    };

    const setNativeProps = nativeProps => {
      inputRef.setNativeProps(nativeProps);
    };

    const shake = () => {
      animation.setValue(0);
      // Animation duration based on Material Design
      // https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
      Animated.timing(animation, {
        duration: 375,
        toValue: 3,
        ease: Easing.bounce,
        useNativeDriver: true,
      }).start();
    };

    const styles = React.useMemo(
      () => ({
        inputContainer: {
          transform: [
            {
              translateX: animation.current.interpolate({
                inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
                outputRange: [0, -15, 0, 15, 0, -15, 0],
              }),
            },
          ],
        },
      }),
      [],
    );

    return (
      <Container containerStyle={containerStyle}>
        <Text style={labelStyle} {...labelProps}>
          {label}
        </Text>

        <InputContainer
          inputContainerStyle={inputContainerStyle}
          style={styles.inputContainer}>
          {leftIcon && (
            <LeftIconContainer leftIconContainerStyle={leftIconContainerStyle}>
              {renderNode(Icon, leftIcon)}
            </LeftIconContainer>
          )}

          <InputComponent
            underlineColorAndroid="transparent"
            editable={!disabled}
            isFocused={isFocused}
            setNativeProps={setNativeProps}
            ref={inputRef}
            disabledInput={disabled && styles.disabledInput}
            disabledInputStyle={disabled && disabledInputStyle}
            {...attributes}
          />

          <RightIconContainer rightIconContainerStyle={rightIconContainerStyle}>
            {renderNode(Icon, rightIcon)}
          </RightIconContainer>
        </InputContainer>

        <Text {...errorProps}>{errorMessage}</Text>
      </Container>
    );
  },
);

export default Input;
