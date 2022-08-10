import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./container/Home";
import Departments from "./container/Departments";
import Doctors from "./container/Doctors";
import About from "./container/About";
import Contact from "./container/Contact";
import { Switch } from "react-router-dom";
import Login from "./container/Login";
import BookAppointment from "./container/Appointment/BookAppointment";
import ListAppointment from "./container/Appointment/ListAppointment";
import PublicRoute from "./container/Routes/PublicRoute";
import PrivateRoute from "./container/Routes/PrivateRoute";
import ThemeAction from "./context/theme.action";

function App() {
  return (
    <>
    <ThemeAction>
      <Header />
      <Switch>
        <PublicRoute path="/" exact component={Home} />
        <PublicRoute path="/departments" exact component={Departments} />
        <PublicRoute path="/doctors" exact component={Doctors} />
        <PublicRoute path="/about" exact component={About} />
        <PublicRoute path="/contact" exact component={Contact} />
        <PublicRoute path="/login" restricted={true} exact component={Login} />
        <PrivateRoute path="/book_appointment" exact component={BookAppointment}/>
        <PrivateRoute path="/list_appointment" exact component={ListAppointment} />
      </Switch>
      <Footer />
    </ThemeAction>
    </>
  );
}

export default App;
