const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  logLevel: process.env.LOG_LEVEL || "info",
});

const MODAL_ID = "kudos-modal";

app.command("/kudos", async ({ ack, body, client, logger }) => {
  await ack();
  try {
    const result = await client.views.open({
      trigger_id: body.trigger_id,
      view: {
        type: "modal",
        callback_id: MODAL_ID,
        title: {
          type: "plain_text",
          text: ":mega: Kudos",
        },
        blocks: [
          {
            type: "input",
            block_id: "compliment_input",
            label: { type: "plain_text", text: "Compliment" },
            element: {
              type: "plain_text_input",
              action_id: "compliment_text",
              multiline: true,
            },
          },
        ],
        submit: { type: "plain_text", text: "Submit" },
      },
    });
    logger.info(result);
  } catch (error) {
    logger.error(error);
  }
});

app.view(MODAL_ID, async ({ ack, body, view, client, logger }) => {
  logger.debug(view.state.values.compliment_input.compliment_text.value);
  result = await ack({ response_action: "clear" });
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log("Kudos is running");
})();
