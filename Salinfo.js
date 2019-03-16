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
var arrayholder = [];
var arrayholders =[];
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



export default class Salinfo extends Component<Props> {

   	static navigationOptions = {
      header: null
    };
  constructor(props) {
      super(props)
      this.state = {
       text :'',
       texts :'',
        slang:'',slanglevel:'',salary:'',period:'',periods:'',
        currency:'',
        twoline:'',skip:'',yes:'',no:'',
        iama :'',
         hidden: true ,
         value: 0,
         married:'',
         single:'',next:'',selectskill:'',sexp:'',isVisible:false,currencylist:[],currcode:'',incurrsalary:'',inexpsalary:'',
         currencys:'',isVisibles:false,periodlist:[],isVisiblep:false, isVisibleps:false, salary_period_id:'', salary_period_ids:'',
      }
    }

    componentWillMount() {
     TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
      const translator = TranslatorFactory.createTranslator();
   translator.translate('Select Currency').then(translated => {
      this.setState({ currency: translated });

   });
   translator.translate('Select Currency').then(translated => {
      this.setState({ currencys: translated });

   });
   translator.translate('Current Salary').then(translated => {
      this.setState({ salary: translated });

   });
   translator.translate('Select Period').then(translated => {
     this.setState({period: translated });

   });
   translator.translate('Select Period').then(translated => {
      this.setState({periods: translated });

   });
   translator.translate('Next').then(translated => {
      this.setState({ next: translated });

   });
   translator.translate('Skip').then(translated => {
      this.setState({ skip: translated });

   });
   translator.translate('Expected Salary').then(translated => {
      this.setState({ sexp: translated });

      //Do something with the translated text
   });
this.getMoviesFromApiAsyncCurrencies();
this.getMoviesFromApiAsyncPeriod();
     }

