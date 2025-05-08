
# Kafka Tutorial

This tutorial demonstrates how to set up and use Apache Kafka with Node.js. It is designed for developers with an intermediate level of experience in Node.js and familiarity with distributed systems design.

## Prerequisite Knowledge

- Intermediate knowledge of Node.js
- Experience designing distributed systems

## Tools Required

- Node.js
- Docker
- VSCode
- [Bun](https://bun.sh/) (used to run scripts)

## Getting Started

### Step 1: Start Zookeeper

Start the Zookeeper container and expose port `2181`:

```bash
docker run -p 2181:2181 zookeeper
```

### Step 2: Start Kafka

Run the Kafka container, expose port `9092`, and set the required environment variables:

```bash
docker run -p 9092:9092 \
  -e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
  -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
  -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
  confluentinc/cp-kafka
```

Replace `<PRIVATE_IP>` with your machine's private IP address (e.g., `192.168.x.x`).

## Running Locally

### Run Multiple Consumers

You can run multiple consumers by specifying a group name:

```bash
bun run consumer.js <GROUP_NAME>
```

### Create a Producer

To run the Kafka producer:

```bash
bun run producer.js
```

#### Example Input:
```txt
> tony south
> tony north
```

Each input line will be sent as a Kafka message.

---
