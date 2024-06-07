import logo from './logo.svg';
import './App.css';
// import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/SideBar.jsx/Sidebar';

function App() {
  return (
  <>
  <div className='text-[30px] font-bold'>
   {/* <div className=''>MY PORTFOLIO WEBSITE</div> 
      <section><Navbar /></section>
      <section>Skills</section>
      <section>Portfolio 1</section>
      <section>Portfolio 2</section>
      <section>Portfolio 3</section>
      <section>Contact Me</section> */}
<Sidebar />

  </div>
  </>
  );
}

export default App;
