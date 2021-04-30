import React from 'react'
function Detalle() {
  return (
    <div className="App">
      <div className="d-flex justify-content-around ">
        <article> <img src="https://www.educaciontrespuntocero.com/wp-content/uploads/2019/10/music.jpg" width="150px" height="110px" alt="musica"></img></article>
        <h1 className="d-flex align-items-center"><i>BUSCADOR DE CANCIONES</i></h1>
      </div>
      
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">IMAGEN</th>
      <th scope="col">NOMBRE</th>
      <th scope="col">@EMAIL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><img src="https://www.scdn.co/i/_global/twitter_card-default.jpg" width="150px" height="150px" alt="musica"></img></td>
      <td>SPOTIFY</td>
      <td>@spotify.com.bo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td><img src="https://allliveradio.com/wp-content/uploads/2019/01/Radio-Jango-FM.png" width="150px" height="150px" alt="musica"></img></td>
      <td>JANGO RADIO</td>
      <td>@jangoradio.com.bo</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td><img src="https://como-funciona.com/wp-content/uploads/2019/11/livexlive-radio-plus-subscriptions.jpeg"alt="musica" width="150px" height="150px"></img></td>
      <td >LIVE XLIVE</td>
      <td>@livexlive.com.bo</td>
    </tr>
  </tbody>
</table>
<nav aria-label="Page navigation example">
  <ul  className=" pagination d-flex justify-content-center btn btn-primary">
    <li ><a className="btn btn-danger" href="/">Previous</a></li>
    <li className="page-item"><a className="page-link" href="/detalle">1</a></li>
    <li><a className="btn btn-success" href="/detalle">Next</a></li>
  </ul>
</nav>
     
    
    </div>
  );
}

export default Detalle;
