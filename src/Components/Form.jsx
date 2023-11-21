import { useState } from 'react';

const Form = ({ addColor }) => {
  const [color, setColor] = useState();
  const handleChange = (e) => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className='container'>
      <h4>Color Generator</h4>
      <form className='color-form' onSubmit={handleSubmit}>
        <input
          type='color'
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />

        <input
          type='text'
          name='text'
          id='text'
          placeholder='#f584f1'
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <button type='submit' className='btn' style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
};
export default Form;
