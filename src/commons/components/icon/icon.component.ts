import { createIconSetFromIcoMoon } from "react-native-vector-icons";

const IcoMoonConfig = require("./Rocket/selection.json");

export const Icon = createIconSetFromIcoMoon(IcoMoonConfig, "Rocket", "Rocket.ttf");