import './places.css'
import { useParams } from 'react-router-dom';
export default function Places() {
  let { id } = useParams();
    return (
    <div className="places">
    <h1>Aqui va el Place {id}</h1>
    </div>
    )
  }