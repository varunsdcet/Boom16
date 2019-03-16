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
var arrayholder =[];
var arrayholders =[];
var arrayholderss =[];
var arrayholdersss =[];
type Props = {};
const MyStatusBar = ({backgroundColor, ...props}) => (
<View style={[styles.statusBar, { backgroundColor }]}>
  <StatusBar translucent backgroundColor={backgroundColor} {...props} />
</View>
);



export default class Desired extends Component<Props> {

   	static navigationOptions = {
      header: null
    };
  constructor(props) {
      super(props)
      this.state = {
        text :'',
        tex :'',
          texts :'',
          textss :'',
        iama :'',farea:'',role:'',
        industries:'',
         hidden: true ,
         value: 0,
         values: 0,
         tex:'',
         married:'',full:'', part:'',
         single:'',next:'',temporary:'', permanent:'', both:'',boths:'',
         country:'', state:'',city:'',countrylist:[],arealist:[],industrylist:[],rolelist:[],isVisible:false,industry_id:'',isVisibles:false,
         farea:'', farea_id:'',isVisibless:false,role:'', role_id:'',isVisiblesss:false,country_id:'',incity:'',instate:''
      }
    }

    componentWillMount() {
     TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
      const translator = TranslatorFactory.createTranslator();
   translator.translate('Industries').then(translated => {
      this.setState({ industries: translated });

   });
   translator.translate('Next').then(translated => {
      this.setState({ next: translated });

   });
   translator.translate('Select Functional Area').then(translated => {
      this.setState({ farea: translated });

   });
   translator.translate('Select Role').then(translated => {
      this.setState({ role: translated });

   });
   translator.translate('Permanent').then(translated => {
      this.setState({ permanent: translated });

   });
   translator.translate('Temporary').then(translated => {
      this.setState({ temporary: translated });

   });
   translator.translate('Both').then(translated => {
      this.setState({ both: translated });

   });
   translator.translate('Both').then(translated => {
      this.setState({ boths: translated });

   });
   translator.translate('COUNTRY').then(translated => {
      this.setState({ country: translated });

   });
   translator.translate('STATE').then(translated => {
      this.setState({ state: translated });

   });
   translator.translate('CITY').then(translated => {
      this.setState({ city: translated });

   });

   translator.translate('Part Time').then(translated => {
      this.setState({ part: translated });

   });
   translator.translate('Full Time').then(translated => {
      this.setState({ full: translated });
   });
this.getMoviesFromApiAsyncCountries();
this.getMoviesFromApiAsyncIndustries();
this.getMoviesFromApiAsyncArea();

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
     Search(text){
         const newData = arrayholdersss.filter(function(item){
                const itemData = item.functional_role.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            this.setState({
                rolelist: newData,
                tex: text


            })

        }

     SearchFilterFunction(text){
         const newData = arrayholder.filter(function(item){
                const itemData = item.industry.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            this.setState({
                industrylist: newData,
                text: text


            })

        }

        SearchFilterFunctions(text){
            const newData = arrayholders.filter(function(item){
                   const itemData = item.functional_area.toUpperCase()
                   const textData = text.toUpperCase()
                   return itemData.indexOf(textData) > -1
               })
               this.setState({
                   arealist: newData,
                   texts: text


               })

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
     getMoviesFromApiAsyncIndustries=()=>{
       var url=GLOBAL.BASE_URL + 'industry'
       var acess = "";
       fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {

      if (responseJson.status == "success"){
  alert(JSON.stringify(responseJson))
        this.setState({industrylist:responseJson.data})
        arrayholder =  responseJson.data
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

     getMoviesFromApiAsyncArea=()=>{
       var url=GLOBAL.BASE_URL + 'functional_area'
       var acess = "";
       fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
     //   alert(JSON.stringify(responseJson))
      if (responseJson.status == "success"){
     //        alert(JSON.stringify(responseJson.data))
        this.setState({arealist:responseJson.data})
        arrayholders = responseJson.data

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

     getMoviesFromApiAsyncRole=()=>{
//       alert(this.state.farea_id)
       var acess = this.state.farea_id;
       var url='http://3.17.73.124/boomoversea/public/api/roles/'+acess;

       fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
     //   alert(JSON.stringify(responseJson))
      if (responseJson.status == "success"){
     //        alert(JSON.stringify(responseJson.data))
        this.setState({rolelist:responseJson.data})
        arrayholdersss = responseJson.data

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
    if (this.state.industry == ''){
              alert('Please Select Industry')
            } else if (this.state.farea == ''){
               alert('Please Select Functional Area')
            }else if (this.state.inpstate == ''){
               alert('Please Enter State')
            }else if (this.state.inpcity == ''){
               alert('Please Enter City')
            }else if (this.state.inpzip == ''){
               alert('Please Enter Zip Code')
            }
               else {
              //this.showLoading()
              var CompArray = [];
              CompArray.push('country',this.state.country_id);
              CompArray.push('state',this.state.instate);
              CompArray.push('city',this.state.incity);
              alert(CompArray)
    const url = GLOBAL.BASE_URL + GLOBAL.update_user_information
      const data = new FormData();
        data.append('_token', '8cP9uTwlYsPcFdUqWcgl9zYAekPbNRc6vAg2dD98awUDsrzUUBxVG4GixEGq');
        data.append('user_id', '12');
        data.append('main_industry_id', this.state.industry_id);
        data.append('functional_area_id',this.state.farea_id);
        data.append('functional_role_id',this.state.role_id)
        data.append('desired_job_type', this.state.value);
        data.append('employment_type', this.state.values);
        data.append('preferred_job_locations', JSON.stringify(CompArray));

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
         this.props.navigation.navigate('Salinfo')

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
            this.setState({industries:index.industry})
            this.setState({industry_id:index.industry_id})
            //alert(this.state.nationality_id)
            //alert(this.state.inccode)
           }

        _renderItem = ({item,index}) => {

          return (
            <TouchableOpacity onPress={() =>  this.resPress(item.productID,item)}>
           <View style = {{flexDirection :'row'}}>
           {GLOBAL.language == "en" && ( <Text style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} >{item.industry} </Text>)}

              {GLOBAL.language != "en" && ( <PowerTranslator style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} text={item.industry} />)}
           </View>
           </TouchableOpacity>
          )
        }

         showPopovers() {
             this.setState({isVisibles: true});
           }

           closePopovers() {
             this.setState({isVisibles: false});
             this.getMoviesFromApiAsyncRole();
           }

           _keyExtractors = (item, index) => item.organisationID;
           resPresss = (resId,index) => {
          //    GLOBAL.cid =  resId;

              this.setState({farea:index.functional_area})
              this.setState({farea_id:index.functional_area_id})
              this.closePopovers();
              //alert(this.state.nationality_id)

             }

          _renderItems = ({item,index}) => {

            return (
              <TouchableOpacity onPress={() =>  this.resPresss(item.productID,item)}>

              <View style = {{height :40 ,width :300,borderBottomColor: 'black',
              borderBottomWidth: 0.5,
              marginBottom: 0.4,flexDirection :'row'}}>
             {GLOBAL.language == "en" && ( <Text style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} >{item.functional_area} </Text>)}

                {GLOBAL.language != "en" && ( <PowerTranslator style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} text={item.functional_area} />)}

                  </View>

             </TouchableOpacity>
            )
          }

                  showPopoverss() {
                      this.setState({isVisibless: true});
                    }

                    closePopoverss() {
                      this.setState({isVisibless: false});
                    }

                    _keyExtractorss = (item, index) => item.organisationID;
                    resPressss = (resId,index) => {
                   //    GLOBAL.cid =  resId;
                       this.closePopoverss();
                       this.setState({role:index.functional_role})
                       this.setState({role_id:index.functional_role_id})
                       //alert(this.state.nationality_id)
                       //alert(this.state.inccode)
                      }

                   _renderItemss = ({item,index}) => {

                     return (
                       <TouchableOpacity onPress={() =>  this.resPressss(item.productID,item)}>

                       <View style = {{height :40 ,width :300,borderBottomColor: 'black',
                       borderBottomWidth: 0.5,
                       marginBottom: 0.4,flexDirection :'row'}}>
                      {GLOBAL.language == "en" && ( <Text style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} >{item.functional_role} </Text>)}

                         {GLOBAL.language != "en" && ( <PowerTranslator style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} text={item.functional_role} />)}

                           </View>



                      
                      </TouchableOpacity>
                     )
                   }

                   showPopoversss() {
                       this.setState({isVisiblesss: true});
                     }

                     closePopoversss() {
                       this.setState({isVisiblesss: false});
                     }

                     _keyExtractorsss = (item, index) => item.organisationID;
                     resPresssss = (resId,index) => {
                    //    GLOBAL.cid =  resId;
                        this.closePopoversss();
                        this.setState({country:index.country})
                        this.setState({country_id:index.country_id})
                        //alert(this.state.nationality_id)
                        //alert(this.state.inccode)
                       }

                    _renderItemsss = ({item,index}) => {

                      return (
                        <TouchableOpacity onPress={() =>  this.resPresssss(item.productID,item)}>

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
     var radio_props_one = [
       {label: this.state.permanent, value: 1 },
       {label: this.state.temporary, value: 2 },
       {label: this.state.both, value: 3 }
     ];
     var radio_props_two = [
       {label: this.state.full, values: 1 },
       {label: this.state.part, values: 2 },
       {label: this.state.boths, values: 3 }
     ];
         TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
    return (

      <View style={styles.container}>
         <MyStatusBar backgroundColor="#201344" barStyle="light-content" />
        <View style = {styles.appBar} >
        <View style = {{flex:1,flexDirection:'row', marginTop:1}}>
        <TouchableOpacity onPress = {()=>this.props.navigation.goBack()}>
        <Image style={{marginLeft :10,marginTop :12,height :25,width :25,resizeMode:'contain'}}
                       source={require('./back.png')} />
                       </TouchableOpacity>
                       <PowerTranslator style={{marginLeft : 15,marginTop:12,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} text={'Desired Job'} />
        </View>

          </View>

      <KeyboardAwareScrollView keyboardShouldPersistTaps='always'>
      <View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between'}}>
      <PowerTranslator style={{color:'grey', fontSize:12, marginTop:15, marginLeft:15 }} text={'DESIRED INDUSTRIES'}/>
      <TouchableOpacity onPress={()=>this.showPopover()}>
      <Text style={{height:45,width:window.width-20,marginLeft:15,fontFamily :'Poppins-Medium',color :'black',marginTop :12 }} >{this.state.industries}
      </Text>
      <Popover
                  isVisible={this.state.isVisible}
                     onClose={() => this.closePopover()}>
                    <PowerTranslator style = {{fontWeight :'bold' ,fontSize :16 ,alignSelf :'center',textAlign:'center',padding:3,color:'white', backgroundColor:'#261650',width:300, height:30}}
                     text={'Select Industry'}/>
                     <TextInput
                    style={{marginRight:10, paddingLeft:25,paddingBottom:0,height: 40,borderBottomWidth :1 ,borderColor :'black'}}
                    onChangeText={(text) => this.SearchFilterFunction(text)}
                    value={this.state.text}
                    multiline={false}

                    underlineColorAndroid='transparent'
                    placeholder="Search "
                    />
                     <FlatList style= {{width:300,height:300}}
                          data={this.state.industrylist}
                          numColumns={1}
                          keyExtractor={this._keyExtractor}
                          renderItem={this._renderItem}
                        />
                   </Popover>
      </TouchableOpacity>

      <View style={{marginTop:-5,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

      <PowerTranslator style={{color:'grey', fontSize:12,marginLeft:15, marginTop:20 }} text={'FUNCTIONAL AREA'}/>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <TouchableOpacity onPress={()=>this.showPopovers()}>
      <Text style={{height:45,width:window.width-50,fontFamily :'Poppins-Medium', marginLeft:15 ,color:'black',marginTop :12}}
    >{this.state.farea}</Text>
      <Popover
                  isVisible={this.state.isVisibles}
                     onClose={() => this.closePopovers()}>
                    <PowerTranslator style = {{fontWeight :'bold' ,fontSize :16 ,alignSelf :'center',textAlign:'center',padding:3,color:'white', backgroundColor:'#261650',width:300, height:30}}
                     text={'Select Functional Area'}/>

                     <TextInput
                    style={{marginRight:10, paddingLeft:25,paddingBottom:0,height: 40,borderBottomWidth :1 ,borderColor :'black'}}
                    onChangeText={(text) => this.SearchFilterFunctions(text)}
                    value={this.state.texts}
                    multiline={false}

                    underlineColorAndroid='transparent'
                    placeholder="Search "
                    />
                     <FlatList style= {{width:300,height:300}}
                          data={this.state.arealist}
                          numColumns={1}
                          keyExtractor={this._keyExtractors}
                          renderItem={this._renderItems}
                        />
                   </Popover>
      </TouchableOpacity>
      <Image style={{width:20, height:20, resizeMode:'contain',marginTop:6 }} source={require('./rarrow.png')}/>
      </View>
      <View style={{marginTop:-5,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

      <PowerTranslator style={{color:'grey', fontSize:12,marginLeft:15, marginTop:20 }} text={'ROLE'}/>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <TouchableOpacity onPress={()=>this.showPopoverss()}>
      <Text style={{height:45,width:window.width-50,fontFamily :'Poppins-Medium', marginLeft:15,marginTop:12}}>{this.state.role}
      </Text>
      <Popover
                  isVisible={this.state.isVisibless}
                     onClose={() => this.closePopoverss()}>
                    <PowerTranslator style = {{fontWeight :'bold' ,fontSize :16 ,alignSelf :'center',textAlign:'center',padding:3,color:'white', backgroundColor:'#261650',width:300, height:30}}
                     text={'Select Role'}/>

                     <TextInput
                    style={{marginRight:10, paddingLeft:25,paddingBottom:0,height: 40,borderBottomWidth :1 ,borderColor :'black'}}
                    onChangeText={(text) => this.Search(text)}
                    value={this.state.tex}
                    multiline={false}

                    underlineColorAndroid='transparent'
                    placeholder="Search "
                    />
                     <FlatList style= {{width:300,height:300}}
                          data={this.state.rolelist}
                          numColumns={1}
                          keyExtractor={this._keyExtractorss}
                          renderItem={this._renderItemss}
                        />
                   </Popover>
      </TouchableOpacity>
      <Image style={{width:20, height:20, resizeMode:'contain',marginTop:6 }} source={require('./rarrow.png')}/>
      </View>
      <View style={{marginTop:-5,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>


      <PowerTranslator style={{color:'grey', fontSize:12,marginLeft:15, marginTop:20 }} text={'DESIRED JOB TYPE'}/>
      <RadioForm style={{marginLeft:15, marginTop:12}}
        labelStyle={{paddingRight:20}}
          radio_props={radio_props_one}
          initial={0}
            buttonSize={8}
          formHorizontal={true}
          buttonColor={'#201344'}
          labelHorizontal={true}
          animation={true}
          labelColor={'black'}
          selectedButtonColor={'#201344'}
          onPress={(value) => {this.setState({value:value})}}
        />
        <View style={{marginTop:3,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

        <PowerTranslator style={{color:'grey', fontSize:12,marginLeft:15, marginTop:20 }} text={'EMPLOYMENT TYPE'}/>
        <RadioForm style={{marginLeft:15, marginTop:12}}
          labelStyle={{paddingRight:20}}
            radio_props={radio_props_two}
            initial={0}
              buttonSize={8}
            formHorizontal={true}
            buttonColor={'#201344'}
            labelHorizontal={true}
            animation={true}
            labelColor={'black'}
            selectedButtonColor={'#201344'}
            onPress={(value) => {this.setState({values:value})}}
          />
          <View style={{marginTop:3,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

        <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:15, marginTop:20 }} text={'PREFERRED JOB LOCATION'}/>
        <View style={{margin:10, flexDirection:'column', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row'}}>
        <View style={{flexDirection:'column'}}>
        <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:5}} text={'COUNTRY'}/>
        <TouchableOpacity onPress={()=>this.showPopoversss()}>
        <Text style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium',marginLeft :5,marginTop :12 }} >{this.state.country}</Text>
        <Popover
                    isVisible={this.state.isVisiblesss}
                       onClose={() => this.closePopoversss()}>
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
                            keyExtractor={this._keyExtractorsss}
                            renderItem={this._renderItemsss}
                          />
                     </Popover>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'column'}}>
        <PowerTranslator style={{color:'grey', fontSize:12,marginLeft:5}} text={'STATE'}/>
        <TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium',marginLeft :5 }} placeholder={this.state.state}placeholderTextColor={'black'}
               onChangeText={(text) => this.setState({instate:text})}/>
        </View>

        </View>
        <View style={{marginTop:-5,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:5,height:1}}></View>

        <View style={{flexDirection:'row'}}>
        <View style={{flexDirection:'column'}}>
        <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:5, marginTop:20 }} text={'CITY'}/>
        <TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium',marginLeft :5}} placeholder={this.state.city}placeholderTextColor={'black'}
               onChangeText={(text) => this.setState({incity:text})}/>
        <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:5,height:1}}></View>

        </View>
        </View>
        </View>

<Button
containerStyle={{width:window.width-20,marginRight:10,marginLeft : 10,marginTop : 20,padding:10, height:45, overflow:'hidden', borderRadius:22, backgroundColor: '#261650'}}

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
  content: {
    flex: 1
  },
});
