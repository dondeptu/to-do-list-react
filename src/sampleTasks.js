import { nanoid } from "@reduxjs/toolkit";

const tasks = [
    {
        content: "lekcja pianina",
        done: true,
        id: nanoid(),
    },
    {
        content: "spotkanie 16:30",
        done: false,
        id: nanoid(),
    },
];

export default tasks;