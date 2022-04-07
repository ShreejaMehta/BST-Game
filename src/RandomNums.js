import { useState } from "react";
import { BinarySearchTree, useBinarySearchTree } from "react-tree-vis";
function RandomNums()
{ const { ref, insert } = useBinarySearchTree();
  const random = require("simple-random-number-generator");
    let params = {
    min: 5,
    max: 76,
    integer: true
    };
  var arr1= random(params)
  var arr2= random(params)
  var arr3= random(params)
  var arr4= random(params)
  var arr5= random(params)
  var arr6= random(params)
  return(
    <div >
        <button onClick={() => {insert(arr1)
        insert(arr2)
        insert(arr3)
        insert(arr4)
        insert(arr5)
        insert(arr6) }}>Spin</button>
    </div>
    
  )

}

export default RandomNums