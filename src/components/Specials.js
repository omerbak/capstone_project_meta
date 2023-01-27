import React from 'react'
import meal1 from "../icons_assets/greek salad.jpg"
import meal2 from "../icons_assets/bruchetta.jpg"
import meal3 from "../icons_assets/lemon dessert.jpg"

const Specials = () => {
  return (
    <section className="specials">
        <div className="container">
            <div className="top-elements">
                <h1>This Weekend Specials!</h1>
                <a href="#" className='cta-btn'>Online Menu</a>
            </div>
            <div className="cards-box">
                <div className="card">
                    <img src={meal1} alt="" />
                    <div className="card-text">
                        <div className="img-title">
                            <h5 className='meal-name'>Greek salad</h5>
                            <span className='price'>$12.99</span>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit minima numquam tempora dicta consequatur perferendis nesciunt accusamus doloremque eum sequi.</p>
                        <a href="#">Order Delivery<span class="material-symbols-outlined">takeout_dining</span></a>
                    </div>
                </div>
                <div className="card">
                    <img src={meal2} alt="" />
                    <div className="card-text">
                        <div className="img-title">
                            <h5 className='meal-name'>Greek salad</h5>
                            <span className='price'>$12.99</span>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit minima numquam tempora dicta consequatur perferendis nesciunt accusamus doloremque eum sequi.</p>
                        <a href="#">Order Delivery<span class="material-symbols-outlined">takeout_dining</span></a>
                    </div>
                </div>
                <div className="card">
                    <img src={meal3} alt="" />
                    <div className="card-text">
                        <div className="img-title">
                            <h5 className='meal-name'>Greek salad</h5>
                            <span className='price'>$12.99</span>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit minima numquam tempora dicta consequatur perferendis nesciunt accusamus doloremque eum sequi.</p>
                        <a href="#">Order Delivery<span class="material-symbols-outlined">takeout_dining</span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Specials