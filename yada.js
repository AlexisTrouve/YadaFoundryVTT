import { yada } from "./module/config.js";
import YadaItemSheet from "./module/sheets/YadaItemSheet.js";

Hooks.once("init", function() 
{
    console.log("Yada | Initialising Yada System");

    CONFIG.yada = yada;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("yada", YadaItemSheet, {makeDefault: true});
});