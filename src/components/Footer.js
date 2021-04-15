import React from 'react'
import SocialNetwork from './Footer/SocialNetwork'
const linkIns = "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fhoalacmanthien%3Ffbclid%3DIwAR0iLT0XlckJ6Q3gwmxSeOCeaVomCfgObjzPhLnLzTfEvEJl13CcZ107Ijc&h=AT33-0q6tjKs12qtfhJ_tOxp5iyvbIQXltcQ50Jlgl4P2_qQQfMQgnMqquxvVHGXhpg1hM8carzJDkbQyoI6DQxXFwvfRND6V6cySW8ZZCUZPpYbuCNfCTKJQ8HlqYlsvsPH8Dc4IvmVmZ-r-N7E"
const linkFb  = "https://www.facebook.com/profile.php?id=100031865029833"
const linkGithub ="https://github.com/ledattadel"
const Footer = () => {
    return (
        <div className="footer">
            <div className="socialElement">
            <SocialNetwork class="fab fa-instagram" link={linkIns}></SocialNetwork>
            </div>
            <div className="socialElement">
            <SocialNetwork class="fab fa-facebook" link={linkFb}></SocialNetwork>
            </div>
            <div className="socialElement">
            <SocialNetwork class="fab fa-github" link={linkGithub}></SocialNetwork>
            </div>
            <div className="socialElement">
            <SocialNetwork class="fab fa-linkedin-in" link="/"></SocialNetwork>
            </div>
           
           
            
           
        </div>
    )
}

export default Footer
