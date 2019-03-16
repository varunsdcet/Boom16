import React, {Component} from 'react';
import {Animated,ActivityIndicator,Platform,TouchableOpacity,TextInput, TouchableNativeFeedback,StyleSheet,StatusBar,AsyncStorage, Text,Alert,TouchableHighlight, View,Image,Dimensions,FlatList} from 'react-native';
const window = Dimensions.get('window');
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const GLOBAL = require('./Global');
const { width, height } = Dimensions.get('window');
import { PowerTranslator, ProviderTypes, TranslatorConfiguration,TranslatorFactory } from 'react-native-power-translator';
import Button from 'react-native-button';
import Popover from 'react-native-popover-view';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const equalWidth =  (width -20 )
//const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
var arrayholders = [];
var arrayholder = [];
type Props = {};
const MyStatusBar = ({backgroundColor, ...props}) => (
<View style={[styles.statusBar, { backgroundColor }]}>
  <StatusBar translucent backgroundColor={backgroundColor} {...props} />
</View>
);

export default class ProviderSignup extends Component<Props> {
  static navigationOptions = {
    title: 'Signup',
    header: null
  };
  constructor(props) {
      super(props)
      this.state = {
        establish :'',
        isVisible: false,
        isVisibles: false,
      firstname : '',
      lastname :'',
      middlename :'',
      companyName :'',
      moviesList: [],
      moviesLists:[],
      code:'',
      iama :'',
      industry :'',
        email :'',
        mobile :'',
        password :'',
        register :'',
         hidden: true ,


 cname :'',
 cfname :'',
 cmname :'',
 clname :'',
 cemail :'',
 ccode :'',
 cmobile :'',
 cindus :'',
 cyear:'',
 cpassword:'',


      }
    }

    showPopovers() {
        this.setState({isVisibles: true});
      }

      closePopovers() {
        this.setState({isVisibles: false});
      }
    showPopover() {
        this.setState({isVisible: true});
      }

      closePopover() {
        this.setState({isVisible: false});
      }

      getMoviesFromApiAsync = () => {


        var url= GLOBAL.BASE_URL + 'industry';

       fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {


    //alert(JSON.stringify(responseJson))
      if (responseJson.status == "success"){
       this.setState({ moviesList: responseJson.data})
        arrayholder =  responseJson.data;
      }else{
         alert('Unable to process your request Please try again')
      }


        })
        .catch((error) => {


          console.error(error);
           this.hideLoading();
            alert('Unable to process your request Please try again after some time')

        });





