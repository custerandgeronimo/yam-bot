import { Telegraf, Markup } from "telegraf";
import dotenv from 'dotenv';

const message = `🎉 <b>Welcome to Yet Another Memcoin!</b> 🎉

Ready to test your luck? Every day, you receive <b>3 bonuses</b> hidden behind a scratchable layer 🧩, waiting for you to reveal them. It's all in your hands—no one can predict your success except for your own luck 🎯. Take your chance and discover what fortune has in store for you!

But that’s not all! You can also boost your <b>passive income</b> 💸. Upgrade your skills and earn even more value from the game!

⚡ <b>Invite friends and earn more!</b> ⚡
For every friend you invite, you’ll receive additional bonuses, and if your friend has <b>Telegram Premium</b>, your reward will be even bigger! The more friends you bring, the higher your income! 📈

<b>Don’t miss your chance!</b> Join now and start earning right away! 🚀`;


dotenv.config()
const token = process.env.BOT_TOKEN;
if (token === undefined) {
    throw new Error('TELEGRAM_TOKEN is not defined');
}

const bot = new Telegraf(token);
bot.start((ctx) => {
    ctx.replyWithPhoto(
        { source: 'render.jpg' },
        {
            caption: message,
            parse_mode: 'HTML',
            ...Markup.inlineKeyboard([
                [ 
                    Markup.button.url('🚀Game', 'https://t.me/yamton_bot/crypto'), 
                    Markup.button.url('Channel', 'https://t.me/yetanothermemcoin')
                ]
            ])
        }
    );
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))