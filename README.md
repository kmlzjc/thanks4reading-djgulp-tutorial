Code crated as a reference for my tutorial on [thanks4reading.com](http://thanks4reading.com/11/django-virtualenv-angularjs-gulp-browserify-part-1/)

### Installation

Django

```
virtualenv env
source env/bin/activate
pip install -r requirements.txt
```

Node modules

```
npm install
```

Run browserify to generate code
```
gulp browserify
```

Run gulp in watch mode, to observe code changes
```
gulp
```

Migrate database and run application
```
python manage.py migrate
python manage.py runserver
```