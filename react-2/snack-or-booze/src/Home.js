import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle tag="h3">
            Welcome to Silicon Valley's premier dive cafe! We offer{" "}
            <span style={{ fontWeight: "bold", color: "yellow" }}>
              {snacks.length}
            </span>{" "}
            different kind of snacks and{" "}
            <span style={{ fontWeight: "bold", color: "yellow" }}>
              {drinks.length}
            </span>{" "}
            different kinds of drinks
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
