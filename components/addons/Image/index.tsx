import React from 'react';
import {Image as CoreImage} from '@/components/Primitive';

const Image = ({data}:any) => {
  return (
    <div>
        <CoreImage src={`${process.env.NEXT_PUBLIC_SERVER}${data.Image.data.attributes.url}`} />
      {/* <img src={`${process.env.NEXT_PUBLIC_SERVER}${data.Image.data.attributes.url}`} /> */}
    </div>
  )
}

export default Image
