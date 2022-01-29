import React, { useState, useEffect, useContext, useRef } from 'react';
import { Text, View, Dimensions, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Styles1 from '../Main/Styles';
import Styles from './Styles';
import Header from '../../../globals/Components/Header';
import Constant from '../../../globals/Data/Constant'

const Product = (props) => {


    return (
        <View style={Styles1.basecontainer}>
            <View style={Styles1.container1}>
                <View style={Styles1.container1a}>
                    <TouchableOpacity style={Styles1.iconSpace} onPress={() => props.navigation.goBack()}>
                        <Image style={Styles1.icon}
                            source={require('../../../images/icons/Back.png')} />
                    </TouchableOpacity>
                    <View >
                        <Text style={Styles.categoryName}>
                            Men
                        </Text>
                    </View>
                </View>
                <Header />
            </View>

            <FlatList
                numColumns={2}
                style={Styles1.basecontainer}
                data={Constant.products}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={{
                            flex: 1,
                            // paddingRight: index % 2 == 0 ? 1 : 0
                        }}
                            onPress={() => props.navigation.navigate('Details', { data: item })}>

                            <View>
                                <ImageBackground style={Styles.image}
                                    // resizeMethod='resize'
                                    resizeMode='cover'
                                    source={item.image}>

                          
                                {/* <View style={{ position: 'absolute', bottom: 0 }}> */}
                                    <View
                                        // style={{
                                        //     flex: 1,
                                        //     justifyContent: 'flex-end',
                                        //     paddingBottom: 10,
                                        //     paddingLeft: 10
                                        // }}
                                    style={Styles.ratingView}
                                    >
                                        <View style={Styles.ratingview1}>
                                            <View style={Styles.ratingView2}>
                                                <Text style={Styles.rating}>
                                                    {item.rating}
                                                </Text>
                                                <Image style={Styles.star}
                                                    source={require('../../../images/icons/star.png')} />
                                                <Text style={Styles.seperator}>
                                                    |
                                                </Text>
                                                <Text style={Styles.noofRating}>
                                                    {item.noofRating}k
                                                </Text>
                                            </View>
                                            <View style={Styles.ratingView3} />
                                        </View>

                                    </View>
                                    </ImageBackground>
                                {/* </View> */}
                            </View>

                            <View style={Styles.desc}>
                                <View style={Styles1.basecontainer}>
                                    <Text style={Styles.name}>{item.name}</Text>
                                    <Text style={Styles.category}>{item.category}</Text>
                                    <View style={Styles.desc1}>
                                        <Text style={Styles.rs}>₹ </Text>
                                        <Text style={Styles.disprice}>{item.disPrice}</Text>
                                        <Text style={Styles.price}>₹ {item.price}</Text>
                                        <Text style={Styles.offer}>({item.offer}% OFF)</Text>
                                    </View>
                                </View>
                                <View>
                                    <Image style={Styles1.icon}
                                        source={require('../../../images/icons/heart.png')} />
                                </View>
                            </View>

                        </TouchableOpacity>
                    )
                }}
            />
            <View style={Styles.container3}>
                <View style={Styles.container3a}>
                    <TouchableOpacity>
                        <Text style={Styles.containerText}>SORT</Text>
                    </TouchableOpacity>
                </View>
                <View style={Styles.container3a}>
                    <TouchableOpacity>
                        <Text style={Styles.containerText}>FILTER</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

export default Product