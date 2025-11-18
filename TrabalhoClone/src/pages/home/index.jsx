import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './style';

export default function Home() {
    return (
        <ScrollView style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.logo}>KICK</Text>
                <Image
                    source={require('../../../src/assets/kickLogin.jpeg')}
                    style={styles.userIcon}
                />
            </View>

            <Image
                source={require('../../../src/assets/kickHome.jpeg')}
                style={styles.banner}
            />

            <Text style={styles.section}>Top Live Categories</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.catCard}>
                    <Image
                        source={require('../../../src/assets/kickLogin.jpeg')}
                        style={styles.catImg}
                    />
                    <Text style={styles.catName}>Just Chatting</Text>
                </View>

                <View style={styles.catCard}>
                    <Image
                        source={require('../../../src/assets/kickHome.jpeg')}
                        style={styles.catImg}
                    />
                    <Text style={styles.catName}>GTA V</Text>
                </View>

                <View style={styles.catCard}>
                    <Image
                        source={require('../../../src/assets/kickLogin.jpeg')}
                        style={styles.catImg}
                    />
                    <Text style={styles.catName}>Slots</Text>
                </View>
            </ScrollView>

            <Text style={styles.section}>Recommended Streams</Text>

            <View style={styles.card}>
                <Image
                    source={require('../../../src/assets/kickLogin.jpeg')}
                    style={styles.cardImg}
                />
                <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}>Streamer Girl</Text>
                    <Text style={styles.cardUser}>Just Chatting</Text>
                    <Text style={styles.cardViewers}>542 watching</Text>
                </View>
            </View>

            <View style={styles.card}>
                <Image
                    source={require('../../../src/assets/kickHome.jpeg')}
                    style={styles.cardImg}
                />
                <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}>GTA RP BR</Text>
                    <Text style={styles.cardUser}>Roleplay</Text>
                    <Text style={styles.cardViewers}>1.1k watching</Text>
                </View>
            </View>
        </ScrollView>
    );
}
