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

/** 
* 
올바르게 입력된 아이디인가 => handleChange할 때 사용할 수 없는 문자열이 들어오면 Input의 style을 변경한다.
이메일 주소 형식 확인 => 입력된 email 형식을 정규표현식으로 체크한다.
입력한 비밀번호 일치 확인 => password Confirm을 위한 password Input을 하나 더 추가한다.
이메일 인증 기능 => 입력된 email주소로 메일을 발송해야 한다.
 * 
 */




 // PersonalInput의 부모 컴포넌트는 pages/Signup.js이다.
 // input의 값은 SignUp으로 전달되는게 맞겠지?
class PersonalInput extends Component {
    state = {
        nickname : '', // nickname의 state가 변경될 때 발생할 이벤트를 바인딩 해야 한다.
        nicknameError : false,
        email : '',
        emailValid : false,
        password : '',
        passwordValid : false,
        certification_number : ''
    }

    // handlerChange는 임의 함수명이다.
    // 이 함수는 Form.Input의 onChange함수의 구현체가 된다.
    nicknameChange = (e) => {
        // 공통사항이고.
        this.setState({
            [e.target.name] : e.target.value,
        });
        // 여기서 this.state.nickname.length를 사용하면 e.target.value.length와 다른 값을 가지게 된다. 반영이 늦다고 하는게 맞는건가?? 암튼 e.target.value.length를 사용하면
        // 원하는대로 동작을 하지 않는당.... 
        if (e.target.value.length > 2 || e.target.value.length == 0){
            this.setState({
                nicknameError : false
            });
        }else {
            this.setState({
                nicknameError : {
                    content : 'nickname must be longer then 2 characters'
                }
            });
        }
    }

    handleConfirmEmail = () => {
        // email을 통해 받은 인증값을 받아와서 체크해야 한다.
        const certNumber = this.state.certification_number;
        
        // certNumber를 검증하는 구간이 필요하겠지?
        if (certNumber != null){
            console.log(certNumber);
        }
    }

    render(){
        // function은 render의 내부에 존재해야 한다. 혹은 class의 상부에 존재해야 한다.
        // 조건부 렌더링에 사용하는 방법이다.
        // 예제용으로 냅둔다.
        function MessageBox(props) {
            const isValid = props.isValid;
            if (!isValid){
                return <Message content='is unvalid' />
            }else{
                return '';
            }
        }

        return(
            <div>
                <Form>
                    <Segment piled style={style.paddinglr}>
                        <Label style={style.base}>Nickname</Label>
                        <Form.Input name='nickname' placeholder='Nickname' value={this.state.nickname} onChange={this.nicknameChange} error={this.state.nicknameError}/>

                        {/** function으로 선언한 MessageBox라는 컴포넌트를 이용하는 방법 */}
                        <MessageBox isValid={this.state.nicknameValid}></MessageBox>
                        
                        <Label style={style.base}>Email</Label>
                        <Form.Input name='email' placeholder='E-Mail address' fluid icon='at' value={this.state.email} onChange={this.handleChange} />

                        <Label style={style.base}>Password</Label>
                        <Form.Input name='password' placeholder='Password' fluid icon='lock' type='password' value={this.state.password} onChange={this.handleChange}/>

                        <Label style={style.base}>Email Authentication</Label>
                        <div>
                            <Form.Input name='certification_number' placeholder='Certification Number' fluid icon='at' value={this.state.certification_number} onChange={this.handleChange}/> {/** email이 인증이 성공됐는지 확인하기 위한 함수를 등록한다. */}
                            <Message style={{fontSize:'1rem'}} content="If you don't receive our email, click 're-send' button" icon='info circle' info ></Message>
                            <Button>Sending Email</Button>
                                <Button primary onClick={this.handleConfirmEmail}>Confirm</Button>
                        </div>
                    </Segment>
                    
                    {/**Link를 Button의 disabled 속성을 확인하여 disabled할 수 있는 방법이 있을까? */}
                    <Link to="/signup/2">
                        <Button disabled={true} color='teal' fluid size='large'>Next</Button>
                    </Link>
                </Form>
            </div>
        );
    };
}

export default PersonalInput;