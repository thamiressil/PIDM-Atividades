import React, {Component} from 'react'
import {Text,View} from 'react-native'

class Aluno extends Component{
    render(){
      // código JSX
      return (
          <View>
              <Text style={{fontSize:23,fontWeight:'bold'}}>
                  Thamires Silva
              </Text>

              <Text style={{fontSize:16,fontWeight:'bold'}}>
                  21 anos
              </Text>

              <Text style={{fontSize:16,fontWeight:'bold'}}>
                  Curso de Design digital
              </Text>

              <Text style={{fontSize:16,fontWeight:'bold'}}>
                  Cidade Pentecoste
              </Text>

          </View>
      )  
    }
}

export default Aluno