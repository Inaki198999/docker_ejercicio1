db = db.getSiblingDB("TopicstoreDb");

db.Topics.insertMany([
  { "topicName": "Contenedores" },
  { "topicName": "Microservicios" },
  { "topicName": "DevOps" }
]);