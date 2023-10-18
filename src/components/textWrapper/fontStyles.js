import colors from '../../constants/colors';

const fontStyles = {
  mainHeader1: {
    fontWeight: 600,
    fontSize: 34,
    color: 'black',
    fontFamily: 'LibreBaskerville-Regular',
  },
  mainHeader: {
    fontWeight: 600,
    fontSize: 34,
    color: '#1C1622',
    fontFamily: 'LibreBaskerville-Regular',
    textAlign: 'center',
  },

  heading: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#1C1622',
    lineHeight: 32,
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
  },
  subHeading: {
    fontWeight: 500,
    fontSize: 16,
    color: '#1C1622',
    textAlign: 'center',
    fontFamily: 'Montserrat-Light',
  },
  text: {
    fontSize: 14,
    color: '#1C1622',
    textAlign: 'center',
    fontFamily: 'Montserrat-Light',
  },
  textBold: {
    fontSize: 16,
    color: '#1C1622',
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Light',
    letterSpacing: 1,
  },
  textBoldSmall: {
    fontSize: 14,
    color: '#1C1622',
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Light',
    letterSpacing: 1,
  },
  danger: {
    color: colors.red,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  normalText: {
    lineHeight: 24,
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    fontWeight: '500',
    color: colors.normalTextBlack,
  },
  dashboardsSubHeading: {
    lineHeight: 24,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    fontWeight: '600',
    color: colors.normalTextBlack,
    textAlign: 'center',
  },
};

export default fontStyles;
