import React, { useState } from 'react'
import { TouchableOpacity, View, Image, Text } from 'react-native'

import { styles } from './styles'

interface Props {
    checked?: boolean,
    url: string
}

const imageOriginCheker = (urlToCheck: string): string => {
    const protocol = urlToCheck.slice(0, 4)
    
    if (protocol === 'http'){
        return 'external'
    }

    return 'internal'
}

export const PhotoContainer = ({ checked = false, url }: Props) => {
    const [isCheked, setChecked] = useState<boolean>(false)

    return (
        <TouchableOpacity style={[styles.photoContainer]}
            activeOpacity={1}
            onLongPress={
                () => setChecked(!isCheked)
            }
        >
            <Image 
                source={{
                    uri: imageOriginCheker(url) === 'external' ? url : require('../../assets/images/' + url)
                }}
                style={
                    [styles.photo, !isCheked ? null : {opacity: 0.8}]
                }
            />
        
            <View style={[ isCheked === false ? null : styles.check ]}/>

        </TouchableOpacity>
    )
}


