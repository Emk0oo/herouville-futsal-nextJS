// utils/cart.ts
export interface CartItem {
    id: string;
    title: string;
    description: string;
    price: number;
    quantity: number;
    imageBase64: string;
  }
  
  export const getCart = (): CartItem[] => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('cart');
      return cart ? JSON.parse(cart) : [];
    }
    return [];
  };
  
  export const saveCart = (cart: CartItem[]) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };
  
  export const addToCart = (item: CartItem) => {
    const cart = getCart();
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      cart.push(item);
    }
    saveCart(cart);
  };
  