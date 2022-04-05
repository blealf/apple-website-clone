import React, { Suspense } from 'react'
// import { useImage } from 'react-image'
import { MdArrowForwardIos } from 'react-icons/md'
import '../../assets/styles/productItem.scss'

const ProductItem = ({
  height,
  maxHeight,
  backgroundImage, 
  swapTitle, 
  info, 
  title,
  titleIcon,
  subtitle,
  subtitleInfo,
  links,
  image,
  ImgWidth, 
  color,
}) => {
  const TitleIcon = titleIcon
  console.log(titleIcon)
  const getTitle = () => {
    return (
      <h1 style={{ color: color?.title || 'black' }}>
        {titleIcon ? <TitleIcon /> : null}{title}
      </h1>
    )
  }
  const getSubtitle = () => {
    return (
      <h2 style={{ color: color?.subtitle || 'black' }}>{subtitle}</h2>
    )
  }
  const formatTitleSubtitle = () => {
    if (swapTitle) {
      return (
        <>
          {getSubtitle()}
          {getTitle()}
        </>
      )
    } else {
      return (
        <>
          {getTitle()}
          {getSubtitle()}
        </>
      )
    }
  }
  return (
    <div 
      className="product-display"
      style={
        {
          background: color?.background ? color?.background : `url(${backgroundImage}) no-repeat top center`,
          maxHeight: height || '650px',
          height: height ? height : null
        }
      }
    >
      { info ? <p className="info">{info}</p> : null}
      { formatTitleSubtitle() }
      {subtitleInfo ? <p className="subtitle-info">{subtitleInfo}</p> : null}
      <p className="product-links">
        { links && links.length !== 0 ?
          links.map((link) => {
            return (
              <a
                style={{ color: color?.links || '#217AD3' }}
                key={link.name}
                href={link.src}
              >
                {link.name} 
                <MdArrowForwardIos className="arrow-icon"/>
              </a>
            )
        }) : null
       }
      </p>
      <div className="product-image">
        {
          image ?
          <img style={ImgWidth ? {maxWidth: ImgWidth} : null} src={image} alt={title}/> :
          null
        }
      </div>    
    </div>
  )
}

export default ProductItem

