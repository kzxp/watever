import app from 'firebase/app'
import database from 'firebase/database'
import auth from 'firebase/auth'
import config from './config'

const firebaseInit = () => {

    app.initializeApp(config.firebase);
    global.firebaseApp = app;

}

export default { firebaseInit }
