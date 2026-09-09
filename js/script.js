const tooltipTriggerList =
    document.querySelectorAll('[data-bs-toggle="tooltip"]');


tooltipTriggerList.forEach(
    element => new bootstrap.Tooltip(element)
);