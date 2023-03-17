import { View, StyleSheet, ScrollView } from "react-native";
import colors from '../constants/colors';
import StyledView from './StyledView';
import StyledWrapper from './StyledWrapper';


export default function Loader () {
  return (
    <ScrollView style={{flex: 1}} scrollEnabled={false}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
    </ScrollView>
  );
};


const Skeleton = () => (
    <StyledWrapper>
        <StyledView gap={10}>
            <StyledView row gap={15}>
                <View style={styles.circle(35)} />
                <StyledView gap={5}>
                    <View style={styles.block(190)}></View>
                    <StyledView row gap={10}>
                        <View style={styles.block(80)} ></View>
                        <View style={styles.circle(10)} />
                        <View style={styles.block(80)}></View>
                    </StyledView>
                </StyledView>
            </StyledView>

       
            <StyledView gap={5}>
                <View style={styles.block()}></View>
                <View style={styles.block()}></View>
                <View style={styles.block()}></View>
            </StyledView>


            <StyledView row gap={50}>
                <StyledView row gap={10}>
                    <View style={styles.circle()} />
                    <View style={styles.block(80)}></View>
                </StyledView>
                <StyledView row gap={10}>
                    <View style={styles.circle()} />
                    <View style={styles.block(80)}></View>
                </StyledView>
            </StyledView>   
        </StyledView>
  </StyledWrapper>
);


const styles = StyleSheet.create<any>({
    block:(width = "100%") => ({
        width,
        backgroundColor: colors.medium,
        height: 20, 
        borderRadius: 10
    }),
    circle:(size = 30) => ({
        width: size,
        height: size, 
        borderRadius: size / 2,
        backgroundColor: colors.medium,
    })
});
