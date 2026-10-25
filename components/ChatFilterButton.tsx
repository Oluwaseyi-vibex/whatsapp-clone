import { Pressable, StyleSheet, Text } from "react-native"

type ChatFilterProps = {
    text: string
    active?: boolean
    onPress?: () => void
}

const ChatFilterButton = ({ text, active = false, onPress }: ChatFilterProps) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.container,
                active ? styles.activeContainer : styles.inactiveContainer,
                pressed && styles.pressed,
            ]}
        >
            <Text style={[styles.innerText, active ? styles.activeText : styles.inactiveText]}>
                {text}
            </Text>
        </Pressable>
    )
}

export default ChatFilterButton

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 18,
        minHeight: 32,
        paddingHorizontal: 14,
        paddingVertical: 7,
        borderWidth: 1,
    },
    innerText: {
        fontSize: 14,
        fontWeight: "600",
        letterSpacing: -0.1,
    },
    activeContainer: {
        backgroundColor: "#E7FCEB",
        borderColor: "#C7E9CD",
    },
    inactiveContainer: {
        backgroundColor: "#F5F6F6",
        borderColor: "#E5E7E8",
    },
    activeText: {
        color: "#0A7C43",
    },
    inactiveText: {
        color: "#54656F",
    },
    pressed: {
        opacity: 0.85,
    },
})
