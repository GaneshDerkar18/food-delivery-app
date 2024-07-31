
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { Provider } from 'react-redux';
import appstore from './utils/appstore';
import Cart from './components/Cart';

function App() {
  return (
    
    <Provider store={appstore}>
    <div>
    <>
      <Header />
      <Outlet />
    </>
    </div>
    </Provider>
  );
}

const appRouter= createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path:"/about",
        element: <About />
      },
      {
        path:"/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <Error />
  },
  

])


function Main() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default Main;