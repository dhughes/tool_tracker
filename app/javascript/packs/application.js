// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
require("@rails/activestorage").start();
require("channels");

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import jQuery from "jquery";
import "bootstrap";
import "@fortawesome/fontawesome-free/js/all";
import React from "react";
import ReactDOM from "react-dom";
import Zamboni from "./zamboni";

const reactComponents = {
  Zamboni: Zamboni,
};

(function () {
  "use strict";
  window.addEventListener("DOMContentLoaded", initializeReactComponents, false);
})();

function initializeReactComponents() {
  const containers = document.querySelectorAll("div[data-react-component]");
  Array.from(containers).forEach((container) => {
    const properties = Object.keys(container.dataset).reduce((props, key) => {
      const [_, type, name] = key.match(
        /(javascript|boolean|number|json)*(.*)/
      );
      const keyName = `${name[0].toLowerCase()}${name.slice(1)}`;
      const value = container.dataset[key];

      switch (type) {
        case "javascript":
          props[keyName] = eval(value);
          break;
        case "boolean":
          props[keyName] = value === "true";
          break;
        case "number":
          props[keyName] = parseFloat(value);
          break;
        case "json":
          props[keyName] = JSON.parse(value);
          break;
        default:
          props[keyName] = value;
      }

      return props;
    }, {});

    const { reactComponent } = properties;

    const Component = reactComponents[reactComponent];
    ReactDOM.render(<Component {...properties} />, container);
  });
}
