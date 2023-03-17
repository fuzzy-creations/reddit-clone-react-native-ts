import { useRouter } from "expo-router"
import { View, Pressable } from "react-native";
import { ARROW_ICON, COMMENTS_ICON, DIVIDER_ICON } from "../constants/icons";
import { PostType } from "../constants/types";
import { timeFromNow } from "../actions/methods";
import StyledText from "../components/StyledText";
import StyledView from "../components/StyledView";
import StyledWrapper from "../components/StyledWrapper";
import StyledImage from "../components/StyledImage";

type Props = {
    data: PostType;
    active?: boolean;
};
  

function Card({ data, active }: Props) {
    const router = useRouter();

    const selectHandler = () => {
        if(active) {
            router.push({pathname:`/${data.url}`, params: {id: data.id}})
        }
    }

    const iconSource = data.icon.trim().length === 0
    ? require('../assets/images/splash.png')
    : { uri: data.icon };


    return (
        <Pressable onPress={selectHandler}>
            <StyledWrapper gap={10}>

                <StyledView row gap={15}>
                    <StyledImage height={35} width={35} circle source={iconSource} />
                    <View>
                        <StyledText light small>r/{data.subreddit}</StyledText>
                        <StyledView row>
                            <StyledText light small >u/{data.author}</StyledText>
                            <DIVIDER_ICON />
                            <StyledText light small>{timeFromNow(data.timestamp)}</StyledText>
                        </StyledView>
                    </View>
                </StyledView>

                <StyledText>{data.title}</StyledText>
                
                { data.media &&  <StyledImage height={250} source={{ uri: data.media }} /> }

                <StyledView row gap={20}>
                    <StyledView row gap={10}>
                        <ARROW_ICON />
                        <StyledText light small>{data.score}</StyledText>
                    </StyledView>
                    <StyledView row gap={10}>
                        <COMMENTS_ICON />
                        <StyledText light small>{data.comments}</StyledText>
                    </StyledView>
                </StyledView>

            </StyledWrapper>
        </Pressable>
    );
};


export default Card;