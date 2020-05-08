import React from 'react';
import Login from '../components/Login/Login';
import {Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment} from 'semantic-ui-react';
import logo from '../image/logo.png';
import footerLogo from '../image/footer_logo.png';

// const Home = () => ( // 빈 함수를 생성할 때는 => 를 사용한다.
//     <div>
//         <Login/>
//     </div>
// );

const FixedMenuLayout = () => (
    <div>
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item as = 'a' header>
                    <Image size='mini' src={logo} style={{ marginRight: '1.5em'}}/>
                    PLJEC
                </Menu.Item>
                <Menu.Item as = 'a'>Home</Menu.Item>

                <Dropdown item simple text='Dropdown'>
                    <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Divider/>
                        <Dropdown.Header>Header Item</Dropdown.Header>
                        <Dropdown.Item>
                            <i className='dropdown icon' />
                            <span className='text'>Submenu</span>
                            <Dropdown.Menu>
                                <Dropdown.Item>List Item</Dropdown.Item>
                                <Dropdown.Item>List Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Menu>

        <Container text style={{ marginTop : '7em'}}>
            <Login/>
        </Container>

        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
            <Container textAlign='center' >
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Group 1' />
                            <List link inverted>
                                <List.Item as='a'>Link One</List.Item>
                                <List.Item as='a'>Link Two</List.Item>
                                <List.Item as='a'>Link Three</List.Item>
                                <List.Item as='a'>Link Four</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Group 2' />
                            <List link inverted>
                                <List.Item as='a'>Link One</List.Item>
                                <List.Item as='a'>Link Two</List.Item>
                                <List.Item as='a'>Link Three</List.Item>
                                <List.Item as='a'>Link Four</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Group 3' />
                            <List link inverted>
                                <List.Item as='a'>Link One</List.Item>
                                <List.Item as='a'>Link Two</List.Item>
                                <List.Item as='a'>Link Three</List.Item>
                                <List.Item as='a'>Link Four</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header inverted as='h4' content='Footer Header' />
                            <p>
                                Extra space for a call to action inside the footer that could help re-engage users.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Divider inverted section />
                <Image centered size='small' src={footerLogo}/>
                <List horizontal inverted divided link>
                    <List.Item as='a' href='#'>Site Map</List.Item>
                    <List.Item as='a' href='#'>Contact Me</List.Item>
                    <List.Item as='a' href='#'>Terms and Conditions</List.Item>
                    <List.Item as='a' href='#'>Privacy Policy</List.Item>
                </List>
            </Container>
        </Segment>
    </div>
)

export default FixedMenuLayout;

// https://wdprogrammer.tistory.com/18?category=817327