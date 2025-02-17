import "./prefix.js";

// Adapted From: Lecture 6
// And:
// Question: https://stackoverflow.com/q/40185684
// User: https://stackoverflow.com/users/4659527/nicban
$(document).ready(function () {
    let board = '<div id="board">';
    const indices = [1, 2, 3];
    const board_cell_indices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (const column of indices) {
        board += '<div class="board-parent">\n<div>';
        for (const row of indices) {

            // Adapted From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#syntax
            board += `<div class="board-${row}-${column}">`;

            for (const cell of board_cell_indices) {

                // Adapted From:
                // Asnwer: https://stackoverflow.com/a/40877084
                // User: https://stackoverflow.com/users/4574285/finalfreq
                let cell_row;
                let cell_column;
                if ((row === 1) && (column === 1) && (cell === 1)) {
                    cell_row = 1;
                    cell_column = 1;
                } else if ((row === 1) && (column === 1) && (cell === 2)) {
                    cell_row = 1;
                    cell_column = 2;
                } else if ((row === 1) && (column === 1) && (cell === 3)) {
                    cell_row = 1;
                    cell_column = 3;
                } else if ((row === 1) && (column === 1) && (cell === 4)) {
                    cell_row = 2;
                    cell_column = 1;
                } else if ((row === 1) && (column === 1) && (cell === 5)) {
                    cell_row = 2;
                    cell_column = 2;
                } else if ((row === 1) && (column === 1) && (cell === 6)) {
                    cell_row = 2;
                    cell_column = 3;
                } else if ((row === 1) && (column === 1) && (cell === 7)) {
                    cell_row = 3;
                    cell_column = 1;
                } else if ((row === 1) && (column === 1) && (cell === 8)) {
                    cell_row = 3;
                    cell_column = 2;
                } else if ((row === 1) && (column === 1) && (cell === 9)) {
                    cell_row = 3;
                    cell_column = 3;
                } else if ((row === 2) && (column === 1) && (cell === 1)) {
                    cell_row = 4;
                    cell_column = 1;
                } else if ((row === 2) && (column === 1) && (cell === 2)) {
                    cell_row = 4;
                    cell_column = 2;
                } else if ((row === 2) && (column === 1) && (cell === 3)) {
                    cell_row = 4;
                    cell_column = 3;
                } else if ((row === 2) && (column === 1) && (cell === 4)) {
                    cell_row = 5;
                    cell_column = 1;
                } else if ((row === 2) && (column === 1) && (cell === 5)) {
                    cell_row = 5;
                    cell_column = 2;
                } else if ((row === 2) && (column === 1) && (cell === 6)) {
                    cell_row = 5;
                    cell_column = 3;
                } else if ((row === 2) && (column === 1) && (cell === 7)) {
                    cell_row = 6;
                    cell_column = 1;
                } else if ((row === 2) && (column === 1) && (cell === 8)) {
                    cell_row = 6;
                    cell_column = 2;
                } else if ((row === 2) && (column === 1) && (cell === 9)) {
                    cell_row = 6;
                    cell_column = 3;
                } else if ((row === 3) && (column === 1) && (cell === 1)) {
                    cell_row = 7;
                    cell_column = 1;
                } else if ((row === 3) && (column === 1) && (cell === 2)) {
                    cell_row = 7;
                    cell_column = 2;
                } else if ((row === 3) && (column === 1) && (cell === 3)) {
                    cell_row = 7;
                    cell_column = 3;
                } else if ((row === 3) && (column === 1) && (cell === 4)) {
                    cell_row = 8;
                    cell_column = 1;
                } else if ((row === 3) && (column === 1) && (cell === 5)) {
                    cell_row = 8;
                    cell_column = 2;
                } else if ((row === 3) && (column === 1) && (cell === 6)) {
                    cell_row = 8;
                    cell_column = 3;
                } else if ((row === 3) && (column === 1) && (cell === 7)) {
                    cell_row = 9;
                    cell_column = 1;
                } else if ((row === 3) && (column === 1) && (cell === 8)) {
                    cell_row = 9;
                    cell_column = 2;
                } else if ((row === 3) && (column === 1) && (cell === 9)) {
                    cell_row = 9;
                    cell_column = 3;
                } else if ((row === 1) && (column === 2) && (cell === 1)) {
                    cell_row = 1;
                    cell_column = 4;
                } else if ((row === 1) && (column === 2) && (cell === 2)) {
                    cell_row = 1;
                    cell_column = 5;
                } else if ((row === 1) && (column === 2) && (cell === 3)) {
                    cell_row = 1;
                    cell_column = 6;
                } else if ((row === 1) && (column === 2) && (cell === 4)) {
                    cell_row = 2;
                    cell_column = 4;
                } else if ((row === 1) && (column === 2) && (cell === 5)) {
                    cell_row = 2;
                    cell_column = 5;
                } else if ((row === 1) && (column === 2) && (cell === 6)) {
                    cell_row = 2;
                    cell_column = 6;
                } else if ((row === 1) && (column === 2) && (cell === 7)) {
                    cell_row = 3;
                    cell_column = 4;
                } else if ((row === 1) && (column === 2) && (cell === 8)) {
                    cell_row = 3;
                    cell_column = 5;
                } else if ((row === 1) && (column === 2) && (cell === 9)) {
                    cell_row = 3;
                    cell_column = 6;
                } else if ((row === 2) && (column === 2) && (cell === 1)) {
                    cell_row = 4;
                    cell_column = 4;
                } else if ((row === 2) && (column === 2) && (cell === 2)) {
                    cell_row = 4;
                    cell_column = 5;
                } else if ((row === 2) && (column === 2) && (cell === 3)) {
                    cell_row = 4;
                    cell_column = 6;
                } else if ((row === 2) && (column === 2) && (cell === 4)) {
                    cell_row = 5;
                    cell_column = 4;
                } else if ((row === 2) && (column === 2) && (cell === 5)) {
                    cell_row = 5;
                    cell_column = 5;
                } else if ((row === 2) && (column === 2) && (cell === 6)) {
                    cell_row = 5;
                    cell_column = 6;
                } else if ((row === 2) && (column === 2) && (cell === 7)) {
                    cell_row = 6;
                    cell_column = 4;
                } else if ((row === 2) && (column === 2) && (cell === 8)) {
                    cell_row = 6;
                    cell_column = 5;
                } else if ((row === 2) && (column === 2) && (cell === 9)) {
                    cell_row = 6;
                    cell_column = 6;
                } else if ((row === 3) && (column === 2) && (cell === 1)) {
                    cell_row = 7;
                    cell_column = 4;
                } else if ((row === 3) && (column === 2) && (cell === 2)) {
                    cell_row = 7;
                    cell_column = 5;
                } else if ((row === 3) && (column === 2) && (cell === 3)) {
                    cell_row = 7;
                    cell_column = 6;
                } else if ((row === 3) && (column === 2) && (cell === 4)) {
                    cell_row = 8;
                    cell_column = 4;
                } else if ((row === 3) && (column === 2) && (cell === 5)) {
                    cell_row = 8;
                    cell_column = 5;
                } else if ((row === 3) && (column === 2) && (cell === 6)) {
                    cell_row = 8;
                    cell_column = 6;
                } else if ((row === 3) && (column === 2) && (cell === 7)) {
                    cell_row = 9;
                    cell_column = 4;
                } else if ((row === 3) && (column === 2) && (cell === 8)) {
                    cell_row = 9;
                    cell_column = 5;
                } else if ((row === 3) && (column === 2) && (cell === 9)) {
                    cell_row = 9;
                    cell_column = 6;
                } else if ((row === 1) && (column === 3) && (cell === 1)) {
                    cell_row = 1;
                    cell_column = 7;
                } else if ((row === 1) && (column === 3) && (cell === 2)) {
                    cell_row = 1;
                    cell_column = 8;
                } else if ((row === 1) && (column === 3) && (cell === 3)) {
                    cell_row = 1;
                    cell_column = 9;
                } else if ((row === 1) && (column === 3) && (cell === 4)) {
                    cell_row = 2;
                    cell_column = 7;
                } else if ((row === 1) && (column === 3) && (cell === 5)) {
                    cell_row = 2;
                    cell_column = 8;
                } else if ((row === 1) && (column === 3) && (cell === 6)) {
                    cell_row = 2;
                    cell_column = 9;
                } else if ((row === 1) && (column === 3) && (cell === 7)) {
                    cell_row = 3;
                    cell_column = 7;
                } else if ((row === 1) && (column === 3) && (cell === 8)) {
                    cell_row = 3;
                    cell_column = 8;
                } else if ((row === 1) && (column === 3) && (cell === 9)) {
                    cell_row = 3;
                    cell_column = 9;
                } else if ((row === 2) && (column === 3) && (cell === 1)) {
                    cell_row = 4;
                    cell_column = 7;
                } else if ((row === 2) && (column === 3) && (cell === 2)) {
                    cell_row = 4;
                    cell_column = 8;
                } else if ((row === 2) && (column === 3) && (cell === 3)) {
                    cell_row = 4;
                    cell_column = 9;
                } else if ((row === 2) && (column === 3) && (cell === 4)) {
                    cell_row = 5;
                    cell_column = 7;
                } else if ((row === 2) && (column === 3) && (cell === 5)) {
                    cell_row = 5;
                    cell_column = 8;
                } else if ((row === 2) && (column === 3) && (cell === 6)) {
                    cell_row = 5;
                    cell_column = 9;
                } else if ((row === 2) && (column === 3) && (cell === 7)) {
                    cell_row = 6;
                    cell_column = 7;
                } else if ((row === 2) && (column === 3) && (cell === 8)) {
                    cell_row = 6;
                    cell_column = 8;
                } else if ((row === 2) && (column === 3) && (cell === 9)) {
                    cell_row = 6;
                    cell_column = 9;
                } else if ((row === 3) && (column === 3) && (cell === 1)) {
                    cell_row = 7;
                    cell_column = 7;
                } else if ((row === 3) && (column === 3) && (cell === 2)) {
                    cell_row = 7;
                    cell_column = 8;
                } else if ((row === 3) && (column === 3) && (cell === 3)) {
                    cell_row = 7;
                    cell_column = 9;
                } else if ((row === 3) && (column === 3) && (cell === 4)) {
                    cell_row = 8;
                    cell_column = 7;
                } else if ((row === 3) && (column === 3) && (cell === 5)) {
                    cell_row = 8;
                    cell_column = 8;
                } else if ((row === 3) && (column === 3) && (cell === 6)) {
                    cell_row = 8;
                    cell_column = 9;
                } else if ((row === 3) && (column === 3) && (cell === 7)) {
                    cell_row = 9;
                    cell_column = 7;
                } else if ((row === 3) && (column === 3) && (cell === 8)) {
                    cell_row = 9;
                    cell_column = 8;
                } else if ((row === 3) && (column === 3) && (cell === 9)) {
                    cell_row = 9;
                    cell_column = 9;
                }

                board += `<div name="cell-${cell_row}-${cell_column}-cell" class="board-cell"></div>`;
            }
            board += '</div>';
        }
        board += '</div></div>';
    }
    board += '</div>';

    // Forgot where this came from...
    let numbers_palette = '<div id="numbers-palette"><div class="numbers-palette-parent">'

    for (const cell of board_cell_indices) {
        numbers_palette += `<div class="numbers-palette-cell">${cell}</div>`
    }
    numbers_palette += '<div class="numbers-palette-cell pt-1"><img src="images/undo.png"></img></div></div></div>';

    document.body.innerHTML += board + '<div style="clear:both"></div>' + numbers_palette;

    let current_value = "";
    let last_name = "";
    let last_value = "";
    let last_cells = null;

    // Adapted From:
    // Answer 1: https://stackoverflow.com/a/65374585
    // User 1: https://stackoverflow.com/users/1533592/dale-landry
    // Answer 2: https://stackoverflow.com/a/52153502
    // User 2: https://stackoverflow.com/users/1233908/michael-curry
    function board_cell_handler(e) {
        
        // Adapted From:
        // Answer: https://stackoverflow.com/a/69676188
        // User: https://stackoverflow.com/users/3265041/m-sinan-%c5%9eahin
        const name = e.target.getAttribute('name');

        // Adapted From: https://www.w3schools.com/jsref/jsref_split.asp
        const split_name = name.split("-");

        // Adapted From:
        // Answer: https://stackoverflow.com/a/1133814
        // User: https://stackoverflow.com/users/61027/nosredna
        const row = Number(split_name[1]);
        const column = Number(split_name[2]);

        // Adapted From:
        // Answer: https://stackoverflow.com/a/8714421
        // User: https://stackoverflow.com/users/577926/jaredmcateer
        const row_cells = document.querySelectorAll(`[name^='cell-${row}']`);
        const column_cells = document.querySelectorAll(`[name$='${column}-cell']`);

        // Adapted From: https://developer.mozilla.org/en-US/docs/Web/API/Element/children
        // And: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
        const parent_cells = Array.from(e.target.parentElement.children);

        // Adapted From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
        const values = new Map();

        function inner(cell, index) {

            // Adapted From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
            if (!(Array.from(values.keys()).includes(cell))) {

                const cell_name = cell.getAttribute('name');
                const cell_split_name = cell_name.split("-");
                const cell_row = Number(cell_split_name[1]);
                const cell_column = Number(cell_split_name[2]);
                if ((!((row === cell_row) && (column === cell_column))) && Boolean(cell.innerHTML)) {
                    values.set(cell, cell.innerHTML);
                }
            }
        }

        row_cells.forEach(inner);
        column_cells.forEach(inner);
        parent_cells.forEach(inner);

        // Adapted From:
        // Answer: https://stackoverflow.com/a/37469522
        // User: https://stackoverflow.com/users/1048572/bergi
        // find: {
        //     for (const value of values.values()) {
        //         if (value === current_value) {
        //             for (const cell of values.keys()) {
        //                 cell.classList.toggle("error");
        //             }
        //             break find;
        //         }
        //     }
        //     e.target.innerHTML = current_value;
        // }

        // Adapted From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
        if (Array.from(values.values()).includes(current_value)) {
            last_cells = Array.from(values.keys());
            last_name = "";
            last_value = "";
            for (const cell of last_cells) {
                cell.classList.add("error");
            }
        } else {
            e.target.classList.remove("error");
            last_cells = null;
            last_name = e.target.getAttribute("name");
            last_value = e.target.innerHTML;
            e.target.innerHTML = current_value;
        }
    }

    // Adapted From:
    // Answer: https://stackoverflow.com/a/65374585
    // User: https://stackoverflow.com/users/1533592/dale-landry
    const board_cells = document.querySelectorAll(".board-cell");
    for (const cell of board_cells) {
        cell.addEventListener('click', board_cell_handler);
    }

    // Adapted From:
    // Answer 1: https://stackoverflow.com/a/65374585
    // User 1: https://stackoverflow.com/users/1533592/dale-landry
    // Answer 2: https://stackoverflow.com/a/52153502
    // User 2: https://stackoverflow.com/users/1233908/michael-curry
    function numbers_palette_cell_handler(e) {
        current_value = e.target.innerHTML;
    }

    // Adapted From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    // And:
    // Answer: https://stackoverflow.com/a/65374585
    // User: https://stackoverflow.com/users/1533592/dale-landry
    const numbers_palette_cells = Array.from(document.querySelectorAll(".numbers-palette-cell"));

    // Adapted From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    for (const cell of numbers_palette_cells.slice(0, -1)) {
        cell.addEventListener('click', numbers_palette_cell_handler);
    }
    
    function undo_handler(e) {
        if (Boolean(last_name)) {
            // Adapted From:
            // Answer: https://stackoverflow.com/a/8714421
            // User: https://stackoverflow.com/users/577926/jaredmcateer
            const cells = document.querySelectorAll(`[name='${last_name}']`);
            console.log(cells[0].innerHTML, last_value);
            cells[0].innerHTML = last_value;
        }
        if (last_cells) {
            for (const cell of last_cells) {
                cell.classList.remove("error");
            }
        }
    }

    // Adapted From:
    // Answer: https://stackoverflow.com/a/3216041
    // User: https://stackoverflow.com/users/365695/aaron-butacov
    numbers_palette_cells.at(-1).addEventListener('click', undo_handler);

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });
})