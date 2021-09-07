import { useState, useEffect } from "react";
import Card from "./Card";
// eslint-disable-next-line
import styles from "../App.module.css";
const CardContainer = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users").then((response) => {
      response
        .json()
        .then((data) => {
          setUsers(data.data);
          props.setLoader(false);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);

  return (
    <div className="container-lg row bg-light align-items-center justify-content-center p-3 mt-3">
      {users.map((user, index) => {
        return (
          <Card
            key={user.id}
            name={`${user.first_name} ${user.last_name}`}
            email={user.email}
            avatar={user.avatar}
          ></Card>
        );
      })}
    </div>
  );
};

export default CardContainer;
