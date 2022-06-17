import Card from "../Card/Card";
import CardInfo from '../../fake-datas/Cards.json'
import './Prototype.scss'
import DisableCard from './../disableCard/DisableCard';
export default function Prototype(){

    return(
        <div className=" Prototype">
            <p className="Prototype_title">Ты сегодня покормил кота?</p>

            <div className="Prototype_card_container">
                {CardInfo.map((info) => (
                   info.isEnable? 
                    <Card key={`card#${info.id}`}
                    filling={info.filling}
                    portions={info.portions}
                    present ={info.present}
                    weight = {info.weight}
                    isEnable ={info.isEnable}
                    isFun = {info.IsFun}
                    about = {info.about}
                    /> :
                    <DisableCard key={`card#${info.id}`}
                    filling={info.filling}
                    portions={info.portions}
                    present ={info.present}
                    weight = {info.weight}
                    isEnable ={info.isEnable}
                    isFun = {info.IsFun}
                    about = {info.about}/>
                ))}
            </div>
        </div>
    )
}