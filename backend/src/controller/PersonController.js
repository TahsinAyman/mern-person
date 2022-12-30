const express = require("express");
const Message = require("../model/Message");
const Person = require("../model/Person");
const router = express.Router();

router.post("/add", (request, response) => {
  const data = new Person({
    name: request.body.name,
    age: request.body.age,
  });
  data
    .save()
    .then(() => {
      response
        .status(202)
        .send(new Message("Successfully Added Data", true, 200));
    })
    .catch(() => {
      response
        .status(400)
        .send(new Message("The Data Could not be Added", false, 400));
    });
});

router.get("/get", (_request, response) => {
  Person.find()
    .then((persons) => {
      response.status(200).json(persons);
    })
    .catch(() => {
      response.json(400).json(new Message("Something Went Wrong", false, 400));
    });
});

router.get("/get/page", (request, resposne) => {
  const limit = request.query.items < 0 ? 2 : request.query.items;
  const skip =
    (request.query.page - 1 < 0 ? 0 : request.query.page - 1) * limit;
  Person.find()
    .limit(limit)
    .skip(skip)
    .then((persons) => {
      resposne.status(200).json(persons);
    })
    .catch(() => {
      resposne.status(200).json([]);
    });
});

router.get("/get/:id", (request, response) => {
  const id = request.params.id;
  Person.findById(id)
    .then((person) => {
      response.status(200).json(person);
    })
    .catch(() => {
      response.status(200).json({});
    });
});

router.delete("/delete/:id", (request, response) => {
  const id = request.params.id;
  Person.findByIdAndDelete(id)
    .then(() => {
      response
        .status(200)
        .json(new Message("Successfully Deleted Data", true, 200));
    })
    .catch(() => {
      response
        .status(400)
        .json(new Message("The Data Could not be deleted", false, 400));
    });
});

router.put("/update/:id", (request, response) => {
  const id = request.params.id;
  const data = request.body;
  Person.findByIdAndUpdate(id, data, { new: true })
    .then(() => {
      response
        .status(200)
        .json(new Message("Successfully Updated Data", true, 200));
    })
    .catch((error) => {
      console.log(error);
      response
        .status(400)
        .json(new Message("The Data Could not be Updated", false, 400));
    });
});

module.exports = router;
