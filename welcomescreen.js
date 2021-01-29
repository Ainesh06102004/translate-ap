import * as React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';

export default class Welcomescreen extends React.Component{
    render(){
        return(
            <View>
                <Image
                    source = {require('../logo.png')}
                />

                <TouchableOpacity>
                    <Text>
                        Tap To Start
                    </Text>
                </TouchableOpacity>

                <Text>WELCOME!</Text>
            </View>
        )
    }
}