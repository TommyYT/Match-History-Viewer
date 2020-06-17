import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import LoadingScreen from 'react-loading-screen';
import NumberFormat from 'react-number-format';
import './index.css';


export default class App extends React.Component {

    state = {
        loading: true,
        name: null,
        Legends: null,
        rank: null,
        level: null,
        Total: null,
        inputplatform: "PC",
    };

    changeValue(text) {
        this.setState({inputplatform: text})
      }

    changeName(text) {
        this.setState({inputusername: text})
        console.log(this.state.inputusername)
    }

    async componentDidMount() {
        const url = "https://api.mozambiquehe.re/bridge?player=funfps&platform=PC&auth=hrdWSzQtFgQkfEZaW3Ud";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            name: data.global.name,
            rank: data.global.rank.rankName,
            level: data.global.level,
            Legends: data.legends.all,
            Total: data.total,
            loading: false
        });
        console.log(data.global.name);
    };


    render() {
        return <div>
            {this.state.loading || !this.state.name ?
                (<LoadingScreen
                    loading={true}
                    bgColor='#2e2e2e'
                    spinnerColor='#9ee5f8'
                    textColor='#676767'
                    logoSrc={require('./assets/logo.png')}
                    text='Loading...'
                />) :

                (<Container background-color="grey">
                    <Row>
                        <img class="logo mx-auto d-flex justify-content-center flex-wrap" src={require('./assets/logo.png')} alt="" />

                    </Row>

                    <Row>
                        <Col>
                            <div>
                                <>
                                    <InputGroup className="mb-3">
                                        <DropdownButton
                                            as={InputGroup.Prepend}
                                            variant="outline-secondary"
                                            title={this.state.inputplatform}
                                            id="input-group-dropdown-1"
                                        >
                                            <Dropdown.Item as="button" onClick={(e) => this.changeValue(e.target.textContent)}>PC</Dropdown.Item>
                                            <Dropdown.Item as="button" onClick={(e) => this.changeValue(e.target.textContent)}>XBOX</Dropdown.Item>
                                            <Dropdown.Item as="button" onClick={(e) => this.changeValue(e.target.textContent)}>PLAYSTATION</Dropdown.Item>
                                        </DropdownButton>
                                        <FormControl type="text" aria-describedby="basic-addon1" onKeyPress={(e) => { if(e.key === "Enter"){this.changeName()}}} />
                                    </InputGroup>
                                </>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <div class="mx-auto d-flex justify-content-center flex-wrap">
                            <Card style={{ width: '18rem', margin: '1%' }}>
                                <Card.Body >

                                    <Card.Title>{this.state.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Lifetime Statistics</Card.Subtitle>
                                    <Card.Text id="rank">
                                        <Row>
                                            <Col><b>Rank.</b></Col>
                                            <Col>{this.state.rank}</Col>
                                        </Row>
                                        <Row>
                                            <Col><b>Level</b></Col>
                                            <Col><NumberFormat value={this.state.level} displayType={'text'} thousandSeparator={true} /></Col>
                                        </Row>
                                        <Row>
                                            <Col><b>Kills</b></Col>
                                            <Col><NumberFormat value={this.state.Total.kills} displayType={'text'} thousandSeparator={true} /></Col>
                                        </Row>
                                        <Row>
                                            <Col><b>Damage</b></Col>
                                            <Col><NumberFormat value={this.state.Total.damage} displayType={'text'} thousandSeparator={true} /></Col>
                                        </Row>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                    </div>
                    </Row>
                    <Row>
                    <div class="mx-auto d-flex justify-content-center flex-wrap">
                            <Card style={{ width: '18rem', margin: '1%' }}>
                                <Card.Body>
                                    <Card.Title>Caustic</Card.Title>
                                    <Card.Text id="kills">
                                        <Row>
                                            <Col><b>Kills</b></Col>
                                            <Col><NumberFormat value={this.state.Legends.Bangalore.kills} displayType={'text'} thousandSeparator={true} /></Col>
                                        </Row>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem', margin: '1%' }}>
                                <Card.Body>

                                    <Card.Title>Wraith</Card.Title>
                                    <Card.Text id="kills">
                                        <Row>
                                            <Col><b>Kills</b></Col>
                                            <Col><NumberFormat value={this.state.Legends.Wraith.kills} displayType={'text'} thousandSeparator={true} /></Col>
                                        </Row>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem', margin: '1%' }}>
                                <Card.Body>

                                    <Card.Title>Mirage</Card.Title>
                                    <Card.Text id="kills">
                                        <Row>
                                            <Col><b>Kills</b></Col>
                                            <Col><NumberFormat value={this.state.Legends.Mirage.kills} displayType={'text'} thousandSeparator={true} /></Col>
                                        </Row>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem', margin: '1%' }}>
                                <Card.Body>

                                    <Card.Title>Bloodhound</Card.Title>
                                    <Card.Text id="kills">
                                        <Row>
                                            <Col><b>Kills</b></Col>
                                            <Col><NumberFormat value={this.state.Legends.Bloodhound.kills} displayType={'text'} thousandSeparator={true} /></Col>
                                        </Row>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem', margin: '1%' }}>
                                <Card.Body>

                                    <Card.Title>Pathfinder</Card.Title>
                                    <Card.Text id="kills">
                                        <Row>
                                            <Col><b>Kills</b></Col>
                                            <Col><NumberFormat value={this.state.Legends.Pathfinder.kills} displayType={'text'} thousandSeparator={true} /></Col>
                                        </Row>
                                    </Card.Text>
                                </Card.Body>
                            </Card>


                        </div>
                    </Row>

                </Container>)}
        </div>;
    }


}