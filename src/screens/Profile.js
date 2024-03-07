import { View } from 'react-native';
import Cellbit from "../assets/Cellbit.jpg";
import InfoProfile from '../components/InfoProfile';
import MyPosts from '../components/MyPosts';

export default function Profile() {
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
