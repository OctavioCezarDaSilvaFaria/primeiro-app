import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native"
import {Feather, FontAwesome, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

export default function Posts({profileImage, postImage, profileName, description}) {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 20, marginHorizontal: 12}}>
                <Image style={{width: 60, height: 60, borderRadius: 60}} source={profileImage}/>
                
                <Text style={{flex: 1, marginLeft: 20, fontSize: 18}}>{profileName}</Text>
                <TouchableOpacity>
                <Feather name="more-vertical" size={30} color="black"/>
                </TouchableOpacity>

        </View>

        <View>
            <Image style={styles.photo} source={postImage}/>
        </View>
        <View style={styles.icon}>   
            <TouchableOpacity>
            <Feather name="heart" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
            <Ionicons name="chatbubble-outline" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
            <Feather name="send" size={30} color="black" />
            </TouchableOpacity>
        </View>
        <TouchableOpacity>
        <Feather style={styles.book} name="bookmark" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.descrip}>{description}</Text>

</View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        marginHorizontal: 12,
        marginTop: 15,
},

    photo:{
        width: "95%",
        height: 400,
        marginVertical: 25,
        marginHorizontal: 10,
},

    icon:{
        flexDirection: 'row',
        bottom: 20,
        gap: 4,
},

    descrip: {
        flexDirection: "row",
        bottom: 20,
},

    book: {
        flexDirection: 'row',
        bottom: 45,
        marginLeft: 325,
}

}
);