import {StyleSheet, View, Text} from 'react-native';
import {IconButton} from "react-native-paper";
import React from "react";

export const TodoLine = ({ todo, onComplete, onDelete }) => (
    <View style={styles.todoContainer}>
        <Text style={styles.todoText}>{todo.text}</Text>
        {!todo.completed && (
            <IconButton icon="check" onPress={onComplete} />
        )}
        {!todo.completed && (
            <IconButton icon="close" onPress={onDelete} />
        )}
    </View>
);

const styles = StyleSheet.create({
    todoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    todoText: {
        flex: 1,
        fontSize: 20,
    },
});