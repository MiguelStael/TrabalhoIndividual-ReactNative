import React from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { styles } from './style';
import StreamCard from '../../../src/components/card/StreamCard';
import { Ionicons, Feather } from '@expo/vector-icons';

Dimensions.get('window');

interface Category {
  id: string;
  title: string;
  viewers: string;
  tag?: string;
  secondaryTag?: string;
}

interface Stream {
  id: string;
  title: string;
  streamer: string;
  isLive: boolean;
  viewers: number;
  tags?: string[];
}

const categories: Category[] = [
  { id: '1', title: 'Just Chatting', viewers: '209.1K', tag: 'IRL', secondaryTag: 'Casual' },
  { id: '2', title: 'Grand Theft Auto V', viewers: '113.3K', tag: 'Shooter', secondaryTag: 'Action' },
  { id: '3', title: 'Slots & Casino', viewers: '79K', tag: 'Gambling', secondaryTag: 'Entertainment' },
  { id: '4', title: 'Rust', viewers: '76.6K', tag: 'FPS', secondaryTag: 'Survival' },
  { id: '5', title: 'Music', viewers: '50K', tag: 'IRL', secondaryTag: 'Art' },
];

const streams: Stream[] = [
  { id: 'a', title: "I'm back from my trip, let's play!", streamer: 'FamousStreamer', isLive: true, viewers: 5420, tags: ['Gaming', 'Adventure'] },
  { id: 'b', title: 'Late night coding sesh | !github', streamer: 'CoderGuy', isLive: true, viewers: 1800, tags: ['Coding', 'Tech', '!github'] },
  { id: 'c', title: 'Valorant Ranked Climb', streamer: 'ProGamer', isLive: true, viewers: 990, tags: ['FPS', 'Valorant'] },
  { id: 'd', title: 'Making a pizza from scratch', streamer: 'CookingChannel', isLive: true, viewers: 450, tags: ['Cooking', 'Food'] },
  { id: 'e', title: 'Studying for the test', streamer: 'StudyBuddy', isLive: true, viewers: 210, tags: ['Study', 'Chill'] },
  { id: 'f', title: 'Art & Design stream', streamer: 'DrawingGirl', isLive: true, viewers: 750, tags: ['Art', 'Design'] },
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
          <View style={styles.featuredLiveSimulatedImage}>
            <Text style={styles.simulatedImageText}>ARC Raiders</Text>
            <Text style={styles.simulatedImageTextSmall}>INVENTORY & MAP</Text>
          </View>

          <View style={styles.liveTagFeatured}>
            <Text style={styles.liveText}>LIVE</Text>
          </View>
          <View style={styles.featuredLiveInfoOverlay}>
            <View style={styles.featuredLiveAvatar} />

            <View style={styles.featuredLiveTextGroup}>
              <Text style={styles.featuredLiveViewers}>542 watching</Text>
              <Text style={styles.featuredLiveTitle} numberOfLines={1}>Imma finish all these pushups by the...</Text>
              <Text style={styles.featuredLiveStreamer}>shortypie</Text>

              <View style={styles.featuredLiveTagsContainer}>
                <View style={styles.featuredLiveTag}><Text style={styles.featuredLiveTagText}>English</Text></View>
                <View style={styles.featuredLiveTag}><Text style={styles.featuredLiveTagText}>18+</Text></View>
                <View style={styles.featuredLiveTag}><Text style={styles.featuredLiveTagText}>irl</Text></View>
                <View style={styles.featuredLiveTag}><Text style={styles.featuredLiveTagText}>short</Text></View>
                <View style={styles.featuredLiveTag}><Text style={styles.featuredLiveTagText}>SmileRp</Text></View>
                <View style={styles.featuredLiveTag}><Text style={styles.featuredLiveTagText}>pog</Text></View>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Top Live Categories</Text>
        <FlatList
          horizontal
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryCard} activeOpacity={0.8}>
              <View style={styles.categorySimulatedImage}>
                <Text style={styles.simulatedCategoryTitle}>{item.title}</Text>
              </View>

              {item.tag && (
                <View style={styles.categoryTag}>
                  <Text style={styles.categoryTagText}>{item.tag}</Text>
                </View>
              )}
              <View style={styles.categoryInfo}>
                <Text style={styles.categoryTitle}>{item.title}</Text>
                <Text style={styles.categoryViewers}>{item.viewers} watching</Text>
                <View style={styles.categoryBottomTags}>
                  <Text style={styles.categoryBottomTagText}>{item.tag}</Text>
                  <Text style={styles.categoryBottomTagText}>{item.secondaryTag}</Text>
                </View>
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
          <Ionicons name="home" size={24} color="#00FF00" />
          <Text style={[styles.navText, { color: '#00FF00' }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="compass-outline" size={24} color="#B0B0B0" />
          <Text style={styles.navText}>Browse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="heart" size={24} color="#B0B0B0" />
          <Text style={styles.navText}>Following</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="search" size={24} color="#B0B0B0" />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;