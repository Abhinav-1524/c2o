import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './components/nav.jsx'
import Vido from './components/vid.jsx'
import Cardo from './components/cards.jsx'
import Partner from './components/partnership.jsx'
import Ben from './components/benefits.jsx'
import TimeLine from './components/TimeLine'
import CardGrid from './components/Partner'
import Com from './components/commitment'
import Footer from './components/Footer';



function App() {
  return (
   <>
    <Nav />
    <Vido />
    <Com />
<TimeLine />
    <CardGrid />
    <Ben />
    <Footer />
  </>
  );
}

export default App;
