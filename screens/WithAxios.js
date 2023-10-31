import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, Button, StyleSheet } from 'react-native';

export const axiosClient = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5',
  timeout: 1000,
});

export const WithAxios = ({ navigation }) => {
  const [temp, setTemp] = useState('');
  const [error, setError] = useState(null);

  const onButtonClick = () => {
    axiosClient
      .get(
        '/weather?lat=55.768139&lon=49.146831&appid=2f7f80c1114987b2dc44d7657de5cd92&lang=ru&units=metric'
      )
      .then((response) => {
        setTemp(
          `Температура ${response.data.main.temp} ℃, ощущается как ${response.data.main.feels_like} ℃.`
        );
      })
      .catch((error) => {
        setTemp('Ошибка запроса.');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Температура возле KazanMall</Text>
        <Button title="Отправить запрос" onPress={() => onButtonClick()} />
        <Text style={styles.text}>{temp}</Text> 
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        marginTop: 250,
        marginBottom: 10,
    },
    text: {
        fontSize: 20,
    },
    header: {
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold',
    }
});