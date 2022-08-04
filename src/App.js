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
import Bitacora from "./components/admin/Bitacora"
import {useContext} from "react"
import {UserContextProvider} from "./context/UserContext"
import UserContext from "./context/UserContext"
import InvestigationReview from "./components/investigations/InvestigationsReview"
import ProtectedRoute from "./components/ProtectedRoute"
import Test from "./components/admin/Test"



function App() {


  return (
    <div>

      <UserContextProvider>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing component={<Info/>}/>}/>
                <Route path="/login" element={<Landing component={<Login/>}/>}/>
                <Route path="/Register" element={<Landing component={<Register/>}/>}/>
                <Route path="/test" element={<Test/>}/>
                
                
                
                      <Route path="/home" element={<Dashboard component={<ProtectedRoute><Home/></ProtectedRoute>}/>}/>
                      <Route path="/profile" element={<Dashboard component={<ProtectedRoute><Profile/></ProtectedRoute>}/>}/>
                      <Route path="/logout" element={<Landing component={<ProtectedRoute><Info/></ProtectedRoute>}/>}/>
                      <Route path="/business" element={<Dashboard component={<ProtectedRoute><Business/></ProtectedRoute>}/>}/>
                      <Route path="/review" element={<Dashboard component={<ProtectedRoute><InvestigationReview/></ProtectedRoute>}/>}/>
                      <Route path="/investigation" element={<Dashboard component={<ProtectedRoute><InvestigationContainer/></ProtectedRoute>}/>}/>
                      <Route path="/investigation/:user/:id/analysis" element={<Dashboard component={<ProtectedRoute><Analysis/></ProtectedRoute>}/>}/>
                      <Route path="/alerts" element={<Dashboard component={<ProtectedRoute><AlertsContainer/></ProtectedRoute>}/>}/>
                      <Route path="/alerts/:id" element={<Dashboard component={<Alert/>}/>}/>
                      <Route path="/admin/" element={<Dashboard component={<ProtectedRoute><Admin/></ProtectedRoute>}/>}/>
                      <Route path="/admin/alerts" element={<Dashboard component={<ProtectedRoute><AlertsManager/></ProtectedRoute>}/>}/>
                      <Route path="/admin/business" element={<Dashboard component={<ProtectedRoute><BusinessManager/></ProtectedRoute>}/>}/>
                      <Route path="/admin/users" element={<Dashboard component={<ProtectedRoute><UsersManager/></ProtectedRoute>}/>}/>

                      <Route path="/admin/bitacora" element={<Dashboard component={<ProtectedRoute><Bitacora/></ProtectedRoute>}/>}/>
                      
                

                
                <Route path="*" element={<Dashboard component={<NotFound/>}/>}/>

            </Routes>
          </BrowserRouter>
        </UserContextProvider>
      



    </div>
  );
}

export default App;
