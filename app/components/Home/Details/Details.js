import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Styles1 from '../Main/Styles';
import Styles2 from '../Products/Styles';
import Header from '../../../globals/Components/Header';
import Styles from './Styles';

const Details = (props) => {

    var product = props.route.params.data

    return (
        <View style={Styles1.basecontainer}>
            <View style={Styles1.container1}>
                <View style={Styles1.container1a}>
                    <TouchableOpacity style={Styles1.iconSpace} onPress={() => props.navigation.goBack()}>
                        <Image style={Styles1.icon}
                            source={require('../../../images/icons/Back.png')} />
                    </TouchableOpacity>
                    <View >
                        <Text style={Styles2.categoryName}>
                            {product.name}
                        </Text>
                    </View>
                </View>
                <Header />
            </View>
            <View style={Styles1.basecontainer}>
                <ScrollView >
                    <Image style={Styles.image} source={require('../../../images/icons/shirt1.webp')}></Image>

                    <View style={Styles.details}>
                        <Text style={Styles.name}>
                            Roadster Men Black & Grey Checked Casual Sustainable Shirt
                        </Text>
                        <View style={Styles.priceView}>
                            <Text>₹ </Text>
                            <Text style={Styles.disPrice}>{product.disPrice}</Text>
                            <Text style={Styles2.price}>₹ {product.price}</Text>
                            <Text style={Styles.offer}>({product.offer}% OFF)</Text>
                        </View>

                        <Text style={Styles.tax}>
                            inclusive of all taxes
                        </Text>

                        <View style={Styles.details1a}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={Styles1.icon} source={require('../../../images/icons/return.png')}></Image>
                                <Text style={[Styles.detailsDesc, { paddingLeft: 5 }]}>
                                    Easy 30 days returns and exchange
                                </Text>
                            </View>
                            <Text style={Styles.detailsdesc1}>
                                Choose to return or exchange for a different size (if available) within 30 days.
                            </Text>
                        </View>

                        <View style={Styles.details1a}>
                            <Text style={Styles.detailsDesc}>
                                Best Price: <Text style={{ color: '#F53E6B' }}>$ 459</Text>
                            </Text>
                            <Text style={Styles.detailsdesc1}>
                                Applicable on: Orders above Rs. 1299{'\n'}
                                Coupon code: EPIC150{'\n'}
                                Coupon Discount: Rs. 60 off(check cart for final savings)
                            </Text>
                            <Text style={[Styles.detailsDesc, { paddingTop: 15 }]}>
                                Get additional offer
                            </Text>
                            <Text style={Styles.detailsdesc1}>
                                Buy this style and unlock additional 10% off upto $50 on a selected catalogue.
                            </Text>
                        </View>

                        <View style={Styles.details1a}>
                            <Text style={Styles.detailsDesc}>
                                10% Instant Savings on Citi Credit and Debit Cards
                            </Text>
                            <Text style={Styles.detailsdesc1}>
                                Min spend Rs 3,0000; Max discount Rs 1,000. TCA
                            </Text>
                            <Text style={[Styles.detailsDesc, { paddingTop: 15 }]}>
                                EMI option available
                            </Text>
                            <Text style={Styles.detailsdesc1}>
                                EMI starting from Rs.25/month
                            </Text>
                        </View>

                        <View style={[Styles.details1a, Styles.endView]}>
                            <Text style={Styles.detailsDesc}>
                                Product Details
                            </Text>
                            <Text style={Styles.detailsdesc1}>
                                Black and grey checked casual shirt, has a spread collar, a full button placket, long sleeves with roll-up tabs, a patch pocket, a curved hem
                            </Text>
                            <Text style={[Styles.detailsDesc, { paddingTop: 15 }]}>
                                Model Size & Fit
                            </Text>
                            <Text style={Styles.detailsdesc1}>
                                The model (height 6' and shoulders 18") is wearing a size 40
                            </Text>
                            <Text style={[Styles.detailsDesc, { paddingTop: 15 }]}>
                                Material & Care
                            </Text>
                            <Text style={Styles.detailsdesc1}>
                                Cotton{'\n'}
                                Machine-wash
                            </Text>
                        </View>

                    </View>


                </ScrollView>

            </View>
            <View style={Styles.container3}>
                <View style={Styles2.container3a}>
                    <TouchableOpacity style={[Styles.buttonView, { borderWidth: 0.2 }]}>
                        <Image style={Styles1.icon} source={require('../../../images/icons/heart.png')}></Image>
                        <Text style={[Styles2.containerText, { paddingLeft: 5 }]}>WISHLIST</Text>
                    </TouchableOpacity>
                </View>
                <View style={Styles2.container3a}>
                    <TouchableOpacity style={[Styles.buttonView, { backgroundColor: '#F53E6B' }]}>
                        <Image style={[Styles1.icon, { tintColor: 'white' }]} source={require('../../../images/icons/bag.png')}></Image>
                        <Text style={[Styles2.containerText, { paddingLeft: 5, color: 'white' }]}>ADD TO BAG</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

export default Details