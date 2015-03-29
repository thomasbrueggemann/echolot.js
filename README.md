# echolot.js

[![Build Status](https://travis-ci.org/tomaszbrue/echolot.js.svg?branch=master)](https://travis-ci.org/tomaszbrue/echolot.js)

## Motivation

Imagine you have a nodejs folder situation on your server like this

```
/var/www
|__ app1
|____ processes.json
|__ app2
|____ processes.json
|__ ...
```

Each of these _processes.json_ is an instance of a [PM2 json application declaration](https://github.com/Unitech/PM2/blob/master/ADVANCED_README.md#json-app-declaration) that hold the PM2 decralations for the app of its folder.

In order to start and stop all of them at the same time it would be nice to have a **merged.json** of all these .json files.

After the build the folder structure will look like

```
/var/www
|__ app1
|____ processes.json
|__ app2
|____ processes.json
|__ ...
|__ merged.json
```

And you could start all the processes from the _/var/www_ folder with a simple

```
pm2 start merged.json
```

## Installation

```
npm install echolot -g
```

## Usage

```
echolot ./test
```

## To-do

* Handle errors like a grown-up
