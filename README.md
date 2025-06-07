React Native Assignment
This is a React Native project initialized and built as part of my assignment work. The goal was to create a basic product listing app with navigation and state management using Redux Toolkit.
 Project Setup
Project initialized using:

npx @react-native-community/cli@latest init Assignment
Connected to a physical Android device for development and testing.

App is run using:

bash
Copy
Edit
npx react-native run-android
Installed Packages
@react-navigation/native and required dependencies (react-native-screens, react-native-safe-area-context, etc.)

@reduxjs/toolkit and react-redux

react-native-image-picker for image selection

react-native-vector-icons for icons (including Hero Icons style)

Features Implemented
Home screen showing product list using FlatList

Custom components: TextAtom, HeaderAtom, ProductCardButton, etc.

Navigation between screens using React Navigation

Add, edit, and delete products

Global state management with Redux Toolkit

Loading and delete confirmation popups

State Management
Redux Toolkit is used to manage product data:

setProductsData to add products

removeProduct to delete products

Testing
Tested on a real Android device connected via USB

Verified navigation, API calls, Redux actions, and UI rendering