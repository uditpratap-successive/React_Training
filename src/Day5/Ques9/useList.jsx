import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query Characters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        image
      }
    }
  }
`;

const useList = (page) => {
  const { error, data, loading } = useQuery(GET_CHARACTERS, {
    variables: { page },
  });

  return {
    error,
    data,
    loading,
  };
};

export default useList;
