import React, { useEffect, useState } from "react";
import { getAllProducts } from '../../lib/api'


export default function CategoryList() {

  const [category, setCategory] = useState([])

  const categoryData = async () => {
    try {
      const res = await getAllProducts()
      setCategory(res.data)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => { 
    categoryData()
  })

  return (
    <>
      <h1>Because it needs to be returned </h1>
    </>
  )
}


