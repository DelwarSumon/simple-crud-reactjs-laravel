<p align="center"><a href="https://github.com/DelwarSumon/simple-crud-reactjs-laravel"><img src="https://github.com/DelwarSumon/simple-crud-reactjs-laravel/blob/main/frontend/public/reactjs-laravel.jpg?raw=true" style="width:100%; height:auto;"></a></p>

## Getting Started with Simple CRUD application (React.js and Laravel)

This is a basic CRUD (Create, Read, Update, Delete) application built with React.js for the frontend and Laravel for the backend. It allows users to perform CRUD operations on a set of form data. 

## Featurs

- **Create:** Add new form data with a user-friendly form.
- **Read:** View a list of form data with pagination.
- **Update:** Edit existing form data.
- **Delete:** Remove form data from the system.

## Technologies Used

- **Frontend:**
  - React.js
  - Material-UI for UI components
  - Axios for API communication
  - React Toastify for notification

- **Backend:**
  - Laravel v10
  - Eloquent ORM for database interactions
  - API routes for CRUD operations
    
## Installation Procedure
- **Git clone:**
  - git clone https://github.com/DelwarSumon/simple-crud-reactjs-laravel.git
  - change your directory to simple-crud-reactjs-laravel (Ex: `cd simple-crud-reactjs-laravel`)

- **Set up the Laravel backend:**
  - Navigate to the Laravel backend directory `cd backend` (if you are in simple-crud-reactjs-laravel folder)
  - Install dependencies `composer install`
  - Copy the `.env.example` file to `.env` and configure your database.
  - Generate application key `php artisan key:generate`
  - Run database migrations `php artisan migrate`
  - Start the Laravel server `php artisan serve`

- **Set up the React.js frontend:**
  - Navigate to the React frontend directory `cd frontend` (if you are in simple-crud-reactjs-laravel folder)
  - Install dependencies `npm install`
  - Start the React development server `npm start`

- **Finally:**
  - Open your browser and visit `http://localhost:3000` to access the application

## Folder/File Structure

```CLEA
.
│   
└───frontend
    └───src
        │   App.js
        │   index.js
        └───common  
            └───LoaderContext.js
        └───components
            │   ConfirmationDialog.js
            │   Form.js
            │   FormList.js
            └───Header.js
        └───services
            └───apiService.js
        └───utils
            └───axiosInstance.js
│   
└───backend
    └─── See Laravel directory structure (https://laravel.com/docs/structure)
```

## Documentation

[React JS Documentation](https://react.dev/learn)

[Material UI Documentation](https://mui.com/material-ui/getting-started/)

[Axios Documentation](https://axios-http.com/docs/intro)

[React Toastify Documentation](https://fkhadra.github.io/react-toastify/introduction/)

[Laravel Documentation](https://laravel.com/docs/)

## Screenshots

<img src="https://github.com/DelwarSumon/simple-crud-reactjs-laravel/blob/main/frontend/public/app-screenshots/ss-application1.png?raw=true">
<img src="https://github.com/DelwarSumon/simple-crud-reactjs-laravel/blob/main/frontend/public/app-screenshots/ss-application2.png?raw=true">
<img src="https://github.com/DelwarSumon/simple-crud-reactjs-laravel/blob/main/frontend/public/app-screenshots/ss-application3.png?raw=true">
<img src="https://github.com/DelwarSumon/simple-crud-reactjs-laravel/blob/main/frontend/public/app-screenshots/ss-application4.png?raw=true">

**Have FUN**

