import React from 'react'
import TeamCard from '../components/TeamCard';
import '../styles/Cards.css'

export default function Team() {

  const people = [
    { name: 'Aya Moosa', url: 'https://github.com/Hiya-its-Aya' },
    { name: 'Trevor Ferguson', url: 'https://github.com/TrevorJFerguson' },
    { name: 'Pauline Nguyen', url: 'https://github.com/paulinekpn' },
    { name: 'Utkarsh Uppal', url: 'https://github.com/utyvert' },
    { name: 'Fred Jeong', url: 'https://github.com/fred-jeong' },
    { name: 'Gabriel Kime', url: 'https://github.com/wizardbusiness' },
    { name: 'Chris Fryer', url: 'https://github.com/oslabs-beta/SeeQR/blob/master/github.com/frynoceros' },
    { name: 'Ian Grepo', url: 'https://github.com/RadiantGH' },
    { name: 'Michelle Chang', url: 'https://github.com/mkchang168' },
    { name: 'Jake Bradbeer', url: 'https://github.com/JBradbeer' },
    { name: 'Bryan Santos', url: 'https://github.com/santosb93' },
    { name: 'William Trey Lewis', url: 'https://github.com/treyfrog128' },
    { name: 'Brandon Lee', url: 'https://github.com/BrandonW-Lee' },
    { name: 'Casey Escovedo', url: 'https://github.com/caseyescovedo' },
    { name: 'Casey Walker', url: 'https://github.com/cwalker3011' },
    { name: 'Catherine Chiu', url: 'https://github.com/catherinechiu' },
    { name: 'Chris Akinrinade', url: 'https://github.com/chrisakinrinade' },
    { name: 'Cindy Chau', url: 'https://github.com/cindychau' },
    { name: 'Claudio Santos', url: 'https://github.com/Claudiohbsantos' },
    { name: 'Eric Han', url: 'https://github.com/ericJH92' },
    { name: 'Faraz Akhtar', url: 'https://github.com/faraza22' },
    { name: 'Frank Norton', url: 'https://github.com/FrankNorton32' },
    { name: 'Harrison Nam', url: 'https://github.com/harrynam07' },
    { name: 'James Kolotouros', url: 'https://github.com/dkolotouros' },
    { name: 'Jennifer Courtner', url: 'https://github.com/jcourtner' },
    { name: 'John Wagner', url: 'https://github.com/jwagner988' },
    { name: 'Justin Dury-Agri', url: 'https://github.com/justinD-A' },
    { name: 'Justin Hicks', url: 'https://github.com/JuiceBawks' },
    { name: 'Katie Klochan', url: 'https://github.com/kklochan' },
    { name: 'May Wirapa Boonyasurat', url: 'https://github.com/mimiwrp' },
    { name: 'Mercer Stronck', url: 'https://github.com/mercerstronck' },
    { name: 'Muhammad Trad', url: 'https://github.com/muhammadtrad' },
    { name: 'Richard Guo', url: 'https://github.com/richardguoo' },
    { name: 'Richard Lam', url: 'https://github.com/rlam108' },
    { name: 'Sam Frakes', url: 'https://github.com/frakes413' },
    { name: 'Serena Kuo', url: 'https://github.com/serenackuo' },
    { name: 'Timothy Sin', url: 'https://github.com/timothysin' },
    { name: 'Vincent Trang', url: 'https://github.com/vincentt114' },
  ];
  

  return (
    <div className="team">
      <div className="team-header">
        <h1>Team</h1>
      </div>
      <div className="team-cards">
        {people.map((person, index) => (
          <TeamCard key={index} name={person.name} url={person.url} />
        ))}
      </div>
    </div>
  )
};
