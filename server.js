const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3333;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-message', async (req, res) => {
    const { name, email, phone, telegram, amount } = req.body;
    const uniqueId = Date.now();
    const message = `
        Id: ${uniqueId}
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Telegram: ${telegram}
        Amount: ${amount}
    `;

    const telegramBotToken = '7465165553:AAGgK3TvDOxCd2J2DlmmNS1ij-tEVq6Quxc';
    const chatId = '6645412140';

    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

    try {
        const response = await axios.post(url, {
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML'
        });
        res.json({ ok: true, data: response.data });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ ok: false, error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