     getMoviesFromApiAsyncPeriod=()=>{
       this.showLoading()
       var url=GLOBAL.BASE_URL + 'get_salary_periods'
       var acess = "";
       fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          this.hideLoading()
     //   alert(JSON.stringify(responseJson))
      if (responseJson.status == "success"){
     //        alert(JSON.stringify(responseJson.data))
     arrayholders = responseJson.data
        this.setState({periodlist:responseJson.data})
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

     getMoviesFromApiAsyncCurrencies=()=>{
       this.showLoading();
       var url=GLOBAL.BASE_URL + 'currencies'
       var acess = "";
       fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          this.hideLoading()
     //   alert(JSON.stringify(responseJson))
      if (responseJson.status == "success"){
         arrayholder = responseJson.data
     //        alert(JSON.stringify(responseJson.data))
        this.setState({currencylist:responseJson.data})
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

  showLoading() {
        this.setState({loading: true})
     }

     hideLoading() {
        this.setState({loading: false})
     }
       buttonClickListenerNext=()=>{
         if (this.state.currencys == ''){
                   alert('Please Select Expected Salary Currency')
                 } else if (this.state.inexpsalary == ''){
                    alert('Please Enter Expected Salary')
                 }else if (this.state.periods == ''){
                    alert('Please Select Expected Salary Period')
                 }
                    else {
                   this.showLoading()
         const url = GLOBAL.BASE_URL + GLOBAL.update_user_information
           const data = new FormData();
             data.append('_token', '8cP9uTwlYsPcFdUqWcgl9zYAekPbNRc6vAg2dD98awUDsrzUUBxVG4GixEGq');
             data.append('user_id', GLOBAL.user_id);
             data.append('current_salary_currency', this.state.currency);
             data.append('current_salary', this.state.incurrsalary);
             data.append('current_salary_period', this.state.salary_period_id);
             data.append('expected_salary_currency', this.state.currencys);
             data.append('expected_salary', this.state.inexpsalary);
             data.append('expected_salary_period', this.state.salary_period_ids);

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
              this.props.navigation.navigate('Education')

             });
               }

       }

       buttonClickListenerSkip=()=>{
         this.props.navigation.navigate('Education')
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
            this.setState({currency:index.code})
           }

        _renderItem = ({item,index}) => {

          return (
            <TouchableOpacity onPress={() =>  this.resPress(item.productID,item)}>

            <View style = {{flexDirection :'row'}}>
            {GLOBAL.language == "en" && ( <Text style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} >{item.code} </Text>)}

               {GLOBAL.language != "en" && ( <PowerTranslator style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} text={item.code} />)}
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
             this.setState({currencys:index.code})
            }

         _renderItems = ({item,index}) => {

           return (
             <TouchableOpacity onPress={() =>  this.resPresss(item.productID,item)}>

             <View style = {{flexDirection :'row'}}>
             {GLOBAL.language == "en" && ( <Text style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} >{item.code} </Text>)}

                {GLOBAL.language != "en" && ( <PowerTranslator style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} text={item.code} />)}
             </View>



            </TouchableOpacity>
           )
         }

         showPopoverp() {
             this.setState({isVisiblep: true});
           }

           closePopoverp() {
             this.setState({isVisiblep: false});
           }

           _keyExtractorp = (item, index) => item.organisationID;
           resPressp = (resId,index) => {
          //    GLOBAL.cid =  resId;
              this.closePopoverp();
              this.setState({period:index.salary_period})
              this.setState({salary_period_id:index.salary_period_id})
             }

          _renderItemp = ({item,index}) => {

            return (
              <TouchableOpacity onPress={() =>  this.resPressp(item.productID,item)}>

              <View style = {{flexDirection :'row'}}>
              {GLOBAL.language == "en" && ( <Text style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} >{item.salary_period} </Text>)}

                 {GLOBAL.language != "en" && ( <PowerTranslator style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} text={item.salary_period} />)}
              </View>



             </TouchableOpacity>
            )
          }

          showPopoverps() {
              this.setState({isVisibleps: true});
            }

            closePopoverps() {
              this.setState({isVisibleps: false});
            }



            SearchFilterFunctions(text){
                const newData = arrayholders.filter(function(item){
                       const itemData = item.salary_period.toUpperCase()
                       const textData = text.toUpperCase()
                       return itemData.indexOf(textData) > -1
                   })
                   this.setState({
                       periodlist: newData,
                       texts: text


                   })

               }

            SearchFilterFunction(text){
                const newData = arrayholder.filter(function(item){
                       const itemData = item.code.toUpperCase()
                       const textData = text.toUpperCase()
                       return itemData.indexOf(textData) > -1
                   })
                   this.setState({
                       currencylist: newData,
                       text: text


                   })

               }


            _keyExtractorps = (item, index) => item.organisationID;
            resPressps = (resId,index) => {
           //    GLOBAL.cid =  resId;
               this.closePopoverps();
               this.setState({periods:index.salary_period})
               this.setState({salary_period_ids:index.salary_period_id})
              }

           _renderItemps = ({item,index}) => {

             return (
               <TouchableOpacity onPress={() =>  this.resPressps(item.productID,item)}>
               <View style = {{flexDirection :'row'}}>
               {GLOBAL.language == "en" && ( <Text style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} >{item.salary_period} </Text>)}

                  {GLOBAL.language != "en" && ( <PowerTranslator style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} text={item.salary_period} />)}
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
        <View style = {{flex:1,flexDirection:'row', marginTop:2}}>
        <TouchableOpacity onPress = {()=>this.props.navigation.goBack()}>
        <Image style={{marginLeft :10,marginTop :12,height :25,width :25,resizeMode:'contain'}}
                       source={require('./back.png')} />
                       </TouchableOpacity>
                       <PowerTranslator style={{marginLeft : 15,marginTop:12,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} text={'Salary Information'} />
        </View>

          </View>

      <KeyboardAwareScrollView keyboardShouldPersistTaps='always'>
      <View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between'}}>
      <PowerTranslator style={{color:'grey', fontSize:15, marginLeft:15, marginTop:15,fontFamily :'Poppins-Medium' }} text={'CURRENT SALARY DETAILS'}/>

      <View style={{margin:10, flexDirection:'column', justifyContent:'space-between'}}>
      <View style={{flexDirection:'row'}}>
      <View style={{flexDirection:'column'}}>
      <PowerTranslator style={{color:'grey', fontSize:12, marginTop:5, marginLeft:5,fontFamily :'Poppins-Medium' }} text={'SALARY CURRENCY'}/>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={()=>this.showPopover()}>
      <Text style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium',marginLeft:0, marginTop:15 ,marginLeft :5}} >{this.state.currency} </Text>
      <Popover
                  isVisible={this.state.isVisible}
                     onClose={() => this.closePopover()}>
                    <PowerTranslator style = {{fontWeight :'bold' ,fontSize :16 ,alignSelf :'center',textAlign:'center',padding:3,color:'white', backgroundColor:'#261650',width:300, height:30}}
                     text={'Select Currency'}/>

                     <TextInput
                    style={{marginRight:10, paddingLeft:25,paddingBottom:0,height: 40,borderBottomWidth :1 ,borderColor :'black'}}
                    onChangeText={(text) => this.SearchFilterFunction(text)}
                    value={this.state.text}
                    multiline={false}

                    underlineColorAndroid='transparent'
                    placeholder="Search "
                    />


                     <FlatList style= {{width:300,height:300}}
                          data={this.state.currencylist}
                          numColumns={1}
                          keyExtractor={this._keyExtractor}
                          renderItem={this._renderItem}
                        />
                   </Popover>
      </TouchableOpacity>
      <Image style={{marginLeft:-30,width:20, height:20, resizeMode:'contain',marginTop:15 }} source={require('./rarrow.png')}/>
      </View>
      </View>
      <View style={{flexDirection:'column', marginLeft:20}}>
      <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:5, marginTop:5,fontFamily :'Poppins-Medium' }} text={'AMOUNT'}/>
      <TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium', marginLeft:0, marginTop:5 }} placeholder={this.state.salary}placeholderTextColor={'black'}
      keyboardType = 'numeric'
      onChangeText={(text) => this.setState({incurrsalary:text})}/>
      </View>

      </View>

      </View>
      <View style={{marginTop:-10,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>


      <PowerTranslator style={{color:'grey', fontSize:12,fontFamily :'Poppins-Medium',marginLeft:15, marginTop:20 }} text={'SALARY PERIOD'}/>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <TouchableOpacity onPress={()=>this.showPopoverp()}>
      <Text style={{height:45,width:window.width-50,fontFamily :'Poppins-Medium',marginLeft:15 ,marginTop :12}} >{this.state.period} </Text>
      <Popover
                  isVisible={this.state.isVisiblep}
                     onClose={() => this.closePopoverp()}>
                    <PowerTranslator style = {{fontWeight :'bold' ,fontSize :16 ,alignSelf :'center',textAlign:'center',padding:3,color:'white', backgroundColor:'#261650',width:300, height:30}}
                     text={'Select Period'}/>


                     <TextInput
                    style={{marginRight:10, paddingLeft:25,paddingBottom:0,height: 40,borderBottomWidth :1 ,borderColor :'black'}}
                    onChangeText={(text) => this.SearchFilterFunctions(text)}
                    value={this.state.texts}
                    multiline={false}

                    underlineColorAndroid='transparent'
                    placeholder="Search "
                    />


                     <FlatList style= {{width:300,height:300}}
                          data={this.state.periodlist}
                          numColumns={1}
                          keyExtractor={this._keyExtractorp}
                          renderItem={this._renderItemp}
                        />
                   </Popover>
      </TouchableOpacity>
      <Image style={{width:20, height:20, resizeMode:'contain',marginTop:6 }} source={require('./rarrow.png')}/>
      </View>
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>


      <PowerTranslator style={{color:'grey', fontSize:15,fontFamily :'Poppins-Medium', marginLeft:15, marginTop:20 }} text={'EXPECTED SALARY DETAILS'}/>
      <View style={{margin:10, flexDirection:'column', justifyContent:'space-between'}}>
      <View style={{flexDirection:'row'}}>
      <View style={{flexDirection:'column'}}>
      <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:5, marginTop:10,fontFamily :'Poppins-Medium' }} text={'SALARY CURRENCY'}/>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={()=>this.showPopovers()}>
      <Text style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium', marginLeft:5 ,marginTop :12 }}>{this.state.currencys} </Text>
      <Popover
                  isVisible={this.state.isVisibles}
                     onClose={() => this.closePopovers()}>
                    <PowerTranslator style = {{fontWeight :'bold' ,fontSize :16 ,alignSelf :'center',textAlign:'center',padding:3,color:'white', backgroundColor:'#261650',width:300, height:30}}
                     text={'Select Currency'}/>

                     <TextInput
                    style={{marginRight:10, paddingLeft:25,paddingBottom:0,height: 40,borderBottomWidth :1 ,borderColor :'black'}}
                    onChangeText={(text) => this.SearchFilterFunction(text)}
                    value={this.state.text}
                    multiline={false}

                    underlineColorAndroid='transparent'
                    placeholder="Search "
                    />

                     <FlatList style= {{width:300,height:300}}
                          data={this.state.currencylist}
                          numColumns={1}
                          keyExtractor={this._keyExtractors}
                          renderItem={this._renderItems}
                        />
                   </Popover>
      </TouchableOpacity>
      <Image style={{marginLeft:-30,width:20, height:20, resizeMode:'contain',marginTop:10 }} source={require('./rarrow.png')}/>
      </View>
      </View>
      <View style={{flexDirection:'column', marginLeft:20}}>
      <PowerTranslator style={{color:'grey', fontSize:12, fontFamily :'Poppins-Medium',marginLeft:5, marginTop:10, }} text={'AMOUNT'}/>
      <TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium',marginLeft:0 }} placeholder={this.state.sexp}placeholderTextColor={'black'} keyboardType = 'numeric'
            onChangeText={(text) => this.setState({inexpsalary:text})}/>

      </View>

      </View>
      <View style={{marginTop:-5,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:5,height:1}}></View>

      </View>

            <PowerTranslator style={{color:'grey', fontSize:12,marginLeft:15,fontFamily :'Poppins-Medium', marginTop:10 }} text={'SALARY PERIOD'}/>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <TouchableOpacity onPress={()=>this.showPopoverps()}>
            <Text style={{height:45,width:window.width-50,fontFamily :'Poppins-Medium', marginLeft:15,marginTop:12}} >{this.state.periods}</Text>
            <Popover
                        isVisible={this.state.isVisibleps}
                           onClose={() => this.closePopoverps()}>
                          <PowerTranslator style = {{fontWeight :'bold' ,fontSize :16 ,alignSelf :'center',textAlign:'center',padding:3,color:'white', backgroundColor:'#261650',width:300, height:30}}
                           text={'Select Period'}/>


                                                <TextInput
                                               style={{marginRight:10, paddingLeft:25,paddingBottom:0,height: 40,borderBottomWidth :1 ,borderColor :'black'}}
                                               onChangeText={(text) => this.SearchFilterFunctions(text)}
                                               value={this.state.texts}
                                               multiline={false}

                                               underlineColorAndroid='transparent'
                                               placeholder="Search "
                                               />

                           <FlatList style= {{width:300,height:300}}
                                data={this.state.periodlist}
                                numColumns={1}
                                keyExtractor={this._keyExtractorps}
                                renderItem={this._renderItemps}
                              />
                         </Popover>
            </TouchableOpacity>
            <Image style={{width:20, height:20, resizeMode:'contain',marginTop:6 }} source={require('./rarrow.png')}/>
            </View>

            <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

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
