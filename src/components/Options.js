import React, { Component } from 'react'
import { Container, Form, FormGroup, Tabs, Tab, Row, Col, FormLabel, FormControl, Button, Dropdown } from 'react-bootstrap'
import Splits from '../config/Splits'
import Streets from '../config/Streets'
import Corners from '../config/Corners'
import Lines from '../config/Lines'
import SelectedFilters from './SelectedFilters'
import Singles from '../config/Singles'
import { CasinoList } from '../config/CasinoList'
import SelectedCasino from './SelectedCasino'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {saveCasino, saveFilters, saveSettings} from '../actions/index'
import { Redirect } from 'react-router'
class Options extends Component {
    constructor() {
        super()
        this.state = {
            currentFilters: '',
            casinoList: [],
            settings: ''
        }
    }
    componentDidMount() {
        console.log(this.props.filters)
        this.setState({CasinoList: (this.props.casinos.CasinoList) ? this.props.casinos.CasinoList : [], currentFilters: (this.props.filters.currentFilters) ? this.props.filters.currentFilters : "", settings: this.props.settings.settings ? this.props.settings.settings: ''})
    }
    removeCasino = async (filter) => {
        var fl = this.state.casinoList;
        if (fl.includes(filter)) {
            var rmindex = fl.findIndex(value => {
                return value === filter
            })
            fl.splice(rmindex, 1)
            if (fl.length === 0) {
                fl = [];
            }
            await this.setState({ CasinoList: fl })
            this.props.saveCasino(this.state.casinoList);
        }
    }
    removeFilter = async (filter) => {
        var fl = this.state.currentFilters;
        for (const x in fl) {
            if ((Array.isArray(fl[x])) && fl[x].includes(filter)) {
                var rmindex = fl[x].findIndex(value => {
                    return value === filter
                })
                fl[x].splice(rmindex, 1)
                if (fl[x].length === 0) {
                    fl[x] = undefined;
                }
                await this.setState({ currentFilters: fl })
            }
            if (fl[x] === filter) {
                fl[x] = undefined;
                await this.setState({ currentFilters: fl })
            }
        }
    }
    addCasino = async (e) => {
        var cArr = this.state.casinoList;
        if (!cArr.includes(e.target.getAttribute("data-casino"))) {
            cArr.push(e.target.getAttribute("data-casino"))
            await this.setState({ casinoList: cArr })
            this.props.saveCasino(this.state.casinoList)
        }
    }
    handleChange = async (e) => {
        if ((e.target.name === "singles") || (e.target.name === "streets") || (e.target.name === "corners") || (e.target.name === "lines") || (e.target.name === "corners") || (e.target.name === "splits")) {
            console.log(e.target.value)
            var iobj = { ...this.state.currentFilters }
            if (!iobj[e.target.name]) {
                iobj[e.target.name] = []
            }
            iobj[e.target.name].push(e.target.value);
            await this.setState({ currentFilters: iobj })
            console.log(JSON.stringify(this.state.currentFilters))
        }
        else {
            iobj = { ...this.state.currentFilters }
            iobj[e.target.name] = e.target.value;
            await this.setState({ currentFilters: iobj })
            console.log(JSON.stringify(this.state.currentFilters))
        }
    }
    handleSettings = (e) => {
        var settings = {...this.state.settings}
        settings[e.target.name] = e.target.value
        this.setState({settings: settings})
    }
    saveOptions = async () => {
        this.setState({redirect: true})
        await this.props.saveFilters(this.state);
    }
    render() {
        if(this.state.redirect) {
            return <Redirect to="/" />
        }
        return (
            <Container className="tracking-page py-5">
                <Tabs defaultActiveKey="options" id="casino-tabs" className="justify-content-center">
                    <Tab eventKey="options" title="Options">
                        <SelectedFilters filters={JSON.stringify(this.state.currentFilters)} removeit={this.removeFilter} />
                        <Form>
                            <FormGroup>
                                <Form.Check
                                    custom
                                    inline
                                    type='radio'
                                    id='even'
                                    label='Even'
                                    value="Even"
                                    name='evenodd'
                                    className="text-white"
                                    onChange={(e) => this.handleChange(e)}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    type='radio'
                                    id='odd'
                                    label='Odd'
                                    name='evenodd'
                                    value='Odd'
                                    className="text-white"
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Form.Check
                                    custom
                                    inline
                                    type='radio'
                                    id='red'
                                    label='Red'
                                    name='redblack'
                                    value='Red'
                                    className="text-white"
                                    onChange={(e) => this.handleChange(e)}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    type='radio'
                                    id='black'
                                    label='Black'
                                    name='redblack'
                                    value='Black'
                                    className="text-white"
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Form.Check
                                    custom
                                    inline
                                    type='radio'
                                    id='1stdozen'
                                    label='1st Dozen'
                                    name='dozens'
                                    value='1st Dozen'
                                    className="text-white"
                                    onChange={(e) => this.handleChange(e)}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    type='radio'
                                    id='2nddozen'
                                    label='2nd Dozen'
                                    name='dozens'
                                    value='2nd Dozen'
                                    className="text-white"
                                    onChange={(e) => this.handleChange(e)}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    type='radio'
                                    id='3rddozen'
                                    label='3rd Dozen'
                                    value='3rd Dozen'
                                    name='dozens'
                                    className="text-white"
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Form.Check
                                    custom
                                    inline
                                    type='radio'
                                    id='1stcolumn'
                                    label='1st Column'
                                    value='1st Column'
                                    name='columns'
                                    className="text-white"
                                    onChange={(e) => this.handleChange(e)}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    type='radio'
                                    id='2ndcolumn'
                                    label='2nd Column'
                                    value='2nd Column'
                                    name='columns'
                                    className="text-white"
                                    onChange={(e) => this.handleChange(e)}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    type='radio'
                                    id='3rdcolumn'
                                    label='3rd Column'
                                    value='3rd Column'
                                    name='columns'
                                    className="text-white"
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <Form.Label inline className="my-1 mr-2 text-white" htmlFor="inlineFormCustomSelectPref">
                                            Singles
                                        </Form.Label>
                                        <Form.Control
                                            as="select"
                                            className="my-1 mr-sm-2"
                                            id="singles"
                                            onChange={(e) => this.handleChange(e)}
                                            name="singles"
                                            custom
                                            inline
                                        >
                                            {Singles.map((single) => {
                                                return (<option key={single} value={single}>{single}</option>)
                                            })}
                                        </Form.Control>
                                    </Col>
                                    <Col>
                                        <Form.Label inline className="my-1 mr-2 text-white" htmlFor="inlineFormCustomSelectPref">
                                            Splits
                                        </Form.Label>
                                        <Form.Control
                                            as="select"
                                            className="my-1 mr-sm-2"
                                            id="splits"
                                            onChange={(e) => this.handleChange(e)}
                                            name="splits"
                                            custom
                                            inline
                                        >
                                            {
                                                Splits.map((split) => {
                                                    return (<option key={split.split} vslue={split.split}>{split.split}</option>)
                                                })
                                            }
                                        </Form.Control>
                                    </Col>
                                    <Col>
                                        <Form.Label inline className="my-1 mr-2 text-white" htmlFor="inlineFormCustomSelectPref">
                                            streets
                                        </Form.Label>
                                        <Form.Control
                                            as="select"
                                            className="my-1 mr-sm-2"
                                            id="streets"
                                            onChange={(e) => this.handleChange(e)}
                                            name="streets"
                                            custom
                                            inline
                                        >
                                            {
                                                Streets.map((street) => {
                                                    return (<option key={street.value} value={street.value}>{street.value}</option>)
                                                })
                                            }
                                        </Form.Control>
                                    </Col>
                                    <Col>
                                        <Form.Label inline className="my-1 mr-2 text-white" htmlFor="inlineFormCustomSelectPref">
                                            Corners
                                        </Form.Label>
                                        <Form.Control
                                            as="select"
                                            className="my-1 mr-sm-2"
                                            id="corners"
                                            onChange={(e) => this.handleChange(e)}
                                            name="corners"
                                            custom
                                            inline
                                        >
                                            {
                                                Corners.map((corner) => {
                                                    return (<option key={corner.value} value={corner.value}>{corner.value}</option>)
                                                })
                                            }
                                        </Form.Control>
                                    </Col>
                                    <Col>
                                        <Form.Label inline className="my-1 mr-2 text-white" htmlFor="inlineFormCustomSelectPref">
                                            Lines
                                        </Form.Label>
                                        <Form.Control
                                            as="select"
                                            className="my-1 mr-sm-2"
                                            id="lines"
                                            onChange={(e) => this.handleChange(e)}
                                            name="lines"
                                            custom
                                            inline
                                        >
                                            {
                                                Lines.map((line) => {
                                                    return (<option key={line.value} value={line.value}>{line.value}</option>)
                                                })
                                            }
                                        </Form.Control>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel className="text-white">Notifications</FormLabel>
                                <div className='clearfix'>
                                    <FormLabel className="text-white inline-block">Number of times in a row</FormLabel>
                                    <FormControl type='text' className='inline-block mx-3 linput' placeholder='10' name='noi' onChange={this.handleSettings}></FormControl>
                                </div>
                                <Form.Check
                                    custom
                                    inline
                                    type='checkbox'
                                    id='sound'
                                    label='Sounds'
                                    name='sound'
                                    onChange={this.handleSettings}
                                    className="text-white"
                                />
                            </FormGroup>
                            <Button onClick={this.saveOptions} className="btn cs-btn mx-auto">Save</Button>
                        </Form>
                    </Tab>
                    <Tab eventKey="filters" title="Filters">
                        <SelectedCasino casinos={(this.props.casinos.CasinoList) ? this.props.casinos.casinoList.join() : ""} removeit = {this.removeCasino}/>
                        <div className="casino-select">
                            <Dropdown className="d-inline-block mr-3 font-18">
                                <Dropdown.Toggle variant="success" className="bg-btn font-18" id="dropdown-basic">
                                    Add Casino
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {
                                        CasinoList.map(casino => (
                                            <Dropdown.Item key={casino} onClick={(e) => this.addCasino(e)} data-casino={casino}>{casino}</Dropdown.Item>
                                        ))
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className="d-inline-block mr-3 font-18">
                                <Dropdown.Toggle variant="success" className="bg-btn" id="dropdown-basic">
                                    Links to Register
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {
                                        CasinoList.map(casino => (
                                            <Dropdown.Item key={casino} data-link={casino}>{casino}</Dropdown.Item>
                                        ))
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}
function mapStateToProps(state) {
    return {
        filters: state.activeFilter,
        casinos: state.activeFilter,
        settings: state.activeFilter
    };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({saveFilters: saveFilters, saveCasino: saveCasino, saveSettings: saveSettings}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Options)
