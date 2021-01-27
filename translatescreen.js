import * as React from 'react';
import { View, Text, Touchableopacity, TextInput } from 'react-native';
import { Header } from 'react-native-elements';
import { Picker } from 'react-native-picker';

export default class Translatescreen extends React.Component {
  constructor() {
    super();
    this.state = {
      language: 'english',
      country: 'uk',
      selectedcat: "",
      category: [
        {
          itemName: "Samsung M20"
        },
        {
          itemName: "Nokia"
        },
        {
          itemName: "Apple"
        },
        {
          itemName: "Samsung M23"
        },
        {
          itemName: "Samsung M24"
        },
        {
          itemName: "Samsung M25"
        }
      ]
    }
  }
  async onValueChangeCat(value) {
    this.setState({ selectedcat: value });
  }

  render() {

    return (
      <View>
        <Header
          centerComponent={{ text: 'Translate' }}
        />

        <View style={{ marginTop: 100 }}>

          <Picker
            mode="dropdown"
            selectedValue={this.state.selectedcat}
            onValueChange={this.onValueChangeCat.bind(this)}
          >
            {this.state.category.map((item, index) => (
              <Picker.Item
                color="#0087F0"
                label={item.itemName}
                value={item.itemName}
                index={index}
              />
            ))}
          </Picker>
          <TextInput style={{ marginTop: 10, borderWidth: 1, borderColor: 'black', width: 140, height: 25, borderRadius: 25 }}
            placeholder={'Type here...'}
          />

          <TextInput style={{ marginTop: 10, borderColor: 'black', width: 140, height: 25, borderRadius: 25 }}
            placeholder={'Translation...'}
          />
        </View>

      </View>
    )
  }
}