import React, { useContext } from 'react';
import { AuthProvider, AuthContext } from "./AuthContext";

import './App.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SearchBook from "./Pages/SearchBook";
import Navbar1 from './components/Navbar1';
import Book from './Pages/Book';
import UserPage from './Pages/UserPage';






function App() {
  const authContext = useContext(AuthContext);


  return (
    <div className="App">



      <BrowserRouter>

        < Navbar1 />

        <Switch>
          {authContext.auth.email ?

            <>
              <Route exact path="/" element={<Home />}>
                <Home />
              </Route>
              <Route exact path="/search" element={<SearchBook />}>
                <SearchBook />
              </Route>
              <Route exact path="/search/:id" element={<Book />}>
                <Book />
              </Route>
              <Route exact path="/login" element={<Login />}>
                <Login />
              </Route>

              <Route exact path="/userpage" element={<UserPage />}>
                <UserPage />
              </Route>
            </>



            :
            <>
              <Route exact path="/home" element={<Home />}>
                <Home />
              </Route>
              <Route exact path="/search" element={<SearchBook />}>
                <SearchBook />
              </Route>
              <Route exact path="/search/:id" element={<Book />}>
                <Book />
              </Route>
              <Route exact path="/" element={<Login />}>
                <Login />
              </Route>

            </>
          }




        </Switch>




      </BrowserRouter>


    </div>
  );
}

function AppWithStore() {
  return (<AuthProvider>
    <App />
  </AuthProvider>);
}

export default AppWithStore;