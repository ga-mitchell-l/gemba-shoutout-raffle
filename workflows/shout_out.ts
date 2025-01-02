import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";

export const ShoutOutWorkflow = DefineWorkflow({
  callback_id: "shout_out",
  title: "Shout Out",
  description: " ",
  input_parameters: {
    properties: {
      channel_id: {
        type: Schema.slack.types.channel_id,
      },
    },
    required: ["channel_id"],
  },
});

ShoutOutWorkflow.addStep(Schema.slack.functions.SendEphemeralMessage, {
  channel_id: ShoutOutWorkflow.inputs.channel_id,
  user_id: "U05KGP8DYV8",
  message: "lizzy test! :meow_party:",
});
