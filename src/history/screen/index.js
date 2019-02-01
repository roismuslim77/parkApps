import React,{Component} from 'react';
import {Image, Text, ScrollView, FlatList, View} from 'react-native';
import {List, ListItem, Right, Left, Content, Body, Icon} from 'native-base';

import Header from '../components/Header';

export default class Index extends Component{
    render(){
        return(
            <View style={{backgroundColor: 'white'}}>
                <Header/>
                <View style={{marginRight: '3%', marginLeft: '3%', backgroundColor: 'blue', height: '84%'}}>
                    <FlatList
                        data={[{key: 'Parkiran Sebelah'}, {key: 'Parkiran sebelahnya lagi'}
                        , {key: 'Parkiran sebelahnya lagi'}, {key: 'Parkiran sebelahnya lagi'}
                        , {key: 'Parkiran sebelahnya lagi'}, {key: 'Parkiran sebelahnya lagi'}
                        , {key: 'Parkiran sebelahnya lagi'}, {key: 'Parkiran sebelahnya lagi'}
                        , {key: 'Parkiran sebelahnya lagi'}, {key: 'Parkiran sebelahnya lagi'}
                            ]}
                        renderItem={({item}) => <View style={{flexDirection: 'row'}}>
                            <Body style={{justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: '3%', paddingLeft: '3%'}}><Text style={{fontWeight: 'bold', color: 'white'}}>{item.key}</Text></Body>
                            <Right style={{paddingRight: '3%', paddingBottom: '3%', paddingTop: '3%'}}><Icon style={{color: 'white'}} type='Ionicons' name='more'/></Right>
                        </View>}
                    />
                </View>
            </View>
        )
    }
}