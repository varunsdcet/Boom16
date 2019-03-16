import React, {Component} from 'react';
import {Animated,ActivityIndicator,Platform,TouchableOpacity,TextInput, TouchableNativeFeedback,StyleSheet,StatusBar,AsyncStorage, Text,Alert, View,Image,Dimensions,FlatList} from 'react-native';
const window = Dimensions.get('window');
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const GLOBAL = require('./Global');
  import moment from 'moment';
const { width, height } = Dimensions.get('window');
import { PowerTranslator, ProviderTypes, TranslatorConfiguration,TranslatorFactory } from 'react-native-power-translator';
import Button from 'react-native-button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const equalWidth =  (width -20 )
var arrayholders = [];
//const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import ImagePicker from 'react-native-image-picker';
import DatePicker from 'react-native-datepicker'
import Popover from 'react-native-popover-view';
type Props = {};
const MyStatusBar = ({backgroundColor, ...props}) => (
<View style={[styles.statusBar, { backgroundColor }]}>
  <StatusBar translucent backgroundColor={backgroundColor} {...props} />
</View>
);
const options = {
  title: 'Select Avatar',
  allowsEditing: true,
  storageOptions: {
    skipBackup: true,
    loading :false,
    path: 'images',
    text :'',
    allowsEditing: true,
  },
      allowsEditing: true,
};



export default class Pinfo extends Component<Props> {

   	static navigationOptions = {
      header: null
    };


  constructor(props) {
      super(props)
      this.state = {
        fname:'',
        dob:'',
        nantionality:'',
      firstname : '',
      lastname :'',
      middlename :'',
      iama :'',
        email :'',
        mobile :'',
        password :'',
        register :'',
         hidden: true ,
         value: 0,
         married:'',infname:'',nationality_id:'',
         single:'',next:'',    isDateTimePickerVisible: false,countrylist:[],date:'',avatarSource:'',isVisible:false,imageget:0
      }
    }



    componentWillMount() {
     TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
      const translator = TranslatorFactory.createTranslator();
   translator.translate('Father Name').then(translated => {
      this.setState({ fname: translated });

   });
   translator.translate('Date of Birth').then(translated => {
      this.setState({ dob: translated });

   });
   translator.translate('Select Nationality').then(translated => {
      this.setState({ nantionality: translated });

   });
   translator.translate('Married').then(translated => {
      this.setState({ married: translated });

   });
   translator.translate('Single').then(translated => {
      this.setState({ single: translated });

   });
   translator.translate('Next').then(translated => {
      this.setState({ next: translated });

   });
   translator.translate('Register Now').then(translated => {


      this.setState({ register: translated });

      //Do something with the translated text
   });
   this.getMoviesFromApiAsync();
     }

