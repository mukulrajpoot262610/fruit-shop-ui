import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { HeartIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';

const FruitCard = ({ fruit }) => {

    const { name, price, stars, desc, shadow, image, color } = fruit;

    const [isFavourite, setIsFavourite] = useState()
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            style={{ width: 270, backgroundColor: color(1), borderRadius: 40 }}
            className="mx-5"
            onPress={() => navigation.navigate('Product', { ...fruit, color: fruit.color(1) })}
        >

            <View className="flex-row justify-end">
                <TouchableOpacity
                    onPress={() => setIsFavourite(!isFavourite)}
                    className="p-3 rounded-full mr-4 mt-4"
                    style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
                >
                    <HeartIcon size="25" color={isFavourite ? fruit.shadow : 'white'} />
                </TouchableOpacity>
            </View>

            <View className="flex-row justify-center" style={{
                shadowColor: fruit.shadow,
                shadowRadius: 40,
                shadowOffset: { width: 0, height: 50 },
                shadowOpacity: 0.6,
            }}>
                <Image source={image} style={{ width: 210, height: 210 }} />
            </View>

            <View className="ml-4 my-4">
                <Text className="font-bold text-xl text-white shadow">{fruit.name}</Text>
                <Text className="font-bold text-lg text-white shadow tracking-wide  ">$ {fruit.price}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default FruitCard