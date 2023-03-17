import { Image, StyleSheet, ImageProps } from "react-native";
import colors from "../constants/colors";
import { windowWidth } from "../constants/consts";


interface StyledImageProps extends ImageProps {
    circle?: boolean,
    height?: number, 
    width?: number | string,
    source: any
};


export default function StyledImage(props: StyledImageProps ) {
    return <Image {...props} style={[styles.image({ circle: props.circle, height: props.height, width: props.width }), props.style]} source={props.source} />;
};


const styles = StyleSheet.create<any>({
    image: ({circle, width = windowWidth, height = windowWidth}: StyledImageProps ) => ({
        width,
        height,
        borderRadius: circle ? height : 0,
        backgroundColor: colors.dark,
        resizeMode: 'cover'
    })
});
