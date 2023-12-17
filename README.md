<p align="center"><a href="https://github.com/DelwarSumon/simple-crud-reactjs-laravel"><img src="https://github.com/DelwarSumon/simple-crud-reactjs-laravel/blob/main/frontend/public/reactjs-laravel.jpg?raw=true" style="width:100%; height:auto;"></a></p>

## Getting Started with Calculator Extension for Google Chrome  

This is a simple calculator extension for google chrome which allows you to perform calculations quickly and conveniently. Made with Html, CSS, Javascript. 

## Featurs

- Include a numeric keypad with buttons
- Support basic arithmetic operations, including addition (+), subtraction (-), multiplication (×), and division (÷).
- Allow to enter and calculate numbers with decimal places (.).

### Keyboard Actions

  - You can use **numeric keypad** of keyboard
  - **Enter** for do the operation
  - **Backspace** for remove last letter
  - **Esc** *single click* to clear the screen
  - **Esc** *double click* to close the extension
    
### Installation Procedure

- git clone https://github.com/DelwarSumon/simple-crud-reactjs-laravel.git
- change your directory to simple-crud-reactjs-laravel (Ex: `cd simple-crud-reactjs-laravel`)

### ReactJS 
- `npm install -g create-react-app`
- `npx create-react-app frontend`
- Turn on the switch on the top right of the page that says `Developer mode`
- Click on the button on the top left of the page that says `Load unpacked`
- Select the git cloned folder that contains the `manifest.json` file

### Laravel
- `composer create-project laravel/laravel backend`
- `cd backend`

create DB db_crud_reactjs_laravel
put DB info in .env
php artisan migrate
php artisan serve
php artisan make:model FormData -m
php artisan migrate


## Folder/File Structure

```CLEA
.
│   manifest.json
│   popup.html
└───assets
    └───css
        └───popup.css
    └───js
        |   math.js
        └───popup.js
    └───images
        └───icon.png
```

## Documentation

[Google Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)

## Screenshots

<img src="https://github.com/DelwarSumon/simple-crud-reactjs-laravel/blob/main/assets/images/extension.png?raw=true">

**Have FUN**

