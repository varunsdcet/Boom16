import React, {Component} from 'react';
import { Platform,StyleSheet, Text,FlatList,StatusBar, View ,Image,Alert,Dimensions ,TextInput,TouchableOpacity,TouchableHighlight} from 'react-native';
const window = Dimensions.get('window');

const { width, height } = Dimensions.get('window');
import Button from 'react-native-button';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const GLOBAL = require('./Global');
import { PowerTranslator, ProviderTypes, TranslatorConfiguration,TranslatorFactory } from 'react-native-power-translator';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Modal from "react-native-modal";
const equalWidth =  (width/2 )
type Props = {};
const MyStatusBar = ({backgroundColor, ...props}) => (
<View style={[styles.statusBar, { backgroundColor }]}>
  <StatusBar translucent backgroundColor={backgroundColor} {...props} />
</View>
);
export default class ProviderHome extends Component {
  static navigationOptions = {
    title: 'Login',
    header: null
  };

constructor(props) {
    super(props)
    this.state = {
      isScreen :'',
      register :'',
      addjobs:'',
      current:'',descr:'',
      states : false,
        moviesList: [],
        moviesLists: [],
        languageCode :GLOBAL.language,
         backgroundColors: 'white',
         isModalVisible: false,

    }
  }

 _keyExtractor = (item, index) => item.id;
 resPress = () => {

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

 _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });



  componentWillMount() {
    TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
     const translator = TranslatorFactory.createTranslator();


  translator.translate('Current Posted Jobs').then(translated => {


     this.setState({ current: translated });

     //Do something with the translated text
  }


);

  translator.translate('Add Jobs').then(translated => {


     this.setState({ addjobs: translated });

     //Do something with the translated text
  }


);
translator.translate('Description').then(translated => {


   this.setState({ descr: translated });

   //Do something with the translated text
}


);
       this.getMoviesFromApiAsync()

   }
  changeLanguage(languageCode) {
          this.setState({ languageCode: languageCode });
  }
  getMoviesFromApiAsync = () => {

       const url = 'http://139.59.76.223/boom_test/web.php';
    // alert(url)
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

//      alert(JSON.stringify(responseJson))

    })
    .catch((error) => {
      console.error(error);

    });
 }


  _renderItems = ({item,index}) => {

    return (

     <View style = {{flexDirection :'row'}}>
     <Image style={{marginLeft :15,marginTop :10,height :5,width :5,resizeMode:'contain', marginRight:15}}
                    source={require('./dot.png')} />
                    <PowerTranslator style={{width : window.width - 70,marginLeft : 10,fontSize : 12,marginTop : 1,color :'white',fontFamily :'Poppins-Medium'}} text={'Lorem Ipsum'} />
     </View>



    )
  }

buttonClickListenerAddJobs=()=>{
this.props.navigation.navigate('ProviderAddJobs')
}

