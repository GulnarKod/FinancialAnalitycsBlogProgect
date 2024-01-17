import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import ArticleDetailInfo from './pages/ArticleDetailInfo';
import Articles from './pages/Articles';
import ErrorPage from './ErrorPage';
import './App.css';

function App() {
  return (
    <Container>
      <Row className='container_row'>
        <Col className='header_col'>
          <Header />
        </Col>
        <Col className='articles_col'>
          <Routes>
            <Route path='/' element={<Articles />} />
            <Route path='/Articles/:id' element={<ArticleDetailInfo />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
