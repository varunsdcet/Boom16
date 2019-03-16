import React, {Component} from 'react';
import {Animated,ActivityIndicator,Platform,TouchableOpacity,TextInput, TouchableNativeFeedback,StyleSheet,StatusBar,AsyncStorage, Text,Alert, View,Image,Dimensions,FlatList} from 'react-native';
const window = Dimensions.get('window');
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const GLOBAL = require('./Global');
const { width, height } = Dimensions.get('window');
import CheckBox from 'react-native-checkbox';
import { PowerTranslator, ProviderTypes, TranslatorConfiguration,TranslatorFactory } from 'react-native-power-translator';
import Button from 'react-native-button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const equalWidth =  (width -20 )
//const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


type Props = {};
const MyStatusBar = ({backgroundColor, ...props}) => (
<View style={[styles.statusBar, { backgroundColor }]}>
  <StatusBar translucent backgroundColor={backgroundColor} {...props} />
</View>
);



export default class Search extends Component<Props> {

   	static navigationOptions = {
      header: null
    };
  constructor(props) {
      super(props)
      this.state = {
        saddress:'',
        country:'',state:'',city:'',code:'',caddress:'',same:'',
        iama :'',
         hidden: true ,
         value: 0,
         issue:'',expiry:'',submit:'',findjobs:'',searchtitle:'', location:'', industry:'',expe:'',salary:'',
      }
    }

    componentWillMount() {
     TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
      const translator = TranslatorFactory.createTranslator();
   translator.translate('Job Title, Keywords, or Company').then(translated => {
      this.setState({ searchtitle: translated });

   });
   translator.translate('Find Jobs').then(translated => {
      this.setState({ findjobs: translated });

   });

   translator.translate('Location').then(translated => {
      this.setState({ location: translated });
   });
   translator.translate('Industry').then(translated => {
      this.setState({ industry: translated });
   });   translator.translate('Work Experience').then(translated => {
         this.setState({ expe: translated });
      });
      translator.translate('Min Salary').then(translated => {
            this.setState({ salary: translated });
         });
     }

     back = () => {
   this.props.navigation.goBack()
  }

       buttonClickListener=()=>{
         this.props.navigation.navigate('SetFilter')
       }

   render() {
         TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
    return (

      <View style={styles.container}>
         <MyStatusBar backgroundColor="#201344" barStyle="light-content" />
        <View style = {styles.appBar} >
        <View style = {{flex:1,flexDirection:'row'}}>
        <TouchableOpacity onPress = {()=>this.props.navigation.goBack()}>
        <Image style={{marginLeft :10,marginTop :12,height :25,width :25,resizeMode:'contain'}}
                       source={require('./back.png')} />
                       </TouchableOpacity>
                       <PowerTranslator style={{marginLeft : 15,marginTop:12,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} text={'Search'} />
        </View>

          </View>

      <KeyboardAwareScrollView keyboardShouldPersistTaps='always'>
      <View style={{flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>

      <View style={{backgroundColor:'white',color :'white',flexDirection:'row' ,height:40, flex: 1 ,marginTop: 15, marginLeft:10,marginRight:10,marginBottom:10,borderRadius :6,width : window.width- 20, shadowColor: 'black',padding:5,
         shadowOffset: { width: 0, height: 1 },
         shadowOpacity: 0.6,
         shadowRadius: 2,
         elevation: 5 }}>
      <Image style={{width:25, height:25, marginLeft:10,resizeMode:'contain', alignSelf:'center'}} source={require('./bsrch.png')}
      />
      <TextInput style={{marginLeft:10,height:45,width:window.width,color:'#666666',marginTop:4,alignSelf:'center',fontFamily :'Poppins-Medium', fontSize:13 }} placeholder={this.state.searchtitle}/>

      </View>

      <View style={{backgroundColor:'white',color :'white',flexDirection:'row' ,height:40, flex: 1 ,margin: 10,borderRadius :6,width : window.width- 20, shadowColor: 'black',padding:5,
         shadowOffset: { width: 0, height: 1 },
         shadowOpacity: 0.6,
         shadowRadius: 2,
         elevation: 5 }}>
      <Image style={{width:25, height:25, marginLeft:10,resizeMode:'contain', alignSelf:'center'}} source={require('./loc.png')}
      />
      <TextInput style={{marginLeft:10,height:45,width:window.width,color:'#666666',marginTop:4,alignSelf:'center',fontFamily :'Poppins-Medium', fontSize:13 }} placeholder={this.state.location}/>

      </View>

      <View style={{backgroundColor:'white',color :'white',flexDirection:'row' ,height:40, flex: 1 ,margin: 10,borderRadius :6,width : window.width- 20, shadowColor: 'black',padding:5,
         shadowOffset: { width: 0, height: 1 },
         shadowOpacity: 0.6,
         shadowRadius: 2,
         elevation: 5 }}>
      <Image style={{width:25, height:25, marginLeft:10,resizeMode:'contain', alignSelf:'center'}} source={require('./briefc.png')}
      />
      <TextInput style={{marginLeft:10,height:45,width:window.width,color:'#666666',marginTop:4,alignSelf:'center',fontFamily :'Poppins-Medium', fontSize:13 }} placeholder={this.state.industry}/>

      </View>

      <View style={{backgroundColor:'white',color :'white',flexDirection:'row' ,height:40, flex: 1 ,margin: 10,borderRadius :6,width : window.width- 20, shadowColor: 'black',padding:5,
         shadowOffset: { width: 0, height: 1 },
         shadowOpacity: 0.6,
         shadowRadius: 2,
         elevation: 5 }}>
      <Image style={{width:25, height:25, marginLeft:10,resizeMode:'contain', alignSelf:'center'}} source={require('./hands.png')}
      />
      <TextInput style={{marginLeft:10,height:45,width:window.width,color:'#666666',marginTop:4,alignSelf:'center',fontFamily :'Poppins-Medium', fontSize:13 }} placeholder={this.state.expe}/>

      </View>

      <View style={{backgroundColor:'white',color :'white',flexDirection:'row' ,height:40, flex: 1 ,margin: 10,borderRadius :6,width : window.width- 20, shadowColor: 'black',padding:5,
         shadowOffset: { width: 0, height: 1 },
         shadowOpacity: 0.6,
         shadowRadius: 2,
         elevation: 5 }}>
      <Image style={{width:25, height:25, marginLeft:10,resizeMode:'contain', alignSelf:'center'}} source={require('./briefc.png')}
      />
      <TextInput style={{marginLeft:10,height:45,width:window.width,color:'#666666',marginTop:4,alignSelf:'center',fontFamily :'Poppins-Medium', fontSize:13 }} placeholder={this.state.salary}/>

      </View>

<Button
containerStyle={{width:window.width-20,marginRight:10,marginLeft : 10,marginTop : 20,padding:10, height:40, overflow:'hidden', borderRadius:22, backgroundColor: '#261650'}}

style={{fontSize: 14, color: 'white'}}
onPress={this.buttonClickListener}
>
{this.state.findjobs}
</Button>
<Text></Text>
      </View>
       </KeyboardAwareScrollView>
            </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },


  appBar: {
    backgroundColor:'#261650',
    height: APPBAR_HEIGHT,



  },
  content: {
    flex: 1
  },
});
