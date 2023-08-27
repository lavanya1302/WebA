import * as React from 'react';
import { View, Text, Image , TouchableOpacity, Linking} from 'react-native';
import AppHeader from '../components/AppHeader'


export default class NewsScreen extends React.Component {
  render() {
    return (
      <View>
        <AppHeader title="News"/>
        
        <TouchableOpacity 
          onPress={()=>this.props.navigation.navigate('HomeScreen')}
          style = {{width:30,height:30}}>
          <Image
            style = {{width:33,height:33,marginTop:400}}
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

        <TouchableOpacity 
          onPress={()=>{
            Linking.openURL('https://timesofindia.indiatimes.com/');
          }}
          style = {{width:30,height:30}}>
          <Image
            style = {{width:150,height:250,marginTop:0,borderColor:'black',borderWidth:2}}
            source = {require('../assets/toi.png')}
          />
        </TouchableOpacity>

      </View>
    );
  }
}