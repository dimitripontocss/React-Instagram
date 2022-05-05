import ReactDOM from 'react-dom'
import Navbar from './Navbar';
import Corpo from './Corpo';
import Sidebar from './Sidebar';
import Fundomobile from './Fundomobile';

function Content(){
    return(
    <div class="corpo">
        <Navbar />
        <Corpo />
        <Sidebar />      
        <Fundomobile />
    </div>
  )
  }

ReactDOM.render(<Content />, document.querySelector(".root"));