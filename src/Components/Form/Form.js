import React from "react";
import { useNavigate } from "react-router-dom";

function Form() {
    const navigate=useNavigate();
    function handleSubmit(evt){
        evt.preventDefault();
        // push method replacement
    //    navigate("/home")

    // replace syntax
    navigate("/home",{replace:true})

    }
  return (
    <form action="" method="get" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Name:</label>
        <input type="text" />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Form;
