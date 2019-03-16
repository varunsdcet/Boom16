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
import Popover from 'react-native-popover-view';
//const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


type Props = {};
const MyStatusBar = ({backgroundColor, ...props}) => (
<View style={[styles.statusBar, { backgroundColor }]}>
  <StatusBar translucent backgroundColor={backgroundColor} {...props} />
</View>
);



export default class Experience extends Component<Props> {

   	static navigationOptions = {
      header: null
    };
  constructor(props) {
      super(props)
      this.state = {
        iama :'',farea:'',role:'',
        industries:'',
         hidden: true ,
         value: GLOBAL.exp.is_notice_period, values:GLOBAL.exp.is_notice_period, update:'',
         married:'',full:'', part:'',expt:'', next:'',company:'',yes:'',no:'',month:'', year:'',country:'',incountry:GLOBAL.exp.country, inmonth:GLOBAL.exp.start_month, inyear:GLOBAL.exp.start_year, inmonths:GLOBAL.exp.end_month, inyears:GLOBAL.exp.end_year,
         city:'',desc:'',skip:'',months:'',years:'', isVisible:false, isVisibles:false,countrylist:[],inexptitle:GLOBAL.exp.title,inexpcomp:GLOBAL.exp.company,inexpcity:GLOBAL.exp.city_id,
         inexpdesc:GLOBAL.exp.description , isVisiblec:false,checked:GLOBAL.exp.is_currently_working, curr:'', ndays:'', monthlist:['January','February','March','April','May','June','July','August','September','October','November','December'],
         yearlist:[],isVisiblem:false,isVisiblesy:false,indays:GLOBAL.exp.notice_period, country_id:GLOBAL.exp.country_id,
      }
    }

    componentWillMount() {
      //alert(GLOBAL.expList.length)
//      alert(GLOBAL.exp.id)
     TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
      const translator = TranslatorFactory.createTranslator();
   translator.translate('Experience Title').then(translated => {
      this.setState({ expt: translated });

   });
   translator.translate('Next').then(translated => {
      this.setState({ next: translated });

   });
   translator.translate('Company').then(translated => {
      this.setState({ company: translated });

   });
   translator.translate('Select Role').then(translated => {
      this.setState({ role: translated });

   });
   translator.translate('Select Month').then(translated => {
      this.setState({ month: translated });

   });
   translator.translate('Select Year').then(translated => {
      this.setState({year: translated });

   });
   translator.translate('Select Month').then(translated => {
      this.setState({ months: translated });

   });
   translator.translate('Select Year').then(translated => {
      this.setState({years: translated });

   });

   translator.translate('Experience Description').then(translated => {
      this.setState({ desc: translated });

   });
   translator.translate('Select Country').then(translated => {
      this.setState({ country: translated });

   });
   translator.translate('City').then(translated => {
      this.setState({ city: translated });

   });

   translator.translate('Yes').then(translated => {
      this.setState({ yes: translated });

   });
   translator.translate('Currently working in this position').then(translated => {
      this.setState({ curr: translated });

   });
   translator.translate('Skip').then(translated => {
      this.setState({ skip: translated });

   });
   translator.translate('Enter Days').then(translated => {
      this.setState({ ndays: translated });

   });
   translator.translate('No').then(translated => {
      this.setState({ no: translated });
   });
   translator.translate('Update').then(translated => {
      this.setState({update: translated });

   });

this.getMoviesFromApiAsyncCountries();
var CompArray = [];
for(var i=1950; i<=2019;i++){
  CompArray.push(i);
}
this.setState({yearlist:CompArray})

}

     back = () => {
   this.props.navigation.goBack()
  }

