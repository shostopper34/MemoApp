import { View, StyleSheet } from 'react-native'
// import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const List = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />

            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />

            </View>
            <CircleButton>
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
