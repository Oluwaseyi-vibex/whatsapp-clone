import { StyleSheet, Text, View } from 'react-native';

export default function Calls() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calls</Text>
            <Text style={styles.subtitle}>Your recent and favorite calls will appear here.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#0A0A0A',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 15,
        lineHeight: 22,
        color: '#767779',
        textAlign: 'center',
    },
});
