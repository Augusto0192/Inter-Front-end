import Item from "./components/Item/index";
import Card from "./components/Card";

const App = () =>{
  
  return(
    <>
    
      

      <ul>
        <Item>
           Caos e ordem 

        </Item>
        <Item>
           A Ordem mantem as coisas estaticas sejam justas ou injustas

        </Item>
        <Item>
          O Caos quebra as estruturas permitindo uma nova ordem a se erguer.
        </Item>
      </ul>
      <Card/>

    </>
  )
}

export default App;