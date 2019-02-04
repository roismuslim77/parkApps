import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ListView,
  PixelRatio,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Icon,
Content, Left, Body, Right} from 'native-base';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
  
const Row = (props) => (
  <View style={ styles.row }>
    <Icon style={{marginLeft: '3%', fontSize: 22, color: 'blue'}} name={props.icon} type='FontAwesome'/>
    <Text style={ styles.rowText }>
       { props.title }
    </Text>
  </View>
)
class Account extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }).cloneWithRows([
        {title:'Account', icon:'user'},
        {title:'Deals', icon:'tag'},
        {title:'Notifications', icon:'bell'},
        {title:'Help Center',icon:'question-circle'},
        {title:'Settings',icon:'cogs'},
      ])
    };
  }


  render() {
    const { onScroll = () => {} } = this.props;
    return (
      <ListView
        ref="ListView"
        style={styles.container}
        dataSource={ this.state.dataSource }
        renderRow={(rowData) => 
          // <View key={rowData} style={ styles.row }>
          //   <Text style={ styles.rowText }>
          //     { rowData }
          //   </Text>
          // </View>
          <Row {...rowData}/>
         }
        renderScrollComponent={props => (
          <ParallaxScrollView
            onScroll={onScroll}
            headerBackgroundColor="blue"
            stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
            parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
            backgroundSpeed={10}

            renderBackground={() => (
              <View key="background">
                <Image source={{uri: 'https://i.pinimg.com/originals/97/7c/2e/977c2e8c480428e79cc15cdffdda95ad.jpg',
                                width: window.width,
                                height: PARALLAX_HEADER_HEIGHT}}/>
                <View style={{position: 'absolute',
                              top: 0,
                              width: window.width,
                              backgroundColor: 'rgba(0,0,0,.4)',
                              height: PARALLAX_HEADER_HEIGHT}}/>
              </View>
            )}

            renderForeground={() => (
              <View key="parallax-header" style={ styles.parallaxHeader }>
                <Image style={ styles.avatar } source={{
                  uri: 'https://t3.ftcdn.net/jpg/01/71/05/64/240_F_171056472_EtbY5iv7f1lxLFZUHt1N68FFP09cE7LJ.jpg',
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE
                }}/>
                <Text style={ styles.sectionSpeakerText }>
                  Ahmad Muslim
                </Text>
                <Text style={ styles.sectionTitleText }>
                  muslim.a@gmail.com
                </Text>
              </View>
            )}

            renderStickyHeader={() => (
              <View key="sticky-header" style={styles.stickySection}>
                <Text style={styles.stickySectionText}>Ahmad Muslim</Text>
              </View>
            )}

            renderFixedHeader={() => (
              <View key="fixed-header" style={styles.fixedSection}>
                <Text style={styles.fixedSectionText}
                      onPress={() => this.refs.ListView.scrollTo({ x: 0, y: 0 })}>
                  Scroll to top
                </Text>
              </View>
            )}
            
          />
        )}
      />
    );
  }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 50;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: 300,
    justifyContent: 'flex-end'
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    margin: 10
  },
  fixedSection: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  fixedSectionText: {
    color: '#999',
    fontSize: 20
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100,
  },
  avatar: {
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 24,
    paddingVertical: 5
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowText: {
    fontSize: 20,
    marginLeft: '3%'
  }
});

export default Account;

