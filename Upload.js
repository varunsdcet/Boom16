import React, {Component} from 'react';
import {Animated,ActivityIndicator,Platform,TouchableOpacity,TextInput, TouchableNativeFeedback,StyleSheet,StatusBar,AsyncStorage, Text,Alert, View,Image,Dimensions,FlatList} from 'react-native';
const window = Dimensions.get('window');
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const GLOBAL = require('./Global');
import ImagePicker from 'react-native-image-picker';
const { width, height } = Dimensions.get('window');
import CheckBox from 'react-native-checkbox';
import { PowerTranslator, ProviderTypes, TranslatorConfiguration,TranslatorFactory } from 'react-native-power-translator';
import Button from 'react-native-button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const equalWidth =  (width -20 )
//const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


type Props = {};
const MyStatusBar = ({backgroundColor, ...props}) => (
<View style={[styles.statusBar, { backgroundColor }]}>
  <StatusBar translucent backgroundColor={backgroundColor} {...props} />
</View>
);

const options = {
  title: 'Select Avatar',
  allowsEditing: true,
  storageOptions: {
    skipBackup: true,
    path: 'images',
    allowsEditing: true,
  },
      allowsEditing: true,
};
var CompArray = [];
var CompArrayid=[];
var CompArrayexp=[];
var CompArraydl=[];
var CompArraypass=[];

var ImageNameid=[];
var ImageNametrade=[];
var ImageNameexp=[];
var ImageNamedl=[];
var ImageNamepass=[];

export default class Upload extends Component<Props> {

   	static navigationOptions = {
      header: null
    };
  constructor(props) {
      super(props)
      this.state = {
        saddress:'',
          loading :false,
        country:'',state:'',city:'',code:'',caddress:'',same:'',
        iama :'',
         hidden: true ,
         value: 0,
         ecr:'',
         ecnr:'',next:'',number:'',terminolist:[],
         issue:'',expiry:'',submit:'',avatarSource:'',imageget:0, imagenamepass:[],avatarSourceid:[],imagegetid:0, avatarSourcetrade:[],imagegettrade:0,
         avatarSourceexp:[], imagegetexp:0,avatarSourcedl:[], imagegetdl:0,imagenameid:[],imagenametrade:[], imagenameexp:[],imagenamedl:[],
      }
    }

    componentWillMount() {
     TranslatorConfiguration.setConfig(ProviderTypes.Google, GLOBAL.key, GLOBAL.language);
      const translator = TranslatorFactory.createTranslator();
   translator.translate('Street Address').then(translated => {
      this.setState({ saddress: translated });

   });
   translator.translate('Submit').then(translated => {
      this.setState({ submit: translated });

   });
   this.getMoviesFromApiAsyncTermnio();
     }
     showLoading() {
           this.setState({loading: true})
        }

        hideLoading() {
           this.setState({loading: false})
        }
getMoviesFromApiAsyncTermnio=()=>{
  this.showLoading()
  var url=GLOBAL.BASE_URL + 'get_document_terminology'
  var acess = "";
  fetch(url)
   .then((response) => response.json())
   .then((responseJson) => {
     this.hideLoading()
//   alert(JSON.stringify(responseJson))
 if (responseJson.status == "success"){
  //      alert(JSON.stringify(responseJson.data))
   this.setState({terminolist:responseJson.data})
 }
 else{
    alert('Unable to process your request Please try again')
 }
   })
   .catch((error) => {
     console.error(error);
      this.hideLoading();

       alert('Unable to process your request Please try again after some time')
   });
}

changeImage=()=>{
   ImagePicker.showImagePicker(options, (response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  } else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  }else{
       GLOBAL.profile = response.uri
    const source = { uri: response.uri };
    this.setState({
    avatarSource: source,
    imageget:1
  });
  this.showLoading()
  const url = 'http://3.17.73.124/boomoversea/public/api/user_doc_upload_ws'
    const data = new FormData();
      data.append('_token', '8cP9uTwlYsPcFdUqWcgl9zYAekPbNRc6vAg2dD98awUDsrzUUBxVG4GixEGq');
      data.append('user_id', '12');
      data.append('image', {
        uri: response.uri,
        type: 'image/jpeg', // or photo.type
        name: 'image.png'
      });
      // you can append anyone.

      fetch(url, {
        method: 'post',
        body: data,
        headers: {
            'Content-Type': 'multipart/form-data',
          }

      }).then((response) => response.json())
            .then((responseJson) => {
        this.hideLoading()
        alert(JSON.stringify(responseJson.image_name))
        ImageNamepass.push(responseJson.image_name);
        this.setState({imagenamepass:ImageNamepass});
        alert(JSON.stringify(this.state.imagenamepass))
       //this.props.navigation.navigate('DrawerNavigator')

      });
  }
});
}

