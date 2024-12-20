// /datastores/messages.ts
import { DefineDatastore, Schema } from "deno-slack-sdk/mod.ts";

/**
 * Datastores are a Slack-hosted location to store
 * and retrieve data for your app.
 * https://api.slack.com/automation/datastores
 */
export const ShoutOutDataStore = DefineDatastore({
  name: "shout-outs",
  primary_key: "id",
  attributes: {
    id: {
      type: Schema.types.string,
    },
    user: {
      type: Schema.slack.types.user_id,
    },
    date: {
      type: Schema.types.message_ts,
    }
  },
});
