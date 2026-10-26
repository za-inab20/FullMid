
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "reactstrap";
import AddBook from "./comps/AddBook";
import ViewBook from "./comps/ViewBook";

function App() {
    return (
        <Container fluid className="bg-light min-vh-100">
            <Row className="bg-info-subtle p-4">
                <Col>
                    <AddBook />
                </Col>
            </Row>

            <Row className="bg-success-subtle p-4">
                <Col>
                    <ViewBook />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
