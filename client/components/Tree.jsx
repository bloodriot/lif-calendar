import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Parser from '../lib/parser';
import BaseIconRender from './BaseIconRender.jsx';
export default class Tree extends BaseIconRender {
    render() {
        let data = Parser.parseTreeData(this.props.day);

        return (
            <Container className="border border-dark rounded">
                <Row>
                    <Col>
                        <div class="type-header">
                            Plant
                        </div>
                    </Col>
                    <Col>
                        <div class="type-header">
                            Grow
                        </div>
                    </Col>
                    <Col>
                        <div class="type-header">
                            Harvest
                        </div>
                    </Col>
                    <Col>
                        <div class="type-header">
                            Sleep
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div class="type-data">
                            {this.getIcons(data.plant, "plant")}
                        </div>
                    </Col>
                    <Col>
                        <div class="type-data">
                            {this.getIcons(data.grow, "grow")}
                        </div>
                    </Col>
                    <Col>
                        <div class="type-data">
                            {this.getIcons(data.harvest, "harvest")}
                        </div>
                    </Col>
                    <Col>
                        <div class="type-data">
                            {this.getIcons(data.sleep, "sleep")}
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}