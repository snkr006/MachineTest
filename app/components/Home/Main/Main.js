import React from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import Styles from './Styles';
import Constant from '../../../globals/Data/Constant'
import Header from '../../../globals/Components/Header';

const Main = (props) => {


    const HeaderComp = () => {
        return (
            <View style={Styles.verticalSpace}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={Constant.category}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity onPress={() => props.navigation.navigate('Product')}>
                                <Image style={Styles.categoryImage} source={item.icon}></Image>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        )
    }


    return (
        <View style={Styles.basecontainer}>

            <View style={Styles.container1}>
                <View style={Styles.container1a}>
                    <TouchableOpacity style={Styles.iconSpace}>
                        <Image style={Styles.icon}
                            source={require('../../../images/icons/Menubar.png')} />
                    </TouchableOpacity>
                    <View >
                        <Image style={Styles.logo}
                            source={require('../../../images/icons/logo.png')} />
                    </View>
                </View>
                <Header />
            </View>
            <View style={Styles.basecontainer}>


                <View style={Styles.flatlist}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={Constant.banners}
                        keyExtractor={(item, index) => index.toString()}
                        ListHeaderComponent={HeaderComp}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={Styles.touchableSpace} onPress={() => props.navigation.navigate('Product')}>
                                    <Image style={Styles.bannerImage} source={item.banner}></Image>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>

            </View>
        </View>
    );
}

export default Main