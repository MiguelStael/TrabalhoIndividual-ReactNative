import React from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './style';
import StreamCard from '../../components/card/StreamCard';

interface Category {
  id: string;
  title: string;
  viewers: string;
}

interface Stream {
  id: string;
  title: string;
  streamer: string;
  isLive: boolean;
  viewers: number;
}

const categories: Category[] = [
  { id: '1', title: 'Just Chatting', viewers: '209.1K' },
  { id: '2', title: 'Grand Theft...', viewers: '113.3K' },
  { id: '3', title: 'Slots & Casino', viewers: '79K' },
  { id: '4', title: 'Rust', viewers: '76.6K' },
  { id: '5', title: 'Music', viewers: '50K' },
];

const streams: Stream[] = [
  { id: 'a', title: "I'm back from my trip, let's play!", streamer: 'FamousStreamer', isLive: true, viewers: 5420 },
  { id: 'b', title: 'Late night coding sesh | !github', streamer: 'CoderGuy', isLive: true, viewers: 1800 },
  { id: 'c', title: 'Valorant Ranked Climb', streamer: 'ProGamer', isLive: true, viewers: 990 },
  { id: 'd', title: 'Making a pizza from scratch', streamer: 'CookingChannel', isLive: true, viewers: 450 },
  { id: 'e', title: 'Studying for the test', streamer: 'StudyBuddy', isLive: true, viewers: 210 },
  { id: 'f', title: 'Art & Design stream', streamer: 'DrawingGirl', isLive: true, viewers: 750 },
];

const HomePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>KICK</Text>
        <TouchableOpacity style={styles.profileIcon} />
      </View>

      <ScrollView>
        <TouchableOpacity style={styles.liveStreamPreview} activeOpacity={0.9}>
          <Text style={styles.previewText}>Live Stream in Full Preview</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Top Live Categories</Text>
        <FlatList
          horizontal
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryCard} activeOpacity={0.8}>
              <Text style={styles.categoryTitle}>{item.title}</Text>
              <Text style={styles.categoryViewers}>{item.viewers} watching</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          style={styles.categoryList}
        />

        <Text style={styles.sectionTitle}>Just Chatting</Text>
        <FlatList
          data={streams}
          renderItem={({ item }) => (
            <StreamCard
              title={item.title}
              streamer={item.streamer}
              isLive={item.isLive}
              viewers={item.viewers}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 5 }}
          scrollEnabled={false}
          style={styles.streamList}
        />

        <View style={styles.bottomSpace} />
      </ScrollView>
    </View>
  );
};

export default HomePage;