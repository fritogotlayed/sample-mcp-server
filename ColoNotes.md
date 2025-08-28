# Colo Notes

## Running all the services

- Use **terminal** to run the various tools used for this workshop
  - Terminal can be found using the **launchpad**
  - You can use the `cd`, change directory, command to navigate to the directory you want to work in. This is the
    directory where you downloaded or cloned the repo.
- If you run `ls`, list, you should see a `database.json`, `start-inspector.sh`, `start-mcp.sh`, and `start-n8n.sh`
  files. This means you're in the right spot!
- With terminal open, run the `./start-mcp.sh` command.
  - You should see a message that includes `starting HTTP server on port 8000`
- With the terminal window in focus, in the top bar you should see a "Shell" option. From that click the "New Tab"
  option.
  - In the new tab, run the `./start-n8n.sh` command.
- With the terminal window in focus, in the top bar you should see a "Shell" option. From that click the "New Tab"
  option.
  - In the new tab, run the `./start-inspector.sh` command.

## Turn all this stuff off

- In each tab of the terminal window, press `ctrl+c` to stop the service.
  - It may take a few seconds for the service to stop and the terminal prompt to return.
- (Optional) type `exit` and press enter to exit the shell on each prompt
- Close the terminal window.
