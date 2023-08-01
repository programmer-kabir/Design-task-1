import CustomerSuccess from "../../Components/CustomerSuccess/CustomerSuccess";
import DesignPart from "../../Components/DesignPart/DesignPart";
import HeaderTitleSection from "../../Components/HeaderTitleSection/HeaderTitleSection";
import FirstSlide from "../../Components/Slide/FirstSlide";
import SoftwarePart from "../../Components/SoftwarePart/SoftwarePart";
import Test from "../../Components/Test/Test";

 


const Home = () => {


    return (
        <div>
            <HeaderTitleSection></HeaderTitleSection>
            <DesignPart />
            <SoftwarePart />
            <CustomerSuccess />
        </div>
    );
};

export default Home;