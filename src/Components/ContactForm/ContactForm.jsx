import css from './ContactForm.module.css'

export default function ContactForm() {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('handleSubmit');
    }

    return (
        <form className={css["form"]} onSubmit={handleSubmit} >
            <div className={css["input-group"]}>
                <label>Name</label>
                <input type="text" name="username" required />
            </div>

            <div className={css["input-group"]}>
                <label>Number</label>
                <input type="number"name="number" required />
            </div>

            <button type="submit">Add contact </button>
        </form>
    )
}