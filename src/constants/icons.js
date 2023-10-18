import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
const icons = {
  back: () => <Entypo name="chevron-thin-left" size={20} color="black" />,
  backArrow: () => <Entypo name="arrow-long-left" size={20} color="black" />,
  frontArrow: () => <Entypo name="arrow-long-right" size={20} color="black" />,
  cross: () => <Feather name="x" size={30} color="#1C1622" />,
  leftArrow: () => (
    <FontAwesome6 name="arrow-left-long" size={20} color="black" />
  ),
  rightArrow: () => (
    <FontAwesome6 name="arrow-right-long" size={25} color="black" />
  ),
  greyArrow: () => (
    <FontAwesome6 name="arrow-right-long" size={25} color="#cfcbd5" />
  ),
};

export default icons;
