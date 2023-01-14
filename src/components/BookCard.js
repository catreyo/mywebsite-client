import Card from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';

function MovieCard({ data }) {
    return (
        <Card border='light' bg='dark' style={{
            width: '100%',
            color: 'white',
            flexDirection: 'row'
        }}>
            <Card.Img src={data.image} style={{
                width: 'calc(200px / 1.5)',
                height: '200px',
                borderTopRightRadius: '0px',
                borderBottomRightRadius: '0px'
            }}/>
            <Card.Body>
                <Card.Title>{data.title} ({data.year})</Card.Title>
                <Card.Subtitle style={{fontStyle: 'italic', fontSize: '90%'}}>{data.author}</Card.Subtitle>
                <hr></hr>
                <Card.Text style={{color: '#a4a5a6'}}>I rate this book a {data.rating}/10:</Card.Text>
                <StarRatingComponent
                    name = {data.title}
                    editing = {false}
                    starCount = {10}
                    value = {data.rating}
                />
            </Card.Body>
        </Card>
    );
}

export default MovieCard;