import React, {Component} from 'react';
import {Animated,ActivityIndicator,Platform,TouchableOpacity,TextInput, TouchableNativeFeedback,StyleSheet,StatusBar,AsyncStorage, Text,Alert, View,Image,Dimensions,FlatList} from 'react-native';
const window = Dimensions.get('window');
var arrayholders = [];
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const GLOBAL = require('./Global');
const { width, height } = Dimensions.get('window');
import CheckBox from 'react-native-checkbox';
import { PowerTranslator, ProviderTypes, TranslatorConfiguration,TranslatorFactory } from 'react-native-power-translator';
import Button from 'react-native-button';
 import moment from 'moment';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const equalWidth =  (width -20 )
//const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Popover from 'react-native-popover-view';
import DatePicker from 'react-native-datepicker'
type Props = {};
import ImagePicker from 'react-native-image-picker';
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
    path: 'images',
    allowsEditing: true,
  },
      allowsEditing: true,
};

var CompArray=[];

var ImageName=[];

export default class Passport extends Component<Props> {

   	static navigationOptions = {
      header: null
    };
  constructor(props) {
      super(props)
      this.state = {
          loading :false,
          text :'',
        saddress:'',
        country:'',state:'',city:'',code:'',caddress:'',same:'',
        iama :'',
         hidden: true ,
         value: 0,
         ecr:'',date:'',dates:'',
         ecnr:'',next:'',number:'',inpno:'',incity:'',avatarSource:[],imageget:0,
         issue:'',expiry:'',countrylist:[],isVisible:false,country_id:'',imagename:[],
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
    showLoading() {
          this.setState({loading: true})
       }

       hideLoading() {
          this.setState({loading: false})
       }
    componentWillMount() {
     TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
      const translator = TranslatorFactory.createTranslator();
   translator.translate('Street Address').then(translated => {
      this.setState({ saddress: translated });

   });
   translator.translate('Next').then(translated => {
      this.setState({ next: translated });

   });
   translator.translate('Select Country').then(translated => {
      this.setState({ country: translated });

   });
   translator.translate('City').then(translated => {
      this.setState({ city: translated });

   });
   translator.translate('ECR').then(translated => {
      this.setState({ ecr: translated });

   });
   translator.translate('ECNR').then(translated => {
      this.setState({ ecnr: translated });

   });

   translator.translate('Passport No.').then(translated => {
      this.setState({ number: translated });
   });
   translator.translate('Issue Date').then(translated => {
      this.setState({ issue: translated });
   });
   translator.translate('Expiry Date').then(translated => {
      this.setState({ expiry: translated });
   });
   this.getMoviesFromApiAsyncCountries();
     }

     getMoviesFromApiAsyncCountries=()=>{
       this.showLoading()
       var url=GLOBAL.BASE_URL + GLOBAL.countries
       var acess = "";
       fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
     //   alert(JSON.stringify(responseJson))
      if (responseJson.status == "success"){
        this.hideLoading()
     //        alert(JSON.stringify(responseJson.data))
       arrayholders =  responseJson.data
        this.setState({countrylist:responseJson.data})
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
         CompArray.push(source)

         this.setState({
         avatarSource: CompArray,
         imageget:1
       });
       this.showLoading()
       const url = 'http://3.17.73.124/boomoversea/public/api/user_doc_upload_ws'
         const data = new FormData();
           data.append('_token', '8cP9uTwlYsPcFdUqWcgl9zYAekPbNRc6vAg2dD98awUDsrzUUBxVG4GixEGq');
           data.append('user_id', '12');
           data.append('image', {
             uri: response.uri,
             type: 'image/jpeg', // or photo.type
             name: 'image.png'
           });
           // you can append anyone.

           fetch(url, {
             method: 'post',
             body: data,
             headers: {
                 'Content-Type': 'multipart/form-data',
               }

           }).then((response) => response.json())
                 .then((responseJson) => {
             this.hideLoading()
             alert(JSON.stringify(responseJson.image_name))
             ImageName.push(responseJson.image_name);
             this.setState({imagename:ImageName});
             alert(JSON.stringify(this.state.imagename))

           });
       }
     });
     }

     back = () => {
   this.props.navigation.goBack()
  }