changeImageid=()=>{
   ImagePicker.showImagePicker(options, (response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  } else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  }else{
       GLOBAL.profile = response.uri
    const source = { uri: response.uri };
    CompArrayid.push(source);

    this.setState({
    avatarSourceid: CompArrayid,
    imagegetid:1
  });
  this.showLoading()
  const url = 'http://3.17.73.124/boomoversea/public/api/user_doc_upload_ws'
    const data = new FormData();
      data.append('_token', '8cP9uTwlYsPcFdUqWcgl9zYAekPbNRc6vAg2dD98awUDsrzUUBxVG4GixEGq');
      data.append('user_id', '12');
      data.append('image', {
        uri: response.uri,
        type: 'image/jpeg', // or photo.type
        name: 'image.png'
      });
      // you can append anyone.

      fetch(url, {
        method: 'post',
        body: data,
        headers: {
            'Content-Type': 'multipart/form-data',
          }

      }).then((response) => response.json())
            .then((responseJson) => {
        this.hideLoading()
        alert(JSON.stringify(responseJson.image_name))
        ImageNameid.push(responseJson.image_name);
        this.setState({imagenameid:ImageNameid});
        alert(JSON.stringify(this.state.imagenameid))
       //this.props.navigation.navigate('DrawerNavigator')

      });
  }
});
}

changeImagetrade=()=>{
   ImagePicker.showImagePicker(options, (response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  } else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  }else{
       GLOBAL.profile = response.uri
    const source = { uri: response.uri };
    CompArray.push(source);

    this.setState({
    avatarSourcetrade: CompArray,
    imagegettrade:1
  });
  this.showLoading()
  const url = 'http://3.17.73.124/boomoversea/public/api/user_doc_upload_ws'
    const data = new FormData();
      data.append('_token', '8cP9uTwlYsPcFdUqWcgl9zYAekPbNRc6vAg2dD98awUDsrzUUBxVG4GixEGq');
      data.append('user_id', '12');
      data.append('image', {
        uri: response.uri,
        type: 'image/jpeg', // or photo.type
        name: 'image.png'
      });
      // you can append anyone.

      fetch(url, {
        method: 'post',
        body: data,
        headers: {
            'Content-Type': 'multipart/form-data',
          }

      }).then((response) => response.json())
            .then((responseJson) => {
        this.hideLoading()
        alert(JSON.stringify(responseJson.image_name))
        ImageNametrade.push(responseJson.image_name);
        this.setState({imagenametrade:ImageNametrade});
        alert(JSON.stringify(this.state.imagenametrade))
       //this.props.navigation.navigate('DrawerNavigator')

      });
  }
});

}

changeImageexp=()=>{
   ImagePicker.showImagePicker(options, (response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  } else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  }else{
       GLOBAL.profile = response.uri
    const source = { uri: response.uri };
    CompArrayexp.push(source);

    this.setState({
    avatarSourceexp: CompArrayexp,
    imagegetexp:1
  });
  this.showLoading()
  const url = 'http://3.17.73.124/boomoversea/public/api/user_doc_upload_ws'
    const data = new FormData();
      data.append('_token', '8cP9uTwlYsPcFdUqWcgl9zYAekPbNRc6vAg2dD98awUDsrzUUBxVG4GixEGq');
      data.append('user_id', '12');
      data.append('image', {
        uri: response.uri,
        type: 'image/jpeg', // or photo.type
        name: 'image.png'
      });
      // you can append anyone.

      fetch(url, {
        method: 'post',
        body: data,
        headers: {
            'Content-Type': 'multipart/form-data',
          }

      }).then((response) => response.json())
            .then((responseJson) => {
        this.hideLoading()
        alert(JSON.stringify(responseJson.image_name))
        ImageNameexp.push(responseJson.image_name);
        this.setState({imagenameexp:ImageNameexp});
        alert(JSON.stringify(this.state.imagenameexp))
       //this.props.navigation.navigate('DrawerNavigator')

      });
  }
});

}

