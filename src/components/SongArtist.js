import React from 'react'

const SongArtist = ({artist,title,lyrics}) => {
    return (
        <section>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">CANCION</th>
      <th scope="col">IMAGE</th>
      <th scope="col">ARTISTA</th>
      <th scope="col">Genero</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><h3>{title.toUpperCase() }</h3></td>
      <td><img src={artist.strArtistThumb} alt={artist.strArtist} width="200" height="150"></img></td>
      <td><h3>{artist.strArtist.toUpperCase()}</h3></td>
      <td>{artist.strGenre.toUpperCase()} - {artist.strStyle.toUpperCase()}</td>
    </tr>
  </tbody>
</table>
<table class="table">
  <thead>
    <tr>
      <th scope="col">PAIS</th>
      <th scope="col">NACIMIENTO</th>
      <th scope="col">SITIO OFICIAL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{artist.strCountry.toUpperCase()}</td>
      <td>{artist.intBornYear} - {artist.intDiedYear || "PRESENTE"}</td>
      <td><a href={`http://${artist.strWebsite}`} target="_blank" rel="noreferrer">Ver mas...</a></td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="table border-darken-1">
  <thead>
    <tr>
      <th scope="col">BIOGRAFIA</th>
      <th scope="col">LETRA</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><p>{artist.strBiographyEN}</p></td>
      <td>{lyrics}</td>
    </tr>
  </tbody>
</table>
<nav aria-label="Page navigation example">
  <ul  className=" pagination d-flex justify-content-center btn btn-primary">
    <li ><a className="btn btn-danger" href="/">Previous</a></li>
  </ul>
</nav>
            
        </section>
    )
}

export default SongArtist
