// Utils
import { moderateScale } from '../utils/scaling';

export const CustomFonts = {
    LatoBold: require('../../assets/fonts/Lato-Bold.ttf'),
    LatoNormal: require('../../assets/fonts/Lato-Regular.ttf'),
};

const Fonts = {
    H1: moderateScale(33),
    H2: moderateScale(27),
    H3: moderateScale(22),
    H4: moderateScale(18),
    H5: moderateScale(16),
    BODY: moderateScale(16),
    BUTTON: moderateScale(15),
    PLAIN_BUTTON: moderateScale(15),
    TEXT_BUTTON: moderateScale(15),
    SMALL: moderateScale(14),
    NAVIGATION: moderateScale(12),
    MICRO: moderateScale(10),
    BOLD: 'LatoBold',
    NORMAL: 'LatoNormal',
};

export default Fonts;
