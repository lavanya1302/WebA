import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'
import axios from 'axios';

export default class WeatherScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      weather: '',
    };
  }

  getWeather =async ()=>{
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139';
    return fetch(url)
      .then(response =>response.json())
      .then(responseJson =>{
        this.setState({
          weather: responseJson,
        })
      })
      .catch(error =>{
        console.error(error);
      })
  }

  componentDidMount =()=>{
    this.getWeather();
  }

  render(){
    if (this.state.weather === ''){
      return(
        <View>
          <Text>Loading...</Text>
        </View>
      );
    } else{
      return(
        <View>
          <AppHeader title="Weather"/>

          <TouchableOpacity 
            onPress={()=>this.props.navigation.navigate('HomeScreen')}
            style = {{width:30,height:30}}>
            <Image
              style = {{width:33,height:33,marginTop:400}}
              source = {require('../assets/back.png')}
            />
          </TouchableOpacity>

          <Text style = {styles.textStyle}>Weather : {this.state.weather.weather[0].description}</Text>
          <br/>
          <Text style = {styles.textStyle}>Wind Speed : {this.state.weather.wind.speed}</Text>
          <br/>
          <Text style = {styles.textStyle}>Temperature : {this.state.weather.main.temp}</Text>
          <br/>
          <Text style = {styles.textStyle}>Min Temperature : {this.state.weather.main.temp_min}</Text>
          <br/>
          <Text style = {styles.textStyle}>Max Temperature : {this.state.weather.main.temp_max}</Text>
          <br/>
          <Text style = {styles.textStyle}>Pressure : {this.state.weather.main.pressure}</Text>
          <br/>
          <Text style = {styles.textStyle}>Humidity : {this.state.weather.main.humidity}</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  textStyle:{
    color:'blue',
    fontWeight:'bold',
    alignSelf:'center'
  }
})