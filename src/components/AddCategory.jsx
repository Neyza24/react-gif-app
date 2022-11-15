import { useState } from 'react';

//NOTAS--->Refactorizando código para mejor funcionamiento de este componente
const AddCategory = ( { onNewCategory } ) => {
    
    const [inputValue, setInputValue] = useState('');

    //Capturamos el valor de lo que el usaurio va escribiendo
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    //Función para evitar el evento por default de un formulario (refresh)
    const onSubmit = (event) => {
        event.preventDefault();
        //Hcemos una validación para que se inserte a partir de 2 caracteres:
        if( inputValue.trim().length <= 1 ) return;
        //Mandamos el value limpio
        onNewCategory( inputValue.trim() );
        //Limpiamos el input una vez se agregue
        setInputValue('');
        
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            >
            </input>
        </form>
    )
}

export default AddCategory;