  getMoviesFromApiAsyncCountries=()=>{
    var url=GLOBAL.BASE_URL + GLOBAL.countries
    var acess = "";
    fetch(url)
     .then((response) => response.json())
     .then((responseJson) => {
  //   alert(JSON.stringify(responseJson))
   if (responseJson.status == "success"){
  //        alert(JSON.stringify(responseJson.data))
     this.setState({countrylist:responseJson.data})
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

buttonClickListenerUpdate =()=>{
  var done=this.state.inmonth + `-` + this.state.inyear
//  alert(done)
  var dtwo = this.state.inmonths + `-` + this.state.inyears

  var acc=[];
  acc.push(GLOBAL.exp.id);
  acc.push(this.state.inexptitle);
  acc.push(this.state.inexpcomp);
  acc.push(this.state.country_id);
  acc.push(this.state.inexpcity);
  acc.push(this.state.checked);
  acc.push(this.state.inexpdesc);
  acc.push(this.state.value);
  acc.push(this.state.inyear);
  acc.push(this.state.inmonth);
  acc.push(this.state.inyears);
  acc.push(this.state.inmonths);

  alert(JSON.stringify(acc))

  if (this.state.inexptitle == ''){
            alert('Please Enter Experience Title')
          } else if (this.state.inexpcomp == ''){
             alert('Please Enter Company name')
          }else if (this.state.country_id == ''){
             alert('Please Select Country')
          }else if (this.state.inexpcity == ''){
             alert('Please Enter City')
          }else if (this.state.month == ''){
             alert('Please Select Month')
          }else if (this.state.year == ''){
             alert('Please Select Year')
          }
             else {
            //this.showLoading()
  const url = GLOBAL.BASE_URL + 'add_experience'
 const data = new FormData();
      data.append('_token', '8cP9uTwlYsPcFdUqWcgl9zYAekPbNRc6vAg2dD98awUDsrzUUBxVG4GixEGq');
      data.append('user_id', '12');
      data.append('experience_id', GLOBAL.exp.id);
      data.append('title', this.state.inexptitle);
      data.append('company',this.state.inexpcomp);
      data.append('country_id',this.state.country_id);
      data.append('city', this.state.inexpcity);
      data.append('is_currently_working', this.state.checked);
      data.append('description', this.state.inexpdesc);
      data.append('date_start', done);
      data.append('date_end', dtwo);
      data.append('is_notice_period', this.state.value);
      data.append('notice_period', this.state.indays);

      // you can append anyone.

      fetch(url, {
        method: 'post',
        body: data,
        headers: {
            'Content-Type': 'multipart/form-data',
          }

      }).then((response) => response.json())
            .then((responseJson) => {
        //this.hideLoading()
  //      alert(JSON.stringify(responseJson))
        alert('Updated Successfully')
      });
        }

}


         buttonClickListenerNext=()=>{
           var done=this.state.month + `-` + this.state.year
         //  alert(done)
           var dtwo = this.state.months + `-` + this.state.years

           if (this.state.inexptitle == ''){
                     alert('Please Enter Experience Title')
                   } else if (this.state.inexpcomp == ''){
                      alert('Please Enter Company name')
                   }else if (this.state.country_id == ''){
                      alert('Please Select Country')
                   }else if (this.state.inexpcity == ''){
                      alert('Please Enter City')
                   }else if (this.state.month == ''){
                      alert('Please Select Month')
                   }else if (this.state.year == ''){
                      alert('Please Select Year')
                   }
                      else {
                     //this.showLoading()
           const url = GLOBAL.BASE_URL + GLOBAL.add_experience
          const data = new FormData();
               data.append('_token', '8cP9uTwlYsPcFdUqWcgl9zYAekPbNRc6vAg2dD98awUDsrzUUBxVG4GixEGq');
               data.append('user_id', '12');
               data.append('title', this.state.inexptitle);
               data.append('company',this.state.inexpcomp);
               data.append('country_id',this.state.country_id)
               data.append('city', this.state.inexpcity);
               data.append('is_currently_working', this.state.checked);
               data.append('description', this.state.inexpdesc);
               data.append('date_start', done);
               data.append('date_end', dtwo);
               data.append('is_notice_period', this.state.value);
               data.append('notice_period', this.state.indays);

               // you can append anyone.

               fetch(url, {
                 method: 'post',
                 body: data,
                 headers: {
                     'Content-Type': 'multipart/form-data',
                   }

               }).then((response) => response.json())
                     .then((responseJson) => {
                 //this.hideLoading()
                 alert(JSON.stringify(responseJson))
                this.props.navigation.navigate('Skills')

               });
                 }

         }
         buttonClickListenerSkip=()=>{
           this.props.navigation.navigate('Skills')
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
              this.setState({incountry:index.country})
              this.setState({country_id:index.country_id})

             }

          _renderItemc = ({item,index}) => {

            return (
              <TouchableOpacity onPress={() =>  this.resPressc(item.productID,item)}>
             <View style = {{flexDirection :'row'}}>
             <Image style={{marginLeft :15,marginTop :10,height :10,width :10,resizeMode:'contain', marginRight:15}}
                            source={require('./dot.png')} />
            <PowerTranslator style={{marginLeft : 5,fontSize : 15,marginTop : 1,color :'black',fontFamily :'Poppins-Medium'}} text={item.country}/>
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
              this.setState({month:index})
              this.setState({inmonth:index})
             }

          _renderItem = ({item,index}) => {

            return (
              <TouchableOpacity onPress={() =>  this.resPress(item.productID,item)}>
             <View style = {{flexDirection :'row'}}>
             <Image style={{marginLeft :15,marginTop :10,height :10,width :10,resizeMode:'contain', marginRight:15}}
                            source={require('./dot.png')} />
            <PowerTranslator style={{marginLeft : 5,fontSize : 15,marginTop : 1,color :'black',fontFamily :'Poppins-Medium'}} text={item}/>

             </View>
             </TouchableOpacity>
            )
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
               this.setState({year:index.toString()})
               this.setState({inyear:index.toString()})
              }

           _renderItems = ({item,index}) => {

             return (
               <TouchableOpacity onPress={() =>  this.resPresss(item.productID,item)}>
              <View style = {{flexDirection :'row'}}>
              <Image style={{marginLeft :15,marginTop :10,height :10,width :10,resizeMode:'contain', marginRight:15}}
                             source={require('./dot.png')} />
             <Text style={{marginLeft : 5,fontSize : 15,marginTop : 1,color :'black',fontFamily :'Poppins-Medium'}}>{item}</Text>
              </View>
              </TouchableOpacity>
             )
           }

           showPopoversy() {
               this.setState({isVisiblesy: true});
             }

             closePopoversy() {
               this.setState({isVisiblesy: false});
             }

             _keyExtractorsy = (item, index) => item.organisationID;
             resPresssy = (resId,index) => {
            //    GLOBAL.cid =  resId;
                this.closePopoversy();
                this.setState({years:index.toString()})
                this.setState({inyears:index.toString()})
               }

            _renderItemsy = ({item,index}) => {

              return (
                <TouchableOpacity onPress={() =>  this.resPresssy(item.productID,item)}>
               <View style = {{flexDirection :'row'}}>
               <Image style={{marginLeft :15,marginTop :10,height :10,width :10,resizeMode:'contain', marginRight:15}}
                              source={require('./dot.png')} />
              <Text style={{marginLeft : 5,fontSize : 15,marginTop : 1,color :'black',fontFamily :'Poppins-Medium'}}>{item}</Text>
               </View>
               </TouchableOpacity>
              )
            }

           showPopoverm() {
               this.setState({isVisiblem: true});
             }

             closePopoverm() {
               this.setState({isVisiblem: false});
             }

             _keyExtractorm = (item, index) => item.organisationID;
             resPressm = (resId,index) => {
            //    GLOBAL.cid =  resId;
                this.closePopoverm();
                this.setState({months:index})
                this.setState({inmonths:index})
               }

            _renderItemm = ({item,index}) => {

              return (
                <TouchableOpacity onPress={() =>  this.resPressm(item.productID,item)}>
               <View style = {{flexDirection :'row'}}>
               <Image style={{marginLeft :15,marginTop :10,height :10,width :10,resizeMode:'contain', marginRight:15}}
                              source={require('./dot.png')} />
              <PowerTranslator style={{marginLeft : 5,fontSize : 15,marginTop : 1,color :'black',fontFamily :'Poppins-Medium'}} text={item}/>
               </View>
               </TouchableOpacity>
              )
            }

           checkit=()=>{
             alert('I am checked');
             this.setState({checked:1})
           }
           uncheckit=()=>{
             alert('I am unchecked');
             this.setState({checked:0})

           }
addmore=()=>{
  var done=this.state.month + `-` + this.state.year
//  alert(done)
  var dtwo = this.state.months + `-` + this.state.years
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
            //this.showLoading()
  const url = GLOBAL.BASE_URL + 'add_experience'
 const data = new FormData();
      data.append('_token', '8cP9uTwlYsPcFdUqWcgl9zYAekPbNRc6vAg2dD98awUDsrzUUBxVG4GixEGq');
      data.append('user_id', '12');
      data.append('title', this.state.inexptitle);
      data.append('company',this.state.inexpcomp);
      data.append('country_id',this.state.country_id)
      data.append('city', this.state.inexpcity);
      data.append('is_currently_working', this.state.checked);
      data.append('date_start', done);
      data.append('date_end', dtwo);
      data.append('description', this.state.inexpdesc);
      data.append('is_notice_period', this.state.value);
      data.append('notice_period', this.state.indays);

      // you can append anyone.

      fetch(url, {
        method: 'post',
        body: data,
        headers: {
            'Content-Type': 'multipart/form-data',
          }

      }).then((response) => response.json())
            .then((responseJson) => {
        //this.hideLoading()
        alert(JSON.stringify(responseJson))
//       this.props.navigation.navigate('Passport')

      });
        }
}

   render() {
     var ll = GLOBAL.expList.length;
     var radio_props_one = [
       {label: this.state.yes, value: 0 },
       {label: this.state.no, value: 1 }
     ];
     var radio_props_two = [
       {label: this.state.yes, values: 0 },
       {label: this.state.no, values: 1 }
     ];
         TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
    return (

      <View style={styles.container}>
         <MyStatusBar backgroundColor="#201344" barStyle="light-content" />
        <View style = {styles.appBar} >
        <View style = {{flex:1,flexDirection:'row', marginTop:8}}>
        <TouchableOpacity onPress = {()=>this.props.navigation.goBack()}>
        <Image style={{marginLeft :10,marginTop :12,height :25,width :25,resizeMode:'contain'}}
                       source={require('./back.png')} />
                       </TouchableOpacity>
                       <PowerTranslator style={{marginLeft : 15,marginTop:12,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} text={'Experience'} />
        </View>

          </View>

      <KeyboardAwareScrollView keyboardShouldPersistTaps='always'>
      <View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between'}}>
      <PowerTranslator style={{color:'grey', fontSize:12, marginTop:15,marginLeft:15, marginRight:15,fontFamily :'Poppins-Medium' }} text={'EXPERIENCE TITLE'}/>
      <TextInput style={{height:45,width:window.width-20,fontFamily :'Poppins-Medium', marginLeft:10 }} placeholder={this.state.expt}placeholderTextColor={'black'}
      value={this.state.inexptitle}
      onChangeText={(text) => this.setState({inexptitle:text})}/>
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

      <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:15, marginTop:20,fontFamily :'Poppins-Medium' }} text={'COMPANY'}/>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <TextInput style={{height:45,width:window.width-50,fontFamily :'Poppins-Medium', marginLeft:10}} placeholder={this.state.company}placeholderTextColor={'black'}
      value={this.state.inexpcomp}
      onChangeText={(text) => this.setState({inexpcomp:text})}/>
      </View>
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

      <View style={{flexDirection:'row', justifyContent:'space-between',}}>
      <View style={{flexDirection:'column'}}>
      <PowerTranslator style={{color:'grey', fontSize:12, fontFamily :'Poppins-Medium', marginLeft:15, marginTop:20 }} text={'COUNTRY'}/>
      <TouchableOpacity onPress={()=>this.showPopoverc()}>
      <TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium', marginLeft:10, color:'black' }} placeholder={this.state.country}placeholderTextColor={'black'} editable={false}
      value={this.state.incountry}/>
      <Popover
                  isVisible={this.state.isVisiblec}
                     onClose={() => this.closePopoverc()}>
                    <PowerTranslator style = {{fontWeight :'bold' ,fontSize :16 ,alignSelf :'center',textAlign:'center',padding:3,color:'white', backgroundColor:'#261650',width:300, height:30}}
                     text={'Select Country'}/>

                     <FlatList style= {{width:300,height:300}}
                          data={this.state.countrylist}
                          numColumns={1}
                          keyExtractor={this._keyExtractorc}
                          renderItem={this._renderItemc}
                        />
                   </Popover>
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'column'}}>
      <PowerTranslator style={{color:'grey', fontSize:12, fontFamily :'Poppins-Medium', marginLeft:15, marginTop:20  }} text={'CITY'}/>
      <TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium', marginLeft:10 }} placeholder={this.state.city}placeholderTextColor={'black'}
      value={this.state.inexpcity}
      onChangeText={(text) => this.setState({inexpcity:text})}/>
      </View>
      </View>
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

      <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:15, marginTop:20,fontFamily :'Poppins-Medium' }} text={'FROM'}/>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <View style={{flexDirection:'column'}}>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={()=>this.showPopover()}>
      <TextInput style={{height:45,width:window.width/2-30,fontFamily :'Poppins-Medium', marginLeft:10,color:'black'}} placeholder={this.state.month}placeholderTextColor={'black'} editable={false}
      value={this.state.inmonth}
      />
      <Popover
                  isVisible={this.state.isVisible}
                     onClose={() => this.closePopover()}>
                    <PowerTranslator style = {{fontWeight :'bold' ,fontSize :16 ,alignSelf :'center',textAlign:'center',padding:3,color:'white', backgroundColor:'#261650',width:300, height:30}}
                     text={'Select Month'}/>

                     <FlatList style= {{width:300,height:300}}
                          data={this.state.monthlist}
                          numColumns={1}
                          keyExtractor={this._keyExtractor}
                          renderItem={this._renderItem}
                        />
                   </Popover>
      </TouchableOpacity>
      <Image style={{width:20, height:20, resizeMode:'contain',marginTop:10,}} source={require('./rarrow.png')}/>
      </View>
      </View>
      <View style={{flexDirection:'column'}}>
      <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>this.showPopovers()}>
      <TextInput style={{height:45,width:window.width/2-30,fontFamily :'Poppins-Medium',color:'black' }} placeholder={this.state.year} placeholderTextColor={'black'} editable={false}
      value={this.state.inyear}
      />
      <Popover
                  isVisible={this.state.isVisibles}
                     onClose={() => this.closePopovers()}>
                    <PowerTranslator style = {{fontWeight :'bold' ,fontSize :16 ,alignSelf :'center',textAlign:'center',padding:3,color:'white', backgroundColor:'#261650',width:300, height:30}}
                     text={'Select Year'}/>
                     <FlatList style= {{width:300,height:300}}
                          data={this.state.yearlist}
                          numColumns={1}
                          keyExtractor={this._keyExtractors}
                          renderItem={this._renderItems}
                        />
                   </Popover>
      </TouchableOpacity>
      <Image style={{width:20, height:20, resizeMode:'contain',marginTop:10 }} source={require('./rarrow.png')}/>
      </View>
      </View>

