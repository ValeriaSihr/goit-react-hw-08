import PageTitle from "../../components/PageTitle/PageTitle";

import css from "./HomePage.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.homePageDiv}>
      {isLoggedIn ? (
        <PageTitle>All your contacts in one place!</PageTitle>
      ) : (
        <>
          <PageTitle>To get started, please log in!</PageTitle>
          <p>
            or <Link to="/register">register</Link>
          </p>
        </>
      )}
      
    </div>
  );
}
