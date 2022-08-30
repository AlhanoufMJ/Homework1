var express = require("express");
var app = express();
var path = require("path");
var PORT = 4020;

// Without middleware
app.get("/", function (req, res) {
  var options = {
    root: path.join(__dirname),
  };

  var fileName = "page1.html";
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});

app.listen(PORT, function () {
  //if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});

app.get("/user", function (req, res) {
  var options = {
    root: path.join(__dirname),
  };

  var fileName = "user.html";
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});
app.get("/cat", function (req, res) {
  var options = {
    root: path.join(__dirname),
  };

  var fileName = "cat.html";
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});
