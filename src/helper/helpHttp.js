export const helpHttp = ()=>{
    //endpoint = ruta
    //options =diferentes opciones
    const customFetch = (endpoint,options)=>{
       const defaultHeader={
           //acepta
           accept: "aplication/json",
       };
       //AbortController =  cuando no hay respuesta del servidor aborta la peticion
       const controller= new AbortController();
       //signal = señal
       options.signal = controller.signal;
        ///especifica q metodo usa
       options.method = options.method || "GET";
       options.headers = options.headers
       ? 
       {...defaultHeader, ...options.headers}
       : defaultHeader

       options.body= JSON.stringify(options.body) || false;
       if(!options.body){
          delete options.body;
       }
      // console.log(options);
       //tiempo de espera d ela peticion 3s
       setTimeout(()=> controller.abort(),3000);
       return fetch(endpoint, options)
              .then((res)=> res.ok ? res.json()
              :Promise.reject({
                err:true,
                status:res.status || "00",
                statusText:res.statusText || "Ocurrio un error"
              })
              )
              .catch((err)=>err);
    };
    const get =(url,options ={})=> customFetch(url,options);
    
    const post =(url,options= {})=>{
        options.method = "POST";
        return customFetch(url,options);
    }
    const put =(url,options ={})=>{
        options.method="PUT";
        return customFetch(url,options);
    }
    const del =(url, options={})=>{
        options.method="DELETE";
        return customFetch(url,options);
    }
    return {
        get,
        post,
        put,
        del,
    };
}