import {useState} from 'react';
function SearchBar({onSubmit}) { 
    const [term, setTerm] = useState('');
    const handleFormSubmit = (event) => {
      event.preventDefault(); // here we did this to  prevent the default behaviour of the form that was discussed.// 
      
      onSubmit(term);
    };
    const handleChange = (event) => {
        setTerm(event.target.value);
    };
    return <div>
        <form onSubmit={handleFormSubmit}>
            <input value={term} onChange={handleChange} />
        </form>
    </div>;
    
}

export default SearchBar;   