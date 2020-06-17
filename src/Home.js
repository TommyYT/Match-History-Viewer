import React, { Component } from 'react';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import LoadingScreen from 'react-loading-screen';
import './index.css';



export const Home = () => (

  <Container background-color="grey">
    <Row><img class="mx-auto d-flex justify-content-center flex-wrap" width="50%" src="images/logo.png" alt="" />

    </Row>

    <Row>
      <Col>
        <div>
          <>
            <InputGroup className="mb-3">
              <DropdownButton
                as={InputGroup.Prepend}
                variant="outline-secondary"
                title="PC"
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">PC</Dropdown.Item>
                <Dropdown.Item href="#">XBOX</Dropdown.Item>
                <Dropdown.Item href="#">PLAYSTATION</Dropdown.Item>
              </DropdownButton>
              <FormControl aria-describedby="basic-addon1" />
            </InputGroup>
          </>
        </div>
      </Col>
    </Row>
    <Row>
      <div class="mx-auto d-flex justify-content-center flex-wrap">
        <Card style={{ width: '18rem', margin: '1%' }}>
          <Card.Body >

            <Card.Title>Player</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Lifetime Statistics</Card.Subtitle>
            <Card.Text id="Kills">
              Kills
    </Card.Text>
            <Card.Text id="level">
              Level
    </Card.Text>
            <Card.Text id="Wins">
              Wins
    </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '1%' }}>
          <Card.Body>
            <Card.Title>Wraith</Card.Title>
            <Card.Text id="kills">
              Kills
    </Card.Text>
            <Card.Text id="kills">
              Date
    </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '1%' }}>
          <Card.Body>

            <Card.Title>Caustic</Card.Title>
            <Card.Text id="kills">
              Kills
    </Card.Text>
            <Card.Text id="kills">
              Date
    </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '1%' }}>
          <Card.Body>

            <Card.Title>Lifeline</Card.Title>
            <Card.Text id="kills">
              Kills
    </Card.Text>
            <Card.Text id="kills">
              Date
    </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Row>

  </Container>


)

