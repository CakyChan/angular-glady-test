import { ValueCards } from "./ValueCards";

export interface GiftApi {
    equal: ValueCards|null;
    floor: ValueCards|null;
    ceil: ValueCards|null;
}