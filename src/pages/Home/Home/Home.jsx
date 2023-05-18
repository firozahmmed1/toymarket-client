import Header from "../../../shared/Header/Header";
import CustomerFeedBack from "../CustomerFeedBack/CustomerFeedBack";
import TrendingProduct from "../Trending/TrendingProduct";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <TrendingProduct></TrendingProduct>
            <CustomerFeedBack></CustomerFeedBack>
        </div>
    );
};

export default Home;