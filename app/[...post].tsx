import { FlatList } from "react-native";
import { useSearchParams } from "expo-router";
import { useGetComments, useGetPost } from "../actions/queries";
import Comment from "../features/Comment";
import Card from "../features/Card";
import Loader from "../components/Loader";
import StyledWrapper from "../components/StyledWrapper";
import Error from "../components/Error";
  

interface SearchParams {
    post: string | string[];
    id?: string;
};

export default function Post() {
    const { post, id }: Partial<SearchParams> = useSearchParams() as unknown as SearchParams;
    
    const details = useGetPost(id);
    const { isLoading, isFetching, data } = useGetComments(post);

    const loading = isLoading || isFetching;

    return (
        <FlatList
            ListHeaderComponent={details && <Card data={details} />}
            ListEmptyComponent={loading ? <Loader /> : <Error />}
            data={loading ? [] : data}
            renderItem={({ item }) => <StyledWrapper><Comment data={item} /></StyledWrapper> }
            keyExtractor={(item) => item.id}
        />
    );
};