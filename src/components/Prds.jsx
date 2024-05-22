import "../App.css";
import { Product } from "./Product";
import { Footer } from "./Footer";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export function Prds() {
  const products = [
    {
      title: "Casio",
      desc: "Casio watches are known for their ruggedness and are built to withstand harsh conditions. In one breath, this well-known Japanese manufacturer can turn out the defacto $15 digital watch.",
      price: "5000",
      quantity: "10",
      image:
        "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Breitling",
      desc: "Breitling watches are known for their ruggedness and are built to withstand harsh conditions. In one breath, this well-known Japanese manufacturer can turn out the defacto $15 digital watch.",
      price: "5000",
      quantity: "10",
      image:
        "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Patrek Phillipe",
      desc: "Patrek Phillipe watches are known for their luxury and sophistication. In one breath, this well-known Swiss manufacturer can turn out exquisite timepieces for the discerning collector.",
      price: "10000",
      quantity: "5",
      image:
        "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Piaget",
      desc: "Piaget watches are known for their elegance and precision. In one breath, this well-known Swiss manufacturer can turn out luxurious timepieces for those with a taste for the finer things in life.",
      price: "15000",
      quantity: "3",
      image:
        "https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div container>
      <div className="row col-11 mx-auto">
        {products.map((product, index) => (
          <Product key={index} dataobject={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
