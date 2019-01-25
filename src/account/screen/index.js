import React,{Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import {Card, CardItem, Content, Container, Body,
    Thumbnail, Button} from 'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';

const widths = Dimensions.get('window').width

export default class Index extends Component{
    render(){
        return(
            <Container >
              <View style={styles.bgImageContainer}>
                  <Image
                    style={styles.bgImage}
                    source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGBZOtCdUPlCMxGtaUhOYZ9RnDgEIp8E4xOp3ZWoWXbgzdhRw-'}}
                  />
              </View>
              <View style={styles.pictureProfile}>
                  <Thumbnail 
                    large
                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSob8-nHCu-YGlNOGvYRmGjJN4aMpUouXgzqgGvc5WB06NpScg3'}}/>
              </View>
              <Content style={{marginTop: 120}}>
                <Card style={{marginLeft: '0.5%', marginRight: '0.5%'}}>
                    <CardItem>
                      <Body style={styles.cardBody}>
                        <Text style={{fontWeight: 'bold', fontSize: 35}}>Name</Text>
                        <Text>Email</Text>
                      </Body>
                    </CardItem>
                </Card>
                <Grid>
                    <Row>
                        <Col style={[styles.gridCol]}><TouchableOpacity style={{backgroundColor: 'skyblue', width: 70,height: 70, borderRadius: 10, marginLeft: '60%'}}><Text>Coll</Text></TouchableOpacity></Col>
                        <Col style={styles.gridCol}><TouchableOpacity style={{backgroundColor: 'skyblue', width: 70,height: 70, borderRadius: 10}}><Text>Coll</Text></TouchableOpacity></Col>
                        <Col style={styles.gridCol}><TouchableOpacity style={{backgroundColor: 'skyblue', width: 70,height: 70, borderRadius: 10, marginRight: '60%'}}><Text>Coll</Text></TouchableOpacity></Col>
                    </Row>
                    <Row>
                        <Col style={styles.gridCol}><TouchableOpacity style={{backgroundColor: 'skyblue', width: 70,height: 70, borderRadius: 10, marginLeft: '60%'}}><Text>Coll</Text></TouchableOpacity></Col>
                        <Col style={styles.gridCol}><TouchableOpacity style={{backgroundColor: 'skyblue', width: 70,height: 70, borderRadius: 10}}><Text>Coll</Text></TouchableOpacity></Col>
                        <Col style={styles.gridCol}><TouchableOpacity style={{backgroundColor: 'skyblue', width: 70,height: 70, borderRadius: 10, marginRight: '60%'}}><Text>Coll</Text></TouchableOpacity></Col>
                    </Row>
                    <Row>
                        <Col style={styles.gridCol}><TouchableOpacity style={{backgroundColor: 'skyblue', width: 70,height: 70, borderRadius: 10, marginLeft: '60%'}}><Text>Coll</Text></TouchableOpacity></Col>
                        <Col style={styles.gridCol}><TouchableOpacity style={{backgroundColor: 'skyblue', width: 70,height: 70, borderRadius: 10}}><Text>Coll</Text></TouchableOpacity></Col>
                        <Col style={styles.gridCol}><TouchableOpacity style={{backgroundColor: 'skyblue', width: 70,height: 70, borderRadius: 10, marginRight: '60%'}}><Text>Coll</Text></TouchableOpacity></Col>
                    </Row>
                </Grid>
              </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    gridCol:{
        marginTop: '5%',
        alignItems: 'center',
    },
    cardBody:{
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bgImage:{
        width: widths,
        height: 200
    },
    bgImageContainer:{
        position: 'absolute',
        zIndex: 0
    },
    pictureProfile: {
        paddingTop: 70,
        justifyContent: 'center',
        alignItems: 'center',
        left: 0, right: 0,
        zIndex: 1,
        position: 'absolute'
    }
})