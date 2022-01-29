import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
// 390 844

const Styles = StyleSheet.create({
    image: {
        height: 0.474 * windowHeight,
        width: '100%',
        resizeMode: 'contain'
    },
    details: {
        paddingHorizontal: 0.038 * windowWidth,
        paddingTop: 0.023 * windowHeight
    },
    name: {
        fontSize: 0.041 * windowWidth,
        fontWeight: '400'
    },
    priceView: {
        flexDirection: 'row',
        paddingVertical: 0.006 * windowHeight
    },
    disPrice: {
        fontWeight: '600',
        paddingRight: 0.006 * windowHeight
    },
    offer: {
        paddingLeft: 0.006 * windowHeight,
        color: '#FFA500'
    },
    tax: {
        color: '#1ABC9C',
        fontWeight: '500',
        fontSize: 0.038 * windowWidth
    },
    details1a: {
        paddingTop: 0.023 * windowHeight
    },
    detailsDesc: {
        fontWeight: '600',
        fontSize: 0.038 * windowWidth,
        paddingBottom: 0.011 * windowHeight
    },
    detailsdesc1: {
        opacity: 0.5
    },
    detailsdesc2: {
        paddingVertical: 0.038 * windowWidth
    },
    endView: {
        paddingBottom: 0.035 * windowHeight
    },
    buttonView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8
    },
    container3: {
        width: '100%',
        height: 0.07 * windowHeight,
        flexDirection: 'row'
    }

})

export default Styles
