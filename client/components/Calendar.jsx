import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Animal from './Animal.jsx';
import Crop from './Crop.jsx';
import Tree from './Tree.jsx';
import CalendarUtil from '../lib/CalendarUtil';
import Icon from '@material-ui/core/Icon';

export default class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            day: this.props.day || 0,
        };
        this.dateMinus = this.dateMinus.bind(this);
        this.datePlus = this.datePlus.bind(this);
    }

    getDate() {
        let calendarUtil = new CalendarUtil();
        let date = calendarUtil.getDateByDay(this.state.day);
        return "Date: " + date;
    }

    dateMinus() {
        let day = this.state.day;
        console.log("Day: " + this.state.day);
        if (day == 0) {
            day = 364;
            console.log("New Day: " + day);
        } else {
            --day;
        }

        this.setState(
            {
                day: day
            }
        );
        console.log("Day: " + this.state.day);
    }

    datePlus() {
        let day = this.state.day;
        if (day == 364) {
            day = 0;
        } else {
            ++day;
        }

        this.setState(
            {
                day: day
            }
        );
        console.log("Day: " + this.state.day);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xl>
                        <div class="type-header">
                            <span onClick={this.dateMinus}><Icon>arrow_back</Icon></span>
                                {this.getDate()}
                            <span onClick={this.datePlus}><Icon>arrow_forward</Icon></span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xl>
                    <div class="type-header">Animals</div>
                    </Col>
                </Row>
                <Row>
                    <Col xl>
                        <Animal day={this.state.day}/>
                    </Col>
                </Row>
                <Row>
                    <Col xl>
                    <div class="type-header">Crops</div>
                    </Col>
                </Row>
                <Row>
                    <Col xl>
                        <Crop day={this.state.day}/>
                    </Col>
                </Row>
                <Row>
                    <Col xl>
                        <div class="type-header">Trees</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tree day={this.state.day}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}