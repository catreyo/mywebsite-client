import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating'

function MediaCard({ data }) {
    const [movieData, setMovieData] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${data.id}`, {
            headers: new Headers({
                Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_BEARER
            })
        })
        .then(res => res.json())
        .then(json => {
            const movie = {
                title: json.title,
                year: json.release_date.split('-')[0],
                image: 'https://image.tmdb.org/t/p/w500' + json.poster_path,
            }
            console.log(movie);
            setIsLoaded(true);
            setMovieData(movie);
        })
    }, [data.id])

    if(isLoaded){
        return (
            <Card border='light' bg='dark' style={{
                width: '100%',
                color: 'white',
                flexDirection: 'row'
            }}>
                <Card.Img src={movieData.image} style={{
                    width: 'calc(200px / 1.5)',
                    height: '200px',
                    borderTopRightRadius: '0px',
                    borderBottomRightRadius: '0px'
                }}/>
                <Card.Body>
                    <Card.Title>{movieData.title}</Card.Title>
                    <hr></hr>
                    <Card.Text style={{color: '#a4a5a6'}}>
                        Overall score: {data.score.toFixed(2)}
                    </Card.Text>
                    <Rating
                        readonly={true}
                        initialRating={data.score}
                        stop={10}
                        fractions={3}
                    />
                </Card.Body>
            </Card>
        );
    } else {
        return (
            <Card border='light' bg='dark' style={{
                width: '100%',
                color: 'white',
                flexDirection: 'row'
            }}>                
            </Card>
        );
    }
}

export default MediaCard;