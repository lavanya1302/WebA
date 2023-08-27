import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AppHeader from '../components/AppHeader'


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style = {{borderColor:'black',borderWidth:5}}>
        <AppHeader title="Task App"/>
        <TouchableOpacity
          style={[styles.button,{backgroundColor:"yellow"}]}
          onPress={()=>this.props.navigation.navigate('NewsScreen')}>
          <Text style={styles.buttonText}>Top News</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button,{backgroundColor:"yellow"}]}
          onPress={()=>this.props.navigation.navigate('WeatherScreen')}>
          <Text style={styles.buttonText}>Weather</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button,{backgroundColor:"yellow"}]}
          onPress={()=>this.props.navigation.navigate('JokeScreen')}>
          <Text style={styles.buttonText}>Read a Joke</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button,{backgroundColor:"yellow"}]}
          onPress={()=>this.props.navigation.navigate('Horoscope')}>
          <Text style={styles.buttonText}>Horoscope</Text>
        </TouchableOpacity>

        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
   justifyContent:'center',
   alignSelf:'center',
   borderWidth:2,
   borderRadius:1,
   marginTop:50,
   width:200,
   height:50
  },
  buttonText: {
    textAlign:'center',
    color:'black',
    fontWeight:'bold',
    fontSize:15
  }
});

