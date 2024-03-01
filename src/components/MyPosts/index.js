import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Cellbi from "../../assets/Cellbi.jpg";
import CeLo from "../../assets/CeLo.jpg";
import Espada from "../../assets/Espada.jpg";
import Ordem from "../../assets/Ordem_Paranormal.jpg";
import Paranormal from "../../assets/ordemparanormal.jpg";
import Rafael from "../../assets/RafaelLange.jpg";
import Dado from "../../assets/dado.jpg";
import Bixo from "../../assets/bixo.jpg";
import Rodeo from "../../assets/rodeo.jpg";
export default function MyPosts() {
    return (
        <View style={styles.container}>
            <View style={styles.icon}>

                <TouchableOpacity>
                    <MaterialCommunityIcons name="grid" size={38} color="black" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <MaterialCommunityIcons name="movie-open-play-outline" size={38} color="gray" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <MaterialIcons name="person-outline" size={38} color="gray" />
                </TouchableOpacity>

            </View>
            <View style={styles.postList}>
                <Image style={styles.post} source={Cellbi} />
                <Image style={styles.post} source={CeLo} />
                <Image style={styles.post} source={Espada} />
                <Image style={styles.post} source={Ordem} />
                <Image style={styles.post} source={Paranormal} />
                <Image style={styles.post} source={Rafael} />
                <Image style={styles.post} source={Dado} />
                <Image style={styles.post} source={Bixo} />
                <Image style={styles.post} source={Rodeo} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 16,
    },
    icon: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    postList: {
        marginTop: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'space-between',
    },
    post: {
        width: "33.3%",
        borderWidth: 1,
        borderColor: "#ddd",
        height: 220,
    },
});