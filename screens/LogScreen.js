import React from 'react';
import {View, Text, FlatList, StyleSheet, Button} from 'react-native';
import { observer } from 'mobx-react';
import logStore from '../stores/LogStore';

export const LogScreen = observer(({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>ИСТОРИЯ:</Text>
            <FlatList  style={styles.log_list}
                data={logStore.events}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <Text style={styles.log_text}>{item}</Text>
                )}
            />
            <Button
                title="Вернуться на главную"
                onPress={() => navigation.navigate('Main')}
            />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        marginTop: 40,
    },
    log_list: {
        marginTop: 30,
    },
    log_text: {
        fontSize: 20,
    },
    header: {
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold',
    }
});