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
