// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native'; // imported for Text and AppRegistry from react-native library
import Header from './src/components/header'; // import child component - Header
import AlbumList from './src/components/AlbumList'; // import child component - AlbumList

// Create a component
const App = () => {
    return (
        <View style={{ flex: 1 }}>
            {/* //<Text>Some Text</Text> //JSX = a dialect of JavaScript: a way to communicate with React Native
            // Provide the "headerText" prop expected by the child (Header) component: headerText={'Albums'}  */}
            <Header headerText={'Albums'}/>
            <AlbumList />
        </View>
    );
};

// Render it to the device
// for every react native app, we must register at least one component
AppRegistry.registerComponent('albums', () => App);