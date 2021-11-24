# random-quiz-generator

### Overview

This is a random quiz app generator that consumes an API made using NextJS, Typescript, eslint, prettier, Chakra-ui and Axios. The app asks for an username to authenticate and a difficulty level to request the list of questions, then it generates a random quiz based on the input of 10 questions and by the end the scoreboard to redirect the user back to the form page.

This project was bootstrapped with [Create Next App](https://nextjs.org/docs/api-reference/create-next-app).

## Tech Stack
### Devlopment
* UI: [React](https://reactjs.org/)
* State Control: [Context](https://pt-br.reactjs.org/docs/context.html) for global state e [React Hooks](https://reactjs.org/docs/hooks-intro.html) for local state
* Styling: [Chakra-ui](https://chakra-ui.com) 
* HTTP Client: [Axios](https://github.com/axios/axios)
* Form Control: [React-hook-form](https://react-hook-form.com)
* Icons: [Chakra-ui](https://chakra-ui.com/docs/media-and-icons/icon)

### API
* [Random Quiz](https://quizapi.io/docs/1.0/random-quiz)

### Linter
* [Prettier](https://github.com/prettier/prettier)
* [ESLint](https://github.com/eslint/eslint)

## Usage

Install dependencies:

```sh
yarn (or npm i)
```

Done! Start the service:

```sh
yarn start
```

## Project Structure

* `src/` code base;
* `src/hooks` config and custom hook for data fetch, used to get the token and messages in this project;
* `src/components` components isolated with its styling (if any);
* `src/context` the QuizContext used for global state control of the quiz related data;
* `src/Pages/` first level router components;

## Comandos

```sh
# run the app
yarn start

# build static assets
yarn build 
```
## Screenshots
![quizPage](https://github.com/guiduck/random-quiz-app/blob/main/public/images/quizPage.jpeg)
![quizPageWrong](https://github.com/guiduck/random-quiz-app/blob/main/public/images/quizPageWrong.jpeg)
![scoreboard](https://github.com/guiduck/random-quiz-app/blob/main/public/images/scoreboard.jpeg)
![startQuizPage](https://github.com/guiduck/random-quiz-app/blob/main/public/images/startQuizPage.jpeg)
![whitetheme](https://github.com/guiduck/random-quiz-app/blob/main/public/images/whitetheme.jpeg)
