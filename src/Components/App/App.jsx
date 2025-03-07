import ContactForm from "../ContactForm/ContactForm";
import css from "./App.module.css";

export default function App() {
  return (
    <div>
      <h1 className={css["title"]}>Phonebook</h1>

      <ContactForm />
    </div>
  )
}
