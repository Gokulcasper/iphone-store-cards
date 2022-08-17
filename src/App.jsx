import { Product } from "./components/Product";
import ProductData from "./ProductData";

export default function App() {
  return (
    <div className="App">
      {ProductData.map((datas) => (
        <Product
          key={datas.id}
          image={datas.image}
          name={datas.name}
          price={datas.price}
          totalSales={datas.totalsales}
          timeLeft={datas.timeLeft}
          rating={datas.rating}
        />
      ))}
    </div>
  );
}
