import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Dimensions, View, Button,TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
const window = Dimensions.get('window');
import { PowerTranslator, ProviderTypes, TranslatorConfiguration } from 'react-native-power-translator';
const GLOBAL = require('./Global');
const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 160,
    marginTop : - 280,

  },
  titli:{
    color:'#261650',
    fontWeight:'bold',
    fontFamily: "Poppins-Medium",
    marginTop:window.height/2-30,
  },
  guides:{
    color:'#261650',
    fontWeight:'bold',
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    marginBottom:100
  },
});

const slides = [
  {
    key: 'somethun',
    text: 'We guide you to create your profile.\nCreating profile on Boomoverseas is \nfree.',
    textStyle: styles.guides,
    image: require('./h1.png'),
    imageStyle: styles.image,
    backgroundColor: '#ffffff',
    title: 'Create Profile',
    titleStyle:styles.titli,
  },
  {
    key: 'somethun-dos',
    title: 'Complete & Active Profile',
    text: '\n\n\n Recruiters search for profile to hire.\nComplete profiles have higher \nchances of getting contacted \n by recruiters.',
    textStyle: styles.guides,
    image: require('./h2.png'),
    imageStyle: styles.image,
    backgroundColor: '#ffffff',
    titleStyle:styles.titli,
  },
  {
    key: 'somethun1',
    title: 'Get Job Recommendations',
    text: '\n\n We send your relevant jobs based \n on your profile data and jobs \nyou are applying to.',
    textStyle: styles.guides,
    image: require('./h1_03.png'),
    imageStyle: styles.image,
    backgroundColor: '#ffffff',
    titleStyle:styles.titli,
  }
];

export default class Slider extends React.Component {
  resPress = () => {
  this.props.navigation.navigate('Login')

    }

  static navigationOptions = {
    title: 'Login',
    header: null
  };

  state = {
    showRealApp: false
  }
  _onDone = () => {
    this.setState({ showRealApp: true });
  }
  render() {
      TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return (
        <View style={{flex:1, flexDirection:'column'}}>
      <AppIntroSlider
      slides={slides}
      hideNextButton ='true'
      hideDoneButton='true'
      onDone={this._onDone}/>

      <View style = {{height:60,flexDirection :'row'}}>




      <TouchableOpacity

          onPress={() => this.resPress()}
        >
      <View style = {{marginTop : 15,marginLeft :15,width :window.width/2 -25, height:40, overflow:'hidden', borderRadius:20, backgroundColor: '#261650'}}>
  {GLOBAL.language == "en" && (
       <Text style={{textAlign :'center',fontFamily: "Poppins-Medium",padding :10 ,color :'white'}} >{'Job Seeker'} </Text>
    )}

    {GLOBAL.language != "en" && (
         <PowerTranslator style={{textAlign :'center',fontFamily: "Poppins-Medium",padding :10 ,color :'white'}} text={'Job Seeker'} />
      )}
      </View>

      </TouchableOpacity>

      <TouchableOpacity

          onPress={() => this.resPress()}
        >
      <View style = {{marginTop : 15,marginLeft :15,width :window.width/2 -25, height:40, overflow:'hidden', borderRadius:20, backgroundColor: '#261650'}}>

{GLOBAL.language == "en" && (
       <Text style={{textAlign :'center',fontFamily: "Poppins-Medium",padding :10 ,color :'white'}}>{'Job Provider'} </Text>
)}
{GLOBAL.language != "en" && (
       <PowerTranslator style={{textAlign :'center',fontFamily: "Poppins-Medium",padding :10 ,color :'white'}} text={'Job Provider'} />
)}

      </View>

      </TouchableOpacity>



        </View>
        </View>

      );
    }
  }
}
