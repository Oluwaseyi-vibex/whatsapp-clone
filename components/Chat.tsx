import { Image } from "expo-image"
import { ImageSourcePropType, StyleSheet, Text, View } from "react-native"
type ChatProps = {
    name: string,
    img: ImageSourcePropType,
    message: string,
    time: string
}
const Chat = ({ name, img, message, time }: ChatProps) => {
    return (
        <View style={styles.container}  >
            <Image
                source={img}
                style={styles.avatar}
                contentFit="cover"
            />

            <View style={styles.content}>
                <View style={styles.topRow}>
                    <Text style={styles.name} numberOfLines={1}>
                        {name}
                    </Text>

                    <Text style={styles.time}>
                        {time}
                    </Text>
                </View>

                <View style={styles.bottomRow}>
                    <Text style={styles.message} numberOfLines={1}>
                        {message}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        // paddingLeft: 16,
        paddingVertical: 12,
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
    },
    content: {
        flex: 1,
        justifyContent: "center",
        borderBottomWidth: 0.5,
        borderBottomColor: "rgba(17, 27, 33, 0.12)",
        paddingRight: 16,
        paddingVertical: 4,
        minHeight: 72,
    },
    topRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 6,
        gap: 12,
    },
    bottomRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    name: {
        fontSize: 16,
        fontWeight: "600",
        color: "#111B21",
        flex: 1,
    },
    time: {
        fontSize: 12,
        color: "#667781",
    },
    message: {
        fontSize: 14,
        color: "#667781",
        flex: 1,
        lineHeight: 20,
    },
})
