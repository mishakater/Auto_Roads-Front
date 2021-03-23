import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from './constants';
import { AuthenticationPage, MainPage, RegistrationPage } from './pages';

function App() {
  return (
   <BrowserRouter>
     <Route exact path={Routes.LOGIN} component={AuthenticationPage} />
     <Route exact path={Routes.REGISTRATION} component={RegistrationPage} />
     {/* @TODO: ProtectedRoute */}
     <Route exact path={Routes.HOME} component={MainPage} />
   </BrowserRouter>
  );
}

export default App;
