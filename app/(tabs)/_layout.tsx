import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { usePathname } from 'expo-router';
import { TabList, Tabs, TabSlot, TabTrigger } from 'expo-router/ui';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

const TABS = [
    {
        name: 'updates',
        href: '/updates',
        label: 'Updates',
        renderIcon: (color: string) => <Ionicons name="refresh-circle" size={26} color={color} />,
    },
    {
        name: 'calls',
        href: '/calls',
        label: 'Calls',
        renderIcon: (color: string) => <Ionicons name="call" size={24} color={color} />,
    },
    {
        name: 'communities',
        href: '/communities',
        label: 'Communities',
        renderIcon: (color: string) => <MaterialCommunityIcons name="account-group" size={26} color={color} />,
    },
    {
        name: 'chats',
        href: '/chats',
        label: 'Chats',
        renderIcon: (color: string) => <Ionicons name="chatbubbles" size={24} color={color} />,
    },
    {
        name: 'settings',
        href: '/settings',
        label: 'Settings',
        renderIcon: (color: string) => <Ionicons name="settings" size={24} color={color} />,
    },
] as const;

export default function TabLayout() {
    const insets = useSafeAreaInsets();
    const pathname = usePathname();

    return (
        <SafeAreaProvider>
            <Tabs>
                <TabSlot />
                <TabList style={[styles.tabList, { paddingBottom: insets.bottom }]}>
                    {TABS.map((tab) => {
                        const isActive = pathname === tab.href;
                        const color = isActive ? '#1DAA61' : '#767779';

                        return (
                            <TabTrigger key={tab.name} name={tab.name} href={tab.href} style={styles.tabTrigger}>
                                <View style={styles.tabItem}>
                                    {tab.renderIcon(color)}
                                    <Text style={[styles.tabTriggerText, isActive && styles.tabTriggerTextActive]}>
                                        {tab.label}
                                    </Text>
                                </View>
                            </TabTrigger>
                        );
                    })}
                </TabList>
            </Tabs>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    tabList: {
        backgroundColor: 'white',
        borderTopColor: 'rgba(0, 0, 0, 0.2)',
        borderTopWidth: 1,
        position: 'absolute',
        bottom: -48,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingTop: 8,
    },
    tabTrigger: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 56,
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
    },

    tabTriggerText: {
        fontSize: 8,
        color: '#767779',
    },
    tabTriggerTextActive: {
        color: '#1DAA61',
        fontWeight: '600',
    },
});