     getMoviesFromApiAsync=()=>{
       this.showLoading()
       var url=GLOBAL.BASE_URL + GLOBAL.countries
       var acess = "";
       fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
//   alert(JSON.stringify(responseJson))
this.hideLoading()
      if (responseJson.status == "success"){
//        alert(JSON.stringify(responseJson.data))
        this.setState({countrylist:responseJson.data})
        arrayholders =  responseJson.data
        GLOBAL.globalCountryList=responseJson.data;
      }
      else{
        this.hideLoading()
         alert('Unable to process your request Please try again')
      }


        })
        .catch((error) => {
          console.error(error);
           this.hideLoading();
            alert('Unable to process your request Please try again after some time')

        });


     }

     back = () => {
   this.props.navigation.goBack()
  }

  changeImage=()=>{
     ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }else{
         GLOBAL.profile = response.uri
      const source = { uri: response.uri };
      this.setState({
      avatarSource: source,
      imageget:1
    });
    }
  });
  }
  showPopover() {
      this.setState({isVisible: true});
    }

    closePopover() {
      this.setState({isVisible: false});
    }

    _keyExtractor = (item, index) => item.organisationID;
    resPress = (resId,index) => {
   //    GLOBAL.cid =  resId;
       this.closePopover();
       this.setState({nantionality:index.country})
       this.setState({nationality_id:index.country_id})
       //alert(this.state.nationality_id)
       //alert(this.state.inccode)
      }

   _renderItems = ({item,index}) => {

     return (
       <TouchableOpacity onPress={() =>  this.resPress(item.productID,item)}>
       <View style = {{height :40 ,width :300,borderBottomColor: 'black',
       borderBottomWidth: 0.5,
       marginBottom: 0.4,flexDirection :'row'}}>
      {GLOBAL.language == "en" && ( <Text style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} >{item.country} </Text>)}

         {GLOBAL.language != "en" && ( <PowerTranslator style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} text={item.country} />)}

           </View>
      </TouchableOpacity>



     )
   }
   showLoading() {
         this.setState({loading: true})
      }

      hideLoading() {
         this.setState({loading: false})
      }
       buttonClickListener=()=>{

         if (this.state.infname == ''){
                   alert('Please Enter Father Name')
                 } else if (this.state.date == ''){
                    alert('Please Select Date of birth')
                 }else if (this.state.nantionality == ''){
                    alert('Please Select Nationality')
                 }   else {
                   this.showLoading()
         const url = GLOBAL.BASE_URL + GLOBAL.update_user_information
        const data = new FormData();
             data.append('_token', '8cP9uTwlYsPcFdUqWcgl9zYAekPbNRc6vAg2dD98awUDsrzUUBxVG4GixEGq');
             data.append('user_id', GLOBAL.user_id);
             data.append('father_name', this.state.infname);
             data.append('date_of_birth',this.state.date);
             data.append('nationality_id',this.state.nationality_id)
             data.append('marital_status_id', this.state.value);
             // you can append anyone.
             data.append('image', {
               uri: GLOBAL.profile,
               type: 'image/jpeg', // or photo.type
               name: 'image.png'
             });
             fetch(url, {
               method: 'post',
               body: data,
               headers: {
                   'Content-Type': 'multipart/form-data',
                 }

             }).then((response) => response.json())
                   .then((responseJson) => {
               this.hideLoading()

               alert(JSON.stringify(responseJson))
              this.props.navigation.navigate('Address')

             });
               }

       }

       SearchFilterFunctionss(text){
           const newData = arrayholders.filter(function(item){
                  const itemData = item.country.toUpperCase()
                  const textData = text.toUpperCase()
                  return itemData.indexOf(textData) > -1
              })
              this.setState({
                  countrylist: newData,
                  text: text


              })

          }
   render() {
     var radio_props = [
       {label: this.state.married, value: 1 },
       {label: this.state.single, value: 2 }
     ];
         TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
         if(this.state.loading){
return(
  <View style={{flex: 1 ,backgroundColor: 'white'}}>
  <ActivityIndicator style = {styles.loading}

 size="large" color="#201344" />
  </View>
)
}
    return (

      <View style={styles.container}>
           <MyStatusBar backgroundColor="#201344" barStyle="light-content" />
          <View style = {styles.appBar} >
          <View style = {{flex:1,marginTop :10,flexDirection:'row'}}>
          <TouchableOpacity onPress = {()=>this.props.navigation.goBack()}>
          <Image style={{marginLeft :10,height :25,width :25,resizeMode:'contain'}}
                         source={require('./back.png')} />
                         </TouchableOpacity>
                         <PowerTranslator style={{marginLeft : 15,marginTop:1,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} text={'Personal Information'} />
          </View>

            </View>

      <KeyboardAwareScrollView keyboardShouldPersistTaps='always'>
      <View style={{flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
   {GLOBAL.language == "en" && (
      <Text style={{fontFamily:'Poppins-Medium', color:'black', alignSelf:'center', margin:10}}
      >{'Please take a selfie'}
     </Text>)}

     {GLOBAL.language != "en" && (  <PowerTranslator style={{fontFamily:'Poppins-Medium', color:'black', alignSelf:'center', margin:10}}
       text={'Please take a selfie'}
       />)}

      {this.state.imageget==0 &&(
        <Image style={{width:100, height:100, alignSelf:'center', resizeMode:'contain'}}
        source={require('./pimage.png')}/>
      )}
      {this.state.imageget==1 &&(
        <Image style={{width:100, height:100, alignSelf:'center', resizeMode:'contain', borderWidth:2, borderRadius:5, borderColor:'#261650'}}
        source={this.state.avatarSource}/>
      )}

            <TouchableOpacity onPress={()=>this.changeImage()}>
      <View style={{width:100, height:30, marginTop:8,alignSelf:'center', flexDirection:'row',padding:8, backgroundColor:'#201344', borderRadius:4}}>
      <Image style={{width:15, height:15, resizeMode:'contain',}} source={require('./camera.png')}/>
      <PowerTranslator style={{height:20, color:'white', fontSize:10,marginLeft:4,marginRight:4, fontFamily :'Poppins-Medium' }}
      text={'Take a selfie'}/>
      </View>
      </TouchableOpacity>

<View style={{width:window.width, height:80,alignSelf:'center', flexDirection:'column', marginTop:1 }}>
      <PowerTranslator style={{color:'grey', fontSize:12, margin:10 }} text={'FATHER NAME'}/>
      <View style={{marginLeft:10,flexDirection:'row',}}>
      <Image style={{width:25, height:25, resizeMode:'contain', marginTop:2}} source={require('./pacc.png')}/>
      <TextInput style={{marginTop :-10,height:45,width:window.width-20,fontFamily :'Poppins-Medium', paddingLeft:15, color:'black' }}
      placeholderTextColor={'black'}
      placeholder={this.state.fname}
       onChangeText={(text) => this.setState({infname:text})}/>
      </View>
      <View style={{marginTop:-1,backgroundColor:'#bfbfbf',width:window.width-80,marginLeft:52,height:1}}></View>
</View>

<View style={{width:window.width, height:80,alignSelf:'center', flexDirection:'column', marginTop:11 }}>
      <PowerTranslator style={{color:'grey', fontSize:12, margin:10 }} text={'AS PER THE PASSPORT'}/>
      <View style={{marginLeft:10,flexDirection:'row',}}>
      <Image style={{width:25, height:25, resizeMode:'contain', marginTop:8}} source={require('./pcake.png')}/>
      <DatePicker
        style={{width: 200, color:'black'}}
        date={this.state.date}
        mode="date"
        showIcon={false}
        placeholder={this.state.dob}
        format="YYYY-MM-DD"
        minDate="1900-01-01"
        maxDate= {moment().format('YYYY-MM-DD')}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateInput: {
            marginLeft: -76, borderWidth:0, color:'black'
          }
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
      </View>
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-80,marginLeft:50,height:1}}></View>
</View>
<View style={{width:window.width, height:80,alignSelf:'center', flexDirection:'column',marginTop:5 }}>
      <PowerTranslator style={{color:'grey', fontSize:12, margin:10 }} text={'NATIONALITY'}/>
      <View style={{marginLeft:10,flexDirection:'row',}}>
      <Image style={{width:25, height:25, resizeMode:'contain', marginTop:2}} source={require('./pflags.png')}/>
      <TouchableOpacity onPress={()=>this.showPopover()}>
      <Text style={{height:40,width:window.width-70,fontFamily :'Poppins-Medium',paddingLeft:15,paddingTop:5, color:'black',marginTop :-5 }}>{this.state.nantionality}</Text>
      <Popover
                  isVisible={this.state.isVisible}
                     onClose={() => this.closePopover()}>
                    <PowerTranslator style = {{fontWeight :'bold' ,fontSize :16 ,alignSelf :'center',textAlign:'center',padding:3,color:'white', backgroundColor:'#261650',width:300, height:30}}
                     text={this.state.nantionality}/>


                     <TextInput
                  style={{marginRight:10, paddingLeft:25,paddingBottom:0,height: 40,borderBottomWidth :1 ,borderColor :'black'}}
                  onChangeText={(text) => this.SearchFilterFunctionss(text)}
                  value={this.state.text}
                  multiline={false}

                  underlineColorAndroid='transparent'
                  placeholder="Search "
                  />

                     <FlatList style= {{width:300,height:300}}
                          data={this.state.countrylist}
                          numColumns={1}
                          keyExtractor={this._keyExtractor}
                          renderItem={this._renderItems}
                        />
                   </Popover>
      </TouchableOpacity>

      <Image style={{width:20, height:20, resizeMode:'contain',marginTop:6 }} source={require('./rarrow.png')}/>
      </View>
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-80,marginLeft:50,height:1}}></View>
</View>

<View style={{width:window.width, height:80,alignSelf:'center', flexDirection:'column',marginTop:18 }}>
      <PowerTranslator style={{color:'black', fontSize:12, margin:10 }} text={'MARITAL STATUS'}/>
      <RadioForm style={{marginLeft:10}}
        labelStyle={{paddingRight:20}}
          radio_props={radio_props}
          initial={0}
          formHorizontal={true}
          buttonSize={10}
          buttonColor={'#201344'}
          labelHorizontal={true}
          animation={true}
          labelColor={'black'}
          selectedButtonColor={'#201344'}
          onPress={(value) => {this.setState({value:value})}}
        />
</View>
<Button
containerStyle={{width:window.width-20,marginRight:10,marginLeft : 10,marginTop : 20,padding:10, height:40, overflow:'hidden', borderRadius:22, backgroundColor: '#261650'}}
style={{fontSize: 14, color: 'white'}}
onPress={this.buttonClickListener}
>
{this.state.next}
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



  },loading: {
            position: 'absolute',
            left: window.width/2 - 30,

            top: window.height/2,

            opacity: 0.5,

            justifyContent: 'center',
            alignItems: 'center'
        },
  content: {
    flex: 1
  },
});
