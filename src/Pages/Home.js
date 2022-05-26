import Part1 from "../components/Part1";
import Part2 from "../components/Part2";
import Part3 from "../components/Part3";
import Part4 from "../components/Part4";
import Img11 from "../img/10.PNG"



function Home() {
    return (
        <div className="App">

            <Part1 />
            <Part2 />
            <Part3 title="الكتب المضافة مؤخرا" />
            <div>
                <img className="w-100" src={Img11} alt="" />
            </div>
            <Part3 title="الكتب  الأكثر طلبا" />
            <Part4 />
        </div>
    );
}

export default Home;