      </View>

      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>
{this.state.checked==0 &&(
  <View>
  <CheckBox
    label={this.state.curr}
    checked={false}
    checkboxStyle ={{marginTop:15, width:20, height:20, resizeMode:'contain', marginLeft:20}}
    uncheckedImage={require('./uncheck.png')}
    labelStyle={{fontFamily :'Poppins-Medium',fontSize:13, color:'black', marginTop:17}}
    onChange={()=>this.checkit()}
    />

    <View style={{marginTop:10,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

        <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:15, marginTop:20,fontFamily :'Poppins-Medium' }} text={'TO'}/>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>this.showPopoverm()}>
        <TextInput style={{height:45,width:window.width/2-30,fontFamily :'Poppins-Medium', marginLeft:10, color:'black' }} placeholder={this.state.months}placeholderTextColor={'black'}
        value={this.state.inmonths}
        editable={false}/>
        <Popover
                    isVisible={this.state.isVisiblem}
                       onClose={() => this.closePopoverm()}>
                      <PowerTranslator style = {{fontWeight :'bold' ,fontSize :16 ,alignSelf :'center',textAlign:'center',padding:3,color:'white', backgroundColor:'#261650',width:300, height:30}}
                       text={'Select Month'}/>

                       <FlatList style= {{width:300,height:300}}
                            data={this.state.monthlist}
                            numColumns={1}
                            keyExtractor={this._keyExtractorm}
                            renderItem={this._renderItemm}
                          />
                     </Popover>
        </TouchableOpacity>
        <Image style={{width:20, height:20, resizeMode:'contain',marginTop:10 }} source={require('./rarrow.png')}/>
        </View>
        </View>
        <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>this.showPopoversy()}>
        <TextInput style={{height:45,width:window.width/2-30,fontFamily :'Poppins-Medium',color:'black' }} placeholder={this.state.years}placeholderTextColor={'black'} editable={false}
        value={this.state.inyears}
        />
        <Popover
                    isVisible={this.state.isVisiblesy}
                       onClose={() => this.closePopoversy()}>
                      <PowerTranslator style = {{fontWeight :'bold' ,fontSize :16 ,alignSelf :'center',textAlign:'center',padding:3,color:'white', backgroundColor:'#261650',width:300, height:30}}
                       text={'Select Year'}/>
                       <FlatList style= {{width:300,height:300}}
                            data={this.state.yearlist}
                            numColumns={1}
                            keyExtractor={this._keyExtractorsy}
                            renderItem={this._renderItemsy}
                          />
                     </Popover>
        </TouchableOpacity>
        <Image style={{width:20, height:20, resizeMode:'contain',marginTop:10 }} source={require('./rarrow.png')}/>
        </View>
        </View>

