# Pre-Co-Location Checklist

- [ ] Can run `n8n` from the CLI
  - Option 1 (via `npx`): `npx n8n`
    - Use your favorite tool like nvm, asdf, etc. to install `node` / `npm`.
    - If you do not have `nvm` installed and have no preference you will likely need to install `xcode-select` on your
      mac.
      - From the terminal run `xcode-select --install` then in your settings -> General download and install
        xcode-select.
  - Option 2 (via `docker` / `docker-compose`)
    - If you _really_ don't want to use `npx`, you can use this
      [docker-based approach](https://github.com/fritogotlayed/n8n-playground)
    - All examples should use `host.docker.internal` instead of `localhost`
- [ ] Install [Ollama](https://ollama.com/download)
  - You may need to start Ollama for the below commands to work. You'll know it's running by seeing the llama icon in
    the tray
- [ ] Install one or more Ollama models that support **tools**
  - [Ollama Search page](https://ollama.com/search?c=tools) can be used to find appropriate models
  - In terminal, use `ollama pull <name>:<label>`. Example: `ollama pull gpt-oss:latest`
    - Choices for development machine (32+ GB of RAM)
      - `gpt-oss:latest` - Worked well in testing
      - `qwen3:latest` - Worked well in testing
      - `devstral:latest` - Worked well in testing
    - Choices for non-development machine (<= 32 GB of RAM)
      - **Note**: Many smaller models were problematic during testing; not all are listed here
      - `qwen3:4b` or `qwen:1.7b` - Worked well in testing
      - `smollm2:latest` - Okay choice, seems to hallucinate and not format well
    - Models to avoid for this test
      - `llama3.2` - Doesn't appear to support the MCP protocol from testing
      - `mistral` - Doesn't appear to support the MCP protocol from testing
- [ ] Install [Deno](https://deno.com/) so it can be used from the CLI
  - `deno --version` should return the deno version, typescript version, and v8 version
- [ ] Download or `git clone` this repository
  - **Note**: You do not need to have things configured to the point of being able to develop code at side. Simply
    installing `git` should suffice.
  - The `git clone https://github.com/fritogotlayed/sample-mcp-server.git` command will download the repository to your
    computer which includes the various branch references. Don't worry if you don't know what this means! We'll get to
    it during the workshop.

# Other Useful Tools

- A text editor or IDE that supports typescript
  - [VS Code](https://code.visualstudio.com/) is a popular free choice
  - [Windsurf](https://windsurf.com/download) is another popular AI-enabled free choice

## Troubleshooting

- I don't remember the credentials I set up for n8n!
  - If using npx you can reset your n8n install by removing the `~/.n8n` directory and re-running `npx n8n`
  - if using docker, you can remove the container and volume by running `docker-compose down -v` then
    `docker-compose up -d`
