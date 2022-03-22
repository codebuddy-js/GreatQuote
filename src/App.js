import { Redirect, Route, Switch} from "react-router-dom"
import Layout from "./components/layout/Layout";
import AllQuote from "./Pages/AllQuote";
import NewQuote from "./Pages/NewQuote";
import NotFound from "./Pages/NotFound";
import QuoteDetails from "./Pages/QuoteDetails";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
        <Redirect to="/quotes"/>
      </Route>
        <Route exact path="/quotes/">
        <AllQuote />
      </Route>
      <Route  path="/quotes/:quoteId">
        <QuoteDetails/>
      </Route>
      <Route exact path="/new-quote">
        <NewQuote />
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
    </Switch>
    </Layout>
  )
}

export default App;
