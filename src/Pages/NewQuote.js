import useHttp from '../hooks/use-http';
import React, { Fragment, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import { addQuote } from '../lib/api';

const NewQuote = () => {
    const {sendRequest, status}=  useHttp(addQuote);
  const history = useHistory();
  
  useEffect(() => {
    if (status === 'completed') {
      history.replace('/quotes')
     }
  }, [history,status])
  
    const addQuoteHandler = (QuoteData) => {
      sendRequest(QuoteData);
    }
  return (
      <Fragment>
          <QuoteForm isLoading={status ==='pending'} onAddQuote={addQuoteHandler}/>
    </Fragment>
  )
}

export default NewQuote;