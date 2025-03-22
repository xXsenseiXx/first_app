import MovieCard from '@/components/movieCard';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { fetchMovies } from '@/services/api';
import useFetch from '@/services/useFetch';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';

const Search = () => {
    const router = useRouter();

    const { 
        data: movies,
        loading: moviesLoading,
        error: moviesError
        } = useFetch(() => fetchMovies({
        query:'',
    }))
    
    return (
        <View className='flex-1 bg-primary'>
            <Image source={images.bg} className='absolute z-0 flex-1 w-full' resizeMode='cover'/>
            
            <FlatList data={movies} renderItem={({item}) => (
                <MovieCard {...item} />)}
                keyExtractor={(item) => item.id.toString()}
                className='px-5'
                numColumns={3}
                columnWrapperStyle={{
                    justifyContent:'center',
                    gap: 16,
                    marginVertical: 16,
                }}
                contentContainerStyle={{ paddingBottom:100}}
                ListHeaderComponent={
                    <>
                        <View className='flex-row justify-center w-full mt-10'>
                            <Image source={icons.logo} className='w-12 h-10' />
                        </View>
                    </>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Search;