changeImagedl=()=>{
   ImagePicker.showImagePicker(options, (response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  } else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  }else{
       GLOBAL.profile = response.uri
    const source = { uri: response.uri };
    CompArraydl.push(source);

    this.setState({
    avatarSourcedl: CompArraydl,
    imagegetdl:1
  });
  this.showLoading()
  const url = 'http://3.17.73.124/boomoversea/public/api/user_doc_upload_ws'
    const data = new FormData();
      data.append('_token', '8cP9uTwlYsPcFdUqWcgl9zYAekPbNRc6vAg2dD98awUDsrzUUBxVG4GixEGq');
      data.append('user_id', '12');
      data.append('image', {
        uri: response.uri,
        type: 'image/jpeg', // or photo.type
        name: 'image.png'
      });
      // you can append anyone.

      fetch(url, {
        method: 'post',
        body: data,
        headers: {
            'Content-Type': 'multipart/form-data',
          }

      }).then((response) => response.json())
            .then((responseJson) => {
        this.hideLoading()
        alert(JSON.stringify(responseJson.image_name))
        ImageNamedl.push(responseJson.image_name);
        this.setState({imagenamedl:ImageNamedl});
        alert(JSON.stringify(this.state.imagenamedl))
       //this.props.navigation.navigate('DrawerNavigator')

      });
  }

});

}

     back = () => {
   this.props.navigation.goBack()
  }

       buttonClickListener=()=>{
         var my = [];
         var dict = {
   document_term_id: "2",
   document: this.state.imagenamepass,
   document_title:"Passport Size Photo"
   // etc.
 };
 var dict1 = {
document_term_id: "3",
document: this.state.imagenameid,
document_title:"Photo ID Proof (Adhaar, PAN, Voter ID)"
// etc.
};
var dict2 = {
document_term_id: "4",
document: this.state.imagenametrade,
document_title:"Trade Center Certificate"
// etc.
};
var dict3 = {
document_term_id: "5",
document: this.state.imagenameexp,
document_title:"Experience Certificate"
// etc.
};
var dict4= {
document_term_id: "6",
document: this.state.imagenamedl,
document_title:"International Driving Licence"
// etc.
};

my.push(dict)
  my.push(dict1)
  my.push(dict2)
  my.push(dict3)
  my.push(dict4)

alert(JSON.stringify(my))


         if (this.state.avatarSource == ''){
                   alert('Please add passport size photo')
                 } else if (this.state.avatarSourceid.length == 0){
                    alert('Please add photo id proof')
                 }else if (this.state.avatarSourcetrade.length == 0){
                    alert('Please add trade center certificate')
                 }else if (this.state.avatarSourceexp.length == 0){
                    alert('Please add Experience certificate')
                 }else if (this.state.avatarSourcedl.length == 0){
                    alert('Please add International Driving Licence')
                 }
                    else {
                   this.showLoading()

         const url = GLOBAL.BASE_URL + 'upload_user_document'

             // you can append anyone.

             fetch(url, {
           method: 'POST',
           headers: {
           'Content-Type': 'application/json',
           },
           body: JSON.stringify({
           _token : '8cP9uTwlYsPcFdUqWcgl9zYAekPbNRc6vAg2dD98awUDsrzUUBxVG4GixEGq',
           user_id:GLOBAL.user_id,
           documents: JSON.stringify(my)
           }),

           }).then((response) => response.json())
           .then((responseJson) => {
             alert(JSON.stringify(responseJson))
      this.hideLoading()
           if(responseJson.status=="success"){
             alert(JSON.stringify(responseJson))
               //alert(JSON.stringify(responseJson))
                    this.props.navigation.navigate('DrawerNavigator')
           }else{
             alert('Something went wrong.')
           }


           })
           .catch((error) => {
             console.error(error);
  this.hideLoading()
           });
           }
   }

     _renderItem = ({item,index}) => {
       //alert(JSON.stringify(item))
//alert(this.state.avatarSourcetrade.length)
//alert(index)
       return (
<View style={{flexDirection:'row'}}>
        {this.state.avatarSourcetrade.length==index+1 &&(
          <View style={{flexDirection:'row'}}>
          <Image style={{width:100, height:100, marginRight:5, marginTop:5}} source={item}/>
          <TouchableOpacity style={{width:100, height:100,marginRight:5, marginTop:5}} onPress={()=>this.changeImagetrade()}>
                       <Image style={{width:100, height:100,resizeMode:'contain'}} source={require('./doccc.png')}/>
                       </TouchableOpacity>

                       </View>
        )}
        {this.state.avatarSourcetrade.length!=index+1  &&(
          <Image style={{width:100, height:100, marginRight:5, marginTop:5}} source={item}/>

        )}
</View>
       )
     }

     _renderItemid = ({item,index}) => {
       //alert(JSON.stringify(item))
    //alert(this.state.avatarSourcetrade.length)
    //alert(index)
       return (
    <View style={{flexDirection:'row'}}>
        {this.state.avatarSourceid.length==index+1 &&(
          <View style={{flexDirection:'row'}}>
          <Image style={{width:100, height:100, marginRight:5, marginTop:5}} source={item}/>
          <TouchableOpacity style={{width:100, height:100,marginRight:5, marginTop:5}} onPress={()=>this.changeImageid()}>
                       <Image style={{width:100, height:100,resizeMode:'contain'}} source={require('./doccc.png')}/>
                       </TouchableOpacity>

                       </View>
        )}
        {this.state.avatarSourceid.length!=index+1  &&(
          <Image style={{width:100, height:100, marginRight:5, marginTop:5}} source={item}/>

        )}
    </View>
       )
     }


     _renderItemexp = ({item,index}) => {
       //alert(JSON.stringify(item))
    //alert(this.state.avatarSourcetrade.length)
    //alert(index)
       return (
    <View style={{flexDirection:'row'}}>
        {this.state.avatarSourceexp.length==index+1 &&(
          <View style={{flexDirection:'row'}}>
          <Image style={{width:100, height:100, marginRight:5, marginTop:5}} source={item}/>
          <TouchableOpacity style={{width:100, height:100,marginRight:5, marginTop:5}} onPress={()=>this.changeImageexp()}>
                       <Image style={{width:100, height:100,resizeMode:'contain'}} source={require('./doccc.png')}/>
                       </TouchableOpacity>

                       </View>
        )}
        {this.state.avatarSourceexp.length!=index+1  &&(
          <Image style={{width:100, height:100, marginRight:5, marginTop:5}} source={item}/>

        )}
    </View>
       )
     }

     _renderItemdl = ({item,index}) => {
       //alert(JSON.stringify(item))
    //alert(this.state.avatarSourcetrade.length)
    //alert(index)
       return (
    <View style={{flexDirection:'row'}}>
        {this.state.avatarSourcedl.length==index+1 &&(
          <View style={{flexDirection:'row'}}>
          <Image style={{width:100, height:100, marginRight:5, marginTop:5}} source={item}/>
          <TouchableOpacity style={{width:100, height:100,marginRight:5, marginTop:5}} onPress={()=>this.changeImagedl()}>
                       <Image style={{width:100, height:100,resizeMode:'contain'}} source={require('./doccc.png')}/>
                       </TouchableOpacity>

                       </View>
        )}
        {this.state.avatarSourcedl.length!=index+1  &&(
          <Image style={{width:100, height:100, marginRight:5, marginTop:5}} source={item}/>

        )}
    </View>
       )
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
        <View style = {styles.appBar} >
        <View style = {{flex:1,flexDirection:'row', marginTop:1}}>
        <TouchableOpacity onPress = {()=>this.props.navigation.goBack()}>
        <Image style={{marginLeft :10,marginTop :12,height :25,width :25,resizeMode:'contain'}}
                       source={require('./back.png')} />
                       </TouchableOpacity>
                       <PowerTranslator style={{marginLeft : 15,marginTop:12,fontSize : 16,color :'white',fontFamily :'Poppins-Medium'}} text={'Upload Documents'} />
        </View>

          </View>

      <KeyboardAwareScrollView keyboardShouldPersistTaps='always'>
      <View style={{flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between'}}>

      <PowerTranslator style={{color:'#1d1d26', fontSize:12, marginLeft:15, marginTop:12,fontFamily :'Poppins-Medium' }} text={'PASSPORT SIZE PHOTO'}/>

      <View style={{flexDirection:'row', alignItems:'flex-start', marginTop:10, marginLeft:20}}>
{this.state.imageget==0 &&(
  <TouchableOpacity style={{width:100, height:100,marginRight:5, marginTop:5}} onPress={()=>this.changeImage()}>
              <Image style={{width:100, height:100, }} source={require('./doccc.png')}/>
              </TouchableOpacity>
)}

{this.state.imageget==1 &&(
  <Image style={{width:100, height:100, }} source={this.state.avatarSource}/>

)}

      </View>
      <View style={{marginTop:25,backgroundColor:'#bfbfbf',width:window.width,height:1}}></View>
      <PowerTranslator style={{color:'#1d1d26', fontSize:12, marginLeft:15, marginTop:12,fontFamily :'Poppins-Medium' }} text={'PHOTO ID PROOF'}/>

      <View style={{flexDirection:'row', alignItems:'flex-start', marginTop:10, marginLeft:20}}>
      {this.state.imagegetid==0 &&(
        <TouchableOpacity style={{width:100, height:100,marginRight:5, marginTop:5}} onPress={()=>this.changeImageid()}>
                    <Image style={{width:100, height:100,}} source={require('./doccc.png')}/>
                    </TouchableOpacity>
      )}
      {this.state.imagegetid==1 &&(
        <FlatList style= {{flexGrow:0,marginTop:10}}
             data={this.state.avatarSourceid}
             horizontal={true}
             keyExtractor={this._keyExtractorid}
             renderItem={this._renderItemid}
           />
      )}

      </View>
      <View style={{marginTop:25,backgroundColor:'#bfbfbf',width:window.width,height:1}}></View>

      <PowerTranslator style={{color:'#1d1d26', fontSize:12, marginLeft:15, marginTop:12,fontFamily :'Poppins-Medium' }} text={'TRADE CENTER CERTIFICATE'}/>

      <View style={{flexDirection:'row', alignItems:'flex-start', marginTop:10, marginLeft:20}}>
{this.state.imagegettrade==0 && (
  <TouchableOpacity style={{width:100, height:100, marginRight:5, marginTop:5}} onPress={()=>this.changeImagetrade()}>
  <Image style={{width:100, height:100, resizeMode:'contain'}} source={require('./doccc.png')}/>
  </TouchableOpacity>
)}

{this.state.imagegettrade ==1 &&(
  <FlatList style= {{flexGrow:0,marginTop:10}}
       data={this.state.avatarSourcetrade}
       horizontal={true}
       keyExtractor={this._keyExtractor}
       renderItem={this._renderItem}
     />
)}

      </View>
      <View style={{marginTop:25,backgroundColor:'#bfbfbf',width:window.width,height:1}}></View>
      <PowerTranslator style={{color:'#1d1d26', fontSize:12, marginLeft:15, marginTop:12,fontFamily :'Poppins-Medium' }} text={'EXPERIENCE CERTIFICATE'}/>

      <View style={{flexDirection:'row', alignItems:'flex-start', marginTop:10, marginLeft:20}}>
{this.state.imagegetexp ==0 &&(
  <TouchableOpacity style={{width:100, height:100,marginRight:5, marginTop:5}} onPress={()=>this.changeImageexp()}>
  <Image style={{width:100, height:100, resizeMode:'contain',}} source={require('./doccc.png')}/>
  </TouchableOpacity>
)}
{this.state.imagegetexp ==1 &&(

    <FlatList style= {{flexGrow:0,marginTop:10}}
         data={this.state.avatarSourceexp}
         horizontal={true}
         keyExtractor={this._keyExtractorexp}
         renderItem={this._renderItemexp}
       />
)}
      </View>
      <View style={{marginTop:25,backgroundColor:'#bfbfbf',width:window.width,height:1}}></View>
      <PowerTranslator style={{color:'#1d1d26', fontSize:12, marginLeft:15, marginTop:12,fontFamily :'Poppins-Medium' }} text={'INTERNATIONAL DRIVING LICENCE'}/>

      <View style={{flexDirection:'row', alignItems:'flex-start', marginTop:10, marginLeft:20}}>
      {this.state.imagegetdl==0 &&(
        <TouchableOpacity style={{width:100, height:100, resizeMode:'contain', marginRight:5, marginTop:5}} onPress={()=> this.changeImagedl()}>
        <Image style={{width:100, height:100, resizeMode:'contain'}} source={require('./doccc.png')}/>
        </TouchableOpacity>
      )}
      {this.state.imagegetdl ==1 &&(
        <FlatList style= {{flexGrow:0,marginTop:10}}
             data={this.state.avatarSourcedl}
             horizontal={true}
             keyExtractor={this._keyExtractordl}
             renderItem={this._renderItemdl}
           />
      )}
      </View>
      <View style={{marginTop:25,backgroundColor:'#bfbfbf',width:window.width,height:1}}></View>

<Button
containerStyle={{width:window.width-20,marginRight:10,marginLeft : 10,marginTop : 20,padding:10, height:40, overflow:'hidden', borderRadius:22, backgroundColor: '#261650'}}

style={{fontSize: 14, color: 'white'}}
onPress={this.buttonClickListener}
>
{this.state.submit}
</Button>
<Text></Text>
      </View>
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
  loading: {
            position: 'absolute',
            left: window.width/2 - 30,

            top: window.height/2,

            opacity: 0.5,

            justifyContent: 'center',
            alignItems: 'center'
        },
  content: {
    flex: 1
  },
});
