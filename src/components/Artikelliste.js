import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import { useContext } from "react";

const Artikelliste = () => {
  const { articles, dateFormatter } = useContext(AppContext);

  return (
    <>
      {articles.map((article, index) => {
        return (
          <div key={index} className="ui relaxed divided list">
            <div className="item">
              <i className="large quote left middle aligned icon"></i>
              <div className="content">
                <Link to={`/posts/${article.id}`} className="header">
                  {article.title}
                </Link>
                <div className="description">
                  {dateFormatter(article.created_at)}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Artikelliste;
