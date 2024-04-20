import express from "express";
import routes from "./routes";
import dotenv from "dotenv";
import logger from "morgan";
import path from "path";
import swaggerSpec from "./swagger";
import SwaggerUi from "swagger-ui-express";
import passport from "passport";
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import User from "./services/UserService"; // Asumiendo que tienes un modelo de usuario

const app = express();

const ENV = process.env.NODE_ENV === "test" ? ".env.testing" : ".env";
dotenv.config({ path: path.resolve(__dirname, "..", ENV) });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

app.use("/api", routes);
app.use("/api-doc", SwaggerUi.serve, SwaggerUi.setup(swaggerSpec));

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: "http://localhost:8080/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Verificar si el usuario ya existe en la base de datos
      let user = profile;//await User.find({ id: profile.id });

      /*if (!user) {
        // Si el usuario no existe, crear uno nuevo con la información del perfil de Google
        user = await User.create({
          email: 'string',
          password: 'string',
          first_name: 'string',
          last_name: 'string',
          birthday: 's',
          user_type: 'string'
          // Puedes agregar más campos según la información que obtengas del perfil
        });
      }*/

      // Devolver el usuario
      console.log(profile)
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

app.use(passport.initialize());

// Ruta para iniciar sesión con Google
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Ruta de retorno de Google OAuth
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Autenticación exitosa, redirigir o responder según lo desees
    res.redirect('/');
  }
);

export default app;