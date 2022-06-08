import { createContext, useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "moment/locale/de";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);

  const api = () => {
    return axios.create({
      baseURL: "https://react-yazi-yorum.herokuapp.com",
    });
  };
  const getArticles = () => {
    (async () => {
      const response = await axios.get(
        "https://react-yazi-yorum.herokuapp.com/posts"
      );

      setArticles(response.data);
    })();
  };
  useEffect(() => {
    getArticles();
  }, []);

  const dateFormatter = (date) => {
    return moment(date).locale("de").calendar();
  };
  return (
    <AppContext.Provider value={{ getArticles, articles, api, dateFormatter }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
