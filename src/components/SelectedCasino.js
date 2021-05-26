import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import del from '../images/delete.png'
export default class SelectedCasino extends Component {
    constructor() {
        super()
        this.state = {
            scasinos: []
        }
    }
    removeCasino = casino => {
        this.props.removeit(casino)
    }
    componentDidMount() {
        var casinos = this.props.casinos
        casinos = casinos.split(",")
        this.setState({scasinos: casinos})
    }
    render() {
        return (
            <div className='selected-casino'>
                <h3 className="text-white">Selected Casinos</h3>
                {
                    (this.props.casinos !== '') ? (this.props.casinos.split(",").map((casino, idx) => (
                        <Card className='d-inline-block casino-card'>
                            <Card.Body className='text-white casino-body clearfix'>
                                <div className="float-left" key={casino}>{casino}</div>
                                <div className='float-right ml-3 removef' onClick={e => this.removeCasino(casino)}><img src={del} alt="del" width='12px'></img></div>
                            </Card.Body>
                        </Card> 
                    ))) : ""
                }
            </div>
        )
    }
}
