import { CalculatorComponentValue } from "./CalculatorComponentValue";

export interface GiftApi {
    equal: CalculatorComponentValue|null;
    floor: CalculatorComponentValue|null;
    ceil: CalculatorComponentValue|null;
}