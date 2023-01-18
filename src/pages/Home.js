import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import logo from '../images/tyologotrans.png'
import tmdb from '../images/blue-long.svg'

function Home() {
    document.body.style = 'background: black;';
    const [time, setTime] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => setTime(dayjs().diff(dayjs(1019729228000), 'year', true).toString().substring(0, 12)), 50);
        return () => {
          clearInterval(interval);
        };
    }, []);

    return(
        <Container className="body"><center>
            <img src={logo} alt="Logo" className='logo'/>
            <p>Hello world... I am a {time} year old software engineer and musician from the Bay Area.</p>
            <hr />
            <p>Checkout the pages below to see my favorite movies, tv shows, and books:</p>
            <Button variant="secondary" href='/movies'>Movies</Button>{' '}
            <Button variant="secondary" href='/shows'>TV Shows</Button>{' '}
            <Button variant="secondary" href='/books'>Books</Button>{' '}
            <hr />
            <p>The website you are looking at is a full stack application with a React frontend and Node/Express backend.</p>
            <p>To view the source code checkout the repositories on github:</p>
            <Button variant="secondary" href='https://github.com/catreyo/mywebsite-client' target='_blank'>Frontend (React)</Button>{' '}
            <Button variant="secondary" href='https://github.com/catreyo/mywebsite-api' target='_blank'>Backend (Node/Express)</Button>{' '}
            <hr />
            <img src={tmdb} alt="TMDB Attribution" className='tmdb'/>
        </center></Container>
    );
}

export default Home;