// Import Libraries
import React from 'react';
import { View, Text, Image } from 'react-native';

// Construct Component
const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
}; 

// Component Styling
const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row', // property under the JustifyContent Rule. 
        borderColor: '#ddd',
        position: 'relative'
    }
}

// Make available to other components
export default CardSection;