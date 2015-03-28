# pm2-build

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

In order to start and stop all of them at the same time it would be nice to have a **merged processes.json** of all these .json files.

After the build the folder structure will look like

```
/var/www
|__ app1
|____ processes.json
|__ app2
|____ processes.json
|__ ...
|__ processes.json
```

And you could start all the processes from the _/var/www_ folder with a simple

```
pm2 start processes.json
```

## Installation

```
npm install pm2-build
```

## Usage

```
pm2build ./test
```

## To-do

* Handle errors like a grown-up
