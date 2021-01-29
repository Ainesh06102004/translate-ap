import * as React from 'react';
import { View, Text, Touchableopacity, TextInput } from 'react-native';
import { Header } from 'react-native-elements';
import { Picker } from '@react-native-community/picker';

export default class Translatescreen extends React.Component {
  constructor() {
    super();
    this.state = {
      language: 'java',
    };
  }

  render() {

    return (
      <View>
        <Header
          centerComponent={{ text: 'Translate' }}
        />
        <View style = {{marginTop: 100, marginLeft: 20}}>
          <Picker
            selectedValue={this.state.language}
            style={{
              height: 50,
              width: 120,
              borderWidth: 10,
              borderColor: 'black',
              
            }}
            itemStyle={{
              color: 'blue'
            }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }>
            <Picker.Item label="French" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <View style={{ marginTop: 100 }}>

          <TextInput style={{
            marginTop: -100,
            borderWidth: 1,
            borderColor: 'black',
            width: 330,
            height: 200,
            borderRadius: 25,
            alignSelf: 'center',
            padding: 10
          }}
            placeholder={'Type here...'}
          />

          <TextInput style={{
            marginTop: 10,
            borderWidth: 1,
            borderColor: 'black',
            width: 330,
            height: 200,
            borderRadius: 25,
            alignSelf: 'center',
            padding: 10
          }}
            placeholder={'Translation...'}
          />
        </View>

      </View>
    )
  }
}