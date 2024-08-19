import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartActions } from "../Store/cartSlice";
import axios from "axios";
import { toast } from "react-toastify";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cardItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  const [food_list, setFood_list] = useState([]);
  const [cartid, setcartId] = useState({});

  const url = "http://localhost:4000/api/food/list";

  // Fetch the list of food items

  const fetchFood_list = async () => {
    try {
      const response = await axios.get(url);
      if (response.data.success) {
        setFood_list(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const loadCardData = async (token) => {
    const response = await axios.get("http://localhost:4000/api/cart/getitem", { headers: { token } });
    const cartItem = response.data.cartData;
    setcartId(cartItem);
    setCartItems(cartItem);
  };
  const deleteCartData = async(itemId)=>{
    const response = await axios.post("http://localhost:4000/api/cart/deleteitem",{itemId},{headers:{token}})
    if(response.data){
      toast.success(response.data.message)
      setTimeout(()=>{
        location.reload();
      },1000)
      
    }else{
      toast,error(response.data.message)
    }
    
  }

  useEffect(() => {
    // Load data on component mount
    const loadData = async () => {
      await fetchFood_list();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCardData(localStorage.getItem("token"));
      }
    };
    loadData();
    
  }, []);

  useEffect(() => {
    Object.keys(cartid).forEach(key => {
      if(cartid[key]>0){
        const data1 = food_list.find(item => item._id === key);
      if (data1) {
        const data = {
          id: data1._id,
          item: data1.image,
          title: data1.name,
          price: data1.price,
          quantity: cartid[key],
          category:data1.category,
          total: data1.price * cartid[key]
        };
        dispatch(CartActions.addCartItem(data));
      }}
    });
  }, [food_list, cartid, dispatch]);

  // Add item to cart
  const addToCard = async (index, itemId) => {
    if (token) {
    if (!cardItems[itemId]) {
      setCartItems(prev => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    const response = await axios.post("http://localhost:4000/api/cart/additem", { itemId }, { headers: { token } });
    if(response.data){
      
        setTimeout(()=>{
        location.reload();
        },3000)
        toast.success(response.data.message)
        
      }else{
        toast,error(response.data.message)
      }
    }else{
      toast.error("Login first!")
    }
  };

  // Remove item from cart
  const removeFromCard = async (index, itemId) => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
    const response=   await axios.post("http://localhost:4000/api/cart/removeitem", { itemId }, { headers: { token } });
      if(response.data){
      toast.success(response.data.message)
      setTimeout(()=>{
        location.reload();
      },1000)
      }else{
        toast,error(response.data.message)
      }
    }
  };

  // Load cart data from server


  

  const providerValue = {
    food_list,
    cardItems,
    setCartItems,
    addToCard,
    removeFromCard,
    token,
    setToken,
    cartid,
    setcartId,
    deleteCartData
  };

  return (
    <StoreContext.Provider value={providerValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
