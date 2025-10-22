import React, { use } from 'react'

interface Props {
    params : Promise<{id: number; photoId: number}>
};

const PhotoPage = ({params }: Props) => {
  const {id, photoId} = use(params);  
  return (
    <div>PhotoPage {id} {photoId}</div>
  )
}

export default PhotoPage