import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import {Segment, Button, Content, SegmentedControlIOS} from 'native-base';
import {connect} from 'react-redux';
import uuidv1 from 'uuid';
import TextInput from '../components/TextInput';
import RegisterPage from './RegisterPage';


class Add extends Component {
  constructor(props) {
    super(props);
    this.firstpage=this.firstpage.bind(this);
    this.secondpage=this.secondpage.bind(this);
    this.state = {
      page:1,
      firstpageactive:true,
      secondpageactive:false,
      borderColor1: 'white',
      borderColor2: 'transparent', 
    } ;
  }
    
  addTest = (value) => {
    if ((value.email==='admin')&&(value.password==='admin123')){
        this.props.navigation.navigate('HomeRoot')
    }else{
        alert('email/password salah')
    }
  }

  loginSegment(){
    return(
      <View>    
      <Field 
        name='email'
        component={TextInput}
        icon = 'https://png.icons8.com/message/ultraviolet/50/3498db'
        placeholder='Email' />
      <Field 
        name='password'
        component={TextInput}
        icon = 'https://png.icons8.com/message/ultraviolet/50/3498db'
        placeholder='Password' />
      <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.props.handleSubmit(this.addTest)}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      </View>
    )
  }
  registerSegment(){
    return(
      <RegisterPage/>
    )
  }

  render(){
    const page = this.state.page ;
    let shows = null;
    if (page == 1 ){
      shows = this.loginSegment()
    }else if (page == 2) {
      shows = this.registerSegment()
    }
    
    return(
      <View style={styles.container}>
       
        {/* <View>
        <Image style={{height: 30, width: 130, marginBottom: '12%'}} 
          source={{uri: 'https://fontmeme.com/permalink/190109/e013f808a451c866d11547d441ff8aa1.png'}}/>
        </View>
        <Field 
          name='email'
          component={TextInput}
          icon = 'https://png.icons8.com/message/ultraviolet/50/3498db'
          placeholder='Email' />
        <Field 
          name='password'
          component={TextInput}
          icon = 'https://png.icons8.com/message/ultraviolet/50/3498db'
          placeholder='Password' />
        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.props.handleSubmit(this.addTest)}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity> */}

        <View style={{ height: '10%', alignItems: 'center', flex: 1, justifyContent: 'flex-end'}}>
        <Image style={{height: 30, width: 130, paddingTop: 0}} 
          source={{uri: 'https://fontmeme.com/permalink/190109/e013f808a451c866d11547d441ff8aa1.png'}}/>
        </View>
        <View style={{width: '100%', flex: 5, justifyContent: 'flex-start', position: 'relative', alignItems: 'center'}}>
        <Segment style={[styles.container,{marginTop: 0}]}>
          <Button style={[styles.buttonSegment1,{borderBottomColor: this.state.borderColor1}]}  active={this.state.firstpageactive}
            onPress= {this.firstpage}><Text style={{color: 'white', fontWeight: 'bold'}}>LOGIN</Text></Button>
          <Button style={[styles.buttonSegment2,{borderBottomColor: this.state.borderColor2}]}
            onPress= {this.secondpage}><Text style={{color: 'white', fontWeight: 'bold'}}>REGISTER</Text></Button>
        </Segment>
        <Content style={styles.contenStyle}>
          {shows}
         </Content>
        </View>
      </View>
    )
  }
  firstpage(){
    this.setState({
      page:1,
    firstpageactive:true,
    borderColor1: 'white',
    borderColor2: 'transparent',
  secondpageactive:false})
    }
  
    secondpage(){
      this.setState({page:2,
      firstpageactive:false,
      borderColor1: 'transparent',
      borderColor2: 'white',
    secondpageactive:true})
    }
}


export default reduxForm({
  form: 'login'
})(connect()(Add));

const styles = StyleSheet.create({
    contenStyle:{
        marginTop: '-30%',
    },
    buttonSegment1: {
        flex:1, 
        marginLeft: '5%', 
        borderColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    buttonSegment2:{
        flex:1, 
        marginRight: '5%', 
        borderColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold'
    },
    buttonContainer: {
      height:35,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:300,
      borderRadius:30,
    },
})