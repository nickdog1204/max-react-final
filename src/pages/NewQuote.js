import QuoteForm from "../components/quotes/QuoteForm";
import {useHistory} from "react-router-dom";
import useHttp from "../hooks/use-http";
import {addQuote} from "../lib/api";
import {useEffect} from "react";

const NewQuote = () => {
    const history = useHistory();
    const {sendRequest, status} = useHttp(addQuote)
    useEffect(() => {
        console.log('status: ', status);
        if ('completed' === status) {
            history.push('/quotes');
        }

    }, [status, history]);
    const addQuoteHandler = ({author, text}) => {
        // console.log('author: ', author)
        // console.log('text: ', text)
        sendRequest({author, text})
    };
    return (
        <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}/>
    )

}

export default NewQuote;
