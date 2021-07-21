import React from 'react'
import { View, Text } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { styles } from './progressBar.style'
export default ({ data }) => {
    const { colors } = useTheme();
    return <View style={styles.container}>
        <View style={[styles.row, { height: 20 }]}>
            <View style={{ flex: 1 }}>
                <Text>Debit card spending limit</Text>
            </View>
            <View style={styles.row}>
                <Text style={{ color: colors.primary }}>{data.limit}</Text>
                <View style={styles.devide} />
                <Text style={{ color: 'grey' }}>{data.total}</Text>
            </View>
        </View>
        <View style={[styles.progressContainer, { backgroundColor: colors.lightGreen }]}>
            <View style={{ width: `${data.percentage + 9}%`, height: 15, backgroundColor: colors.primary }}>
                <View style={[styles.progressSlice, { backgroundColor: colors.lightGreen }]} />
            </View>
        </View>
    </View>
}