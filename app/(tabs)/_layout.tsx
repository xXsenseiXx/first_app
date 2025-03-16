import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native';

const TabIcon = ({ focused, icon, title}) => {
    if (focused) {
        return(
            <ImageBackground 
                source={images.highlight}
                className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4
                justify-center items-center rounded-full overflow-hidden"
            >
                <Image source={icon} tintColor="#151312" className="size-5" />
                <Text className="ml-2 text-base text-secondary font-semibolt">{title}</Text>
            </ImageBackground>
        )
    }
    else {
        return (
        <View className='items-center justify-center mt-4 overflow-hidden rounded-full'>
            <Image source={icon} tintColor="#A8B5DB" className="size-5" />
        </View>)
    }
}

const Layouts = () => {
    return (
        <Tabs 
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                tabBarStyle : {
                    backgroundColor: '#0F0D23',
                    borderRadius: 50,
                    marginHorizontal: 20,
                    marginBottom: 36,
                    height: 52,
                    position: 'absolute',
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: '#0F0D23',
                }

            }}
        >
            <Tabs.Screen 
                name="index"
                options={{ 
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => ( 
                            <TabIcon 
                                focused={focused}
                                icon={icons.home}
                                title="Home"
                            />
                    )
                }}
            />
            <Tabs.Screen 
                name="search"
                options={{ title: 'Search',
                headerShown: false,
                tabBarIcon: ({ focused }) => ( 
                <TabIcon 
                    focused={focused}
                    icon={icons.search}
                    title="Search"
                />
            )
            }}
            />
            <Tabs.Screen 
                name="saved"
                options={{ title: 'Saved',
                headerShown: false,
                tabBarIcon: ({ focused }) => ( 
                    <TabIcon 
                        focused={focused}
                        icon={icons.save}
                        title="Saved"
                    />
                )    
            }}
            />
            <Tabs.Screen 
                name="profile"
                options={{ title: 'profile',
                headerShown: false,
                tabBarIcon: ({ focused }) => ( 
                    <TabIcon 
                        focused={focused}
                        icon={icons.person}
                        title="profile"
                    />
                )
            }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({})

export default Layouts;