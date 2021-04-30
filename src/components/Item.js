import React, { useState ,useEffect} from 'react';
import { helpHttp } from '../helper/helpHttp';
import Message from './Message';
import ItemTable from './ItemTable';
import Loader from './Loader';
const Item = () => {
    const [db, setDb] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    let url="https://randomuser.me/api/";
    useEffect(() => {
        setLoading(true);
        helpHttp().get(url).then((res) =>{
               console.log(res.results[0])
            if(!res.err){
               setDb(res.results[0]);
               setError(null);
           }else{
               setDb(null);
               setError(res)
           }
           setLoading(false);
           });
            
    }, [url]);
    return (
        <div>
            <article >
            
            {loading && <Loader/>}
            {error &&  <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545"/>}
            { db && (<ItemTable 
            data={db} />)}
           
            
            </article>  
            
        </div>
       
    );
}

export default Item;