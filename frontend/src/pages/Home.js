import "../App.css";
import Navbar from '../components/Navbar';
import ProductSection from '../components/ProductSection';
import Carousl from '../components/Carousl';


function Home() {
    return(<>
    <div className='container-fluid bg-white mt-5 pt-3'>
    <Navbar></Navbar>
     <div className="row">
    <Carousl/>
    </div>
    </div>
    <div className="container bg-white">
        <div className="row">
            <ProductSection/>
        </div>
    </div>
    </>);
}

export default Home;