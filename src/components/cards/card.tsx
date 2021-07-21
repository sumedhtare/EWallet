import React, { useState, useEffect, FC } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons'
import { numberFormat } from '../../functions/format'
import { CardContainer } from './cardOptions'
import { cardStyles as styles } from './cards.stye'

type cardData = {
    limit: String;
    balance: String;
    title: String;
    number: String;
    expiryDate: String;
    name: String;
    cvv: String;
}
type props ={
    data: cardData
}

const Card:FC <props> = ({ data }) => {
    const { colors } = useTheme();
    const [number, setNumber] = useState<String>(data.number)
    const handleHide = (hide:boolean) => {
        if (hide) setNumber(`XXXXXXXXXXXX${numberFormat(data.number)[3]}`)
        else setNumber(data.number)
    }

    useEffect(()=>{
        setNumber(data.number)
    },[data.number])

    return <View style={{ alignItems: 'center',overflow:'hidden' }}>
        <View style={{ zIndex: 1 }}>
            <View style={styles.numberContainer}>
                <HideNumber colors={colors} onPress={handleHide} />
            </View>
            <View style={[styles.container, { backgroundColor: colors.primary }]}>
                <View style={styles.logo}>
                    <IonIcon name='leaf' color={colors.label} size={30} />
                </View>
                <Text style={[styles.name, { color: colors.label }]}>{data.name}</Text>
                <View style={{ flexDirection: 'row', marginTop: 35 }}>
                    {numberFormat(number).map((item:String, index:number) => <Text key={`cnum${index}`} style={[styles.number, { color: colors.label }]}>{item}</Text>)}
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Text style={{ color: colors.label }}>Thru: {data.expiryDate} </Text>
                    <Text style={{ color: colors.label, marginLeft: 20 }}>CVV: {data.cvv} </Text>
                </View>
                <View style={styles.logo}>
                    <IonIcon name='logo-vimeo' color={colors.label} size={30} />
                </View>
            </View>
        </View>
        <CardContainer />
    </View>
}

export default Card;

type colors = {
    primary:string
}

type HNProps = {
    colors: colors;
    onPress: (val:boolean) => void;
}

const HideNumber:FC<HNProps> = ({ colors, onPress }) => {
    const [hide, setHide] = useState(false)
    const handleHide = () => {
        setHide(!hide)
        onPress(!hide)
    }
    return <View style={{ width: '100%', alignItems: 'flex-end' }}>
        <View style={{
            right: 0, width: 170, height: 40, borderRadius: 7, backgroundColor: '#FFF',
            zIndex: 0, paddingTop: 10, marginBottom: -10
        }}>
            <TouchableOpacity onPress={handleHide} style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <IonIcon name={hide ? 'eye-outline' : 'eye-off-outline'} color={colors.primary} size={15} />
                <Text style={{ color: colors.primary, marginLeft: 10, marginTop: -1 }}>{hide ? 'Show' : 'Hide'} card number</Text>
            </TouchableOpacity>
        </View>
    </View>
}

