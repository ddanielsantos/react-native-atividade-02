import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

import { PhotoContainer } from '../../components/Photos'

export const Home = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Galeria de Imagens do Daniel Santos
                </Text>
                <Text style={styles.subtitle}>
                    Tema: Filmes
                </Text>
            </View>

            <View style={styles.photosArea}>
                <PhotoContainer url='i01.jpg'/>
                <PhotoContainer url='i02.jpg'/>
                <PhotoContainer url='i03.jpg'/>
                <PhotoContainer url='i04.jpg'/>
                <PhotoContainer url='i05.jpg'/>
                <PhotoContainer url='i06.jpg'/>
                <PhotoContainer url='https://www.justwatch.com/images/backdrop/239184660/s640/anjos-caidos'/>
            </View>
        </View>
    )
}