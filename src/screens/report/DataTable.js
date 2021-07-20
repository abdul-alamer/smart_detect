import React, { useState  } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View ,TouchableOpacity} from "react-native";
import { DataTable, Portal, Button, Provider  } from 'react-native-paper';
import { CheckBox } from 'react-native-elements'

//import ShowModal from './DetailsModal'
import ButtonView from './ManageButtons'
const ReportTable = () =>{


  const [modalVisible, setModalVisible] = useState(false);
  const [CamerNo,setCamNo] = useState('CAM-1');
  const [TimeStamp,setTimeStamp] = useState('9/28/2011 2:23:15');
  const [Situation,setSituation] = useState('gun detected')
  const [Handled,setHandled] = useState('YES');


        return(
        <DataTable>
           <View >
<Modal
animationType="fade"

//transparent={true}
visible ={modalVisible}
onRequestClose={() => {setModalVisible(!modalVisible);}}

>
<View style={styles.ModalView}>
<View  style={styles.InfoBox}>
<Text style={{fontWeight:'bold'}}>Camera No. :<Text style={{fontWeight:'normal'}}>{CamerNo}</Text></Text>
<Text style={{fontWeight:'bold'}}>TimeStamp :<Text style={{fontWeight:'normal'}}>{TimeStamp}</Text></Text>
<Text style={{fontWeight:'bold'}}>Situation :<Text style={{fontWeight:'normal'}}>{Situation}</Text></Text>
<Text style={{fontWeight:'bold'}}>Handeled?<Text style={{fontWeight:'normal'}}>{Handled}</Text></Text>  

</View>
<TouchableOpacity onPress={() =>{setModalVisible(!modalVisible);console.log(modalVisible)}} style={styles.Hide}>
    <Text style={styles.texth}>HIDE</Text>
    </TouchableOpacity>

</View>



</Modal>

</View>
          <ButtonView/>
            <DataTable.Header style={{backgroundColor:'lightgray'}}>
              <DataTable.Title>camera No.</DataTable.Title>
              <DataTable.Title numeric>Timestamp</DataTable.Title>
              <DataTable.Title numeric>Situation</DataTable.Title>
              <DataTable.Title numeric>Handeled?</DataTable.Title>
            </DataTable.Header>

            <TouchableOpacity onPress={()=>{setModalVisible(true);}} >
            <DataTable.Row style={styles.container}>
              <DataTable.Cell>CAM-2</DataTable.Cell>
              <DataTable.Cell numeric>2017-08-19 12:17:55 </DataTable.Cell>
              <DataTable.Cell numeric>gun detected</DataTable.Cell>
              <DataTable.Cell numeric>NO</DataTable.Cell>
            </DataTable.Row>
            </TouchableOpacity>

            <TouchableOpacity >
            <DataTable.Row style={styles.container}> 
              <DataTable.Cell>CAM-1</DataTable.Cell>
              <DataTable.Cell numeric>2017-08-19 12:17:55</DataTable.Cell>
              <DataTable.Cell numeric>fight onset</DataTable.Cell>
               <DataTable.Cell numeric>YES</DataTable.Cell>
            </DataTable.Row>
            </TouchableOpacity>


            <DataTable.Pagination
              page={1}
              numberOfPages={3}
              onPageChange={page => {
                console.log(page);
              }}
              label="1-2 of 6"
            />
          </DataTable>);
    



}
const styles = StyleSheet.create({
  container: {
         // marginBottom:50,
  // marginRight:5,
  
 
 //   height:80,
 // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
 //   padding: 5,

  },
  text:{
    marginLeft:5,
      color:'black',
      fontWeight:'100',
      fontSize:16,
  },
   
  ModalView:{
    backgroundColor:'#FAFAFA',
    borderRadius :10,
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
        },
    
        InfoBox:{
    backgroundColor:'lightgray',
     height: 100,
    margin:60,
    padding:25,
    paddingTop:20,
    borderRadius :10,
    //flex:1,
    alignItems:'flex-start'
    
        },
        Hide:{
            width:200,
            
            height:50,
            borderRadius:8,
            backgroundColor:'gray',
            alignItems:'center',
          justifyContent:'center'
            
        },
        texth:{
            
            fontSize:24,
            fontWeight:'normal'
            
        }
    
    

});

export default ReportTable;