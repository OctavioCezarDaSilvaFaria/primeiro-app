import { StyleSheet, ScrollView } from 'react-native';
import Cellbit from "../../assets/Cellbit.jpg";
import Joinha from "../../assets/Joinha.jpg";
import MiniMessi from "../../assets/MiniMessi.jpg";
import Ronaldin from "../../assets/Ronaldin.jpg";
import Story from "../Story";


export default function Stories() {
    return (
        <ScrollView contentContainerStyle={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}>
          <Story image={Cellbit} />
          <Story image={Joinha} />
          <Story image={MiniMessi} />
          <Story image={Ronaldin} />
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        gap: 8, 
        height: 100,
    },
})
