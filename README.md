# hew-word-search-kata

This is a javascript solution for the Word Search Kata.

### ! Attention: Node.js must be installed on your computer to run this program.

## === SET UP ===

#### 1. fork and clone repo, or download zip file.

#### 2. open terminal and run $ npm install

## === ASSUMPTIONS ===

#### 1. The board input will be one long string that will need to be transformed into a sqaure board.

-   The input values were created from the website: <http://puzzlemaker.discoveryeducation.com/WordSearchSetupForm.asp>

![img](https://s33.postimg.cc/ylgt3gu33/Screen_Shot_2018-08-23_at_5.40.43_PM.png)

-   The strings used in the input were pulled from html elements inner HTML by inspecting the HTML page:

![img](https://s33.postimg.cc/fhnhn41tb/Screen_Shot_2018-08-25_at_5.37.06_PM.png)

## === ABOUT THE CODE ===

#### 1. config/index.js

-   This is where you import the copied string from the inspected html page

![img](https://s33.postimg.cc/mm5awibr3/Screen_Shot_2018-08-25_at_5.41.40_PM.png)
![img](https://s33.postimg.cc/vwhgtcntb/Screen_Shot_2018-08-25_at_5.57.46_PM.png)

## === RUNNING THE CODE ===

#### 1. To get a detailed test of each test suite and the solution:

-   $ npm start
    #### 2. To run only the detailed test pf each suite:
-   $ npm run-script testDetails
    #### 3. To run tests and only recieve details of failed tests:
-   $ npm test
    #### 4. To run only the solution:
-   $ npm run-script solution
