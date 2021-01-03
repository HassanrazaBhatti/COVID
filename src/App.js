
// export default App;
// import React from 'react';
//  import Header from "./Components/Header";
//  import { Balance } from "./Components/Balance";
//  import { ExpenseIncome } from "./Components/ExpenseIncome";
//  import { TransactionList } from "./Components/TransactionList";
//  import { AddTransaction } from "./Components/AddTransaction";
// import SearchAppBar from "./Components/Coursera"
// import RecipeReviewCard from "./Components/Menu"
// import "./App.css"




// function App() {
      




//   return (
//     <>
    
//        <Header />
//       <div className="container">
//         <Balance />
//         <ExpenseIncome />
//         <TransactionList />
//         <AddTransaction />
//       </div>
//     </>
//   );
// }

// export default App;






//COVID-19



// import React from "react";
// import  SearchAppBar from "./Components/NavBar";
// import MainGrid from "./Components/MainGrid";
// function App(){
//   return(
//     <>
//   <SearchAppBar />
//   <MainGrid />
//   </>
//   );
// }
//  export default App;
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
        <img src={Crona} className={styles.image} alt="COVID-19"/>
        <Cards  data={data}/>
         <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;