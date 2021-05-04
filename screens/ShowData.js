import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';

import firebase from 'firebase'
import db from '../config'

export default class ShowData extends Component{
    render(){
        return(
            <View>
                <Text>Show Data</Text>
            </View>
        )
    }
}