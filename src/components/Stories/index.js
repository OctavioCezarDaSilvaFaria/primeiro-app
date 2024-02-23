import { Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Cellbit from "../../assets/Cellbit.jpg";
import Joinha from "../../assets/Joinha.jpg";
import MiniMessi from "../../assets/MiniMessi.jpg";
import Ronaldin from "../../assets/Ronaldin.jpg";


export default function Stories() {
    return (
        <ScrollView contentContainerStyle={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9MRiNNzVsNnZv1cZEMlycoh6DGAOUSANaqA&usqp=CAU"
          }}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{
            uri: "https://yt3.googleusercontent.com/djwgWNsevFTlm8PbC0UCt8llmAVB9pDudNauTZRU0UuZPYmDfbdpzAzQrpnW4ov16eEPbLQ7kw=s900-c-k-c0x00ffffff-no-rj"
          }}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8bNuIftxgdPb71YXJwFFN4aN2riIVlR7P5A&usqp=CAU"
          }}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{
            uri: "data:image/jpeg;base64,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"
          }}
        />
        </TouchableOpacity>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        gap: 8, 
        height: 100,
    },
    story: {width: 100, height: 100, borderRadius: 50}
})
