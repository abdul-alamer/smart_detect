import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Linking } from 'react-native';
import { StyleSheet, Text, View,CheckBox,TouchableOpacity} from 'react-native';
//import { CheckBox } from 'react-native-elements'




export default function RememberMe({title,style,onPress}) {
//  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={false}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Remember me</Text>
      </View>
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   width:300,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    
 //alignItems:'flex-start',
  },
  checkbox: {
    alignSelf: "center",
  width:20,
  height:30,
    //alignItems:'flex-start',
  },
  label: {
    //margin: 8,
  },
});