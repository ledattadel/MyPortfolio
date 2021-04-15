import React from 'react'

const pic = "https://scontent.fvca1-2.fna.fbcdn.net/v/t1.6435-9/171070490_449107599494737_1864706630791080580_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=YoC_1NZ8ObIAX-Ksaq-&_nc_ht=scontent.fvca1-2.fna&oh=4570908b7770d2d8e9bd117ff42df0ab&oe=609C1F6D"
const dataParagraph =`Hi! I'm Dat. I'm a software developer based in HCM cty.I especially love building React UI.

​Outside of code, I like to create in other ways. From blogging to photography, I'm always trying new ways of expressing myself. I also like to meditate, talk to strangers, and run lifestyle experiments.
`
const Home = (props) => {

  return (
    <div className="home">
      <img className="picAvata" src={pic}></img>
      <div className="divParagraph">
        <p className="homeParagraph">{dataParagraph}</p>
      </div>
    </div>
  )
}

export default Home
