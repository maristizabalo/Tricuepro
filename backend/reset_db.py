import os
import shutil

# Define the apps
apps = ['account', 'AuthTable', 'Billiard', 'Table']

# Function to delete migrations
def delete_migrations(app_name):
    migrations_path = os.path.join('apps', app_name, 'migrations')
    if os.path.exists(migrations_path):
        shutil.rmtree(migrations_path)
        print(f"Deleted migrations for {app_name}")

# Function to run a command
def run_command(command):
    os.system(command)

# Delete migrations for each app
for app in apps:
    delete_migrations(app)

# Run makemigrations for each app
for app in apps:
    run_command(f'python manage.py makemigrations {app}')

# Run migrate
run_command('python manage.py migrate')

# Load fixtures
run_command('python manage.py loaddata fixtures/user1.json')
run_command('python manage.py loaddata fixtures/billiard1.json')
run_command('python manage.py loaddata fixtures/table1.json')