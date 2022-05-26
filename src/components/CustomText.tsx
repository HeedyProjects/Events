import React, {FunctionComponent} from 'react';
import {Text, TextStyle, StyleSheet} from 'react-native';
type CustomTextProps = {
  style?: TextStyle | TextStyle[];
  numberOfLines?: 2;
  textType?:
    | 'regular'
    | 'bold'
    | 'light'
    | 'extraBold'
    | 'NoahBold'
    | 'NoahRegular';
};
const CustomText: FunctionComponent<CustomTextProps> = ({
  children,
  textType,
  style,
  numberOfLines,
}) => {
  let textStyle: {};
  switch (textType) {
    case 'regular':
      textStyle = styles.regular;
      break;
    case 'NoahBold':
      textStyle = styles.NoahBold;
      break;
    case 'NoahRegular':
      textStyle = styles.NoahRegular;
      break;

    case 'bold':
      textStyle = styles.bold;
      break;
    case 'extraBold':
      textStyle = styles.extraBold;
      break;
    case 'light':
      textStyle = styles.light;
      break;
    default:
      textStyle = styles.regular;
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
  NoahRegular: {
    fontFamily: 'Noah-Regular',
  },
  NoahBold: {
    fontFamily: 'Noah-Bold',
  },

  regular: {
    fontFamily: 'Nunito-Regular',
  },
  bold: {
    fontFamily: 'Nunito-Bold',
  },

  extraBold: {
    fontFamily: 'Nunito-ExtraBold',
  },

  light: {
    fontFamily: 'Nunito-Light',
  },
});
export default CustomText;
