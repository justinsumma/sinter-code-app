import { Dialog } from "./dialog";
import { Question } from "./question";

export interface Scene {
    id: number;
    dialogs: Dialog[];
    question: Question;
}