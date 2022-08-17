import { Product } from "./components/Product";
import ProductData from "./ProductData";

export default function App() {
  return (
    <div className="App">
      {ProductData.map((contents) => (
        <Product
          key={contents.id}
          image={contents.image}
          name={contents.name}
          price={contents.price}
          totalSales={contents.totalSales}
          timeLeft={contents.timeLeft}
          rating={contents.rating}
        />
      ))}
    </div>
  );
}
