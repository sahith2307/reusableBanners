// Write your code here.

import './index.css'

const BannerCard = props => {
  const {bannerCardDetails} = props
  const {headerText, description, className} = bannerCardDetails
  return (
    <div className={`${className} banner-cont`}>
      <div>
        <h1 className="head">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="butn" type="button">
          Show More
        </button>
      </div>
    </div>
  )
}

export default BannerCard
