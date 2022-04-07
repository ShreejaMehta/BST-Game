import { useState } from "react";
import { BinarySearchTree, useBinarySearchTree } from "react-tree-vis";
function Numbers()
{
  const [insertValue, setInsertValue] = useState(0);
  const { ref, insert } = useBinarySearchTree();
  return(
    <div >
      <input type="number" onChange={(elem) => setInsertValue(parseInt(elem.currentTarget.value, 10))}/>  <button onClick={() => {insert(insertValue) }}>Insert</button>
    </div>
    
  )

}

export default Numbers