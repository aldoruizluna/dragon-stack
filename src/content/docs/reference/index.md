# API Reference

This section contains the technical reference documentation for the DRAGON Stack.

## Core APIs

### Drive Core API
- **Endpoint**: `/api/v1/drive-core`
- **Description**: Manage physical and network infrastructure
- **Resources**:
  - `GET /nodes` - List all nodes
  - `GET /nodes/{id}` - Get node details
  - `POST /nodes` - Create a new node
  - `PUT /nodes/{id}` - Update a node
  - `DELETE /nodes/{id}` - Delete a node

### Reactor API
- **Endpoint**: `/api/v1/reactor`
- **Description**: Kubernetes and container orchestration
- **Resources**:
  - `GET /clusters` - List all clusters
  - `GET /clusters/{id}` - Get cluster details
  - `POST /clusters` - Create a new cluster

### Ark API
- **Endpoint**: `/api/v1/ark`
- **Description**: Data and event management
- **Resources**:
  - `GET /databases` - List all databases
  - `POST /databases` - Create a new database
  - `GET /events` - List recent events
  - `POST /events` - Publish a new event

## Authentication

All API endpoints require authentication. Include your API key in the `Authorization` header:

```
Authorization: Bearer YOUR_API_KEY
```

## Rate Limiting

- **Rate Limit**: 1000 requests per hour per API key
- **Response Headers**:
  - `X-RateLimit-Limit`: Your rate limit
  - `X-RateLimit-Remaining`: Remaining requests
  - `X-RateLimit-Reset`: Time when the limit resets

## Error Handling

Errors are returned as JSON with the following structure:

```json
{
  "error": {
    "code": "error_code",
    "message": "Human-readable error message",
    "details": {
      "field": "Additional error details"
    }
  }
}
```

### Common Error Codes

| Code | Description |
|------|-------------|
| 400 | Bad Request - Invalid request format |
| 401 | Unauthorized - Invalid or missing API key |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource not found |
| 429 | Too Many Requests - Rate limit exceeded |
| 500 | Internal Server Error - Something went wrong |

## Versioning

API versioning is done through the URL path. The current version is `v1`.

Example: `https://api.dragonstack.com/v1/endpoint`

## Changelog

### v1.0.0 (2025-05-10)
- Initial release of the DRAGON Stack API
