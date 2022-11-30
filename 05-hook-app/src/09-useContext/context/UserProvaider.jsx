import { useState } from "react"
import { UserContext } from "./UserContext"


// const user ={
//   id: 123,
//   name: '/valen/uwu/',
//   email: '30valenby@gmail.com'
// }

// en las propetis tendra los childrens
export const UserProvaider = ({ children }) => {

  const [user, setUser] = useState();
  



  return (
  //  <UserContext.Provider value={{ hola: 'mundo',user:user }}>
  <UserContext.Provider value={{ user, setUser }}>
        { children }
   </UserContext.Provider>
  )
}
