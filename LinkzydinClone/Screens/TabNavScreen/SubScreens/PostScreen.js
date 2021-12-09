import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { Searchbar, Button } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';
import ImagePicker from 'react-native-image-crop-picker';
import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';

export default class PostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: null,
      items: [{label: 'Admin', value: 'Admin'},{label: 'User', value: 'User'}],
      imagePath: '',
      ImageName: '',
      ImageUrl: undefined
    };
    this.setValue = this.setValue.bind(this);
  }

  setOpen=(open)=> {
    this.setState({
      open
    });
  }

  setValue=(callback)=> {
    this.setState(state => ({
      value: callback(state.value)
    }));
  }

  setItems=(callback)=> {
    this.setState(state => ({
      items: callback(state.items)
    }));
  }

  uploadImage=()=> {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image.path);
      this.setState({
        imagePath: image.path
      })
      this.setState({
         ImageName : image.modificationDate
      })
      this.UploadImage2()
    });
  }

  UploadImage2 = async () => {
    const fileName = this.state.ImageName + ".jpg"
    const reference = storage().ref(`images/${fileName}`);
    await reference.putFile(this.state.imagePath);

    const url = await storage().ref(`images/${fileName}`).getDownloadURL();
    console.log(url);
    this.setState({
      ImageUrl : url
   })
  }

  render() {
    
    const { open, value, items } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView nestedScrollEnabled={true}>

        <View style={styles.view1}>
          <TouchableOpacity>
        <AwesomeIcon style={styles.icon1} color={'#666666'} name="times"  size={35} />
        </TouchableOpacity>
        <Text style={styles.txt1}>Share post</Text>
        <TouchableOpacity style={styles.btn1}><Text style={styles.txt2}>Post</Text></TouchableOpacity>
        
        </View>

        <View>
        <Image
        style={styles.img1}
        source={require('../../../assests/user.png')}
        />
        
         <DropDownPicker   style={styles.dropdown} 
        open={open}
        value={value}
        items={items}
        setOpen={this.setOpen}
        setValue={this.setValue}
        setItems={this.setItems}
        
      />
       <DropDownPicker   style={styles.dropdown2} 
        open={open}
        value={value}
        items={items}
        setOpen={this.setOpen}
        setValue={this.setValue}
        setItems={this.setItems}
      />
        </View>

        <Image
          // style={styles.logo}
          source={{uri: this.state.ImageUrl}}
          // source={{uri: this.state.ImageUrl}}
        />

        <View>
        <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="What do you want to talk about?"
        keyboardType="default"
      />
       
        </View>

        <View style={styles.view2}>
          <TouchableOpacity style={styles.btn2} onPress={this.uploadImage}><AwesomeIcon style={styles.icon1} color={'#666666'} name="image"  size={25} /><Text style={styles.txt3}>Add a Photo</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn2}><AwesomeIcon style={styles.icon1} color={'#666666'} name="video"  size={25} /><Text style={styles.txt3}>Take A video</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn2}><AwesomeIcon style={styles.icon1} color={'#666666'} name="glass-cheers"  size={25} /><Text style={styles.txt3}>Celebrate an occasion</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn2}><AwesomeIcon style={styles.icon1} color={'#666666'} name="file-alt"  size={25} /><Text style={styles.txt3}>Add a Document</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn2}><AwesomeIcon style={styles.icon1} color={'#666666'} name="briefcase"  size={25} /><Text style={styles.txt3}>Share that you're hiring</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn2}><AwesomeIcon style={styles.icon1} color={'#666666'} name="user-tie"  size={25} /><Text style={styles.txt3}>Find an expert</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn2}><AwesomeIcon style={styles.icon1} color={'#666666'} name="chart-bar"  size={25} /><Text style={styles.txt3}>Create a poll</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn2}><AwesomeIcon style={styles.icon1} color={'#666666'} name="calendar-alt"  size={25} /><Text style={styles.txt3}>Create an event</Text></TouchableOpacity>
        </View>

        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#E9E5DF',
    color:'#FEFEFE',
    // paddingTop: StatusBar.currentHeight,
  },
  view1:{
    backgroundColor:'#FFFFFF',
    height:58
  },
  txt1:{
    color:'#202124',
    marginLeft:45,
    marginTop:-32,
    fontSize:22,
    fontWeight:'bold'
  },
  icon1:{
    marginLeft:10,
    marginTop:10
  },
  btn1:{
    
    marginLeft:310,
    marginTop:-25,
  },
  txt2:{
    fontSize:15,
    color:'#0A66C2',
    fontWeight:'bold'
  },
  img1:{
    marginTop:14,
    marginLeft:15,
    width:48,
    height:48
},
dropdown:{
  width:200,
  height:30,
  marginLeft:70,
  marginTop:-44
},
dropdown2:{
  width:150,
  height:30,
  marginLeft:70,
  marginTop:-4
},
input:{
  marginLeft:16
},
txt3:{
  fontSize:16,
  color:'#202124',
  marginLeft:45,
  marginTop:-23
},
btn2:{
  marginTop:9,
  marginLeft:8
},
view2:{
  marginTop:30,
  borderTopLeftRadius:30,
  borderTopRightRadius:30,
  backgroundColor:'#FFFFFF',
  height:370
}
})