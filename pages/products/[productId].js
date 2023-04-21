import { useRouter } from 'next/router'
import React from 'react'

function Product() {
    const router = useRouter()
    const productId = router.query.productId
  return (
    <div>Product for {productId}</div>
  )
}

export default Product