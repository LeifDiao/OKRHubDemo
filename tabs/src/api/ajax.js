import axios from "axios";
import SuiAlert from "components/SuiAlert";

export default function ajax(url, data = {}, type = "GET") {
  return new Promise((resolve, reject) => {
    let promise;
    if (type === "GET") {
      promise = axios.get(url, {
        params: data,
      });
    } else {
      promise = axios.post(url, data);
    }

    promise
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        error(
          <SuiAlert color="error" dismissible>
            This is a dismissible alert!
          </SuiAlert>
        );
      });
  });
}
