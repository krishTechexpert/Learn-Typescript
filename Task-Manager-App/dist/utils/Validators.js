"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTask = isTask;
// Type Guard: Check if an object is a Task ( Runtime type checking	)
function isTask(obj) {
    return (obj &&
        typeof obj.id === 'number' &&
        typeof obj.title === "string" &&
        typeof obj.description === "string" &&
        typeof obj.category === "string");
}
