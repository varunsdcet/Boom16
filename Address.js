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
var arrayholderss =[];
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const equalWidth =  (width -20 )
//const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Popover from 'react-native-popover-view';

type Props = {};
const MyStatusBar = ({backgroundColor, ...props}) => (
<View style={[styles.statusBar, { backgroundColor }]}>
  <StatusBar translucent backgroundColor={backgroundColor} {...props} />
</View>
);



export default class Address extends Component<Props> {

   	static navigationOptions = {
      header: null
    };
  constructor(props) {
      super(props)
      this.state = {
        saddress:'',
        loading :'false',
        textss :'',
        country:'',state:'',city:'',code:'',caddress:'',same:'',
        iama :'',
         hidden: true ,
         value: 0,
         married:'',
         single:'',next:'',checked:0,inpaddress:'',inpcountry:'',inpstate:'',inpcity:'',inpzip:'',isVisible:false,isVisibles:false,countrylist:[],
         incaddress:'', inccountry:'', incstate:'', inccity:'',inczip:'',
         countrys:'', country_ids:''
      }
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
   translator.translate('COUNTRY').then(translated => {
      this.setState({ country: translated });

   });
   translator.translate('COUNTRY').then(translated => {
      this.setState({ countrys: translated });

   });
   translator.translate('STATE').then(translated => {
      this.setState({ state: translated });

   });
   translator.translate('CITY').then(translated => {
      this.setState({ city: translated });

   });
   translator.translate('ZIP CODE').then(translated => {
      this.setState({ code: translated });

   });
   translator.translate('SAME AS PERMANENT ADDRESS').then(translated => {
      this.setState({ same: translated });

   });

   translator.translate('Register Now').then(translated => {
      this.setState({ register: translated });
      //Do something with the translated text
   });
   this.getMoviesFromApiAsync();
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
     getMoviesFromApiAsync=()=>{
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
        this.setState({countrylist:responseJson.data})
        arrayholderss =  responseJson.data
        GLOBAL.globalCountryList=responseJson.data;
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

  buttonClickListener=()=>{
    if (this.state.inpaddress == ''){
              alert('Please Enter Permanent Address')
            } else if (this.state.country == ''){
               alert('Please Select Country')
            }else if (this.state.inpstate == ''){
               alert('Please Enter State')
            }else if (this.state.inpcity == ''){
               alert('Please Enter City')
            }else if (this.state.inpzip == ''){
               alert('Please Enter Zip Code')
            }
               else {
              this.showLoading()
    const url = GLOBAL.BASE_URL + GLOBAL.update_user_information
   const data = new FormData();
        data.append('_token', '8cP9uTwlYsPcFdUqWcgl9zYAekPbNRc6vAg2dD98awUDsrzUUBxVG4GixEGq');
        data.append('user_id', GLOBAL.user_id);
        data.append('permanent_address', this.state.inpaddress);
        data.append('permanent_country',this.state.country_id);
        data.append('permanent_state',this.state.inpstate)
        data.append('permanent_city', this.state.inpcity);
        data.append('permanent_zipcode', this.state.inpzip);
        data.append('current_address', this.state.incaddress);
        data.append('current_country', this.state.inccountry);
        data.append('current_state', this.state.incstate);
        data.append('current_city', this.state.inccity);
        data.append('current_zipcode', this.state.inczip);

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
         this.props.navigation.navigate('Passport')

        });
          }

  }


checkit=()=>{
  alert('I am checked');
  this.setState({checked:1})
  this.setState({incaddress: this.state.inpaddress})
    this.setState({inccountry: this.state.country_id})
      this.setState({incstate: this.state.inpstate})
        this.setState({inccity: this.state.inpcity})
          this.setState({inczip: this.state.inpzip})
}
uncheckit=()=>{
  alert('I am unchecked');
  this.setState({checked:0})

}

showPopovers() {
    this.setState({isVisibles: true});
  }

  closePopovers() {
    this.setState({isVisibles: false});
  }

