import * as React from 'react';
import { View, Text, Touchableopacity, Textinput, Picker } from 'react-native';
import { Header } from 'react-native-elements';


export default class Translatescreen extends React.Component {
    constructor() {
        super();
        this.state = {
            language: 'english',
        }
    }
    render() {
        return (
            <View>
                <Header
                    centerComponent={{ text: 'Translate' }}
                />

                <View style={{ marginTop: 100 }}>
                    <Picker selectedValue={selectedValue} style={{ height: 50, width: 150 }} > <Picker.Item label="Java" value="java" /> <Picker.Item label="JavaScript" value="js" /> </Picker>
                </View>

            </View>
        )
    }
}