
import { useFetchGif } from "../hooks/useFetchGif"
import { GifItem } from "./GifItem"

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGif(category)

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className="card-grid">
        {
          images.map((images) => (
            <GifItem
              key={images.id}
              {...images}
            />
          ))
        }
      </div>
    </>
  )
}