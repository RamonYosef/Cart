import { styled } from "styled-components";

export const Container = styled.div`



display: flex;
justify-content: space-around;
align-items: center;
gap: 32px;


height: 100%;




form{

    width: 500px;
    height: 600px;


    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;

    


}

.titulo{
    font-family: 'Poppins', sans-serif;
    color: var(--primary);
}

input{
    width: 400px;
    height: 50px;
    border: 3px solid var(--background);
    font-family: 'Poppins', sans-serif;
    color: black;
    padding-left: 16px;
    border-radius: 5px;
}

.description{
    width: 400px;
    height: 150px;
    border: 3px solid var(--background);
    font-family: 'Poppins', sans-serif;
    color: black;
    padding-left: 16px;
    border-radius: 5px;
    padding-top: 16px;
    padding-right: 16px;

    text-align: start;
}

.description::placeholder{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    
}

input::placeholder{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    
}

button{
    width: 240px;
    height: 50px;
    background-color: var(--primary);
    color: var(--white);

    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.7px;
    border-radius: 5px;

    cursor: pointer;

    transition: all 0.5s;
}

button:hover{
    background-color: #313131;
}


.boxList{
    

    display: grid;
    grid-template-columns: repeat(1, 300px);
    grid-template-rows: repeat(1,200px);
    gap: 24px;

    width: 500px;
    height: 600px;
    

.list{

     background-color: white;
     box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
     
     padding: 24px;

     display: flex;
     flex-direction: column;
     gap: 24px;
     word-wrap: break-word;

    
}

p{
    font-family: 'Poppins', sans-serif;
  
   
}
}

`
