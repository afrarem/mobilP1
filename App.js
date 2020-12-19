import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from "react-native";
import {Picker} from '@react-native-picker/picker';

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);
    const goalInputHandler=(enteredText)=>{
      setEnteredGoal(enteredText);
  };
    const addGoalHandler = ()=>{
       setCourseGoals(currentGoals =>[...currentGoals,
        {key: Math.random().toString(), value:enteredGoal}]);
    };
    return (
      
    <View style={styles.screen}>
    <View>
     <Picker
           selectedValue={enteredGoal}
           onValueChange={(itemValue, itemIndex)=>
            setEnteredGoal(itemValue)
            
           }>
             <Picker.Item label = "Java" value="java"/>
             <Picker.Item label ="JavaScript" value="js"/>

           </Picker>
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Bir şeyler yazınız"
        style={styles.input} 
        onChangeText={goalInputHandler}
        value={enteredGoal}
        />
        <Button title="Gönder" onPress={addGoalHandler} />
      </View>
      
      

      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={courseGoals}
       renderItem={itemData =>(
         <View style={styles.listItem}>
           <Text>{itemData.item.value}</Text>
           
           
       </View>
       )
       }/>
    
    </View>
    
  );
}

const styles = StyleSheet.create({
    screen:{
        padding:50 
    },
    inputContainer:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems:"center"
    },
    input:{
        width:'80%', 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10
    },
    listItem:{
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1

    }

    }
);
