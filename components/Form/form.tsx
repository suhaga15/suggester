import { useState } from "react";

const Form = () => {
  const [salary, setSalary] = useState();
  const [store, setStore] = useState();

  return (
    <div>
      <div>What is your salary?</div>
      <div>
        <span>
          <input type="radio" />
          3-5 lakh
        </span>
        <span>
          <input type="radio" />
          5-10 lakh
        </span>
      </div>

      <div>Where do you shop the most?</div>
      <div>
        <span>
          <input type="radio" />
          Amazon
        </span>
        <span>
          <input type="radio" />
          Patanjali store
        </span>
      </div>
    </div>
  );
};

export default Form;
