import React,{Component} from 'react';
import {Image, Text, ScrollView, FlatList, View} from 'react-native';
import {Container, Content, Card, CardItem, Icon,
    Right, Left, Body, List, Button} from 'native-base';

import Header from '../components/Header';

export default class Index extends Component{
    render(){
        return(
            <Container>
                <Header/>
                <FlatList
                    data={
                        [{key:'a'},{key:'b'},{key:'c'},{key:'d'},{key:'e'}
                        ,{key:'f'},{key:'g'}]
                    }
                    renderItem={({item})=><View>
                        <Card style={{marginLeft: '3%', marginRight: '3%', borderColor: 'blue', borderEndWidth: 2, elevation: 0}}>
                            <CardItem>
                            <Left style={{width: '100%', height: '100%', flex: 2}}>
                            <Image source={{uri: 'https://cdn-images-1.medium.com/max/1200/1*jh6bmapyE8nPWju7W_7qEw.png'}}
                                style={{width: '100%', height: '100%'}}/>
                            </Left>
                            <Body style={{flex: 3.3}}>
                            <CardItem>
                            <View>
                                <Text style={{flex: 2, marginTop: '1%', fontSize: 15, fontWeight: 'bold'}}>Stasiun</Text>
                                <View style={{flex: 1, flexDirection: 'row', marginTop: '3%'}}>
                                    <Icon name='locate' type='Ionicons' style={{fontSize: 15}}/>
                                    <Text style={{ fontSize: 12, marginLeft: -15, width: '95%'}}>Pasar Minggu, Jakarta Selatan</Text>
                                </View>
                            </View>
                            </CardItem>
                            <CardItem>
                                <Left style={{flex: 1}}><Text style={{fontSize: 11}}>4/10</Text></Left>
                                <Body style={{flex: 1}}/>
                                <Right style={{flex: 4}}><Text style={{fontSize: 12, fontWeight: 'bold'}}>DETAILS >></Text></Right>
                            </CardItem>
                            </Body>
                            </CardItem>
                        </Card>
                    </View>
                    }/>
            </Container>
        )
    }
}