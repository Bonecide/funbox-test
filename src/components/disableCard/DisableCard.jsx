import './DisableCard.scss'
export default function DisableCard({filling , portions , present, weight , isEnable , isFun, about}) {
  
    return(

        <div className="Card_container_disabled">
            
                <div  className="Card">
                    
                        <div className="Card_text">
                                <p className='description'>sdfdsfdsfdsf</p>
                                <h2>Нямушка</h2>
                                <h3>с {filling}</h3>
                                <p className='Card_present'>{portions}
                                <br />
                                {present}
                                <br />
                                {isFun && 'заказчик доволен'}
                                </p>
                                
                        </div>
                        <div  className='Card_weight'>
                            <p>
                                {weight}
                            </p>
                            <p className='KG'>
                                КГ
                            </p>
                        </div>
                         <hr />
                  
                        <div className='Card_img'>
                            <img src={'img/Cat.png'} alt="" />
                        </div>
                       
                </div> 
           <p className='Card_About'>
            Печалька, с {filling} закончился.
           </p>
        </div>
    )
}