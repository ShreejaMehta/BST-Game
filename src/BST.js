
import { BinarySearchTree, useBinarySearchTree } from "react-tree-vis";
import { useContext, useState } from "react";
import "./style.css";
import randomNoGenerator from "simple-random-number-generator";


function BST() {
  const random = require("simple-random-number-generator");
  let params = {
    min: 1,
    max: 100,
    integer: true
  };
  const { ref, insert, search } = useBinarySearchTree();
  const [insertValue, setInsertValue] = useState(0);



  var searchValue;
  let myarr =[];
  var arr;
  var count=1;
  var count2 =2;
  var count3 = 1;

  function refreshPage() {
    window.location.reload(false);
  }


  return (
    <div className="container">
      <div className="typing">
        <h1>Hello Participants Welcome to Techela 7.0</h1>
      </div>
      <div className="typing">
        <h5>This is An Interesting Game Based On The Concept of Binary Search Tree</h5>
      </div>
      <div>
        <h3 className="typing">Step 1: The Entered Number will be Inserted into the Binary Search Tree</h3>
        <input className="input" type="number" onChange={(elem) => {
          setInsertValue(parseInt(elem.currentTarget.value, 10))
          
        
        }
        } 
          />  
        <button className='btn' onClick={() => { 
          if(count3>1)
          {
            refreshPage();
          }
          count3++
          insert(insertValue) }}>Insert Your Lucky Number</button>
        <br />
        <h3 className="typing">Step 2: 6 Random Numbers Will be inserted into the Binary Search Tree</h3>
        <button className='btn' onClick={() => {
          
          
          if(count>1)
          {
            refreshPage();
          }

          for (let i=0; i<6; i++)
          {
            myarr[i] = random(params)
            if(myarr[i]===insertValue)
            {
              myarr[i]= random(params)
            }
            for( let j=0; j<i ; j++)
            {
              if(myarr[i]===myarr[j])
              {
                myarr[i]= random(params)
                j=0;

              }
    
            }
              
            
            insert(myarr[i])
          
          }

          count++
          console.log(count)
          
        }} padding>Insert Random 6 Numbers</button>
        <br />
        <h3 className="typing">Step 3: A Random Element From The Tree Will Be Selected. If The Number You Entered Is Selected, An Alert Is Generated</h3>
        <button className='btn' onClick={() => {

          if(count2<0)
          {
            refreshPage();
          }
          count2--
          arr = [insertValue, myarr[0], myarr[1], myarr[2], myarr[3], myarr[4], myarr[5]]
          searchValue = Math.floor(Math.random() * arr.length)
          search(arr[searchValue])
          if(arr[searchValue]===insertValue)
          {
            alert("Congratulations! You Win!")
          }
        }}>Show the Winning Number</button>
         <BinarySearchTree ref={ref} treeStyles={{}}/>
      </div>
      <div className='bottom'>
      
      </div>
     
      <br />
    </div>
    
    
  );
  
}

export default BST

// store 7 values somewhere 
// search random number from those 7 numbers 