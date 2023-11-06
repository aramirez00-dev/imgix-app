export const Operations = {
    PARAMS: "parameters",
    EXPECTS: "expects",
    POSSIBLE_VALUES: "possible_values",
    SUGGESTED_RANGE: "suggested_range",
    MIN: "min",
    MAX: "max",
    FLIP: "flip",
    ORIENT: "orient",
    ROT: "rot",
    BRI: "bri",
    CON: "con",
    EXP: "exp",
    GAM: "gam",
    HIGH: "high",
    HUE: "hue",
    SAT: "sat",
    SHAD: "shad",
    SHARP: "sharp",
    USM: "usm",
    USMRAD: "usmrad",
    VIB: "vib"
}

export interface RotationOperationsOptions {
    flipOptions: string[];
    orientOptions: string[];
    rotMin: number;
    rotMax: number;
}

export interface AdjustmentOperationsOptions {
    briMin: number;
    briMax: number;
    conMin: number;
    conMax: number;
    expMin: number;
    expMax: number;
    gamMin: number;
    gamMax: number;
    highMin: number;
    highMax: number;
    hueMin: number;
    hueMax: number;
    isInverted: boolean;
    satMin: number;
    satMax: number;
    shadMin: number;
    shadMax: number;
    sharpMin: number;
    sharpMax: number;
    usmMin: number;
    usmMax: number;
    usmradMin: number;
    usmradMax: number;
    vibMin: number;
    vibMax: number;
}
