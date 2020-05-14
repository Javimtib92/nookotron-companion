import * as React from 'react';
import {Dimensions, View, ActivityIndicator} from 'react-native';
import styled from 'styled-components';
import {su} from '~/utils';
import {Input, Icon, Flex} from '~components';

const Container = styled.View`
  background-color: white;
  padding-vertical: ${su(8)};
`;

const window = Dimensions.get('window');

const SearchInput = styled(Input).attrs(p => ({
  inputContainerStyle: {
    width: window.width + 'px',
    borderBottomWidth: 0,
    ...(p.inputContainerStyle || {}),
  },
  inputStyle: {
    marginHorizontal: su(8),
    ...(p.inputStyle || {}),
  },
  containerStyle: {
    paddingHorizontal: su(0),
  },
  leftIconContainerStyle: {
    marginLeft: su(8),
    ...(p.leftIconContainerStyle || {}),
  },
  rightIconContainerStyle: {
    marginRight: su(8),
    ...(p.rightIconContainerStyle || {}),
  },
}))`
  margin-horizontal: ${su(8)};
`;

const LoadingIndicator = styled(ActivityIndicator).attrs(p => ({
  loadingStyle: {
    marginRight: su(5),
    ...(p.loadingStyle || {}),
  },
}));

export default ({
  value = '',
  clearIcon,
  containerStyle,
  leftIconContainerStyle,
  rightIconContainerStyle,
  inputContainerStyle,
  inputStyle,
  searchIcon,
  cancelIcon,
  showLoading,
  loadingProps = {style: {}},
  onClear = () => null,
  onCancel = () => null,
  onFocus = () => null,
  onBlur = () => null,
  onChangeText = () => null,
  ...props
}) => {
  const inputRef = React.createRef();
  const [hasFocus, setFocus] = React.useState(false);
  const [isEmpty, setEmpty] = React.useState(false);
  const {style: loadingStyle, ...otherLoadingProps} = loadingProps;

  const focus = React.useCallback(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
  }, [inputRef]);

  const blur = React.useCallback(() => {
    inputRef.current.blur();
  }, [inputRef]);

  const clear = React.useCallback(() => {
    inputRef.current.clear();
    onChangeText('');
    onClear();
  }, [inputRef, onChangeText, onClear]);

  const cancel = React.useCallback(() => {
    blur();
    onCancel();
  }, [blur, onCancel]);

  const onFocusInner = event => {
    onFocus(event);
    setFocus(true);
    setEmpty(value === '');
  };

  const onBlurInner = event => {
    onBlur(event);
    setFocus(false);
  };

  const onChangeTextInner = text => {
    onChangeText(text);
    setEmpty(text === '');
  };

  return (
    <Container style={containerStyle}>
      <SearchInput
        renderErrorMessage={false}
        onFocus={onFocusInner}
        onBlur={onBlurInner}
        onChangeText={onChangeTextInner}
        ref={inputRef}
        containerStyle={containerStyle}
        inputStyle={inputStyle}
        inputContainerStyle={inputContainerStyle}
        leftIcon={
          hasFocus ? (
            <Icon name="fas/clear" size={16} color="gray" onPress={cancel} />
          ) : (
            <Icon name="fas/search" size={16} color="gray" onPress={focus} />
          )
        }
        leftIconContainerStyle={leftIconContainerStyle}
        rightIcon={
          <Flex dir="row" justify="end">
            {showLoading && (
              <LoadingIndicator
                key="loading"
                loadingStyle={loadingStyle}
                {...otherLoadingProps}
              />
            )}
            {!isEmpty && (
              <Icon
                name="fas/close"
                size={16}
                color="gray"
                key="cancel"
                onPress={clear}
              />
            )}
          </Flex>
        }
        rightIconContainerStyle={rightIconContainerStyle}
        {...props}
      />
    </Container>
  );
};
