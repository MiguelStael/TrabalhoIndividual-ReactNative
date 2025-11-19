import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

interface StreamCardProps {
    title: string;
    streamer: string;
    isLive: boolean;
    viewers: number;
}

const StreamCard: React.FC<StreamCardProps> = ({ title, streamer, isLive, viewers }) => {
    return (
        <TouchableOpacity style={styles.cardContainer} activeOpacity={0.8}>
            <View>
                <View style={styles.image} />
                {isLive && (
                    <View style={styles.liveTag}>
                        <Text style={styles.liveText}>LIVE</Text>
                    </View>
                )}
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <Text style={styles.streamerName}>{streamer}</Text>
                <Text style={styles.streamerName}>{viewers.toLocaleString('en-US')} watching</Text>
            </View>
        </TouchableOpacity>
    );
};

export default StreamCard;