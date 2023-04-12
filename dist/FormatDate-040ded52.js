"use strict";function i(t){const e=new Date(t),n={day:"2-digit",month:"2-digit",year:"numeric"};return e.toLocaleDateString("en-UK",n).split("/").join("-")}exports.formatDate=i;
