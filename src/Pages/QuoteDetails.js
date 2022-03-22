import React, { useEffect, Fragment } from "react";
import { Link, Route, useParams, useRouteMatch} from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetails = () => {
  const match = useRouteMatch();
  const param = useParams();
  const { quoteId } = param;

  const {
  sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);
 
  
  
  console.log(quoteId);
  

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  if (status === "pending") {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="centered">{error}</div>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found..!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
