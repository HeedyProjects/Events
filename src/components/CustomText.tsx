import React, {FunctionComponent} from 'react';
import {Text, TextStyle, StyleSheet} from 'react-native';
type CustomTextProps = {
  style?: TextStyle | TextStyle[];
  numberOfLines?: 2;
  textType?:
    | 'SFProDisplayBlack'
    | 'SFProDisplayBold'
    | 'SFProDisplayHeavy'
    | 'SFProDisplayLight'
    | 'SFProDisplayMedium'
    | 'SFProDisplayRegular'
    | 'SFProDisplaySemibold'
    | 'SFProDisplayThin'
    | 'SFProDisplayUltralight'
    | 'SFProTextbold'
    | 'SFProTextRegular';
};
const CustomText: FunctionComponent<CustomTextProps> = ({
  children,
  textType,
  style,
  numberOfLines,
}) => {
  let textStyle: {};
  switch (textType) {
    case 'SFProDisplayBlack':
      textStyle = styles.SFProDisplayBlack;
      break;
    case 'SFProDisplayBold':
      textStyle = styles.SFProDisplayBold;
      break;
    case 'SFProDisplayHeavy':
      textStyle = styles.SFProDisplayHeavy;
      break;

    case 'SFProDisplayLight':
      textStyle = styles.SFProDisplayLight;
      break;
    case 'SFProDisplayMedium':
      textStyle = styles.SFProDisplayMedium;
      break;
    case 'SFProDisplayRegular':
      textStyle = styles.SFProDisplayRegular;
      break;
    case 'SFProDisplaySemibold':
      textStyle = styles.SFProDisplaySemibold;
      break;
    case 'SFProDisplayThin':
      textStyle = styles.SFProDisplayThin;
      break;
    case 'SFProTextbold':
      textStyle = styles.SFProTextbold;
      break;
    case 'SFProTextRegular':
      textStyle = styles.SFProTextRegular;
      break;
    default:
      textStyle = styles.SFProDisplayRegular;
      break;
  }
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return (
    <Text style={[textStyle, {...passedStyles}]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};
const styles = StyleSheet.create({
  SFProDisplayBlack: {
    fontFamily: 'SFProDisplay-Black',
  },
  SFProDisplayBold: {
    fontFamily: 'SFProDisplay-Bold',
  },

  SFProDisplayHeavy: {
    fontFamily: 'SFProDisplay-Heavy',
  },
  SFProDisplayLight: {
    fontFamily: 'SFProDisplay-Light',
  },

  SFProDisplayMedium: {
    fontFamily: 'SFProDisplay-Medium',
  },

  SFProDisplayRegular: {
    fontFamily: 'SFProDisplay-Regular',
  },
  SFProDisplaySemibold: {
    fontFamily: 'SFProDisplaySemibold',
  },
  SFProDisplayThin: {
    fontFamily: 'SFProDisplay-Thin',
  },
  SFProDisplayUltralight: {
    fontFamily: 'SFProDisplay-Ultralight',
  },
  SFProTextbold: {
    fontFamily: 'SFProTextbold',
  },
  SFProTextRegular: {
    fontFamily: 'SFProText-regular',
  },
});
export default CustomText;
