import { Trigger } from "deno-slack-api/types.ts";
import { ShoutOutWorkflow } from "../workflows/shout_out.ts";
import { TriggerTypes } from "deno-slack-api/mod.ts";

const channel_id = "C085UKLPJLW";

const shoutOutTrigger: Trigger<typeof ShoutOutWorkflow.definition> = {
  type: TriggerTypes.Event,
  name: "Shout Out Trigger",
  description: "Triggers when a message is posted in the channel",
  workflow: "#/workflows/shout_out",
  event: {
    event_type: "slack#/events/message_posted",
    channel_ids: [channel_id],
    filter: {
      version: 1,
      root: {
        statement: "1 == 1",
      },
    },
  },
  inputs: {
    channel_id: {
      value: "{{data.channel_id}}",
    },
  },
};

export default shoutOutTrigger;
