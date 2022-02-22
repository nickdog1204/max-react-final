import {Route} from "react-router-dom";

const Welcome = () => {

    return (
        <section>
            <h1>歡迎光臨</h1>
            <Route path='/welcome/new-user'>
                <p>你好 新成員</p>
            </Route>

        </section>
    );

}

export default Welcome;