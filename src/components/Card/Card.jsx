import { useState } from 'react'
import './Card.scss'
export default function Card({filling , portions , present, weight , isEnable , isFun, about}) {
    const [active,setActive] = useState(false)
    const [description, setDescription] = useState ('Сказочное заморское яство')
    const hrColor =  {
        'background-color': !active ? '#2EA8E6' : '#D91667'
    }
    const CardBorder = {
        "border":  `4px solid ${!active ? '#2EA8E6' : '#D91667' }` 
    }
    const CircleColor = {
        "background" : !active ? '#2EA8E6' : '#D91667'
    }
    const Change = () => {
        if (active) {
            setDescription ('Котэ не одобряет?')
        }
        else {
            setDescription('Сказочное заморское яство')
        }
    }
    return(

        <div className="Card_container">
            
                <div onMouseEnter={Change} onMouseLeave={()=> setDescription('Сказочное заморское яство')}  style={CardBorder} onClick={() => setActive(!active)} className="Card">
                    
                        <div className="Card_text">
                                <p className={active ? 'descriptionActive' : 'description'}>{description}</p>
                                <h2>Нямушка</h2>
                                <h3>с {filling}</h3>
                                <p className='Card_present'>{portions}
                                <br />
                                {present}
                                <br />
                                {isFun && 'заказчик доволен'}
                                </p>
                                
                        </div>
                        <div style={CircleColor} className='Card_weight'>
                            <p>
                                {weight}
                            </p>
                            <p className='KG'>
                                КГ
                            </p>
                        </div>
                         <hr style={hrColor} />
                  
                        <div className='Card_img'>
                            <img src={'img/Cat.png'} alt="" />
                        </div>
                       
                </div> 
            {!active ? 
            <p className='Card_About'>
                Чего сидишь? Порадуй котэ, <span onClick={()=> setActive(true)}>купи.</span> 
            </p> :
            <p className='Card_About'>
                {about}
            </p>
            }
        </div>
    )
}