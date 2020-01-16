import React from "react";
import { Link } from "react-router-dom";
import uuid from "uuid";
import Card from 'react-bootstrap/Card';

function Favourites() {
  let displayfavs = [];
  let favourites = JSON.parse(sessionStorage.getItem("favlist"));
  if (favourites !== null) {
    for (let i = 0; i < favourites.length; i++) {
      let link = favourites[i].link;
      let id = favourites[i].id;
      let name = favourites[i].name;
      let title = favourites[i].itemTitle;
      let thumbnail = favourites[i].imgThumbnail;
      let kind = favourites[i].kind;
      displayfavs.push(
        <div className="card-item">
          <Card key={uuid.v4()}>
          <Card.Header key={uuid.v4()}>{kind}</Card.Header>
            <Card.Img variant="top" src={thumbnail} className="card-image"/>
            <Card.Body>
            <Card.Title key={uuid.v4()}>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" key={uuid.v4()}>{name}:</Card.Subtitle>
            <a rel="noopener noreferrer" target="_blank" href={link} key={uuid.v4()}><i className="fas fa-link fa-border"></i></a>
            <a href="" onClick={() => deletefav(id)}><i className="fas fa-trash-alt"></i></a>
            </Card.Body>
          </Card>
        </div>
      );
    }
  }
  //below function will allow the user to delerte a favourite
  const deletefav = id => {
    let favourites = JSON.parse(sessionStorage.getItem("favlist"));
    //filter out the item that the user doesn't want
    //on their list...
    let filtered = favourites.filter((value, index, arr) => {
      return value.id !== id;
    });
    sessionStorage.setItem("favlist", JSON.stringify(filtered));
    window.location.reload();
  };

  return (
    <div>
      <Link to="/">
        <p className="homeLink"><i class="fas fa-home"></i>Home</p>
      </Link>
      <h1>Favorites</h1>
      <div className="container-results">
      {displayfavs}
      </div>
    </div>
  );
}

export default Favourites;
