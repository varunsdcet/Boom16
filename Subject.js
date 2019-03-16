import React, {Component} from 'react';
import { Platform,StyleSheet, Text,FlatList,StatusBar, View ,Image,Alert,Dimensions ,TextInput,TouchableOpacity,TouchableHighlight} from 'react-native';
const window = Dimensions.get('window');
import { PowerTranslator, ProviderTypes, TranslatorConfiguration } from 'react-native-power-translator';
const { width, height } = Dimensions.get('window');
import Button from 'react-native-button';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const GLOBAL = require('./Global');
var s = '';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const equalWidth =  (width/2 )
type Props = {};
const MyStatusBar = ({backgroundColor, ...props}) => (
<View style={[styles.statusBar, { backgroundColor }]}>
  <StatusBar translucent backgroundColor={backgroundColor} {...props} />
</View>
);

export default class Subject extends Component {
  static navigationOptions = {
    title: 'Login',
    header: null
  };

constructor(props) {
    super(props)
    this.state = {
      isScreen :'',
      states : false,
        moviesList: [],
        moviesLists: [],
        languageCode :GLOBAL.language,
         backgroundColors: 'white',

    }
  }

 _keyExtractor = (item, index) => item.id;
 resPress = () => {
this.props.navigation.navigate('News')

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


 resPress1 = (item,index) => {

 //   GLOBAL.language = item.code;
 let { moviesList } = this.state;



   let targetPost = moviesList[index];

   if (targetPost.is_checked == "N"){
     targetPost.is_checked = "Y";
   }else{
     targetPost.is_checked = "N";
   }
   // Flip the 'liked' property of the targetPost


    moviesList[index] = targetPost;

   // Then update targetPost in 'posts'
   // You probably don't need the following line.
   // posts[index] = targetPost;

   // Then reset the 'state.posts' property

   this.setState({ moviesList: moviesList})

   }

 resPress = (item,index) => {

//   GLOBAL.language = item.code;
 let { moviesList } = this.state;
   for(let i = 0; i < moviesList.length; i++){
     moviesList[i].check = "N";
  }


   let targetPost = moviesList[index];

   // Flip the 'liked' property of the targetPost
   targetPost.check = "Y";

    moviesList[index] = targetPost;

   // Then update targetPost in 'posts'
   // You probably don't need the following line.
   // posts[index] = targetPost;

   // Then reset the 'state.posts' property

   this.setState({ moviesList: moviesList})

   }



   _renderItem1 = ({item,index}) => {
     var helloMessage = false;
   if (item.check == "N"){
  helloMessage = true;
   }

     return (
       <TouchableOpacity

           onPress={() => this.resPress1(item,index)}
         >
         {helloMessage == true && (
       <View style={{flexDirection :'row',backgroundColor:'white',color :'white' , flex: 1 , height: 50,width : window.width - 100 }}>
       <Image style={{margin:22.5,height :15,width :15,resizeMode:'contain'}}
                      source={require('./filterb.png')} />
         <View style={{justifyContent:'center',backgroundColor:'transparent',color :'white' , height: 50,width : window.width - 100 }}>
 <PowerTranslator style={{fontSize : 16,color :'black',fontFamily :'Poppins-Medium'}} text={item.title} />
      </View>
       </View>
 )}
 {helloMessage == false && (
   <View style={{flexDirection :'row',backgroundColor:'white',color :'white' , flex: 1 , height: 50,width : window.width - 100 }}>
   <Image style={{margin:22.5,height :15,width :15,resizeMode:'contain'}}
                  source={require('./filterc.png')} />
     <View style={{justifyContent:'center',backgroundColor:'transparent',color :'white' , height: 50,width : window.width - 100 }}>
  <PowerTranslator style={{fontSize : 16,color :'black',fontFamily :'Poppins-Medium'}} text={item.title} />
  </View>
   </View>
 )}

 </TouchableOpacity>

     )
   }




  _renderItem = ({item,index}) => {
    var helloMessage = false;
  if (item.is_checked == "N"){
 helloMessage = true;
  }

    return (
      <TouchableOpacity

          onPress={() => this.resPress1(item,index)}
        >
        {helloMessage == true && (
      <View style={{flexDirection :'row',backgroundColor:'transparent',color :'white' , flex: 1 , height: 50,width : window.width }}>
      <Image style={{margin:22.5,height :15,width :15,resizeMode:'contain'}}
                     source={require('./filterb.png')} />
<PowerTranslator style={{marginTop :18.5,fontSize : 16,color :'black',fontFamily :'Poppins-Medium'}} text={item.major_subject} />
     </View>
)}
{helloMessage == false && (
<View style={{flexDirection :'row',backgroundColor:'transparent',color :'white' , flex: 1 , height: 50,width : window.width }}>

<Image style={{margin:22.5,height :15,width :15,resizeMode:'contain'}}
               source={require('./filterc.png')} />
<PowerTranslator style={{marginTop :18.5,fontSize : 16,color :'black',fontFamily :'Poppins-Medium'}} text={item.major_subject} />

</View>
)}

</TouchableOpacity>

    )
  }
  componentWillMount() {
       this.getMoviesFromApiAsync()

   }
  changeLanguage(languageCode) {
          this.setState({ languageCode: languageCode });
  }

  buttonClickListenerNext=()=>{
    var my = [];
    var mys = [];

    for(let i = 0; i < this.state.moviesList.length; i++){
    if (this.state.moviesList[i].is_checked == "N"){

    }else {

     my.push(this.state.moviesList[i].major_subject_id)
      mys.push(this.state.moviesList[i].major_subject)

    }

    var  text = my.filter(function (val) {return val;}).join(',');
    var  texts = mys.filter(function (val) {return val;}).join(',');

   }
  GLOBAL.subject = texts;
  GLOBAL.subjectId = text;
  this.props.navigation.goBack()

  }

  getMoviesFromApiAsync = () => {

    var url= GLOBAL.BASE_URL + 'get_major_subjects';

    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {


    //alert(JSON.stringify(responseJson))
    if (responseJson.status == "success"){
    this.setState({ moviesList: responseJson.data})

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






  render() {
    TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
    return (


     <View style={styles.container}>
              <MyStatusBar backgroundColor="#201344" barStyle="light-content" />
<View style={styles.appBar} >
<TouchableOpacity onPress = {()=>this.props.navigation.goBack()}>
<Image style={{marginLeft :10,marginTop :10,height :25,width :25,resizeMode:'contain'}}
               source={require('./back.png')} />
               </TouchableOpacity>
               <PowerTranslator style={{marginLeft : 15,marginTop:12,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} text={'Select Subject'} />
</View>

<View style =  {{height :window.height - 150}}>
<FlatList
     data={this.state.moviesList}
     numColumns={1}
     keyExtractor={this._keyExtractor}
     renderItem={this._renderItem}
     extraData={this.state}
   />
   </View>

   <Button
   containerStyle={{width:window.width-20,marginRight:10,marginLeft : 10,marginTop : 20,padding:10, height:40, overflow:'hidden', borderRadius:22, backgroundColor: '#261650'}}

   style={{fontSize: 14, color: 'white'}}
   onPress={this.buttonClickListenerNext}
   >
   SUBMIT
   </Button>
        </View>
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
