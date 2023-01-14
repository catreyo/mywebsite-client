import Card from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';

function MediaCard({ data, type }) {
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
                <hr></hr>
                <Card.Text style={{color: '#a4a5a6'}}>I rate this {type} a {data.rating}/10:</Card.Text>
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

export default MediaCard;