# js-firebase-boilderplate
Created for educational use only

## Installation
Using git:
```
git clone https://github.com/tickstudiu/js-firebase-boilderplate.git
```
Next, edit the file **config.js**
```
var config = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "..."
};
firebase.initializeApp(config);
```
Then set the firebase **rules to true**, read and write.
```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
Then try to create a database in firebase as shown in the example.
```
NameDatabase
  \_ data
        \_ key
            \_ data1: "data1"
            \_ data2: "data2"
            \_ data3: "data3"
            \_ data7: "data4"
```

## Issues
Now **cannot** show 2 graphs at the same time.

## Credits
chart: https://redstapler.co/javascript-realtime-chart-plotly/
bootstrap: https://getbootstrap.com/