  _keyExtractors = (item, index) => item.organisationID;
  resPresss = (resId,index) => {
 //    GLOBAL.cid =  resId;
     this.closePopovers();
     this.setState({countrys:index.country})
     this.setState({country_ids:index.country_id})
     //alert(this.state.nationality_id)
     //alert(this.state.inccode)
    }

 _renderItemss = ({item,index}) => {

   return (
     <TouchableOpacity onPress={() =>  this.resPresss(item.productID,item)}>
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

  _keyExtractor = (item, index) => item.organisationID;
  resPress = (resId,index) => {
 //    GLOBAL.cid =  resId;
     this.closePopover();
     this.setState({country:index.country})
     this.setState({country_id:index.country_id})
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

   render() {
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
        <View style = {{flex:1,flexDirection:'row',marginTop :2,}}>
        <TouchableOpacity onPress = {()=>this.props.navigation.goBack()}>
        <Image style={{marginLeft :10,marginTop :12,height :25,width :25,resizeMode:'contain'}}
                       source={require('./back.png')} />
                       </TouchableOpacity>
                       <PowerTranslator style={{marginLeft : 15,marginTop:12,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} text={'Address'} />
        </View>

          </View>


      <KeyboardAwareScrollView keyboardShouldPersistTaps='always'>
      <View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between'}}>
      <PowerTranslator style={{color:'grey', fontSize:12, marginTop:15, marginLeft:15 }} text={'PERMANENT ADDRESS'}/>
      <TextInput style={{height:43,width:window.width-30,fontFamily :'Poppins-Medium',marginTop:10,marginLeft:15, color:'black' }}
          placeholderTextColor={'black'}
       placeholder={this.state.saddress}
              onChangeText={(text) => this.setState({inpaddress:text})}/>
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-40,marginLeft:15,height:1}}></View>

      <View style={{margin:10, flexDirection:'column', justifyContent:'space-between'}}>
      <View style={{flexDirection:'row'}}>
      <View style={{flexDirection:'column'}}>
      <PowerTranslator style={{color:'grey', fontSize:12, margin:10 }} text={'COUNTRY'}/>
      <TouchableOpacity onPress={()=>this.showPopover()}>
      <Text style={{height:43,width:window.width/2,fontFamily :'Poppins-Medium', marginLeft:10,marginTop :10 }}>
      {this.state.country}
       </Text>
       <Popover
                   isVisible={this.state.isVisible}
                      onClose={() => this.closePopover()}>
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
                           keyExtractor={this._keyExtractor}
                           renderItem={this._renderItems}
                         />
                    </Popover>
       </TouchableOpacity>
      </View>
      <View style={{flexDirection:'column'}}>
      <PowerTranslator style={{color:'grey', fontSize:12, margin:10 }} text={'STATE'}/>
      <TextInput style={{height:43,width:window.width/2,fontFamily :'Poppins-Medium', marginLeft:10 }}
        placeholderTextColor={'black'}
       placeholder={this.state.state}
       onChangeText={(text) => this.setState({inpstate:text})}/>
      </View>

      </View>
      <View style={{marginTop:-5,backgroundColor:'#bfbfbf',width:window.width-40,marginLeft:10,height:1}}></View>

      <View style={{flexDirection:'row', marginTop:10}}>
      <View style={{flexDirection:'column'}}>
      <PowerTranslator style={{color:'grey', fontSize:12, margin:10 }} text={'CITY'}/>
      <TextInput style={{height:43,width:window.width/2,fontFamily :'Poppins-Medium', marginLeft:10 }}
        placeholderTextColor={'black'}
       placeholder={this.state.city}
       onChangeText={(text) => this.setState({inpcity:text})}/>
      </View>
      <View style={{flexDirection:'column'}}>
      <PowerTranslator style={{color:'grey', fontSize:12, margin:10 }} text={'ZIP CODE'}/>
      <TextInput style={{height:43,width:window.width/2,fontFamily :'Poppins-Medium', marginLeft:10 }}
        placeholderTextColor={'black'}
        keyboardType = 'numeric'
       placeholder={this.state.code}
       onChangeText={(text) => this.setState({inpzip:text})}/>
      </View>
      </View>
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-40,marginLeft:10,height:1}}></View>

      <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:10, marginTop:15 }} text={'CURRENT ADDRESS'}/>

