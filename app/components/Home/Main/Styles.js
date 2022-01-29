import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
// 390 844

const Styles = StyleSheet.create({
    basecontainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    container1: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.2)',
        height: 0.088 * windowHeight,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent:'center',
        paddingBottom: 0.011 * windowHeight,
        paddingHorizontal: 0.017 * windowHeight
    },
    container1a: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    container1b: {
        flex: 1,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    icon: {
        tintColor: 'black',
        height: 0.023 * windowHeight,
        width: 0.023 * windowHeight,
        resizeMode: 'contain'
    },
    logo: {
        height: 0.0355 * windowHeight,
        width: 0.0355 * windowHeight,
        resizeMode: 'contain'
    },
    iconSpace: {
        marginRight: 0.023 * windowHeight
    },
    verticalSpace: {
        paddingVertical: 0.011 * windowHeight
    },
    categoryImage: {
        height: 0.083 * windowHeight,
        width: 0.083 * windowHeight,
        resizeMode: 'contain'
    },
    flatlist: {
        flex: 1,
        paddingTop: 0.011 * windowHeight
    },
    touchableSpace: {
        marginBottom: 0.006 * windowHeight
    },
    bannerImage: {
        height: 0.296 * windowHeight,
        width: '100%',
        resizeMode: 'cover'
    }

})

export default Styles