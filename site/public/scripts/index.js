/* eslint-disable import/extensions */
import { drawGrid } from "./drawGrid.js";

const canvas = document.getElementById("canvas");
canvas.height = window.innerHeight / 2;
canvas.width = window.innerWidth / 2;
const ctx = canvas.getContext("2d");

drawGrid(canvas, ctx, 10);
