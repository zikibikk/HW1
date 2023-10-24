import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, TextInput, View} from 'react-native';
import {observer} from 'mobx-react';
import logStore from '../stores/LogStore';
import {TodoLine} from "../components/ToDoLine";
import todoStore from "../stores/ToDoStore";

export const Main = observer(({ navigation }) => {
    const [text, setText] = useState('');

    const completedT = todoStore.completedTodos

    const addTodo = () => {
        if (text) {
            todoStore.addTodo(text);
            setText('');
            logStore.logEvent(`➕: ${text}`);
        }
    };

    const markAsCompleted = (todo) => {
        todoStore.markAsCompleted(todo);
        logStore.logEvent(`✔️: ${todo.text}`);
    }

    const deleteTodo = (todo) => {
        todoStore.deleteTodo(todo);
        logStore.logEvent(`➖: ${todo.text}`);
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Введите задачу"
                value={text}
                onChangeText={setText}
            />
            <Button title="Добавить" onPress={addTodo} />

            <FlatList
                data={todoStore.todos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <TodoLine 
                        todo={item}
                        onComplete={() => markAsCompleted(item)}
                        onDelete={() => deleteTodo(item)}
                    />
                )}
            />

            <Button
                title="Завершённые задачи"
                onPress={() => navigation.navigate('CompletedTasks', { completedT })}
            />
            <Button
                title="История действий"
                onPress={() => navigation.navigate('Log')}
            />
        </View>
    );

});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        marginTop: 250,
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
});