import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--backend-vinted--75fxzbtlk68n.code.run/offers"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>En cours de chargement ... </p>
  ) : (
    <div>
      {data.offers.map((offer, index) => {
        return (
          <Link key={offer._id} to={`/offer/${offer._id}`}>
            <article>
              <div>
                {offer.owner.account.avatar && (
                  <img
                    src={offer.owner.account.avatar.secure_url}
                    alt="user avatar"
                  />
                )}{" "}
                <span>{offer.owner.account.username}</span>
              </div>
              <p>{offer.product_name}</p>
              <img src={offer.product_image.secure_url} alt="clothe" />
              <p>{offer.product_price} €</p>
              <div>
                {offer.product_details.reverse().map((detail, index) => {
                  //   console.log(detail);
                  if (detail.MARQUE) {
                    return <p key={index}>{detail.MARQUE}</p>;
                  } else if (detail.TAILLE) {
                    return <p key={index}> {detail.TAILLE} </p>;
                  } else {
                    return null;
                  }
                })}
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
