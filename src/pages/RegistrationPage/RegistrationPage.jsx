import PageTitle from "../../components/PageTitle/PageTitle";
import RegistrationForm from "../../components/forms/RegistrationForm";

import css from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <div className={css.registrationDiv}>
      <PageTitle className={css.pageTitle}>Account registration</PageTitle>
      <RegistrationForm/>
    </div>
  );
}
