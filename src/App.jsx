import Restaurante from "./assets/restaurante.webp"
import './App.css';
import  {Navegacao} from './Navegacao.jsx'

export function App() {

  return  <>
      <img className="capa" src={Restaurante} alt="" />
      <Navegacao />
    </>
}