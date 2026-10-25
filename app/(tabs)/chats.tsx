import Chat from "@/components/Chat";
import ChatFilterButton from "@/components/ChatFilterButton";
import { Image } from "expo-image";
import { useState } from "react";
import { FlatList, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import io from "socket.io-client";
const CHAT_FILTERS = ["All", "Unread", "Favorites", "Groups"] as const;

const chats = [
    { id: Math.random().toString(), name: "Uncle", img: require("../../assets/images/Profile-pic.jpg"), message: "How are you doing?", time: "12:30 PM" },
    { id: Math.random().toString(), name: "Uncle", img: require("../../assets/images/Profile-pic.jpg"), message: "How are you doing?", time: "12:30 PM" },
    { id: Math.random().toString(), name: "Uncle", img: require("../../assets/images/Profile-pic.jpg"), message: "How are you doing?", time: "12:30 PM" },
    { id: Math.random().toString(), name: "Uncle", img: require("../../assets/images/Profile-pic.jpg"), message: "How are you doing?", time: "12:30 PM" },
    { id: Math.random().toString(), name: "Uncle", img: require("../../assets/images/Profile-pic.jpg"), message: "How are you doing?", time: "12:30 PM" },
    { id: Math.random().toString(), name: "Uncle", img: require("../../assets/images/Profile-pic.jpg"), message: "How are you doing?", time: "12:30 PM" },
    { id: Math.random().toString(), name: "Uncle", img: require("../../assets/images/Profile-pic.jpg"), message: "How are you doing?", time: "12:30 PM" },
    { id: Math.random().toString(), name: "Uncle", img: require("../../assets/images/Profile-pic.jpg"), message: "How are you doing?", time: "12:30 PM" },
]


export default function Chats() {

    const [selectedFilter, setSelectedFilter] = useState<(typeof CHAT_FILTERS)[number]>("All");
    const socket = io("localhost:5000")

    socket.emit("connection", "Hi connected!")
    return (
        <>
            <StatusBar barStyle={"dark-content"} />

            <View style={styles.container} >
                {/* Header */}
                <View style={styles.headerRow}>
                    <View style={styles.meetballContainer}>
                        <Image
                            source={require("../../assets/images/meetball.svg")}
                            style={{
                                width: 24,
                                height: 24,
                            }}
                        />
                    </View>

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 16
                        // justifyContent: "center"
                    }}>
                        <View style={styles.meetballContainer}>
                            <Image
                                source={require("../../assets/images/ico-24-camera.svg")}
                                style={{
                                    width: 24,
                                    height: 24,
                                }}
                            />
                        </View>

                        <View style={{
                            backgroundColor: "rgba(29, 171, 97, 1)",
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>

                            <Image source={require("../../assets/images/ico-24-plus.svg")} style={{
                                width: 24,
                                height: 24,
                            }} />

                        </View>

                    </View>

                </View>

                {/* Search */}
                <View style={{
                    flexDirection: "column",
                    gap: 8
                }}>
                    <Text style={{
                        fontSize: 33,
                        fontWeight: "bold"
                    }}>Chats</Text>

                    <View style={styles.searchContainer}>
                        <Image source={require("../../assets/images/ico-24-search.svg")} style={{
                            width: 24,
                            height: 24
                        }} />
                        <TextInput style={{

                            fontSize: 12
                        }} placeholderTextColor={"rgba(118, 119, 121, 1)"} placeholder="Ask Meta AI or Search" />

                    </View>
                </View>

                {/* Filter CHat */}
                <View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.filterScroll}

                        contentContainerStyle={styles.filterScrollContent}
                    >
                        <View style={styles.filterRow}>
                            {CHAT_FILTERS.map((filter) => (
                                <ChatFilterButton
                                    key={filter}
                                    text={filter}
                                    active={selectedFilter === filter}
                                    onPress={() => setSelectedFilter(filter)}
                                />
                            ))}
                        </View>
                    </ScrollView>
                </View>



                {/* Archived */}
                <View style={styles.archivedRow}>
                    <Image style={{
                        width: 34,
                        height: 34
                    }} source={require("../../assets/images/ico-24-archived-small.svg")} />

                    <Text style={styles.archivedText}>Archived</Text>
                </View>

                <View style={{
                    height: "100%"
                }}>
                    <FlatList data={chats}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        alwaysBounceVertical={false}

                        renderItem={(chat) => {
                            return <Chat img={chat.item.img} name={chat.item.name} message={chat.item.message} time={chat.item.time} />
                        }} />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flex: 1,
        gap: 12,
        height: "100%"

    },
    meetballContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "rgba(10, 10, 10, 0.03)",
        justifyContent: "center",
        alignItems: "center",
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    searchContainer: {
        backgroundColor: "rgba(244, 244, 244, 1)",
        paddingHorizontal: 12,
        paddingVertical: 16,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 1

    },
    filterRow: {
        flexGrow: 0,
        flexDirection: "row",
        // alignItems: "flex-start",
        gap: 8,
        // marginTop: 40,
    },
    filterScroll: {
        flexGrow: 0,
    },

    filterScrollContent: {
        // borderWidth: 0.5,
        // borderColor: "red",
        // maxHeight: 100,
        paddingRight: 16, alignItems: "center",

    },

    archivedRow: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginHorizontal: 16,
        gap: 28,

    },

    archivedText: {
        flex: 1,
        borderBottomColor: "rgba(0, 0, 0, 0.2)",
        borderBottomWidth: 0.5,
        paddingBottom: 14,
        fontSize: 16,
        fontWeight: "600",

    }
});
