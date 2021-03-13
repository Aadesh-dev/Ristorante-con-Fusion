import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  if (dish != null)
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  else return <div></div>;
}

function RenderComments({ comments }) {
  return (
    <div>
      <h4>Comments</h4>
      <ul className="list-unstyled">
        {comments.map((item) => {
          return (
            <>
              <li>{item.comment}</li>
              <br />
              <li>
                -- {item.author} ,{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(item.date)))}
              </li>
              <br />
            </>
          );
        })}
      </ul>
    </div>
  );
}

const DishDetail = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          {props.dish == null ? (
            <div></div>
          ) : (
            <RenderComments comments={props.dish.comments} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
