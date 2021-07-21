import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export const cardDetailsStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flexDirection: 'row'
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    balanceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    balanceIndicator: {
        width: 40,
        height: 25,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export const cardStyles = StyleSheet.create(({
    container: {
        width: width * .9, borderRadius: 10, zIndex: 1, padding: 15
    },
    name: {
        fontSize: 20, fontWeight: 'bold', marginTop: 10
    },
    number: {
        fontSize: 16, letterSpacing: 4, fontWeight: '400', marginRight: 20
    },
    logo: {
        height: 30, width: '100%', alignItems: 'flex-end'
    },
    numberContainer: {
        width: width * .9, justifyContent: 'flex-end'
    }
}))