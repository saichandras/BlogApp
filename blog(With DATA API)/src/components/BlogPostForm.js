import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

const BlogPostForm = (props) => {

    const [title, setTitle] = useState(props.initialValues.title);
    const [content, setContent] = useState(props.initialValues.content);

    return (
        <View style={styles.root}>
            <Text style={styles.heading}>Add Blog</Text>
            <Text style={styles.label}>Enter Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>
            <Text style={styles.label}>Enter Content</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text => setContent(text))}/>
            <TouchableOpacity
                style={styles.button}
                onPress={() => props.onSubmit(title,content)}
            >
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Save Blog Post</Text>
            </TouchableOpacity>
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues:{
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        marginHorizontal: 15,
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 17,
        paddingVertical: 5,
        paddingHorizontal: 8,
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
    },
    heading: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        marginTop: 20,
        backgroundColor: "#DDDDDD",
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center',
    }
});

export default BlogPostForm;