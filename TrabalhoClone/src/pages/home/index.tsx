import React from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import { styles } from './style';
import StreamCard from '../../../src/components/card/StreamCard';

const { width } = Dimensions.get('window');

interface Category {
  id: string;
  title: string;
  viewers: string;
  image: string;
  tag?: string;
}

interface Stream {
  id: string;
  title: string;
  streamer: string;
  isLive: boolean;
  viewers: number;
  image: string;
  avatar: string;
  tags?: string[];
}

const categories: Category[] = [
  { id: '1', title: 'Just Chatting', viewers: '209.1K', image: 'https://placehold.co/200x250/303030/FFFFFF/png?text=Just+Chatting', tag: 'IRL' },
  { id: '2', title: 'Grand Theft Auto V', viewers: '113.3K', image: 'https://placehold.co/200x250/303030/FFFFFF/png?text=GTA+V', tag: 'Shooter' },
  { id: '3', title: 'Slots & Casino', viewers: '79K', image: 'https://placehold.co/200x250/303030/FFFFFF/png?text=Casino', tag: 'Gambling' },
  { id: '4', title: 'Rust', viewers: '76.6K', image: 'https://placehold.co/200x250/303030/FFFFFF/png?text=Rust', tag: 'FPS' },
  { id: '5', title: 'Music', viewers: '50K', image: 'https://placehold.co/200x250/303030/FFFFFF/png?text=Music' },
];

const streams: Stream[] = [
  { id: 'a', title: "I'm back from my trip, let's play!", streamer: 'FamousStreamer', isLive: true, viewers: 5420, image: 'https://placehold.co/300x170/303030/FFFFFF/png?text=Live+1', avatar: 'https://placehold.co/40x40/303030/FFFFFF/png?text=F' },
  { id: 'b', title: 'Late night coding sesh | !github', streamer: 'CoderGuy', isLive: true, viewers: 1800, image: 'https://placehold.co/300x170/303030/FFFFFF/png?text=Live+2', avatar: 'https://placehold.co/40x40/303030/FFFFFF/png?text=C' },
  { id: 'c', title: 'Valorant Ranked Climb', streamer: 'ProGamer', isLive: true, viewers: 990, image: 'https://placehold.co/300x170/303030/FFFFFF/png?text=Live+3', avatar: 'https://placehold.co/40x40/303030/FFFFFF/png?text=P' },
  { id: 'd', title: 'Making a pizza from scratch', streamer: 'CookingChannel', isLive: true, viewers: 450, image: 'https://placehold.co/300x170/303030/FFFFFF/png?text=Live+4', avatar: 'https://placehold.co/40x40/303030/FFFFFF/png?text=K' },
  { id: 'e', title: 'Studying for the test', streamer: 'StudyBuddy', isLive: true, viewers: 210, image: 'https://placehold.co/300x170/303030/FFFFFF/png?text=Live+5', avatar: 'https://placehold.co/40x40/303030/FFFFFF/png?text=S' },
  { id: 'f', title: 'Art & Design stream', streamer: 'DrawingGirl', isLive: true, viewers: 750, image: 'https://placehold.co/300x170/303030/FFFFFF/png?text=Live+6', avatar: 'https://placehold.co/40x40/303030/FFFFFF/png?text=D' },
];

const HomePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>KICK</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.getKicksButton}>
            <Text style={styles.getKicksButtonText}>Get KICKS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileIcon} />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.featuredLiveContainer} activeOpacity={0.9}>
          <Image source={{ uri: 'https://placehold.co/700x400/303030/FFFFFF/png?text=Featured+Live' }} style={styles.featuredLiveImage} />

          <View style={styles.liveTagFeatured}>
            <Text style={styles.liveText}>LIVE</Text>
          </View>

          <View style={styles.featuredLiveInfoOverlay}>
            <Text style={styles.featuredLiveViewers}>542 watching</Text>
            <Text style={styles.featuredLiveTitle}>Imma finish all these pushups by the...</Text>
            <Text style={styles.featuredLiveStreamer}>shortypie</Text>

            <View style={styles.featuredLiveTagsContainer}>
              <View style={styles.featuredLiveTag}><Text style={styles.featuredLiveTagText}>English</Text></View>
              <View style={styles.featuredLiveTag}><Text style={styles.featuredLiveTagText}>18+</Text></View>
              <View style={styles.featuredLiveTag}><Text style={styles.featuredLiveTagText}>irl</Text></View>
              <View style={styles.featuredLiveTag}><Text style={styles.featuredLiveTagText}>short</Text></View>
            </View>
          </View>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Top Live Categories</Text>
        <FlatList
          horizontal
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryCard} activeOpacity={0.8}>
              <Image source={{ uri: item.image }} style={styles.categoryImage} />
              {item.tag && (
                <View style={styles.categoryTag}>
                  <Text style={styles.categoryTagText}>{item.tag}</Text>
                </View>
              )}
              <View style={styles.categoryInfo}>
                <Text style={styles.categoryTitle}>{item.title}</Text>
                <Text style={styles.categoryViewers}>{item.viewers} watching</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryListContent}
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
              image={item.image}
              avatar={item.avatar}
              tags={item.tags}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.streamListColumnWrapper}
          scrollEnabled={false}
          style={styles.streamList}
        />

        <View style={styles.bottomSpace} />
      </ScrollView>

      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navItem}>
          <View style={[styles.navIcon, styles.activeNavIcon]} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIcon} />
          <Text style={styles.navText}>Browse</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIcon} />
          <Text style={styles.navText}>Following</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIcon} />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;