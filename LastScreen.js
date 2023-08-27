import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/AppHeader'
import Para from '../components/Paragraph'
import Button from '../components/Button'

export default function LastScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Sign out</Header>
      
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        
      </Button>
    </Background>
  )
}