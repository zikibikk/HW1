import { observer } from 'mobx-react';
import {Button, FlatList, StyleSheet, View, Text} from "react-native";
import React from "react";
import {TodoLine} from '../components/ToDoLine';
import todoStore from "../stores/ToDoStore";

export const CompletedTasks = observer(({ route, navigation }) => {
    const completedTodos = todoStore.completedTodos || [];

    return (
        <View style={styles.container}>
            <Text
                style={styles.header}>Выполненные задачи:</Text>
            <FlatList
                data={completedTodos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <TodoLine
                        todo={item}
                        onComplete={() => {}}
                    />
                )}
            />
            <Button
                title="Открыть историю"
                onPress={() => navigation.navigate('Log')}
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
    input: {
        height: 40,
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    todoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    todoText: {
        flex: 1,
    },
    header: {
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold',
    }
});