       buttonClickListener=()=>{
         var my = [];
         var dict = {
   document_term_id: "1",
   document: this.state.imagename,
   document_title:"Passport Copy"
   // etc.
 };
 my.push(dict)
//alert(this.state.value)
         if (this.state.inpno == ''){
                   alert('Please enter Passport Number')
                 } else if (this.state.date == ''){
                    alert('Please Select Date of Issue')
                 }else if (this.state.dates == ''){
                    alert('Please select date of expiry')
                 }else if (this.state.country_id == ''){
                    alert('Please select country')
                 }else if (this.state.incity == ''){
                    alert('Please enter city')
                 }else if (this.state.avatarSource.length == 0){
                    alert('Please add passport images')
                 }
                    else {
                   this.showLoading()

                   const url = GLOBAL.BASE_URL + GLOBAL.update_user_information

                       // you can append anyone.

                       fetch(url, {
                     method: 'POST',
                     headers: {
                     'Content-Type': 'application/json',
                     },
                     body: JSON.stringify({
                     _token : '8cP9uTwlYsPcFdUqWcgl9zYAekPbNRc6vAg2dD98awUDsrzUUBxVG4GixEGq',
                     user_id:'12',
                     documents: JSON.stringify(my),
                     passport_no: this.state.inpno,
                     passport_issue_date: this.state.date,
                     passport_expiry_date: this.state.dates,
                     passport_issue_country: this.state.country_id,
                     passport_issue_place: this.state.incity,
                     is_ecr: this.state.value
                     }),

                     }).then((response) => response.json())
                     .then((responseJson) => {
                       alert(JSON.stringify(responseJson))
 this.hideLoading()
                     if(responseJson.status=="success"){
                       alert(JSON.stringify(responseJson))
                         //alert(JSON.stringify(responseJson))
                              this.props.navigation.navigate('Desired')
                     }else{
                       alert('Something went wrong.')
                       this.hideLoading()
                     }


                     })
                     .catch((error) => {
                       this.hideLoading()
                       console.error(error);

                     });
                     }
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
            this.setState({country:index.country})
            this.setState({country_id:index.country_id})
            //alert(this.state.nationality_id)
            //alert(this.state.inccode)
           }

        _renderItem = ({item,index}) => {

          return (
            <TouchableOpacity onPress={() =>  this.resPress(item.productID,item)}>
           <View style = {{flexDirection :'row'}}>
           {GLOBAL.language == "en" && ( <Text style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} >{item.country} </Text>)}

              {GLOBAL.language != "en" && ( <PowerTranslator style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} text={item.country} />)}