        </View>

        <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>
        <View style={{flexDirection:'column', justifyContent:'space-between'}}>
          <View style={{flexDirection:'row'}}>
          <View style={{flexDirection:'column'}}>
          <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:15 ,marginRight:15,marginTop:20, fontFamily :'Poppins-Medium'}} text={'EXPERIENCE DESCRIPTION'}/>
          <TextInput style={{height:45,width:window.width,fontFamily :'Poppins-Medium' , marginLeft:10}} placeholder={this.state.desc}placeholderTextColor={'black'}
          value={this.state.inexpdesc}
          onChangeText={(text) => this.setState({inexpdesc:text})}/>
          </View>

          </View>
          <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

          </View>


        <PowerTranslator style={{color:'grey', fontSize:12,marginLeft:15, marginTop:20,fontFamily :'Poppins-Medium' }} text={'Is Notice Period Required?'}/>
        <RadioForm style={{marginLeft:20, marginTop:12}}
        ref="radioForm"
          labelStyle={{paddingRight:20, marginTop:-3}}
            radio_props={radio_props_two}
            initial={1}
            disabled={true}
              buttonSize={9}
            formHorizontal={true}
            buttonColor={'#201344'}
            labelHorizontal={true}
            animation={true}
            labelColor={'grey'}
            selectedButtonColor={'#201344'}
            onPress={(value,index) => {this.setState({values:index})}}
          />
          <View style={{marginTop:3,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

          {this.state.values==0 &&(
            <View>
            <PowerTranslator style={{color:'grey', fontSize:12,marginLeft:15, marginTop:20,fontFamily :'Poppins-Medium' }} text={'Number of Days'}/>
            <TextInput style={{height:45,width:window.width,fontFamily :'Poppins-Medium' , marginLeft:10,color:'black'}} placeholder={this.state.ndays}placeholderTextColor={'black'}
            value={this.state.indays.toString()}
            onChangeText={(text) => this.setState({indays:text})}/>
            <View style={{marginTop:3,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>
            </View>
          )}
          {this.state.values==1 &&(
            <View>
            </View>
          )}
        </View>
)}

{this.state.checked==1 &&(
  <View>
  <CheckBox
    label={this.state.curr}
    checked={false}
    checkboxStyle ={{marginTop:15, width:20, height:20, resizeMode:'contain', marginLeft:20}}
    uncheckedImage={require('./check.png')}
    labelStyle={{fontFamily :'Poppins-Medium',fontSize:13, color:'black', marginTop:17}}
    onChange={()=>this.uncheckit()}
    />

    <View style={{marginTop:10,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>
    <View style={{flexDirection:'column', justifyContent:'space-between'}}>
      <View style={{flexDirection:'row'}}>
      <View style={{flexDirection:'column'}}>
      <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:15 ,marginRight:15,marginTop:20, fontFamily :'Poppins-Medium'}} text={'EXPERIENCE DESCRIPTION'}/>
      <TextInput style={{height:45,width:window.width,fontFamily :'Poppins-Medium' , marginLeft:10}} placeholder={this.state.desc}placeholderTextColor={'black'}
      value={this.state.inexpdesc}
      onChangeText={(text) => this.setState({inexpdesc:text})}/>
      </View>

      </View>
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

      </View>


    <PowerTranslator style={{color:'grey', fontSize:12,marginLeft:15, marginTop:20,fontFamily :'Poppins-Medium' }} text={'Is Notice Period Required?'}/>
    <RadioForm style={{marginLeft:20, marginTop:12}}
      labelStyle={{paddingRight:20, marginTop:-3}}
        radio_props={radio_props_one}
        initial={0}
          buttonSize={9}
        formHorizontal={true}
        buttonColor={'#201344'}
        labelHorizontal={true}
        animation={true}
        labelColor={'grey'}
        selectedButtonColor={'#201344'}
        onPress={(value) => {this.setState({value:value})}}
      />
      <View style={{marginTop:3,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>
      {this.state.value==0 &&(
        <View>
        <PowerTranslator style={{color:'grey', fontSize:12,marginLeft:15, marginTop:20,fontFamily :'Poppins-Medium' }} text={'Number of Days'}/>
        <TextInput style={{height:45,width:window.width,fontFamily :'Poppins-Medium' , marginLeft:10}} placeholder={this.state.ndays}placeholderTextColor={'black'}
        value={this.state.indays.toString()}
        onChangeText={(text) => this.setState({indays:text})}/>
        <View style={{marginTop:3,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>
        </View>
      )}
      {this.state.value==1 &&(
        <View>
        </View>
      )}
        </View>
)}

{ll==0 &&(
  <View>
  <TouchableOpacity onPress={()=>this.addmore()}
  style={{alignSelf:'flex-end', width:100, height:35,marginRight:20, marginTop:20}}>
        <View style={{alignSelf:'flex-end', width:100, height:35,padding:8,borderRadius:4, backgroundColor:'#201344', flexDirection:'row'}}>
        <Image style={{width:15, height:15,resizeMode:'contain', marginTop:3}} source={require('./plus.png')}/>
        <PowerTranslator style={{color:'white', fontSize:13,marginLeft:5,fontFamily :'Poppins-Medium' }} text={'Add More'}/>
        </View>
        </TouchableOpacity>

        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:50}}>
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
        </View>
)}
{ll!=0 && (<Button
containerStyle={{width:window.width-20,marginRight:10,marginLeft : 10,marginTop : 20,padding:10, height:45, overflow:'hidden', borderRadius:22, backgroundColor: '#261650'}}

style={{fontSize: 14, color: 'white'}}
onPress={this.buttonClickListenerUpdate}
>
{this.state.update}
</Button>
)}

              </View>
              <Text></Text>
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
