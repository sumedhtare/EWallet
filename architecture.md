# App architecture

App starts with index.js to register <App/> component
- App.tsx contains <Provider/> for rest of the app which also wraps <Routes/>
- src/routes.tsx contains rest of the screens required by the app

App uses redux-saga as meddileware to pass data between screens
it also uses <ThemeProvider/> to pass theme props throught the screens
global.d.ts files has been used to add additional theme parameters

user journey would look like Splash => Home

The App also comes with toggle-switch-react-native which does not support typeScript
but works as expected.

All common Components are placed inside src/Components
similarly functions, apiService, sagas, screen and store, etc
are stored inside src directory