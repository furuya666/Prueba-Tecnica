import React,{useState} from 'react'

const initialForm={
    artist:"",
    song:"",
};
const SongForm = ({handleSearch}) => {
    const [form, setForm] = useState(initialForm);
    const handleChange=e=>{
        setForm({
            ...form,
             [e.target.name]:e.target.value
        })
    }
    ///VALIDACION DE ENVIAR EL FORMULARIO
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(!form.artist || !form.song){
           alert("Datos Incompletos");
           return;
        }
        handleSearch(form);
        setForm(initialForm);
    }
    return (
        <div>
            <br></br>
            <div className="d-flex justify-content-around ">
            <h1>BUSCADOR</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="artist" autoComplete="off"placeholder="Nombre del Interprete" onChange={handleChange} value={form.artist}/>
                <input type="text" name="song" autoComplete="off" placeholder="Nombre del Cancion" onChange={handleChange} value={form.song}/>
                <input type="submit" value="Buscar" className="btn btn-success"></input>
            </form>
                
            </div>
           
        </div>
    )
}

export default SongForm
