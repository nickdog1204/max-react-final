import {Fragment} from 'react';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
import {useHistory, useLocation} from "react-router-dom";

const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
        if (ascending) {
            return quoteA.id > quoteB.id ? 1 : -1;
        } else {
            return quoteA.id < quoteB.id ? 1 : -1;
        }
    });
};
const QuoteList = (props) => {
    const history = useHistory();
    const loc = useLocation();
    const queryParams = new URLSearchParams(loc.search);
    const sortVal = queryParams.get('sort') || 'asc';
    const isAsc = sortVal === 'asc';
    const sortedQuotes = sortQuotes(props.quotes, isAsc);

    const sortToggleHandler = () => {
        // history.push()
        history.push({
            pathname: loc.pathname,
            search: `?sort=${isAsc ? 'desc' : 'asc'}`
        })
    }
    return (
        <Fragment>
            <div className={classes.sorting}>
                <button onClick={sortToggleHandler}>{isAsc ? '遞減' : '遞增'}排序</button>
            </div>

            <ul className={classes.list}>
                {sortedQuotes.map((quote) => (
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
