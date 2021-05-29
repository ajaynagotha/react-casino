
import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
 
export default function Footer() {
    return (
        <footer id="site-footer">
            <Nav className="footer-nav">
                <Nav.Item><Nav.Link>Tracking</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link as={Link} to='tracking-options'>Options</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link>Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link>Help</Nav.Link></Nav.Item>
            </Nav>
        </footer>
    )
}
