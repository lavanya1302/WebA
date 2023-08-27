import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import AppHeader from '../components/AppHeader'


export default class Horoscope extends React.Component {
  render() {
    return (
      <View>
        <AppHeader title="Horoscope"/>

        <TouchableOpacity 
          onPress={()=>{
            Linking.openURL('https://www.astrosage.com/horoscope/daily-horoscope-todays-horoscope.asp');
          }}
          style = {{width:30,height:30}}>
          <Image
            style = {{width:325,height:300,marginTop:0,borderColor:'blue',borderWidth:2}}
            source = {require('../assets/h.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={()=>this.props.navigation.navigate('HomeScreen')}
          style = {{width:30,height:30}}>
          <Image
            style = {{width:33,height:33,marginTop:370}}
            source = {require('../assets/back.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=>this.props.navigation.navigate('Dashboard')}
          style = {{width:30,height:30}}>
          <Image
            style = {{width:33,height:33,marginTop:400}}
            source = {require('../assets/fb.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}