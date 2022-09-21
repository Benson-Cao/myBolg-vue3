import axios from "axios";
import { ref } from "vue";

function getPost(id) {

  const post = ref({});
  const load = async () => {
    let { data } = await axios.get("http://localhost:3000/post/"+id);
    // console.log(data);
    post.value = data;
  };

  return {
    post, load
  };
}
export default getPost;
