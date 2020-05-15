import React, {Component} from 'react';
import { PersonalInput } from '../components/Register';
import { DevelopInput } from '../components/Register';
import { ExperienceInput } from '../components/Register';
import { CompleteRegister } from '../components/Register';
import { RegisterHeader } from '../components/Register';
import {
    Container,
} from 'semantic-ui-react'

class Signup extends Component{
    render(){
        const { match } = this.props;
        const number = match.params.number;
        return(
            <div>
                <RegisterHeader number={number}/>
                <Container style={{marginBottom : '2rem'}}>
                    {/* render시에 javascript에서 parameter에 따라서 다른 페이지를 rendering한다. 
                    * React의 특징을 설명하는 구문이라고 할 수 있다.
                    */}
                    { (number === '1' || number === undefined) && <PersonalInput />}
                    { (number === '2') && <DevelopInput />}
                    { (number === '3') && <ExperienceInput />}
                    { (number === '4') && <CompleteRegister />}
                </Container>
            </div>
        )
    }
};

export default Signup;