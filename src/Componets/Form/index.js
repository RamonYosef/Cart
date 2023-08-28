import {React, useState} from 'react';
import { Container} from './style';



function Form() {

  const [cart, setCart] = useState([])
  const [nome, setNome] = useState('')
  const [valor, setValor] = useState()
  const [describe, setDescribe] = useState('')
  const [id, setId] = useState(1)

  const todoObj = {id: id , nome: nome, valor:valor, describe: describe}

  const add = (e) => {
    e.preventDefault();
    
    setId(id + 1)
  
    setCart([...cart, todoObj])
  

    setNome('')
    e.target.reset();

    
  }

  const result = cart.reduce((a, b) => a + b.valor, 0);
  console.log(result);

 

  

  

  return (
    <Container>
      <form onSubmit={add}>

        <h1 className='titulo'>Shopping Cart {result}</h1>
        
        <input type='text' placeholder="Product's name" name='nome' defaultValue={nome} onChange={(e) => {
          setNome(e.target.value)
        }}></input>

        <input type='number' placeholder='Product value' defaultValue={valor} onChange={(e) => {
          setValor(e.target.valueAsNumber)
        }}></input>

        <textarea type='text' placeholder='Product Description' className='description' rows={5} defaultValue={describe} onChange={(e) => {
          setDescribe(e.target.value)}}></textarea>


        <button type='submit'>to add</button>


      </form>

      <div className='boxList'>
        {cart?.map((todoObj) => (
          <div className='list' key={todoObj.id}>
              <p><b>Produto</b>: {todoObj.nome}</p>
              <p><b>Valor</b>: R${todoObj.valor}</p>
              <p><b>Description</b>: {todoObj.describe}</p>
          </div>
        ))}

       
      </div>



      

    </Container>
  );
}

export default Form;