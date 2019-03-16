import React, {Component} from 'react';
import { Platform,StyleSheet,ScrollView,WebView, Text,FlatList,StatusBar, View ,Image,Alert,Dimensions ,TextInput,TouchableOpacity,TouchableHighlight} from 'react-native';
const window = Dimensions.get('window');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { width, height } = Dimensions.get('window');
import Button from 'react-native-button';
import HTML from 'react-native-render-html';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const GLOBAL = require('./Global');
import Carousel from 'react-native-banner-carousel';
import { PowerTranslator, ProviderTypes, TranslatorConfiguration,TranslatorFactory } from 'react-native-power-translator';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 180 : 180;
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 180;
const equalWidth =  (width/2 )
type Props = {};
const images = [
    "https://www.jobspikr.com/wp-content/uploads/2017/09/how-to-use-jobspikr-for-competitor-intelligence.png",
    "https://www.jobspikr.com/wp-content/uploads/2017/09/how-to-use-jobspikr-for-competitor-intelligence.png",
    "https://www.jobspikr.com/wp-content/uploads/2017/09/how-to-use-jobspikr-for-competitor-intelligence.png"
];
const MyStatusBar = ({backgroundColor, ...props}) => (
<View style={[styles.statusBar, { backgroundColor }]}>
  <StatusBar translucent backgroundColor={backgroundColor} {...props} />
</View>
);
export default class InDetail extends Component {
  renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
            </View>
        );
    }
  static navigationOptions = {
    title: 'Login',
    header: null
  };

