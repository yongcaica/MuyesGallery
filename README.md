# MuyesGallery

1，每个app，都要有一个routes的目录，把所有的routes放到这个目录下，如何选取route的对象，比如campground、comment、user这些，需要研究；
2，每个app，都要有一个views的目录，routes定义好后，res.render的页面，就放到views目录中。views目录，里面又可以有子目录
3，




Rest is a mapping between HTTP and CRUD(create, read, update, destroy).
RESTful Routes:
|   NAME   |     PATH       |   HTTP VERB     |            PURPOSE                   |
|----------|----------------|-----------------|--------------------------------------| 
| Index    | /blog          |      GET        | Displays all blog post               |
| New      | /blog/new      |      GET        | Shows new form for new blog entry    |
| Create   | /blog          |      POST       | Creates a new blog post              |
| Show     | /blog/:id      |      GET        | Shows one specified blog post        |
| Edit     | /blog/:id/edit |      GET        | Shows edit form for one blog post    |
| Update   | /blog/:id      |      PUT        | Updates a particular blog post       |
| Destroy  | /blog/:id      |      DELETE     | Deletes a particular blog post       |


Index Page (in the main directory)
$ npm init ------- initiate npm(node.js packages manager), at entry point, change index.js to app.js
$ touch app.js
$ npm install express --save
$ npm install mongoose --save
$ npm install passport passport-local --save      -----------需要鉴权时
$ npm install passport passport-local-mongoose --save      ---------需要鉴权时
$ npm install body-parser express-session --save       ----------需要鉴权时
$ npm install express mongoose body-parser --save       --------body-parser is used to parse request body
$ npm install ejs --save
$ npm install method-override --save           ------由于在FORM中我们只能发送GET或者POST请求，限制了我们使用其他谓词比如PUT,DELETE等，因此我们需要同过method-override将GET或者POST改成其他谓词PUT,DELETE等。配合app.use(methodOverride("_method"))一起使用。

$ npm install express-sanitizer --save
$ npm install connect-flash --save
$ mkdir views
$ mkdir models
$ touch app.js
var bodyParser                = require("body-parser"),
methodOverride               = require("method-override"),
expressSanitizer              =  require("express-sanitizer"),
mongoose                        =  require("mongoose"),
express                            =  require("express"),
passport                           =  require("passport"),
LocalStrategy                    =  require("passport-local"),
passportLocalMongoose  =  require("passport-local-mongoose"),
app                                    = express();
-----define mongodb
mongoose.connect(("mongodb://localhost/restful_blog_app");    -----------app name is restful_blog_app
app.set("view engine", "ejs");         --------in order to use ejs
app.use(express.static("public"));     ---------serve our custom stylesheet
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());   ----------should be after bodyParser
app.use(methodOverride("_method"));
app.use(require("express-session")({         -------只要用到passport就要用这行
    secret: "I love Muye!",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());    -------只要用到passport就要用这行
app.use(passport.session());      -------只要用到passport就要用这行
passport.serializeUser(User.serializeUser());     -------只要用到passport就要用这行
passport.deserializeUser(User.deserializeUser());       -------只要用到passport就要用这行
app.listen(process.env.PORT, process.env.IP, function() {  console.log("Server Started......")});


git status
git init
git add app.js
git add package.json
git add views/
git commit -m "initial commit"
heroku create
git remote -v
git push heroku master

git add package.json (修改后，重新提交）
git commit -m "add start script"
git push heroku master

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js"
  },

mongo
show dbs
use muyesgallery
show collections
db.artworks.find()
db.artworks.remove({"name": "Cotton Candy"})
db.artworks.remove({"name": "Cotton Candy"}, 1)  --------如果只想删掉满足要求的第一条数据