import { StyleSheet, Text, TextProps } from "react-native";
import colors from "../constants/colors";


interface StyledTextProps extends TextProps {
    light?: boolean,
    large?: boolean, 
    small?: boolean,
};


export function StyledText(props: StyledTextProps ) {
    return <Text {...props} style={[styles.main({light: props.light, small: props.small}), props.style]} />;
};


export default StyledText;


const styles = StyleSheet.create<any>({
    main: ({light, small}: StyledTextProps ) => ({
        fontSize: small ? 12 : 15,
        lineHeight: 21,
        fontFamily: 'Varela',
        color: light ? colors.grey : colors.dark
    }),
});
