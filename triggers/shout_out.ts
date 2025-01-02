import { Trigger } from "deno-slack-api/types.ts";
import { ShoutOutWorkflow } from "../workflows/shout_out.ts";
import {
  TriggerContextData,
  TriggerEventTypes,
  TriggerTypes,
} from "deno-slack-api/mod.ts";

const channel_id = "C085UKLPJLW";

const shoutOutTrigger: Trigger<typeof ShoutOutWorkflow.definition> = {
  type: TriggerTypes.Event,
  name: "shout out trigger",
  description: "todo",
  workflow: "#/workflows/shout_out",
  event: {
    event_type: TriggerEventTypes.MessagePosted,
    channel_ids: [channel_id],
    filter: {
      root: {
        operator: "AND",
        inputs: [{
          operator: "NOT",
          inputs: [{
            // Filter out posts by apps
            statement: "{{data.user_id}} == null",
          }],
        }],
      },
      version: 1,
    },
  },
  inputs: {
    channel_id: {
      value: TriggerContextData.Event.MessagePosted.channel_id,
    },
  },
};

export default shoutOutTrigger;
