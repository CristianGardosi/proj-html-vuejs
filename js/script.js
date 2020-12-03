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
        // Recent courses filter researc
        recentCoursesCategory: [
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
        // Categoria selezionata al caricamento della pagina (= mostra tutti i video)
        actualCourseGenre: 'All categories',
        // Recent courses box content
        recentCourseBox: [
            {
                photo: './img/photo-1461749280684-dccba630e2f6-272x161.jpeg',
                type: 'Apache',
                name: 'Web coding and Apache basics',
                duration: '6 hours',
                price: 'free',
                genre: 'Software development'
            },
            {
                photo: './img/cat_2-272x161.jpg',
                type: 'Art',
                name: 'Real things art painting by Jason Ni',
                duration: '6 hours',
                price: '45$',
                genre: 'Art'
            },
            {
                photo: './img/photo-1496307042754-b4aa456c4a2d-272x161.jpeg',
                type: 'Electronic',
                name: 'How to be a DJ? Make electronic music',
                duration: '8 hours',
                price: '49$',
                genre: 'Music'
            },
            {
                photo: './img/photo-1475452779376-caebfb988090-272x161.jpeg',
                type: 'Bicycling',
                name: 'Road bike manual on how to be a champion',
                duration: '6 hours',
                price: '20$',
                genre: 'Exsercise'
            },
            {
                photo: './img/photo-1416339134316-0e91dc9ded92-scaled-272x161.jpeg',
                type: 'Communication',
                name: 'Design instruments for communication',
                duration: '5 hours',
                price: '70$',
                genre: 'Art'
            },
            {
                photo: './img/12345-1-272x161.png',
                type: 'Nvidia',
                name: 'Nvidia and EU4 Technologies practice',
                duration: '6 hours',
                price: 'Free',
                genre: 'Photography'
            },
            {
                photo: './img/cathryn-lavery-67852-unsplash-272x161.jpg',
                type: 'Art',
                name: 'Make your concept right and beautiful',
                duration: '',
                stars: './img/3star-solid.png',
                price: '70$',
                genre: 'Art'
            },
            {
                photo: './img/jakob-owens-198234-unsplash-min-1-272x161.png',
                type: 'Documentary',
                name: 'How to make videos for TV programs',
                duration: '6 hours',
                price: '90$',
                genre: 'Photography'
            }            
        ],
        popularCourseBox: [
            {
                photo: './img/photo-1496307042754-b4aa456c4a2d-272x161.jpeg',
                type: 'Electronic',
                name: 'How to be a DJ? Make electronic music',
                duration: '8 hours',
                price: '49$',
                genre: 'Music'
            },
            {
                photo: './img/photo-1475452779376-caebfb988090-272x161.jpeg',
                type: 'Bicycling',
                name: 'Road bike manual on how to be a champion',
                duration: '6 hours',
                price: '20$',
                genre: 'Exsercise'
            },
            {
                photo: './img/12345-1-272x161.png',
                type: 'Nvidia',
                name: 'Nvidia and EU4 Technologies practice',
                duration: '6 hours',
                price: 'Free',
                genre: 'Photography'
            },
            {
                photo: './img/cathryn-lavery-67852-unsplash-272x161.jpg',
                type: 'Art',
                name: 'Make your concept right and beautiful',
                duration: '',
                stars: './img/3star-solid.png',
                price: '70$',
                genre: 'Art'
            },
            {
                photo: './img/cristian-grecu-762012-unsplash-min-scaled-272x161.jpg',
                type: 'Documentary',
                name: 'How to make beautiful Landscape photos?',
                duration: '6 hours',
                price: '60$',
                genre: 'Photography'
            }
        ],
        footerPages: [
            {
                page: 'Blog'
            },
            {
                page: 'Home'
            },
            {
                page: 'Shorcuts'
            },
            {
                page: 'Courses'
            },
            {
                page: 'Membership'
            },
            {
                page: 'Typhography'
            },
        ]
    },
    methods: {
    }
 }); // <-- END VUE



//  Gestione animazione JUMBOTRON
let controller;
function animateHeaderJumbo() {
    // Inizializzazione controller
    controller = new ScrollMagic.Controller()
    // Selezione elementi DOM necessari per l'animazione
        const header = document.querySelector('header');
        const jumboText = document.querySelector('.jumbo-text');
        const jumboImg = document.querySelector('.jumbo-img');
        const slideTimeline = gsap.timeline({
            defaults: { duration: 1, ease: 'slow' }
        });
        slideTimeline.fromTo(header, { y: '-150%' }, { y: '0%' });
        slideTimeline.fromTo(jumboImg, { x: '150%' }, { x: '0%' });
        slideTimeline.fromTo(jumboText, { x: '-150%' }, { x: '0%'}, '-=1');
}
animateHeaderJumbo();

 