import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js";

// Adapted From:
// Question: https://stackoverflow.com/q/40185684
// User: https://stackoverflow.com/users/4659527/nicban
$(document).ready(function () {
    document.body.innerHTML = `
        <!-- Adapted From: Lecture 6 -->
        <!-- navbar colours: https://bulma.io/documentation/components/navbar/#colors -->
        <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
            <!-- navbar-brand -->
            <div class="navbar-brand">
                <!-- navbar-item -->
                <a class="navbar-item" href="#">
                    <img src="images/logo.gif" width="50" height="35" alt="Sudoku Logo" />
                </a>

                <p class="navbar-item pl-6">Sudoku Center</p>
                
                <!-- navbar-burger -->
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="false"></span>
                    <span aria-hidden="false" style="color:white"></span>
                    <span aria-hidden="false"></span>
                    <span aria-hidden="false"></span>
                </a>
            </div>


            <!-- navbar-menu -->
            <div id="navbarBasicExample" class="navbar-menu">
                <!-- nav-Start -->
                <div class="navbar-start">
                    <!-- Item 1: Home -->
                    <a class="navbar-item" href="sudoku.html">Play Game</a>
                    <a class="navbar-item" href="high_scores.html">High Scores</a>
                </div>

                <!-- nav-End -->
                <div class="navbar-end"></div>
            </div>
        </nav>
    `
});