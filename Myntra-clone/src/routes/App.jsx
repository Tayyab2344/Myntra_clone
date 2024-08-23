import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Fetching from "../components/Fetching";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSelector } from "react-redux";

const App = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <Fetching />
      {fetchStatus.currFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
};

export default App;
