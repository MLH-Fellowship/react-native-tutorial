import React from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'red'
    }
})

const DetailsView = () => {
    return (
        <div>
            <Text style={styles.textStyle}>This is our details screen</Text>
        </div>
    )
};

export default DetailsView;
