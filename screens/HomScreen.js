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
    import {DropdownMenu} from 'react-native-dropdown-menu';

import firebase from 'firebase'
import db from '../config'


export default class HomeScreen extends Component{
    constructor(){
        super()
        this.state={
            pic:"",
            firstName:"",
            age:"",
            location:"",
            hobbies:"",            
        }
    }

    updateDatainDB=()=>{

    }

    render(){
        return(
        <View style={styles.modalContainer}>
        <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
        <Text
          style={styles.modalTitle}
          >Data</Text>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Age"}
          maxLength ={3}
          keyboardType={'numeric'}
          onChangeText={(text)=>{
            this.setState({
              age: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Location"}
          multiline = {true}
          onChangeText={(text)=>{
            this.setState({
              location: text
            })
          }}
        />  
       <View style={{height: 64}} >
        <DropdownMenu
        style={{flex: 1}}
        bgColor={'white'}
        tintColor={'#666666'}
        activityTintColor={'green'}
            label="Hobbies"
            data={["Sing","Dance"]}
            containerStyle={
                styles.dropdownStyle}
                handler={(selection, row) => this.setState({hobbies: "cap"})}
            >
        </DropdownMenu>
        </View>
        <View style={styles.modalBackButton}>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={()=>
              this.updateDatainDB()
            }
          >
          <Text style={styles.registerButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.modalBackButton}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={()=>this.setState({
                firstName:'',
                age:'',
                location:'',
                hobbies:''
            })}
          >
          <Text style={{color:'#ff5722'}}>Cancel</Text>
          </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'#F8BE85',
     alignItems: 'center',
     justifyContent: 'center'
   },
   dropdownStyle:{
       height:20,
       width:100
   },
   KeyboardAvoidingView:{
     flex:1,
     justifyContent:'center',
     alignItems:'center'
   },
   modalTitle :{
     justifyContent:'center',
     alignSelf:'center',
     fontSize:30,
     color:'#ff5722',
     margin:50
   },
   modalContainer:{
     flex:1,
     borderRadius:20,
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:"#ffff",
   },
   formTextInput:{
     width:100,
     height:35,
     alignSelf:'center',
     borderColor:'#ffab91',
     borderRadius:10,
     borderWidth:1,
     marginTop:20,
     padding:10
   },
   registerButton:{
     width:200,
     height:40,
     alignItems:'center',
     justifyContent:'center',
     borderWidth:1,
     borderRadius:10,
     marginTop:30
   },
   registerButtonText:{
     color:'#ff5722',
     fontSize:15,
     fontWeight:'bold'
   },
   cancelButton:{
     width:200,
     height:30,
     justifyContent:'center',
     alignItems:'center',
     marginTop:5,
   },
  })