# Frontenv-VO2

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=gerardabsi_frontend-vo2&metric=alert_status)](https://sonarcloud.io/dashboard?id=gerardabsi_frontend-vo2)

### Runing Project Locally
- Install dependencies: run `npm install` in root project
- Run project: `npm start`
- Run Tests: `npm run test`

## Structure Used

<img width="100%" alt="atomic design" src="https://user-images.githubusercontent.com/4838076/33235048-d083dca6-d217-11e7-9aea-9a5ef5ae6fe7.png">

### Atomic Design


### What is Atomic Design?


Popularly known within the design world, Atomic Design helps to build consistent, solid and reusable design systems. Plus, in the world of React, Vue and frameworks that stimulate the componentization, Atomic Design is used unconsciously; but when used in the right way, it becomes a powerful ally for developers.

The name Atomic Design comes from the idea of separating the components in atoms, molecules, organisms, templates and pages, like in the image above. But what are the responsibilities of each separated part?


### Atoms 

Atoms are the smallest possible components, such as buttons, titles, inputs or event color pallets, animations, and fonts. They can be applied on any context, globally or within other components and templates, besides having many states, such as this example of button: disabled, hover, different sizes, etc.


### Molecules

They are the composition of one or more components of atoms. Here we begin to compose complex components and reuse some of those components. Molecules can have their own properties and create functionalities by using atoms, which don’t have any function or action by themselves.


### Organisms

Organisms are the combination of molecules that work together or even with atoms that compose more elaborate interfaces. At this level, the components begin to have the final shape, but they are still ensured to be independent, portable and reusable enough to be reusable in any content.

### Pages

Pages are the navigate parts of the application and it’s where the components are distributed in one specific template. The components get real content and they’re connected with the whole application. At this stage, we can test the efficiency of the design system to analyse if all the components are independent enough or if we need to split them in smaller parts.

## Folder Structure
- components
    - Atoms
        - FormikStep: Form Step that display the step children
        - PhoneInputField: Uses react-phone-input2 to create a phone component that extends the form data of formik to be able to handle the input change
        - UserSummaryRow: Displays The info given
    - Molecules
        - FormikWrapper: Formik Wrapper that receive former steps children and devid them into steps
    - Organism
        - RegistrationForm
- pages
- routes
- store

## Libraries

- Webpack
  - CSS Loader
  - SVG Sprite loader
  - File loader 
- Babel
  - Loader
  - Preset ES2015
- Project
  - Atomic Design styles folder structure
  - ESLint
  - Prettier
  - Husky
  - React router dom
  - Redux
  - Redux Thunk
  - Redux Logger
  - Material UI
  - Formik
  - Formik Material UI
  