import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from 'passport';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALLBACK_URL } from '@config';
import { findOrCreateUser} from '../models/passport.model';


passport.use(new GoogleStrategy(
    {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: GOOGLE_CALLBACK_URL
    },
    async function(accessToken, refreshtoken, profile, done) {
        try{
            const user = await findOrCreateUser(profile, accessToken, refreshtoken)
            return done(null, user)
        }
        catch(error){
            return done(error)
        }
    }

))


export default passport