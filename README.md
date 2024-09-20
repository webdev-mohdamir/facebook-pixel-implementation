# Facebook Pixel with React By Mohd Amir

This codebase is a simple example of how to use Facebook Pixel with a React application. It includes a basic React application with a form that tracks a custom event when submitted.

**<p style='color:red'>Note: To use the Facebook Pixel, you need to use the same domain that you verified while creating the pixel code on Facebook.</p>**

**<p style='color:red'>Note: You can use the Meta Pixel Helper extension to see the events and debug.</p>**

## About Me

I am [Mohd Amir](https://www.linkedin.com/in/mohd-amir-7b89612b9/), a full-stack developer with a passion for building scalable and maintainable applications. You can find me on [GitHub](https://github.com/webdev-mohdamir) and [Twitter](https://twitter.com/webdevamir).

**You can search this `Webdev MohdAmir - mohd amir` you will find all my social media and everything.**

## Structure

The codebase is structured as follows:

- `src/`: This directory contains the source code for the React application.
  - `main.jsx`: This file contains the main entry point for the React application.
  - `App.jsx`: This file contains the main component of the application.
  - `hooks/`: This directory contains custom React hooks.
    - `facebookPixelHook.js`: This file contains a custom hook for loading the Facebook Pixel script.
  - `utils/`: This directory contains utility functions.
    - `facebookEvents.js`: This file contains functions for tracking events with Facebook Pixel.
  - `config.js`: This file contains the Facebook Pixel ID.
- `index.html`: This file is the entry point for the application.
- `vite.config.js`: This file contains the configuration for Vite.
- `.env`: This file contains environment variables.
  - `VITE_FB_PIXEL_ID`: The Facebook Pixel ID.

## Use Cases

This codebase can be used in the following scenarios:

- Tracking page views.
- Tracking custom events.
- Tracking form submissions.

## How to Use

1. Clone the repository with `git clone https://github.com/webdev-mohdamir/facebook-pixel-with-react.git`.
2. Initialize the repository with `git init`.
3. Install the dependencies with `npm install`.
4. Start the development server with `npm run dev`.
5. Open the application in a web browser at `http://localhost:3000`.
6. Submit the form to track a custom event.

Note: You need to replace the `VITE_FB_PIXEL_ID` environment variable with your own Facebook Pixel ID.
