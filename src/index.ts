import { Telegraf } from "telegraf";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

async function start() {
  const bot = new Telegraf(process.env.BOT_TOKEN ?? "");
  bot.start(ctx => ctx.reply("Hello"));
  bot.on("message", ctx => {
    ctx.replyWithSticker("123123jkbhj6b");
  });
  bot.launch();
}

start();
