import {Container, Jumbotron} from 'react-bootstrap';
import './css/index.css';

import SearchForm from './Components/SearchForm';

function App() {
  return (
    <div className="App">
      <Jumbotron>
        <Container>
          <h1>The Gallery</h1>
          <SearchForm />  
        </Container>
      </Jumbotron>
    </div>
  );
}

export default App;
