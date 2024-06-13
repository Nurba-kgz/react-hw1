import logo from './logo.svg';
import './App.css';
function Header() {
    return(
        <>
            <p>Header</p>
            <Title/>
        </>

    )
}

function  Content() {
    return(
        <>
            <p>Content</p>
            <Title/>
        </>

    )


}

function   Footer() {
    return(
        <>
            <p>Footer</p>
            <Title/>
        </>

)
}
function Title() {
    return (
    <h1>Lorem ipsum dolor sit.</h1>)
}
function App() {
  return (
    <div className="App">
        <Header/>
        <Content/>
        <Footer/>
    </div>
  );
}

export default App;
