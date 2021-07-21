import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        height: 50, backgroundColor: '#FFF', paddingHorizontal: 20
    },
    row: {
        flexDirection: 'row', alignItems: 'center'
    },
    devide: {
        width: 1, backgroundColor: 'grey', height: 15, marginHorizontal: 5
    },
    progressContainer: {
        width: '100%', height: 15, marginTop: 10, borderRadius: 10, overflow: 'hidden'
    },
    progressSlice: {
        height: 50, width: 20, position: 'absolute', right: -6, top: -20, transform: [{ rotate: "45deg" }]
    }
})