import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    balanceIndicator: {
        width: 40,
        height: 25,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24, fontWeight: 'bold', marginTop: 20, paddingHorizontal: 20
    },
    info: {
        backgroundColor: '#FFF', flex: 1, marginTop: 60, borderTopLeftRadius: 20, borderTopRightRadius: 20
    },
    row: {
        flexDirection: 'row', margin: 20, alignItems: 'center'
    },
    greyText: {
        color: 'grey', fontSize: 12, marginTop: 10
    },
    hList: {
        flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20
    },
    flexEnd: {
        flex: 1, justifyContent: 'flex-end', alignItems: 'center'
    },
    button: {
        height: 50, width: '80%', borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginBottom:40
    },
    bottomCover: {
        backgroundColor: '#FFF', position: 'absolute', bottom: 0, width: '100%'
    },
    limitContianer: { width: '30%', height: 30, justifyContent: 'center', alignItems: 'center' }
})