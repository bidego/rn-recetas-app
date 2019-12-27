import React from 'react';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const MenuButton = props => {
    return (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='ios-menu' onPress={() =>{
                props.navigation.toggleDrawer();
            }} />
        </HeaderButtons>);
}

export default MenuButton;