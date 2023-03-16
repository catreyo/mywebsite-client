import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import React, { useEffect, useState } from 'react';

function MediaCard({ data, type }) {
    const [movieData, setMovieData] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${type}/${data.id}`, {
            headers: new Headers({
                Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_BEARER
            })
        })
        .then(res => res.json())
        .then(json => {
            let media;
            if(type === 'movie'){
                media = {
                    title: json.title,
                    year: json.release_date.split('-')[0],
                    image: 'https://image.tmdb.org/t/p/w500' + json.poster_path,
                }
            } else if(type === 'tv'){
                media = {
                    title: json.name,
                    year: json.first_air_date.split('-')[0],
                    image: 'https://image.tmdb.org/t/p/w500' + json.poster_path,
                }
            } else {
                console.log('Invalid type!')
            }
            setMovieData(media);
            setIsLoaded(true);
        })
    }, [data.id, type])

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
                    <Card.Text style={{color: '#c5c7c9'}}>
                        Overall score: <strong>{parseFloat(data.score.toFixed(2))}</strong>/10
                    </Card.Text>
                    <Card.Text style={{color: '#a4a5a6', fontSizeAdjust: '0.5'}}>
                        Visual sub-score: <strong>{data.visuals}</strong>/10<br/>
                        Plot sub-score: <strong>{data.plot}</strong>/10<br/>
                        Enjoyment sub-score: <strong>{data.enjoyment}</strong>/10<br/>
                    </Card.Text>
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
                <Card.Img style={{
                    width: 'calc(200px / 1.5)',
                    height: '200px',
                    borderTopRightRadius: '0px',
                    borderBottomRightRadius: '0px'
                }}/>
                <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
                </Card.Body>
            </Card>
        );
    }
}

export default MediaCard;