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
                        [{name:'Parkiran Jatinegara', locate:'Stasiun Jatinegara, Jakarta Kota', img:'http://image.csr.id/article/2013/10/01/a9f99dfc5ede498f7724ebf0408f1cb2/headline.jpg'}
                        ,{name:'Parkiran Tanah Abang', locate:'Stasiun Tanah Abang, Jakarta Timur', img:'http://beritatrans.com/cms/wp-content/uploads/2017/09/Parkir-stasiun-bogor_8807-553x400.jpg'}
                        ,{name:'Parkiran Sebelah', locate:'Bintaro Xchange, Bintaro', img:'https://asset-a.grid.id/crop/0x0:700x420/700x465/photo/gridoto/2017/10/11/678797767.jpg'}
                        ,{name:'Parkiran Sebelahnya Laagi', locate:'Sebelah Bintaro Xchange', img:'https://2.bp.blogspot.com/-v9D2VZdrYa8/V72xZyxEghI/AAAAAAAAASA/trqIGBFKn3UAtLrblXffx28oRjlfGV64wCLcB/s1600/parkiran.jpg'}]
                    }
                    renderItem={({item})=><View>
                        <Card style={{marginLeft: '3%', marginRight: '3%', borderColor: 'blue', borderEndWidth: 2, elevation: 0}}>
                            <CardItem>
                            <Left style={{width: '100%', height: '100%', flex: 2}}>
                            <Image source={{uri: item.img}}
                                style={{width: '100%', height: '100%'}}/>
                            </Left>
                            <Body style={{flex: 3.3}}>
                            <CardItem>
                            <View>
                                <Text style={{flex: 2, marginTop: '1%', fontSize: 15, fontWeight: 'bold'}}>{item.name}</Text>
                                <View style={{flex: 1, flexDirection: 'row', marginTop: '3%'}}>
                                    <Icon name='locate' type='Ionicons' style={{fontSize: 15}}/>
                                    <Text style={{ fontSize: 12, marginLeft: -15, width: '95%'}}>{item.locate}</Text>
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