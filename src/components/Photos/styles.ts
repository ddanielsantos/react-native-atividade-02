import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    photoContainer: {
        display: 'flex',
        margin: 3,
        backgroundColor: '#000033',
        flex: 1,
        height: 160,
        minWidth: 190,
        maxWidth: 300,
        padding: 5,
        borderRadius: 4,
    },
    photo: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
        resizeMode: 'stretch',
    },
    check: {
        position: 'absolute',
        top: 15,
        right: 15,
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 50,
        backgroundColor: 'green',
        alignSelf: 'flex-end',
    },
})