// Import necessary libraries
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Contruct Component
const Button = (props) => {
    return (
        <TouchableOpacity>
            <Text>Click Me!</Text>
        </TouchableOpacity>
    );
};

// Component Styling
const styles = {
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'centre',
        color: 'blue'
    }
}

// Make available to other components
export default Button;