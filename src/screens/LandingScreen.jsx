import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BottomBar from '../components/BottomBar';
import JobCard from '../components/JobCard';
import { FlatList } from 'react-native';
import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;

export default function LandingScreen() {
  const jobs = [
    {
      id: '1',
      title: 'Python Developer',
      timeLeft: '29 Days',
      jobDescription: 'This is the job description of the application',
      postedDays: '1 day',
      jobLocation: 'Tokyo, Japan',
    },
    {
      id: '2',
      title: 'AI/ML Trainer',
      timeLeft: '15 Days',
      jobDescription: 'React Native Developer',
      postedDays: '2 days',
      jobLocation: 'Bangalore, India',
    },
    {
      id: '3',
      title: 'Python Developer',
      timeLeft: '29 Days',
      jobDescription: 'This is the job description of the application',
      postedDays: '1 day',
      jobLocation: 'Tokyo, Japan',
    },
    {
      id: '4',
      title: 'React Developer',
      timeLeft: '15 Days',
      jobDescription: 'React Native Developer',
      postedDays: '2 days',
      jobLocation: 'Bangalore, India',
    },
    {
      id: '5',
      title: 'Python Developer',
      timeLeft: '29 Days',
      jobDescription: 'This is the job description of the application',
      postedDays: '1 day',
      jobLocation: 'Tokyo, Japan',
    },
    {
      id: '6',
      title: 'React Developer',
      timeLeft: '15 Days',
      jobDescription: 'React Native Developer',
      postedDays: '2 days',
      jobLocation: 'Bangalore, India',
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#1C1818',
      }}
    >
      <Text style={styles.title}>Job Openings</Text>
      <View
        style={{
          height: screenHeight * 0.8,
          alignItems: 'center',
        }}
      >
        <FlatList
          data={jobs}
          keyExtractor={item => item.id} //for every item give item.id
          showsVerticalScrollIndicator={false} //disable white scroll
          renderItem={({ item, index }) => (
            <JobCard
              title={item.title}
              timeLeft={item.timeLeft}
              jobDescription={item.jobDescription}
              postedDays={item.postedDays}
              jobLocation={item.jobLocation}
              isOdd={(index + 1) % 2 !== 0}
            />
          )}
        />
      </View>
      <BottomBar />
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    color: '#ffffff',
    fontFamily: 'AbhayaLibre-ExtraBold',
    fontSize: 40,
    marginLeft: 40,
    marginVertical:30,
  },
});
