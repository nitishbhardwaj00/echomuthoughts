import React from 'react'
const ServicesData = [
{
    id: 1,
    title: 'Product1',
    text: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
    icon: 'fa fa-home'
},
{
    id: 2,
    title: 'Product2',
    text: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
    icon: 'fa fa-home'
},
{
    id: 3,
    icon: 'fa fa-home',
    title: 'Product3',
    text: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
}
];

function Services() {
    return (
        <section className="services">
            <div className="container">
            <div className="title-container">
                <h2 className="services-title">Our Services</h2>
                    <p className="services-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, fugit!</p>
                    <button className="btn ghostbtn">Get Started</button>
            </div>
            {
                ServicesData.map((services) => {
                    return (
                        <div className="product-list" key={services.id}>
                            <span className={services.icon}></span>
                        <h3 className="product-title"> { services.title }</h3>
                            <p className="product-text"> { services.text }</p>
                        </div>
                    )
                    
                })
                }
                </div>
        </section>
    )
}

export default Services
