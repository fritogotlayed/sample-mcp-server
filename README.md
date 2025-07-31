# Sample MCP Server

A sample implementation of a Machine Conversation Protocol (MCP) server with HTTP support. This server provides a simple
phonebook API that can be accessed via HTTP.

## Features

- MCP server implementation following the JSON-RPC 2.0 protocol
- HTTP interface for API access
- Simple phonebook API with CRUD operations
- Tool-based architecture for extensibility

## Installation

1. Make sure you have [Deno](https://deno.land/) installed
2. Clone this repository
3. Run the server using one of the provided tasks

```bash
# Install Deno (if not already installed)
curl -fsSL https://deno.land/x/install/install.sh | sh

# Clone the repository (example)
git clone https://github.com/yourusername/sample-mcp-server.git
cd sample-mcp-server

# Run the server
deno task start
```

## Usage

### Server Mode

The server runs in HTTP mode, listening for HTTP requests on a specified port.

### Starting the Server

You can start the server using the provided task in `deno.json`:

```bash
# Start the server
deno task start
```

Or you can run the main.ts file directly with command-line arguments:

```bash
# Start the server
deno run --allow-read --allow-write --allow-net main.ts

# Specify a custom port (default is 8000)
deno run --allow-read --allow-write --allow-net main.ts --port=3000
```

### Development

For development with file watching:

```bash
deno task dev
```

### Testing

Run the tests:

```bash
deno task test
```

Test the HTTP server specifically:

```bash
# Start the server in HTTP mode
deno task start:http

# In another terminal, run the HTTP test script
deno run --allow-net test-http-server.ts
```

## API

The server implements the Machine Conversation Protocol (MCP) using JSON-RPC 2.0. It supports the following methods:

### Core Methods

- `initialize`: Initialize the MCP session
- `tools/list`: List available tools
- `tools/call`: Call a specific tool

### Available Tools

- `list_persons`: List all persons in the phone book
- `get_person`: Get a specific person by ID
- `add_person`: Add a new person to the phone book
- `update_person`: Update an existing person
- `delete_person`: Delete a person from the phone book
- `search_persons`: Search persons by name, email, or phone

## HTTP API Examples

### Initialize

```bash
curl -X POST http://localhost:8000 \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "initialize"
  }'
```

### List Tools

```bash
curl -X POST http://localhost:8000 \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": 2,
    "method": "tools/list"
  }'
```

### Call a Tool (Add Person)

```bash
curl -X POST http://localhost:8000 \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": 3,
    "method": "tools/call",
    "params": {
      "name": "add_person",
      "arguments": {
        "name": "John Doe",
        "email": "john@example.com",
        "phone": "123-456-7890"
      }
    }
  }'
```

## Project Structure

- `main.ts`: Main entry point
- `deno.json`: Project configuration
- `database.json`: A sample database file implemented as JSON
- `src/models/types.ts`: Type definitions for the domain model
- `src/services/database.service.ts`: Database service
- `src/services/tools.service.ts`: Tools service
- `src/tools/`: Tool implementations

## License

[MIT License](LICENSE)
