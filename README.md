# JS401 - Lab-16 Event Driven Apps
## Author: Cory Henderson
This lab contains requires use of promises and Node.js event emitters/listeners to read, update, and write to a file. Event listeners are used to confirm successful or unsuccessful file editing.

## Links and Resources
- [Github Repo](https://github.com/401-advanced-javascript-1/lab-13-bearerAuth/tree/submission)
- [Travis](https://www.travis-ci.com/401-advanced-javascript-1/lab-13-bearerAuth)

## Documentation
- [JSDocs]()

# Modules
- app.js: contains functionality for read/update/write files
- events.js: creates the node.js event instances
- logger.js: contains event listeners and their associated callback functions

# Setup
- Run the following command to update a file:
    - node app.js (filename)
- If successful, you will get a success console.log.
- If unsuccessful, you will get an error response.

## Tests
- Testing for expected route endpoints is performed using jest.