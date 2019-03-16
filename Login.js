import React, {Component} from 'react';
import { StyleSheet, Text,FlatList, View ,AsyncStorage,Image,Alert,Dimensions ,TextInput,TouchableOpacity,TouchableHighlight} from 'react-native';
const window = Dimensions.get('window');
import { PowerTranslator, ProviderTypes, TranslatorConfiguration,TranslatorFactory } from 'react-native-power-translator';
const { width, height } = Dimensions.get('window');
import Button from 'react-native-button';
const GLOBAL = require('./Global');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



const equalWidth =  (width/2 )
type Props = {};
export default class Login extends Component {
  static navigationOptions = {
    title: 'Login',
    header: null
  };

constructor(props) {
    super(props)
    this.state = {
      mobilePlaceholder : '',
      passwordPlaceholder : '',
        forgotPassword : '',
        login : '',
      isScreen :'',
      states : false,
        moviesList: [],
        moviesLists: [],
        languageCode :"hi",
        username :'',
        password :'',
         backgroundColors: 'white',

    }
  }



 componentWillMount() {
  TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);

  if (GLOBAL.language == "en"){
 this.setState({ login: 'LOGIN' });
 this.setState({ mobilePlaceholder: 'Enter Your Mobile no.'});
 this.setState({ passwordPlaceholder: 'Enter Your Password'});
  } else {
   const translator = TranslatorFactory.createTranslator();
translator.translate('Enter Your Mobile no.').then(translated => {

 mobilePlaceholder = translated;
   this.setState({ mobilePlaceholder: mobilePlaceholder });

   //Do something with the translated text
});

translator.translate('Enter Your Password').then(translated => {


   this.setState({ passwordPlaceholder: translated });

   //Do something with the translated text
});

translator.translate('Forgot Password?').then(translated => {


   this.setState({ forgotPassword: translated });

   //Do something with the translated text
});

translator.translate('Login').then(translated => {


   this.setState({ login: translated });

   //Do something with the translated text
});
}
  }
  changeLanguage(languageCode) {
          this.setState({ languageCode: languageCode });
  }

 buttonClickListener = () =>{
   const url = GLOBAL.BASE_URL + 'user_login';
//     alert(url)
  fetch(url, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({
mobile_num : this.state.username,
mobile_num_code :"+91",
password : this.state.password,
deviceID :"dd",
deviceToken :"dd",
deviceType :"iOS"





}),
}).then((response) => response.json())
.then((responseJson) => {
  alert(JSON.stringify(responseJson))



//  alert(JSON.stringify(responseJson))

})
.catch((error) => {
  console.error(error);

});
//this.props.navigation.navigate('DrawerNavigator')
};





  render() {
    var mobilePlaceholder = "";




    return (
     <KeyboardAwareScrollView style = {{flex :1}}
     keyboardShouldPersistTaps='always'>
     <Image style= {{resizeMode:'contain',marginTop : 30 ,marginLeft : window.width/2 - 100 ,width : 200 ,height : 150}}
         source={require('./logo.png')} />
        {GLOBAL.language == "en" && (<Text style={{fontFamily: "Poppins-Medium",fontSize : 13,color :'#333333',marginTop : 30 ,marginLeft :20,width : window.width -40 ,height : 20}}>
        {'MOBILE'} </Text>)}

          {GLOBAL.language != "en" && (
            <PowerTranslator style={{fontFamily: "Poppins-Medium",fontSize : 13,color :'#333333',marginTop : 30 ,marginLeft :20,width : window.width -40 ,height : 20}} text={'MOBILE'} />
          )}


         <TextInput   style={{marginTop :3 ,marginLeft : 20,width : window.width - 40 ,height : 40 ,borderBottomWidth :1}}
                                  placeholder= {this.state.mobilePlaceholder}
                                 onChangeText={(text) => this.setState({username:text})}
                                  />
  {GLOBAL.language == "en" && (
                                  <Text style={{fontFamily: "Poppins-Medium",fontSize : 13,color :'#333333',marginTop : 30 ,marginLeft :20,width : window.width -40 ,height : 20}}>
                                   {'PASSWORD'} </Text>
                                )}


                                {GLOBAL.language != "en" && (
                                                                <PowerTranslator style={{fontFamily: "Poppins-Medium",fontSize : 13,color :'#333333',marginTop : 30 ,marginLeft :20,width : window.width -40 ,height : 20}} text={'PASSWORD'} />
                                                              )}

                                  <TextInput   style={{marginTop :3 ,marginLeft : 20,width : window.width - 40 ,height : 40 ,borderBottomWidth :1}}
                                                           placeholder= {this.state.passwordPlaceholder}
                                                           secureTextEntry={true}
                                                          onChangeText={(text) => this.setState({password:text})}
                                                           />

  {GLOBAL.language == "en" && (
                                                           <Button
                                                                     containerStyle={{marginTop : 7,marginLeft : window.width - 160,padding:10, height:40, overflow:'hidden', backgroundColor: '#ffffff'}}

                                                                      style={{fontSize: 13, color: 'black',fontFamily: "Poppins-Regular"}}
                                                                    onPress={this.buttonClickListener}
                                                                  >

                                                                   {'Forgot Password'}
                                                                  </Button>

)}


  {GLOBAL.language == "en" && (
                                                           <Button
                                                                     containerStyle={{marginTop : 7,marginLeft : window.width - 160,padding:10, height:40, overflow:'hidden', backgroundColor: '#ffffff'}}

                                                                      style={{fontSize: 13, color: 'black',fontFamily: "Poppins-Regular"}}
                                                                    onPress={this.buttonClickListener}
                                                                  >

                                                                   {this.state.forgotPassword}
                                                                  </Button>

)}


  {GLOBAL.language == "en" && (
                                                                  <Button
                                                 containerStyle={{width:window.width-30,marginLeft : 15,marginTop : 15,padding:10, height:40, overflow:'hidden', borderRadius:22, backgroundColor: '#261650'}}

                                                  style={{fontSize: 14, color: 'white'}}
                                                onPress={this.buttonClickListener}
                                              >

                                              {'LOGIN'}
                                              </Button>
                                            )}


                                            {GLOBAL.language != "en" && (
                                                                                                            <Button
                                                                                           containerStyle={{width:window.width-30,marginLeft : 15,marginTop : 15,padding:10, height:40, overflow:'hidden', borderRadius:22, backgroundColor: '#261650'}}

                                                                                            style={{fontSize: 14, color: 'white'}}
                                                                                          onPress={this.buttonClickListener}
                                                                                        >

                                                                                        {this.state.login}
                                                                                        </Button>
                                                                                      )}


  {GLOBAL.language == "en" && (
      <Text style={{fontFamily: "Poppins-Medium",fontSize : 15,color :'black',marginTop : 30 ,marginLeft :17,width : window.width -30 ,height : 30}} >
      {'OR SIGIN WITH'} </Text>

)}

{GLOBAL.language != "en" && (
    <PowerTranslator style={{fontFamily: "Poppins-Medium",fontSize : 15,color :'black',marginTop : 30 ,marginLeft :17,width : window.width -30 ,height : 30}} text={'OR SIGIN WITH'} />

)}
      <View style={{borderRadius:22,height:40, backgroundColor: '#261650',backgroundColor: '#284ca0',width:window.width-30,marginLeft : 15,marginTop : 9,flexDirection :'row', padding:9}}>

                           <Image style={{width: 17,
    height: 22,
    marginLeft:35,
  resizeMode:'contain'}}
                           source={require('./facebook.png')} />



  {GLOBAL.language == "en" && (
  <Text style={{fontFamily: "Poppins-Medium",fontSize : 15,color :'white',marginLeft :20,width : window.width -30 ,height : 28}} >
  {'Continue with Facebook'} </Text>
)}
{GLOBAL.language != "en" && (
<PowerTranslator style={{fontFamily: "Poppins-Medium",fontSize : 15,color :'white',marginLeft :20,width : window.width -30 ,height : 28}} text={'Continue with Facebook'} />
)}

                        </View>


                        <View style={{borderRadius:22,height:40, backgroundColor: '#e04a39',width:window.width-30,marginLeft : 15,marginTop : 10,flexDirection :'row', padding:9}}>

                                             <Image style={{width: 22,
                      height: 22,
                      marginLeft : 35 ,resizeMode:'contain', marginTop:1
                      }}
                                             source={require('./gmail.png')} />



  {GLOBAL.language == "en" && (

                    <Text style={{fontFamily: "Poppins-Medium",fontSize : 15,color :'white',marginLeft :20,width : window.width -30 ,height : 28}}>


                    {'Continue with Google'} </Text>

)}
{GLOBAL.language != "en" && (

                  <PowerTranslator style={{fontFamily: "Poppins-Medium",fontSize : 15,color :'white',marginLeft :20,width : window.width -30 ,height : 28}} text={'Continue with Google'} />

)}
                                          </View>

           <TouchableOpacity onPress = {()=>this.props.navigation.navigate('Signup')}>
  {GLOBAL.language == "en" && (
              <Text style={{fontFamily: "Poppins-Medium",fontSize : 12,color :'#333333',marginTop : 30 ,marginLeft :20,width : window.width -40 ,height : 20,textAlign : 'center'}}> {'Don\'t have an account ? Register '} </Text>
)}
{GLOBAL.language != "en" && (
            <PowerTranslator style={{fontFamily: "Poppins-Medium",fontSize : 12,color :'#333333',marginTop : 30 ,marginLeft :20,width : window.width -40 ,height : 20,textAlign : 'center'}} text={'Don\'t have an account ? Register '} />
)}
</TouchableOpacity>
<Text></Text>
     </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    position: 'relative',
    width :  window.width,
    height :  window.height,
  },
  content: {
    flex: 1,
    marginTop : - window.height ,
    height: window.height,

    width : window.width,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
   logoImage1: {
        marginLeft : window.width/2 - 65,
        marginTop : 60,
        width : 130,
        height :120,
        position: 'absolute',

    },

     logoImage2: {
        resizeMode: 'contain',
        width : window.width - 20,
        height :800,
        position: 'absolute',

    },
  text: {
    color : 'white',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
     marginTop: 150,
      marginLeft: 0 ,
      width :  window.width,
      textAlign:'center'
  },
  container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    account :{
     margin : 30,
    textAlign : 'center',
    color : '#ffffff',

  } ,

createaccount :{
     margin : 30,
    color : '#ce8c04',

  } ,
  facebookicon: {
    width: 15,
    height: 27,
    marginLeft : 15 ,
    marginTop : 6,


  },
  facebookColor: {


   flexDirection :'row',
    margin: 20,
    height: 40,

    backgroundColor: '#284ca0',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // borderColor: '#DCDCDC',
    // borderRadius: 10,




  },


  gmailColor: {
//de584e

   flexDirection :'row',
    marginLeft: 20,
    height: 40,
    marginTop : 0,
    marginRight : 20,
    backgroundColor: '#de584e',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // borderColor: '#DCDCDC',
    // borderRadius: 10,




  },
  textColor : {
    marginLeft : 50,
    marginTop : 8,
    color : '#ffffff',
    fontSize: 18,

   textAlign: 'center',


  },
   gmailIcon: {
    width: 27,
    height: 27,
    marginLeft : 15 ,
    marginTop : 6,


  },


});
