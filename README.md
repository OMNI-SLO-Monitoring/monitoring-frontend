# Monitoring Frontend

The application provides a combined frontend for both monitors [CPU-tracking-monitoring-service](https://github.com/ccims/CPU-tracking-monitoring-service) and the [Error-response-monitoring-service](https://github.com/ccims/Error-response-monitoring-service), as well as the [Issue-Creator](https://github.com/ccims/issue-creator). 

## How to run the application

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Usage

### Cpu-Tracking Monitor:

The Cpu-Tracking Monitor provides the possibility to add services which are to be monitored. These services as of now only comprise the Database Service. The services that are added need
to be importing the [cpu-utilization-observer](https://github.com/ccims/cpu-utilization-observer) package which exposes an endpoint that the backend of the Cpu-Tracking Monitor scrapes for
the cpu load. 


### Error-Response Monitor:

The Error-Response Monitor lets one define certain request parameters in its UI for testing the Database Service in a environment that closely resembles its use cases. The user can adjust the type of request (GET or POST) and the expected response 
which in the case of a GET request is the response data and in the case of a POST request is the HTTP status code. In its UI, one can also fetch all logs received by the backend of the Error-Response Monitor
and observe specifically the logs created by work checking the Database Service.

### Monitoring Selection:

The combined frontend also offers the feature to register multiple services that are to be monitored. Upon registration, the Issue Creator will only assess those logs retrieved from the Kafka Queue whose corresponding service is already registered. Registered services are stored in its own database which can be found in the Issue Creator repository.

### Logs:

All logs that are stored in the Log Message database (which is also sitting inside the Issue Creator repository) are visible in this tab.  

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


