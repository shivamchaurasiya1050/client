import logo from './logo.svg';
import './App.css';
import Sdata from './Sdata';
import Cards from './Cards';
import Amazon from './Amazon';
import Netflix from './Netflix';


const fav = "netflix";

// const FavS = () => {
//   if (fav === "netflix") {
//   return(<Amazon/>
//   )

//   }else{
//     return(
//       <Netflix/>
//     )
//   }

// };




function App() {

  return (
    <>

      <h1 className='heading_style' >List of top 5 Netflix series in 2022:</h1>

{/* <FavS/> */}

{fav === "netflix" ? <Amazon/>: <Netflix/> }

    </>
  );

}

export default App;
