import { StyleSheet, View, ViewProps } from "react-native";
import colors from "../constants/colors";

interface StyledWrapperProps extends ViewProps {
    gap?: number
};


export default function StyledWrapper(props: StyledWrapperProps ) {
    return <View {...props} style={[styles.wrapper({gap: props.gap}), props.style]} />;
};


const styles = StyleSheet.create<any>({
    wrapper: ({gap}: StyledWrapperProps ) => ({
        backgroundColor: colors.white, 
        padding: 10,
        marginTop: 20, 
        rowGap: gap ?? 0
    })
});
