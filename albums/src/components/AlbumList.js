// Import necessary Libraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// Create Component
/* const AlbumList = () => {
    return (
        <View>
            <Text>Album List</Text>
        </View>
    );
}; */

// Class-based component: useful dor fetching data (with HTTP request) - more dynamic.
class AlbumList extends Component {

    // class level property - "state"
    // 1. declaring/initializing empty/base/initial state of albums.
    state = { albums: [] };

    componentWillMount() {
        // axios is used to fetch the json data from it's location [inherently asynchronous]
        // - returns a "promise" (the data) to which we specify what to do with it in the 
        // '.then()' followup method. - called when the http request is complete.
        // note: "https" not "http".
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data })); // 2. updating component state.
    }
    // render method: MUST return some amount of JSX. - must be specified within a class-based component.
    render () {
        console.log(this.state);

        return (
            <View>
                <Text>Album List</Text>
            </View>
        );
    };
} // no semi-colon on the end of classes!!

// Make available to other components
export default AlbumList;