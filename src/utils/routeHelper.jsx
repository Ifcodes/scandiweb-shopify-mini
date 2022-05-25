import React from 'react'
import { useParams } from 'react-router'
import ProductDescription from '../pages/ProductDescriptionPage'

const ParamsWrap = (props) => {
   const params = useParams()
      return(
        <ProductDescription  {...{...props, match: {params}} }/>
      )
}

export default ParamsWrap