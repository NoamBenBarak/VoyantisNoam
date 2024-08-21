import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, ListGroup, Container, Row, Col, Alert } from 'react-bootstrap';
import './QueueManager.css'; 

function QueueManager() {
  const [queues, setQueues] = useState([]);
  const [selectedQueue, setSelectedQueue] = useState('');
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetchQueues();
  }, []);

  const fetchQueues = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/num_of_msgs');
      setQueues(response.data);
    } catch (error) {
      console.error('Error fetching queues:', error);
    }
  };

  const handleQueueSelect = (queueName) => {
    setSelectedQueue(queueName);
  };

  const fetchMessage = async () => {
    if (!selectedQueue) return;

    try {
      const response = await axios.get(`http://localhost:3001/api/${selectedQueue}?timeout=5000`);
      setMessage(response.data || 'No message available');
    } catch (error) {
      console.error('Error fetching message:', error);
      setMessage('Error fetching message');
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <h3>Queues</h3>
          <ListGroup>
            {queues.map((queue) => (
              <ListGroup.Item key={queue.name} className="d-flex justify-content-between align-items-center">
                {queue.name} - {queue.count} messages
                <Button className="custom-button" onClick={() => handleQueueSelect(queue.name)}>
                  Select
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={8}>
          {selectedQueue && (
            <div className="message-container">
              <h4>Selected Queue: {selectedQueue}</h4>
              <Button className="custom-button" onClick={fetchMessage}>
                Go
              </Button>
              {message && (
                <Alert variant="info" className="mt-3">
                  <pre>{JSON.stringify(message, null, 2)}</pre>
                </Alert>
              )}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default QueueManager;
