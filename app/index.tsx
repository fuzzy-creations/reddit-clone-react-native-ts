import { FlatList } from "react-native";
import { useGetPosts } from "../actions/queries";
import Card from "../features/Card";
import Loader from "../components/Loader";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import { filter_posts } from "../actions/methods";

const ON_END_REACHED_THRESHOLD = 5;
const INITIAL_NUM_TO_RENDER = 3;

export default function Home() {
  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } = useGetPosts();

  return (
      <FlatList 
        data={filter_posts(data?.pages?.flatMap(item => item.posts))}
        renderItem={({ item }) => <Card active data={item} />}
        ListEmptyComponent={isLoading ? <Loader /> : <Error />}
        keyExtractor={item => item.id}
        initialNumToRender={INITIAL_NUM_TO_RENDER}
        onEndReachedThreshold={ON_END_REACHED_THRESHOLD}
        onEndReached={() => {
            if (hasNextPage) {
              fetchNextPage();
            }
          }}
        ListFooterComponent={isFetchingNextPage ? <Spinner /> : null}
      />
    )
  }