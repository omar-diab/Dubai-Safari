import './Banner.css'

import bannerImage from '../../images/banner.jpg'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="banner-wrapper">
            <div className="banner-layout">
                <h1 className='banner-title'>
                   Dubai is waiting for you
                </h1>
            </div>
            <img src={bannerImage} alt="banner" className='banner-img'/>
        </div>
    </div>
  )
}

export default Banner