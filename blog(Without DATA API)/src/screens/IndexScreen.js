import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Context} from "../context/BlogContext";
import {Feather} from '@expo/vector-icons';

const IndexScreen = (props) => {

    const {state, deleteBlogPost} = useContext(Context);

    const blogPostList = ({item}) => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('Show', {id: item.id})}>
                <View style={styles.row}>
                    <Text style={styles.title}>{item.title} - {item.id}</Text>
                    <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                        <Feather name="trash" size={24} color="black"/>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    }

    if(state.length === 0){
        return(
            <View style={styles.noBlogPostContainer}>
                <Text style={styles.noBlogText}>No blog posts yet!</Text>
                <Text style={styles.noBlogText}>Tap on '+' to add one.</Text>
            </View>
        );
    }

    return (
        <View style={styles.blogListContainer}>
            <FlatList
                data={state}
                keyExtractor={(blog) => blog.id.toString()}
                renderItem={({item}) => blogPostList({item})}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () =>
            (
                <TouchableOpacity style={styles.plusIcon} onPress={() => navigation.navigate('Create')}>
                    <Feather name='plus' size={30}/>
                </TouchableOpacity>
            )
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 13,
        paddingHorizontal: 6,
        marginVertical: 5,
        marginHorizontal: 7,
        borderWidth: 1,
        borderTopColor: 'gray',
        borderRadius: 5,
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    plusIcon: {
        marginRight: 10,
    },
    noBlogPostContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    noBlogText:{
        fontSize: 20,
        color: 'gray',
        fontWeight: 'bold'
    },
    blogListContainer:{
        marginTop: 20,
    }
});

export default IndexScreen;