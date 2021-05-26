import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import del from '../images/delete.png'
export default class SelectedFilters extends Component {
    constructor() {
        super()
        this.state = {
            sfilters: ''
        }
    }
    removeFilter = filter => {
        this.props.removeit(filter)
    }
    render() {
        var filters = []
        var tfilters = JSON.parse(this.props.filters);
        for (var key in tfilters) {
            filters.push(tfilters[key])
        }
        console.log("filters", Array.isArray(filters[1]))
        return (
            <div className='selected-filters'>
                <h3 className="text-white">Selected Options</h3>
                {
                    filters.map((filter, idx) => (
                        Array.isArray(filter) ?
                            ( filter.map((filter, idx) => (  
                                <Card className='d-inline-block filter-card'>
                                    <Card.Body className='text-white filter-body clearfix'>
                                        <div className="float-left" key = {filter}>{filter}</div>
                                        <div className='float-right ml-3 removef' onClick={e => this.removeFilter(filter)}><img src={del} alt="del" width='12px'></img></div>
                                    </Card.Body>
                                </Card>
                            ))) :
                            (<Card className='d-inline-block filter-card'>
                                <Card.Body className='text-white filter-body clearfix'>
                                    <div className="float-left" key={filter}>{filter}</div>
                                    <div className='float-right ml-3 removef' onClick={e => this.removeFilter(filter)}><img src={del} alt="delete" width='12px'></img></div>
                                </Card.Body>
                            </Card>)
                    ))
                }
            </div>
        )
    }
}
