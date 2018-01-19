// Import libraries for making a component (dependencies)
import React from 'react';
import { Text, View } from 'react-native';

// Create component
// "Header" typically same name of .js file 
// "props" object that will be provided by the Parent Component 
const Header = (props) => { 
    const { textStyle, viewStyle } = styles; // desctructuring for referencing style

    return (
        <View style={viewStyle}>
            {/* REUSABILITY - // {props.headerText} - reference to the "props" javaScript object.
            // entering into a contract that says parent component should be providing a "headerText" prop. */}
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

// Styling of component
const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center', // justifyContent positions element vertically
        alignItems: 'center', // horizontal positioning
        height: 60,
        paddingTop: 15,
        shadowColor: '#000', //shadowing - color
        shadowOffset: { width: 0, height: 2}, // positioning of shadow
        shadowOpacity: 0.2, // thichness/darkness of shadow
        elevation: 2,
        position: 'relative'

    }
}

// Make component available to other parts/areas of the app
export default Header;