import Container from 'react-bootstrap/Container';

function Home() {
    document.body.style = 'background: black;';
    return(
        <>
            <Container className="body">
                Hello World.
            </Container>
        </>
    );
}

export default Home;