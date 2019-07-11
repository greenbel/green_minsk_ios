/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Linking,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import WelcomeHeader from './javascript/components/welcome/WelcomeHeader';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <WelcomeHeader />
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Future plans♻️</Text>
              <Text style={styles.sectionDescription}>Someday you'll see here Yandex.Map with all places,
              where you can recycle your trash and make planet better!</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>About us</Text>
              <Text style={styles.sectionDescription}>We are starting organization called GreenBel.
              The main idea of this project is show people places where they can recycle their trash.
              We think this project will be helpful for people, which follow recycling rules and want 
              know where they can do it safety for our planet.☺️</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Some interesting things😯</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Image source={require('./assets/images/recycle_info.jpeg')} style={{width: 370, height: 285}}/>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Info</Text>
              <Text style={styles.sectionDescription}>
                {/* <ReloadInstructions /> */}
                Until our map in developing stage you can see some info about recycle 
                <Text style={{color: 'blue'}} onPress={() => Linking.openURL('https://target99.by/info.php')}> here.</Text>
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Dev team:</Text>
              <Text style={styles.sectionDescription}>
                {/* <DebugInstructions /> */}
                😼Kiryl Klimovich and 😩Alina Danilevich
              </Text>
            </View>
            <View style={styles.linksInfoSeparator}>
              <Text style={styles.sectionTitle}>Contacts:</Text>  
            </View> 
            <View style={styles.linksInfoSeparator}>
              <Text style={{color: 'blue', fontSize: 17}} onPress={() => Linking.openURL('https://t.me/krlklim')}>😼@krlklim</Text>
            </View>
            <View style={styles.linksInfoSeparator}>
              <Text style={{color: 'blue', fontSize: 17}} onPress={() => Linking.openURL('https://t.me/lincalinc')}>😩@lincalinc</Text>
            </View>    
            {/* <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View> */}
            {/* <LearnMoreLinks /> */}
            <View style={styles.footerSpace}>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  linksInfoSeparator: {
    marginTop: 8,
    paddingHorizontal: 24,
  },
  footerSpace: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
