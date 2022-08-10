# Workout-Buddy

Workout Buddy is a simple application for users to log their exercises on a website!

Workout Buddy allows users to create accounts and log their exercises based on the name of the exercise, the load or weight (in pounds), and the amount of reps done. Users can add as many exercises and delete any exercises they added to their profile.

This application was developed using the MERN stack (MongoDB, Express, React, Node.js). MongoDB is used for holding exercise data and sensitive user data (emails and passwords). Passwords are hashed by using both an encryption algorithm and a randomly generated salt appended to the user password for extra security. JWT authentication tokens are used for ensuring security while navigating the site. Mongoose is used for creating controllers for receiving requests and responses from the user to the database. A basic React UI was developed for creating the view of the program. Various Node.js libraries are used for both the frontend and backend.
