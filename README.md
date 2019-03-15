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
Then set the firebase rules to true, read and write.
```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```


## Issues
Now cannot show 2 graphs at the same time.

## Credits
https://redstapler.co/javascript-realtime-chart-plotly/
