import {Link, Route, useParams, useRouteMatch} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import {getSingleQuote} from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import {useEffect} from "react";
import NoQuotesFound from "../components/quotes/NoQuotesFound";


const QuoteDetails = () => {
    const {quoteId} = useParams();
    const match = useRouteMatch();
    const {sendRequest, status, error, data: loadedQuote} = useHttp(getSingleQuote, true);
    useEffect(() => {
        sendRequest(quoteId)
    }, [sendRequest, quoteId])
    if ('pending' === status) {
        return <div className='centered'>
            <LoadingSpinner/>
        </div>
    }
    if (error) {
        return <div className='centered'>error</div>
    }
    if (!loadedQuote.text) {
        return <NoQuotesFound/>

    }
    return (
        <section>
            <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text}/>
            <Route path={match.path} exact>
                <div className='centered'>
                    <Link className='btn--flat'
                          to={`${match.url}/comments`}
                    >顯示評論</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments/>
            </Route>

        </section>
    );

}

export default QuoteDetails;
