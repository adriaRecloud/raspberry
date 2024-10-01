const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = 3000;

app.get('/ips', (req, res) => {
    exec('hostname -I', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
            return res.status(500).send('Error getting IPs');
        }
        // Dividir la salida en un array de IPs
        const ips = stdout.trim().split(' ');
        res.json(ips);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
