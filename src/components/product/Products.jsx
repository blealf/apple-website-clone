import React from 'react'
import ProductItem from './ProductItem'
import '../../assets/styles/productItem.scss'
import { BsApple } from 'react-icons/bs'

const Products = () => {
  return (
    <div>
      <ProductItem 
        title="Iphone 13 Pro"
        subtitle="Oh. So. Pro."
        links={[{name: 'Learn more', src: '#'}, {name: 'Buy', src: '#'}]}
        image={require('../../assets/images/iphone_1.jpeg')}
      /> 
      <ProductItem 
        title="Iphone 13"
        subtitle="Your new superpower"
        links={[{name: 'Learn more', src: '#'}, {name: 'Buy', src: '#'}]}
        image={require('../../assets/images/iphone_13.jpg')}
        color={{ 
          background: '#35283C', 
          title: '#F5F5F7', 
          subtitle: '#FCC0E9',
          links: '#2997FF'
        }}
        ImgWidth="55vw"
      /> 
      <ProductItem 
        title="Last-minute gift? You're just in time."
        subtitle="Valetine's Day"
        links={[{name: 'Shop', src: '#'}]}
        image={require('../../assets/images/valetine.jpg')}
        color={{ 
          background: '#F8F1F8', 
          title: '#602D62', 
          subtitle: '#602D62',
          links: '#2997FF'
        }}
        ImgWidth="55vw"
        swapTitle={true}
      />
      <div className="bi-grid">
        <ProductItem 
          title="WATCH"
          subtitle="Introducing our largest display yet"
          links={[{name: 'Learn more', src: '#'}, {name: 'Buy', src: '#'}]}
          image={require('../../assets/images/watch.jpg')}
          color={{ 
            background: '#F5F5F7'
          }}
          ImgWidth="35vw"
          subtitleInfo="series 7"
          info="New"
          titleIcon={BsApple}
          height="540px"
        />
        <ProductItem 
          backgroundImage={require('../../assets/images/shot_image.jpg')}
          height="540px"
        />
      </div> 
      <div className="bi-grid">
        <ProductItem 
          title="WATCH"
          subtitle="Introducing our largest display yet"
          links={[{name: 'Learn more', src: '#'}, {name: 'Buy', src: '#'}]}
          image={require('../../assets/images/watch.jpg')}
          color={{ 
            background: '#F5F5F7'
          }}
          ImgWidth="35vw"
          subtitleInfo="series 7"
          info="New"
          titleIcon={BsApple}
          maxHeight="540px"
        />
        <ProductItem 
          backgroundImage={require('../../assets/images/shot_image.jpg')}
          maxHeight="540px"
        />
      </div> 
    </div>
  )
}

export default Products
