import React from 'react'
import bannerImg from '../assets/banner.png';
import wavy from '../assets/wavy.png'
function Banner() {
    return (
        <section className="banner">
            <div className="container">
            <div className=" columns two-columns">
                <div className="col banner-content">
                    <h1 className="title">Lorem ipsum dolor sit amet.</h1>
                    <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus labore voluptatum quaerat nobis ipsa architecto! Illum consequuntur unde corporis sint.</p>
                </div>
                <div className="col img-container">
                    <img src={bannerImg} alt="Banner-img" />
                </div>
                </div>
                
            </div>
            <img src={wavy} alt="wavy" className="wavy-bottom-img"/>
        </section>
    )
}

export default Banner
