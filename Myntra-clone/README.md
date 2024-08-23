# MyntraStore

MyntraStore is an e-commerce web application built using React and Redux Toolkit. The project demonstrates the use of Redux for state management, including features like item management, fetch status tracking, and a shopping bag feature.

## Project Structure

The project is organized as follows:

### **src/**

- **components/**
  - **`BagItem.jsx`**: Component to display an individual item in the shopping bag.
  - **`BagSummary.jsx`**: Component to display the summary of the shopping bag, including total price, discount, and final amount.
  - **`Fetching.jsx`**: Component to handle the display of fetch status during data loading.
  - **`Footer.jsx`**: Component for the footer section of the application.
  - **`Header.jsx`**: Component for the header/navigation bar.
  - **`HomeItem.jsx`**: Component to display individual items on the home page.
  - **`LoadingSpinner.jsx`**: Component to show a loading spinner when data is being fetched.

- **routes/**
  - **`App.jsx`**: The main application component that integrates the header, footer, and routing.
  - **`Home.jsx`**: The home page that displays a list of items fetched from the store.
  - **`Bag.jsx`**: The shopping bag page that displays items added to the bag and the order summary.

- **store/**
  - **`BagSlice.js`**: Redux slice to manage the state of items in the shopping bag.
  - **`FetchStatusSlice.js`**: Redux slice to manage fetch status (loading indicators).
  - **`ItemSlice.js`**: Redux slice to manage the items fetched from an external source.
  - **`index.js`**: Centralized Redux store configuration file that combines all slices.

## Redux Slices

- **BagSlice.js**: Manages the state of the shopping bag, including actions to add and remove items.
- **FetchStatusSlice.js**: Tracks the status of data fetching operations, including whether a fetch is currently in progress and if the fetch is complete.
- **ItemSlice.js**: Handles the storage and initialization of items fetched from an external source.

## Running the Project

1. **Install dependencies:**
     node js
   ```bash
   npm install
   npm run dev

