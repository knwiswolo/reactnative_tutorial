// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native'; // imported for Text and AppRegistry from react-native library
import Header from './src/components/header'; // import child component - Header

// Create a component
const App = () => {
    return (
        //<Text>Some Text</Text> //JSX = a dialect of JavaScript: a way to communicate with React Native
        <Header/> // self-closing tag (no text within <></>)
    );
};

// Render it to the device
// for every react native app, we must register at least one component
AppRegistry.registerComponent('albums', () => App);