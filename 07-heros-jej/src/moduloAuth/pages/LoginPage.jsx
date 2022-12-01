import { useNavigate } from "react-router-dom";

export const LoginPage = () => {

  const navigate = useNavigate();

  const iniciarSeccion = ()=>{
    navigate('/', {
      replace: true 
  });

  }

  return (
    <div className="container mt-5">
      <h1>Login uwu</h1>
      <hr />

      <button className="btn btn-primary"
      onClick={ iniciarSeccion }
      >
        Login
      </button>
    </div>
  )
}
