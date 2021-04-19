import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';

import {
    BrowserRouter as Router,
    Redirect,
    Switch
} from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setLoggedIn] = useState(false);


    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }

            setChecking(false);
        });

    }, [dispatch, setChecking, setLoggedIn]);

    if (checking) {
        return (<h1>Espere.....</h1>)
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={AuthRouter}
                        isAuth={isLoggedIn}
                    />

                    <PrivateRoute
                        exact
                        path="/"
                        component={JournalScreen}
                        isAuth={isLoggedIn}
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
