import React, {Component} from 'react';
import { Platform,StyleSheet, Text,FlatList,StatusBar, View ,Image,Alert,Dimensions ,TextInput,TouchableOpacity,TouchableHighlight} from 'react-native';
const window = Dimensions.get('window');

const { width, height } = Dimensions.get('window');
import Button from 'react-native-button';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const GLOBAL = require('./Global');
import { PowerTranslator, ProviderTypes, TranslatorConfiguration,TranslatorFactory } from 'react-native-power-translator';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const equalWidth =  (width/2 )
type Props = {};
const MyStatusBar = ({backgroundColor, ...props}) => (
<View style={[styles.statusBar, { backgroundColor }]}>
  <StatusBar translucent backgroundColor={backgroundColor} {...props} />
</View>
);
export default class Upcoming extends Component {
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
        categories :[],
        languageCode :GLOBAL.language,
         backgroundColors: 'white',

    }
  }

 _keyExtractor = (item, index) => item.id;
 resPress = () => {
this.props.navigation.navigate('Upcoming')

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
alert(JSON.stringify(item))
   return (

     <View style = {{flexDirection :'row',justifyContent:'space-between'}}>

     <Image style={{marginLeft :10,marginTop :10,height :8,width :8,resizeMode:'contain'}}
                    source={require('./dot.png')} />
      <PowerTranslator style={{marginLeft : 5,marginTop : 4,fontSize : 13,color :'black',fontFamily :'Poppins-Medium'}} text={item.category} />
          </View>



   )
 }







  _renderItem = ({item,index}) => {

    return (

      <View style={{backgroundColor:'white',color :'white',flexDirection:'row' , flex: 1 ,margin: 10,borderRadius :6,width : window.width- 20, shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 5 }}>

    <Image style={{marginLeft :10,marginTop :10,height :50,width :50,resizeMode:'contain'}}
                    source={{ uri: item.company_logo }} />


                   <View style = {{marginLeft : 12,flexDirection : 'column' ,width : window.width - 90}}>


<PowerTranslator style={{marginTop : 15,fontSize : 12,color :'black',fontFamily :'Poppins-Medium'}} text={item.jobtitle} />
<PowerTranslator style={{fontSize : 11,color :'#24c24e',fontFamily :'Poppins-Medium'}} text={item.company} />


<View style = {{marginLeft : - 65,marginTop : 12,flexDirection :'row',justifyContent :'space-between'}}>

<View style = {{width : 100,height : 40,backgroundColor :'#f2f3f5', borderRadius :20,flexDirection :'column',padding :2}}>
<PowerTranslator style={{alignSelf :'center',marginTop : 5,fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Interview Date'} />
<PowerTranslator style={{alignSelf :'center',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={item.interview_start_date} />
</View>
<View style = {{width : 100,height : 40,backgroundColor :'#f2f3f5', borderRadius :20,flexDirection :'column',padding :2}}>
<PowerTranslator style={{alignSelf :'center',marginTop : 5,fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Venue'} />
<PowerTranslator style={{alignSelf :'center',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={item.venue} />
</View>
<View style = {{marginRight :10,width : 100,height : 40,backgroundColor :'#f2f3f5', borderRadius :20,flexDirection :'column',padding :2}}>
<PowerTranslator style={{alignSelf :'center',marginTop : 5,fontSize : 8,color :'#484849',fontFamily :'Poppins-Medium'}} text={'Job Location'} />
<PowerTranslator style={{alignSelf :'center',fontSize : 11,color :'#181818',fontFamily :'Poppins-Medium'}} text={item.job_location} />
</View>

   </View>
   <PowerTranslator style={{marginLeft : - 65,marginTop : 5,fontSize : 13,color :'black',fontFamily :'Poppins-Medium'}} text={'Categories'} />

 <View style = {{marginLeft :-65}}>
   <FlatList
        data={item.categories}
        numColumns={2}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItems}
        extraData={this.state}
      />
</View>



            <Button
           containerStyle={{width:window.width - 20,marginLeft : -72,marginTop : 5,padding:13, height:42, overflow:'hidden', borderRadius:4, backgroundColor: '#261650'}}

           style={{fontSize: 16, color: 'white'}}
           onPress={this.buttonClickListener}
           >

           {this.state.register}
           </Button>
 </View>


</View>



    )
  }
  componentWillMount() {
    TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
     const translator = TranslatorFactory.createTranslator();


  translator.translate('INTRESTED').then(translated => {


     this.setState({ register: translated });

     //Do something with the translated text
  });
       this.getMoviesFromApiAsync()

   }
  changeLanguage(languageCode) {
          this.setState({ languageCode: languageCode });
  }
  getMoviesFromApiAsync = () => {

       const url = GLOBAL.BASE_URL +'upcoming_interviews';
     alert(url)
      fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    user_id : GLOBAL.user_id

  }),
}).then((response) => response.json())
    .then((responseJson) => {
      alert(JSON.stringify(responseJson))

       this.setState({ moviesList: responseJson.data})
       this.setState({categories :responseJson.data.categories})

      alert(JSON.stringify(this.state.categories))

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
               <PowerTranslator style={{marginLeft : 15,marginTop:12,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} text={'Upcoming'} />
</View>


<FlatList style= {{flexGrow:0,marginTop:10}}
     data={this.state.moviesList}
     numColumns={1}
     keyExtractor={this._keyExtractor}
     renderItem={this._renderItem}
   />


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
