/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

import Style from '../styles/Styles';

export default class InputButton extends Component {
    
    render() {
        return (
        	
            <TouchableHighlight style={Style.inputComponent}
                                underlayColor="#193441"
                                onPress={this.props.onPress}>
                <Text style={Style.inputBtnText}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    }
    
}
