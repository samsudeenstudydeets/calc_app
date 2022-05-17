import {useState,useRef} from "react"
import './App.css';
import { Container,Row,Col,Form,Button } from "react-bootstrap";

const initalDigitNums = [1,2,3,4,5,6,7,8,9,0];

function App() {

const [digitNums,setdigitNums] = useState(initalDigitNums);
//const [typedNums,settypedNums] = useState(0);
const txtboxRef = useRef();

 
const numSelected = (Event)=>{
  txtboxRef.current.focus();
  txtboxRef.current.value += Event.target.value;
  
}

const resetTextbox=()=>{
  txtboxRef.current.value = "";
}
const addSelected = (Event)=>{
  txtboxRef.current.value += "+";
}


const equalSelected = (Event)=>{
  let tempData = txtboxRef.current.value;
  const sum = tempData.split("+").reduce((a, b) => parseInt(a)+parseInt(b), 0);
  txtboxRef.current.focus();
  txtboxRef.current.value ="";
  console.log(sum,"",txtboxRef.current.value)
  txtboxRef.current.value = sum;
   
}

const handleKeyPress = (event) => {
 
  if(event.key === "="){
    equalSelected();
    event.preventDefault();
  }
}
 
const handleSubmit=(event)=>{
  equalSelected();
  event.preventDefault();
}


  return (
    <Container className="baseContainer ">
        <Row className="justify-content-md-center">
          <Col lg="8">
            <Form onSubmit={handleSubmit}>
            
              <input  type="text" onKeyPress={handleKeyPress} ref={txtboxRef}  />
              <Button variant="light"  onClick={resetTextbox} value="reset" >X</Button> 
            </Form>
          </Col>
        </Row> 
        <Row className=" pt10 justify-content-md-center">
          
            {digitNums.slice(0,3).map((items) =>   <Col lg="4"  key={items} className=" text-center">
              
              <Button   onClick={numSelected} variant="secondary" value={items}>{items}</Button> 
              </Col>
          )}
          
       </Row>
       <Row className="mt10 justify-content-md-center">
           
            {digitNums.slice(3,6).map((items) =>   <Col lg="4" key={items}  className="pt10 text-center"> <Button  onClick={numSelected} variant="secondary" value={items}>{items}</Button> </Col>
          )}
         
       </Row>
       <Row className="mt10 justify-content-md-center">
           
            {digitNums.slice(7,9).map((items) =>   <Col lg="4" key={items}   className=" pt10 text-center"><Button  onClick={numSelected} variant="secondary" value={items}>{items}</Button> </Col>
          )}
         <Col lg="4"  className="pt10 text-center"><Button variant="secondary"  onClick={addSelected} value="add" >+</Button> <Button  onClick={equalSelected} value="equal" variant="secondary">=</Button> </Col>
       </Row>
       
</Container>

    
  );
}
 

export default App;
 