        var url= GLOBAL.BASE_URL + 'phone_codes';

        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {


        //alert(JSON.stringify(responseJson))
        if (responseJson.status == "success"){
        this.setState({ moviesLists: responseJson.phone_codes})
        arrayholders =  responseJson.phone_codes;
        }else{
         alert('Unable to process your request Please try again')
        }


        })
        .catch((error) => {


          console.error(error);
           this.hideLoading();
            alert('Unable to process your request Please try again after some time')

        });













     }


     _renderItems = ({item,index}) => {
var commonHtml = `${item.name} (${item.dial_code})`;
       return (
<TouchableOpacity onPress={() =>  this.resPresss(item)}>
    <View style = {{height :40 ,width :300,borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    marginBottom: 0.4,}}>

   <PowerTranslator style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} text={commonHtml} />


        </View>

</TouchableOpacity>


       )
     }

     resPress = (item) => {
   this.closePopover();
       this.closePopovers();
       this.setState({industry :item.industry})
this.setState({cindus:item.industry_id})
    //alert(this.state.inccode)
   }
   resPresss = (item) => {

     this.closePopover();
         this.closePopovers();
     this.setState({code :item.dial_code})
    this.setState({ccode:item.dial_code});
  //alert(this.state.inccode)
 }
 showLoading() {
     this.setState({loading: true})
  }

  hideLoading() {
     this.setState({loading: false})
  }
     _renderItem = ({item,index}) => {

       return (
 <TouchableOpacity onPress={() =>  this.resPress(item)}>
    <View style = {{height :40 ,width :300,borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    marginBottom: 0.4,}}>

   <PowerTranslator style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} text={item.industry} />


        </View>

</TouchableOpacity>


       )
     }
    componentWillMount() {
         this.getMoviesFromApiAsync()
     TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
      const translator = TranslatorFactory.createTranslator();
   translator.translate('First Name').then(translated => {


      this.setState({ firstname: translated });

      //Do something with the translated text
   });

   translator.translate('Middle Name').then(translated => {


      this.setState({ middlename: translated });

      //Do something with the translated text
   });

   translator.translate('Enter Establish Year').then(translated => {


      this.setState({ establish: translated });

      //Do something with the translated text
   });

   translator.translate('Select Code').then(translated => {


      this.setState({ code: translated });

      //Do something with the translated text
   });

   translator.translate('Last Name').then(translated => {


      this.setState({ lastname: translated });

      //Do something with the translated text
   });
   translator.translate('Email').then(translated => {


      this.setState({ email: translated });

      //Do something with the translated text
   });
   translator.translate('Mobile Number').then(translated => {


      this.setState({ mobile: translated });

      //Do something with the translated text
   });

   translator.translate('Select Industry').then(translated => {


      this.setState({ industry: translated });

      //Do something with the translated text
   });
   translator.translate('Password').then(translated => {


      this.setState({ password: translated });

      //Do something with the translated text
   });
   translator.translate('Company Name').then(translated => {


      this.setState({ companyName: translated });

      //Do something with the translated text
   });

   translator.translate('Register Now').then(translated => {


      this.setState({ register: translated });

      //Do something with the translated text
   });

     }

     buttonClickListener=()=>{
      // this.props.navigation.navigate('ProviderHome')


      if (this.state.cname == ''){
               alert('Please enter Company Name.')
         }
        else if (this.state.cfname == '') {
   alert('Please enter First Name.')
 }  else if (this.state.cemail == '') {
     alert('Please enter Email.')
          }
          else if (this.state.ccode == '') {
              alert('Please Select Country')
                   }
                   else if (this.state.cmobile == '') {
                       alert('Please enter Mobile number.')
                            }
                            else if (this.state.cindus == '') {
                                alert('Please Select Industry')
                                     }
                                     else if (this.state.cyear == '') {
                                         alert('Please enter Establish Year')
                                              }
                                              else if (this.state.password == '') {
                                                  alert('Please enter Password')
                                                       }


                 else {
               this.showLoading()
               const url = GLOBAL.BASE_URL + 'register_company';

             fetch(url, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           name: this.state.cname,
           email : this.state.cemail,
            contact_person_first_name : this.state.cfname,
             contact_person_middle_name : this.state.cmname,
              contact_person_last_name : this.state.clname,
               industry_id : this.state.cindus,
                established_in : this.state.cyear,
                 phone_code : this.state.ccode,
                    phone : this.state.cmobile,
                       password : this.state.cpassword,
                        _token : GLOBAL.token,



         }),
       }).then((response) => response.json())
           .then((responseJson) => {
             var user = responseJson.user_id
              AsyncStorage.setItem('user_id', user.toString());
          alert(JSON.stringify(responseJson))
this.props.navigation.navigate('ProviderHome')
       this.hideLoading()



           })
           .catch((error) => {
               this.hideLoading()
             console.error(error);
           });
           }

     }




     SearchFilterFunctions(text){
         const newData = arrayholders.filter(function(item){
                const itemData = item.country.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            this.setState({
                moviesLists: newData,
                text: text


            })

        }

     SearchFilterFunction(text){
         const newData = arrayholder.filter(function(item){
                const itemData = item.industry.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            this.setState({
                moviesList: newData,
                text: text


            })

        }


   render() {
         TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
         if(this.state.loading){
      return(
        <View style={{flex: 1 ,backgroundColor: 'white'}}>
        <ActivityIndicator style = {styles.loading}

       size="large" color="#90ba45" />
        </View>
      )
     }
    return (

      <View style={styles.container}>
         <MyStatusBar backgroundColor="#201344" barStyle="light-content" />
        <View style = {{width : width ,height :APPBAR_HEIGHT ,marginTop:15,flexDirection :'row'}} >
        <TouchableOpacity onPress = {()=>this.props.navigation.goBack()}>
        <Image style = {{margin : 20 ,height : 22 ,width : 22,resizeMode :'contain'}}
        source = {require('./close.png')}/>
          </TouchableOpacity >
           <PowerTranslator style={{fontSize : 22,fontFamily: "Poppins-Regular" ,marginTop : 14 ,marginLeft : 18 ,color :'#333333'}} text={'REGISTER'} />
        </View>
      <KeyboardAwareScrollView style = {{flex:1}}
      keyboardShouldPersistTaps='always'>


      <TextInput style  = {{marginLeft : 20,marginRight: 20,marginTop: 32,width : width - 40,height : 40 ,borderBottomWidth:2 ,borderBottomColor :'#f3f3f3'}}
      placeholder = {this.state.companyName}
      placeholderTextColor = '#4c4c4c'
      onChangeText={(text) => this.setState({cname:text})}
      />



       <View style = {{flexDirection :'row',justifyContent:'space-between',marginLeft : 20,marginRight:20 ,marginTop : 22}}>




       <TextInput style  = {{width : 100 ,height : 40 ,borderBottomWidth:2 ,borderBottomColor :'#f3f3f3'}}
       placeholder = {this.state.firstname}
       placeholderTextColor = '#4c4c4c'
         onChangeText={(text) => this.setState({cfname:text})}
       />
       <TextInput style  = {{width : 100 ,height : 40 ,borderBottomWidth:2 ,borderBottomColor :'#f3f3f3'}}
       placeholder = {this.state.middlename}
       placeholderTextColor = '#4c4c4c'
       onChangeText={(text) => this.setState({cmname:text})}
       />
       <TextInput style  = {{width : 100 ,height : 40 ,borderBottomWidth:2 ,borderBottomColor :'#f3f3f3'}}
       placeholder = {this.state.lastname}
       placeholderTextColor = '#4c4c4c'
       onChangeText={(text) => this.setState({clname:text})}
       />
 </View>


 <TextInput style  = {{marginLeft : 20,marginRight: 20,marginTop: 32,width : width - 40,height : 40 ,borderBottomWidth:2 ,borderBottomColor :'#f3f3f3'}}
 placeholder = {this.state.email}
 placeholderTextColor = '#4c4c4c'
 onChangeText={(text) => this.setState({cemail:text})}
 />



        <Popover
          isVisible={this.state.isVisible}

          onClose={() => this.closePopover()}>
         <Text style = {{marginTop :10,fontWeight :'bold' ,fontSize :16 ,alignSelf :'center'}}>
          Please Select Industry
         </Text>

         <TextInput
  style={{marginRight:10, paddingLeft:25,paddingBottom:0,height: 40,borderBottomWidth :1 ,borderColor :'black'}}
  onChangeText={(text) => this.SearchFilterFunction(text)}
  value={this.state.text}
  multiline={false}

  underlineColorAndroid='transparent'
  placeholder="Select Industry"
   />
          <FlatList style= {{marginTop :10,width:300,height:300}}
               data={this.state.moviesList}
               numColumns={1}
               keyExtractor={this._keyExtractor}
               renderItem={this._renderItem}
             />




        </Popover>


        <Popover
          isVisible={this.state.isVisibles}

          onClose={() => this.closePopovers()}>
         <Text style = {{marginTop :10,fontWeight :'bold' ,fontSize :16 ,alignSelf :'center'}}>
          Please Select Country
         </Text>

         <TextInput
      style={{marginRight:10, paddingLeft:25,paddingBottom:0,height: 40,borderBottomWidth :1 ,borderColor :'black'}}
      onChangeText={(text) => this.SearchFilterFunctions(text)}
      value={this.state.text}
      multiline={false}

      underlineColorAndroid='transparent'
      placeholder="Search Country"
      />
          <FlatList style= {{marginTop :10,width:300,height:300}}
               data={this.state.moviesLists}
               numColumns={1}
               keyExtractor={this._keyExtractor}
               renderItem={this._renderItems}
             />




        </Popover>

  <View style = {{flexDirection :'row'}}>
  <TouchableOpacity
            onPress={() => this.showPopovers()}
          >
  <TextInput style  = {{width : 100 ,height : 40 ,borderBottomWidth:2 ,borderBottomColor :'#f3f3f3',marginTop: 32,marginLeft: 20}}
  placeholder = {this.state.code}
  editable = {false}
  placeholderTextColor = '#4c4c4c'
  />
  </TouchableOpacity>
   <TextInput style  = {{marginLeft : 20,marginRight: 20,marginTop: 32,width : width - 160,height : 40 ,borderBottomWidth:2 ,borderBottomColor :'#f3f3f3'}}
   placeholder = {this.state.mobile}
   keyboardType={'phone-pad'}
   placeholderTextColor = '#4c4c4c'
   onChangeText={(text) => this.setState({cmobile:text})}
   />
</View>
   <TouchableOpacity
             onPress={() => this.showPopover()}
           >
   <TextInput style  = {{marginLeft : 20,marginRight: 20,marginTop: 32,width : width - 40,height : 40 ,borderBottomWidth:2 ,borderBottomColor :'#f3f3f3'}}
   placeholder = {this.state.industry}
   placeholderTextColor = '#4c4c4c'
   editable={false}
   secureTextEntry={this.state.hidden}
   />

   </TouchableOpacity>
   <TextInput style  = {{marginLeft : 20,marginRight: 20,marginTop: 32,width : width - 40,height : 40 ,borderBottomWidth:2 ,borderBottomColor :'#f3f3f3'}}
   placeholder = {this.state.establish}
   placeholderTextColor = '#4c4c4c'
   onChangeText={(text) => this.setState({cyear:text})}
   />


   <TextInput style  = {{marginLeft : 20,marginRight: 20,marginTop: 32,width : width - 40,height : 40 ,borderBottomWidth:2 ,borderBottomColor :'#f3f3f3'}}
   placeholder = {this.state.password}
   placeholderTextColor = '#4c4c4c'
   secureTextEntry={this.state.hidden}
      onChangeText={(text) => this.setState({cpassword:text})}
   />
   <TouchableOpacity
             onPress={ () => this.setState({ hidden: !this.state.hidden })}
           >
   <Image style = {{marginTop : -32 ,marginLeft : width - 50,height : 22 ,width : 22,resizeMode :'contain'}}
   source = {require('./toggle.png')}/>
</TouchableOpacity>
   <Button
containerStyle={{width:width-40,marginLeft : 20,marginTop : 60,padding:10, height:40, overflow:'hidden', borderRadius:22, backgroundColor: '#261650'}}

style={{fontSize: 14, color: 'white'}}
onPress={this.buttonClickListener}
>

{this.state.register}
</Button>
<TouchableOpacity onPress = {()=>this.props.navigation.goBack()}>
   <PowerTranslator style={{fontFamily: "Poppins-Medium",fontSize : 12,color :'#333333',marginTop : 30 ,marginLeft :15,marginRight:15,width : window.width -40 ,height : 20,textAlign : 'center', alignSelf:'center'}} text={'By clicking here, you agree to the Terms & Conditions '} />
</TouchableOpacity>
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

  button: {
      borderRadius: 4,
      padding: 10,
      marginLeft: 10,
      marginRight: 10,
      backgroundColor: '#ccc',
      borderColor: '#333',
      borderWidth: 1,
    },
  appBar: {
    backgroundColor:'#261650',
    height: APPBAR_HEIGHT,



  },
  content: {
    flex: 1
  },
});
