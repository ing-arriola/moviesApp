import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Cast } from '../interfaces/credits'

interface Props {
    actor:Cast
}

const CastMember = ({actor}:Props) => {
    const uri =`https://image.tmdb.org/t/p/w500${actor.profile_path}`
    return (
        <View style={styles.container} >
            {
                actor.profile_path && (
                    <Image
                        source={{uri}}
                        style={{width:50,height:50,borderRadius:5}}
                    />
                )
            }
            <View>
                <Text style={{fontWeight:'bold',fontSize:18}} >
                    {actor.name}
                </Text>
                <Text style={{opacity:0.8,fontSize:16}} >
                    {actor.character}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderRadius:5,
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 7,
        elevation: 7,
        borderBottomEndRadius:25,
        borderBottomStartRadius:25,
        marginBottom:20
    }
});

export default CastMember
