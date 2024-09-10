import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Icon name="call" size={30} color="#fff" />
        <Text style={styles.headerText}>Vishing Detection</Text>
      </View>

      {/* Intro Section */}
      <View style={styles.intro}>
        <Text style={styles.introTitle}>Welcome to Vishing Protection</Text>
        <Text style={styles.introText}>
          Stay safe from fraudulent calls. Our app helps identify and protect you from vishing scams.
        </Text>
      </View>

      {/* Features Section */}
      <View style={styles.featureSection}>
        <Text style={styles.featureTitle}>Key Features</Text>

        <View style={styles.featureCard}>
          <Icon name="shield-checkmark" size={40} color="#4CAF50" />
          <Text style={styles.featureCardText}>Real-time Call Protection</Text>
        </View>

        <View style={styles.featureCard}>
          <Icon name="analytics" size={40} color="#2196F3" />
          <Text style={styles.featureCardText}>Fraud Detection Analytics</Text>
        </View>

        <View style={styles.featureCard}>
          <Icon name="notifications" size={40} color="#FF5722" />
          <Text style={styles.featureCardText}>Instant Alerts & Notifications</Text>
        </View>
      </View>

      {/* Call to Action Button */}
      <TouchableOpacity style={styles.ctaButton}>
        <Text style={styles.ctaButtonText}>Get Started</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#6200EE',
    height: hp('15%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  intro: {
    padding: 20,
    alignItems: 'center',
  },
  introTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  introText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
  featureSection: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#f4f4f4',
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  featureCardText: {
    fontSize: 18,
    color: '#333',
    marginLeft: 15,
  },
  ctaButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 40,
    marginTop: 30,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Home;