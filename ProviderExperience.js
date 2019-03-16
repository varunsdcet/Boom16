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



export default class ProviderExperience extends Component<Props> {

   	static navigationOptions = {
      header: null
    };
  constructor(props) {
      super(props)
      this.state = {
        oneline:'',
        twoline:'',skip:'',yes:'',no:'',
        iama :'',
         hidden: true ,
         value: 0,
         married:'',
         single:'',next:'',dlevel:'',minage:'', maxage:'',

      }
    }

    componentWillMount() {
     TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
      const translator = TranslatorFactory.createTranslator();
   translator.translate('Yes').then(translated => {
      this.setState({ yes: translated });

   });
   translator.translate('No').then(translated => {
      this.setState({ no: translated });

   });
   translator.translate('Next').then(translated => {
      this.setState({ next: translated });

   });
   translator.translate('Skip').then(translated => {
      this.setState({ skip: translated });

   });
   translator.translate('Minimum Age').then(translated => {
      this.setState({ minage: translated });

   });
   translator.translate('Maximum Age').then(translated => {
      this.setState({ maxage: translated });

   });
   translator.translate('Degree Level').then(translated => {


      this.setState({ dlevel: translated });

      //Do something with the translated text
   });

     }

     back = () => {
   this.props.navigation.goBack()
  }

         buttonClickListenerNext=()=>{
           this.props.navigation.navigate('ProviderDuty')
         }

   render() {
     var radio_props_one = [
       {label: this.state.yes, value: 0 },
       {label: this.state.no, value: 1 }
     ];
     var radio_props_two = [
       {label: this.state.yes, value: 0 },
       {label: this.state.no, value: 1 }
     ];

         TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
    return (

      <View style={styles.container}>
         <MyStatusBar backgroundColor="#201344" barStyle="light-content" />
        <View style = {styles.appBar} >
        <View style = {{flex:1,flexDirection:'row', marginTop:8}}>
        <TouchableOpacity onPress = {()=>this.props.navigation.goBack()}>
        <Image style={{marginLeft :10,height :25,width :25,resizeMode:'contain'}}
                       source={require('./back.png')} />
                       </TouchableOpacity>
                       <PowerTranslator style={{marginLeft : 15,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} text={'Experience'} />
        </View>

          </View>

      <KeyboardAwareScrollView keyboardShouldPersistTaps='always'>
      <View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between'}}>
      <PowerTranslator style={{color:'grey', fontSize:14, marginLeft:15, marginTop:15, marginRight:15 }} text={'EXPERIENCE'}/>

      <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:15, marginTop:10, marginRight:15 }} text={'IS MINIMUM EXPERIENCE REQUIRED?'}/>

      <RadioForm style={{marginLeft:15, marginTop:15}}
        labelStyle={{paddingRight:20, marginTop:-3}}
          radio_props={radio_props_one}
          initial={0}
          formHorizontal={true}
          buttonSize={9}
          buttonColor={'#201344'}
          labelHorizontal={true}
          animation={true}
          labelColor={'black'}
          selectedButtonColor={'#201344'}
          onPress={(value) => {this.setState({value:value})}}
        />

        <View style={{marginTop:5,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

      <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:15, marginTop:20, marginRight:15 }} text={'IS FOREIGN EXPERIENCE REQUIRED?'}/>
      <RadioForm style={{marginLeft:15, marginTop:15}}
        labelStyle={{paddingRight:20, marginTop:-3}}
          radio_props={radio_props_two}
          initial={0}
            buttonSize={9}
          formHorizontal={true}
          buttonColor={'#201344'}
          labelHorizontal={true}
          animation={true}
          labelColor={'black'}
          selectedButtonColor={'#201344'}
          onPress={(value) => {this.setState({value:value})}}
        />
        <View style={{marginTop:5,backgroundColor:'#bfbfbf',width:window.width-40,marginLeft:20,height:1}}></View>

        <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:15, marginTop:15 }} text={'REQUIRED DEGREE LEVELS'}/>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <TextInput style={{height:45,width:window.width-50,fontFamily :'Poppins-Medium', marginLeft:15}}  placeholderTextColor={'black'}
          placeholder={this.state.dlevel}/>
        <Image style={{width:20, height:20, resizeMode:'contain',marginTop:8 }} source={require('./rarrow.png')}/>
        </View>
        <TouchableOpacity style={{alignSelf:'flex-start', width:110, height:35,marginLeft:20, marginTop:1}}>
              <View style={{alignSelf:'flex-start', width:110, height:35,padding:8,borderRadius:4, backgroundColor:'#201344', flexDirection:'row'}}>
              <Image style={{width:15, height:15,resizeMode:'contain', marginTop:3}} source={require('./plus.png')}/>
              <PowerTranslator style={{color:'white', fontSize:12,marginLeft:7,fontFamily :'Poppins-Medium' }} text={'Add More'}/>
              </View>
              </TouchableOpacity>
              <View style={{marginTop:8,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>


        <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:15, marginTop:15 }} text={'DURATION OF EMPLOYMENT'}/>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <TextInput style={{height:45,width:window.width-50,fontFamily :'Poppins-Medium', marginLeft:15}}  placeholderTextColor={'black'}
          placeholder={'25'}/>
        <Image style={{width:20, height:20, resizeMode:'contain',marginTop:8 }} source={require('./rarrow.png')}/>
        </View>
        <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

        <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:15, marginTop:20,fontFamily :'Poppins-Medium' }} text={'REQUIRED AGE RANGE'}/>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'row'}}>
        <TextInput style={{height:45,width:window.width/2-30,fontFamily :'Poppins-Medium', marginLeft:15,}} placeholder={this.state.minage}placeholderTextColor={'black'}/>
        <Image style={{width:20, height:20, resizeMode:'contain',marginTop:10,}} source={require('./rarrow.png')}/>
        </View>
        </View>
        <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'row'}}>
        <TextInput style={{height:45,width:window.width/2-30,fontFamily :'Poppins-Medium', }} placeholder={this.state.maxage}placeholderTextColor={'black'}/>
        <Image style={{width:20, height:20, resizeMode:'contain',marginTop:10 }} source={require('./rarrow.png')}/>
        </View>
        </View>
        </View>
        <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>


      </View>
       </KeyboardAwareScrollView>
<Button
containerStyle={{width:window.width-20,marginRight:10,marginLeft : 10,marginTop : 20,padding:10, height:40, overflow:'hidden', borderRadius:22, backgroundColor: '#261650'}}

style={{fontSize: 14, color: 'white'}}
onPress={this.buttonClickListenerNext}
>
{this.state.next}
</Button>

<Text></Text>

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
