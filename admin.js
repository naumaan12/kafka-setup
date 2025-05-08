const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting...");
  admin.connect();
  console.log("Adming Connection Success...");

  console.log("Creating Topic [rider-updates]");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic Created Success [rider-updates]");

  console.log("Disconnecting Admin..");
  await admin.disconnect();
}

init();





// Prerequisite Knowledge
//     Node.JS Intermediate level
//     Experience with designing distributed systems
// Tools: Node.js, Docker, VsCode

// To run:
//     Start Zookeper Container and expose PORT 2181.
//         docker run -p 2181:2181 zookeeper
//     Start Kafka Container, expose PORT 9092 and setup ENV variables.
//         docker run -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1  confluentinc/cp-kafka

// Running Locally
//     Run Multiple Consumers
//         bun run consumer.js <GROUP_NAME>
//     Create Producer
//         bun run producer.js
        
//         > tony south
//         > tony north

