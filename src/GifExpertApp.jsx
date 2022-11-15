import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


const GifExpertApp = () => {

    //Espacio en memoria para guardar Listado de categorías
    const [categories, setCategories] = useState(['One Punch']);  //los hooks no tienen nombres, se identifica según su posición, no poner hooks dentro de condiciones
    console.log(categories);

    const onAddCategory = (newCategory) => {
        //En esta condición estamos evaluando si la nueva categoria agregagda ya esta, entonces que no se agregué, caso contrario se ejecuta la siguiente línea de código
        if (categories.includes(newCategory)) return;
        //La que es más común de utilizar, es esta:
        setCategories([newCategory, ...categories]);
    }
    
    
    return (
        <>
            <div>GifExpertApp</div>

            <AddCategory
                onNewCategory={onAddCategory}
            />

            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}

export default GifExpertApp;