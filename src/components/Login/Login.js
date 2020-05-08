import React, { Component } from 'react';
import logo from '../../image/logo.png';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

class Login extends Component {
    render(){
        return(
            <div className='login-form'>
                {/*
                
                */}
                <style>
                    {`
                        body > div,
                        body > div > div,
                        body > div > div > div.login-form {
                            height: 100%;
                        }
                    `}
                </style>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            <Image src={logo} />
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                                <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'/>

                                <Button color='teal' fluid size='large'>Login</Button>
                            </Segment>
                        </Form>
                        <Message>
                            Join or Create your Project<br />
                            <Link to="/signup">Sign Up</Link> {/* signup은 App.js에 Route설정을 통해 경로가 지정되어 있다. */}
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default Login;