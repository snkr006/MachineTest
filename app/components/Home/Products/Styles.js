import { StyleSheet, Dimensions,Platform } from 'react-native';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
// 390 844

const Styles = StyleSheet.create({
    categoryName: {
        fontSize: 0.046 * windowWidth,
        fontWeight: '600'
    },
    image: {
        height: 0.308 * windowHeight,
        width: '100%'
    },
    ratingView: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 0.011 * windowHeight,
        paddingLeft: 0.011 * windowHeight
    },
    ratingview1: {
        height: 0.023 * windowHeight,
        flexDirection: 'row'
    },
    ratingView2: {
        paddingHorizontal: 0.0128 * windowWidth,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'white'
    },
    rating: {
        fontSize: 0.03 * windowWidth,
        paddingRight: 0.01 * windowWidth
    },
    star: {
        height: 0.011 * windowHeight,
        width: 0.011 * windowHeight,
        resizeMode: 'contain'
    },
    seperator: {
        paddingHorizontal: 0.0128 * windowWidth
    },
    noofRating: {
        fontSize: 0.03 * windowWidth,
        paddingRight: 0.0128 * windowWidth
    },
    ratingView3: {
        flex: 1
    },
    desc: {
        flexDirection: 'row',
        paddingTop: 0.0128 * windowWidth,
        paddingBottom: 0.011 * windowHeight,
        paddingHorizontal: 0.0128 * windowWidth
    },
    name: {
        fontWeight: '700'
    },
    category: {
        opacity: 0.5,
        fontSize: 0.03 * windowWidth
    },
    desc1: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 0.01 * windowWidth
    },
    rs: {
        opacity: 0.7
    },
    disprice: {
        fontWeight: '500',
        paddingRight: 0.0128 * windowWidth
    },
    price: {
        opacity: 0.5,
        textDecorationLine: 'line-through'
    },
    offer: {
        paddingLeft: 0.0128 * windowWidth,
        color: '#FFA500',
        fontSize: 0.03 * windowWidth
    },
    container3: {
        width: '100%',
        height: 0.06 * windowHeight,
        flexDirection: 'row',
        ...Platform.select({
            ios: {
                shadowColor: "#00000029",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
            },
            android: {
                elevation: 3

            },
        })
    },
    container3a: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerText:{
        fontWeight:'600'
    }

})

export default Styles