import { useRoutes } from "react-router"
import { APP_ROUTES } from './utils/routes';

function App() {

  let routeElement = useRoutes(APP_ROUTES);

  return (
    <div className="App">
      {routeElement}
    </div>
  )
}

export default App
