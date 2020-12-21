## Local testing with DEV env variables.

For local builds, you must have a linux compatible system.  I use Visual Studio Code for Windows, and leverage the Windows Subsystem for Linux (WSL) - Windows Terminal and Ubuntu for building the code.  All commands in package.json are Linux based so this is required.

`ng serve` is good enough for `http://localhost:4200`, this is generally fastest.  You can also do full SSR build with `npm run build:ssr-dev` and then run `npm start` which will run node express server and host at `http://localhost:4000` 

## Local testing with PROD env variables (not recommended)

Run `npm run build:ssr` and then `npm start`.

## Code scaffolding

Run `ng g c component-name --module app --skipTests` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.  Note, with universal, you need to specify target app module `--module app` as shown in above example.

## Build for Deployment

For DEV deployments, once changes are pushed to 'develop' branch AWS Build Pipeline will automatically build and deploy to https://bobthorn.com.  This typically takes about 10 minutes.

The buildspec.yml specifies how this works and what files are copied to zip file for deployment.  Package directory structure laid out like so:


    .ebextensions/**/*
    .platform/**/*
    dist/**/*
    package.json

For https://saw.com production deployment, these are manual for now.  Manually build with `npm run build:ssr` and construct zip file so it internally it matches folder layout as shown above.  

Regarding AWS EB environment, this is designed to work with latest NodeJS environment (Node.js 12 running on 64 bit Amazon Linux 2/5.2.0).  Be sure to specify correct Node version in the engines element inside package.json.  It has to match the EB software environment we are running on, so for example - as of 8/10/2020 we are on 12, so it has to be something in 12 range (12.x).

Update - 09/26/2020 - added Elastic Beanstalk extensions (.ebextensions)  platform config to choose apache for reverse proxy.  Also added gzip configuration file that extends apache settings to enable gzip compression.

Finally, custom index.html is in place for prod versus non-prod.  See angular.json for configuration.  There are material differences between the two, mainly 'noindex' tag so the test site / bobthorn.com does not pickup search indexers by accident.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
