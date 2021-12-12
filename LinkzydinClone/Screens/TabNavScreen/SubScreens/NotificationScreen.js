import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { Searchbar, Button } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth'

export default class NotificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery:'',
      profileImage: auth().currentUser.photoURL,
    };
  }

  onChangeSearch(query) {
    setSearchQuery(query);
}

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <Image
      style={styles.img1}
      source={{ uri: this.state.profileImage }}
      />
      <Searchbar
      style={styles.searchbar}
      placeholder="Search"
      onChangeText={this.onChangeSearch}
      value={this.state.searchQuery}
      />
      <AwesomeIcon style={styles.icon1}  name="comment-dots" color={'#666666'} size={30} />
      <ScrollView>
        <View style={styles.view2}>
        <View style={styles.icon2}></View>
        <Image
        style={styles.img2}
        source={require('../../../assests/elon.jpg')}
        />
        <View style={styles.view1}>
        <Text style={styles.txt1}>Elon Musk</Text> 
        <Text style={styles.txt2}>Shared a post : </Text>
        <Text>Hi all currently we have below...</Text>
        </View>
        <Text style={styles.txt3}>16h</Text>
        <AwesomeIcon style={styles.icon3}  name="ellipsis-v" color={'#666666'} size={12} />
        </View>
        <View style={styles.view3}>
        <View style={styles.icon2}></View>
        <Image
        style={styles.img2}
        source={require('../../../assests/billgates.jpg')}
        />
        <View style={styles.view1}>
        <Text style={styles.txt1}>Bill Gates</Text> 
        <Text style={styles.txt2}>Shared a post : </Text>
        <Text>Hi all currently we have below...</Text>
        </View>
        <Text style={styles.txt3}>16h</Text>
        <AwesomeIcon style={styles.icon3}  name="ellipsis-v" color={'#666666'} size={12} />
        </View>
        <View style={styles.view3}>
        <View style={styles.icon2}></View>
        <Image
        style={styles.img2}
        source={require('../../../assests/jeff.jpg')}
        />
        <View style={styles.view1}>
        <Text style={styles.txt1}>Jeff Besoz</Text> 
        <Text style={styles.txt2}>Shared a post : </Text>
        <Text>Hi all currently we have below...</Text>
        </View>
        <Text style={styles.txt3}>16h</Text>
        <AwesomeIcon style={styles.icon3}  name="ellipsis-v" color={'#666666'} size={12} />
        </View>
        <View style={styles.view3}>
        <View style={styles.icon4}></View>
        <Image
        style={styles.img2}
        source={require('../../../assests/tony.jpg')}
        />
        <View style={styles.view1}>
        <Text style={styles.txt1}>Tony Stark</Text> 
        <Text style={styles.txt2}>Shared a post : </Text>
        <Text>Hi all currently we have below...</Text>
        </View>
        <Text style={styles.txt3}>16h</Text>
        <AwesomeIcon style={styles.icon3}  name="ellipsis-v" color={'#666666'} size={12} />
        </View>
        <View style={styles.view3}>
        <View style={styles.icon4}></View>
        <Image
        style={styles.img2}
        source={require('../../../assests/stan.jpg')}
        />
        <View style={styles.view1}>
        <Text style={styles.txt1}>Stan Lee</Text> 
        <Text style={styles.txt2}>Shared a post : </Text>
        <Text>Hi all currently we have below...</Text>
        </View>
        <Text style={styles.txt3}>16h</Text>
        <AwesomeIcon style={styles.icon3}  name="ellipsis-v" color={'#666666'} size={12} />
        </View>
      </ScrollView>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#FEFEFE',
      color:'#FEFEFE',
    },
    img1:{
        marginTop:10,
        marginLeft:10,
        width:40,
        height:40,
        borderRadius:100
    },
    searchbar:{
        width:250,
        marginLeft:60,
        marginTop:-40
    },
    icon1:{
       marginLeft:323,
       marginTop:-40
    },
    txt1:{
      fontSize:15,
      color:'#202124',
      fontWeight:'bold',
    },
    view1:{
      marginLeft:70,
      marginTop:-40
    },
    txt2:{
      marginTop:-20,
      marginLeft:78
    },
    view2:{
      // marginLeft:12,
      marginTop:20,
      backgroundColor:'#E8F3FF'
    },
    icon2:{
      width:10,
      height:10,
      borderRadius:100,
      backgroundColor:'#0A66C2',
      top:35,
      left:5
    },
    txt3:{
      left:330,
      top:-40,
      fontSize:11
    },
    icon3:{
      left:336,
      top:-35,
    },
    img2:{
      marginTop:10,
      marginLeft:23,
      width:40,
      height:40,
      borderRadius:100
  },
  view3:{
    // marginLeft:12,
    marginTop:0,
    backgroundColor:'#E8F3FF'
  },
  icon4:{
    width:10,
    height:10,
    borderRadius:100,
    backgroundColor:'#2ecc71',
    top:35,
    left:5
  },
  
})
