import { useState } from 'react';
import ColorList from './Components/ColorList';
import Form from './Components/Form';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [colors, setColors] = useState(new Values('#ba2693').all(10));
  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (e) {
      toast.error(e.message);
    }
  };
  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position='top-center' />
    </main>
  );
};
export default App;
