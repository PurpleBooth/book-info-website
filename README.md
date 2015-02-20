# book-info-website

This is the demo site for the Silex and MVVM talk. It is the component that contains the angular.js and express frameworks. 

It's responsibilities are, present a nice user interface, and combine the responses from silex

See it in action: [book-info-website.herokuapp.com](http://book-info-website.herokuapp.com)

## Getting started

First ensure vagrant and virtualbox are installed.

You'll need the hosts updater plugin.

```
vagrant plugin install vagrant-hostsupdater
```

### Start the VM
```
vagrant up
vagrant ssh
```
### Install the dependencies.

Inside the VM
```
cd /vagrant
npm install
```
Bower is automatically installed and ran by npm.

### Run express
```
grunt
```
Your service will be running at [book-info-website.herokuapp.com:3000](http://book-info-website.herokuapp.com:3000)
