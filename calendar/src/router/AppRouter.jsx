import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { CalendarPage } from '..CalendarApp';



export const AppRouter = () => {

  const authStatus = 'not-authenticated'; 

return (
<Routes>
  {
  ( authStatus === 'not-authtenticated')
  ? <Route path= "/auth/* " element= {<LoginPage/>}/>
  : <Route path='/auth/*' element= {<CalendarPage/>}/>
  }

{/* <Route path= "/*" element={ <Navigate to="/auth/login"/>} /> */}

</Routes>
)
}
