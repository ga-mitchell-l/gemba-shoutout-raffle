import { Manifest } from "deno-slack-sdk/mod.ts";
import { ShoutOutWorkflow } from "./workflows/shout_out.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/automation/manifest
 */
export default Manifest({
  name: "gemba-shoutout-raffle",
  description:
    "App to keep track of shoutouts and choose a monthly raffle winner",
  icon: "assets/app_icon.png",
  functions: [],
  workflows: [ShoutOutWorkflow],
  botScopes: [
    "commands",
    "channels:join",
    "channels:manage",
    "channels:history",
    "channels:read",
    "groups:write",
    "im:write",
    "im:history",
    "mpim:write",
    "chat:write",
    "chat:write.public",
    "triggers:write",
    "triggers:read",
  ],
  events: [],
});
// features I would like to do
// store a list of people who:
// - have shoutouted
// - been the subject of a shoutout
// monthly message sent to channel:
// - number of shoutouts
// - number of people giving shoutouts
// - random raffle prize winner
// nice to have:
// - yearly round up of the number of times you have been shoutouted
// - csv download for PNC for reviews
