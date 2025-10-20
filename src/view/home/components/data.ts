const starData = [
  { word: 'Autonomy violation', color: '#8b0000' },
  { word: 'Betrayal', color: '#8b0000' },
  { word: 'Challenge authority', color: '#8b0000' },
  { word: 'Desire', color: '#8b0000' },
  { word: 'Disgust', color: '#8b0000' },
  { word: 'Fairness violation', color: '#8b0000' },
  { word: 'Harm to others', color: '#8b0000' },
  { word: 'Harm to the self', color: '#8b0000' },
  { word: 'Hedonism', color: '#8b0000' },
  { word: 'Irresponsibility', color: '#8b0000' },
  { word: 'Norm violation', color: '#8b0000' },
  { word: 'Self-indulgence', color: '#8b0000' },
  { word: 'Unjust-gain', color: '#8b0000' },
  { word: 'Ability', color: '#8b0000' },
  { word: 'Harm to society', color: '#8b0000' },
  { word: 'Disrupt social order', color: '#8b0000' },
  { word: 'Psychological harm', color: '#8b0000' },
  { word: 'Self-interest', color: '#8b0000' },
  { word: 'Strategy', color: '#8b0000' },
  { word: 'Injustice', color: '#8b0000' },
  { word: 'Aggressiveness', color: '#8b0000' },
  { word: 'Cost', color: '#8b0000' },
  { word: 'Guilt', color: '#8b0000' },
  { word: 'Harm to life', color: '#8b0000' },
  { word: 'Harm to property', color: '#8b0000' },
  { word: 'Harm to the environment', color: '#8b0000' },
  { word: 'Hate', color: '#8b0000' },
  { word: 'Impulsivity', color: '#8b0000' },
  { word: 'Oppression', color: '#8b0000' },
  { word: 'Perceived harm', color: '#8b0000' },
  { word: 'Sexual relevance', color: '#8b0000' },
  { word: 'Shame', color: '#8b0000' },
  { word: 'Anger', color: '#8b0000' },
  { word: 'Deception', color: '#8b0000' },
  { word: 'Coldness', color: '#8b0000' },
  { word: 'Deliberateness', color: '#8b0000' },
  { word: 'Sense of dirtiness', color: '#8b0000' },
  { word: 'Callousness', color: '#8b0000' },
  { word: 'Contempt', color: '#8b0000' },
  { word: 'Pressure', color: '#8b0000' },
  { word: 'Altruism', color: '#027d33' },
  { word: 'Care for others', color: '#027d33' },
  { word: 'Competence', color: '#027d33' },
  { word: 'Courage', color: '#027d33' },
  { word: 'Duty', color: '#027d33' },
  { word: 'Empathy', color: '#027d33' },
  { word: 'Indignation', color: '#027d33' },
  { word: 'Love', color: '#027d33' },
  { word: 'Material cost', color: '#027d33' },
  { word: 'Obey rule', color: '#027d33' },
  { word: 'Dedication', color: '#027d33' },
  { word: 'Self-advancement', color: '#027d33' },
  { word: 'Self-control', color: '#027d33' },
  { word: 'Social contribution', color: '#027d33' },
  { word: 'Temperance', color: '#027d33' },
  { word: 'Promotion', color: '#027d33' },
  { word: 'Reputation', color: '#027d33' },
  { word: 'Benefit others materially', color: '#027d33' },
  { word: 'Benefit others physically', color: '#027d33' },
  { word: 'Benefit others spiritually', color: '#027d33' },
  { word: 'Material reward', color: '#027d33' },
  { word: 'Pro-environment', color: '#027d33' },
  { word: 'Self-discipline', color: '#027d33' },
  { word: 'Self-Identification', color: '#027d33' },
  { word: 'Urgency', color: '#027d33' },
  { word: 'Honesty', color: '#027d33' },
  { word: 'Flexibility', color: '#027d33' },
  { word: 'Loyalty', color: '#027d33' },
  { word: 'Autonomy', color: '#027d33' },
  { word: 'Warmth', color: '#027d33' },
  { word: 'Sanctity', color: '#027d33' },
  { word: 'Gratitude', color: '#027d33' },
  { word: 'Fairness', color: '#027d33' },
  { word: 'Justice', color: '#027d33' },
  { word: 'Pleasure', color: '#027d33' },
  { word: 'Passion', color: '#027d33' },
  { word: 'Respect', color: '#027d33' },
  { word: 'Nobility', color: '#027d33' },
  { word: 'Uphold social order', color: '#027d33' }
];

