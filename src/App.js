//COVID-19

 import React from "react";
 import Cards from "./Components/Cards/Cards";
 import Chart from "./Components/Chart/Chart";
 import CountryPicker from "./Components/CountryPicker/CountryPicker";
 import styles from "./App.module.css";
 import {fetchData} from "./API";
 import Crona from  "./Components/Images/logo.png";



 class App extends React.Component{

   state = {
     data : {},
     country : "",
   }

 async componentDidMount(){
   const fetchedData = await fetchData();
   this.setState ({data : fetchedData})
 }
 handleCountryChange = async (country) =>{
 const fetchedData = await fetchData(country);
 this.setState({data : fetchedData ,country : country})
 }

   render(){
     const {data ,country} = this.state;
     return(
       
       
       <div className={styles.container}>
         <h1 style={{color : "red", marginTop : "20px" ,fontWeight :"bolder"}}>COVID-19 Tracker By HASSAN RAZA</h1>
         <img src={Crona} className={styles.image}  alt="COVID-19"/>
         <Cards  data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange}/>
         <Chart data={data} country={country} className={styles.chart}/>
       </div>
       
     )
   }
 }

export default App;


//Portfolio




// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbars from "./Navbar.jsx";
// import Banner from "./Banner"
// import {About} from "./About"
// import Services from "./Services"
// import Service4 from "./img/services/s4.png";
// import Service3 from "./img/services/s3.png";
// import Service2 from "./img/services/s2.png";
// import Service1 from "./img/services/s1.png";
// import {Serv} from "./Serv";
// import {Projects} from "./Projects";
// import {Contact} from "./Contact";
// import {Footer} from "./Footer";

// function App() {
//   return (
//     <div>
//       <Navbars/>
//       <Banner />
//       <About />
//       <Serv />
//       <div className="hassan">
//       <Services src={Service4} title="Seo Optimize" text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
//       <Services src={Service3} title="web design" text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
//       <Services src={Service2} title="Responsive design" text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
//       <Services src={Service1} title="web animation API'S" text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
//       </div>
//       <Projects />
//       <Contact />
//       <Footer />
//       </div>
//   );
// }

// export default App;

// export default App;