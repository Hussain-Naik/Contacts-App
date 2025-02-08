import styles from "../App.module.css";
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Plus } from 'react-bootstrap-icons';
import Button from "react-bootstrap/esm/Button";

const Header = () => {
    const navigate = useNavigate()
  return (
    <header className={styles.Header}>
        <Row>
            <Col xs={10} md={11}>
                <h1 onClick={()=> navigate('/')}>Contacts App</h1>
            </Col>
            <Col xs={2} md={1}>
                {/* <Button onClick={()=> navigate('/create/')} variant="outline-primary" className={styles.ButtonIcon}><Plus /></Button> */}
                <Plus size={40} onClick={()=> navigate('/create/')}/>
            </Col>
        </Row>  
    </header>
  )
}

export default Header
