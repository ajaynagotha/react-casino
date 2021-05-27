import React, { Component } from 'react'
import { Container, Card, Row, Col, Badge, Tabs, Tab } from 'react-bootstrap';
import { trackResults } from '../services/trackResults'
import InfoModal from './InfoModal';
import {connect} from 'react-redux';
class ListResults extends Component {
    constructor() {
        super()
        this.state = {
            CurrentResults: [],
            modalShow: false,
            selectedCasino: " ",
            selectedTable: " ",
            selectedResult: " ",
            blackNumbers: [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35],
            redNumbers: [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
        }
    }
    componentDidMount() {
        trackResults().then((res) => {
            console.log("results", res)
            this.setState({ CurrentResults: res })
            console.log(this.state.CurrentResults)
        })
    }
    setModalShow = (result) => {
        this.setState({ modalShow: true, selectedCasino: "William Hill Casino", selectedTable: result.name, selectedResult:  result.results.join()})
    }
    setModalHide = () => {
        this.setState({ modalShow: false })
    }
    render() {
        return (
            <Container className="result-list">
                {JSON.stringify(this.props.casinos)}
                <Tabs defaultActiveKey="william-hill" id="casino-tabs">
                    <Tab eventKey="william-hill" title="William Hill">
                        <Row>
                            {
                                this.state.CurrentResults.map((result) => {
                                    return (
                                        <Col lg='3' onClick={(e) => this.setModalShow(result)}>
                                            <Card className='mb-3 shadow' key={result.id}>
                                                <Card.Img variant="top" src="https://cmscdn.staticcache.org/assets/image/0010/1482715/WHC_40604_GT_EvolutionRouletteLobby_372x372.jpg" />
                                                <Card.Body>
                                                    <Card.Title className='text-white'>{result.name}</Card.Title>
                                                    <Card.Text className='clearfix mb-1'>
                                                        {
                                                            result.results.filter((result, idx) => idx < 5).map((result) => {
                                                                return (<Badge className={(this.state.blackNumbers.includes(Number(result))) ? "badge-black mx-1" : (this.state.redNumbers.includes(Number(result))) ? "badge-red mx-1" : (Number(result) === 0) ? "badge-green mx-1" : "mx-1"}>{result}</Badge>)
                                                            })
                                                        }
                                                    </Card.Text>
                                                    <Card.Text className='clearfix mb-1'>
                                                        {
                                                            result.results.filter((result, idx) => (idx > 5 && idx < 11)).map((result) => {
                                                                return (<Badge  className={(this.state.blackNumbers.includes(Number(result))) ? "badge-black mx-1" : (this.state.redNumbers.includes(Number(result))) ? "badge-red mx-1" : (Number(result) === 0) ? "badge-green mx-1" : "mx-1"}>{result}</Badge>)
                                                            })
                                                        }
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                            <InfoModal
                                casino={this.state.selectedCasino}
                                table={this.state.selectedTable}
                                result={this.state.selectedResult}
                                show={this.state.modalShow}
                                onHide={() => this.setModalHide(false)}
                            />
                        </Row>
                    </Tab>
                    <Tab eventKey="bet365" title="Bet365">
                    </Tab>
                    <Tab eventKey="roobet" title="RooBet">
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}
function mapStateToProps(state) {
    return {
        filters: state.activeFilter,
        casinos: state.selectedCasino
    };
}
export default connect(mapStateToProps)(ListResults);
