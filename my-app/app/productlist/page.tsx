import Card from "../../Components/Card";
import { productList } from "../../data/productList";

function Page() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {productList.map((product) => (
          <Card key={product.id} card={product} />
        ))}
      </div>
    </>
  );
}

export default Page;
