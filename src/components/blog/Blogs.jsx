import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/queries.js";

function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);
  console.log(loading, data);
  return <div>Blogs</div>;
}

export default Blogs;
