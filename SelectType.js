import React, {Component} from 'react';
import { StyleSheet, Text,FlatList, View ,Image,Alert,Dimensions ,TextInput,TouchableOpacity,TouchableHighlight} from 'react-native';
const window = Dimensions.get('window');
import { PowerTranslator, ProviderTypes, TranslatorConfiguration } from 'react-native-power-translator';
const { width, height } = Dimensions.get('window');
import Button from 'react-native-button';

const GLOBAL = require('./Global');

const equalWidth =  (width/2 )
type Props = {};
export default class SelectType extends Component {
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
this.props.navigation.navigate('Slider')

   }
   resPresss = () => {
  this.props.navigation.navigate('ProviderLogin')

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
  _renderItem = ({item,index}) => {
    var helloMessage = false;
  if (item.check == "N"){
 helloMessage = true;
  }
    return (

      <TouchableOpacity

          onPress={() => this.resPress(item,index)}
        >

   {helloMessage == true && (
       <View style={{backgroundColor: this.state.backgroundColors,alignItems: 'center',justifyContent: 'center', flex: 1 ,margin: 10, height: 40,borderRadius :12,borderColor:'grey',borderWidth :1, flexDirection: 'row',width : window.width/2 - 25 }}>

     <Text style = {{width : window.width/2 - 25,padding :10,fontFamily:"Poppins-Regular",textAlign: 'center',height:40}}>
     {item.title}
     </Text>


      </View>
    )}
    {helloMessage == false && (
        <View style={{backgroundColor:'#261650',color :'white' ,alignItems: 'center',justifyContent: 'center', flex: 1 ,margin: 10, height: 40,borderRadius :12,borderColor:'grey',borderWidth :1, flexDirection: 'row',width : window.width/2 - 25 }}>

      <Text style = {{color :'white',width : window.width/2 - 25,padding :10,fontFamily:"Poppins-Regular",textAlign: 'center',height:40}}>
      {item.title}
      </Text>


       </View>
     )}


</TouchableOpacity>




    )
  }
 componentWillMount() {


  }
  changeLanguage(languageCode) {
          this.setState({ languageCode: languageCode });
  }
  getMoviesFromApiAsync = () => {

       const url = 'http://139.59.76.223/boom_test/web.php';
     alert(url)
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
      alert(JSON.stringify(responseJson))

       this.setState({ moviesList: responseJson.languages})
      this.setState({ moviesLists: responseJson.languages})
      alert(JSON.stringify(responseJson))

    })
    .catch((error) => {
      console.error(error);

    });
 }






  render() {
    TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
    return (
     <View style={{flex : 1}}>


{GLOBAL.language == "en" && (  <Text style={styles.colord}>
  {'Choose Your Option'} </Text>)}
{GLOBAL.language != "en" && (  <PowerTranslator style={styles.colord} text={'Choose Your Option'} />)}

    <TouchableOpacity

        onPress={() => this.resPress()}
      >
    <View style = {{marginTop : 15,marginLeft :30,width :window.width -60,padding :10, height:40, overflow:'hidden', borderRadius:20, backgroundColor: '#261650'}}>
{GLOBAL.language == "en" && (
     <Text style={{textAlign :'center',fontFamily: "Poppins-Medium" ,color :'white'}}> {'Job Seeker'} </Text>
)}
{GLOBAL.language != "en" && (
     <PowerTranslator style={{textAlign :'center',fontFamily: "Poppins-Medium" ,color :'white'}} text={'Job Seeker'} />
)}
    </View>

    </TouchableOpacity>
    <TouchableOpacity

        onPress={() => this.resPresss()}
      >
    <View style = {{marginTop : 15,width :window.width-60,marginLeft:30, height:40,padding :10, borderRadius:20, backgroundColor: '#261650'}}>
{GLOBAL.language == "en" && (
     <Text style={{textAlign :'center',fontFamily: "Poppins-Medium",color :'white'}} >{'Job Provider'} </Text>
)}
{GLOBAL.language != "en" && (
     <PowerTranslator style={{textAlign :'center',fontFamily: "Poppins-Medium",color :'white'}} text={'Job Provider'} />
)}
    </View>
    </TouchableOpacity>




      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    position: 'relative',
    width :  window.width,
    height :  window.height,
  },
  content: {
    flex: 1,
    marginTop : - window.height ,
    height: window.height,

    width : window.width,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
   logoImage1: {
        marginLeft : window.width/2 - 65,
        marginTop : 60,
        width : 130,
        height :120,
        position: 'absolute',

    },

     logoImage2: {
        resizeMode: 'contain',
        width : window.width - 20,
        height :800,
        position: 'absolute',

    },
  text: {
    color : 'white',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
     marginTop: 150,
      marginLeft: 0 ,
      width :  window.width,
      textAlign:'center'
  },
  container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    account :{
     margin : 30,
    textAlign : 'center',
    color : '#ffffff',

  } ,

createaccount :{
     margin : 30,
    color : '#ce8c04',

  } ,
  facebookicon: {
    width: 15,
    height: 27,
    marginLeft : 15 ,
    marginTop : 6,


  },
  facebookColor: {


   flexDirection :'row',
    margin: 20,
    height: 40,

    backgroundColor: '#284ca0',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // borderColor: '#DCDCDC',
    // borderRadius: 10,




  },


  gmailColor: {
//de584e

   flexDirection :'row',
    marginLeft: 20,
    height: 40,
    marginTop : 0,
    marginRight : 20,
    backgroundColor: '#de584e',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // borderColor: '#DCDCDC',
    // borderRadius: 10,




  },
  textColor : {
    marginLeft : 50,
    marginTop : 8,
    color : '#ffffff',
    fontSize: 18,

   textAlign: 'center',


  },
   gmailIcon: {
    width: 27,
    height: 27,
    marginLeft : 15 ,
    marginTop : 6,


  },

colord:
{ textAlign :'center',marginLeft :15,marginTop :window.height/2 - 120,width : window.width -30,fontSize : 22  ,color :'#261650',fontFamily: "Poppins-Regular",},

});
