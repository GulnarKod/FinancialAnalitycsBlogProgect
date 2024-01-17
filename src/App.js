import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './page/header';
import ArticleDetailInfo from './page/articleDetailInfo';
import Articles from './page/articles';
import ErrorPage from './errorPage';
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
            <Route path='/articles/:id' element={<ArticleDetailInfo />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

