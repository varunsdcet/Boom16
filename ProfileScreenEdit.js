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
import moment from 'moment';
//const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


type Props = {};
var now = moment().format();

const MyStatusBar = ({backgroundColor, ...props}) => (
<View style={[styles.statusBar, { backgroundColor }]}>
  <StatusBar translucent backgroundColor={backgroundColor} {...props} />
</View>
);



export default class ProfileScreenEdit extends Component<Props> {

   	static navigationOptions = {
      header: null
    };
  constructor(props) {
      super(props)
      this.state = {
        slang:'',slanglevel:'',
        twoline:'',skip:'',yes:'',no:'',
        iama :'',
         hidden: true ,
         value: 0,
         married:'',exptitle:'',
         single:'',next:'',selectskill:'',sexp:'',pdetails:[],expdetails:'',summary:'',nationality:'',
         edudetails:'',langdetails:'',
      }
    }

    componentWillMount() {
     TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
      const translator = TranslatorFactory.createTranslator();
   translator.translate('Select Language').then(translated => {
      this.setState({ slang: translated });

   });
   translator.translate('Select Language Level').then(translated => {
      this.setState({ slanglevel: translated });

   });
   translator.translate('Next').then(translated => {
      this.setState({ next: translated });

   });
   translator.translate('Skip').then(translated => {
      this.setState({ skip: translated });

   });
   translator.translate('Register Now').then(translated => {
      this.setState({ register: translated });
      //Do something with the translated text
   });

   this.getMoviesFromApiAsync();
     }

getMoviesFromApiAsync=()=>{
  const url = GLOBAL.BASE_URL + 'user_my_profile'

      // you can append anyone.

      fetch(url, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    _token : '8cP9uTwlYsPcFdUqWcgl9zYAekPbNRc6vAg2dD98awUDsrzUUBxVG4GixEGq',
    user_id:'12',
    }),

    }).then((response) => response.json())
    .then((responseJson) => {

    if(responseJson.status=="success"){
//      alert(JSON.stringify(responseJson.data))
      this.setState({pdetails:responseJson.data})
      this.setState({expdetails:responseJson.data.profileExperience})
      this.setState({edudetails: responseJson.data.profileEducation})
      this.setState({langdetails: responseJson.data.profileLanguages})
      const translator = TranslatorFactory.createTranslator();
      //      alert(JSON.stringify(this.state.langdetails))

      translator.translate(this.state.pdetails.first_name).then(translated => {
         this.setState({ fname: translated });
         //Do something with the translated text
      });
      translator.translate(this.state.pdetails.summary).then(translated => {
         this.setState({ summary: translated });
      });
      translator.translate(this.state.pdetails.nationality).then(translated => {
         this.setState({ nationality: translated });
      });
    }else{
      alert('Something went wrong.')
    }


    })
    .catch((error) => {
      console.error(error);

    });
    }


     back = () => {
   this.props.navigation.goBack()
  }

  _renderItem = ({item,index}) => {
    var d= moment(item.date_start).format('MMMM');
    var s= moment(item.date_start).format('YYYY');

    var ds= moment(item.date_end).format('MMMM');
    var ss= moment(item.date_end).format('YYYY');
    var startdate= d+', '+s;
    var enddate = ds+', '+ss;
//    alert(d)
    return (

<View style={{flexDirection:'column'}}>
<Text style={{color:'black', fontSize:18, marginLeft:15, marginTop:12, marginBottom:10 }}>{item.title}</Text>
<Text style={{color:'#666666', fontSize:15, marginLeft:15, marginTop:-5, marginBottom:10, fontFamily:'Poppins-Regular' }}>From : {startdate}</Text>
<Text style={{color:'#666666', fontSize:15, marginLeft:15, marginTop:-5, marginBottom:10, fontFamily:'Poppins-Regular' }}>To: {enddate}</Text>
<Text style={{color:'#666666', fontSize:15, marginLeft:15, marginTop:-5, marginBottom:5, fontFamily:'Poppins-Regular' }}>{item.company}</Text>
<View style={{marginTop:5,backgroundColor:'#bfbfbf',marginLeft:10, marginRight:10,height:1, marginBottom:10}}></View>

</View>
    )
  }

  _renderItems = ({item,index}) => {
    return (
<View style={{flexDirection:'column'}}>
<Text style={{color:'black', fontSize:18, marginLeft:15, marginTop:12, marginBottom:10 }}>{item.institution}</Text>
<View style={{flexDirection:'row'}}>
<Text style={{color:'#666666', fontSize:15, marginLeft:15, marginTop:-5, marginBottom:5, fontFamily:'Poppins-Regular' }}>{item.degree_title},</Text>
<Text style={{color:'#666666', fontSize:15, marginLeft:5, marginTop:-5, marginBottom:10, fontFamily:'Poppins-Regular' }}>{item.date_completion}</Text>
</View>
<View style={{marginTop:5,backgroundColor:'#bfbfbf',marginLeft:10, marginRight:10,height:1, marginBottom:10}}></View>

</View>
    )
  }

  _renderItemss = ({item,index}) => {
    var str= item.language;
//    alert(str)
    return (
<View style={{flexDirection:'row'}}>
{this.state.langdetails.length==1 &&(
  <Text style={{color:'black', fontSize:15, marginLeft:15, marginTop:8, marginBottom:10 }}>{item.language}</Text>

)}
{this.state.langdetails.length!=1 && (
  <Text style={{color:'black', fontSize:15, marginLeft:15, marginTop:8, marginBottom:10 }}>{item.language},</Text>
)}
</View>
    )
  }

   render() {

         TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
    return (

      <View style={styles.container}>
         <MyStatusBar backgroundColor="#201344" barStyle="light-content" />
        <View style = {styles.appBar} >
        <View style = {{flex:1,flexDirection:'row'}}>
        <TouchableOpacity style={{height :20,width :20,marginTop :12 ,left: 15 }}
        onPress={() => this.back()}>

         <Image style={{height :20,width :20,resizeMode: 'contain'}}
               source={require('./back.png')} />
         </TouchableOpacity >
         <PowerTranslator style = {{fontFamily :'Poppins-Medium',color:'white',width : 200 ,height:40,marginLeft :60 ,marginTop :12 }} text={'Edit Profile'}/>

          </View>

          </View>

      <KeyboardAwareScrollView keyboardShouldPersistTaps='always'>
      <View style={{width:window.width, height:100,backgroundColor:'#261650',position:'absolute'}}>
                <View style={{alignSelf:'center', flexDirection:'column', top:40}}>
                            <Image style={{width:120, height:120, alignSelf:'center',borderRadius: 60}} source={{uri:this.state.pdetails.user_images}}/>
                                  <Text style={{color:'black', fontSize:20,fontFamily:'Poppins-Medium', marginLeft:15,alignSelf:'center', marginTop:12 }}>{this.state.fname}</Text>
                                  <View style={{flexDirection:'row', alignSelf:'center', marginTop:-10}}>
                                  <Text style={{color:'#bfbfbf', fontSize:15, marginLeft:15, marginTop:10 }}>{this.state.pdetails.user_working_profile}</Text>
                                  <Text style={{color:'#bfbfbf', fontSize:15, marginLeft:5, marginTop:10 }}>{this.state.nationality}</Text>
                                  </View>
                  </View>
                  </View>
      <View style={{flexDirection:'column', alignItems:'center',marginTop:230, justifyContent:'space-between'}}>
      <View style={{backgroundColor:'white',color :'white',flexDirection:'column' , flex: 1 ,margin: 10,borderRadius :6,width : window.width- 20, shadowColor: 'black',
         shadowOffset: { width: 0, height: 1 },
         shadowOpacity: 0.6,
         shadowRadius: 2,
         elevation: 5 }}>
         <PowerTranslator style={{color:'black',fontFamily:'Poppins-Medium', fontSize:20, marginLeft:15, marginTop:12 }} text={'SUMMARY'}/>
         <View style={{marginTop:5,backgroundColor:'#bfbfbf',marginLeft:10, marginRight:10,height:1}}></View>
         <Text style={{color:'black', fontSize:15, marginLeft:15, marginTop:12, marginBottom:10,lineHeight:30, marginRight:15 }}>{this.state.summary}</Text>
         </View>

         <View style={{backgroundColor:'white',color :'white',flexDirection:'column' , flex: 1 ,margin: 10,borderRadius :6,width : window.width- 20, shadowColor: 'black',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.6,
            shadowRadius: 2,
            elevation: 5 }}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <PowerTranslator style={{color:'black', fontSize:20, marginLeft:15,fontFamily:'Poppins-Medium', marginTop:12 }} text={'EXPERIENCE'}/>

            <TouchableOpacity style={{width:15, height:15,marginRight:12, marginTop:15}} onPress={()=>this.props.navigation.navigate('Experience')}>
            <Image style={{width:15, height:15, resizeMode:'contain',}} source={require('./redcross.png')}/>
            </TouchableOpacity>
            </View>
            <View style={{marginTop:5,backgroundColor:'#bfbfbf',marginLeft:10, marginRight:10,height:1}}></View>

            <FlatList style= {{flexGrow:0,marginTop:10}}
                 data={this.state.expdetails}
                 numColumns={1}
                 keyExtractor={this._keyExtractor}
                 renderItem={this._renderItem}
               />

            </View>

            <View style={{backgroundColor:'white',color :'white',flexDirection:'column' , flex: 1 ,margin: 10,borderRadius :6,width : window.width- 20, shadowColor: 'black',
               shadowOffset: { width: 0, height: 1 },
               shadowOpacity: 0.6,
               shadowRadius: 2,
               elevation: 5 }}>
               <View style={{flexDirection:'row', justifyContent:'space-between'}}>
               <PowerTranslator style={{color:'black', fontSize:20, marginLeft:15,fontFamily:'Poppins-Medium', marginTop:12 }} text={'EDUCATION'}/>
               <TouchableOpacity style={{width:15, height:15, marginRight:12, marginTop:15}} onPress={()=>this.props.navigation.navigate('Education')}>
               <Image style={{width:15, height:15, resizeMode:'contain',}} source={require('./redcross.png')}/>
               </TouchableOpacity>
               </View>
               <View style={{marginTop:5,backgroundColor:'#bfbfbf',marginLeft:10, marginRight:10,height:1}}></View>
               <FlatList style= {{flexGrow:0,marginTop:10}}
                    data={this.state.edudetails}
                    numColumns={1}
                    keyExtractor={this._keyExtractors}
                    renderItem={this._renderItems}
                  />
               </View>

               <View style={{backgroundColor:'white',color :'white',flexDirection:'column' , flex: 1 ,margin: 10,borderRadius :6,width : window.width- 20, shadowColor: 'black',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.6,
                  shadowRadius: 2,
                  elevation: 5 }}>
                  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <PowerTranslator style={{color:'black', fontSize:20, marginLeft:15,fontFamily:'Poppins-Medium', marginTop:12 }} text={'LANGUAGES KNOWN'}/>
                  <TouchableOpacity style={{width:15, height:15, resizeMode:'contain', marginRight:12, marginTop:15}} onPress={()=>this.props.navigation.navigate('Langu')}>
                  <Image style={{width:15, height:15, resizeMode:'contain',}} source={require('./redcross.png')}/>
                  </TouchableOpacity>
                  </View>
                  <View style={{marginTop:5,backgroundColor:'#bfbfbf',marginLeft:10, marginRight:10,height:1}}></View>
                  <FlatList style= {{flexGrow:0,marginTop:10}}
                       data={this.state.langdetails}
                       horizontal={true}
                       keyExtractor={this._keyExtractorss}
                       renderItem={this._renderItemss}
                     />

                  </View>

                  {/*<View style={{backgroundColor:'white',color :'white',flexDirection:'column' , flex: 1 ,margin: 10,borderRadius :6,width : window.width- 20, shadowColor: 'black',
                     shadowOffset: { width: 0, height: 1 },
                     shadowOpacity: 0.6,
                     shadowRadius: 2,
                     elevation: 5 }}>
                     <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                     <PowerTranslator style={{color:'black', fontSize:12, marginLeft:15,fontFamily:'Poppins-Medium', marginTop:12 }} text={'Attached Resume'}/>
                     <TouchableOpacity style={{width:15, height:15, resizeMode:'contain', marginRight:12, marginTop:15}}>
                     <Image style={{width:15, height:15, resizeMode:'contain',}} source={require('./redcross.png')}/>
                     </TouchableOpacity>
                     </View>
                     <View style={{marginTop:5,backgroundColor:'#bfbfbf',marginLeft:10, marginRight:10,height:1}}></View>
                     <PowerTranslator style={{color:'black', fontSize:12, marginLeft:15,fontFamily:'Poppins-Medium', marginTop:12, marginBottom:10 }} text={'Resume.pdf'}/>
                     </View>*/}
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
