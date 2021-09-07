const card = (props) => {
  return (
    <div className="card col-lg-3 col-md-4 m-2 p-3 hover-shadow">
      <img src={props.avatar} className="card-img-top " alt="User Avatar" />
      <div className="card-body">
        <h5 className="card-title">Name: {props.name}</h5>
        <h6 className="card-text">Email: {props.email}</h6>
      </div>
    </div>
  );
};

export default card;
