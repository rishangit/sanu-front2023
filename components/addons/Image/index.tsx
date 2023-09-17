import React from 'react';
import {Image as CoreImage} from '@/components/Primitive';

const Image = ({data}:any) => {
  return (
    <div style={{width:`${data.Image.Width}px`}}>
        <CoreImage src={data.Image.DesktopImage.data.attributes.url} />
    </div>
  )
}

export default Image
