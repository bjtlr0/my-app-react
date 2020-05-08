import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Form,
    Label,
    Segment,
    Message,
} from 'semantic-ui-react'

const style = {
    base : {
        margin : '0.5rem',
        padding : '0.5rem'
    },
    paddinglr : {
        paddingLeft : '6%',
        paddingRight : '6%'
    }
};

class PersonalInput2 extends Component {
    render(){
        return(
            <div>
                <Form>
                    <Segment piled style={style.paddinglr}>
                        <Label style={style.base}>Nickname</Label>
                        <Form.Input name='nickname' placeholder='Nickname'/>

                        <Label style={style.base}>Email</Label>
                        <Form.Input name='email' placeholder='E-Mail address' fluid icon='at'/>

                        <Label style={style.base}>Password</Label>
                        <Form.Input name='password' placeholder='Password' fluid icon='lock' type='password'/>

                        <Label style={style.base}>Email Authentication</Label>
                        <div>
                            <Form.Input name='certification_number' placeholder='Certification Number' fluid icon='at'/>
                            <Message style={{fontSize:'1rem'}} content="If you don't receive our email, click 're-send' button" icon='info circle' info ></Message>
                            <Button>Sending Email</Button>
                            <Button primary>Confirm</Button>
                        </div>
                    </Segment>
                    <Button disabled={true} color='teal' fluid size='large'>Next</Button>
                </Form>
            </div>
        );
    };
}

export default PersonalInput2;