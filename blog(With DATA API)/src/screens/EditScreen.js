import React, {useState, useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext'
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({navigation}) => {
    const blogId = (navigation.getParam('id'));
    const {state, editBlogPost} = useContext(Context);
    const blogPost = state.find((blogpost) => blogpost.id === blogId);
    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <BlogPostForm
            initialValues = {{title: blogPost.title, content : blogPost.content}}
            onSubmit = {(title, content) => {
                editBlogPost(blogId, title, content, () => {
                    navigation.pop();
                });
            }}
        />
    );
};

const styles = StyleSheet.create({});

export default EditScreen;