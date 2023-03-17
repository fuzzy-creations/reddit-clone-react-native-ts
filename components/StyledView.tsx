import { StyleSheet, View, ViewProps } from "react-native";


interface StyledViewProps extends ViewProps {
    row?: boolean,
    gap?: number
};


export function StyledView(props: StyledViewProps ) {
    return <View {...props} style={[styles.main({row: props.row, gap: props.gap}), props.style]} />;
};


export default StyledView;


const styles = StyleSheet.create<any>({
    main: ({row, gap}: StyledViewProps ) => ({
        flexDirection: row ? 'row' : 'column',
        alignItems: row ? 'center' : 'stretch',
        gap: gap ?? 0
    }),
});
