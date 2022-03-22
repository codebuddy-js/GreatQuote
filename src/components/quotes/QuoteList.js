import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const searchQuotes = (quotes, ascending) => {
 return quotes.sort((quoteA, quoteB) => {
    if (ascending)
      return quoteA.id > quoteB.id ? 1 : -1;
    else
      return quoteA.id < quoteB.id ? 1 : -1;
  })
}

const QuoteList = (props) => {
  
  const history = useHistory();
  const location = useLocation();
  
  const quotesParams = new URLSearchParams(location.search)

  const isSortAscending = quotesParams.get('sort') === 'asc';
  console.log(isSortAscending)

  const sortedQuote = searchQuotes(props.quotes,isSortAscending)

  const changeOrderHandler = () => {
   history.push("/quotes/?sort=" + (isSortAscending ?'desc':'asc'));
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeOrderHandler}>Sort {isSortAscending? 'Descending':'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuote.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;