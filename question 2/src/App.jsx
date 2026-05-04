import {Home} from './components/Home'
import {About} from './components/About'
import {Context} from './components/Contact'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/context' element={<Context />} />
            </Routes>
        </Router>
        )

    }
export default App