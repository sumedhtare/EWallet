import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native';


const Home:React.FC =() => {
    const { colors } = useTheme();

return <SafeAreaView style={styles.container}>
    <Text style={{color:colors.label}}>WIP</Text>
</SafeAreaView>
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})