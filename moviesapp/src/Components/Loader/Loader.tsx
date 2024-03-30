import { Spinner } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import styles from './Loading.module.scss';

const Loader: React.FC = () => {
    return (
        <Modal
            show={true}
            backdrop="static"
            keyboard={false}
            fullscreen={true}
        >
            <div className={styles.loadingBody} >
                <Spinner animation="border" variant="primary" />
                <Spinner animation="border" variant="secondary" />
                <Spinner animation="border" variant="success" />
            </div>
        </Modal>
    );
}

export default Loader;