const starConnectData: Array<[number, number]> = [
    [0, 1],
    [0, 6],
    [0, 10],
    [1, 2],
    [2, 6],
    [2, 3],
    [2, 4],
    [3, 4],
    [4, 8],
    [4, 5],
    [5, 9],
    [7, 8],
    [7, 13],
    [8, 9],
    [10, 11],
    [11, 12],
    [12, 13],
    [13, 14],
    [14, 9],
    [15, 16],
    [15, 17],
    [16, 17],
    [16, 18],
    [17, 20],
    [18, 19],
    [18, 21],
    [19, 21],
    [20, 21],
    [20, 22],
    [21, 24],
    [22, 23],
    [22, 25],
    [23, 24],
    [23, 25],
    [24, 26],
    [25, 26],
    [25, 27],
    [25, 28],
    [26, 29],
    [27, 28],
    [28, 29],
];
const starNewData = [
  { id: 0, word: "Lust", color: "#7F1416", posX: 957, posY: 329 },
  { id: 1, word: "Betrayal", color: "#7F1416", posX: 867, posY: 381 },
  { id: 2, word: "Deception", color: "#7F1416", posX: 883, posY: 469 },
  { id: 3, word: "Contempt", color: "#7F1416", posX: 809, posY: 519 },
  { id: 4, word: "Risk", color: "#7F1416", posX: 848, posY: 617 },
  { id: 5, word: "Hedonism", color: "#7F1416", posX: 844, posY: 680 },
  { id: 6, word: "Anger", color: "#7F1416", posX: 950, posY: 415 },
  { id: 7, word: "Irresponsibility", color: "#7F1416", posX: 935, posY: 512 },
  { id: 8, word: "Disgust", color: "#7F1416", posX: 931, posY: 595 },
  { id: 9, word: "Callousness", color: "#7F1416", posX: 962, posY: 668 },
  { id: 10, word: "Self-indulgence", color: "#7F1416", posX: 1014, posY: 364 },
  { id: 11, word: "Impulsivity", color: "#7F1416", posX: 1032, posY: 416 },
  { id: 12, word: "Unjust-gain", color: "#7F1416", posX: 1029, posY: 476 },
  { id: 13, word: "Selfish", color: "#7F1416", posX: 1075, posY: 566 },
  { id: 14, word: "Premeditation", color: "#7F1416", posX: 1047, posY: 620 },
  { id: 15, word: "Duty", color: "#066D31", posX: 1094, posY: 305 },
  { id: 16, word: "Altruism", color: "#066D31", posX: 1175, posY: 289 },
  { id: 17, word: "Fairness", color: "#066D31", posX: 1117, posY: 372 },
  { id: 18, word: "Courage", color: "#066D31", posX: 1214, posY: 343 },
  { id: 19, word: "Honor", color: "#066D31", posX: 1271, posY: 360 },
  { id: 20, word: "Justice", color: "#066D31", posX: 1104, posY: 432 },
  { id: 21, word: "Loyalty", color: "#066D31", posX: 1220, posY: 423 },
  { id: 22, word: "Dedication", color: "#066D31", posX: 1108, posY: 510 },
  { id: 23, word: "Empathy", color: "#066D31", posX: 1194, posY: 483 },
  { id: 24, word: "Gratitude", color: "#066D31", posX: 1281, posY: 481 },
  { id: 25, word: "Honesty", color: "#066D31", posX: 1187, posY: 578 },
  { id: 26, word: "Nobility", color: "#066D31", posX: 1260, posY: 565 },
  { id: 27, word: "Sanctity", color: "#066D31", posX: 1128, posY: 638 },
  { id: 28, word: "Love", color: "#066D31", posX: 1212, posY: 658 },
  { id: 29, word: "Autonomy", color: "#066D31", posX: 1294, posY: 627 },
];
starNewData.forEach(item => {
  item.posX = item.posX - 699;
  item.posY = item.posY - 264;
});
const starNewSharingData = [
    { color: "#7F1416", posX: 1003, posY: 307 },
    { color: "#7F1416", posX: 888, posY: 323 },
    { color: "#7F1416", posX: 804, posY: 379 },
    { color: "#7F1416", posX: 822, posY: 435 },
    { color: "#7F1416", posX: 798, posY: 546 },
    { color: "#7F1416", posX: 796, posY: 611 },
    { color: "#7F1416", posX: 906, posY: 618 },
    { color: "#7F1416", posX: 897, posY: 529 },
    { color: "#7F1416", posX: 959, posY: 451 },
    { color: "#7F1416", posX: 993, posY: 556 },
    { color: "#066D31", posX: 1115, posY: 274 },
    { color: "#066D31", posX: 1220, posY: 288 },
    { color: "#066D31", posX: 1290, posY: 412 },
    { color: "#066D31", posX: 1289, posY: 517 },
    { color: "#066D31", posX: 1159, posY: 395 },
    { color: "#066D31", posX: 1131, posY: 461 },
    { color: "#066D31", posX: 1144, posY: 523 },
    { color: "#066D31", posX: 1207, posY: 596 },
    { color: "#066D31", posX: 1139, posY: 661 },
    { color: "#066D31", posX: 1248, posY: 661 },
];
starNewSharingData.forEach(item => {
  item.posX = item.posX - 699;
  item.posY = item.posY - 264;
});
class Star {
    private r: number;
    private init_step = 0.1;
    private step = this.init_step;
    constructor(
        private x: number, 
        private y: number, 
        private color: string,
        private word: string | undefined,
        private r_min: number,
        private r_max: number,
        private angle: number,
    ) {
        this.r = Math.random() * (this.r_max - this.r_min) + this.r_min;
    }

