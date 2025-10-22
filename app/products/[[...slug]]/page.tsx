import React, { use } from 'react'

interface Props {
    params: Promise< {slug: string[]}>
};

const ProductPage = async ({params} : Props) => {
  const {slug} = await params; 
  console.log('Slug value:', slug);   
  return (
    <div>ProductPage {slug}</div>
  )
}

export default ProductPage