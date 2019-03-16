import React, {Component} from 'react';
import { StyleSheet, Text,FlatList, View ,AsyncStorage,Image,Alert,Dimensions ,TextInput,TouchableOpacity,TouchableHighlight} from 'react-native';
const window = Dimensions.get('window');
import { PowerTranslator, ProviderTypes, TranslatorConfiguration } from 'react-native-power-translator';
const { width, height } = Dimensions.get('window');
import Button from 'react-native-button';
const GLOBAL = require('./Global');



const equalWidth =  (width/2 )
type Props = {};
export default class Partner extends Component {
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
        languageCode :"hi",
         backgroundColors: 'white',

    }
  }

 _keyExtractor = (item, index) => item.id;
 resPress = (item,index) => {
 AsyncStorage.setItem('code', item.code);
   GLOBAL.language =  item.code;
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
       <View style={{backgroundColor: this.state.backgroundColors,alignItems: 'center',justifyContent: 'center', flex: 1 ,margin: 10, height: 40,borderRadius :20,borderColor:'black',borderWidth :1, flexDirection: 'row',width : window.width/2 - 25 }}>

     <Text style = {{width : window.width/2 - 25,padding :14,fontFamily:"Poppins-Regular",textAlign: 'center',height:50, color:'black'}}>
     {item.title}
     </Text>


      </View>
    )}
    {helloMessage == false && (
        <View style={{backgroundColor:'#261650',color :'white' ,alignItems: 'center',justifyContent: 'center', flex: 1 ,margin: 10, height: 40,borderRadius :20,borderColor:'black',borderWidth :1, flexDirection: 'row',width : window.width/2 - 25 }}>

      <Text style = {{color :'white',width : window.width/2 - 25,padding :14,fontFamily:"Poppins-Regular",textAlign: 'center',height:50}}>
      {item.title}
      </Text>


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
  getMoviesFromApiAsync = () => {

       const url = 'http://139.59.76.223/boom_test/web.php';

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

console.log(responseJson)
//alert(responseJson)
       this.setState({ moviesList: responseJson.languages})
      this.setState({ moviesLists: responseJson.languages})
      //alert(JSON.stringify(responseJson))

    })
    .catch((error) => {
      console.error(error);

    });
 }
 buttonClickListener = () =>{
this.props.navigation.navigate('SelectType')
};





  render() {
    TranslatorConfiguration.setConfig(ProviderTypes.Google, 'AIzaSyCnz-gIGL_nPk7Ac0lndg2xnZ_Ja7RCj0Q', this.state.languageCode);
    return (

     <View style={{flex : 1, marginTop:30   }}>

     <Text style = {{ fontFamily: "Poppins-Medium",width : 250,fontSize : 30,margin:15  ,color :'#261650'}}>

     Pick Your Language
     </Text>

     <FlatList style= {{marginTop :20,flexGrow:0,marginLeft:5}}
          data={this.state.moviesList}
          numColumns={2}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
        <Button
                  containerStyle={{marginTop : 50,marginLeft:15,marginRight:15,padding:8,fontFamily: "Poppins-Regular", height:40, overflow:'hidden', borderRadius:20, backgroundColor: '#261650'}}

                   style={{fontSize: 16, color: 'white',fontFamily: "Poppins-Regular", width:100, alignSelf:'center'}}
                 onPress={this.buttonClickListener}
               >

                Continue
               </Button>
               <Text></Text>
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


});