constructor(props) {
    super(props)
    this.state = {
      isScreen :'',
      register :'',
      description :'',
      states : false,
      skills :[],
      education :[],
      data :[],
      isBookmark :'',
        moviesList: [],
        moviesLists: [],
        jobLocation: [],
        recommended: [],
        similar: [],
        languageCode :GLOBAL.language,
         backgroundColors: 'white',
         title :'',
         cname :'',
         cimage :'',
         jobid :'',
         postedon :'',
         overtime:'',
         experience :'',
         food :'',
         location :'',
         basicsalary :'',
         dailyhour :'',
         dutyhour :'',

    }
  }

 _keyExtractor = (item, index) => item.id;
 resPress = () => {
this.props.navigation.navigate('JobDetail')

   }

   buttonClickListener=()=>{
     this.props.navigation.navigate('JobDetail')
   }

 likePost({ item, index }) {
     let { moviesLists } = this.state;
     let targetPost = moviesLists[index];

     // Flip the 'liked' property of the targetPost
     targetPost.title = "Hi";

      moviesLists[index] = targetPost;

     // Then update targetPost in 'posts'
     // You probably don't need the following line.
     // posts[index] = targetPost;

     // Then reset the 'state.posts' property
     this.setState({ moviesList });
 }






 _myrenderItems = ({item,index}) => {
   var commonHtml = `${item.salary_start} - ${item.salary_end} ${item.salary_currency}`;

   return (

    <View style = {{flexDirection :'row', justifyContent:'space-between'}}>
   <PowerTranslator style={{marginLeft : 10,fontSize : 15,marginTop : 1,color :'grey',fontFamily :'Poppins-Medium',fontWeight:'bold'}} text={item.category} />
  <PowerTranslator style={{marginLeft : 10,fontSize : 12,marginTop : 4,color :'#181818',fontFamily :'Poppins-Medium'}} text={item.number} />
  <PowerTranslator style={{marginLeft : 10,marginRight:10,fontSize : 12,marginTop : 4,color :'#181818',fontFamily :'Poppins-Medium'}} text={commonHtml} />
    </View>

   )
 }

 _smyrenderItems = ({item,index}) => {
   var commonHtml = `${item.jobDegreeLevel} :`;

   return (

    <View style = {{flexDirection :'column'}}>
    <PowerTranslator style={{marginLeft : 15,marginTop:5,fontSize : 12,color :'black',fontFamily :'Poppins-Medium'}} text={'GRC Trade center'} />

    <PowerTranslator style={{width: window.width - 80 ,marginLeft : 15,marginTop:5,fontSize : 9,color :'#ff1f1f',fontFamily :'Poppins-Medium'}} text={'GRC Trade center cwugcuwgcu wc wucwucu wuc wcg wucg uw uc ugcuwu c'} />
    </View>



   )
 }

 _renderItems = ({item,index}) => {

   return (

    <View style = {{flexDirection :'row'}}>
    <Image style={{marginLeft :15,marginTop :10,height :5,width :5,resizeMode:'contain', marginRight:15}}
                   source={require('./dot.png')} />
                   <PowerTranslator style={{width : window.width - 70,marginLeft : 10,fontSize : 12,marginTop : 1,color :'#181818',fontFamily :'Poppins-Medium'}} text={item.Job_skill} />
    </View>



   )
 }

 _renderItemsss = ({item,index}) => {

   var jobid = `Job Id : ${item.job_id} `;
   var posted = `Posted On ${item.posted_on} `;
   var iSovertime = item.is_overtime
   var overtime = '';
  if (iSovertime == "1"){
    overtime = `${item.overtime_hours_day} Hours`;
  } else {
     overtime = '-'
  }

  var iSFood = item.is_food_by_company
  var food = '';
 if (iSovertime == "1"){
   food = 'Yes'
 } else {
    food = 'No'
 }
 var dailyHour = ` ${item.duty_hours_day} Hours `;
 var dutyHour = ` ${item.duty_days_week} Hours `;
 var salary = `${item.salary_from} - ${item.salary_to} ${item.salary_currency}  `;
   var experience = `${item.job_min_experience} - ${item.job_max_experience} Year  `;
   return (

     <View style={{backgroundColor:'white',color :'white',flexDirection:'row' , flex: 1 ,margin: 10, height: 225,borderRadius :6,width : window.width- 20, shadowColor: '#000',
   shadowOffset: { width: 0, height: 1 },
   shadowOpacity: 0.6,
   shadowRadius: 2,
   elevation: 5 }}>

   <Image style={{marginLeft :10,marginTop :10,height :50,width :50,resizeMode:'contain'}}

 source={{ uri: item.company_image }} />

                  <View style = {{marginLeft : 12,flexDirection : 'column' ,width : window.width - 90}}>


 <PowerTranslator style={{marginTop : 15,fontSize : 12,color :'black',fontFamily :'Poppins-Medium'}} text={item.title} />
 <PowerTranslator style={{fontSize : 11,color :'#24c24e',fontFamily :'Poppins-Medium'}} text={item.comapny} />
 <View style = {{marginTop : 2,flexDirection :'row',justifyContent :'space-between'}}>
 <PowerTranslator style={{alignSelf :'center',marginTop : 0.5,fontSize : 11,color :'#484849',fontFamily :'Poppins-Medium'}} text={jobid} />
 <PowerTranslator style={{marginRight : 10,alignSelf :'center',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={posted} />
 </View>
 <View style = {{marginLeft : - 65,marginTop : 12,flexDirection :'row',justifyContent :'space-between'}}>
 <Image style={{marginLeft :2,marginTop :10,height :20,width :20,resizeMode:'contain'}}
              source={require('./first.png')} />
 <View style = {{marginLeft : 5,width : 100, borderRadius :20,flexDirection :'column',padding :2}}>

 <PowerTranslator style={{alignSelf :'flex-start',marginTop : 5,fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Basic Salary'} />
 <PowerTranslator style={{alignSelf :'flex-start',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'  ,width :140}} text={salary} />
 </View>
 <Image style={{marginLeft :-2,marginTop :10,height :20,width :20,resizeMode:'contain'}}
              source={require('./second.png')} />
 <View style = {{marginLeft : 5,width : 100,height : 40, borderRadius :20,flexDirection :'column',padding :2}}>
 <PowerTranslator style={{alignSelf :'flex-start',marginTop : 5,fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Daily Hour'} />
 <PowerTranslator style={{alignSelf :'flex-start',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={dailyHour} />
 </View>
 <Image style={{marginLeft :-2,marginTop :10,height :20,width :20,resizeMode:'contain'}}
              source={require('./third.png')} />
 <View style = {{marginLeft : 5,marginRight :10,width : 100,height : 40, borderRadius :20,flexDirection :'column',padding :2}}>
 <PowerTranslator style={{alignSelf :'flex-start',marginTop : 5,fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Overtime'} />
 <PowerTranslator style={{alignSelf :'flex-start',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={overtime} />
 </View>

  </View>
  <View style = {{marginLeft : - 65,marginTop : 12,flexDirection :'row',justifyContent :'space-between'}}>
  <Image style={{marginLeft :2,marginTop :10,height :20,width :20,resizeMode:'contain'}}
                 source={require('./four.png')} />
  <View style = {{marginLeft : 5,width : 100,height : 40, borderRadius :20,flexDirection :'column',padding :2}}>

  <PowerTranslator style={{alignSelf :'flex-start',marginTop : 5,fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Food'} />
  <PowerTranslator style={{alignSelf :'flex-start',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={food} />
  </View>
  <Image style={{marginLeft :-2,marginTop :10,height :20,width :20,resizeMode:'contain'}}
                 source={require('./five.png')} />
  <View style = {{marginLeft : 5,width : 100,height : 40, borderRadius :20,flexDirection :'column',padding :2}}>
  <PowerTranslator style={{alignSelf :'flex-start',marginTop : 5,fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Duty Hour'} />
  <PowerTranslator style={{alignSelf :'flex-start',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={dutyHour} />
  </View>
  <Image style={{marginLeft :-2,marginTop :10,height :20,width :20,resizeMode:'contain'}}
                 source={require('./six.png')} />
  <View style = {{marginLeft : 5,marginRight :10,width : 100,height : 40, borderRadius :20,flexDirection :'column',padding :2}}>
  <PowerTranslator style={{alignSelf :'flex-start',marginTop : 5,fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Experience'} />
  <PowerTranslator style={{alignSelf :'flex-start',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={experience} />
  </View>

     </View>

           <Button
          containerStyle={{width:window.width - 20,marginLeft : -72,marginTop : 8,padding:8, height:45, overflow:'hidden', borderRadius:4, backgroundColor: '#261650'}}

          style={{fontSize: 16, color: 'white'}}
          onPress={()=>this.buttonClickListener(item)}
          >

          {this.state.register}
          </Button>
 </View>


 </View>


   )
 }


  _renderItem = ({item,index}) => {

    var jobid = `Job Id : ${item.job_id} `;
    var posted = `Posted On ${item.posted_on} `;
    var iSovertime = item.is_overtime
    var overtime = '';
   if (iSovertime == "1"){
     overtime = `${item.overtime_hours_day} Hours`;
   } else {
      overtime = '-'
   }

   var iSFood = item.is_food_by_company
   var food = '';
  if (iSovertime == "1"){
    food = 'Yes'
  } else {
     food = 'No'
  }
  var dailyHour = ` ${item.duty_hours_day} Hours `;
  var dutyHour = ` ${item.duty_days_week} Hours `;
  var salary = `${item.salary_from} - ${item.salary_to} ${item.salary_currency}  `;
    var experience = `${item.job_min_experience} - ${item.job_max_experience} Year  `;
    return (

      <View style={{backgroundColor:'white',color :'white',flexDirection:'row' , flex: 1 ,margin: 10, height: 225,borderRadius :6,width : window.width- 20, shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 5 }}>

    <Image style={{marginLeft :10,marginTop :10,height :50,width :50,resizeMode:'contain'}}

source={{ uri: item.company_image }} />

                   <View style = {{marginLeft : 12,flexDirection : 'column' ,width : window.width - 90}}>


<PowerTranslator style={{marginTop : 15,fontSize : 12,color :'black',fontFamily :'Poppins-Medium'}} text={item.title} />
<PowerTranslator style={{fontSize : 11,color :'#24c24e',fontFamily :'Poppins-Medium'}} text={item.comapny} />
<View style = {{marginTop : 2,flexDirection :'row',justifyContent :'space-between'}}>
<PowerTranslator style={{alignSelf :'center',marginTop : 0.5,fontSize : 11,color :'#484849',fontFamily :'Poppins-Medium'}} text={jobid} />
<PowerTranslator style={{marginRight : 10,alignSelf :'center',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={posted} />
</View>
<View style = {{marginLeft : - 65,marginTop : 12,flexDirection :'row',justifyContent :'space-between'}}>
<Image style={{marginLeft :2,marginTop :10,height :20,width :20,resizeMode:'contain'}}
               source={require('./first.png')} />
<View style = {{marginLeft : 5,width : 100, borderRadius :20,flexDirection :'column',padding :2}}>

<PowerTranslator style={{alignSelf :'flex-start',marginTop : 5,fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Basic Salary'} />
<PowerTranslator style={{alignSelf :'flex-start',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'  ,width :140}} text={salary} />
</View>
<Image style={{marginLeft :-2,marginTop :10,height :20,width :20,resizeMode:'contain'}}
               source={require('./second.png')} />
<View style = {{marginLeft : 5,width : 100,height : 40, borderRadius :20,flexDirection :'column',padding :2}}>
<PowerTranslator style={{alignSelf :'flex-start',marginTop : 5,fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Daily Hour'} />
<PowerTranslator style={{alignSelf :'flex-start',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={dailyHour} />
</View>
<Image style={{marginLeft :-2,marginTop :10,height :20,width :20,resizeMode:'contain'}}
               source={require('./third.png')} />
<View style = {{marginLeft : 5,marginRight :10,width : 100,height : 40, borderRadius :20,flexDirection :'column',padding :2}}>
<PowerTranslator style={{alignSelf :'flex-start',marginTop : 5,fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Overtime'} />
<PowerTranslator style={{alignSelf :'flex-start',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={overtime} />
</View>

   </View>
   <View style = {{marginLeft : - 65,marginTop : 12,flexDirection :'row',justifyContent :'space-between'}}>
   <Image style={{marginLeft :2,marginTop :10,height :20,width :20,resizeMode:'contain'}}
                  source={require('./four.png')} />
   <View style = {{marginLeft : 5,width : 100,height : 40, borderRadius :20,flexDirection :'column',padding :2}}>

   <PowerTranslator style={{alignSelf :'flex-start',marginTop : 5,fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Food'} />
   <PowerTranslator style={{alignSelf :'flex-start',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={food} />
   </View>
   <Image style={{marginLeft :-2,marginTop :10,height :20,width :20,resizeMode:'contain'}}
                  source={require('./five.png')} />
   <View style = {{marginLeft : 5,width : 100,height : 40, borderRadius :20,flexDirection :'column',padding :2}}>
   <PowerTranslator style={{alignSelf :'flex-start',marginTop : 5,fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Duty Hour'} />
   <PowerTranslator style={{alignSelf :'flex-start',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={dutyHour} />
   </View>
   <Image style={{marginLeft :-2,marginTop :10,height :20,width :20,resizeMode:'contain'}}
                  source={require('./six.png')} />
   <View style = {{marginLeft : 5,marginRight :10,width : 100,height : 40, borderRadius :20,flexDirection :'column',padding :2}}>
   <PowerTranslator style={{alignSelf :'flex-start',marginTop : 5,fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Experience'} />
   <PowerTranslator style={{alignSelf :'flex-start',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={experience} />
   </View>

      </View>

            <Button
           containerStyle={{width:window.width - 20,marginLeft : -72,marginTop : 8,padding:8, height:45, overflow:'hidden', borderRadius:4, backgroundColor: '#261650'}}

           style={{fontSize: 16, color: 'white'}}
           onPress={()=>this.buttonClickListener(item)}
           >

           {this.state.register}
           </Button>
 </View>


</View>


    )
  }

  bookmark = ()=> {
    if (this.state.isBookmark == "0"){
       const url = GLOBAL.BASE_URL + 'add_to_favourite_interview_job';
    alert(url)
        fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id : GLOBAL.user_id,
      interview_job_id : "1"


    }),
  }).then((response) => response.json())
      .then((responseJson) => {
    alert(JSON.stringify(responseJson))
   this.setState({isBookmark :"1"})
  //recommended
      //  alert(JSON.stringify(responseJson))

      })
      .catch((error) => {
        console.error(error);

      });
    }else {
      const url = GLOBAL.BASE_URL + 'remove_from_favourite_interview_job';
   alert(url)
       fetch(url, {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({
     user_id : GLOBAL.user_id,
     interview_job_id : "1"


   }),
  }).then((response) => response.json())
     .then((responseJson) => {
   alert(JSON.stringify(responseJson))
  this.setState({isBookmark :"0"})
  //recommended
     //  alert(JSON.stringify(responseJson))

     })
     .catch((error) => {
       console.error(error);

     });
    }
  }



  componentWillMount() {
    TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
     const translator = TranslatorFactory.createTranslator();


  translator.translate('APPLY').then(translated => {


     this.setState({ register: translated });

     //Do something with the translated text
  });
       this.getMoviesFromApiAsync()

   }
  changeLanguage(languageCode) {
          this.setState({ languageCode: languageCode });
  }


  apply = ()=> {

       const url = GLOBAL.BASE_URL + 'show_interest_in_interview';
    alert(url)
        fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id : GLOBAL.user_id,
      interview_job_id : "1"


    }),
  }).then((response) => response.json())
      .then((responseJson) => {
    alert(JSON.stringify(responseJson))
   this.setState({isBookmark :"1"})
  //recommended
      //  alert(JSON.stringify(responseJson))

      })
      .catch((error) => {
        console.error(error);

      });

  }

  getMoviesFromApiAsync = () => {

       const url = GLOBAL.BASE_URL + 'upcoming_interview_details';
//     alert(url)
      fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    user_id : '12',
    interviewID : '1',
  }),
}).then((response) => response.json())
    .then((responseJson) => {
  alert(JSON.stringify(responseJson))
 this.setState({ recommended: responseJson.recomended_jobs})
 this.setState({ similar: responseJson.similar_jobs})
       this.setState({ skills: responseJson.data.skills_required})
   this.setState({ cimage: responseJson.data.company_logo})
   this.setState({ education: responseJson.data.categories})
  //  this.setState({ description: responseJson.data.description})
//description
if (responseJson.data.is_saved == "null" || responseJson.data.is_saved == "0" || responseJson.data.is_saved == null){
  this.setState({isBookmark :"0"})
}
else {
    this.setState({isBookmark :"1"})
}
       const translator = TranslatorFactory.createTranslator();
    translator.translate(responseJson.data.jobtitle).then(translated => {

     mobilePlaceholder = translated;
       this.setState({ title: mobilePlaceholder });

       //Do something with the translated text
    });

    translator.translate(responseJson.data.job_description).then(translated => {

     mobilePlaceholder = translated;
       this.setState({ description: mobilePlaceholder });

       //Do something with the translated text
    });

    translator.translate(responseJson.data.company).then(translated => {

     mobilePlaceholder = translated;
       this.setState({ cname: mobilePlaceholder });

       //Do something with the translated text
    });


    var dailyHour = ` ${responseJson.data.duty_hours_day} Hours  Per Day`;
  var dutyHour = ` ${responseJson.data.duty_days_week} Hours Per Week`;



  translator.translate(responseJson.data.interview_start_date).then(translated => {

   mobilePlaceholder = translated;
     this.setState({ location: mobilePlaceholder });

     //Do something with the translated text
  });

  translator.translate(responseJson.data.venue).then(translated => {

   mobilePlaceholder = translated;
     this.setState({ dailyhour: mobilePlaceholder });

     //Do something with the translated text
  });

  translator.translate(responseJson.data.job_location).then(translated => {

   mobilePlaceholder = translated;
     this.setState({ dutyhour: mobilePlaceholder });

     //Do something with the translated text
  });


 var jobid = `Job Id : ${responseJson.data.job_id} `;
    translator.translate(responseJson.data.contact_person_fname).then(translated => {

     mobilePlaceholder = translated;
       this.setState({ jobid: mobilePlaceholder });

       //Do something with the translated text
    });

 var posted = `${responseJson.data.contact_person_phone_code} - ${responseJson.data.contact_person_phone} `;

 translator.translate(posted).then(translated => {

  mobilePlaceholder = translated;
    this.setState({ postedon: mobilePlaceholder });

    //Do something with the translated text
 });

 translator.translate(responseJson.data.job_experience).then(translated => {

  mobilePlaceholder = translated;
    this.setState({ experience: mobilePlaceholder });

    //Do something with the translated text
 });



 translator.translate(responseJson.data.terms_condition).then(translated => {

  mobilePlaceholder = translated;
    this.setState({ basicsalary: mobilePlaceholder });

    //Do something with the translated text
 });

 var iSFood = responseJson.data.is_food_by_company
  var food = '';
 if (iSFood == "1"){
   food = 'Yes'
 } else {
    food = 'No'
 }
 translator.translate(food).then(translated => {

  mobilePlaceholder = translated;
    this.setState({ food: mobilePlaceholder });

    //Do something with the translated text
 });



 var iSovertime = responseJson.data.is_overtime
    var overtime = '';
   if (iSovertime == "1"){
     overtime = `${responseJson.data.overtime_hours_day} Hours`;
   } else {
      overtime = '-'
   }


   translator.translate(overtime).then(translated => {

    mobilePlaceholder = translated;
      this.setState({ overtime: mobilePlaceholder });

      //Do something with the translated text
   });
            //alert(JSON.stringify(this.state.title))
//recommended
    //  alert(JSON.stringify(responseJson))

    })
    .catch((error) => {
      console.error(error);

    });
 }






  render() {

    TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
    return (

      <KeyboardAwareScrollView style = {{flex:1}}
      keyboardShouldPersistTaps='always'>
     <View style={styles.container}>

<View style={styles.appBar} >

<Image style={{height :180,width :window.width,resizeMode:'stretch'}}
               source={require('./background.png')} />



<TouchableOpacity onPress = {()=>this.props.navigation.goBack()}>
<Image style={{marginLeft : -window.width + 10,height :25,width :25,marginTop : 30,resizeMode:'contain'}}
               source={require('./back.png')} />
               </TouchableOpacity>


               <PowerTranslator style={{marginLeft : - window.width + 60,marginTop:30,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} text={'Interview Details'} />


               <TouchableOpacity onPress = {()=>this.props.navigation.goBack()}>
               <Image style={{marginLeft :- 100 ,marginTop :30,height :25,width :25,resizeMode:'contain'}}
                              source={require('./book.png')} />
                              </TouchableOpacity>
                              <TouchableOpacity onPress = {()=>this.bookmark()}>
                                 {this.state.isBookmark == "0" && (
                              <Image style={{marginLeft :-50,marginTop :30,height :25,width :25,resizeMode:'contain'}}
                                             source={require('./fav.png')} />)}
                                             {this.state.isBookmark == "1" && (
                                               <Image style={{marginLeft :-50 ,marginTop :30,height :25,width :25,resizeMode:'contain'}}
                                                            source={require('./heartw.png')} />)
                                                          }
                                             </TouchableOpacity>

        <View style = {{flexDirection :'column',marginLeft:- window.width, width : window.width,marginTop : 60}}>
<Text style={{alignSelf :'center',marginTop:30,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} >
{this.state.title}
</Text>


        <View style = {{flexDirection:'row'}}>
        <Image style={{marginLeft :window.width/2 - 70,alignSelf :'center' ,marginTop :5,height :25,width :25,resizeMode:'contain'}}
                    source={{ uri: this.state.cimage }} />
          <Text style={{marginTop:12,marginLeft:12,fontSize : 8,color :'white',fontFamily :'Poppins-Medium'}}>
           {this.state.cname}
           < /Text>
        </View>
</View>
</View>

<View style={{justifyContent:'center',alignItems:'center',position:'absolute',top :155,backgroundColor:'green',color :'white', flex: 1 ,marginLeft: window.width/2 - 75, height: 40,borderRadius :6,width : 150, shadowColor: '#000',
shadowOffset: { width: 0, height: 1 },
shadowOpacity: 0.6,
shadowRadius: 2,
elevation: 5 }}>
<TouchableOpacity onPress = {()=>this.apply()}>
<PowerTranslator style={{fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} text={'INTERESTED'} />
</TouchableOpacity>
</View>

<View style = {{alignSelf:'center',marginTop : 20,flexDirection :'row',justifyContent :'space-between'}}>

<View style = {{width : 100,height : 40,backgroundColor :'#f2f3f5', borderRadius :20,flexDirection :'column',padding :2}}>
<PowerTranslator style={{alignSelf :'center',marginTop : 5,fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Interview Date'} />
<Text style={{alignSelf :'center',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}}>
 {this.state.location} </Text>
</View>
<View style = {{width : 100,height : 40,backgroundColor :'#f2f3f5', borderRadius :20,flexDirection :'column',padding :2}}>
<PowerTranslator style={{alignSelf :'center',marginTop : 5,fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Venue'} />
<Text style={{alignSelf :'center',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}}>
{this.state.dailyhour} </Text>
</View>
<View style = {{marginRight :10,width : 100,height : 40,backgroundColor :'#f2f3f5', borderRadius :20,flexDirection :'column',padding :2}}>
<PowerTranslator style={{alignSelf :'center',marginTop : 5,fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Job Location'} />
<Text style={{alignSelf :'center',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} >
{this.state.dutyhour} </Text>
</View>

</View>

<PowerTranslator style={{marginLeft : 15,marginTop:10,fontSize : 16,color :'black',fontFamily :'Poppins-Medium'}} text={'Job description'} />


<Text style={{marginLeft : 15,marginRight:15,marginTop:5,fontSize : 12,color :'black',fontFamily :'Poppins-Medium'}}>
 {this.state.description} </Text>
  <View style = {{marginLeft :15 ,marginRight : 15,width:window.width - 30 ,height:1 ,marginTop:5,backgroundColor:'#f1f1f1'}}>
  </View>
<PowerTranslator style={{marginLeft : 15,marginTop:5,fontSize : 14,color :'black',fontFamily :'Poppins-Medium'}} text={'Job Details'} />
<View style={{backgroundColor:'#bfbfbf', flexDirection:'row', margin:10, justifyContent:'space-between'}}>
<PowerTranslator style={{marginLeft:10,marginTop:5,fontSize : 14,color :'black',fontFamily :'Poppins-Medium'}} text={'Category'} />
<PowerTranslator style={{marginTop:5,fontSize : 14,color :'black',fontFamily :'Poppins-Medium'}} text={'Number'} />
<PowerTranslator style={{marginRight:10,marginTop:5,fontSize : 14,color :'black',fontFamily :'Poppins-Medium'}} text={'Salary'} />
</View>
<FlatList style= {{flexGrow:0,marginTop:3}}
     data={this.state.education}
     numColumns={1}
     keyExtractor={this._keyExtractor}
     renderItem={this._myrenderItems}
   />

<View style ={{flexDirection :'column'}}>

</View>
<View style = {{marginLeft :15 ,marginRight : 15,width:window.width - 30 ,height:1 ,marginTop:20,backgroundColor:'#f1f1f1'}}>
</View>
<PowerTranslator style={{marginLeft : 15,marginTop:5,fontSize : 14,color :'black',fontFamily :'Poppins-Medium'}} text={'Terms and Conditions'} />

      <ScrollView style={{ flex: 1 }}>
               <HTML
                html={this.state.basicsalary} imagesMaxWidth={Dimensions.get('window').width} />
           </ScrollView>
   <View style = {{marginLeft :15 ,marginRight : 15,width:window.width - 30 ,height:1 ,marginTop:5,backgroundColor:'#f1f1f1'}}>
   </View>
   <PowerTranslator style={{marginLeft : 15,marginTop:5,fontSize : 14,color :'black',fontFamily :'Poppins-Medium'}} text={'Contact Details'} />
   <View style={{flexDirection:'column'}}>

   <View style={{flexDirection:'row', justifyContent:'space-between'}}>
   <View style={{flexDirection:'column'}}>
   <PowerTranslator style={{marginLeft : 20,marginTop:5,fontSize : 14,color :'#bfbfbf',fontFamily :'Poppins-Medium'}} text={'Name'} />
   <Text style={{marginLeft : 20,marginTop:5,fontSize : 14,color :'black',fontFamily :'Poppins-Medium'}}>
    {this.state.jobid} </Text>
   </View>
   <View style={{flexDirection:'column'}}>
   <PowerTranslator style={{marginLeft : 20,marginRight:10,marginTop:5,fontSize : 14,color :'#bfbfbf',fontFamily :'Poppins-Medium'}} text={'Phone'} />
   <Text style={{marginLeft : 20,marginRight:10,marginTop:5,fontSize : 14,color :'black',fontFamily :'Poppins-Medium'}}>
    {this.state.postedon} </Text>
   </View>
   </View>
   <View style={{flexDirection:'column'}}>
   <PowerTranslator style={{marginLeft : 20,marginTop:5,fontSize : 14,color :'#bfbfbf',fontFamily :'Poppins-Medium'}} text={'Interview Location'} />
   <PowerTranslator style={{marginLeft : 20,marginTop:5,fontSize : 14,color :'black',fontFamily :'Poppins-Medium'}} text={'GRC Trade Center'} />
   </View>

   </View>

  <View style = {{marginLeft :15 ,marginRight : 15,width:window.width - 30 ,height:1 ,marginTop:5,backgroundColor:'#f1f1f1'}}>
  </View>
  <PowerTranslator style={{marginLeft : 15,marginTop:5,fontSize : 12,color :'black',fontFamily :'Poppins-Medium'}} text={'Job Location'} />

  <FlatList style= {{flexGrow:0,marginTop:3}}
       data={this.state.education}
       numColumns={1}
       keyExtractor={this._keyExtractor}
       renderItem={this._smyrenderItems}
     />

<PowerTranslator style={{marginLeft : 15,marginTop:8,fontSize : 14,color :'black',fontFamily :'Poppins-Medium'}} text={'Recommended jobs for you'} />
<PowerTranslator style={{alignSelf:'flex-end',marginTop:-20,marginRight:10,fontSize : 12,color :'grey',fontFamily :'Poppins-Medium'}} text={'View All'} />

   <FlatList style= {{flexGrow:0,marginTop:5}}
   horizontal={true}
     data={this.state.recommended}
     numColumns={1}
     keyExtractor={this._keyExtractor}
     renderItem={this._renderItem}
   />
   <PowerTranslator style={{marginLeft : 15,marginTop:10,fontSize : 14,color :'black',fontFamily :'Poppins-Medium'}} text={'Similar Jobs'} />
      <FlatList style= {{flexGrow:0,marginTop:5}}
      horizontal={true}
        data={this.state.similar}
        numColumns={1}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItemsss}
      />


      </View>

<Text></Text>
      <Image style={{bottom :15,right :15,position :'absolute',height :50,width :50,resizeMode:'contain'}}
                     source={require('./call.png')} />
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:'#f7f7f7',

    },
    statusBar: {
      height: STATUSBAR_HEIGHT,
    },
    appBar: {
      backgroundColor:'#261650',
      height: APPBAR_HEIGHT,
      flexDirection :'row',



    },
    loading: {
             position: 'absolute',
             left: window.width/2 - 30,

             top: window.height/2,

             opacity: 0.5,

             justifyContent: 'center',
             alignItems: 'center'
         },

colord:
{ textAlign :'center',marginLeft :15,marginTop :window.height/2 - 120,width : window.width -30,fontSize : 22  ,color :'#261650'},

});
