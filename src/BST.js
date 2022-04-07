
import { BinarySearchTree, useBinarySearchTree } from "react-tree-vis";
import { useContext, useState } from "react";
import "./style.css";
import Chance from "chance";
import randomNoGenerator from "simple-random-number-generator";
import Numbers from "./Numbers";
import RandomNums from "./RandomNums";
import InsertContext from "./InsertContext";

function BST() {
  const random = require("simple-random-number-generator");
  let params = {
    min: 1,
    max: 100,
    integer: true
  };
  const { ref, insert, search } = useBinarySearchTree();
  const [insertValue, setInsertValue] = useState(0);
  const [isInsert, setIsInsert] = useState(true);


  var searchValue;
  let myarr =[];
  var arr;
  var count=1;
  var count2 =1;

  function refreshPage() {
    window.location.reload(false);
  }


  return (
    <div className="container">
      <div className="typing">
        <h1>Hello Participants Welcome to Techela 7.0</h1>
      </div>
      <div className="typing">
        <h5>An interesting game based on the concept of Binary Search Tree</h5>
      </div>
      <div>
        <h3 className="typing">Step 1:</h3>
        <input className="input" type="number" onChange={(elem) => {
          setInsertValue(parseInt(elem.currentTarget.value, 10))}} />  
        <button className='btn' onClick={() => { 
          insert(insertValue) }}>Insert Your Lucky Number</button>
        <br />
        <h3 className="typing">Step 2:</h3>
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
        <h3 className="typing">Step 3:</h3>
        <button className='btn' onClick={() => {

          if(count2>1)
          {
            refreshPage();
          }
          arr = [insertValue, myarr[0], myarr[1], myarr[2], myarr[3], myarr[4], myarr[5]]
          searchValue = Math.floor(Math.random() * arr.length)
          search(arr[searchValue])
        }}>Show the Winning Number</button>
      </div>
      <BinarySearchTree ref={ref} treeStyles={{}} />
    </div>
  );
  
}

export default BST

// store 7 values somewhere 
// search random number from those 7 numbers 