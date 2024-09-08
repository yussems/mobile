import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Checkbox } from 'react-native-paper';
import { ITodo } from '@/types/Todos';

const TodosList = ({ ...props }: ITodo) => {
    return (
        <View >
            <View style={styles.row}>
                <Checkbox
                    uncheckedColor='grey'
                    color='green'
                    status={props.completed ? 'checked' : 'unchecked'}
                    onPress={() => { }}
                />
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </View>
    )
}

export default TodosList

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        flexShrink: 1,
    },
    text: {
        flexShrink: 1,
        marginLeft: 18
    },
})
