        // Function to open a side panel
        function openSidePanel(panelId) {
            document.getElementById(panelId).style.width = "400px"; // Opens panel width
            document.getElementById("overlay").classList.add("show"); // Shows overlay
        }

        // Function to close a specific side panel
        function closeSidePanel(panelId) {
            document.getElementById(panelId).style.width = "0"; // Closes panel width
            document.getElementById("overlay").classList.remove("show"); // Hides overlay
        }

        // Function to close all side panels
        function closeAllSidePanels() {
            closeSidePanel('leftSidePanel');
            closeSidePanel('rightSidePanel');
        }

        // Intersection Observer for scroll-triggered animations
        const missionSection = document.getElementById('mission-section');
        const ourVisionSection = document.getElementById('our-vision-section');
        const ourValuesSection = document.getElementById('our-values-section');
        const teamSection = document.getElementById('team-section');

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        observer.observe(missionSection);
        observer.observe(ourVisionSection);
        observer.observe(ourValuesSection);
        observer.observe(teamSection);
        


        function subscribe() {
            const email = document.getElementById('emailInput').value;
            if (email) {
                alert(`Thank you for subscribing with email: ${email}`);
                // Optionally clear the input after subscribing
                document.getElementById('emailInput').value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        }