import { StyleSheet, Platform, StatusBar } from "react-native";
import Colours from "../constants/Colours";

export default StyleSheet.create({

    // Add status bar space for Android (<SafeAreaView> currently only works on iOS)
    safeAreaView: {  
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    
    // GENERAL STYLES
    
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        padding: 10,
        paddingTop: 20,
    },
    bodyText: {
        marginVertical: 5,
        fontSize: 17,
        color: Colours.roiCharcoal,  // COLOUR: dark grey
        lineHeight: 24,
    },
    h1: {
        marginTop: 30,
        marginBottom: 5,
        fontSize: 30,
        color: Colours.roiRed,  // COLOUR: primary colour 1
        lineHeight: 35,
    },
    h2: {
        marginTop: 20,
        marginBottom: 5,
        fontSize: 24,
        color: Colours.roiCharcoal,  // COLOUR: primary colour 2
        lineHeight: 24,
    },
    h3: {
        marginTop: 10,
        marginBottom: 5,
        fontSize: 20,
        color: Colours.roiMidGrey,  // COLOUR: medium grey
        lineHeight: 25,
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        paddingLeft: 50,
        fontSize: 17,
    },
    listItemBullet: {
        position: 'absolute',
        top: 1,
        left: 30,
    },
    button: {
        paddingVertical: 13,
        paddingHorizontal: 26,
        backgroundColor: Colours.roiMidGrey,  // COLOUR: medium grey
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
    buttonMajor: {
        backgroundColor: Colours.roiRed,  // COLOUR: primary colour 1
    },
    buttonMajorText: {
        color: 'white',
    },
    buttonMinor: {
        backgroundColor: Colours.roiLightGrey,  // COLOUR: light grey
    },
    buttonMinorText: {
        color: Colours.roiCharcoal,  // COLOUR: dark grey
    },
    buttonSmall: {
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    buttonSmallText: {
        fontSize: 16,
    },
    buttonLarge: {
        paddingVertical: 22,
        paddingHorizontal: 36,
    },
    buttonLargeText: {
        fontSize: 20,
    },
    form: {
        marginVertical: 10,
    },
    fieldSet: {
        marginVertical: 15,
        paddingTop: 15,
        paddingBottom: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: Colours.roiLightGrey,  // COLOUR: light grey
        borderRadius: 5,
    },
    legend: {
        position: 'absolute',
        top: -18,
        left: 5,
        margin: 0,
        paddingHorizontal: 5,
        paddingVertical: 0,
        color: Colours.roiBurntOrange,  // COLOUR: main secondary colour
        backgroundColor: 'white',
    },
    formRow: {
        flex: 1,
        flexDirection: 'row',
        flexBasis: "auto",
        marginVertical: 2,
    },
    label: {
        width: 110,
        flexGrow: 0,
        flexShrink: 0,
        marginRight: 10,
        fontWeight: 'bold',
        fontSize: 17,
    },
    textInput: {
        flexGrow: 1,
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderWidth: 1,
        borderColor: Colours.roiLightGrey,  // COLOUR: light grey
        borderRadius: 3,
    },
    picker: {
        flexGrow: 1,
        width: "100%",
        height: 42,
        // maxHeight: 40,
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderWidth: 1,
        borderColor: Colours.roiLightGrey,  // COLOUR: light grey
        borderRadius: 3,
    },
    pickerItem: {
        height: 42,
    },
    
    // HEADER
    
    headerBar: {
        backgroundColor: 'white',
    },
    headerBarTitle: {
        color: Colours.roiRed,  // COLOUR: primary colour 1
        textAlign: 'left',
    },

    // FOOTER NAVIGATION

    navBar: {
        backgroundColor: Colours.roiCharcoal,  // COLOUR: dark grey
    },
    navBarIcon: {
        marginBottom: -5,
    },
    navBarLabel: {
        marginBottom: 3,
    },

    // HOME SCREEN

    homeLogoContainer: {
        alignItems: "center",
        marginTop: 20,
        marginBottom: 40,
    },

    homeLogo: {
        width: 300,
        height: 150,
        resizeMode: "contain",
    },

    homeHeadingContainer: {
        alignItems: "center",
        marginHorizontal: 50,
        marginBottom: 30,
    },

    homeHeading: {
        fontSize: 40,
        lineHeight: 45,
        textAlign: "center",
        color: Colours.roiRed,
    },

    homeButtonContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },

    homeButton: {
        flex: 1,
        marginHorizontal: 10,
        paddingHorizontal: 10,
    },
    
    // SETTINGS  SCREEN
    
    settingsButtonContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingVertical: 15,
        paddingHorizontal: 5,
    },

    settingsButton: {
        marginHorizontal: 10,
    },

    

    
    
});
