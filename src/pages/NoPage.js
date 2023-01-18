import Container from "react-bootstrap/esm/Container";

function NoPage() {
    document.body.style = 'background: black;';
    return <Container className='body'>That page doesn't exist, where do you think you're going?</Container>;
}

export default NoPage;