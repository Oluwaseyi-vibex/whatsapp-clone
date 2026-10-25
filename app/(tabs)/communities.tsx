import { Image } from 'expo-image'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Communities = () => {
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: "row",
                justifyContent: "flex-end"
            }}>
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

            <View>
                <Text style={{
                    fontSize: 28,
                    fontWeight: "700"
                }}>Communities</Text>
            </View>

            <View style={{
                alignItems: "center",
                marginVertical: 18
            }}>
                <Image source={require("@/assets/images/CommunitiesIllustration.jpg")} alt='illus' style={{
                    width: 162,
                    height: 151
                }} />
            </View>

            <View style={{
                gap: 14
            }}>
                <Text style={{
                    fontSize: 22,
                    fontWeight: "400",
                }}>Stay connected with a community</Text>
                <Text style={{
                    fontSize: 17,
                    color: "#767779"
                }} >Communities bring members together in topic-based groups. Any community you’re added to will appear here.</Text>
                <View style={{
                    alignItems: "center"
                }}>
                    <Text style={{
                        color: "rgba(29, 171, 97, 1)",
                        fontSize: 16,
                    }}>See example communities{`>`}</Text>
                </View>
            </View>

            <View style={{
                marginTop: 30
            }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center"
                }}>
                    <View style={{
                        backgroundColor: "rgba(29, 171, 97, 1)",
                        width: "100%",
                        height: 50,
                        borderRadius: 14,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>

                        <Image source={require("../../assets/images/ico-24-plus.svg")} style={{
                            width: 28,
                            height: 28,
                        }} />
                        <Text style={{
                            color: "white",
                            fontWeight: "500"
                        }}>New Communities</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Communities

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flex: 1,
        gap: 12,
        height: "100%"
    }
})