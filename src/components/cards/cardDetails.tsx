import React, { FC } from 'react'
import { View, Text } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { useTheme } from '@react-navigation/native';
import { cardDetailsStyles as styles } from './cards.stye'

type cardDetails = {
    data: {
        type: String;
        balance: String;
    }
}

const CardDetails: FC<cardDetails> = ({ data }) => {
    const { colors } = useTheme();
    return <View style={styles.container}>
        <View style={{ flex: 1, marginTop: 20 }}>
            <Text style={[styles.name, { color: colors.label }]}>{data.type}</Text>
            <Text style={[{ color: colors.label, marginTop: 30 }]}>Available balance</Text>
            <View style={styles.balanceContainer}>
                <View style={[styles.balanceIndicator, { backgroundColor: colors.primary }]}>
                    <Text style={{ color: colors.label }}>S$</Text>
                </View>
                <Text style={[styles.name, { color: colors.label, marginLeft: 20 }]}>{data.balance}</Text>
            </View>
        </View>
        <IonIcon name='leaf' color={colors.primary} size={30} />
    </View>
}

export default CardDetails