import Header from "../../../shared/Header/Header";
import CustomerFeedBack from "../CustomerFeedBack/CustomerFeedBack";
import Gallery from "../Gallery/Gallery";
import ShopCategory from "../ShopCategory/ShopCategory";
import TrendingProduct from "../Trending/TrendingProduct";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Gallery></Gallery>
            <ShopCategory></ShopCategory>
            <TrendingProduct></TrendingProduct>
            <CustomerFeedBack></CustomerFeedBack>
        </div>
    );
};

export default Home;