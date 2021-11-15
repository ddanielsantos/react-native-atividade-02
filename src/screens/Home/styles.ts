import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aa2223',
        alignItems: 'center'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        marginHorizontal: 90,
        marginVertical: 12
    },
    title: {
        color: '#ffffff',
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'Arial'
    },
    subtitle: {
        color: '#ffe44d',
        fontSize: 20,
    },
    photosArea: {
        display: 'flex',
        width: '95vw',
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    photoContainer: {
        display: 'flex',
        margin: 3,
        backgroundColor: '#000033',
        flex: 1,
        height: 160,
        minWidth: 190,
        padding: 10,
    },
    check: {
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: 'green',
        alignSelf: 'flex-end',
    },

})