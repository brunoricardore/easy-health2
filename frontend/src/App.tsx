import { useRoutes } from "react-router"
import UserProvider from "./store/user_context/UserContext";
import { APP_ROUTES } from './utils/routes';

function App() {

  let routeElement = useRoutes(APP_ROUTES);

  return (
    <UserProvider>
      <div className="App">
        {routeElement}
      </div>
    </UserProvider>
  )
}

export default App
