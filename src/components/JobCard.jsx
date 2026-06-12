import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
export default function JobCard({
  title,
  timeLeft,
  jobDescription,
  postedDays,
  jobLocation,
  isOdd,
}) {
  return (

    <View style={[styles.jobCard, isOdd ? styles.oddCard : styles.evenCard]}>
        
      <View style={styles.jobCardContainer}>
        <Text style={[styles.jobTitle, !isOdd && styles.darkText]}>
          {title}
        </Text>

        <Text style={[styles.jobTi, !isOdd && styles.darkText]}>
          {timeLeft}
        </Text>
      </View>

      <Text style={[styles.jobDescription, !isOdd && styles.darkText]}>
        {jobDescription}
      </Text>

      <View style={styles.jobCardContainer}>
        <Text style={[styles.jobBtm, !isOdd && styles.darkText]}>
          {`${postedDays} days ago`}
        </Text>

        <Text style={[styles.jobBtm, !isOdd && styles.darkText]}>
          {jobLocation}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  jobCard: {
    width: 350,
    flexDirection: 'column',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    gap: 30,
    marginVertical: 10,
  },

  oddCard: {
    backgroundColor: 'rgba(30,30,30,0.75)',
  },

  evenCard: {
    backgroundColor: 'rgba(244,244,244,0.75)',
  },

  jobCardContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },

  jobTitle: {
    color: '#ffffff',
    fontFamily: 'AbhayaLibre-Medium',
    fontSize: 25,
  },
    jobTi: {
    color: '#ffffff',
    fontFamily: 'AbhayaLibre-Medium',
    fontSize: 15,
  },

  jobDescription: {
    color: '#ffffff',
    fontFamily: 'AbhayaLibre-Regular',
    fontSize: 20,
    width: 250,
  },

  jobBtm: {
    color: '#ffffff',
    fontFamily: 'AbhayaLibre-Regular',
    fontSize: 15,
  },

  darkText: {
    color: '#000000',
  },
});
