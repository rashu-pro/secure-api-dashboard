/**
 * Created by rashu on 10/19/2022.
 */

/**
 * 1. VARIABLES
 * 2. ON DOCUMENT READY
 */


/**
 * -------------------------------------
 * 1. VARIABLES
 */
let header = document.querySelector('#header');
let footer = document.querySelector('#footer');
let headerHeight = document.querySelector('#header').clientHeight;
let mainWrapper = document.querySelector('#main-wrapper');


/**
 * -------------------------------------
 * 2. ON DOCUMENT READY
 */

//=== GIVING MAINBODY WRAPPER A PADDING TOP WHEN HEADER IS FIXED
window.addEventListener('load', function () {
    if(header.classList.contains('fixed')) mainWrapper.style.paddingTop = `${header.clientHeight}px`;
});

//=== GIVING MAINBODY WRAPPER A MIN HEIGHT
let headFootHeight = header.clientHeight + footer.clientHeight;
if(header.classList.contains('fixed')) headFootHeight = footer.clientHeight;
let mainWrapperMinHeight = `calc(100vh - ${headFootHeight}px)`;
mainWrapper.style.minHeight = mainWrapperMinHeight;