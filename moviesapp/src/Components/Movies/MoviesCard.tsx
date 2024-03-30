import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppSelector } from "../../Store/store";
import Loader from '../Loader/Loader';
import styles from './Movies.module.scss';

const MovieCard: React.FC = () => {
    const { movies } = useAppSelector((state) => state.movies);
    return (
        <Row xs={1} md={2} xl={4} className="g-4">
            {movies ? movies.map((item: any) => (
                <Col key={item["#IMDB_ID"]}>
                    <Link to={`/movie/${item["#IMDB_ID"]}`} className={styles.cardLink}>
                        <Card className={styles.cardData}>
                            <Card.Body>
                                <Card.Text>{item['#TITLE']} ({item['#YEAR']})</Card.Text>
                                <Card.Img src={item["#IMG_POSTER"]} alt={item['#TITLE']} />
                                Actor: <em>{item['#ACTORS']}</em>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>

            )) : <Loader />}
        </Row>
    );
};

export default MovieCard;

