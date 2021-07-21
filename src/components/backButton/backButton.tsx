import React,{FC} from 'react'
import { View, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

const BackButton:FC =() =>{
    const navigation = useNavigation();
    const { colors } = useTheme();

    return <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:20,marginTop:10}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <IonIcon name='chevron-back-outline' color={colors.label} size={25}/>
        </TouchableOpacity>
    <IonIcon name='leaf' color={colors.primary} size={25}/>
    </View>
}

export default BackButton