import React from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Dimensions, Image } from 'react-native';
import { styles } from './style';
import StreamCard from '../../../src/components/card/StreamCard';
import { Ionicons, Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const avatarProfileImage = require('../../assets/avatar.webp');
const mainFeaturedStreamImage = require('../../assets/imagemDeStreamer.webp');
const catSlotsCasinoImage = require('../../assets/casino.webp');
const catGtaImage = require('../../assets/gta.webp');
const catJustChattingImage = require('../../assets/justchatting.jpg');
const defaultStreamPlaceholder = require('../../assets/kickLogo.jpeg');


interface Category {
  id: string;
  title: string;
  viewers: string;
  tag?: string;
  secondaryTag?: string;
  image: any;
}

interface Stream {
  id: string;
  title: string;
  streamer: string;
  isLive: boolean;
  viewers: number;
  tags?: string[];
  avatar: any;
  streamImage: any;
}

const categories: Category[] = [
  { id: '1', title: 'Just Chatting', viewers: '209.1K', tag: 'IRL', secondaryTag: 'Casual', image: catJustChattingImage },
  { id: '2', title: 'Grand Theft Auto V', viewers: '113.3K', tag: 'Shooter', secondaryTag: 'Action', image: catGtaImage },
  { id: '3', title: 'Slots & Casino', viewers: '79K', tag: 'Gambling', secondaryTag: 'Entertainment', image: catSlotsCasinoImage },
  { id: '4', title: 'Rust', viewers: '76.6K', tag: 'FPS', secondaryTag: 'Survival', image: defaultStreamPlaceholder },
];

const streams: Stream[] = [
  { id: 'a', title: "Imma finish all these pushups by the...", streamer: 'shortypie', isLive: true, viewers: 542, tags: ['English', '18+', 'irl', 'short', 'SmileRp', 'pog'], avatar: avatarProfileImage, streamImage: mainFeaturedStreamImage },
  { id: 'b', title: "I'm back from my trip, let's play!", streamer: 'FamousStreamer', isLive: true, viewers: 5420, tags: ['Gaming', 'Adventure'], avatar: avatarProfileImage, streamImage: defaultStreamPlaceholder },
  { id: 'c', title: 'Late night coding sesh | !github', streamer: 'CoderGuy', isLive: true, viewers: 1800, tags: ['Coding', 'Tech', '!github'], avatar: avatarProfileImage, streamImage: defaultStreamPlaceholder },
];


const HomePage: React.FC = () => {
  const featuredStreamData = streams[0];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>KICK</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.getKicksButton}>
            <Text style={styles.getKicksButtonText}>Get KICKS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileIcon}>
            <Image source={avatarProfileImage} style={styles.profileIconImage} resizeMode="cover" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.mainFeaturedStreamContainer} activeOpacity={0.9}>
          <Image source={mainFeaturedStreamImage} style={styles.mainFeaturedStreamImage} resizeMode="cover" />
          <View style={styles.liveTagMainFeatured}>
            <Text style={styles.liveText}>LIVE</Text>
          </View>
          <View style={styles.mainFeaturedStreamOverlay}>
            <Image source={featuredStreamData.avatar} style={styles.mainFeaturedStreamAvatar} />
            <View style={styles.mainFeaturedStreamTextGroup}>
              <Text style={styles.mainFeaturedStreamViewers}>{featuredStreamData.viewers} watching</Text>
              <Text style={styles.mainFeaturedStreamTitle} numberOfLines={1}>{featuredStreamData.title}</Text>
              <Text style={styles.mainFeaturedStreamer}>{featuredStreamData.streamer}</Text>
              <View style={styles.mainFeaturedStreamTagsContainer}>
                {featuredStreamData.tags?.map((tag, index) => (
                  <View key={index} style={styles.mainFeaturedStreamTag}><Text style={styles.mainFeaturedStreamTagText}>{tag}</Text></View>
                ))}
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
              <Image source={item.image} style={styles.categoryImage} resizeMode="cover" />

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
          data={streams.slice(1, 3)}
          renderItem={({ item }) => (
            <StreamCard
              title={item.title}
              streamer={item.streamer}
              isLive={item.isLive}
              viewers={item.viewers}
              tags={item.tags}
              streamImage={item.streamImage}
              avatarImage={item.avatar}
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