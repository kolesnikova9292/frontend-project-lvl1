# My Acuvue Symfony Application

###  Installation

Prerequisites:
* [Docker](https://www.docker.com/)
* [Composer](https://getcomposer.org/)


First, install the project dependencies by running `composer install`. Then to install the development environment, make sure `docker <= 1.13` and `docker-compose <=1.12` are installed. Then you can run `docker-compose up -d` and access the site at `localhost:8080`.
If port 8080 is not available on your computer, you can adjust this port by modifying `services.webserver.ports` in `docker-compose.yml`.

Now, we need to initialize environment and phpunit files in order to run and test the project locally. To do that, create a `.env` and `phpunit.xml` and copy `.env.dist` and `phpunit.xml.dist` respectively into it and adjust parameters according to your environment.

Lastly, you'll need to create the database. To create the db you can run `php bin/console doctrine:schema:create`. Next you will add the migrations so that the current migrations and your database is in sync. To do this run the command `php bin/console doctrine:migrations:version --add --all`

### Documentation

Swagger Docs are located in the `docs` folder and can be accessed from `localhost:8080/docs`

At this stage, we started to maintain API documentation on newly created/refactored services in `docs/apis`. We are using [OpenAPI 3.0](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md) format for the documentation. There should be described all endpoints with their params, errors and responses. For the reading OpenAPI files you can use online editors, e.g. [https://editor.swagger.io](https://editor.swagger.io/)
Also we have [Postman](https://www.postman.com/) collections for the helping to test our endpoints.
In the case when was added a new endpoint to service, you also need update OpenAPI and postman collection files.
In the case when was added a new error, it also should be updated in OpenAPI file in the section `errors`.
When you add a new parameter to the controller, it should also be described in the OpenAPI file in the section `parameters` and added to the Postman collection.

### Testing
This project uses PHPUnit 6.5. To run the unit tests run `php bin/phpunit` or `./vendor/bin/simple-phpunit` from the root directory of the project

### Migrations

Sometimes the database schema changes and in order to safely update your database, migrations must be performed. [More Info](https://symfony.com/doc/master/bundles/DoctrineMigrationsBundle/index.html)

* Check if your database is up to date: `php bin/console doctrine:migrations:status`
* To run migrations: `php bin/console doctrine:migrations:migrate`
* To automatically generate a migration: `php bin/console doctrine:migrations:diff`

### Custom Commands

There are custom commands added to the project to assist users. The custom commands can be run as `php bin/console <command> <attributes>`. The custom commands are as follows:

* `user:unlock <username>` - Use this command to unlock a locked user. To do that, simply run the command and replace `<username>` with the locked account's username.
* `app:import-products path=<path>` - Use this command to import products from a local excel file. Replace `<path>` with a file location relative to the `src` folder. Ex `path=Assets/product-export.xlsx`
* `app:import-discounts path=<path>` - Use this command to import discounts from a local excel file. Replace `<path>` with a file location relative to the `src` folder. Ex `path=Assets/discounts-final.xlsx`
* `app:import-bonus-points path=<path>` - Use this command to import bonus points from a local excel file. Replace `<path>` with a file location relative to the `src` folder. Ex `path=bonus-points.xlsx`
* `users:inactive` - Use this command to check and  update the status of all the consumers to inactive if needed. When the command is run, it checks when the last time the consumer had either done a fitting or purchase and if its more than 180 days, update the status to inactive.
* `consumer:remove-expired-temps` - Use this command to remove all temporary consumer records which have expired.
* `user:new-anonymous-user` - Use this command to create or add an new anonymous user record.

### Cron Jobs

This application requires many custom commands to be run as cron jobs. We are using `JMSJobQueueBundle` to create and maintain these cron jobs through the code rather than on the server.
These jobs can be viewed at `{base-url}/jobs` where you can view the logs and run times of each job. These are the following cron jobs set up:

| Command|Frequency|
| :--- | :--- |
| `consumer:remove-expired-temps`| Once a day at 1am UTC       |
| `app:unconfirmed-appointment-notification`   | Once a day at 2am UTC        | 
| `app:new-order-notification`   | Once a day at 2:30am UTC        | 
| `app:send-lenses-reminder-notification`   | Once a day at 3.30am UTC       | 
| `app:deactivate-manually-created-consumer-lenses-after-6-months`   | Once a day at 4.00am UTC       |
| `app:notify-about-expiration-period-left-1-month-for-manually-lenses`   | Once a day at 4.15am UTC       |
| `app:recalculate-weekly-lenses-reminder-notification`   | Once a day at 4.30am UTC        | 
| `app:recalculate-daily-lenses-reminder-notification`   | Once a day at 4.45am UTC        |
| `app:create-consumer-lenses-from-fitting`   | Once a day at 5.00am UTC        |


Each Cron Job can be triggered through the endpoint:
`/api/execute/command/{CommandName}`

##### Docker compose cheatsheet
Run these from the same directory as the `docker-compose.yml` file

* Start containers in the background: `docker-compose up -d`
* Start containers on the foreground: `docker-compose up`. You will see a stream of logs for every container running.
* Stop containers: `docker-compose stop`
* Kill containers: `docker-compose kill`
* View container logs: `docker-compose logs`
* Execute command inside of container: `docker-compose exec SERVICE_NAME COMMAND` where `COMMAND` is whatever you want to run. Examples:
    - Shell into the PHP container, `docker-compose exec php-fpm bash`
    - Run symfony console, `docker-compose exec php-fpm bin/console`
    - Open a mysql shell, `docker-compose exec mysql mysql -uroot -pCHOSEN_ROOT_PASSWORD`

### Authors

* [Chris Boffa](mailto:cboffa@its.jnj.com)
* Urmil Shah
