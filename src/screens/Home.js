import { ScrollView, View } from 'react-native';
import Header from '../components/header';
import Stories from '../components/Stories';
import Posts from '../components/Posts';
import PostImage from "../assets/PostImage.jpg";
import PostImage1 from "../assets/PostImage1.jpg";
import PostImage2 from "../assets/PostImage2.jpg";
import Cellbit from "../assets/Cellbit.jpg";

export default function Home() {
  return (
    <ScrollView
      style={{
        flex: 1,
        marginVertical: 32,
        marginHorizontal: 16,
      }}
    >
      <Header />
      <Stories />
      <ScrollView>
      <Posts 
      profileImage={Cellbit}
      postImage={PostImage}
      profileName={"Cellbit"}
      description={"lorem impsum but without body or title"}
      />
      <Posts 
      profileImage={Cellbit}
      postImage={PostImage1}
      profileName={"Cellbit"}
      description={"lorem impsum but without body or title"}
      />
      <Posts 
      profileImage={Cellbit}
      postImage={PostImage2}
      profileName={"Cellbit"}
      description={"lorem impsum but without body or title"}
      />
      </ScrollView>
    </ScrollView>
  )
};
