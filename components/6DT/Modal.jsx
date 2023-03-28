import Modal from 'react-bootstrap/Modal';
import styles from './Modal.module.css'
import { peoples } from '../../data/peoples';

export default function PopUp(props){
    let name = "", description = "";
    peoples.map(p => {
        if(p.name == props.title){
            name = p.name
            description = p.description
        }
    })
    
    return <Modal
    {...props}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    className={styles.modal}
  >
    <Modal.Header closeButton>
    </Modal.Header>
    <Modal.Body>
        <center>
            <h1>{name}</h1>
            <p>{description}</p>
        </center>
    </Modal.Body>
  </Modal>
} 