import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch();
  
  const { cartItems, isLoading } = useSelector((store)=> store.cart);
  const { isOpen } = useSelector((store)=> store.modal);


  useEffect(()=>{
    dispatch(calculateTotals())
  }, [cartItems]);

  useEffect(()=>{
    dispatch(getCartItems())
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        Loading
      </div>
    );
  }
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
