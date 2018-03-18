import React from 'react';
import { Parallax, Background } from 'react-parallax';
console.log("Parallax!")
const MyParallaxComponent = (props) => (
  <div>
  <Parallax
  blur={0}
  bgImage={  props.linkTo  }
  bgImageAlt="house"
  strength={400}
  >
  {/*
  Put some text content here
  or even an empty div with fixed dimensions
to have a height for the parallax.*/}
<div style={{ height: '800px' }}>
{ 
  React.Children.map(props.children, (child, i) => {
    if(child != null){
      return child;
    }else{
      return 
    }
  }) 
}
</div>
</Parallax>
</div>
);
export default MyParallaxComponent;