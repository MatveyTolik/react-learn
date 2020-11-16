import React from 'react'
import FilmItem from './film_list/FilmItem';

let movies = [
  {
    id: '1',
    title: 'Pulp Fiction',
    description: 'Action & Advanture',
    img_url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.europosters.com.ua%2F%25D0%259F%25D0%25BB%25D0%25B0%25D0%25BA%25D0%25B0%25D1%2582%2Fpulp-fiction-cover-v1289&psig=AOvVaw3VfEihEDsw-uWgRlz9IRsD&ust=1605608478116000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDAu-rrhu0CFQAAAAAdAAAAABAD',
    year: '2004',
  },
  {
    id: '2',
    title: 'Bohemian Rhapsody',
    description: 'Drama, Biography, Music',
    img_url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fvinyla.com%2Ffiles%2Fproducts%2Fqueen-bohemian-rhapsody-ost.1280x1280.jpg%3Fd7e1034d92ae2a2ac0ade02593eaf64f&imgrefurl=https%3A%2F%2Fvinyla.com%2Fproducts%2Fqueen-bohemian-rhapsody-ost&tbnid=7VgyyTEzZ5aINM&vet=12ahUKEwjnnPz-64btAhUQyCoKHaKUAjEQMygAegUIARCkAQ..i&docid=RKl2PVTakub1qM&w=1280&h=1280&q=Bohemian%20Rhapsody&ved=2ahUKEwjnnPz-64btAhUQyCoKHaKUAjEQMygAegUIARCkAQ',
    year: '2003',
  },
  {
    id: '3',
    title: 'Bill: Vol 2',
    description: 'Oscar winning Movie',
    img_url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2Fc%2Fc4%2FKill_Bill_Volume_2.png%2F220px-Kill_Bill_Volume_2.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FKill_Bill%3A_Volume_2&tbnid=8j_kqd5q_Yo0dM&vet=12ahUKEwjAlqHy64btAhVEtCoKHWWfBlQQMygAegUIARCdAQ..i&docid=OgjbX1JeElmgUM&w=220&h=330&q=Bill%3A%20Vol%202&ved=2ahUKEwjAlqHy64btAhVEtCoKHWWfBlQQMygAegUIARCdAQ',
    year: '1994',
  },
  {
    id: '4',
    title: 'Pulp Fiction',
    description: 'Action & Advanture',
    img_url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.europosters.com.ua%2F%25D0%259F%25D0%25BB%25D0%25B0%25D0%25BA%25D0%25B0%25D1%2582%2Fpulp-fiction-cover-v1289&psig=AOvVaw3VfEihEDsw-uWgRlz9IRsD&ust=1605608478116000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDAu-rrhu0CFQAAAAAdAAAAABAD',
    year: '2004',
  },
  {
    id: '5',
    title: 'Bohemian Rhapsody',
    description: 'Drama, Biography, Music',
    img_url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fvinyla.com%2Ffiles%2Fproducts%2Fqueen-bohemian-rhapsody-ost.1280x1280.jpg%3Fd7e1034d92ae2a2ac0ade02593eaf64f&imgrefurl=https%3A%2F%2Fvinyla.com%2Fproducts%2Fqueen-bohemian-rhapsody-ost&tbnid=7VgyyTEzZ5aINM&vet=12ahUKEwjnnPz-64btAhUQyCoKHaKUAjEQMygAegUIARCkAQ..i&docid=RKl2PVTakub1qM&w=1280&h=1280&q=Bohemian%20Rhapsody&ved=2ahUKEwjnnPz-64btAhUQyCoKHaKUAjEQMygAegUIARCkAQ',
    year: '2003',
  },
  {
    id: '6',
    title: 'Bill: Vol 2',
    description: 'Oscar winning Movie',
    img_url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2Fc%2Fc4%2FKill_Bill_Volume_2.png%2F220px-Kill_Bill_Volume_2.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FKill_Bill%3A_Volume_2&tbnid=8j_kqd5q_Yo0dM&vet=12ahUKEwjAlqHy64btAhVEtCoKHWWfBlQQMygAegUIARCdAQ..i&docid=OgjbX1JeElmgUM&w=220&h=330&q=Bill%3A%20Vol%202&ved=2ahUKEwjAlqHy64btAhVEtCoKHWWfBlQQMygAegUIARCdAQ',
    year: '1994',
  },
]

export default function MoviesList() {
  return (
    <div className={'movie-list'}>
      {movies.map((movie) => (
        <FilmItem
          props={movie}
        />
      ))}
    </div>
  )
}
