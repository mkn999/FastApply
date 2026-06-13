import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BottomBar from '../components/BottomBar';
import JobCard from '../components/JobCard';
import { FlatList } from 'react-native';
import { Dimensions } from 'react-native';
import Test from '../components/test';
import { useEffect, useState } from 'react';
import Loading from '../components/Loader';

const screenHeight = Dimensions.get('window').height;

export default function LandingScreen() {
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(true); //for loading
  const [error, setError] = useState(''); //if server is off / not working
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      }
      const response = await fetch('http://10.48.46.124:5000/jobs');

      const data = await response.json();
      setJob(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      setError('Uh oh! Server not responding...');
      console.log('Fetch Error', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
      setError()
    }
  };

  if (loading) {
    return <Loading />;
  }

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
          data={job}
          keyExtractor={item => item.id.toString()} //for every item give item.id
          showsVerticalScrollIndicator={false} //disable white scroll
          refreshing={refreshing}
          onRefresh={() => loadJobs(true)} //makes the isRefresh true
          renderItem={({ item, index }) => (
            <JobCard
              title={item.title}
              timeLeft={item.timeLeft}
              jobDescription={item.jobDescription}
              postedDays={item.company}
              jobLocation={item.jobLocation}
              isOdd={(index + 1) % 2 !== 0}
            />
          )}
        />
      </View>
      <Test />

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
    marginVertical: 30,
  },
});
