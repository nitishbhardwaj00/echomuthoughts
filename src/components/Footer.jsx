

const socialIcons = [
    {
        id: 'Facebook',
        url: '#',
        icon: 'fa fa-facebook'
    },
    {
        id: 'Instagram',
        url: '#',
        icon: 'fa fa-instagram'
    },
    {
        id: 'Twitter',
        url: '#',
        icon: 'fa fa-twitter'
    }
]
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-logo">
                    <div className="logo">Echo My Thoughts</div>
                    <p className="footer-logo-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, omnis.</p>
                </div>
                
                <div className="social-icon-container">
                    {
                        socialIcons.map((icons) => {
                            return (
                                <a href={icons.url}>
                                <span key={ icons.id}className={icons.icon}></span>
                                    </a>
                            )
                        })
                    }
                </div>
                <p className="copywright">
                    { currentYear } © Echo My Thoughts</p>
            </div>
        </footer>
    )
}

export default Footer
