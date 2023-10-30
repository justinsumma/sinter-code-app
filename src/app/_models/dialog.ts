import { Character } from "./character";

export interface Dialog {
    index: number;
    text: string;
    character: Character;
}