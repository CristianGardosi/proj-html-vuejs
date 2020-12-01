// ********************************************** \\
                  // !WHITE IMS VUE JS\\
// *********************************************** \\

const iAccademy = new Vue ({

    el: '#white-ims',

    data: {
        // Link navbar
        navbarLinks: [
            {
                link: 'Courses',
            },
            {
                link: 'Zoom',
            },
            {
                link: 'Pages',
            },
            {
                link: 'Bundles',
            },
            {   
                link: 'Course formats',
            },
            {
                link: 'Add course'
            },
            {
                link: 'Demos'
            }
        ],
        // Light blue text boxes contents
        lightBlueBoxesContents: [
            {
                title: 'Worldwide recognize',
                description: 'You can use your certificate all around the world and also in most popular universities and companies'
            },
            {
                title: 'Mostly online learning',
                description: 'Master study online certificates in a range of specialized areas'
            },
            {
                title: 'Graduate in as a little as one year',
                description: 'Online post graduate certificates are a popular way to develope your porfessional qualifications'
            },
        ],
        // Recent courses filter researc
        recentCourses: [
            {
                filter: 'All categories'
            },
            {
                filter: 'Art'
            },
            {
                filter: 'Exercise'
            },
            {
                filter: 'Material design'
            },
            {
                filter: 'Music'
            },
            {
                filter: 'Photography'
            },
            {
                filter: 'Software developement'
            }
        ],
        // Recent courses box content
        recentCourseBox: [
            {
                photo: './img/photo-1461749280684-dccba630e2f6-272x161.jpeg',
                type: 'Apache',
                name: 'Web coding and Apache basics',
                duration: '6 hours',
                price: 'free'
            },
            {
                photo: './img/cat_2-272x161.jpg',
                type: 'Art',
                name: 'Real things art painting by Jason Ni',
                duration: '6 hours',
                price: '45$'
            },
            {
                photo: './img/photo-1496307042754-b4aa456c4a2d-272x161.jpeg',
                type: 'Electronic',
                name: 'How to be a DJ? Make electronic music',
                duration: '8 hours',
                price: '49$'
            },
            {
                photo: './img/photo-1475452779376-caebfb988090-272x161.jpeg',
                type: 'Bicycling',
                name: 'Road bike manual on how to be a champion',
                duration: '6 hours',
                price: '20$'
            },
            {
                photo: './img/photo-1416339134316-0e91dc9ded92-scaled-272x161.jpeg',
                type: 'Communication',
                name: 'Design instruments for communication',
                duration: '5 hours',
                price: '70$'
            },
            {
                photo: './img/12345-1-272x161.png',
                type: 'Nvidia',
                name: 'Nvidia and EU4 Technologies practice',
                duration: '6 hours',
                price: 'Free'
            },
            {
                photo: './img/cathryn-lavery-67852-unsplash-272x161.jpg',
                type: 'Art',
                name: 'Make your concept right and beautiful',
                duration: '',
                stars: './img/3star-solid.png',
                price: '70$'
            },
            {
                photo: './img/cristian-grecu-762012-unsplash-min-scaled-272x161.jpg',
                type: 'Documentary',
                name: 'How to make beautiful Landscape photos?',
                duration: '6 hours',
                price: '60$'
            }
        ]
    }

 }); // <-- END VUE