// import SideNav from "../../../components/SideNav/SideNav";
import Mandatorytrainingdata from "./Mandatorytrainingdata";
import ModileNav from "../../../components/SideNav/ModileNav";


const Mandatorytraining = () => {
    return (
        <>
            <div style={styles.container}>
                {/* <div style={styles.left} className=" hidden lg:block z-50">
                    <SideNav />
                </div> */}
                <div className="md:hidden sm:block">
                    <ModileNav />
                </div>


                <div style={styles.middle} className="">
                    < Mandatorytrainingdata />
                </div>



            </div>
        </>
    )
}


const styles = {
    container: {
        display: "flex",
        width: "100%",
        minHeight: "100vh",

    },
    left: {
        // Adjust size





    },
    middle: {
        flex: 1,
        width: 100
    }


};
export default Mandatorytraining