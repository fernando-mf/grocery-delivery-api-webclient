import * as React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import "./Home.css";

class Home extends React.Component {
    public render() {
        return (
            <div id="home">
                <section className="banner-front">
                    <div id="banner-container" role="banner">
                        <div className="overlay"/>
                        <article className="banner-content">
                            <h1>
                                Your groceries, delivered.
                            </h1>
                            <h6>
                                Find out what a difference same-day
                                <br />
                                delivery can make in your life.
                            </h6>
                            <Button color="success">
                                Get Started
                            </Button>
                        </article>
                    </div>
                </section>
                <section className="how-it-works section">
                    <Container fluid={true}>
                        <h2>Here's how it works.</h2>
                        <Row>
                            <Col xs="12" sm="6" md="6">
                                <article>
                                    <h3>Scroll through the aisles.</h3>
                                    <p>
                                        Order fresh products, meat, and more from your local store using our app or website.
                                    </p>
                                </article>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                                <div className="video">
                                    <video src="https://www.shipt.com/wp-content/themes/delicious/video/hiw-video-1.mp4" poster="https://www.shipt.com/wp-content/themes/delicious/img/front-hiw-video-1.jpg" autoPlay={true} muted={true} loop={true} playsInline={true} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        );
    }
}

export default Home;