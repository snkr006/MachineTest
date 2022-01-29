import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Styles from '../../components/Home/Main/Styles';

const Header = (props) => {


    return (
        <View style={Styles.container1b}>
            <TouchableOpacity style={Styles.iconSpace}>
                <Image style={Styles.icon}
                    source={require('../../images/icons/search.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.iconSpace}>
                <Image style={Styles.icon}
                    source={require('../../images/icons/bookmark.png')} />
            </TouchableOpacity>
            <TouchableOpacity >
                <Image style={Styles.icon}
                    source={require('../../images/icons/bag.png')} />
            </TouchableOpacity>
        </View>
    );
}

export default Header