import { useRouter } from 'next/router'
import React from 'react'

function AnythingElse() {
  const router = useRouter()
  const {params =[]} = router.query
  

  if(params.length ===2 ){
    return (<div>
     You are viewing concept {params[0] } feature {params[1]}
    </div>)
  }
  return(
    <div>Hey</div>
  )
}

export default AnythingElse