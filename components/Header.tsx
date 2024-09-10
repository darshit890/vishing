import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Shield } from 'lucide-react-native';

const Header: React.FC = () => {
  return (
    <LinearGradient
      colors={['#4158D0', '#C850C0', '#FFCC70']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.header}
    >
      <View style={styles.backgroundElements}>
        <View style={[styles.circle, styles.circle1]} />
        <View style={[styles.circle, styles.circle2]} />
        <View style={[styles.circle, styles.circle3]} />
      </View>
      <View style={styles.headerContent}>
        <View style={styles.iconContainer}>
          <Shield color="#FFFFFF" size={60} strokeWidth={1.5} />
          <LinearGradient
            colors={['rgba(255,255,255,0.8)', 'rgba(255,255,255,0.2)']}
            style={styles.iconGlow}
          />
        </View>
        <Text style={styles.title}>Vishing Protection</Text>
        <Text style={styles.subtitle}>Your Call Guardian</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  backgroundElements: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.6,
  },
  circle: {
    position: 'absolute',
    borderRadius: 100, // Make it a circle
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  circle1: {
    width: 100,
    height: 100,
    top: -50,
    left: -50,
  },
  circle2: {
    width: 80,
    height: 80,
    bottom: 20,
    right: 20,
  },
  circle3: {
    width: 120,
    height: 120,
    top: 40,
    right: -60,
  },
  headerContent: {
    alignItems: 'center',
    zIndex: 1,
  },
  iconContainer: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconGlow: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    opacity: 0.7,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.9,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});

export default Header;