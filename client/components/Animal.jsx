import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Parser from '../lib/parser';
import BaseIconRender from './BaseIconRender.jsx';
export default class Animal extends BaseIconRender {
    render() {
        let data = Parser.parseAnimalData(this.props.day);

        return (
            <Container className="border border-dark rounded">
               <Row>
                    <Col>
                        <div class="type-header">
                            Breeding
                        </div>
                    </Col>
                    <Col>
                        <div class="type-header">
                            Harvest
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div class="type-data">
                            {this.getIcons(data.breed, "breeding")}
                        </div>
                    </Col>
                    <Col>
                        <div class="type-data">
                            {this.getIcons(data.harvest, "harvest")}
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}