import * as React from 'react';
import { View, Text, Touchableopacity, TextInput } from 'react-native';
import { Header } from 'react-native-elements';
import { Picker } from '@react-native-community/picker';
import I18n from "../Source/I18n";

export default class Translatescreen extends React.Component {
  constructor() {
    super();
    this.state = {
      prelanguage: '',
      postlanguage: '',
      pretrans: '',
      posttrans: '',
      
    };
  }

  render() {

    return (
      <View>
        <Header
          centerComponent={{ text: 'Translate' }}
        />
        <View style = {{marginTop: 30, marginLeft: 20}}>
          <Picker
            selectedValue={this.state.prelanguage}
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
              this.setState({ prelanguage: itemValue })
            }>
            <Picker.Item label="French" value="french" />
            <Picker.Item label="English" value="english" />
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
            onChangeText = {(text)=>{
              this.setState({
                pretrans: text
              })
            }}
          />
          <View style = {{marginTop: 40, marginLeft: 20}}>
          <Picker
            selectedValue={this.state.postlanguage}
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
              this.setState({ postlanguage: itemValue })
            }>
            <Picker.Item label="French" value="french" />
            <Picker.Item label="English" value="english" />
          </Picker>
        </View>
        <View style={{ marginTop: -10 }}></View>

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
            placeholder={this.state.posttrans}
          />
        </View>
        <View>
          <Text>
            {I18n.t(this.state.pretrans)}
          </Text>
        </View>

      </View>
    )
  }
}