    public get pos() {
        return {
            x: this.x,
            y: this.y
        }
    }

    public update({x, y}: {x: number, y: number}) {
        this.r += this.step;
        if (this.r >= this.r_max) this.step = -1 * this.init_step;
        if (this.r <= this.r_min) {
            this.x = x;
            this.y = y;
            this.r = this.r_min;
            this.step = this.init_step;
        }
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "#fff";

        ctx.beginPath();
        const spikes = 5; // 五角星
        const outerRadius = this.r;
        const innerRadius = this.r * 0.65;

        for (let i = 0; i < spikes; i++) {
            // Outer point
            const outerX = outerRadius * Math.cos((i * 2 * Math.PI / spikes) - Math.PI / 2);
            const outerY = outerRadius * Math.sin((i * 2 * Math.PI / spikes) - Math.PI / 2);
            
            // Inner point
            const innerX = innerRadius * Math.cos(((i + 0.5) * 2 * Math.PI / spikes) - Math.PI / 2);
            const innerY = innerRadius * Math.sin(((i + 0.5) * 2 * Math.PI / spikes) - Math.PI / 2);
            
            if (i === 0) {
                ctx.moveTo(outerX, outerY);
            } else {
                ctx.lineTo(outerX, outerY);
            }
            ctx.lineTo(innerX, innerY);
        }

        ctx.closePath();
        ctx.fill();

        if (this.word) {
            ctx.font = `16px Arial`;
            ctx.fillStyle = "#ffffff";
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(this.word, 0, 0);
        }

        ctx.restore();
    }
}

export { starData, starNewData, starConnectData, starNewSharingData, Star };
