# Contacts-App


## Local deployment

*Note:*
  - This project requires to install all the requirements:
  - Open the terminal window and type:
  - `pip3 install -r requirements.txt`

Create a local copy of the GitHub repository by following one of the two processes below:

- Download ZIP file:
  1. Go to the [GitHub Repo page](https://github.com/Hussain-Naik/Contacts-App).
  1. Click the Code button and download the ZIP file containing the project.
  1. Extract the ZIP file to a location on your PC.

- Clone the repository:
  1. Open a folder on your computer with the terminal.
  1. Run the following command
  - `git clone https://github.com/Hussain-Naik/Contacts-App`

- Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

  [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://github.com/Hussain-Naik/Contacts-App)

---

1. Setup virtual environment for dependencies in project root directory:
    - `python3 -m venv ./venv`

1. Activate virtual environment:
    - `source .venv/bin/activate`

1. Install the dependencies:

    - Open the terminal window and type:
    - `pip3 install -r requirements.txt`

    *Advise setting up a virtual environment to install all app dependencies.*


1. Create a `.gitignore` file in the root directory of the project where you should add env.py, .venv and __pycache__ files to prevent the privacy of your secret data.

1. Create a `.env` file in the backend folder. This will contain the following environment variables:

    ```python
    import os

      os.environ['SECRET_KEY'] = 'Add a secret key'
      os.environ['DATABASE_URL'] = 'will be used to connect to the database'
      os.environ['DEV'] = '1'
    ```

    *During the development stage DEV is set to 1, but it is vital to remove or comment it.*

1. Run the following commands in a terminal to make migrations: 
    - `python3 manage.py makemigrations`
    - `python3 manage.py migrate`
1. Create a superuser to get access to the admin environment.
    - `python3 manage.py createsuperuser`
    - Enter the required information (your username, email and password).
1. Run the app with the following command in the terminal:
    - `python3 manage.py runserver`
1. Open the link provided in a browser to see the app.

1. If you need to access the admin page:
    - Add /admin/ to the link provided.
    - Enter your username and password (for the superuser that you have created before).
    - You will be redirected to the admin page.


## Render Deployment

### Create Database on Render

1. Create a new Render account if you don't already have one here [Render](https://render.com/).

2. Create a new instance of the PostgreSQL database.

3. Select a name for your database and select the free plan.

4. Click "Select Region"

5. Select a region close to you.

6. Click "Create Instance"

7. Click on the name of your database to open the dashboard.

8. Copy the database URL from Connect > External and paste as a string for the os.environ['DATABASE_URL'] variable.

### Create a new app on Render


1. Create a new Render account if you don't already have one here [Render](https://render.com/).

2. Create a new application on the following page here [New Render App](https://dashboard.render.com/), choose **Web Service**:

3. Select Build and deploy from a Git repository

4. Search for the repository you created and click "Connect."

5. Create name for the application

6. Select the region where you want to deploy the application.

7. Select branch to deploy.

8. Select Python 3 as runtime option.

9. Render build command: `./build.sh`

10. Render start command: `./start.sh` 

11. Select Free plan.

12. Add the following environment variables:

    - Key: DATABASE_URL Value: *************
    - Key: SECRET_KEY Value: *************

    *DATABASE_URL value is takes from render dashboard, SECRET_KEY value is takes from your local env.py file, CLOUDINARY_URL value is taken from cloudinary dashboard.*

13. Create a superuser for your database from your local deployment.

    ```bash
        python manage.py createsuperuser
    ```

14. Commit and push the changes to GitHub.

15. Go back to Render and click "Create Web Service."

16. Wait for the completion of the deployment.

17. Start using the application
