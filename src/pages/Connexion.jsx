import { Outlet } from "react-router-dom"


const Connexion = () => {
  return (
    <div>
      Connexion
      <div className='entries'>
        <span className='intro-word'>CREEZ VOTRE COMPTE SUR <span className='store'>AllStore</span></span>
        <div className='note'>
          <span className='sub-text'>Si vous avez déjà un compte existant cliquez</span> {'  '}
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Connexion