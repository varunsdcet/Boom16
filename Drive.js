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
import DatePicker from 'react-native-datepicker'
import Popover from 'react-native-popover-view';
  import moment from 'moment';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const equalWidth =  (width -20 )
//const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var arrayholder =[];
var arrayholders =[];
var arrayholderss =[];

type Props = {};
const MyStatusBar = ({backgroundColor, ...props}) => (
<View style={[styles.statusBar, { backgroundColor }]}>
  <StatusBar translucent backgroundColor={backgroundColor} {...props} />
</View>
);



export default class Drive extends Component<Props> {

   	static navigationOptions = {
      header: null
    };
  constructor(props) {
      super(props)
      this.state = {
        text :'',
        texts :'',
        textss :'',
        oneline:'',
        twoline:'',skip:'',yes:'',no:'',
        iama :'',
         hidden: true ,ltype_id:'',ltype_ids:'',
         value: 1,values:1,countrylist:[],licencelist:[],
         married:'',isVisible:false,isVisiblec:false,dates:'',expdates:'',isDateTimePickerVisibles: false,
         single:'',next:'',ltype:'',expdate:'',country_id:'',country:'',isDateTimePickerVisible: false,date:'',
         ltypes:'',
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
   translator.translate('Select Licence Type').then(translated => {
      this.setState({ ltype: translated });

   });
   translator.translate('Select Licence Type').then(translated => {
      this.setState({ ltypes: translated });
   });
   translator.translate('Expiry Date').then(translated => {
      this.setState({ expdate: translated });

   });
   translator.translate('Expiry Date').then(translated => {
      this.setState({ expdates: translated });

   });
   translator.translate('Select Country').then(translated => {
      this.setState({ country: translated });

   });
   translator.translate('Register Now').then(translated => {
      this.setState({ register: translated });

      //Do something with the translated text
   });
   this.getMoviesFromApiAsyncCountries();
   this.getMoviesFromApiAsyncLicence();
     }

     getMoviesFromApiAsyncCountries=()=>{
       this.showLoading()
       var url=GLOBAL.BASE_URL + 'countries'
       var acess = "";
       fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          this.hideLoading()
     //   alert(JSON.stringify(responseJson))
      if (responseJson.status == "success"){
     //        alert(JSON.stringify(responseJson.data))
        this.setState({countrylist:responseJson.data})
        arrayholderss =  responseJson.data
      }
      else{
         alert('Unable to process your request Please try again')
      }
        })
        .catch((error) => {
          console.error(error);
           this.hideLoading();
            alert('Unable to process your request Please try again after some time')
        });
     }

     getMoviesFromApiAsyncLicence=()=>{
       this.showLoading()
       var url=GLOBAL.BASE_URL + 'licence_type'
       var acess = "";
       fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          this.hideLoading()
     //   alert(JSON.stringify(responseJson))
      if (responseJson.status == "success"){
     //        alert(JSON.stringify(responseJson.data))
        this.setState({licencelist:responseJson.data})
        arrayholder = responseJson.data
      }
      else{
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

  SearchFilterFunctionss(text){
      const newData = arrayholderss.filter(function(item){
             const itemData = item.country.toUpperCase()
             const textData = text.toUpperCase()
             return itemData.indexOf(textData) > -1
         })
         this.setState({
             countrylist: newData,
             textss: text


         })

     }
     SearchFilterFunction(text){
         const newData = arrayholder.filter(function(item){
                const itemData = item.licence_type.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            this.setState({
                licencelist: newData,
                text: text


            })

        }
         buttonClickListenerNext=()=>{
           if (this.state.inexptitle == ''){
                     alert('Please Enter Experience Title')
                   } else if (this.state.inexpcomp == ''){
                      alert('Please Enter Company name')
                   }else if (this.state.country == ''){
                      alert('Please Select Country')
                   }else if (this.state.inexpcity == ''){
                      alert('Please Enter City')
                   }else if (this.state.month == ''){
                      alert('Please Select Month')
                   }else if (this.state.year == ''){
                      alert('Please Select Year')
                   }
                      else {
                     this.showLoading()
           const url = GLOBAL.BASE_URL + GLOBAL.update_user_information
          const data = new FormData();
               data.append('_token', '8cP9uTwlYsPcFdUqWcgl9zYAekPbNRc6vAg2dD98awUDsrzUUBxVG4GixEGq');
               data.append('user_id', GLOBAL.user_id);
               data.append('is_indian_driving_licence', this.state.value);
               data.append('indian_driving_licence_type',this.state.ltype_id);
               data.append('indian_driving_licence_date',this.state.date);
               data.append('is_international_driving_licence',this.state.values);
               data.append('international_driving_licence_type[0]',this.state.ltype_ids);
               data.append('international_driving_licence_country[0]',this.state.country_id);
               data.append('international_driving_licence_date[0]',this.state.dates);

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
                 alert(JSON.stringify(responseJson))
//                this.props.navigation.navigate('Skills')

               });
                 }

         }
         buttonClickListenerSkip=()=>{
           this.props.navigation.navigate('Upload')
         }


         showPopoverc() {
             this.setState({isVisiblec: true});
           }

           closePopoverc() {
             this.setState({isVisiblec: false});
           }

           _keyExtractorc = (item, index) => item.organisationID;
           resPressc = (resId,index) => {
          //    GLOBAL.cid =  resId;
              this.closePopoverc();
              this.setState({country:index.country})
              this.setState({country_id:index.country_id})

             }

          _renderItemc = ({item,index}) => {

            return (
              <TouchableOpacity onPress={() =>  this.resPressc(item.productID,item)}>
              <View style = {{height :40 ,width :300,borderBottomColor: 'black',
              borderBottomWidth: 0.5,
              marginBottom: 0.4,flexDirection :'row'}}>
             {GLOBAL.language == "en" && ( <Text style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} >{item.country} </Text>)}

                {GLOBAL.language != "en" && ( <PowerTranslator style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} text={item.country} />)}

                  </View>
             </TouchableOpacity>
            )
          }

          showPopover() {
              this.setState({isVisible: true});
            }

            closePopover() {
              this.setState({isVisible: false});
            }
            showLoading() {
                  this.setState({loading: true})
               }

               hideLoading() {
                  this.setState({loading: false})
               }
            _keyExtractor = (item, index) => item.organisationID;
            resPress = (resId,index) => {
           //    GLOBAL.cid =  resId;
               this.closePopover();
               this.setState({ltype:index.licence_type})
               this.setState({ltype_id:index.licence_type_id})

              }

           _renderItem = ({item,index}) => {

             return (
               <TouchableOpacity onPress={() =>  this.resPress(item.productID,item)}>
               <View style = {{height :40 ,width :300,borderBottomColor: 'black',
               borderBottomWidth: 0.5,
               marginBottom: 0.4,flexDirection :'row'}}>
              {GLOBAL.language == "en" && ( <Text style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} >{item.licence_type} </Text>)}

                 {GLOBAL.language != "en" && ( <PowerTranslator style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} text={item.licence_type} />)}

                   </View>
              </TouchableOpacity>
             )
           }

           showPopoverl() {
               this.setState({isVisiblel: true});
             }

             closePopoverl() {
               this.setState({isVisiblel: false});
             }

             _keyExtractorl = (item, index) => item.organisationID;
             resPressl = (resId,index) => {
            //    GLOBAL.cid =  resId;
                this.closePopoverl();
                this.setState({ltypes:index.licence_type})
                this.setState({ltype_ids:index.licence_type_id})

               }

            _renderIteml = ({item,index}) => {

              return (
                <TouchableOpacity onPress={() =>  this.resPressl(item.productID,item)}>

                <View style = {{height :40 ,width :300,borderBottomColor: 'black',
                borderBottomWidth: 0.5,
                marginBottom: 0.4,flexDirection :'row'}}>
               {GLOBAL.language == "en" && ( <Text style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} >{item.licence_type} </Text>)}

                  {GLOBAL.language != "en" && ( <PowerTranslator style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} text={item.licence_type} />)}

                    </View>

               </TouchableOpacity>
              )
            }

   render() {
     var radio_props_one = [
       {label: this.state.yes, value: 0 },
       {label: this.state.no, value: 1 }
     ];
     var radio_props_two = [
       {label: this.state.yes, values: 0 },
       {label: this.state.no, values: 1 }
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
        <View style = {{flex:1,flexDirection:'row', marginTop:2}}>
        <TouchableOpacity onPress = {()=>this.props.navigation.goBack()}>
        <Image style={{marginLeft :10,marginTop :12,height :25,width :25,resizeMode:'contain'}}
                       source={require('./back.png')} />
                       </TouchableOpacity>
                       <PowerTranslator style={{marginLeft : 15,marginTop:12,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} text={'Driving Licence'} />
        </View>

          </View>

      <KeyboardAwareScrollView keyboardShouldPersistTaps='always'>
      <View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between'}}>
      <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:15, marginTop:15, marginRight:15 }} text={'DO YOU HOLD INDIAN DRIVING LICENCE?'}/>

      <RadioForm style={{marginLeft:15, marginTop:15}}
        labelStyle={{paddingRight:20, marginTop:-3}}
          radio_props={radio_props_one}
          initial={1}
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
{this.state.value ==0 &&(
<View>
  <PowerTranslator style={{color:'grey', fontSize:12, marginTop:15,marginLeft:15, marginRight:15,fontFamily :'Poppins-Medium' }} text={'Licence Type'}/>
  <TouchableOpacity onPress={()=>this.showPopover()}>
  <Text style={{height:45,width:window.width-20,fontFamily :'Poppins-Medium', marginLeft:15,marginTop:12 }}> {this.state.ltype}</Text>
  <Popover
              isVisible={this.state.isVisible}
                 onClose={() => this.closePopover()}>
                <PowerTranslator style = {{fontWeight :'bold' ,fontSize :16 ,alignSelf :'center',textAlign:'center',padding:3,color:'white', backgroundColor:'#261650',width:300, height:30}}
                 text={'Select Licence Type'}/>
                 <TextInput
                 style={{marginRight:10, paddingLeft:25,paddingBottom:0,height: 40,borderBottomWidth :1 ,borderColor :'black'}}
                 onChangeText={(text) => this.SearchFilterFunction(text)}
                 value={this.state.text}
                 multiline={false}

                 underlineColorAndroid='transparent'
                 placeholder="Search "
                 />
                 <FlatList style= {{width:300,height:300}}
                      data={this.state.licencelist}
                      numColumns={1}
                      keyExtractor={this._keyExtractor}
                      renderItem={this._renderItem}
                    />
               </Popover>
  </TouchableOpacity>
  <View style={{marginTop:-5,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

  <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:15, marginTop:20,fontFamily :'Poppins-Medium' }} text={'Expiry Date'}/>
  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
  <DatePicker
    style={{width: 200, color:'black'}}
    date={this.state.date}
    mode="date"
    showIcon={false}
    placeholder={this.state.expdate}
    format="YYYY-MM-DD"
    minDate="2016-05-01"
    maxDate= {moment().format('YYYY-MM-DD')}
    confirmBtnText="Confirm"
    cancelBtnText="Cancel"
    customStyles={{
      dateInput: {
        marginLeft: -95, borderWidth:0, color:'black'
      }
    }}
    onDateChange={(date) => {this.setState({date: date})}}
  />
  </View>
  <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>
</View>
)}
      <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:15, marginTop:20, marginRight:15 }} text={'DO YOU HOLD INTERNATIONAL DRIVING LICENCE?'}/>
      <RadioForm style={{marginLeft:15, marginTop:15}}
        labelStyle={{paddingRight:20, marginTop:-3}}
          radio_props={radio_props_two}
          initial={1}
            buttonSize={9}
          formHorizontal={true}
          buttonColor={'#201344'}
          labelHorizontal={true}
          animation={true}
          labelColor={'black'}
          selectedButtonColor={'#201344'}
          onPress={(value,index) => {this.setState({values:index})}}
        />
        <View style={{marginTop:5,backgroundColor:'#bfbfbf',width:window.width-40,marginLeft:20,height:1}}></View>
{this.state.values==0 &&(
  <View>
  <PowerTranslator style={{color:'grey', fontSize:12, marginTop:15,marginLeft:15, marginRight:15,fontFamily :'Poppins-Medium' }} text={'Country'}/>
  <TouchableOpacity onPress={()=>this.showPopoverc()}>
  <Text style={{height:45,width:window.width-20,fontFamily :'Poppins-Medium', marginLeft:10, marginTop:12 }}> {this.state.country}</Text>
  <Popover
              isVisible={this.state.isVisiblec}
                 onClose={() => this.closePopoverc()}>
                <PowerTranslator style = {{fontWeight :'bold' ,fontSize :16 ,alignSelf :'center',textAlign:'center',padding:3,color:'white', backgroundColor:'#261650',width:300, height:30}}
                 text={'Select Country'}/>
                 <TextInput
                style={{marginRight:10, paddingLeft:25,paddingBottom:0,height: 40,borderBottomWidth :1 ,borderColor :'black'}}
                onChangeText={(text) => this.SearchFilterFunctionss(text)}
                value={this.state.textss}
                multiline={false}

                underlineColorAndroid='transparent'
                placeholder="Search "
                />
                 <FlatList style= {{width:300,height:300}}
                      data={this.state.countrylist}
                      numColumns={1}
                      keyExtractor={this._keyExtractorc}
                      renderItem={this._renderItemc}
                    />
               </Popover>
  </TouchableOpacity>
  <View style={{marginTop:-5,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

    <PowerTranslator style={{color:'grey', fontSize:12, marginTop:15,marginLeft:15, marginRight:15,fontFamily :'Poppins-Medium' }} text={'Licence Type'}/>
    <TouchableOpacity onPress={()=>this.showPopoverl()}>
    <Text style={{height:45,width:window.width-20,fontFamily :'Poppins-Medium', marginLeft:10 ,marginTop:12 }}> {this.state.ltypes}</Text>
    <Popover
                isVisible={this.state.isVisiblel}
                   onClose={() => this.closePopoverl()}>
                  <PowerTranslator style = {{fontWeight :'bold' ,fontSize :16 ,alignSelf :'center',textAlign:'center',padding:3,color:'white', backgroundColor:'#261650',width:300, height:30}}
                   text={'Select Licence Type'}/>
                   <TextInput
                   style={{marginRight:10, paddingLeft:25,paddingBottom:0,height: 40,borderBottomWidth :1 ,borderColor :'black'}}
                   onChangeText={(text) => this.SearchFilterFunction(text)}
                   value={this.state.text}
                   multiline={false}

                   underlineColorAndroid='transparent'
                   placeholder="Search "
                   />
                   <FlatList style= {{width:300,height:300}}
                        data={this.state.licencelist}
                        numColumns={1}
                        keyExtractor={this._keyExtractorl}
                        renderItem={this._renderIteml}
                      />
                 </Popover>
    </TouchableOpacity>
    <View style={{marginTop:-5,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

    <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:15, marginTop:20,fontFamily :'Poppins-Medium' }} text={'Expiry Date'}/>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
    <DatePicker
      style={{width: 200, color:'black'}}
      date={this.state.dates}
      mode="date"
      showIcon={false}
      placeholder={this.state.expdates}
      format="YYYY-MM-DD"
      minDate="1990-05-01"
      maxDate={moment().format('YYYY-MM-DD')}

      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateInput: {
          marginLeft: -96, borderWidth:0, color:'black'
        }
      }}
      onDateChange={(date) => {this.setState({dates: date})}}
    />
    </View>
    <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>
  </View>

)}
      </View>
       </KeyboardAwareScrollView>
       <View style={{flexDirection:'row', justifyContent:'space-between'}}>
<Button
containerStyle={{width:window.width/2-20,marginRight:10,marginLeft : 10,marginTop : 20,padding:10, height:40, overflow:'hidden', borderRadius:22, backgroundColor: '#261650'}}

style={{fontSize: 14, color: 'white'}}
onPress={this.buttonClickListenerNext}
>
{this.state.next}
</Button>
<Button
containerStyle={{width:window.width/2-20,marginRight:10,marginLeft : 10,marginTop : 20,padding:10, height:40, overflow:'hidden', borderRadius:22, backgroundColor: '#261650'}}

style={{fontSize: 14, color: 'white'}}
onPress={this.buttonClickListenerSkip}
>
{this.state.skip}
</Button>
</View>
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
