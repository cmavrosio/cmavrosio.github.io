// foldable.js - Makes Org-mode sections collapsible

document.addEventListener('DOMContentLoaded', function() {
    // Make all elements with class 'outline-2' and 'outline-3' foldable
    document.querySelectorAll('.outline-2, .outline-3').forEach(function(section) {
        // Add foldable class
        section.classList.add('foldable');

        // Get the heading element (h2 for outline-2, h3 for outline-3)
        const heading = section.querySelector('h2, h3');

        // Create a div to wrap all content after the heading
        const content = document.createElement('div');
        content.className = 'foldable-content';

        // Move all nodes after the heading into the content div
        let next = heading.nextSibling;
        while(next) {
            const current = next;
            next = current.nextSibling;
            content.appendChild(current);
        }

        // Add the content div back to the section
        section.appendChild(content);

        // Add click handler to toggle collapsed state
        heading.addEventListener('click', function() {
            section.classList.toggle('collapsed');

            // Optional: Save state in localStorage
            // try {
            //     const path = window.location.pathname + '#' + heading.id;
            //     localStorage.setItem(path, section.classList.contains('collapsed'));
            // } catch(e) {}
        });

        // Optional: Restore collapsed state from localStorage
        // try {
        //     const path = window.location.pathname + '#' + heading.id;
        //     if (localStorage.getItem(path) === 'true') {
        //         section.classList.add('collapsed');
        //     }
        // } catch(e) {}
    });

    // Optional: Add keyboard support
    document.addEventListener('keydown', function(e) {
        if (e.target.tagName === 'H2' || e.target.tagName === 'H3') {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.target.click();
            }
        }
    });
});
