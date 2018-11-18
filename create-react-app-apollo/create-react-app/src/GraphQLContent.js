import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_HELLO = gql`
  {
    hello
  }
`;

const GraphQLContent = () => (
  <Query query={GET_HELLO}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return <p>{data.hello}</p>;
    }}
  </Query>
);

export default GraphQLContent;
