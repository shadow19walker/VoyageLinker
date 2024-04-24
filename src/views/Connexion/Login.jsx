import { Row, Form, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import "../../pages/styles/Connexion.css"

function Login() {
  return (
    <div className='centered'>
      <div className='entries'>
        <span className='intro-word'>CONNECTEZ VOUS SUR <span className='store'>AllStore</span></span>
        <div className='note'><span className='sub-text'>Si vous n’avez pas un compte existant cliquez</span> {'  '} 
        <Link to="signup" className='link-deco'>ici</Link></div>
        <div className='entries-pic'>
          <Form  style={{ width: '400px' }}  method='POST'>

            <Row className='mb-3'>
              <Form.Group className="user" controlId="username">
                <Form.Control 
                  name='username'
                  type='text'
                  placeholder="Nom d'utilisateur" 
                />
              </Form.Group>
            </Row>
            <span className='sub-text text-bel' >Vous pouvez utiliser les lettres les chiffres et les symboles </span>
            
            <Row className='mb-3'>
              <Form.Group as={Col} controlId="password">
                <Form.Control 
                  name="pwd" 
                  type="password" 
                  placeholder="Mot de Passe"
                  />
              </Form.Group>
            </Row>

            <Button className='custom-button' variant="secondary" type="submit">
              Connectez Vous
            </Button><br/><br/>
            <span className='sub-text'>Vous etes un employer? </span> {'  '} 
            <Link to="/connexion/login-employee" className='link-deco'>Cliquer ici!</Link>
          </Form>
          {/* <img className='image' src={Image} alt="/"/> */}
        </div>
      </div>
    </div>
  )
}

export default Login;