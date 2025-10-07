interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
  
}


interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
    rating?: {
      rate: number;
      count: number;
    };
  };
}


 interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
interface CategoryCard {
  name: string;
  image: string;
}


interface CategoryProductsProps {
  category: string;
}

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}


interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}