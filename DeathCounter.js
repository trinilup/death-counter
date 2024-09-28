import { client } from './mtmi.js';

export const getParams = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
};

const Fonts = {
    LilitaOne: 'Lilita One',
    PixelifySans: '"Pixelify Sans", sans-serif',
};

export class DeathCounter {
    constructor({channel, cooldown = 5000, command = 'muerte', font = 'Lilita One', fontSize = 8, onlyMods = false, image = null}) {
        this.channel = channel;
        this.cooldown = cooldown === null ? 5000 : cooldown;
        this.lastCommand = null;
        this.command = command ?? 'muerte';
        this.font = font;
        this.fontSize = fontSize;
        this.onlyMods = onlyMods;
        this.image = image;

        this.configParams();

        if (!channel) return;

        client.connect({ channels: [channel] });

        const numberElement = document.querySelector('#number');
        numberElement.innerHTML = 0;

        client.on('message', ({channel, username, message, badges}) => {
            const isMod = badges.map(badge => badge.name.toLowerCase()).includes('moderator') || badges.map(badge => badge.name.toLowerCase()).includes('broadcaster');
            if (this.onlyMods && !isMod) return;
            
            const isCommand = message[0] === "!";
            const isOutCooldown = (new Date().getTime() - this.cooldown) > this.lastCommand;

            if (!isCommand || !isOutCooldown) return;

            const command = message.split(" ").at(0).toLowerCase();
            if (command.includes('!' + this.command.toLowerCase())) {
                numberElement.innerHTML = parseInt(numberElement.innerHTML) + 1;
                this.lastCommand = new Date().getTime();
            }

        });
    }

    configParams(){
        this.configFont();
        if (this.image) this.configImage();
    }

    configFont(){
        // inject font from google fonts
       const html = document.querySelector('html');
       html.style.fontFamily = Fonts[this.font] ?? Fonts.LilitaOne;

        // inject font size
        const numberElement = document.querySelector('#number');
        numberElement.style.fontSize = `${this.fontSize}rem`;
    }
    configImage(){
        const deathImage = document.querySelector('#deathImage');
        const image = new Image();
        image.src = this.image;
        image.style.height = '128px';
        image.onload = () => {
            deathImage.innerHTML = '';
            deathImage.appendChild(image);
        }
    }
    
}