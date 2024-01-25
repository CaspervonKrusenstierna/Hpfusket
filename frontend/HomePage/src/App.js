
import HomePage from "./pages/HomePage/HomePage.jsx"
import BackgroundStyleBox from "./pages/HomePage/components/BackgroundStyleBox/BackgroundStyleBox.jsx";

function App(props) {
  return (
    <>
    <BackgroundStyleBox></BackgroundStyleBox>
     <HomePage isLoggedIn={props.isLoggedIn}></HomePage>
     </>
  );
}

export default App;
