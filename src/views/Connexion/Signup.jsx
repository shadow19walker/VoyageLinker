import { Row, Form, Col, Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

import "../../pages/styles/Connexion.css"

const Signup = () => {

  const sexe = 'Sexe'
  const ville = 'Ville'

  return (
    <div className='centered'>
      
      <Form style={{ width: '400px' }} method='POST'>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="Name">
            <Form.Control name="nom" type="text" placeholder="Nom"/>
          </Form.Group>

          <Form.Group as={Col} controlId="Surname">
            <Form.Control name="prenom" type="text" placeholder="Prenom"/>
          </Form.Group>
        </Row>


        <span className='sub-text text-bel' >Vous pouvez utiliser les lettres les chiffres et les symboles </span>
        <Form.Group className="user" controlId="username">
          <Form.Control 
            name='username'
            type='text'
            placeholder="Nom d'utilisateur" 
          />
        </Form.Group>

        <Row className="pass">
          <Form.Group as={Col} controlId="Pwd">
            <Form.Control name="pwd" type="password" placeholder="Password"/>
          </Form.Group>

          <Form.Group as={Col} controlId="Confirmation-pwd">
            <Form.Control name="confpwd" type="password" placeholder="Confirm Password"/>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="Numero">
            <Form.Control name="numTel" type="text" placeholder="Numero"/>
          </Form.Group>

          <Form.Group as={Col} controlId="Ville">
            <Form.Select name="ville" defaultValue={ville}>
              <option value={ville} type='text'>Ville</option>
              <option value='....' type='text'>...</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <span className='sub-text text-bel' >Date de Naissance </span>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="Date">
            <Form.Control name="dateNaissance" type="date" placeholder="Date de naissance"/>
          </Form.Group>

          <Form.Group as={Col} controlId="Sexe">
            <Form.Select name='sexe'>
              <option value={sexe}>Sexe</option>
              <option value ="M" type='text'> Homme </option>
              <option value ="F" type='text'>Femme</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Button className='custom-button' variant="secondary" type="submit" value="SEND">
          Inscrivez Vous
        </Button>
          </Form>
    </div>
  )
}

export default Signup