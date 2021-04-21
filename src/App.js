import BlogMain from './blogComponents/BlogMain';
import AllEvents from './components/AllEvents'
import Header from './components/Header/Header';
import './index.css';
const App = ()=> {
  return (
    <div className='App'>
      <Header />
      <div className='Content'>
        <p>42 is the answer to everything...</p>
      </div>
      {/* {<BlogMain />} */}
    </div>    
  );
}

export default App;
