# Explore Lesotho — Tourism Web Application

## Project Overview

Explore Lesotho is a responsive and interactive tourism web application developed using React.js. The application is designed to help local and international visitors discover tourist attractions, cultural experiences and adventure activities available in the Kingdom of Lesotho.

The website provides information about popular destinations, allows users to search and filter attractions, view destination details and complete a visitor enquiry form.

This project was developed for **Individual Assignment 2b — React.js Tourism Web Application**.

## Features

### 1. Home Page

- Attractive tourism hero section.
- Introduction to Lesotho as a tourist destination.
- Featured tourist destinations.
- Popular tourism activities.
- Navigation to the Attractions and Enquiry pages.

### 2. Attractions Page

- Displays eight tourist attractions in Lesotho.
- Attractions are stored in a JavaScript array of objects.
- Destination cards are generated dynamically using React's `map()` method.
- Each attraction contains a name, image, location, category, description, available activities and estimated visiting cost.

### 3. Search and Filtering

- Search attractions by name.
- Filter destinations by category.
- Dynamically update matching results.
- Display a message when no destinations match the search.

### 4. Attraction Details

- Interactive View Details buttons.
- Popup displaying detailed destination information.
- Activities and estimated visiting costs.
- Ability to close the popup.

### 5. Visitor Enquiry Form

- Full Name
- Email Address
- Phone Number
- Selected Destination
- Number of Visitors
- Preferred Visit Date
- Message

The form includes client-side validation, field-specific error messages and an on-screen confirmation after successful validation.

**Note:** This is a front-end demonstration. Enquiries are not sent to a server or stored in a database.

### 6. Responsive Design

The application supports desktop, tablet and mobile screen sizes. It includes responsive layouts, attraction cards, forms and mobile navigation.

## Featured Tourist Attractions

1. Maletsunyane Falls
2. Katse Dam
3. Thaba Bosiu
4. Sani Pass
5. Sehlabathebe National Park
6. Bokong Nature Reserve
7. Liphofung Cave
8. Afriski Mountain Resort

*Visiting costs are illustrative estimates and should not be treated as confirmed admission prices.*

## Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- React Router DOM
- Git and GitHub
- Visual Studio Code
- Create React App

## React Concepts Implemented

- Functional components
- JSX
- Props
- `useState`
- `useEffect`
- Event handling
- Conditional rendering
- Dynamic list rendering with `map()`
- Form handling and validation
- React Router navigation

## Project Folder Structure

```text
lesotho-tourism/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── AttractionCard.js
│   ├── data/
│   │   └── attractions.js
│   ├── images/
│   ├   pages/
│   │   Home.js
│   │   Attractions.js
│   │   Enquiry.js
│   App.js
│   App.css
│   index.js
│   index.css
screenshots/
package.json
package-lock.json
README.md
```

The `screenshots/` directory will contain images of the completed application.

## Installation and Setup

### Prerequisites

Install Node.js and npm on your computer.

### 1. Clone the repository

```bash
git clone https://github.com/molikoemaqhai-star/lesotho-tourism.git
```


### 2. Open the project folder

```bash
cd lesotho-tourism
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the application

```bash
npm start
```

Open the local address displayed in the terminal, normally `http://localhost:3000`. If that port is occupied, React may offer another port.

### 5. Create a production build

```bash
npm run build
```

This generates an optimized production version of the application.

## Application Testing

The following features have been manually tested:

- Search and filtering: 6 tests passed.
- Attraction details: 6 tests passed.
- Enquiry form: 8 tests passed.
- Responsive design: 7 tests passed.

The application was also built for production using Create React App.

## Project Screenshots

Screenshots of the application will be included in the `screenshots/` folder:

- Home Page
- Attractions Page
- Attraction Details Popup
- Visitor Enquiry Form
- Mobile Responsive Layout

## Future Improvements

- Connect the enquiry form to a backend service.
- Add an interactive map of Lesotho's attractions.
- Include destination ratings and reviews.
- Provide multilingual support.
- Add verified pricing and visitor information.

## Conclusion

Explore Lesotho demonstrates the use of React.js to build an interactive, responsive and component-based tourism web application. It combines dynamic destination data, search and filtering, interactive attraction details and visitor enquiry validation to provide a useful tourism information platform.
