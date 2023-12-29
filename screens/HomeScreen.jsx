import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import { Bars3CenterLeftIcon, ShoppingCartIcon } from 'react-native-heroicons/solid';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { categories, featuredFruits } from '../constants/index'
import FruitCard from '../components/FruitCard';
import FruitCardSales from '../components/FruitCardSales';

const HomeScreen = () => {

    const [activeCategory, setActiveCategory] = useState("Oranges")
    const navigation = useNavigation();

    return (
        <SafeAreaView className="flex-1 bg-orange-50">

            {/* TOPBAR */}
            <View className="navbar mx-5 flex-row justify-between items-center">
                <Bars3CenterLeftIcon size="30" color="black" />
                <TouchableOpacity onPress={() => navigation.navigate('Cart')} className="p-2 rounded-xl bg-orange-100">
                    <ShoppingCartIcon size="25" color="orange" />
                </TouchableOpacity>
            </View>

            {/* CATEGORIES */}
            <View className="mt-4">
                <Text className="ml-5 text-xl font-semibold text-foreground">
                    Seasonal
                </Text>
                <Text className="ml-5 text-3xl font-bold text-foreground">
                    Fruits and Vegetables
                </Text>

                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    className="px-5 my-4"
                >
                    {
                        categories.map((category) => <TouchableOpacity
                            key={category}
                            onPress={(e) => setActiveCategory(category)}
                            className="mr-8"
                        >
                            <Text className={`text-xl ${activeCategory === category ? "font-bold" : ""}`}>
                                {category}
                            </Text>
                            {
                                activeCategory === category && (
                                    <Text className="font-extrabold -mt-3 ml-2 text-orange-400">__ _</Text>
                                )
                            }
                        </TouchableOpacity>)
                    }
                </ScrollView>
            </View>

            {/* FRUIT CAROUSEL */}
            <View className="mt-4">
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        featuredFruits.map((fruit) => <FruitCard key={fruit.name} fruit={fruit} />)
                    }
                </ScrollView>
            </View>

            {/* HOT SALES */}

            <View className="mt-8 pl-5 space-y-1">
                <Text className="text-xl font-bold text-foreground">Hot Sales</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ overflow: 'visible' }}>
                    {
                        [...featuredFruits].reverse().map((fruit, index) => {
                            return (
                                <FruitCardSales key={index} fruit={fruit} />
                            );
                        })
                    }
                </ScrollView>

            </View>
        </SafeAreaView>
    )
}

export default HomeScreen