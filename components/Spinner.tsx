import { ActivityIndicator } from "react-native";
import colors from "../constants/colors";
import StyledView from "./StyledView";


export default function Spinner () {
    return (
        <StyledView style={{marginVertical: 20}}>
            <ActivityIndicator size={"large"} color={colors.red} />
        </StyledView>
    );
};
