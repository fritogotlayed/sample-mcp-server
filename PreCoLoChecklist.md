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
- [ ] Install one or more Ollama models that support **tools**
  - [Ollama Search page](https://ollama.com/search?c=tools) can be used to find appropriate models
  - In terminal, use `ollama pull <name>:<label>`. Example: `ollama pull llama3.2:1b`
    - `llama3.2:latest` and/or `gpt-oss:latest` are good choices
    - **NOTE**: If you have a lower amount of system ram, i.e. 16GB or less, you likely want to use a smaller model like
      `llama3.2:1b`
- [ ] Install [Deno](https://deno.com/) so it can be used from the CLI
  - `deno --version` should return the deno version, typescript version, and v8 version
- [ ] Download or `git clone` this repository

# Other Useful Tools

- A text editor or IDE that supports typescript
  - [VS Code](https://code.visualstudio.com/) is a popular free choice
  - [Windsurf](https://windsurf.com/download) is another popular AI-enabled free choice

## Troubleshooting

- I don't remember the credentials I set up for n8n!
  - If using npx you can reset your n8n install by removing the `~/.n8n` directory and re-running `npx n8n`
  - if using docker, you can remove the container and volume by running `docker-compose down -v` then
    `docker-compose up -d`
