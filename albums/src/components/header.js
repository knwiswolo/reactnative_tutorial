// Import libraries for making a component (dependencies)
import React from 'react';
import { Text, View } from 'react-native';

// Create component
const Header = () => { // typically same name of .js file
    const { textStyle, viewStyle } = styles; // desctructuring for referencing style

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Albums!</Text>
        </View>
    );
};

// Styling of component
const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#F8F8F8'
    }
}

// Make component available to other parts/areas of the app
export default Header;