import React, { useState, useEffect, FC } from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons'
import ToggleSwitch from 'toggle-switch-react-native'

const { width } = Dimensions.get('window')

type props = {
    data: any;
    onEnabled: (data: any, val: boolean) => void
    onPress: (data: any) => void
}

const CardOption: FC<props> = ({ data, onEnabled, onPress }) => {
    const [on, setOn] = useState<boolean>(false)
    const { colors } = useTheme();
    const handleToggle = () => {
        onEnabled(data, !on)
        setOn(!on)
    }

    useEffect(() => {
        if (data.value !== undefined)
            setOn(data.value)
    }, [data])

    return <View style={{ width: '100%', paddingVertical: 20, paddingHorizontal: 20, backgroundColor: colors.label }}>
        <View style={{ alignItems: 'center', width: '100%', flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => onPress(data)} style={{ alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ backgroundColor: colors.background, width: 30, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                    <IonIcon name={data.icon} size={15} color={colors.label} />
                </View>
                <View style={{ marginLeft: 10 }}>
                    <Text>{data.title}</Text>
                    <Text style={{ color: 'grey', fontSize: 12 }}>{data.info}</Text>
                </View>
            </TouchableOpacity>
            {data.switch && <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <ToggleSwitch
                    isOn={on}
                    onColor={colors.primary}
                    offColor={colors.lightGrey}
                    labelStyle={{ color: "black", fontWeight: "900" }}
                    size="samll"
                    onToggle={handleToggle}
                />
            </View>}
        </View>
    </View>
}

export default CardOption

export const CardContainer: FC = () => {

    const { colors } = useTheme();

    return <View style={{ width: width, borderTopLeftRadius: 15, borderTopRightRadius: 15, backgroundColor: colors.label, marginTop: -150, zIndex: 0, height: 160, paddingHorizontal: 20 }} />
}