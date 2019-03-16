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
//const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import Popover from 'react-native-popover-view';
var arrayholders = [];
var arrayholder = [];
var arrayholderss = [];
type Props = {};
const MyStatusBar = ({backgroundColor, ...props}) => (
<View style={[styles.statusBar, { backgroundColor }]}>
  <StatusBar translucent backgroundColor={backgroundColor} {...props} />
</View>
);



export default class Education extends Component<Props> {

   	static navigationOptions = {
      header: null
    };
  constructor(props) {
      super(props)
      this.state = {
        iama :'',farea:'',role:'',
        industries:'',
         hidden: true ,
         value: 0,pass:'',
         married:'',dtype:'', part:'',degree:'', next:'',company:'',yes:'',no:'',month:'', year:'',country:'',
         state:'',desc:'',skip:'',title:'',details:'',city:'',grade:'', result:'', subjects:'',   moviesList: [],
            isVisible: false,
            isVisibles: false,
              isVisibless: false,
              isVisiblesss: false,
            moviesLists:[],
            moviesListss:[],
              moviesListsss:[],
            languageid:'',
            llid :'',
            loading :false,
            countryid :'',


             degreetitle :'',
             institutiondetail :'',
             icountry :'',
             istate :'',
             icity :'',
             ipassingyear :'',
             igrade :'',
             iresult :'',
             isubject :'',
             result_type_id:'',
      }
    }


