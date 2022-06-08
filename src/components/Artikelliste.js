import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import { useContext } from "react";
import FadeIn from "react-fade-in";

const Artikelliste = () => {
  const { articles, dateFormatter } = useContext(AppContext);

  return (
    <>
      {articles.length === 0 ? (
        <div class="ui active inverted dimmer">
          <div class="ui midi text loader">Loading</div>
        </div>
      ) : (
        articles.map((article, index) => {
          return (
            <FadeIn key={index}>
              <div className="ui relaxed divided list">
                <div className="item">
                  <i className="large quote left middle aligned icon"></i>
                  <div className="content ">
                    <Link to={`/posts/${article.id}`} className="header">
                      <br /> {article.title}
                    </Link>
                    <div className="description">
                      {dateFormatter(article.created_at)}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })
      )}
    </>
  );
};

export default Artikelliste;
