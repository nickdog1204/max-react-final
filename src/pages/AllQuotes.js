import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import {getAllQuotes} from "../lib/api";
import {useEffect} from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const DUMMY_QUOTES = [
    {id: 'q1', author: '謝東宇', text: '今日事今日畢'},
    {id: 'q2', author: '蘇美鳳', text: '泡麵75折'},
    {id: 'q3', author: '郭台銘', text: '魔鬼藏在細節裡'},
]

const AllQuotes = () => {
    const {sendRequest, status, error, data: loadedQuotes} = useHttp(getAllQuotes, true)
    console.log('loadedQuote: ', loadedQuotes)
    console.log('status: ', status)

    useEffect(() => {
        sendRequest();
    }, [sendRequest])

    if ('pending' === status) {
        return <div className='centered'>
            <LoadingSpinner/>
        </div>
    }
    if (error) {
        return <div className='centered'>error</div>
    }
    if ('completed' === status && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFound/>
    }
    return (
        <QuoteList quotes={loadedQuotes}/>
    )

}

export default AllQuotes;