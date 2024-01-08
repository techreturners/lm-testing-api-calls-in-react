# 🧪 Assignment Instructions – Testing API Calls in React with the Star Wars API 🧪

Welcome 👋 For this assignment, we'll use the [Star Wars API](https://swapi.dev/).

## 📝 The Brief:

Implement and test a GET request to the Star Wars "people" endpoint: `https://swapi.dev/api/people`

Your application will display the `name` of the first character entry within the response ... some chap called Luke, apparently.

### Suggested steps: 

1. Fork and clone this repo, and create a new React app within it
2. Have your React app fetch and display the data specified in the brief
3. Mock (or "stub") the API response with [msw](https://mswjs.io/docs/getting-started)
4. Implement a test to check the first person that your mock server returns is rendered as expected.

## 🔥 Extension:

Write tests for the following scenarios:
  
  - the API responds with [Status Code 500](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500) (Internal Server Error) your component displays the error message `"🤕 Something went wrong; try again."`
  - the API response with [Status Code 418](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418) (I’m a tea pot) write another test checking your component displays an error message saying `"🫖 I'm a tea pot, silly."`

## 💡Top Tips💡

  - This exercise is **not** about what your app looks like so don’t worry about styling!
  - You will need to create a React app from scratch and strip out excess boiler plate.
  - You will need to make an API call – think, 🫂 fetch and useEffect 🫂
  - Ensure your [test query](https://testing-library.com/docs/react-testing-library/cheatsheet/#queries) works with async-await
  - Remember to commit little and often to GitHub, and to keep your commit messages nice and descriptive
  - Take time to ensure your README explains how to run your app! 🔥

## Key Resources

  - [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/example-intro#full-example)
  - [Mock Service Worker Library](https://mswjs.io/)
