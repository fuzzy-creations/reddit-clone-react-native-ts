import { FontAwesome, FontAwesome5, Entypo } from '@expo/vector-icons';
import colors from './colors';


export const ARROW_ICON = ({small}: {small?: boolean}) => <FontAwesome5 name="arrow-alt-circle-up" size={small ? 15 : 20} color={colors.grey} />
export const COMMENTS_ICON = ({small}: {small?: boolean}) => <FontAwesome name="comment-o" size={small ? 15 : 20} color={colors.grey} />
export const DIVIDER_ICON = ({small}: {small?: boolean}) => <Entypo name="dot-single" size={small ? 15 : 20} color={colors.grey} />