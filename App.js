import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [newSize, setNewSize] = useState(0);
  const [newColor, setNewColor] = useState('');
  const [newAlign, setNewAlign] = useState('');
  const [hasNewElement, setNewElement] = useState(false);

  const drawBox = () => {
    setNewElement(true)
  }

  const deleteBox = () => {
    setNewElement(false);
    setNewColor('');
    setNewSize(0);
    setNewAlign(0);
  }

  return (
    <View style={styles.container}>
       <View style={{ alignItems: 'center' }}>
        <Box color='lightpink' width={100} height={100} />
        <Box color='lightsalmon' width={100} height={100}/>
      </View>
      {hasNewElement && 
      <View style={{ alignItems: newAlign }}>
        <Box color={newColor} width={newSize} height={newSize}/>
      </View>
      }

      <TextInput
      placeholder = 'Размер нового квадрата:'
      style={{ padding: 8, backgroundColor: '#f5f5f5', width: '70%', marginLeft: 55}}
      onChangeText={text => setNewSize(parseInt(text))}
      />

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,}}>
          <Text>Цвет</Text>
          <View style={{margin: 15,
          flexDirection: 'row'}}>
            <Button title="              " onPress={()=>setNewColor('lightpink')} color="lightpink" />
            <Button title="              " onPress={()=>setNewColor('lightsalmon')} color="lightsalmon" />
            <Button title="              " onPress={()=>setNewColor('lightcoral')} color="lightcoral" />
          </View>
      </View>

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,}}>
          <Text>Расположение</Text>
          <View style={{margin: 15,
          flexDirection: 'row'}}>
            <Button title="Лево" onPress={()=>setNewAlign('flex-start')} color="lightsteelblue" />
            <Button title="Центр" onPress={()=>setNewAlign('center')} color="lightsteelblue" />
            <Button title="Право" onPress={()=>setNewAlign('flex-end')} color="lightsteelblue" />
          </View>
      </View>

      <Button
      style={{margin: 10,}}
      color="lightseagreen"
        onPress={drawBox}
        disabled={!(newColor && newSize && newAlign) || hasNewElement}
        title='Показать'
      />

      <Button
        style={{marginTop: 10,}}
        color="lightseagreen"
        onPress={deleteBox}
        disabled={!hasNewElement}
        title='Удалить'
      />

    </View>
  );
}

export const Box = (props) => (
  <View 
   style={{ 
     width: props.width, 
     height: props.height, 
     backgroundColor: props.color,
     margin: 10,
     }} 
 />
 )

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});