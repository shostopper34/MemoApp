import { View, StyleSheet } from 'react-native'
// import { Feather } from '@expo/vector-icons'
import { router, useNavigation } from 'expo-router'
import { useEffect } from 'react'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import LogoutButton from '../../components/LogoutButton'

const handlePress = (): void => {
    router.push('/memo/create')
}
const List = (): JSX.Element => {
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => { return <LogoutButton /> }
        })
    }, [])
    return (
        <View style={styles.container}>
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />

            </View>
            <CircleButton onPress={handlePress}>
                <Icon name='plus' size={40} color='#ffffff' />
                {/* <Feather name='plus' size={24} /> */}
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
})

export default List
