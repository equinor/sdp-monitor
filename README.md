This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

We use this app for our TV monitor at the office. It unites three different apps into a "single pane of glass"

https://github.com/equinor/aware
https://github.com/equinor/release-aware
and our Sensu instance.

Including the Sensu instance is redundant in many cases, as the aware app also queries the sensu API. It can be useful if we need to dig further into the details of an error/warning.

Example:

![Architecture](/media/Demo.png)
