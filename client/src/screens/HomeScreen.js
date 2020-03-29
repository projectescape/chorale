import React from "react";
import { gql, useQuery } from "../services/apollo";

const USER_QUERY = gql`
  query {
    user {
      lastName
      firstName
      email
      photo
    }
  }
`;

const HomeScreen = () => {
  const { loading, error, data } = useQuery(USER_QUERY);

  return (
    <>
      <div>HomeScreen Component</div>
      <div>
        Login using
        <a href="/auth/google">google</a>
      </div>
      {loading
        ? "Fetching Data"
        : error
        ? "Error Fetching data"
        : JSON.stringify(data)}
    </>
  );
};

export default HomeScreen;
