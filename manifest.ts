import { Manifest } from "deno-slack-sdk/mod.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/automation/manifest
 */
export default Manifest({
  name: "gemba-shoutout-raffle",
  description: "Workflow to keep track of shoutouts and choose a monthly raffle winner",
  icon: "assets/app_icon.png",
  functions: [],
  workflows: [],
  outgoingDomains: [],
  datastores: [ShoutOutDataStore],
  botScopes: [
    "chat:write",
    "chat:write.public",
    "datastore:read",
    "datastore:write",
    "channels:read",
    "triggers:write",
    "triggers:read",
  ],
});
