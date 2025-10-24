import studio from "/images/studio.jpg"
import "./Home.css"
import fine_line from "/images/services/1.jpeg"
import removal from "/images/services/2.jpg"
import piercing from "/images/services/3.jpg"
import artists from "/images/artists.jpg"

export const Home = () => {
  return (
    <>
      <div className="home-hero">
        <h1>Noble Art Studios</h1>
      </div>

      <img src={studio} className="imgHome" alt="Noble Art Studio Interior"/>

      <div className="home-subtitle-section">
        <h2>Much more than a tattoo studio</h2>
      </div>

      <div className="main-wrapper">
        <img src={fine_line} className='featured' alt="Fine Line Tattoo Art"/>
        <img src={removal} className='featured' alt="Tattoo Removal Services"/>
        <img src={piercing} className='featured' alt="Professional Piercing"/>
        <img src={artists} className='featured' alt="Our Master Artists"/>
      </div>

      <div className="home-cta-section">
        <h2>It&apos;s not a tattoo, it&apos;s art on your skin</h2>
      </div>
    </>
  );
}