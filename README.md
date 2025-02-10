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

1. From your project root directory access the frontend directory
    - `cd frontend/`

1. Install node packages for react app
    - `npm install`

1. Build react production app
    - `npm run build`

1. Run the app with the following command in the terminal:
    - change directory to backend
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

## Deploy on Azure
### **1. Set Up Your Repository**
- Ensure both your Django backend and React frontend are in the same repository.
- Structure your repository with separate directories for Django and React.

```
Contacts-App/
├── backend/
│   ├── manage.py
│   ├── requirements.txt
│   └── backend/
│   └── frontend/
├── frontend/
│   ├── package.json
│   ├── src/
│   └── public/
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml
```

### **2. Create Azure Resources**

#### **App Service for Django**
- In the Azure portal, create a new App Service for the Django backend.
- Select the runtime stack (Python).

#### **Static Web App for React**
- Create a new Static Web App for the React frontend.

### **3. Configure Django App Service**

#### **Environment Variables**
- Go to your Django App Service in the Azure portal.
- Under "Settings", click on "Configuration" and add environment variables (e.g., `DJANGO_SECRET_KEY`, database URL).

#### **Deployment**
- Set up deployment from your GitHub repository.
- Ensure your Django settings are configured for production (e.g., `DEBUG=False`, allowed hosts).

### **4. Configure Static Web App for React**

#### **GitHub Actions Workflow**
- In the `.github/workflows/` directory, create a `azure-static-web-apps.yml` file to automate the deployment of your React app.


```yaml
name: Azure Static Web Apps CI/CD

on:
  push:
    branches:
      - main  # Change to your default branch

jobs:
  build_and_deploy_job:
    runs-on: ubuntu-latest
    name: Build and Deploy Job
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v1
        with:
          node-version: '14'  # Specify your Node.js version

      - name: Install dependencies
        run: npm install
        working-directory: ./frontend

      - name: Build app
        run: npm run build
        working-directory: ./frontend

      - name: Deploy to Azure Static Web Apps
        uses: Azure/static-web-apps-deploy@v0.0.1-preview
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: "./frontend"
          output_location: "./frontend/build"
```

### **5. Configure CORS Settings**
- In your Django settings, configure CORS to allow requests from your React app domain.

### **6. Verify and Test**
- Once the deployments are complete, verify both your Django backend and React frontend are working correctly.


## Deploy on AWS
### **1. Set Up Your Repository**
- Ensure both your Django backend and React frontend are in the same repository.
- Structure your repository with separate directories for Django and React.

```plaintext
Contacts-App/
├── backend/
│   ├── manage.py
│   ├── requirements.txt
│   └── backend/
│   └── frontend/
├── frontend/
│   ├── package.json
│   ├── src/
│   └── public/
├── .github/
│   └── workflows/
│       └── aws-deploy.yml
```

### **2. Create AWS Resources**

#### **Django Backend**
- **EC2 Instance**: Launch an EC2 instance with Ubuntu. Configure security groups to allow SSH, HTTP, and HTTPS traffic.
- **Database**: Set up a PostgreSQL database on the EC2 instance.
- **S3 Bucket**: Create an S3 bucket to store static and media files.

### **3. Configure Django App**

#### **Environment Variables**
- Set up environment variables (e.g., `DJANGO_SECRET_KEY`, database URL) on your EC2 instance.

#### **Install Dependencies**
- SSH into your EC2 instance and install the required dependencies.

```bash
sudo apt update
sudo apt install python3-pip python3-venv nginx
cd /path/to/backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

#### **Collect Static Files**
- Configure your Django settings for production, including static file settings.

```python
# settings.py
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
```

- Collect static files and upload them to the S3 bucket.

```bash
python manage.py collectstatic
```

#### **Deploy Django**
- Configure Nginx and Gunicorn to serve your Django app.

### **4. Configure React Frontend**

#### **Build and Deploy**
- Build your React app using `npm run build`.
- Upload the build files to your S3 bucket and set up CloudFront for distribution.

```bash
cd /path/to/frontend
npm install
npm run build
aws s3 sync build/ s3://<your-s3-bucket-name> --delete
```

### **5. GitHub Actions Workflow**

#### **Create Workflow File**
- In the `.github/workflows/` directory, create a `aws-deploy.yml` file to automate the deployment process.

```yaml
name: AWS Deploy

on:
  push:
    branches:
      - main  # Change to your default branch

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Python
        uses: actions/setup-python@v2
        with:
          python-version: '3.x'

      - name: Install dependencies
        run: |
          python3 -m venv venv
          source venv/bin/activate
          pip install -r backend/requirements.txt
        working-directory: ./backend

      - name: Collect static files
        run: |
          source venv/bin/activate
          python manage.py collectstatic --noinput
        working-directory: ./backend

      - name: Sync static files to S3
        run: |
          aws s3 sync backend/static/ s3://<your-s3-bucket-name>/static --delete
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}

      - name: Deploy Django to EC2
        run: |
          ssh -i <your-ec2-key-pair.pem> ubuntu@<your-ec2-instance-public-ip> 'cd /path/to/backend && git pull && source venv/bin/activate && pip install -r requirements.txt && sudo systemctl restart gunicorn'
        env:
          EC2_KEY_PAIR: ${{ secrets.EC2_KEY_PAIR }}
          EC2_INSTANCE_IP: ${{ secrets.EC2_INSTANCE_IP }}

      - name: Set up Node.js
        uses: actions/setup-node@v1
        with:
          node-version: '14'  # Specify your Node.js version

      - name: Build React app
        run: |
          npm install
          npm run build
        working-directory: ./frontend

      - name: Sync React build to S3
        run: |
          aws s3 sync frontend/build/ s3://<your-s3-bucket-name> --delete
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

### **6. Configure CORS Settings**
- Set up CORS in your Django project to

