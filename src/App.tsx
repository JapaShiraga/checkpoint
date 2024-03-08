import Card from './components/cartão'
import './App.css'

const App : React.FC = () => {
  

  return (
    <>
    <div className="comp">

      <Card imagemurl="https://m.media-amazon.com/images/I/51DmRdSrgCL._AC_UF894,1000_QL80_.jpg"
      nome ="Arceus"
      poder = {130} />

      </div>
      
    </>
  );
};

export default App
