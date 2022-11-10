import { getGifs } from "../helpers/getGifs";


export const GidGrid = ({ category }) => {


getGifs(category);

  return (
    <>
    <h3> {category} </h3>
    </>
  )
}
