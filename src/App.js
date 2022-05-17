
import Dashboard from "./components/Dashboard"

import ContainerG from "./components/ContainerG"

import InvestigationContainer from "./components/investigations/InvestigationContainer"
import AlertsContainer from "./components/alerts/AlertsContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NotFound from "./components/default/NotFound"
import Home from "./components/default/Home"
import Analysis from "./components/analysis/Analysis"



function App() {
  //<Dashboard component={<InvestigationContainer/>}/>
  return (
    <div>
      <BrowserRouter>

      
        <Routes>
          <Route path="/" element={<Dashboard component={<Home/>}/>}/>
           <Route path="/investigation" element={<Dashboard component={<InvestigationContainer/>}/>}/>
           <Route path="/investigation/:id/analysis" element={<Dashboard component={<Analysis/>}/>}/>
           <Route path="/alerts" element={<Dashboard component={<AlertsContainer/>}/>}/>
           <Route path="*" element={<NotFound/>}/>

        </Routes>

      </BrowserRouter>

      

    </div>
  );
}

export default App;
