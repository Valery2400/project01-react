import {v4} from 'uuid'

import './styles.css';
import { serverData } from './data';
import AnimalCard from '../../components/AnimalCard/AnimalCard';

function Lesson05 (){
const AnimalCards = serverData.map((animal) => {
    return <AnimalCard animalData={animal}/>
})
return (
    <div className='lesson05-component'>
        {AnimalCards}
    </div>
);
}

export default Lesson05;