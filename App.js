import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [isNameEntered, setIsNameEntered] = useState(false);
  const [userName, setUserName] = useState('');
  const handlePress = () => {
    setIsNameEntered(true);
  }

  return (
    <View style={{
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
      padding: 20,
     }}>
      <Text style={{textAlign: 'center', fontSize: 20}} >
        {isNameEntered ? `Будем знакомы, ${userName}` : 'Как Вас зовут?'}
      </Text>
      <TextInput 
        style={{ padding: 8, backgroundColor: '#f5f5f5', fontSize: 20 }}
        onChangeText={text => setUserName(text)}/>
      <Button
        onPress={handlePress}
        title='Это я'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
