# README

![alt text](/app/assets/images/Site_Screenshot.JPG "Site Screenshot")
Footprint is a website that users can find information about trails. It's a clone of original alltrails.com website.


## Features
Users are able to:
* Search trails by name, parks that trails are located in and location of trails on map.
* Get information like length, elevation gain, difficulty of path and type of the trail.
* See the original pictures of trails and the pictures that other users uploaded.
* Post a review about their experience, upload picturs and rate the trail.

[Footprint Live](https://footprint-1.herokuapp.com/)



## Technologies
These technologies are used to develop this website:
* Ruby on Rails framework as backend
* PostgreSQL as database system
* AWS S3 storage to store all original and user-uploaded pictures
* React as frontend engine
* Redux to manage the state of frontend
* jQuery's $.ajax() function to send frontend requests to backend


## User Authentication Features
* All necessary controls has been made to make sure the user do not submit a signup form with:
  * Blank mandatory fields
  * Wrong format of email address
  * Password with less than 6 characters
* It has Demo User feature to login to website as a guest user to check the basic features


## Future Goals
The following features hasn't been finished yet and will be added in the future:
* Searching and showing the trails informationa and pictures
* Searching parks and showing the trails inside each park
* Filtering the search results by different criteria
* Writing and editing the reviews by users
* Rating the trails by users


### Calorie Calculator
It's a handy feature to be added to website to calculate the amount of calorie that user burns walking the trails. To accomplish this, some more user information like height, weight and age is needed.





