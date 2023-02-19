import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import "./App.css"  
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app container" >
    <Header />
    <Content data={{ 
    name:"fatima zahra" ,
    job:"Front-end dev" ,
    disc:"Enthusiastic and motivated self-learning in Information Technology. Interested in exploring about Computer Network, Cloud Computing, DevSecops, and Web Development. Now I am looking for more experience in my field."
  }}/>
  
  <Footer/>
    </div>
  );
}

export default App;
