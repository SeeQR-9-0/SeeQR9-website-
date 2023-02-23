import React from "react";
import "../styles/Cards.css";

type TeamCardProps = {
  name: string;
  url: string;
}

const TeamCard: React.FC<TeamCardProps> = (props) => {
  const { name, url } = props;

  const handleClick = () => {
    window.open(url, '_blank');
  }

  return (
    <div className="card" onClick={handleClick}>
      <h5 className="card-title">{name}</h5>
        <img id="gh-icon" src="/media/github-mark.png" alt="GitHub Link" />
    </div>
  );
};

export default TeamCard;