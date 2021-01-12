import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from "@expo/vector-icons";

const ShowScreen = (props) => {

    const {state} = useContext(Context);
    const blogPost = state.find((blogpost) => blogpost.id === (props.navigation.getParam('id')));

    return (
        <View style={styles.root}>
            <Text style={styles.title}>{blogPost.title}</Text>
            <Text style={styles.content}>{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity style={styles.editIcon}
                              onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
                <Feather name="edit" size={24} color="black"/>
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'flex-start',
        borderWidth: 1,
        marginVertical: '50%',
        marginHorizontal: 15,
        padding: '5%',
        borderRadius: 5,
    },
    editIcon: {
        marginRight: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        alignSelf: 'center',
    },
    content: {
        fontSize: 16,
    }
});

export default ShowScreen;