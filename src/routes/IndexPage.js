import React from 'react';
import { connect } from 'dva';
import HeadItem from '../components/HeadItem'
import CarouselImages from '../components/CarouselImages'
import PosterImage from "../components/PosterImage"

let handleOnclick=()=>{
  console.log("image been clicked")
}

function IndexPage() {
  let carouses=[
      <PosterImage
          key="1"
          imageSrc="http://pic.jj20.com/up/allimg/1011/05241G14F4/1F524114F4-6.jpg"
          onClick={handleOnclick}
      />,
    <PosterImage
        key="2"
        imageSrc="http://pic.jj20.com/up/allimg/1011/05241G14F4/1F524114F4-6.jpg"
        onClick={handleOnclick}
    />,
    <PosterImage
        key="3"
        imageSrc="http://pic.jj20.com/up/allimg/1011/05241G14F4/1F524114F4-6.jpg"
        onClick={handleOnclick}
    />
  ]

  return (
      <CarouselImages posters={carouses}/>
    // <HeadItem
    //     name="黄振华"
    //     from="fesf"
    // />
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
