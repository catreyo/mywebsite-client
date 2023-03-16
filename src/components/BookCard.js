import Card from 'react-bootstrap/Card';

function BookCard({ data }) {
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
                <Card.Text style={{color: '#a4a5a6'}}>My rating: <strong>{data.rating}</strong>/10</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default BookCard;