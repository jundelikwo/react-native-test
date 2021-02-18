import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

const NavBar = ({navigation, jumpTo}) => {
    const { index, routes } = navigation.state;

    return (
        <View style={styles.navbar}>
            {
                routes.map((route,elemIndex) => {
                    const {params} = route.routes[0];
                    const isActive = index === elemIndex;
                    const Icon = isActive ? params.activeLogo : params.logo;
                    
                    return(
                        <TouchableOpacity
                            transparent
                            key={route.key}
                            style={styles.button}
                            onPress={() => jumpTo(route.key)}
                        >
                            <Icon width={25} />
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#0D131B',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        height: 70
    },
    button: {
        justifyContent: 'center'
    }
});

export default NavBar;