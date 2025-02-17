import "./prefix.js";

// Adapted From: Lecture 6
// And:
// Question: https://stackoverflow.com/q/40185684
// User: https://stackoverflow.com/users/4659527/nicban
$(document).ready(function () {
    document.body.innerHTML += `
        <!-- Adapted From: https://github.com/jgthms/bulma/issues/1513#issuecomment-981231688 -->
        <table class="table mx-auto">

            <tbody>
                <tr>
                    <th class="has-text-black pt-6">Date</th>
                    <th class="has-text-black pt-6">Duration</th>
                </tr>
                <tr>
                    <td class="has-text-black">2021/01/17</td>
                    <td class="has-text-black">3:41</td>
                </tr>
                <tr>
                    <td class="has-text-black">2021/01/21</td>
                    <td class="has-text-black">4:01</td>
                </tr>
                <tr>
                    <td class="has-text-black">2021/02/01</td>
                    <td class="has-text-black">2:52</td>
                </tr>
                <tr>
                    <td class="has-text-black">2021/02/17</td>
                    <td class="has-text-black">3:08</td>
                </tr>
                <tr>
                    <td class="has-text-black">2021/03/02</td>
                    <td class="has-text-black">2:51</td>
                </tr>
            </tbody>
        </table>
    `

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });
})