import React, {Component} from 'react'
import { View, Button, TextInput } from 'react-native'
import style from './Form.style'
import axios from 'axios'

console.ignoredYellowBox = ['Remote debugger'];


      export default class Form extends Component{

          constructor(props){
              super(props)
              this.state = {email: '', password: ''}
          }


          _handleChangeStateMail = email => this.setState({email})
          _handleChangeStatePassword = password => this.setState({password})

          getAnimalsFromApi =   () => {


              axios({
                  method: 'post',
                  url: 'https://api-test.oph74.fr/julien/login',
                  params: {
                      email: this.state.email,
                      password: this.state.password
                  }
              }) .then(function (response) {
                  console.log(response);
              })
                  .catch(function (error) {
                      console.log(error);
                  });
          }

    render(){


        const {email} = this.state.email
        const {password} = this.state.password
        return(


            <View style={style.form}>

                <TextInput style = {style.login}
                    onChangeText = {this._handleChangeStateMail}
                    value = {email}
                    placeholder = 'Adresse email'
                />
                <TextInput style = {style.login}
                    onChangeText = {this._handleChangeStatePassword}
                    value = {password}
                    placeholder = 'Mot de passe'
                />
                <Button title ='Login' onPress = {this.getAnimalsFromApi}/>
            </View>


        )
    }
        }