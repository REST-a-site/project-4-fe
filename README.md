## 921Steak

## Maintained
[![Netlify Status](https://api.netlify.com/api/v1/badges/4d0ecb82-56fb-4323-bb50-a79e65a53a8d/deploy-status)](https://app.netlify.com/sites/rest-a-site/deploys)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)


## Motivation:
The "Industry", which is comprised primarily of bars and restaurants, often outsource the building of their websites to third party services. With this comes the less than stellar access to update their seasonally changing menu or 86 items for which they no longer have stock to make. Giving control back to restaurant operators was the central motivation of ths project. Using a fake restaurant website, 921Steak, we wanted to create a fullstack application where an operation can login to their website and create, update, and delete menu items as needed. 
## Screenshots
![Hero Desktop](images/Hero_Desktop.jpg)
## Tech/Framework Used
1. Frontend: 
    - React
2. Backend: 
    - Django
    - Python 3  
## Features
- Opentable widget integration 
- Google maps integration (Still in progress)
## Tests (Updates coming)
## Installation 
### Requires Python3 or greater for installation
### Complete steps one through four to pull down the project with it's current database, and five through 10 to create a local database on your device. 
1. Fork and clone this repository 
2. Navigate into project-4-be
3. Install Dependencies
`npm i`
4. Install Django
`pipenv install django`
5. Start your server
`npm start`
## Login Credentials
- email: admin@admin.admin
- password: password12
## Wireframes
=======
[![Netlify Status](https://api.netlify.com/api/v1/badges/4d0ecb82-56fb-4323-bb50-a79e65a53a8d/deploy-status)](https://app.netlify.com/sites/rest-a-site/deploys)


### Your group members and scrum leader (if applicable) 

Jake (PM), Sam, JT

### Your project idea 

- We are creating a web template  to enable restaurants to better manage their digital presence.  To demonstrate the template, we will be showcasing our hypothetical steakhouse "921steak".  

### Your tech stack (frontend, backend, database)

- FE - React.js
- BE - Python/Django
- PostgresQL

### List of backend models and their properties

- User
    - Email
    - Password
    - Full Name
    - Status
    - Role

- Menu
    - Title
    - Description
    - Footer
    - Status

- MenuSections
    - Title
    - Description

- MenuItems
    - Title
    - Description
    - Price
    - Status
    - Allergens

- Hours
    - Monday
    - Tuesday
    - Wednesday
    - Thursday
    - Friday
    - Saturday
    - Sunday
        

### React component hierarchy (if applicable)

- Home
    - Hero
    - About
        - Hours
    - Team
    - Reserve
    - Contact
- PrivateEvents
- Menu
- Manage
    - MenuForm
    - HoursForm

### User stories

- As a user, I would like to be able to see when the restaurant is open, place a call, or get a reservation all from the home page, because it's convenient.
- As a user, I need to see a visual representation of the restaurant, so I know what to expect.
- As a user, I would like to be able to submit a form to book a private event, so I can schedule my party.
- As a user, I would like to be able to submit a form to contact the restaurant, so I can leave feedback.
- As a user, I would like to be able to link to the social accounts, so I can engage with the business across multiple platforms.
- As a user, in the footer I would like to see who designed this website, so that I can hire the developers.
- As an admin user, I need to be able to log into an admin dashboard to update our menu/hours or post/remove menu items, so I can reflect the seasonal changes of the restaurant.
### Wireframes
- Landing Page and below the fold.
![img012](https://user-images.githubusercontent.com/68978118/101722893-60349280-3a68-11eb-8603-0536a889c664.jpg)
- Menu Management
![img014](https://user-images.githubusercontent.com/68978118/101722849-514de000-3a68-11eb-82a9-02d4c360beb2.jpg)

## Credits
- [Jake Addis](https://github.com/jake-utk)
- [Sam Goldstein](https://github.com/samgold2020)
- [James Tomassoni](https://github.com/jtomassoni)