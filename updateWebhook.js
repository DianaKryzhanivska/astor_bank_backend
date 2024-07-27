const axios = require('axios');

const telegramBotToken = 'YOUR_TELEGRAM_BOT_TOKEN';
const webhookUrl = 'https://your-domain-on-render.com/webhook';

const deleteWebhook = async () => {
    try {
        const url = `https://api.telegram.org/bot${telegramBotToken}/deleteWebhook`;
        const response = await axios.post(url);
        console.log('Webhook deleted:', response.data);
    } catch (error) {
        console.error('Error deleting webhook:', error);
    }
};

const setWebhook = async () => {
    try {
        const url = `https://api.telegram.org/bot${telegramBotToken}/setWebhook`;
        const response = await axios.post(url, { url: webhookUrl });
        console.log('Webhook set:', response.data);
    } catch (error) {
        console.error('Error setting webhook:', error);
    }
};

const updateWebhook = async () => {
    await deleteWebhook();
    await setWebhook();
};

updateWebhook();
