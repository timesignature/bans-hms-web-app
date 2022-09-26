import  { Toaster } from 'react-hot-toast';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import Members from "./pages/members";
import StatusProvider from "./providers/StatusProvider";
import Biometric from "./pages/biometric";
import Claims from "./pages/claims";
import Profile from "./pages/profile";

function App() {

    const client=new QueryClient()

  return (
      <StatusProvider>
          <QueryClientProvider client={client}>
              <Router>
                  <Routes>
                      <Route path={'/'} element={<Members/>}/>
                      <Route path={'/biometric'} element={<Biometric/>}/>
                      <Route path={'/claims'} element={<Claims/>}/>
                      <Route path={'/profile'} element={<Profile/>}/>
                  </Routes>
              </Router>
              <Toaster
                  position="top-right"

              />
          </QueryClientProvider>
      </StatusProvider>

  );
}

export default App;
