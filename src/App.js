import Dashboard from "./components/Dashboard"
import InvestigationContainer from "./components/investigations/InvestigationContainer"
import AlertsContainer from "./components/alerts/AlertsContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NotFound from "./components/default/NotFound"
import Home from "./components/default/Home"
import Analysis from "./components/analysis/Analysis"
import Alert from "./components/alerts/Alert"
import Landing from "./components/default/Landing"
import Login from "./components/users/Login"
import Info from "./components/default/Info"
import Register from "./components/users/Register"
import Business from "./components/business/Business"
import Admin from "./components/admin/Admin"
import AlertsManager from "./components/admin/AlertsManager"
import BusinessManager from "./components/admin/BusinessManager"
import UsersManager from "./components/admin/UsersManager"
import Profile from "./components/users/Profile"
import {UserContextProvider} from "./context/UserContext"



function App() {

  return (
    <div>

      <UserContextProvider>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing component={<Info/>}/>}/>
                <Route path="/login" element={<Landing component={<Login/>}/>}/>
                <Route path="/Register" element={<Landing component={<Register/>}/>}/>
                <Route path="/home" element={<Dashboard component={<Home/>}/>}/>
                <Route path="/profile" element={<Dashboard component={<Profile/>}/>}/>
                <Route path="/logout" element={<Landing component={<Info/>}/>}/>
                <Route path="/business" element={<Dashboard component={<Business/>}/>}/>
                <Route path="/investigation" element={<Dashboard component={<InvestigationContainer/>}/>}/>
                <Route path="/investigation/:id/analysis" element={<Dashboard component={<Analysis/>}/>}/>
                <Route path="/alerts" element={<Dashboard component={<AlertsContainer/>}/>}/>
                <Route path="/alerts/:id" element={<Dashboard component={<Alert/>}/>}/>
                <Route path="/admin/" element={<Dashboard component={<Admin/>}/>}/>
                <Route path="/admin/alerts" element={<Dashboard component={<AlertsManager/>}/>}/>
                <Route path="/admin/business" element={<Dashboard component={<BusinessManager/>}/>}/>
                <Route path="/admin/users" element={<Dashboard component={<UsersManager/>}/>}/>
                <Route path="*" element={<NotFound/>}/>

            </Routes>
          </BrowserRouter>
        </UserContextProvider>
      



    </div>
  );
}

export default App;
