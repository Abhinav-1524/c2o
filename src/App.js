import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './components/nav.jsx'
import Vido from './components/vid.jsx'
import Cardo from './components/cards.jsx'
import Partner from './components/partnership.jsx'
import Ben from './components/benefits.jsx'
import Foot from './components/footer.jsx'
import Hehe from './hehe'


function App() {
  return (
   <>
   <Nav />
   <Vido />
   <div className='py-4'>
    <Cardo />
   </div>
   {/* <Hehe /> */}
   <Partner />
   <Ben />
   <Foot />

   </>
  );
}

export default App;
