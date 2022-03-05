# TimelyCalendar

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## Online

This project was publish only in aws cloudfront + s3 by the following url:

- https://d123ro4s7nqn2j.cloudfront.net

---

### Sumary

##### Code Style

###### - airbnb es-lint and prettier

I like to use these plugins to improve my code.

##### Pages

###### - app/main/calendars

<small><b>Description</b></small>:

The goal of this page is show the users calendars, if we're logged, should be the endpoint that list all calendars (https://timelyapp.time.ly/api/accounts/34486/calendars?per_page=100)

![image](https://user-images.githubusercontent.com/10110065/156866904-e63707ea-0f58-4d98-8fb5-161bbef5fbf5.png)

In each calendar, we have two options (Posterboard and View by month)

###### - app/main/calendars/posterboard/{calendarId}

<small><b>Description</b></small>:

Similar to postboard view of yours app.

![image](https://user-images.githubusercontent.com/10110065/156866954-23090a26-cab0-4a01-b1ce-2ff388f688da.png)

###### - app/main/calendars/month/{calendarId}

<small><b>Description</b></small>:

Similar to month view of yours app.

![image](https://user-images.githubusercontent.com/10110065/156866969-b1972913-d042-4f54-a649-53886991283b.png)

---

##### Components

###### - Date Range Picker

<small><b>Location</b>: src\app\shared\date-range-picker</small>

<small><b>Description</b></small>:

I've created the entire component from scratch using moment package (where I saw that you guys used too in your main product https://app.time.ly)

<small><b>Explanation</b></small>:
With this follwing component we could receive the object `{ startDate: 'YYYY-MM-DD', endDate: 'YYYY-MM-DD' }` in some formGroup, and then use this form data to some action, in this case I used to filter the events.

<small><b>Some prints</b></small>:
![image](https://user-images.githubusercontent.com/10110065/156865700-e6112a2d-23fa-4f39-9884-86275c89bbb3.png)

</br>

###### - Date Range Events

<small><b>Location</b>: src\app\shared\date-range-events</small>

<small><b>Description</b></small>:

Similar to date-range-picker, but here I have one big component that shows the entire days of each month, and the events by day.

When click in the event, a backdrop is created with more details about that event.

<small><b>Some prints</b></small>:
![image](https://user-images.githubusercontent.com/10110065/156866547-25ce96dc-1cd4-4ade-827e-b6a38a0f696e.png)

![image](https://user-images.githubusercontent.com/10110065/156866571-3a32e11a-980a-4059-a3c2-c4473ed99e89.png)

![image](https://user-images.githubusercontent.com/10110065/156866616-00ee4069-2f0d-44c7-8867-ec7b6d98b5b2.png)

###### - Button

<small><b>Location</b>: src\app\shared\button</small>

<small><b>Description</b></small>:

A button representation with some additional features, like three types (primary, secondary, tertiary) and some color variations.

<small><b>Some prints</b></small>:
![image](https://user-images.githubusercontent.com/10110065/156866758-9468241f-9aa7-4e07-8fce-3946e79395d2.png)

##### Pipes

###### - formatHour

<small><b>Location</b>: src\app\core\pipes\format-hour.pipe.ts</small>

<small><b>Description</b></small>:

A pipe to represent only the event date to be able to fill the day with some colors to indicate that the day has events.

![image](https://user-images.githubusercontent.com/10110065/156866808-a7d01893-9d46-44a3-be3b-d53284653d11.png)

##### Utils

###### - getRandomColor and getRandomColorOpacity

<small><b>Location</b>: src\app\core\utils\utils.ts</small>

<small><b>Description</b></small>:

Functions to generate random colors to show events with the pipe formatHour

---

## About tests?

I tried to do some tests, you can find in the /tests folder.
I'm not too good with tests, but I'm studying and improving this part.

---

## Other project

I developed a project with some awesome features like a npm package with an awesome UI
If you want to take a look: https://github.com/Amilson/marvel-comic-sales

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
