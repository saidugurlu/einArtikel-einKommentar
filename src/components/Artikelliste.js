import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import { useContext } from "react";
import moment from 'moment';

const Artikelliste = () => {
  const { articles } = useContext(AppContext);
  moment().subtract(10, 'days').calendar(); // 03/09/2019
  moment().subtract(6, 'days').calendar();  // Last Wednesday at 1:35 PM
  moment().subtract(3, 'days').calendar();  // Last Saturday at 1:35 PM
  moment().subtract(1, 'days').calendar();  // Yesterday at 1:35 PM
  moment().calendar();                      // Today at 1:35 PM
  moment().add(1, 'days').calendar();       // Tomorrow at 1:35 PM
  moment().add(3, 'days').calendar();       // Friday at 1:35 PM
  moment().add(10, 'days').calendar();      // 03/29/2019
                                           
  
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
                <div className="description">{moment(article.created_at.toDate()).calendar()}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Artikelliste;
