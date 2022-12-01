// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.querySelector('#datetime-picker')
flatpickr(inputEl, {enableTime: true,
    dateFormat: "Y-m-d H:i",});