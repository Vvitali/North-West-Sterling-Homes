import React from 'react';
import { Parallax } from 'react-parallax';
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
<div style={{ height: props.height }}>
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