import axios from "axios";
import { ref } from "vue";

function getPosts() {

  const posts = ref([]);
  const load = async () => {
    let { data } = await axios.get("http://localhost:3000/post");
    // console.log(data);
    posts.value = data;
  };

  return {
    posts, load
  };
}
export default getPosts;