{this.state.checked==0 &&(
<View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between'}}>

  <CheckBox
    label={this.state.same}
    checked={false}
    checkboxStyle ={{marginTop:10, width:20, height:20, resizeMode:'contain', marginLeft:10}}
    uncheckedImage={require('./uncheck.png')}
    labelStyle={{fontFamily :'Poppins-Regular',fontSize:13, color:'black', marginTop:12}}
    onChange={()=>this.checkit()}
    />
    <PowerTranslator style={{color:'grey', fontSize:12, marginTop:15, marginLeft:10 }} text={'CURRENT ADDRESS'}/>
    <TextInput style={{height:43,width:window.width-20,fontFamily :'Poppins-Medium',marginTop:10,marginLeft:10, color:'black' }}
        placeholderTextColor={'black'}
     placeholder={this.state.saddress}
            onChangeText={(text) => this.setState({incaddress:text})}/>
     <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-40,marginLeft:10,height:1}}></View>
     <View style={{marginLeft:5,marginTop:10, marginRight:10, marginBottom:10, flexDirection:'column', justifyContent:'space-between'}}>
     <View style={{flexDirection:'row'}}>
     <View style={{flexDirection:'column'}}>
     <PowerTranslator style={{color:'grey', fontSize:12, margin:10 }} text={'COUNTRY'}/>
     <TouchableOpacity onPress={()=>this.showPopovers()}>
     <Text style={{height:43,width:window.width/2,fontFamily :'Poppins-Medium', marginLeft:10 ,marginTop:10}}>

     {this.state.countrys}
       </Text>
       <Popover
                  isVisible={this.state.isVisibles}
                     onClose={() => this.closePopovers()}>
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
                          keyExtractor={this._keyExtractors}
                          renderItem={this._renderItemss}
                        />
                   </Popover>
       </TouchableOpacity>
     </View>
     <View style={{flexDirection:'column'}}>
     <PowerTranslator style={{color:'grey', fontSize:12, margin:10 }} text={'STATE'}/>
     <TextInput style={{height:43,width:window.width/2,fontFamily :'Poppins-Medium', marginLeft:5 }}
       placeholderTextColor={'black'}
      placeholder={this.state.state}
             onChangeText={(text) => this.setState({incstate:text})}/>
     </View>

     </View>
     <View style={{marginTop:-5,backgroundColor:'#bfbfbf',width:window.width-40,marginLeft:5,height:1}}></View>
     </View>
     <View style={{flexDirection:'row', marginTop:5}}>
     <View style={{flexDirection:'column'}}>
     <PowerTranslator style={{color:'grey', fontSize:12, margin:10 }} text={'CITY'}/>
     <TextInput style={{height:43,width:window.width/2,fontFamily :'Poppins-Medium', marginLeft:10 }}
       placeholderTextColor={'black'}
      placeholder={this.state.city}
             onChangeText={(text) => this.setState({inccity:text})}/>
     </View>
     <View style={{flexDirection:'column'}}>
     <PowerTranslator style={{color:'grey', fontSize:12, margin:10 }} text={'ZIP CODE'}/>
     <TextInput style={{height:43,width:window.width/2,fontFamily :'Poppins-Medium', marginLeft:5 }}
       placeholderTextColor={'black'}
       keyboardType = 'numeric'
      placeholder={this.state.code}
             onChangeText={(text) => this.setState({inczip:text})}/>
     </View>
     </View>
    </View>
  )}

    {this.state.checked==1 &&(

      <CheckBox
          label={this.state.same}
          checked={true}
          checkedImage={require('./check.png')}
          checkboxStyle ={{marginTop:10, width:20, height:20, resizeMode:'contain', marginLeft:10}}
          labelStyle={{fontFamily :'Poppins-Regular',fontSize:13, color:'black', marginTop:12}}
          onChange={()=>this.uncheckit()}
          />

    )}
          <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-40,marginLeft:10,height:1}}></View>

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