    _renderItemss = ({item,index}) => {
  var commonHtml = `${item.country}`;
      return (
  <TouchableOpacity onPress={() =>  this.resPressss(item)}>
   <View style = {{height :40 ,width :300,borderBottomColor: 'black',
   borderBottomWidth: 0.5,
   marginBottom: 0.4,}}>

  <PowerTranslator style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} text={commonHtml} />


       </View>

  </TouchableOpacity>


      )
    }
    _renderItemsss = ({item,index}) => {
  var commonHtml = `${item.result_type}`;
      return (
  <TouchableOpacity onPress={() =>  this.resPresssss(item)}>
   <View style = {{height :40 ,width :300,borderBottomColor: 'black',
   borderBottomWidth: 0.5,
   marginBottom: 0.4,}}>

  <PowerTranslator style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} text={commonHtml} />


       </View>

  </TouchableOpacity>


      )
    }

    _renderItems = ({item,index}) => {
  var commonHtml = `${item.degree_type}`;
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

    _renderItem = ({item,index}) => {

      return (
  <TouchableOpacity onPress={() =>  this.resPress(item)}>
   <View style = {{height :40 ,width :300,borderBottomColor: 'black',
   borderBottomWidth: 0.5,
   marginBottom: 0.4,}}>

  <PowerTranslator style={{margin:8,marginTop :  8,alignSelf :'center',fontSize : 15,color :'black',fontFamily :'Poppins-Medium'}} text={item.degree_level} />


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
    resPress = (item) => {
  this.closePopover();
      this.closePopovers();
        this.closePopoverss();
      //this.state.selectskill
      //this.state.degree
       this.setState({degree :item.degree_level})
   this.setState({languageid:item.degree_level_id})



  var url= GLOBAL.BASE_URL + 'get_degree_types' + '/' + item.degree_level_id;

  fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {


  //alert(JSON.stringify(responseJson))
  if (responseJson.status == "success"){
  this.setState({ moviesLists: responseJson.data})
  arrayholders =  responseJson.data;
  }else{
  alert('Unable to process your request Please try again')
  }


  })
  .catch((error) => {


  console.error(error);
  this.hideLoading();
   alert('Unable to process your request Please try again after some time')

  });







   //alert(this.state.inccode)
  }
  resPresss = (item) => {

    this.closePopover();
        this.closePopovers();
        this.closePopoverss();
    this.setState({dtype :item.degree_type})
   this.setState({llid:item.degree_type_id});
  //alert(this.state.inccode)
  }

  resPressss = (item) => {

    this.closePopover();
        this.closePopovers();
        this.closePopoverss();
    this.setState({country :item.country})
   this.setState({countryid:item.country_id});
  //alert(this.state.inccode)
  }


  resPresssss = (item) => {

    this.closePopover();
        this.closePopovers();
        this.closePopoverss();
          this.closePopoversss();
    this.setState({grade :item.result_type})
   this.setState({result_type_id:item.result_type_id});
  //alert(this.state.inccode)
  }

  componentDidMount() {

    this.props.navigation.addListener('willFocus',this._handleStateChange);
   }
   _handleStateChange = state => {

     this.setState({subjects :GLOBAL.subject})
};

    showPopovers() {
        this.setState({isVisibles: true});
      }

      closePopovers() {
        this.setState({isVisibles: false});
      }
    showPopover() {
        this.setState({isVisible: true});
      }

      showPopoverss() {
          this.setState({isVisibless: true});
        }

        closePopoverss() {
          this.setState({isVisibless: false});
        }
        showPopoversss() {
            this.setState({isVisiblesss: true});
          }

          closePopoversss() {
            this.setState({isVisiblesss: false});
          }

      add() {
        if (this.state.languageid == ''){
                 alert('Please Select Degree Level')
           }
          else if (this.state.llid == '') {
     alert('Please Select Degree Type')
   }  else if (this.state.degreetitle == '') {
alert('Please enter Degree Title')
}

else if (this.state.institutiondetail == '') {
alert('Please enter Insitution Name')
}
else if (this.state.countryid == '') {
alert('Please enter Country')
}
else if (this.state.istate == '') {
alert('Please enter State')
}
else if (this.state.icity == '') {
alert('Please enter City')
}
else if (this.state.ipassingyear == '') {
alert('Please enter Passing Year')
}
else if (this.state.result_type_id == '') {
alert('Please enter Grade')
}
else if (this.state.iresult == '') {
alert('Please enter Result')
}
else if (GLOBAL.subjectId == '') {
alert('Please enter Subject')
}


                   else {
                 this.showLoading()
                 const url = GLOBAL.BASE_URL + 'add_education';

               fetch(url, {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({

                   degree_type_id : this.state.llid,
                      degree_level_id : this.state.languageid,
                         user_id : GLOBAL.user_id,
                          _token : GLOBAL.token,
                          degree_title : this.state.degreetitle,
                          state : this.state.istate,
                          city : this.state.icity,
                          country_id : this.state.countryid,
                          date_completion : this.state.ipassingyear,
                          institution : this.state.institutiondetail,
                          degree_result : this.state.iresult,
                          result_type_id : this.state.result_type_id,
                          major_subjects :GLOBAL.subjectId




           }),
         }).then((response) => response.json())
             .then((responseJson) => {

            alert(JSON.stringify(responseJson))
  this.setState({ llid: '' });
  this.setState({ language_id: '' });
this.setState({ degreetitle: '' });
this.setState({ institutiondetail: '' });
this.setState({ icountry: '' });
this.setState({ istate: '' });
this.setState({ icity: '' });
this.setState({ ipassingyear: '' });
this.setState({ igrade: '' });
this.setState({ iresult: '' });
this.setState({ isubject: '' });





         this.hideLoading()



             })
             .catch((error) => {
                 this.hideLoading()
               console.error(error);
             });
             }

        }

      closePopover() {
        this.setState({isVisible: false});
      }

      SearchFilterFunctions(text){
          const newData = arrayholders.filter(function(item){
                 const itemData = item.job_experience.toUpperCase()
                 const textData = text.toUpperCase()
                 return itemData.indexOf(textData) > -1
             })
             this.setState({
                 moviesLists: newData,
                 text: text


             })

         }

         SearchFilterFunctionss(text){
             const newData = arrayholders.filter(function(item){
                    const itemData = item.country.toUpperCase()
                    const textData = text.toUpperCase()
                    return itemData.indexOf(textData) > -1
                })
                this.setState({
                    moviesListss: newData,
                    text: text


                })

            }

      SearchFilterFunction(text){
          const newData = arrayholder.filter(function(item){
                 const itemData = item.job_skill.toUpperCase()
                 const textData = text.toUpperCase()
                 return itemData.indexOf(textData) > -1
             })
             this.setState({
                 moviesList: newData,
                 text: text


             })

         }

      getMoviesFromApiAsync = () => {


      var url= GLOBAL.BASE_URL + 'get_degree_levels';

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




      var url= GLOBAL.BASE_URL + 'countries';

     fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {


  //alert(JSON.stringify(responseJson))
    if (responseJson.status == "success"){
     this.setState({ moviesListss: responseJson.data})
      arrayholderss =  responseJson.data;
    }else{
       alert('Unable to process your request Please try again')
    }


      })
      .catch((error) => {


        console.error(error);
         this.hideLoading();
          alert('Unable to process your request Please try again after some time')

      });


      var url= GLOBAL.BASE_URL + 'get_degree_results';

     fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {


  //alert(JSON.stringify(responseJson))
    if (responseJson.status == "success"){
     this.setState({ moviesListsss: responseJson.data})

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




    componentWillMount() {
     TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
      const translator = TranslatorFactory.createTranslator();
   translator.translate('Degree Level').then(translated => {
      this.setState({ degree: translated });

   });
      this.getMoviesFromApiAsync()
   translator.translate('Next').then(translated => {
      this.setState({ next: translated });

   });
   translator.translate('Degree Type').then(translated => {
      this.setState({ dtype: translated });

   });
   translator.translate('Select Role').then(translated => {
      this.setState({ role: translated });

   });
   translator.translate('Institution Details').then(translated => {
      this.setState({ details: translated });

   });
   translator.translate('Select Year').then(translated => {
      this.setState({year: translated });

   });
   translator.translate('Degree Title').then(translated => {
      this.setState({ title: translated });

   });
   translator.translate('Country').then(translated => {
      this.setState({ country: translated });

   });
   translator.translate('Passing Year').then(translated => {
      this.setState({ pass: translated });

   });
   translator.translate('State').then(translated => {
      this.setState({ state: translated });

   });

   translator.translate('City').then(translated => {
      this.setState({ city: translated });

   });
   translator.translate('Skip').then(translated => {
      this.setState({ skip: translated });

   });
   translator.translate('Grade').then(translated => {
      this.setState({ grade: translated });
   });
   translator.translate('Degree Result').then(translated => {
      this.setState({ result: translated });
   });
   translator.translate('Subjects').then(translated => {
         this.setState({ subjects: translated });
      });
     }

     back = () => {
   this.props.navigation.goBack()
  }

         buttonClickListenerNext=()=>{
           this.props.navigation.navigate('Experience')
         }
         buttonClickListenerSkip=()=>{
           this.props.navigation.navigate('Experience')
         }
   render() {

         TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
    return (

      <View style={styles.container}>
         <MyStatusBar backgroundColor="#201344" barStyle="light-content" />
        <View style = {styles.appBar} >
        <View style = {{flex:1,flexDirection:'row', marginTop:8}}>
        <TouchableOpacity onPress = {()=>this.props.navigation.goBack()}>
        <Image style={{marginLeft :10,height :25,width :25,resizeMode:'contain'}}
                       source={require('./back.png')} />
                       </TouchableOpacity>
                       <PowerTranslator style={{marginLeft : 15,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} text={'Education'} />
        </View>

          </View>

      <KeyboardAwareScrollView keyboardShouldPersistTaps='always'>
      <View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between'}}>

      <TouchableOpacity
                onPress={() => this.showPopover()}
              >
       <View>
      <PowerTranslator style={{color:'grey', fontSize:12,fontFamily :'Poppins-Medium',marginLeft:15, marginTop:20 }} text={'DEGREE LEVEL'}/>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <TextInput style={{height:45,width:window.width-50,fontFamily :'Poppins-Medium', marginLeft:15}} placeholder={this.state.degree}placeholderTextColor={'black'}
      editable = {false}
      />
      <Image style={{width:20, height:20, resizeMode:'contain',marginTop:10 }} source={require('./rarrow.png')}/>
      </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity
                onPress={() => this.showPopovers()}
              >
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

      <PowerTranslator style={{color:'grey', fontSize:12,marginLeft:15, marginTop:20,fontFamily :'Poppins-Medium' }} text={'DEGREE TYPE'}/>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <TextInput style={{height:45,width:window.width-50,fontFamily :'Poppins-Medium', marginLeft:15}} placeholder={this.state.dtype}placeholderTextColor={'black'}
  editable = {false}
      />
      <Image style={{width:20, height:20, resizeMode:'contain',marginTop:6 }} source={require('./rarrow.png')}/>
      </View>
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>
  </TouchableOpacity>
        <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:15, marginTop:20,fontFamily :'Poppins-Medium' }} text={'DEGREE TITLE'}/>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <TextInput style={{height:45,width:window.width-50,fontFamily :'Poppins-Medium', marginLeft:15}} placeholder={this.state.title}placeholderTextColor={'black'}
    onChangeText={(text) => this.setState({degreetitle:text})}

        />
        </View>
        <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

      <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:15, marginTop:20 ,fontFamily :'Poppins-Medium'}} text={'INSTITUTION DETAILS'}/>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <TextInput style={{height:45,width:window.width-50,fontFamily :'Poppins-Medium', marginLeft:15}} placeholderTextColor={'black'} placeholder={this.state.details}
  onChangeText={(text) => this.setState({institutiondetail:text})}
      />
      </View>
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

      <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20, marginLeft:15,}}>
      <TouchableOpacity
                onPress={() => this.showPopoverss()}
              >
      <View style={{flexDirection:'column'}}>
      <PowerTranslator style={{color:'grey', fontSize:12,fontFamily :'Poppins-Medium',}} text={'COUNTRY'}/>
      <TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium', marginLeft:0 }}placeholderTextColor={'black'} placeholder={this.state.country}
onChangeText={(text) => this.setState({icountry:text})}
editable = {false}
      />
      </View>

      </TouchableOpacity>
      <View style={{flexDirection:'column'}}>
      <PowerTranslator style={{color:'grey', fontSize:12,fontFamily :'Poppins-Medium' }} text={'STATE'}/>
      <TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium',marginLeft:0 }} placeholder={this.state.state}placeholderTextColor={'black'}
    onChangeText={(text) => this.setState({istate:text})}
      />
      </View>
      </View>

      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

      <View style={{flexDirection:'column',}}>
      <PowerTranslator style={{color:'grey', fontSize:12,marginTop:20,marginLeft:15,fontFamily :'Poppins-Medium'}} text={'CITY'}/>
      <TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium' , marginLeft:15}} placeholder={this.state.city}placeholderTextColor={'black'}
       onChangeText={(text) => this.setState({icity:text})}
      />
      </View>

      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

      <PowerTranslator style={{color:'grey', fontSize:12,marginLeft:15, marginTop:20,fontFamily :'Poppins-Medium' }} text={'PASSING YEAR'}/>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <TextInput style={{height:45,width:window.width-50,fontFamily :'Poppins-Medium', marginLeft:15}} placeholder={this.state.pass}placeholderTextColor={'black'}
onChangeText={(text) => this.setState({ipassingyear:text})}
      />
      <Image style={{width:20, height:20, resizeMode:'contain',marginTop:10 }} source={require('./rarrow.png')}/>
      </View>
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

      <View style={{flexDirection:'row', justifyContent:'space-between',}}>

      <TouchableOpacity
                onPress={() => this.showPopoversss()}
              >
      <View style={{flexDirection:'column'}}>
      <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:15,marginTop:20,fontFamily :'Poppins-Medium' }} text={'GRADING SYSTEM'}/>
      <TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium', marginLeft:15 }} placeholder={this.state.grade}placeholderTextColor={'black'}
