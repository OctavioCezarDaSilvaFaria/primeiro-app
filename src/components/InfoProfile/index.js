import { View, Image, Text, StyleSheet } from 'react-native';
export default function InfoProfile({
    image,
    publi,
    followers,
    following}) {
    return (
        <View style={styles.container}>
        <Image style={styles.Perfil} source={image} />
        <View style={styles.info}>
        <View style={styles.count}>
        <Text style={styles.bold}>{publi}</Text>
        <Text>Publicação</Text>
        </View>
        <View style={styles.count}>
        <Text style={styles.bold}>{followers}</Text>
        <Text>Seguidores</Text>
        </View>
        <View style={styles.count}>
        <Text style={styles.bold}>{following}</Text>
        <Text>Seguindo</Text>
        </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    info: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        gap: 16,
    },
    count: {
        alignItems: "center",
        justifyContent: "center",
    },
    bold: {
        fontWeight: "700",
    },
    Perfil: {
        width: 90,
        height: 90,
        borderRadius: 50,
    }
}
)