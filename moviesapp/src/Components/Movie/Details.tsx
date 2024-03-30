import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Overview from './Overview';
import Ratings from './Ratings';
import Reviews from './Reviews';
import { useAppDispatch, useAppSelector } from '../../Store/store';
import { getMovieDetailsById } from '../../Store/actions';
import Loader from '../Loader/Loader';
import { ArrowLeft } from 'react-bootstrap-icons';
import styles from './Movie.module.scss';

const Details: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [activeTab, setActiveTab] = useState(1);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { singleMovie } = useAppSelector((state) => state.movies);


    useEffect(() => {
        if (!id) {
            console.log("null id");
            return;
        }
        dispatch(getMovieDetailsById(id));
    }, [dispatch, id]);


    const handleTabClick = (tabNumber: number) => {
        setActiveTab(tabNumber);
    };


    return (
        <Container>

            {singleMovie ? <><br></br>
                <Row xs={1} md={1} xl={1} className="g-4">
                    <h4 className={styles.movieDetails} >
                        <ArrowLeft color="white" size={50} className={styles.backBtn} onClick={() => navigate('/')} />
                        {singleMovie?.title}
                    </h4>
                </Row>
                <Row xs={2} md={2} xl={2} className="g-4">
                    <Col>
                        <div className={styles.tabsContainer}>
                            <img src={singleMovie?.image} alt={singleMovie?.title} className={styles.moviePoster} /></div>
                    </Col>
                    <Col>
                        <div className={styles.tabsContainer}>
                            <div className={styles.tabButtons}>
                                <button className={activeTab === 1 ? styles.active : styles.inactiveTabs} onClick={() => handleTabClick(1)}>Movie Details</button>
                                <button className={activeTab === 2 ? styles.active : styles.inactiveTabs} onClick={() => handleTabClick(2)}>Review Ratings</button>
                                <button className={activeTab === 3 ? styles.active : styles.inactiveTabs} onClick={() => handleTabClick(3)}>Review Comments</button>
                            </div>
                            <div className={styles.tabsContent}>
                                {activeTab === 1 && singleMovie && <Overview selectedMovie={singleMovie} />}
                                {activeTab === 2 && singleMovie && <Ratings selectedMovie={singleMovie} />}
                                {activeTab === 3 && singleMovie && <Reviews selectedMovie={singleMovie} />}
                            </div>
                        </div>
                    </Col>
                </Row></> : <Loader />}
        </Container>
    );
}

export default Details;
