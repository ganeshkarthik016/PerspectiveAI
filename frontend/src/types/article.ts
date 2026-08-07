export interface Prediction {
    label: string;
    confidence: number;
}

export interface Article {
    title: string;
    summary: string;
    source: string;
    url: string;
    image: string;
    published: string;

    bias: Prediction;
}