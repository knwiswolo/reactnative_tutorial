// Import necessary libraries
import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// Create Component - functional component (because presentational)
const AlbumDetail = ({album}) => { // destructured the property from the argument of 'props'.
    const { title, artist, thumbnail_image, image } = album;
    const { 
        headerContentStyle, 
        thumbnailStyle ,
        thumbnailContainerStyle,
        albumTitleStyle,
        albumCoverStyle,
    } = styles; // destructuring 'styles' as it's been made reference to more than once - optional refactor.

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                     style={thumbnailStyle}
                     source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={albumTitleStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={albumCoverStyle}
                    source={{ uri: image }}
                />
            </CardSection>

            <CardSection>
                <Button />
            </CardSection>
        </Card>
    );
}

const onPressBuy = () => {
    return (
        console.log("Album Purchaced!")
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column', // vertical arrangement (y-axis)
        justifyContent: 'space-around' // content justification about the y-axis
    },
    albumTitleStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    albumCoverStyle: {
        height: 300,
        flex: 1, // helps image stretch the entire assigned width of the screen (with 'width: null')
        width: null
    }
}

// Make it available to other component in app
export default AlbumDetail