buttonClickListenerCurrent=()=>{
this.props.navigation.navigate('ProviderJobs')
}


  render() {
    TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
    return (


     <View style={styles.container}>
              <MyStatusBar backgroundColor="#201344" barStyle="light-content" />
<View style={styles.appBar} >
               <PowerTranslator style={{marginLeft : 15,marginTop:12,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} text={'Home'} />
<TouchableOpacity style={{width:25, height:25,position:'absolute', right:10, top:12}} onPress={this._toggleModal}>
  <Image style={{width:25, height:25, resizeMode:'contain'}} source={require('./note.png')}/>
</TouchableOpacity>
<Modal isVisible={this.state.isModalVisible}
onBackButtonPress={this._toggleModal}>
          <View style={{ backgroundColor:'black',flex: 1 }}>
            <Text style={{color:'white', fontSize:20}}>Hello!</Text>
            <FlatList style= {{flexGrow:0,marginTop:3}}
                 data={this.state.moviesList}
                 numColumns={1}
                 keyExtractor={this._keyExtractor}
                 renderItem={this._renderItems}
               />
            <TouchableOpacity onPress={this._toggleModal}>
              <Text style={{color:'white'}}>Hide me!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
</View>
<KeyboardAwareScrollView>
<View style={{backgroundColor:'white',color :'white',flexDirection:'row' , flex: 1 ,margin: 10,borderRadius :6,width : window.width- 20, shadowColor: '#000',
shadowOffset: { width: 0, height: 1 },
shadowOpacity: 0.6,
shadowRadius: 2,
elevation: 5 }}>

<Image style={{marginLeft :10,marginTop :10,height :50,width :50,resizeMode:'contain'}}
             source={require('./max.png')} />

             <View style={{flexDirection:'column',marginLeft:50,}}>
             <PowerTranslator style={{marginTop : 5,fontSize : 12,color :'black',fontFamily :'Poppins-Medium'}} text={'ABC Pvt. Ltd.'} />
             <PowerTranslator style={{marginTop : 5,fontSize : 12,color :'black',fontFamily :'Poppins-Medium'}} text={'Digital'} />
             <PowerTranslator style={{marginTop : 5,fontSize : 12,color :'grey',fontFamily :'Poppins-Medium'}} text={'2004'} />
             </View>
</View>

<View style={{backgroundColor:'white',color :'white',flexDirection:'column' , flex: 1 ,margin: 10,borderRadius :6,width : window.width- 20, shadowColor: '#000',
shadowOffset: { width: 0, height: 1 },
shadowOpacity: 0.6,
shadowRadius: 2,
elevation: 5 }}>
<PowerTranslator style={{marginTop : 5,marginLeft:10,fontSize : 12,color :'grey',fontFamily :'Poppins-Medium'}} text={'GENERAL INFORMATION'} />
<PowerTranslator style={{marginTop : 5,marginLeft:10,fontSize : 12,color :'#bfbfbf',fontFamily :'Poppins-Medium'}} text={'NO. OF EMPLOYEES'} />
<TextInput style={{height:45,width:window.width-50,fontFamily :'Poppins-Medium',marginLeft :10}}placeholderTextColor={'black'} placeholder={'5000'}/>
<View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-40,marginLeft:10,marginRight:10,height:1}}></View>

<PowerTranslator style={{marginTop : 10,marginLeft:10,fontSize : 12,color :'#bfbfbf',fontFamily :'Poppins-Medium'}} text={'COMPANY DESCRIPTION'} />
<TextInput style={{height:45,width:window.width-50,fontFamily :'Poppins-Medium',marginLeft :10}}placeholderTextColor={'black'} placeholder={this.state.descr}/>
<View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-40,marginLeft:10,marginRight:10,height:1}}></View>

<PowerTranslator style={{marginTop : 10,marginLeft:10,fontSize : 12,color :'#bfbfbf',fontFamily :'Poppins-Medium'}} text={'CONTACT DETAILS'} />
<View style={{flexDirection:'row', justifyContent:'space-between',}}>
<View style={{flexDirection:'column'}}>
<PowerTranslator style={{color:'grey', fontSize:12, fontFamily :'Poppins-Medium', marginLeft:10, marginTop:10 }} text={'WEBSITE'}/>
<TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium',marginLeft :10}} placeholder={'www.abc.com'}placeholderTextColor={'black'}/>
</View>
<View style={{flexDirection:'column'}}>
<PowerTranslator style={{color:'grey', fontSize:12, fontFamily :'Poppins-Medium', marginLeft:15, marginTop:10  }} text={'PHONE'}/>
<TextInput style={{height:45,width:window.width/2,fontFamily :'Poppins-Medium',marginLeft :10}} placeholder={'9599499723'}placeholderTextColor={'black'}/>
</View>
</View>
<View style={{marginTop:1,backgroundColor:'#bfbfbf',width:window.width-40,marginLeft:10,marginRight:10,height:1}}></View>

</View>


<View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
<Button
containerStyle={{width:window.width/2-20,marginRight:10,marginLeft : 10,marginTop : 20,padding:10, height:40, overflow:'hidden', borderRadius:22, backgroundColor: '#261650'}}

style={{fontSize: 12, color: 'white'}}
onPress={this.buttonClickListenerCurrent}
>
{this.state.current}
</Button>
<Button
containerStyle={{width:window.width/2-20,marginRight:10,marginLeft : 10,marginTop : 20,padding:10, height:40, overflow:'hidden', borderRadius:22, backgroundColor: '#261650'}}

style={{fontSize: 14, color: 'white'}}
onPress={this.buttonClickListenerAddJobs}
>
{this.state.addjobs}
</Button>
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
