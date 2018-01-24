// Import necesarry Libraries
import React from 'react';
import { View } from 'react-native';
import CardSection from './CardSection';

// Create Component
const Card = (props) => {
    return (
        <View style={styles.constainerStyle}>
            {props.children}
        </View>
    );
};

// Component Styling
const styles = {
    constainerStyle: {
        borderWidth: 1, // boarder around the component with pixel width of 1
        borderRadius: 2, // rounded corners
        borderColor: '#ddd', // light grey border
        borderBottomWidth: 0,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }, // what side the shadow will be on
        shadowOpacity: 0.1,
        shadowRadius: 2,

        elevation: 1,

        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
}

// Make available to other components
export default Card;