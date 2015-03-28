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

And each of these _processes.json_ is an instance of a [PM2 json application declaration](https://github.com/Unitech/PM2/blob/master/ADVANCED_README.md#json-app-declaration) that hold the PM2 decralations for the app in which folder it is.

In order to start and stop all of them at the sime time it would be nice to have a merged processes.json of all these .json files.

## Usage

```
pm2build ./test
```
