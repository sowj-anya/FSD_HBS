import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginRegister from './components/Login-signup/LoginRegister';
import Home from './components/Lists/Home';
import About from './components/Lists/About';
import Contact from './components/Lists/Contact';
import UserPage from './components/pages/User-Page/UserPage';
import AdminProfile from './components/pages/Admin-Page/AdminProfile';
import EditHall from './components/pages/Admin-Page/EditHall';
import Admin from './components/pages/Admin-Page/Admin';
import Dashboard from './components/pages/User-Page/Dashboard';
import Booking from './components/pages/User-Page/Booking';
import Payment from './components/pages/User-Page/Payment';
import Profile from './components/pages/User-Page/Profile';
import UserBookingHistory from './components/pages/Admin-Page/UserBookingHistory';
import UserManagement from './components/pages/Admin-Page/UserManagement';

function App() {
  return (
    <div className="App">
       <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/login-register' element={<LoginRegister/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>
                  
                   {/* User page */}
                    <Route path='/user-page' element={<UserPage/>}></Route> 
                    <Route path='/halllist' element={<Dashboard/>}></Route>
                    <Route path='/hallbooking' element={<Booking/>}></Route>
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/profile" element={<Profile />} />

                  
                    {/* admin-page */}
                    <Route path="/admin-pages" element={<Admin />} />
                    <Route path="/admin-profile" element={<AdminProfile />} />
                    <Route path="/edithall" element={<EditHall />} />
                    <Route path="/userbooking" element={<UserBookingHistory />} />
                    <Route path="/usermanage" element={<UserManagement />}/>
            
                </Routes>
            </div>
        </Router>
    </div>
    
  );
}

export default App;
