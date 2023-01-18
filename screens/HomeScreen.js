import * as React from 'react';
import { Image, Text, View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

// Import helper code
import Settings from '../constants/Settings';

// Import styling and components
import Styles from "../styles/MainStyle";
import { MyButton } from '../components/MyButton';
import { TextH1, TextParagraph } from "../components/StyledText";


export default function HomeScreen(props) {

  // State management

  const [isLogoColour, setIsLogoColour] = React.useState(true)

  function toggleLogo(){
    setIsLogoColour(!isLogoColour)
  }

  function showHelp() {
    props.navigation.replace('Root', {screen: 'Help'});
  }

  function showViewStaff() {
    props.navigation.replace('Root', {screen: 'viewStaff'});
  }

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <ScrollView style={Styles.container} contentContainerStyle={Styles.contentContainer}>
        
        <View style ={Styles.homeLogoContainer}>
          <Pressable onPress={toggleLogo}>
            <Image
              source={isLogoColour
                ? require("../assets/images/roi-logo.jpg")
                : require("../assets/images/roi-logo-monochrome.jpg")}
              style={Styles.homeLogo}
            />
          </Pressable>
        </View>

        <View style={Styles.homeHeadingContainer}>
          <Text style={Styles.homeHeading}>
            ROI HR Contact Management System
          </Text>
        </View>
        
        <View style={Styles.homeButtonContainer}>
          <MyButton
            text="View staff"
            type="major"    // default*|major|minor
            size="large"      // small|medium*|large
            onPress={showViewStaff}
            buttonStyle={Styles.homeButton}
            />
          <MyButton
            text="Show help"
            type="default"    // default*|major|minor
            size="large"      // small|medium*|large
            onPress={showHelp}
            buttonStyle={Styles.homeButton}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}