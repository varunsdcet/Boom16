import React, {Component} from 'react';
import { Platform,StyleSheet, Text,FlatList,StatusBar, View ,Image,Alert,Dimensions ,TextInput,TouchableOpacity,TouchableHighlight} from 'react-native';
const window = Dimensions.get('window');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { width, height } = Dimensions.get('window');
import Button from 'react-native-button';
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
export default class ProviderJobDetail extends Component {
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
      states : false,
        moviesList: [],
        moviesLists: [],
        languageCode :GLOBAL.language,
         backgroundColors: 'white',

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



 _renderItems = ({item,index}) => {

   return (

    <View style = {{flexDirection :'row'}}>
    <Image style={{marginLeft :15,marginTop :10,height :5,width :5,resizeMode:'contain', marginRight:15}}
                   source={require('./dot.png')} />
                   <PowerTranslator style={{width : window.width - 70,marginLeft : 10,fontSize : 12,marginTop : 1,color :'#181818',fontFamily :'Poppins-Medium'}} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} />
    </View>



   )
 }




  _renderItem = ({item,index}) => {

    return (

      <View style={{backgroundColor:'white',color :'white',flexDirection:'row' , flex: 1 ,margin: 10, height: 230,borderRadius :6,width : window.width- 20, shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 5 }}>

    <Image style={{marginLeft :10,marginTop :10,height :50,width :50,resizeMode:'contain'}}
                   source={require('./max.png')} />


                   <View style = {{marginLeft : 12,flexDirection : 'column' ,width : window.width - 90}}>


<PowerTranslator style={{marginTop : 15,fontSize : 12,color :'black',fontFamily :'Poppins-Medium'}} text={'Urgent Requirement of Neurologist'} />
<PowerTranslator style={{fontSize : 11,color :'#24c24e',fontFamily :'Poppins-Medium'}} text={'Max Hospital'} />
<View style = {{marginTop : 2,flexDirection :'row',justifyContent :'space-between'}}>
<PowerTranslator style={{alignSelf :'center',marginTop : 0.5,fontSize : 11,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Job Id : 12345'} />
<PowerTranslator style={{marginRight : 50,alignSelf :'flex-end',marginRight:15,fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={'Posted on 12 Jun 2018'} />
</View>
<View style = {{marginLeft : - 65,marginTop : 12,flexDirection :'row',justifyContent :'space-between'}}>
<Image style={{marginLeft :2,marginTop :10,height :20,width :20,resizeMode:'contain'}}
               source={require('./first.png')} />
<View style = {{marginLeft : 5,width : 100,height : 40, borderRadius :20,flexDirection :'column',padding :2}}>

<PowerTranslator style={{alignSelf :'flex-start',marginTop : 5,fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Basic Salary'} />
<PowerTranslator style={{alignSelf :'flex-start',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={'80 - 100 AED'} />
</View>
<Image style={{marginLeft :-2,marginTop :10,height :20,width :20,resizeMode:'contain'}}
               source={require('./second.png')} />
<View style = {{marginLeft : 5,width : 100,height : 40, borderRadius :20,flexDirection :'column',padding :2}}>
<PowerTranslator style={{alignSelf :'flex-start',marginTop : 5,fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Daily Hour'} />
<PowerTranslator style={{alignSelf :'flex-start',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={'10 Hours'} />
</View>
<Image style={{marginLeft :-2,marginTop :10,height :20,width :20,resizeMode:'contain'}}
               source={require('./third.png')} />
<View style = {{marginLeft : 5,marginRight :10,width : 100,height : 40, borderRadius :20,flexDirection :'column',padding :2}}>
<PowerTranslator style={{alignSelf :'flex-start',marginTop : 5,fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Overtime'} />
<PowerTranslator style={{alignSelf :'flex-start',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={'2 Hours'} />
</View>

   </View>
   <View style = {{marginLeft : - 65,marginTop : 12,flexDirection :'row',justifyContent :'space-between'}}>
   <Image style={{marginLeft :2,marginTop :10,height :20,width :20,resizeMode:'contain'}}
                  source={require('./four.png')} />
   <View style = {{marginLeft : 5,width : 100,height : 40, borderRadius :20,flexDirection :'column',padding :2}}>

   <PowerTranslator style={{alignSelf :'flex-start',marginTop : 5,fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Food'} />
   <PowerTranslator style={{alignSelf :'flex-start',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={'Yes'} />
   </View>
   <Image style={{marginLeft :-2,marginTop :10,height :20,width :20,resizeMode:'contain'}}
                  source={require('./five.png')} />
   <View style = {{marginLeft : 5,width : 100,height : 40, borderRadius :20,flexDirection :'column',padding :2}}>
   <PowerTranslator style={{alignSelf :'flex-start',marginTop : 5,fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Duty Hour'} />
   <PowerTranslator style={{alignSelf :'flex-start',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={'10 Hours'} />
   </View>
   <Image style={{marginLeft :-2,marginTop :10,height :20,width :20,resizeMode:'contain'}}
                  source={require('./six.png')} />
   <View style = {{marginLeft : 5,marginRight :10,width : 100,height : 40, borderRadius :20,flexDirection :'column',padding :2}}>
   <PowerTranslator style={{alignSelf :'flex-start',marginTop : 5,fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Experience'} />
   <PowerTranslator style={{alignSelf :'flex-start',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={'3-6 Year'} />
   </View>

      </View>

            <Button
           containerStyle={{width:window.width - 20,marginLeft : -72,marginTop : 5,padding:11, height:42, overflow:'hidden', borderRadius:4, backgroundColor: '#261650'}}
           style={{fontSize: 16, color: 'white'}}
           onPress={this.buttonClickListener}>
           {this.state.register}
           </Button>
 </View>


</View>



    )
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
  getMoviesFromApiAsync = () => {

       const url = 'http://139.59.76.223/boom_test/web.php';
//     alert(url)
      fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    userID : '1'

  }),
}).then((response) => response.json())
    .then((responseJson) => {
  //    alert(JSON.stringify(responseJson))

       this.setState({ moviesList: responseJson.languages})

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





               <PowerTranslator style={{marginLeft : - window.width + 60,marginTop:30,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} text={'Details'} />


               <TouchableOpacity onPress = {()=>this.props.navigation.goBack()}>
               <Image style={{marginLeft :- 100 ,marginTop :30,height :25,width :25,resizeMode:'contain'}}
                              source={require('./book.png')} />
                              </TouchableOpacity>
                              <TouchableOpacity onPress = {()=>this.props.navigation.goBack()}>
                              <Image style={{marginLeft :-50,marginTop :30,height :25,width :25,resizeMode:'contain'}}
                                             source={require('./fav.png')} />
                                             </TouchableOpacity>


        <View style = {{flexDirection :'column',marginLeft:- window.width, width : window.width,marginTop : 60}}>
<PowerTranslator style={{alignSelf :'center',marginTop:30,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} text={'UI front End Developer'} />


        <View style = {{flexDirection:'row'}}>
        <Image style={{marginLeft :window.width/2 - 70,alignSelf :'center' ,marginTop :5,height :25,width :25,resizeMode:'contain'}}
                       source={require('./max.png')} />
          <PowerTranslator style={{marginTop:12,marginLeft:12,fontSize : 8,color :'white',fontFamily :'Poppins-Medium'}} text={'Kelly Service'} />
        </View>
</View>
</View>

<PowerTranslator style={{marginLeft : 15,marginTop:10,fontSize : 16,color :'black',fontFamily :'Poppins-Medium'}} text={'Job description'} />
<PowerTranslator style={{marginLeft : 15,marginRight:15,marginTop:5,fontSize : 12,color :'black',fontFamily :'Poppins-Medium'}} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'} />
  <View style = {{marginLeft :15 ,marginRight : 15,width:window.width - 30 ,height:1 ,marginTop:5,backgroundColor:'#f1f1f1'}}>
  </View>
<PowerTranslator style={{marginLeft : 15,marginTop:5,fontSize : 14,color :'black',fontFamily :'Poppins-Medium'}} text={'Job Details'} />

<View style ={{flexDirection :'column'}}>
<View style = {{marginLeft : 15,marginTop : 12,flexDirection :'row'}}>

<Image style={{marginLeft :5,marginTop :5,height :8,width :8,resizeMode:'contain'}}
               source={require('./dot.png')} />
<View style = {{marginLeft : 5,width : 100,height : 40, borderRadius :20,flexDirection :'column',padding :2}}>

<PowerTranslator style={{alignSelf :'flex-start',fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Basic Salary'} />
<PowerTranslator style={{alignSelf :'flex-start',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={'Rs.50,000 per month'} />

<View style = {{marginLeft : window.width/2 + 20,marginTop : - 30,flexDirection :'row'}}>

<Image style={{marginLeft :5,marginTop :5,height :8,width :8,resizeMode:'contain'}}
               source={require('./dot.png')} />
<View style = {{marginLeft : 5,width : 100,height : 40, borderRadius :20,flexDirection :'column',padding :2}}>

<PowerTranslator style={{alignSelf :'flex-start',fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Location'} />
<PowerTranslator style={{alignSelf :'flex-start',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={'New Delhi'} />
</View>
</View>
</View>
</View>
</View>



<View style ={{flexDirection :'column'}}>
<View style = {{marginLeft : 15,marginTop : 5,flexDirection :'row'}}>

<Image style={{marginLeft :5,marginTop :5,height :8,width :8,resizeMode:'contain'}}
               source={require('./dot.png')} />
<View style = {{marginLeft : 5,width : 100,height : 40, borderRadius :20,flexDirection :'column',padding :2}}>

<PowerTranslator style={{alignSelf :'flex-start',fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Overtime'} />
<PowerTranslator style={{alignSelf :'flex-start',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={'2 Hour'} />

<View style = {{marginLeft : window.width/2 + 20,marginTop : - 30,flexDirection :'row'}}>

<Image style={{marginLeft :5,marginTop :5,height :8,width :8,resizeMode:'contain'}}
               source={require('./dot.png')} />
<View style = {{marginLeft : 5,width : 100,height : 40, borderRadius :20,flexDirection :'column',padding :2}}>

<PowerTranslator style={{alignSelf :'flex-start',fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Food'} />
<PowerTranslator style={{alignSelf :'flex-start',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={'Yes'} />
</View>
</View>
</View>
</View>
</View>



<View style ={{flexDirection :'column'}}>
<View style = {{marginLeft : 15,marginTop : 5,flexDirection :'row'}}>

<Image style={{marginLeft :5,marginTop :5,height :8,width :8,resizeMode:'contain'}}
               source={require('./dot.png')} />
<View style = {{marginLeft : 5,width : 100,height : 40, borderRadius :20,flexDirection :'column',padding :2}}>

<PowerTranslator style={{alignSelf :'flex-start',fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Experience'} />
<PowerTranslator style={{alignSelf :'flex-start',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={'3-6 Years'} />

<View style = {{marginLeft : window.width/2 + 20,marginTop : - 30,flexDirection :'row'}}>

<Image style={{marginLeft :5,marginTop :5,height :8,width :8,resizeMode:'contain'}}
               source={require('./dot.png')} />
<View style = {{marginLeft : 5,width : 100,height : 40, borderRadius :20,flexDirection :'column',padding :2}}>

<PowerTranslator style={{alignSelf :'flex-start',fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Duty Hours'} />
<PowerTranslator style={{alignSelf :'flex-start',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={'10 Hrs per day'} />
<PowerTranslator style={{alignSelf :'flex-start',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={'6 days per week'} />
</View>
</View>
</View>
</View>
</View>
<View style = {{marginLeft :15 ,marginRight : 15,width:window.width - 30 ,height:1 ,marginTop:20,backgroundColor:'#f1f1f1'}}>
</View>
<PowerTranslator style={{marginLeft : 15,marginTop:5,fontSize : 14,color :'black',fontFamily :'Poppins-Medium'}} text={'Skills Required'} />

<FlatList style= {{flexGrow:0,marginTop:3}}
     data={this.state.moviesList}
     numColumns={1}
     keyExtractor={this._keyExtractor}
     renderItem={this._renderItems}
   />

   <View style = {{marginLeft :15 ,marginRight : 15,width:window.width - 30 ,height:1 ,marginTop:5,backgroundColor:'#f1f1f1'}}>
   </View>
   <PowerTranslator style={{marginLeft : 15,marginTop:5,fontSize : 14,color :'black',fontFamily :'Poppins-Medium'}} text={'Education'} />
  <View style = {{flexDirection :'row',marginLeft : 15 }}>
   <PowerTranslator style={{marginLeft : 0,marginTop:5,fontSize : 14,color :'grey',fontFamily :'Poppins-Medium'}} text={'UG:'} />
   <PowerTranslator style={{marginLeft : 50,marginTop:5,fontSize : 14,color :'black',fontFamily :'Poppins-Medium'}} text={'B.Tech/B.E.-Any Specialization'} />
  </View>
  <View style = {{flexDirection :'row',marginLeft : 15 }}>
   <PowerTranslator style={{marginLeft : 0,marginTop:5,fontSize : 14,color :'grey',fontFamily :'Poppins-Medium'}} text={'PG:'} />
   <PowerTranslator style={{marginLeft : 50,marginTop:5,fontSize : 14,color :'black',fontFamily :'Poppins-Medium'}} text={'Any Postgraduate-Any Specialization'} />
  </View>

  <View style = {{flexDirection :'row',marginLeft : 15 }}>
   <PowerTranslator style={{marginLeft : 0,marginTop:5,fontSize : 14,color :'grey',fontFamily :'Poppins-Medium'}} text={'Doctorate:'} />
   <PowerTranslator style={{marginLeft : 50,marginRight:15,marginTop:5,fontSize : 14,color :'black',fontFamily :'Poppins-Medium'}} text={'Doctorate Not Required'} />
  </View>
  <View style = {{marginLeft :15 ,marginRight : 15,width:window.width - 30 ,height:1 ,marginTop:5,backgroundColor:'#f1f1f1'}}>
  </View>
      </View>

<Text></Text>
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
