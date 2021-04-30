import React from 'react'

const ItemTable = ({data}) => {
    
    
    return (
        <div className="App">
            
           <br></br>
           <h1>USUARIO MAS DESTACADO DE NUESTRA APP</h1>
           <h2>BUSCADOR DE CANCIONES</h2>
 
            <table className="table table-info">
                <tbody>
                    <tr>
                        <td><i><strong>IMAGE</strong></i></td>
                        <td ><i><strong>GENDER</strong></i></td>
                        <td> <i><strong>NAME</strong></i></td>
                        <td><i><strong>AGE</strong></i></td>
                    </tr>
                   <tr>
                       
                   <td><img src={data.picture.large} alt={data.picture.large}/> <img src={data.picture.medium} alt={data.picture.medium}></img> <img src={data.picture.thumbnail} alt={data.picture.thumbnail}></img></td>
                  <td>
                  <br></br>
                  
                      <h1>{data.gender.toUpperCase()}</h1></td> 
                       <td>
                       <br></br>
                       
                           <h1>{data.name.title.toUpperCase()} {data.name.first.toUpperCase()} {data.name.last.toUpperCase()}</h1></td> 
                           
                           <td>
                           <br></br><h1>{data.dob.age}</h1></td>   
                   </tr>
                   <tr className="table-active">
                       <td> <i><strong>EMAIL</strong></i></td>
                        <td> <i><strong>PHONE</strong></i></td>
                       <td>   <i><strong>CELL</strong></i></td>  
                       <td>   <i><strong>USERNAME</strong></i></td>  
                   </tr>
                   <tr>
                       <td>{data.email}</td> 
                       <td>{data.phone.toUpperCase()}</td>
                       <td>{data.cell.toUpperCase()}</td>
                       <td>{data.login.username}</td>
                   </tr>
                   <tr className="table-active">
                        <td> <i><strong>NAT</strong></i></td>
                        <td><i><strong>CITY</strong></i></td>
                        <td><i><strong>STATE</strong></i></td>
                        <td><i><strong>PASSWORD</strong></i></td>
                        
                   </tr>
                   <tr>
                       <td>{data.nat.toUpperCase()}</td>
                       <td>{data.location.city.toUpperCase()}</td>
                       <td>{data.location.state.toUpperCase()}</td> 
                       <td>{data.login.password}</td>
                   </tr>
                   <tr className="table-active">
                       <td><i><strong>POSTCODE</strong></i></td>
                       <td><i><strong>STREET</strong></i></td>
                       <td><i><strong>LATITUDE</strong></i></td> 
                       <td><i><strong>REGISTERED</strong></i></td> 
                   </tr>
                   <tr>
                       <td>{data.location.postcode}</td>
                       <td>{data.location.street.number} {data.location.street.name.toUpperCase()}</td>
                       <td>{data.location.coordinates.latitude} </td>
                       <td>{data.registered.date}</td>
                   </tr>
                   <tr className="table-active">
                       <td><i><strong>LONGITUDE</strong></i></td>
                       <td><i><strong>OFFSET</strong></i></td>
                       <td><i><strong>DESCRIPTION</strong></i></td> 
                       <td><i><strong>YEARS OF REGISTER</strong></i></td> 
                       
                   </tr>
                   <tr>
                       <td>{data.location.coordinates.longitude}</td>  
                       <td>{data.location.timezone.offset}</td>
                       <td>{data.location.timezone.description.toUpperCase()}</td>    
                       <td>{data.registered.age}</td>           
                    </tr>
                   <tr className="table-active">
                       <td></td>
                       <td colSpan="3">
                       </td>
                       <td></td>
                     
                   </tr>
                </tbody>
            </table>
                      <nav aria-label="Page navigation example">
                      <ul  className=" pagination d-flex justify-content-center btn btn-primary">
                         <li><a  className="btn btn-danger" href="/">PREVIOUS</a></li>
                         <li><a  className="btn btn-success" href="/detalle">1</a></li>
                         <li><a  className="btn btn-warning" href="/detalle">NEXT</a></li>
                        </ul>
                       </nav> 
                      
        </div>
    )
}

export default ItemTable
