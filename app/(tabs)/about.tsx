import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Shield, Phone, MessageSquare, Headphones, AlertTriangle, CheckCircle, HelpCircle, Info, Circle } from 'lucide-react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '@/components/Header';

const AboutScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      
      <View style={styles.content}>
        <View style={[styles.card, styles.introCard]}>
          <Text style={styles.subtitle}>Safeguarding Your Calls</Text>
          <Text style={styles.text}>
            Welcome to the cutting-edge Vishing Protection app, your personal guardian against voice phishing scams. 
            Our innovative solution uses advanced AI technology to keep you safe during phone calls.
          </Text>
        </View>

        <View style={[styles.card, styles.featuresCard]}>
          <Text style={styles.cardTitle}>Key Features</Text>
          
          <FeatureItem
            icon={<Phone color="#FFFFFF" size={24} />}
            text="Automatic activation on incoming calls"
            color="#4CAF50"
          />
          <FeatureItem
            icon={<MessageSquare color="#FFFFFF" size={24} />}
            text="Real-time translation to English"
            color="#2196F3"
          />
          <FeatureItem
            icon={<Headphones color="#FFFFFF" size={24} />}
            text="Live processing using LLaMA model"
            color="#FF9800"
          />
          <FeatureItem
            icon={<Shield color="#FFFFFF" size={24} />}
            text="Instant vishing threat detection"
            color="#9C27B0"
          />
        </View>

        <View style={[styles.card, styles.statusCard]}>
          <Text style={styles.cardTitle}>Call Status Indicators</Text>
          
          <View style={styles.statusContainer}>
            <StatusItem
              icon={<CheckCircle color="#FFFFFF" size={32} />}
              text="Secured"
              description="The call is safe and no threats detected"
              color="#4CAF50"
            />
            <StatusItem
              icon={<AlertTriangle color="#FFFFFF" size={32} />}
              text="Dangerous"
              description="High risk of vishing detected"
              color="#F44336"
            />
            <StatusItem
              icon={<HelpCircle color="#FFFFFF" size={32} />}
              text="Not Confirmed"
              description="Unable to determine the call's safety"
              color="#FFC107"
            />
          </View>
        </View>

        <View style={[styles.card, styles.infoCard]}>
          <Info color="#FFFFFF" size={24} style={styles.infoIcon} />
          <Text style={styles.infoText}>
            Our app provides real-time feedback during your calls, helping you stay informed and protected against potential vishing threats.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const FeatureItem: React.FC<{ icon: React.ReactNode; text: string; color: string }> = ({ icon, text, color }) => (
  <View style={[styles.featureContainer, { backgroundColor: color }]}>
    <View style={styles.iconContainer}>{icon}</View>
    <Text style={styles.featureText}>{text}</Text>
  </View>
);

const StatusItem: React.FC<{ icon: React.ReactNode; text: string; description: string; color: string }> = ({ icon, text, description, color }) => (
  <View style={[styles.statusItem, { backgroundColor: color }]}>
    <View style={styles.statusIconContainer}>{icon}</View>
    <Text style={styles.statusText}>{text}</Text>
    <Text style={styles.statusDescription}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  header: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContent: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#666666',
    lineHeight: 24,
  },
  card: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  introCard: {
    backgroundColor: '#FFFFFF',
  },
  featuresCard: {
    backgroundColor: '#E1F5FE',
  },
  statusCard: {
    backgroundColor: '#FFF3E0',
  },
  infoCard: {
    backgroundColor: '#3F51B5',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 15,
  },
  featureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderRadius: 12,
    overflow: 'hidden',
  },
  iconContainer: {
    padding: 12,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  featureText: {
    fontSize: 16,
    color: '#FFFFFF',
    flex: 1,
    marginLeft: 12,
    paddingVertical: 12,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  statusItem: {
    alignItems: 'center',
    width: '31%',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  statusIconContainer: {
    marginBottom: 8,
  },
  statusText: {
    marginTop: 5,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  statusDescription: {
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 5,
  },
  infoIcon: {
    marginRight: 16,
  },
  infoText: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 14,
  },
 
  backgroundElements: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.6,
  },
  circle1: {
    position: 'absolute',
    top: -50,
    left: -50,
  },
  circle2: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  circle3: {
    position: 'absolute',
    top: 40,
    right: -60,
  },
 
  iconGlow: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    opacity: 0.7,
  },
  
});

export default AboutScreen;