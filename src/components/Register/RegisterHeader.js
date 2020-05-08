import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Container,
    Step,
} from 'semantic-ui-react'

const style = {
    h1 : {
        marginTop : '3em',
    },
    h2 : {
        margin : '4em 0em 2em',
    },
    h3 : {
        marginTop : '0.5em',
        padding : '2em 0em',
    },
    list : {
        marginBottom : '300px',
    },
    comp : {
        margin : '0.5rem',
        padding : '0.5rem',
    },
    base : {
        marginBottom : '2rem',
    }
}

class RegisterHeader extends Component {
    render(){
        const { number, onClickHome } = this.props;
        /* this.props??
        * props는 부모 컴포넌트가 자식 컴포넌트에게 주는 값을 지칭한다.
        * 부모가 넘겨준 props의 값은 this 키워드를 통해 받아올 수 있다.
        * 자식 컴포넌트는 props의 값을 직접 수정할 수 없다.
        */
        const prior = (number > 1) ? '/signup/' + (number - 1) : '/';

        return(
            <div>
                <Container style={style.h3}>
                    {/**
                     * number값을 받아서 뒤로가기 링크를 구현한다.
                     */}
                    { number !== '4' && 
                        <Link to={prior}>
                            <Button Onclick={onClickHome} content='Back' icon='arrow alternate circle left outline' labelPosition='left'/>
                        </Link>
                    }
                    <h1>Join This Site</h1>
                    wdprogrammer.tistory.com의 react 예제를 따라 작성하고 있는 react페이지입니다.
                </Container>
                <Container style={style.base}>
                    <Step.Group fluid>
                    {/**
                     * 부모(상위 컴포넌트 : 페이지 컴포넌트)가 전달해 준 number 값에 따라서 Step UI가 변경된다. 
                     * 
                     */}
                        {   (number === '1' || number === undefined) ? 
                            ( <Step active icon='address card' title='Step 1 : ' description='Create personal account'/>) : 
                            ( <Step disabled icon='address card' title='Step 1 : ' description='Create personal account'/>)
                        }
                        {   number === '2' ?
                            ( <Step active icon='clipboard outline' title='Step 2 : ' description='Enter your detail information'/>) :
                            ( <Step disabled icon='Clipboard outline' title='Step 2 : ' description='Enter your detail information'/>)
                        }
                        {   number === '3' ?
                            ( <Step active icon='tasks' title='Step 3 : ' description='Enter your experience'/>) :
                            ( <Step disabled icon='tasks' title='Step 3 : ' description='Enter your experience'/>)
                        }
                    </Step.Group>
                </Container>
            </div>
        );
    };
}

export default RegisterHeader;