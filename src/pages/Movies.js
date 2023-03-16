import { useState, useEffect } from 'react';
import MediaCard from '../components/MediaCard';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Movies() {
    document.body.style = 'background: black;';
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Change to /api/movies after development
        fetch("http://localhost:4000/movies")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if (error) {
        return <Container className='body'>Error: {error.message}</Container>;
    } else if (!isLoaded) {
        return <Container className='body'>Loading...</Container>;
    } else {
        return (
          <Container className='body'>
            <Row xs={1} md={2} className="g-4" style={{marginTop: '10px'}}>
                {items.map(element => {
                    return <Col key={'col'+element.id}><MediaCard key={element.id} data={element}/></Col>
                })}
            </Row>
          </Container>
        );
    }
}

export default Movies;