onChangeText={(text) => this.setState({igrade:text})}
    editable = {false}  />
      </View>
      </TouchableOpacity>
      <View style={{flexDirection:'column'}}>
      <PowerTranslator style={{color:'grey', fontSize:12,  marginLeft:15,marginTop:20,fontFamily :'Poppins-Medium' }} text={'DEGREE RESULT'}/>
      <TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium', marginLeft:15 }} placeholder={this.state.result}placeholderTextColor={'black'}
   onChangeText={(text) => this.setState({iresult:text})}
      />
      </View>
      </View>

      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>
      <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Subject')}
              >
      <View style={{flexDirection:'column',}}>
      <PowerTranslator style={{color:'grey', fontSize:12, marginLeft:15,marginTop:20,fontFamily :'Poppins-Medium' }} text={'MAJOR SUBJECTS'}/>
      <TextInput style={{height:45,width:window.width,fontFamily :'Poppins-Medium', marginLeft:15 }} placeholder={this.state.subjects}placeholderTextColor={'black'}
     onChangeText={(text) => this.setState({isubject:text})}
     editable = {false}
      />
      </View>
      <View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-30,marginLeft:15,height:1}}></View>

   </TouchableOpacity>
        <TouchableOpacity style={{alignSelf:'flex-end', width:100, height:35,marginRight:20, marginTop:20}}
         onPress={() => this.add()}
        >
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



              <Popover
                isVisible={this.state.isVisible}

                onClose={() => this.closePopover()}>
               <Text style = {{marginTop :10,fontWeight :'bold' ,fontSize :16 ,alignSelf :'center'}}>
                Please Select Degree
               </Text>

               <TextInput
            style={{marginRight:10, paddingLeft:25,paddingBottom:0,height: 40,borderBottomWidth :1 ,borderColor :'black'}}
            onChangeText={(text) => this.SearchFilterFunction(text)}
            value={this.state.text}
            multiline={false}

            underlineColorAndroid='transparent'
            placeholder="Search"
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
                Please Select Degree Type
               </Text>

               <TextInput
            style={{marginRight:10, paddingLeft:25,paddingBottom:0,height: 40,borderBottomWidth :1 ,borderColor :'black'}}
            onChangeText={(text) => this.SearchFilterFunctions(text)}
            value={this.state.text}
            multiline={false}

            underlineColorAndroid='transparent'
            placeholder="Search "
            />
                <FlatList style= {{marginTop :10,width:300,height:300}}
                     data={this.state.moviesLists}
                     numColumns={1}
                     keyExtractor={this._keyExtractor}
                     renderItem={this._renderItems}
                   />




              </Popover>






              <Popover
                isVisible={this.state.isVisibless}

                onClose={() => this.closePopoverss()}>
               <Text style = {{marginTop :10,fontWeight :'bold' ,fontSize :16 ,alignSelf :'center'}}>
                Please Select Country
               </Text>

               <TextInput
            style={{marginRight:10, paddingLeft:25,paddingBottom:0,height: 40,borderBottomWidth :1 ,borderColor :'black'}}
            onChangeText={(text) => this.SearchFilterFunctionss(text)}
            value={this.state.text}
            multiline={false}

            underlineColorAndroid='transparent'
            placeholder="Search "
            />
                <FlatList style= {{marginTop :10,width:300,height:300}}
                     data={this.state.moviesListss}
                     numColumns={1}
                     keyExtractor={this._keyExtractor}
                     renderItem={this._renderItemss}
                   />




              </Popover>


              <Popover
                isVisible={this.state.isVisiblesss}

                onClose={() => this.closePopoverss()}>
               <Text style = {{marginTop :10,fontWeight :'bold' ,fontSize :16 ,alignSelf :'center'}}>
                Please Select Grade
               </Text>


                <FlatList style= {{marginTop :10,width:300,height:300}}
                     data={this.state.moviesListsss}
                     numColumns={1}
                     keyExtractor={this._keyExtractor}
                     renderItem={this._renderItemsss}
                   />




              </Popover>



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
