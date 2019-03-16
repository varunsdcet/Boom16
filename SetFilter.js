import React, {Component} from 'react';
import { Platform,StyleSheet, Text,FlatList,StatusBar, View ,Image,Alert,Dimensions ,TextInput,TouchableOpacity,TouchableHighlight} from 'react-native';
const window = Dimensions.get('window');
import { PowerTranslator, ProviderTypes, TranslatorConfiguration } from 'react-native-power-translator';
const { width, height } = Dimensions.get('window');
import Button from 'react-native-button';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const GLOBAL = require('./Global');

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const equalWidth =  (width/2 )
type Props = {};
const MyStatusBar = ({backgroundColor, ...props}) => (
<View style={[styles.statusBar, { backgroundColor }]}>
  <StatusBar translucent backgroundColor={backgroundColor} {...props} />
</View>
);
export default class SetFilter extends Component {
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

   // Flip the 'liked' property of the targetPost
   targetPost.check = "Y";

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
  if (item.check == "N"){
 helloMessage = true;
  }

    return (
      <TouchableOpacity

          onPress={() => this.resPress(item,index)}
        >
        {helloMessage == true && (
      <View style={{justifyContent:'center',alignItems :'center',backgroundColor:'transparent',color :'white' , flex: 1 , height: 50,width : 100 }}>

<PowerTranslator style={{alignSelf :'center',fontSize : 16,color :'black',fontFamily :'Poppins-Medium'}} text={item.title} />
     </View>
)}
{helloMessage == false && (
<View style={{flexDirection:'row',backgroundColor:'white',color :'white' , flex: 1 , height: 50,width : 100 }}>
<View style = {{width : 2 ,height :50,backgroundColor:'green'}}>
</View>
  <View style={{justifyContent:'center',alignItems :'center',backgroundColor:'transparent',color :'white' , height: 50,width : 98 }}>
<PowerTranslator style={{alignSelf :'center',fontSize : 16,color :'black',fontFamily :'Poppins-Medium'}} text={item.title} />
</View>
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

      alert(JSON.stringify(responseJson))

    })
    .catch((error) => {
      console.error(error);

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
               <PowerTranslator style={{marginLeft : 15,marginTop:12,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} text={'Set Filter'} />
</View>

<View style ={{flexDirection :'row'}}>
 <View style = {{width : 100 ,flex :1 ,backgroundColor :'#f1f1f1'}}>
<FlatList
     data={this.state.moviesList}
     numColumns={1}
     keyExtractor={this._keyExtractor}
     renderItem={this._renderItem}
     extraData={this.state}
   />

  </View>

  <View style = {{flexDirection :'column'}}>


<View style={{height:40, width:window.width-100, flexDirection:'row',marginBottom:10,padding:10}}>
<TextInput style={{fontSize:16, fontFamily:'Poppins-Medium',height:50, width:window.width-150, marginTop:-8 }}
placeholder="Search"
placeholderTextColor='black'

/>
<Image style={{width:25, height:25, resizeMode:'contain', marginTop:5}} source={require('./filtera.png')}
/>
</View>
   <View style = {{height : window.height - 100,width : window.width - 100}}>

   <FlatList style={{marginBottom:80}}
        data={this.state.moviesList}
        numColumns={1}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem1}
        extraData={this.state}
      />
   </View>
   <Button
  containerStyle={{bottom:10,width:100,padding:10, height:50,left:-100, overflow:'hidden', backgroundColor: '#333333', position:'absolute'}}

  style={{fontSize: 16,fontFamily:'Poppins-Medium', color: 'white', textAlign:'left'}}
  onPress={this.buttonClickListener}
  >CLEAR ALL
  </Button>
   <Button
   containerStyle={{bottom:10,width:window.width-100,padding:10, height:50, overflow:'hidden', backgroundColor: '#261650',right:0,position:'absolute'}}

   style={{fontSize: 16,fontFamily:'Poppins-Medium', color: 'white'}}
   onPress={this.buttonClickListener}
   >Apply Filters
   </Button>
  </View>

      </View>
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
