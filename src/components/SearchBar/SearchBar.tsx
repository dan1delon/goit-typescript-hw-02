import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';
import { FormEvent } from 'react';

interface InputProps {
  onSubmit: (query: string) => void;
}

const SearchBar = ({ onSubmit }: InputProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = (e.target as HTMLFormElement).search.value.trim();
    const notify = () => toast('Please, enter a keyword to search');
    if (query === '') {
      notify();
      return;
    }

    onSubmit(query);
    e.currentTarget.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
          className={css.input}
        />
        <button type="submit" className={css.btn}>
          Search
        </button>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              padding: '16px',
              color: 'white',
              backgroundColor: '#CC0000',
            },
          }}
        />
      </form>
    </header>
  );
};

export default SearchBar;