           </View>
           </TouchableOpacity>
          )
        }

        _renderItemim = ({item,index}) => {
          //alert(JSON.stringify(item))
   //alert(this.state.avatarSourcetrade.length)
   //alert(index)
          return (
   <View style={{flexDirection:'row'}}>
           {this.state.avatarSource.length==index+1 &&(
             <View style={{flexDirection:'row'}}>
             <Image style={{width:100, height:100, marginRight:5, marginTop:5}} source={item}/>
             <TouchableOpacity style={{width:100, height:100,marginRight:5, marginTop:5}} onPress={()=>this.changeImage()}>
                          <Image style={{width:100, height:100,resizeMode:'contain'}} source={require('./doccc.png')}/>
                          </TouchableOpacity>

                          </View>
           )}
           {this.state.avatarSource.length!=index+1  &&(
             <Image style={{width:100, height:100, marginRight:5, marginTop:5}} source={item}/>

           )}
   </View>
          )
        }


   render() {
     var radio_props_one = [
       {label: this.state.ecr, value: 0 },
       {label: this.state.ecnr, value: 1 }
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
        <View style = {{flex:1,flexDirection:'row', marginTop:1}}>
        <TouchableOpacity onPress = {()=>this.props.navigation.goBack()}>
        <Image style={{marginLeft :10,marginTop :12,height :25,width :25,resizeMode:'contain'}}
                       source={require('./back.png')} />
                       </TouchableOpacity>
                       <PowerTranslator style={{marginLeft : 15,marginTop:12,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} text={'Passport Details'} />
        </View>

          </View>

      <KeyboardAwareScrollView keyboardShouldPersistTaps='always'>
      <View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between'}}>

            <PowerTranslator style={{color:'grey', fontSize:12,marginLeft:15, marginTop:20 }} text={'PASSPORT NO.'}/>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <TextInput style={{height:45,width:window.width-50,fontFamily :'Poppins-Medium', marginLeft:15}}
            placeholderTextColor={'black'}
             placeholder={this.state.number}
             onChangeText={(text) => this.setState({inpno:text})}/>
            </View>
            <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>


      <View style={{margin:10, flexDirection:'column', justifyContent:'space-between'}}>
      <View style={{flexDirection:'row'}}>
      <View style={{flexDirection:'column'}}>
      <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:5, marginTop:10 }} text={'DATE OF ISSUE'}/>

       <DatePicker
         style={{width: 200,}}
         date={this.state.date}
         mode="date"
         showIcon={false}
         placeholder={this.state.issue}
         format="YYYY-MM-DD"
         minDate="1990-01-01"
         maxDate= {moment().format('YYYY-MM-DD')}
         confirmBtnText="Confirm"
         cancelBtnText="Cancel"
         customStyles={{
           dateInput: {
             marginLeft: -125, borderWidth:0, color:'black'
           }
         }}
         onDateChange={(date) => {this.setState({date: date})}}
       />
      </View>
      <View style={{flexDirection:'column'}}>
      <PowerTranslator style={{color:'grey', fontSize:12, marginTop:10 }} text={'DATE OF EXPIRY'}/>
      <DatePicker
        style={{width: 200, }}
        date={this.state.dates}
        mode="date"
        showIcon={false}
        placeholder={this.state.expiry}
        format="YYYY-MM-DD"
        minDate="1990-05-01"
        maxDate={moment().format('YYYY-MM-DD')}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateInput: {
            marginLeft: -131, borderWidth:0, color:'black'
          }
        }}
        onDateChange={(date) => {this.setState({dates: date})}}
      />
      </View>

      </View>
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:5,height:1}}></View>

      <View style={{flexDirection:'row', marginTop:12}}>
      <View style={{flexDirection:'column'}}>
      <PowerTranslator style={{color:'grey', fontSize:12,  marginLeft:5, marginTop:10 ,width:150}} text={'PASSPORT ISSUING COUNTRY'}/>
  <TouchableOpacity onPress={()=>
    this.showPopover()}>
      <Text style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium',marginLeft :5,marginTop :8 }}>{this.state.country}
      </Text>
      <Popover
                  isVisible={this.state.isVisible}
                     onClose={() => this.closePopover()}>
                    <PowerTranslator style = {{fontWeight :'bold' ,fontSize :16 ,alignSelf :'center',textAlign:'center',padding:3,color:'white', backgroundColor:'#261650',width:300, height:30}}
                     text={'Select Country'}/>
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
                          renderItem={this._renderItem}
                        />
                   </Popover>
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'column'}}>
      <PowerTranslator style={{color:'grey', fontSize:12, margin:10 }} text={'PLACE OF ISSUE'}/>
      <TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium',paddingLeft:10 }} placeholder={this.state.city} placeholderTextColor={'black'}
      onChangeText={(text) => this.setState({incity:text})}/>
      </View>
      </View>
      <View style={{marginTop:-10,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:5,height:1}}></View>

      <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:5, marginTop:15 }} text={'ECR OR ECNR'}/>
      <RadioForm style={{marginLeft:5, marginTop:12}}
        labelStyle={{paddingRight:20}}
          radio_props={radio_props_one}
          initial={0}
            buttonSize={10}
          formHorizontal={true}
          buttonColor={'#201344'}
          labelHorizontal={true}
          animation={true}
          labelColor={'black'}
          selectedButtonColor={'#201344'}
          onPress={(value) => {this.setState({value:value})}}
        />

      </View>
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

      <PowerTranslator style={{color:'black', fontSize:12, marginLeft:15, marginTop:12 }} text={'UPLOAD PASSPORT'}/>

      <View style={{flexDirection:'row', alignItems:'flex-start', marginTop:10, marginLeft:20}}>

      {this.state.imageget ==0 && (
        <TouchableOpacity style={{width:100, height:100, marginRight:5, marginTop:5}} onPress={()=>this.changeImage()}>
                    <Image style={{width:100, height:100, resizeMode:'contain'}} source={require('./doccc.png')}/>
        </TouchableOpacity>

      )}
      {this.state.imageget==1 &&(
        <FlatList style= {{flexGrow:0,marginTop:10}}
             data={this.state.avatarSource}
             horizontal={true}
             keyExtractor={this._keyExtractor}
             renderItem={this._renderItemim}
           />
      )}
      </View>
      <View style={{marginTop:5,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

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



  },
  loading: {
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
