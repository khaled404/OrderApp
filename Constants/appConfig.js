import {
  Dimensions,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
const {width, height} = Dimensions.get('window');
const psdWidth = 720;
const psdHight = 1280;
export const Size = (type, px) => {
  if (type === 'w') {
    return (px / psdWidth) * width;
  } else if (type === 'h') {
    return (px / psdHight) * height;
  }
};

export const fonts = {
  bold: 'h-75-bold',
  roman: 'h-55-roman',
  light: 'h-45-light',
};

export let Touchable =
  Platform.OS === 'android' && Platform.Version >= 21
    ? TouchableNativeFeedback
    : TouchableOpacity;
