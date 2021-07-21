import React, { useEffect, useState, FC } from 'react'
import { SafeAreaView, View, ScrollView } from 'react-native'
import CardDetails from '../../components/cards/cardDetails'
import Card from '../../components/cards/card'
import CardOption from '../../components/cards/cardOptions'
import ProgressBar from '../../components/progressBar/progressBar'
import { connect } from 'react-redux';
import { styles } from './debitCard.styles'

const initOptionsData = [
    { title: 'Top-up account', info: 'Deposit money to your account to use with card', icon: 'home', switch: false },
    { title: 'Weekly spending limit', info: "You haven't set any spending limit on card", icon: 'pulse-outline', switch: true, value: false },
    { title: 'Freez card', info: 'Your debit card is currently active', icon: 'snow', switch: true, value: false },
    { title: 'Get a new card', info: 'This deactivate your current debit card', icon: 'card', switch: false },
    { title: 'Deactivated cards', info: 'Your previously deaactivated cards', icon: 'card-outline', switch: false }
]

type cardData = {
    limit: String;
    balance: String;
    title: String;
    number: String;
    expiryDate: String;
    name: String;
    cvv: String;
    type: String;
}

type props ={
    navigation : any;
    cardData : cardData;
}

const DebitCard:FC<props> = ({ navigation, cardData }) => {
    const [showLimit, setShowLimit] = useState<boolean>(false)
    const [optionsData, setOptionsData] = useState<any>(initOptionsData)
    const [reRender, setReRender] = useState<boolean>(false)
    const getPercentage = (cardData: any) => parseInt(cardData.limit) / parseInt(cardData.balance) * 100
    const [percentage, setPercentage] = useState<number>(getPercentage(cardData))
    const handleOption = (data:cardData, state: boolean) => {
        if (data.title === 'Weekly spending limit') {
            setShowLimit(state)
        }
    }

    useEffect(() => {
        setReRender(true)
        setShowLimit(true)
        let tempData = [...initOptionsData]
        tempData[1].value = true
        setOptionsData(tempData)
        setPercentage(getPercentage(cardData))
    }, [cardData])

    useEffect(() => {
        if (reRender)
            setReRender(false)
    }, [reRender])



    const handlePress = (data: cardData) => {
        if (data.title === 'Weekly spending limit') {
            navigation.navigate('SpendingLimit')
        }

    }

    return <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, alignItems: 'center' }}>
            <CardDetails data={cardData} />
            <ScrollView style={{ position: 'absolute', height: '100%' }}
                contentContainerStyle={{ paddingTop: 150 }}
                // stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={false}
            >
                <Card data={cardData} />
                {showLimit && <ProgressBar data={{ limit: `${cardData.limit}`, total: `$${cardData.balance}`, percentage: percentage }} />}
                {!reRender && optionsData.map((item:any, index:number) => <CardOption data={item} key={`opt${index}`} onEnabled={handleOption} onPress={handlePress} />)}
            </ScrollView>
        </View>
    </SafeAreaView>
}

const mapStateToProps = (state: any) => {
    return {
        cardData: JSON.parse(state.cardData)
    }
}
export default connect(mapStateToProps)(DebitCard)