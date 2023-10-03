import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredLogin, setEnteredLogin] = useState('');
  const [enteredPasswd, setEnteredPasswd] = useState('');
  const [hasError, setError] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const login = 'admin';
  const passwd = 'admin';

  const logIn = () => {
    if (enteredLogin===login && enteredPasswd == passwd) {
      setShowForm(false);
      setError(false);
    }
    else { setError(true); }
  }

  const logOut = () => {
    setShowForm(true);
    setError(false);
  }

  return (
    <View style={{
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
      padding: 20,
     }}>
      { showForm ? (
        <>
        <Text style={{color: 'red' }}>
          { hasError ? 'Неверный логин или пароль' : ''}
        </Text> 
        <TextInput 
        style={{ padding: 15, backgroundColor: '#f5f5f5' }}
        placeholder='Логин:'
        onChangeText={a => setEnteredLogin(a)}/>
        <TextInput 
        style={{ padding: 15, backgroundColor: '#f5f5f5' }}
        placeholder='Пароль:'
        onChangeText={a => setEnteredPasswd(a)}/>
        <Button
        onPress={logIn}
        title='Войти'
      />
        </>
      )
      : (
        <>
        <Text style={{color: 'green' }}>
        Вы успешно вошли, {enteredLogin}
        </Text>
        <Button
        onPress={logOut}
        title='Выйти'
      />
      </>
      )
    }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
