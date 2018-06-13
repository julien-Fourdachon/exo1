import React, {Component} from 'react'
import GenerateForm from 'react-native-form-builder'
import { View, Button, Text } from 'native-base'
import style from './Form.style'


//Création des champs du formulaire
const fields = [
    {
        type: 'email',
        name: 'email',
        required: true,
        icon: 'ios-person',
        label: 'Adresse e-mail'
    },
    {
        type: 'password',
        name: 'password',
        required: true,
        icon: 'ios-lock',
        label: "Mot de passe"
    }
]

export default class Form extends Component {

    login() {
        const formValues = this.form.getValues();
        console.log (formValues);
    }

    render(){
        return (
            <View style ={style.form}>
                <View>
                    <GenerateForm ref={(c) => {
                        this.form = c;
                    }}
                    fields  = {fields}
                    />
                </View>
                <View>
                    <Button style = {style.login} onPress = {() => this.login()}>
                        <Text>Login</Text>
                    </Button>
                </View>
            </View>
        )
    }

}