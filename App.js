import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class AnyButton extends Component{
  displayAlert=()=>{
    // Instructions create an alert
    alert("You just clicked the button");
  }
  render(){
    return(
      <Button color = {this.props.shade} title=" My own Red button" onPress={this.displayAlert}></Button>
    )
  }
}


export default class App extends Component{
  render(){
    return(
      <View>
        <Text style={{alignSelf:"center"}}> Reyansh</Text>
        <AnyButton  shade ="orange"/>
      </View>
    )
  }
}
