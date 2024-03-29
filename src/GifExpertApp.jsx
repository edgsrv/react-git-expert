import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  }
  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory
        onNewCategory={onAddCategory}
      />

      <ol>
        {categories.map((category, i) => {
          return <GifGrid
            key={category}
            category={category} />
        })}
      </ol>
    </>
  )
}
