import React, {Component} from 'react';
import { Platform,StyleSheet,WebView, Text,FlatList,StatusBar, ActivityIndicator,View ,Image,Alert,Dimensions ,TextInput,TouchableOpacity,TouchableHighlight} from 'react-native';
const window = Dimensions.get('window');
import { PowerTranslator, ProviderTypes, TranslatorConfiguration ,TranslatorFactory} from 'react-native-power-translator';
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
export default class Privacy extends Component {
  static navigationOptions = {
    title: 'Login',
    header: null
  };

constructor(props) {
    super(props)
    this.state = {
      isScreen :'',
      states : false,
        moviesList: '',
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
 showLoading() {
     this.setState({loading: true})
  }

  hideLoading() {
     this.setState({loading: false})
  }
  _renderItem = ({item,index}) => {

    return (

      <View style={{backgroundColor:'white',color :'white' ,flexDirection :'row' , flex: 1 ,margin: 10,borderRadius :6,width : window.width- 20, shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 5 }}>

    <Image style={{marginLeft :10,marginTop :10,height :125,width :125,resizeMode:'contain'}}
                   source={require('./logo.png')} />
        <View style={{backgroundColor: 'rgba(0, 0, 0, 0.8)', marginTop :10,height :125,width :125,marginLeft :-125 }}>
</View>
<Image style={{marginLeft :-100,marginTop :40,height :70,width :70,resizeMode:'contain'}}
               source={require('./youtube.png')} />
     <View style = {{marginLeft : 35,flexDirection : 'column' ,width : window.width - 155}}>

     <View style = {{flexDirection : 'row' ,justifyContent :'space-between',marginTop : 10,width : window.width - 155,}}>
 <PowerTranslator style={{fontSize : 10,color :'black',fontFamily :'Poppins-Medium',marginLeft :8}} text={'Posted on Jan 12, 2018'} />
                   <PowerTranslator style={{fontSize : 10,color :'black',fontFamily :'Poppins-Medium',marginRight :16}} text={'INDIA'} />

 </View>

    <PowerTranslator style={{margin:8,fontSize : 16,color :'black',fontFamily :'Poppins-Medium'}} text={'What is Loreum Ipsum ?'} />

      <PowerTranslator style={{margin:8,marginTop:1,fontSize : 12,color :'black',fontFamily :'Poppins-Regular'}} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ins'} />


</View>
     </View>




    )
  }

  changeLanguage(languageCode) {
          this.setState({ languageCode: languageCode });
  }
  getMoviesFromApiAsync = () => {
  this.showLoading()

    var url= GLOBAL.BASE_URL + 'privacy';

   fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.hideLoading();

//alert(JSON.stringify(responseJson))
  if (responseJson.status == "success"){

    const translator = TranslatorFactory.createTranslator();
 translator.translate(responseJson.data).then(translated => {

  mobilePlaceholder = translated;
    this.setState({ moviesList: mobilePlaceholder });

    //Do something with the translated text
 });


  }else{
     alert('Unable to process your request Please try again')
  }


    })
    .catch((error) => {
      this.hideLoading();

      console.error(error);
       this.hideLoading();
        alert('Unable to process your request Please try again after some time')

    });


 }



 componentWillMount() {
      this.getMoviesFromApiAsync()

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
<View style={styles.appBar} >
<TouchableOpacity onPress = {()=>this.props.navigation.goBack()}>
<Image style={{marginLeft :10,marginTop :12,height :25,width :25,resizeMode:'contain'}}
               source={require('./back.png')} />
               </TouchableOpacity>
               <PowerTranslator style={{marginLeft : 15,marginTop:12,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} text={'Privacy Policy'} />
</View>
<View style = {{height :window.height -80}}>
<WebView
source={{ html: this.state.moviesList}}
style={{ height: height, width, resizeMode: 'cover', flex: 1 }}
  injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=width, initial-scale=0.5, maximum-scale=0.5, user-scalable=2.0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
  scalesPageToFit={false}
  onLoadEnd={this._onLoadEnd}
  startInLoadingState={false}
        scalesPageToFit={false}
        scrollEnabled={true}

 />

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
