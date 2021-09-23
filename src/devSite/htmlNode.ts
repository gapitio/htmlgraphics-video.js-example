import type { HTMLNode } from "../../types/htmlgraphicsTypes/htmlNode";
import html from "../html.html";

const shadowContainer = document.querySelector("#shadow-container");
if (!shadowContainer) throw new Error("Could not find shadow container.");

window.htmlNode = shadowContainer.attachShadow({ mode: "open" }) as HTMLNode;

htmlNode.onpanelupdate = () => {};
htmlNode.innerHTML = `<style>@import "build/style.css"</style>${html}`;

const htmlDocument = htmlNode.children[1] as
  | HTMLElement
  | (HTMLElement & SVGElement);

htmlDocument.setAttribute("height", "100%");
htmlDocument.setAttribute("width", "100%");
htmlDocument.style.height = "100%";
htmlDocument.style.width = "100%";
