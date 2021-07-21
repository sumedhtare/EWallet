import React, { useState, FC } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native'
import BackButton from '../../components/backButton/backButton'
import { useTheme } from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons'
import { styles } from './spendingLimit.style'
import { connect } from 'react-redux';

type cardData = {
    limit: string;
    balance: String;
    title: String;
}
type props = {
    cardData:cardData;
    saveData: (txt: String)=> void;
    navigation: ()=> void
}

type dispatch ={
    type: String,
    value: String,
  }
  

const SpendingLimit:FC<props> = ({ cardData, saveData, navigation }) => {
    const { colors } = useTheme();
    const insets = useSafeAreaInsets();
    const [limit, setLimit] = useState<string>(cardData.limit)
    const limits = ['5000', '10000', '20000']
    const handleSave =() =>{
        let temp = {...cardData}
        temp.limit = limit
        saveData(JSON.stringify(temp))
    }

    return <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
        <BackButton />
        <Text style={[styles.title, { color: colors.label }]}>Spending limit</Text>
        <View style={styles.info}>
            <View style={styles.row}>
                <IonIcon name='cog-outline' size={18} />
                <Text style={{ marginLeft: 10 }}>Set a weekly spending debit card limit</Text>
            </View>

            <View style={styles.row}>
                <View style={[styles.balanceIndicator, { backgroundColor: colors.primary }]}>
                    <Text style={{ color: colors.label }}>S$</Text>
                </View>
                <View style={{ marginLeft: 10 }}>
                    <TextInput value={limit} onChangeText={(e) =>setLimit(e)} style={{color:colors.text}}/>
                </View>
            </View>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ width: 'auto', height: 1, backgroundColor: colors.lightGrey }} />
                <Text style={styles.greyText}>Here weekly means last 7 days - not the calendar week</Text>

                <View style={styles.hList}>
                    {limits.map((item:String, index:number) => <Limit val={item} key={`lim${index}`} onPress={(val:any) => setLimit(val)} />)}
                </View>
            </View>
            <View style={styles.flexEnd}>

                <TouchableOpacity style={[styles.button,{ backgroundColor: colors.primary }]}
                    onPress={() => handleSave()}>
                    <Text style={{ color: colors.label, fontSize: 18, fontWeight: '400' }}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>


        <View style={[styles.bottomCover ,{ height: Math.max(insets.bottom, 16) }]} />
    </SafeAreaView>
}

const mapStateToProps = (state:any) => {
    return {
        cardData: JSON.parse(state.cardData)
    }
}

const mapDispatchToProps = (dispatch: (data:dispatch)=>void) => {
    return {
        saveData: (data:String) => dispatch({ type: 'CARD_DATA', value: data })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SpendingLimit)

type limitProps ={
    val:String;
    onPress: (txt:String)=>void;
}
const Limit:FC <limitProps>= ({ val, onPress }) => {
    const { colors } = useTheme();

    return <TouchableOpacity style={[styles.limitContianer, { backgroundColor: colors.lightGreen }]}
        onPress={() => onPress(val)}>
        <Text style={{ color: colors.primary }}>S$ {val}</Text>
    </TouchableOpacity>
}