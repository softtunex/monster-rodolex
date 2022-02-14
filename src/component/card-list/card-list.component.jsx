
import './cardlist.style.css';
import { Card } from '../card/card.component';

export const CardList = props => (
    <div className='card-list'>{
        props.monster.map(monster=>
        <Card key={monster.id} monster={monster}/>)
      }</div>
)