// Import necessary libraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// Create Component - functional component (because presentational)
const AlbumDetail = (props) => {
    return (
        <View>
            {/* recieve "props" that is passed down from AlbumList */}
            <Text>{props.album.title}</Text> 
        </View>
    );
}


// Make it available to other component in app
export default AlbumDetail