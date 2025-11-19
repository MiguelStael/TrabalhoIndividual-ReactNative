import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './style';

interface StreamCardProps {
    title: string;
    streamer: string;
    isLive: boolean;
    viewers: number;
    tags?: string[];
    streamImage: any;
    avatarImage: any;
}

const StreamCard: React.FC<StreamCardProps> = ({ title, streamer, isLive, viewers, tags, streamImage, avatarImage }) => {
    return (
        <TouchableOpacity style={styles.cardContainer} activeOpacity={0.8}>
            <View style={styles.imageWrapper}>
                <Image source={streamImage} style={styles.streamImage} resizeMode="cover" />

                {isLive && (
                    <View style={styles.liveTag}>
                        <Text style={styles.liveText}>LIVE</Text>
                    </View>
                )}
                <View style={styles.viewersOverlay}>
                    <Text style={styles.viewersText}>{viewers.toLocaleString('en-US')}</Text>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <Image source={avatarImage} style={styles.avatar} />
                <View style={styles.textContainer}>
                    <Text style={styles.title} numberOfLines={2}>{title}</Text>
                    <Text style={styles.streamerName}>{streamer}</Text>
                    {tags && tags.length > 0 && (
                        <View style={styles.tagsContainer}>
                            {tags.map((tag, index) => (
                                <View key={index} style={styles.tag}>
                                    <Text style={styles.tagText}>{tag}</Text>
                                </View>
                            ))}
                        </View>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default StreamCard;