import React, {Component} from 'react';
import {Text, Image} from 'react-native';
import {Header as Headers, Left, Right,
    Item, Icon} from 'native-base';

export default class Header extends Component{
    render(){
        return(
            <Headers transparent searchBar rounded>
                <Item style={{backgroundColor: 'blue'}}>
                <Left style={{marginLeft: '3%'}}>
                    <Image style={{height: 20, width: 80}} source={{uri: 'https://fontmeme.com/permalink/190109/e013f808a451c866d11547d441ff8aa1.png'}}/>
                </Left>
                <Right style={{marginRight: '3%'}}>
                    <Icon style={{color: 'white',fontSize: 25}} type='FontAwesome' name="history" />
                </Right>
                </Item>
            </Headers>
        )
    }
}