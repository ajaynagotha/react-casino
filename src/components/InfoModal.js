import React from 'react'
import { Modal, Badge } from "react-bootstrap"
class InfoModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const blackNumbers = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35]
        const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className='bg-first text-white'>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.casino}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-second'>
                    <h5 className='text-white'>{this.props.table}</h5>
                    <p className='text-white'>
                        Tracking Result:
                </p>
                    <div className='clearfix'>
                        {
                            this.props.result.split(',').map((result) => {
                                return (<Badge className={(blackNumbers.includes(Number(result))) ? "badge-black m-1" : (redNumbers.includes(Number(result))) ? "badge-red m-1" : (Number(result) === 0) ? "badge-green m-1" : "m-1"}>{result}</Badge>)
                            })
                        }
                    </div>
                </Modal.Body>
                <Modal.Footer className='bg-second'>
                    <a style={{ float: "right" }} href='/#' className="btn cs-btn">Visit Casino</a>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default InfoModal

