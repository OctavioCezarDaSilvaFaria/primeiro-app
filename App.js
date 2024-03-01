import { View } from 'react-native';
import Cellbit from "./src/assets/Cellbit.jpg";
import InfoProfile from './src/components/InfoProfile';
import MyPosts from './src/components/MyPosts';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        marginVertical: 32,
        marginHorizontal: 16,
      }}
    >
      <InfoProfile
        image={Cellbit}
        publi={250}
        followers={1500}
        following={68} />
        <MyPosts
        />
    </View>
  );
}
