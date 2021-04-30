import React from 'react'
import SongArtist from './SongArtist'
import SongLyric from './SongLyric'
import Message from './Message'
const SongDetails = ({search,lyric,bio}) => {
    if(!lyric || !bio) return null;
    return (
        <>
            {bio.artists?
            <SongArtist artist={bio.artists[0]} title={search.song} lyrics={lyric.lyrics}/>
            :
            <Message msg={`Error: no existe el interprete "<em>${search.artist}</em>"`} bgColor="#dc3545"/>}
            {lyric.error || lyric.err || lyric.name === "AbortError"?
             <Message msg={`Error: no existe la cancion "<em> ${search.song}</em>"`} bgColor="#dc3545"/>
             :
             <SongLyric title={search.song} lyrics={lyric.lyrics}/>
             }
          
        </>
    )
}

export default SongDetails
