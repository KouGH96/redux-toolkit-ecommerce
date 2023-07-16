import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { calculateTotals } from "./features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store)=> store.cart)

  useEffect(()=>{
    dispatch(calculateTotals())
  }, [cartItems]);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App;
