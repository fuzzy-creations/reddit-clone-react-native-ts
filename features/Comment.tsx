import { StyleSheet, View, Pressable } from "react-native";
import { useState, useMemo } from "react";
import { ARROW_ICON, DIVIDER_ICON } from "../constants/icons";
import colors from "../constants/colors";
import { CommentType } from "../constants/types";
import { timeFromNow } from "../actions/methods";
import StyledText from "../components/StyledText";
import StyledView from "../components/StyledView";


function Comment ({ data }: { data: CommentType }) {
    const { author, collapsed, body, score_hidden, score, replies, timestamp } = data;
    const [isCollapsed, setIsCollapsed] = useState(collapsed);
    const collapseHandler = () => setIsCollapsed(prev => !prev);

    return (
        <View>
            <Pressable onPress={collapseHandler} style={({pressed}) => styles.wrapper(pressed)}>
                    
                <StyledView row gap={5}>
                    <StyledText light small>{author}</StyledText>
                    <DIVIDER_ICON small />
                    <StyledText light small>{useMemo(() => timeFromNow(timestamp), [])}</StyledText>
                </StyledView>

                <View style={styles.collapsed(isCollapsed)}>
                    <StyledText>{body}</StyledText>

                    <StyledView row gap={5} style={styles.scoreContainer}>
                        <ARROW_ICON small />
                        <StyledText light small>{score_hidden ? "Hidden" : score }</StyledText>
                    </StyledView>
                </View>
            
            </Pressable>
            
            <View style={[styles.replies, styles.collapsed(isCollapsed)]}>
                {useMemo(() => (replies ?? []).map(item => <Comment key={item.id} data={item}/>), [])}
            </View>
        </View>

    )
};


export default Comment;


const styles = StyleSheet.create<any>({
    wrapper: (pressed: boolean) => ({
        backgroundColor: pressed ? colors.medium : 'transparent',
        borderRadius: 5,
        padding: 2
    }),
    replies: {
        paddingLeft: 10,
        borderLeftWidth: 1, 
        borderLeftColor: colors.medium, 
    },
    collapsed: (collapsed: Boolean) => ({
        display: collapsed ? "none" : "flex"
    }),
    scoreContainer: {
        alignSelf: "flex-end",
    },
});
