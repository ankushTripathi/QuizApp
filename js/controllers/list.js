app.controller('listCtrl',function(){

    var vd = this;
    vd.data = PythonData;

    vd.activeData = {};

    vd.activePython = function(python){
        vd.activeData = python;
    }

});

var PythonData = [
        {
            name: "African Rock Python",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Python_natalensis_G._J._Alexander.JPG/240px-Python_natalensis_G._J._Alexander.JPG",
            locations: " sub-Saharan Africa",
            size: " exceed 6 m (20 ft) and weigh 91 kg (201 lb)",
            diet: " animals up to the size of antelope, occasionally even crocodiles",

            description:"Africa's largest snake and one of the six largest snake species in the world.The snake is widely feared, though it very rarely kills humans. Although the snake is not endangered, it does face threats from habitat reduction and hunting.The African rock python's body is thick and covered with colored blotches, often joining up in a broad, irregular stripe. Body markings vary between brown, olive, chestnut, and yellow, but fade to white on the underside. The head is triangular and is marked on top with a dark brown “spear-head” outlined in buffy yellow. Teeth are many, sharp, and backwardly curved.Under the eye, there is a distinctive triangular marking, the subocular mark.[5] Like all pythons, the scales of the African rock python are small and smooth.Those around the lips possess heat-sensitive pits, which are used to detect warm-blooded prey, even in the dark. Pythons also possess two functioning lungs, unlike more advanced snakes which have only one, and also have small, visible pelvic spurs, believed to be the vestiges of hind limbs.",
        },
        {
            name: "Indian Python(Python molurus)",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Pratik_jain_dahod_python.JPG/220px-Pratik_jain_dahod_python.JPG",
            locations: " tropic and subtropic areas of the Indian Subcontinent and Southeast Asia",
            size: " 4.6 metres (15.1 ft) in length and  52 kilograms (115 lb).",
            diet: "mammals, birds and reptiles, but seem to prefer mammals",
            description:"Python molurus is a large nonvenomous python species.It is known by the common names Indian python,black-tailed python and Indian rock python. The species is limited to Southern Asia.Locomotion is usually rectilinear, with the body moving in a straight line.The color pattern is whitish or yellowish with the blotched patterns varying from shades of tan to dark brown. This varies with terrain and habitat. Specimens from the hill forests of Western Ghats and Assam are darker, while those from the Deccan Plateau and East Coast are usually lighter. Roused to activity on sighting prey, the snake will advance with a quivering tail and lunge with an open mouth. Live prey is constricted and killed. One or two coils are used to hold it in a tight grip. The prey, unable to breathe, succumbs and is subsequently swallowed head first. After a heavy meal, they are disinclined to move.After a heavy meal, an individual may fast for weeks, the longest recorded duration being 2 years. The python can swallow prey bigger than its diameter because the jaw bones are not connected.",
        },
      {
            name: " Burmese python",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Python_molurus_%D1%82%D0%B8%D0%B3%D1%80%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D0%B8%D1%82%D0%BE%D0%BD.jpg/220px-Python_molurus_%D1%82%D0%B8%D0%B3%D1%80%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D0%B8%D1%82%D0%BE%D0%BD.jpg",
            locations: " Southern and Southeast Asia,Florida",
            size: "5.74 m (18.8 ft) and  75 kg (165 lb)",
            diet: "  eaten alligators and adult deer in Florida",
            description:"The Burmese python (Python bivittatus) is one of the five largest species of snakes in the world (about the third-largest as measured either by length or weight). It is native to a large variation of tropic and subtropic areas of South and Southeast Asia. Until 2009, it was considered a subspecies of Python molurus, but now is recognized as belonging to a distinct species.They are often found near water and are sometimes semi-aquatic, but can also be found in trees.Burmese pythons are dark-colored snakes with many brown blotches bordered in black down the back. The perceived attractiveness of their skin pattern contributes to their popularity with both reptile keepers and the leather industry.These pythons are excellent swimmers and need a permanent source of water.Burmese pythons are mainly nocturnal rainforest dwellers. When young, they are equally at home on the ground and in trees, but as they gain girth, they tend to restrict most of their movements to the ground.",
        },
        {
            name: "diamond pythons(Morelia spilota)",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Australian-Carpet-Python.jpg/220px-Australian-Carpet-Python.jpg",
            locations: "Australia, New Guinea (Indonesia and Papua New Guinea),",
            size: " 2 to 4 metres (6.6 to 13.1 ft) in length and weighing up to 15 kilograms (33 lb)",
            diet: "consists mainly of small mammals, birds, and lizards.",
            description:"Morelia spilota, commonly referred to as carpet python and diamond pythons.The colouring of Morelia spilota is highly variable, ranging from olive to black with white or cream and gold markings. The patterning may be roughly diamond shaped or have intricate markings made up of light and dark bands on a background of gray or a version of brown.This species is a popular pet among snake enthusiasts.Described as semi-arboreal, they are largely nocturnal, climbing trees and shrubs as well as crossing open areas such as rock faces, forest floors and even roads. However, basking behaviour is commonly observed. They are often found near human habitation where they perform a useful service by eating rats and other vermin. Morelia spilota is known to occur in areas that receive snowfall. Morelia spilota are (semi-arboreal) tree snakes; they do not completely rely on trees, however, and are capable of moving around elsewhere. Morelia spilota are also found in temperate grasslands with hot and dry weather.",
        },     
        {
            name: " scrub python",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/High-Yellow_Sorong_Amethystine_Scrub_Python.jpg/220px-High-Yellow_Sorong_Amethystine_Scrub_Python.jpg",
            locations: "Indonesia",
            size: "  5 m (16.4 ft) 11 kg (24 lb)",
            diet: "birds, bats, rats, possums,",
            description:"Morelia amethistina is a nonvenomous species of snake, known as the amethystine, scrub python, or sanca permata.A typical adult specimen will measure around 2 to 4 m (6.6 to 13.1 ft). Females typically weigh around 15 kg. Males are much smaller and slimmer, averaging at 5.1 kg (11 lb) at maturity, The body is relatively slim, unlike those of many other large members of this family.The specific name, amethistina, is an allusion to the milky iridescent sheen on its scales, which gives it an amethyst-like color.M. amethistina occurs in both bushland and suburbia. In Indonesia and northern tropical Queensland, it is found mostly in rainforests. Warm, humid habitats with good water sources are preferred.In northern Australia and New Guinea, it mostly lives in scrublands.Their diet generally consists of birds, bats, rats, possums, and other small mammals. Larger Australian and Papuan specimens catch and eat wallabies, and cuscus, waiting by creek and river banks for prey seeking drinking water."

        },  

];