//         <ParallaxScrollView
//           backgroundColor="transparent"
//           fadeOutForeground={true}
//           contentBackgroundColor="white"
//           parallaxHeaderHeight={200}
//           renderForeground={()=>(
//             <View>
//               <View style={styles.pictureProfile}>
//                   <Thumbnail 
//                     large
//                     source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSob8-nHCu-YGlNOGvYRmGjJN4aMpUouXgzqgGvc5WB06NpScg3'}}/>
//               </View>
//               <View style={styles.cardInfo}>
//                 <View style={{marginLeft: '2%', marginRight: '2%' }}>
//                       <Body style={styles.cardBody}>
//                         <Text style={{fontWeight: 'bold', fontSize: 30}}>Ahmad Muslim</Text>
//                         <Text>ahmad@gmail.com</Text>
//                       </Body>
//                 </View>
//               </View>
//             </View>
//           )}
//           renderBackground={() => (
//             <View style={styles.bgImageContainer}>
//             <Image
//               style={styles.bgImage}
//               source={{uri:'https://wp.freedomofcreation.co.uk/dandev/wp-content/uploads/sites/101/2018/06/background-design-trends.jpg'}}
//             />
//             </View>
//           )}>
//           <View style={{height: '100%'}}>
//                 <Card style={{marginLeft: '2.2%', marginRight: '2.2%'}}>
//                     <CardItem>
//                       <Icon/>
//                       <Body><Text>Notifications</Text></Body>
//                       <Right>
//                           <Icon/>
//                       </Right>
//                     </CardItem>
//                 </Card>

//                 <Card style={{marginLeft: '2.2%', marginRight: '2.2%'}}>
//                     <CardItem>
//                       <Icon/>
//                       <Body><Text>Notifications</Text></Body>
//                       <Right>
//                           <Icon/>
//                       </Right>
//                     </CardItem>
//                 </Card>

//                 <Card style={{marginLeft: '2.2%', marginRight: '2.2%'}}>
//                     <CardItem>
//                       <Icon/>
//                       <Body><Text>Notifications</Text></Body>
//                       <Right>
//                           <Icon/>
//                       </Right>
//                     </CardItem>
//                 </Card>
//                 <Card style={{marginLeft: '2.2%', marginRight: '2.2%'}}>
//                     <CardItem>
//                       <Icon/>
//                       <Body><Text>Notifications</Text></Body>
//                       <Right>
//                           <Icon/>
//                       </Right>
//                     </CardItem>
//                 </Card>
//                 <Card style={{marginLeft: '2.2%', marginRight: '2.2%'}}>
//                     <CardItem>
//                       <Icon/>
//                       <Body><Text>Notifications</Text></Body>
//                       <Right>
//                           <Icon/>
//                       </Right>
//                     </CardItem>
//                 </Card>
//                 <Card style={{marginLeft: '2.2%', marginRight: '2.2%'}}>
//                     <CardItem>
//                       <Icon/>
//                       <Body><Text>Notifications</Text></Body>
//                       <Right>
//                           <Icon/>
//                       </Right>
//                     </CardItem>
//                 </Card>
//                 <Card style={{marginLeft: '2.2%', marginRight: '2.2%'}}>
//                     <CardItem>
//                       <Icon/>
//                       <Body><Text>Notifications</Text></Body>
//                       <Right>
//                           <Icon/>
//                       </Right>
//                     </CardItem>
//                 </Card>
//                 <Card style={{marginLeft: '2.2%', marginRight: '2.2%'}}>
//                     <CardItem>
//                       <Icon/>
//                       <Body><Text>Notifications</Text></Body>
//                       <Right>
//                           <Icon/>
//                       </Right>
//                     </CardItem>
//                 </Card>
//                 <Card style={{marginLeft: '2.2%', marginRight: '2.2%'}}>
//                     <CardItem>
//                       <Icon/>
//                       <Body><Text>Notifications</Text></Body>
//                       <Right>
//                           <Icon/>
//                       </Right>
//                     </CardItem>
//                 </Card>
//                 <Card style={{marginLeft: '2.2%', marginRight: '2.2%'}}>
//                     <CardItem>
//                       <Icon/>
//                       <Body><Text>Notifications</Text></Body>
//                       <Right>
//                           <Icon/>
//                       </Right>
//                     </CardItem>
//                 </Card>
//                 <Card style={{marginLeft: '2.2%', marginRight: '2.2%'}}>
//                     <CardItem>
//                       <Icon/>
//                       <Body><Text>Notifications</Text></Body>
//                       <Right>
//                           <Icon/>
//                       </Right>
//                     </CardItem>
//                 </Card>
//             </View>
//         </ParallaxScrollView>
//       );
//     }
// }

