import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl text-gold mb-8 text-center">
        RUGAYA FILMS
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="bg-gray-900 p-4 rounded-xl shadow-lg">
            <img src={p.image_url} className="rounded-lg mb-4" />
            <h2 className="text-xl text-gold">{p.title}</h2>
            <p>{p.description}</p>
            <p className="mt-2 text-gold font-bold">₹ {p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
