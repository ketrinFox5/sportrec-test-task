import { Container } from '../node_modules/@mui/material/index';
import './App.css';
import Header from './components/Header/index';
// import OrganizationInfo from './components/OrganizationInfo/index';

function App() {

  return (
    <>
    <Header/>
    <Container sx={{maxWidth: '1160px'}}  >
    {/* <OrganizationInfo/> */}
    </Container>
    </>
  )
}

export default App;
