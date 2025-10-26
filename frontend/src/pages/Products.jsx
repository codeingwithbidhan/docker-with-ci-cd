import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center p-6 min-h-[60vh]">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md w-64">
            <h3 className="font-bold">{product.name}</h3>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
