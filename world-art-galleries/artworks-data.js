// Pure data: no logic, no DOM access.
//
// IMPORTANT: "movements" describes the ART MOVEMENT of the piece itself
// (Cubism, Surrealism, Dadaism, etc). This is a completely separate
// vocabulary from ARCHITECTURE_STYLES in galleries-data.js, which describes
// the BUILDING the art hangs in. Brutalism, for example, is an architecture
// style — it must never appear in ART_MOVEMENTS below. Keep these two
// vocabularies separate.

export const ART_MOVEMENTS = [
  { slug: "hellenistic", label: "Hellenistic", gradient: ["#e8e2d0", "#a89968"] },
  { slug: "renaissance", label: "Renaissance", gradient: ["#d9c9a3", "#8a6432"] },
  { slug: "northern-renaissance", label: "Northern Renaissance", gradient: ["#c9d0b8", "#5f6e42"] },
  { slug: "baroque", label: "Baroque", gradient: ["#e8d5b7", "#a97a3f"] },
  { slug: "neoclassicism", label: "Neoclassicism", gradient: ["#e6ded0", "#a08c64"] },
  { slug: "romanticism", label: "Romanticism", gradient: ["#e0c8c0", "#8a4f42"] },
  { slug: "realism", label: "Realism", gradient: ["#d8d4cc", "#6b665c"] },
  { slug: "impressionism", label: "Impressionism", gradient: ["#e6ecd8", "#7a8f4f"] },
  { slug: "post-impressionism", label: "Post-Impressionism", gradient: ["#cfe0e8", "#3f6d8a"] },
  { slug: "fauvism", label: "Fauvism", gradient: ["#f0d0b0", "#c25a2e"] },
  { slug: "expressionism", label: "Expressionism", gradient: ["#e8c8d0", "#8a3f5a"] },
  { slug: "modernism", label: "Modernism", gradient: ["#dfe3e6", "#7c8894"] },
  { slug: "cubism", label: "Cubism", gradient: ["#d8d3c8", "#6b6255"] },
  { slug: "dadaism", label: "Dadaism", gradient: ["#e8dcc8", "#a3742f"] },
  { slug: "surrealism", label: "Surrealism", gradient: ["#e0d0e0", "#7a4f8a"] },
  { slug: "abstract-art", label: "Abstract Art", gradient: ["#d0dce8", "#3f5f8a"] },
  { slug: "abstract-expressionism", label: "Abstract Expressionism", gradient: ["#dcd4e0", "#5f4f7a"] },
  { slug: "minimalism", label: "Minimalism", gradient: ["#e0e0e0", "#8a8a8a"] },
  { slug: "pop-art", label: "Pop Art", gradient: ["#ffd6e0", "#e0457a"] },
  { slug: "conceptual-art", label: "Conceptual Art", gradient: ["#d8dce0", "#4f5a6b"] },
  { slug: "nouveau-realisme", label: "Nouveau Réalisme", gradient: ["#c0d8e8", "#2f6a9a"] },
  { slug: "neo-expressionism", label: "Neo-Expressionism", gradient: ["#e8ccc0", "#a3492f"] },
  { slug: "hyperrealism", label: "Hyperrealism", gradient: ["#e0e4e8", "#5a6470"] },
  { slug: "contemporary-art", label: "Contemporary Art", gradient: ["#e0d8c8", "#8a6a48"] },
  { slug: "ancient-egyptian", label: "Ancient Egyptian", gradient: ["#e6d9b8", "#a8863f"] },
  { slug: "ancient-near-eastern", label: "Ancient Near East", gradient: ["#ddc3a0", "#8f5a3a"] },
  { slug: "ancient-roman", label: "Ancient Roman", gradient: ["#e3d3c4", "#9c5f47"] },
  { slug: "rococo", label: "Rococo", gradient: ["#ecdcd6", "#b5836a"] },
  { slug: "mannerism", label: "Mannerism", gradient: ["#e2d4d8", "#8a5f6e"] },
  { slug: "futurism", label: "Futurism", gradient: ["#d8ddd6", "#54685f"] },
];

export const ARTWORKS = [
  // ---- The Louvre ----
  {
    id: "mona-lisa",
    galleryId: "louvre",
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    year: 1503,
    yearDisplay: "c. 1503–1519",
    movements: ["renaissance"],
    category: "painting",
    medium: "Oil on poplar panel",
    description:
      "A half-length portrait of Lisa Gherardini, wife of a Florentine silk merchant, rendered with da Vinci's sfumato technique — soft, smoke-like transitions between light and shadow that give her expression its famously ambiguous quality.",
    history:
      "Da Vinci carried the unfinished panel with him for years and it entered the French royal collection after his death in 1519. It was a respected but not singularly famous painting until its dramatic theft from the Louvre in 1911 turned it into the most recognized artwork in the world.",
    wikiTitle: "Mona Lisa",
  },
  {
    id: "winged-victory-of-samothrace",
    galleryId: "louvre",
    title: "Winged Victory of Samothrace",
    artist: "Unknown Hellenistic sculptor",
    year: -190,
    yearDisplay: "c. 190 BCE",
    movements: ["hellenistic"],
    category: "sculpture",
    medium: "Parian marble",
    description:
      "A headless, armless marble goddess of victory, caught mid-stride on a ship's prow, her drapery whipped by an invisible wind. The illusion of movement carved into solid stone is what still stops visitors at the top of the Louvre's Daru staircase.",
    history:
      "Discovered in fragments on the island of Samothrace in 1863, it was reassembled and shipped to Paris the same year. It's believed to have originally commemorated a naval victory and stood in a sanctuary overlooking the sea.",
    wikiTitle: "Winged Victory of Samothrace",
  },
  {
    id: "venus-de-milo",
    galleryId: "louvre",
    title: "Venus de Milo",
    artist: "Attributed to Alexandros of Antioch",
    year: -100,
    yearDisplay: "c. 130–100 BCE",
    movements: ["hellenistic"],
    category: "sculpture",
    medium: "Marble",
    description:
      "A larger-than-life depiction of Aphrodite, her lower body wrapped in heavy drapery that slips low on her hips. Her missing arms have fueled two centuries of speculation about what she originally held.",
    history:
      "Unearthed by a farmer on the Greek island of Milos in 1820, she was quickly acquired by France and presented to Louis XVIII, who donated her to the Louvre — where she's remained on view ever since.",
    wikiTitle: "Venus de Milo",
  },
  {
    id: "liberty-leading-the-people",
    galleryId: "louvre",
    title: "Liberty Leading the People",
    artist: "Eugène Delacroix",
    year: 1830,
    yearDisplay: "1830",
    movements: ["romanticism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A bare-breasted allegorical figure of Liberty strides over a barricade of fallen bodies, tricolor flag raised in one hand and a bayoneted musket in the other, leading a ragged crowd of revolutionaries forward.",
    history:
      "Painted to commemorate the July Revolution of 1830 that toppled King Charles X, it was purchased by the French state but considered too inflammatory to display publicly for much of the following two decades.",
    wikiTitle: "Liberty Leading the People",
  },
  {
    id: "raft-of-the-medusa",
    galleryId: "louvre",
    title: "The Raft of the Medusa",
    artist: "Théodore Géricault",
    year: 1818,
    yearDisplay: "1818–1819",
    movements: ["romanticism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A pyramid of desperate, starving survivors clings to a makeshift raft, straining toward a barely visible rescue ship on the horizon — a scene of horror rendered at monumental, nearly 5-by-7-meter scale.",
    history:
      "Based on a real 1816 shipwreck caused by a incompetent, politically-appointed captain, the painting was a scandal that indicted the French government of the day. Géricault studied corpses in the Paris morgue to get the flesh tones right.",
    wikiTitle: "The Raft of the Medusa",
  },
  {
    id: "coronation-of-napoleon",
    galleryId: "louvre",
    title: "The Coronation of Napoleon",
    artist: "Jacques-Louis David",
    year: 1807,
    yearDisplay: "1805–1807",
    movements: ["neoclassicism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "An immense ceremonial scene — over 6 by 9 meters — showing Napoleon crowning his wife Joséphine empress inside Notre-Dame, surrounded by dignitaries, clergy, and his own family, all rendered with cool Neoclassical precision.",
    history:
      "David, Napoleon's official painter, tactfully altered the actual events: the Pope, reduced to a passive onlooker, was originally painted with his hands in his lap until Napoleon insisted David give him a gesture of blessing instead.",
    wikiTitle: "The Coronation of Napoleon",
  },
  {
    id: "wedding-feast-at-cana",
    galleryId: "louvre",
    title: "The Wedding Feast at Cana",
    artist: "Paolo Veronese",
    year: 1563,
    yearDisplay: "1563",
    movements: ["renaissance"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A sprawling, crowded banquet scene reimagining Christ's first miracle — turning water into wine — as a lavish 16th-century Venetian feast, packed with over a hundred figures in extravagant dress.",
    history:
      "At roughly 6.7 by 9.9 meters, it's the largest painting in the Louvre's collection, hanging directly across from the comparatively tiny Mona Lisa. Napoleon's troops seized it from a Venetian monastery in 1797.",
    wikiTitle: "The Wedding Feast at Cana",
  },

  // ---- Museum of Modern Art (MoMA) ----
  {
    id: "starry-night",
    galleryId: "moma",
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    year: 1889,
    yearDisplay: "1889",
    movements: ["post-impressionism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A swirling night sky of cobalt and gold spirals over a quiet village, a dark flame-like cypress tree anchoring the foreground — painted largely from memory and imagination rather than direct observation.",
    history:
      "Van Gogh made it while a voluntary patient at the Saint-Paul-de-Mausole asylum in southern France, working from the view out his barred window. MoMA acquired it in 1941, and it has anchored the collection ever since.",
    wikiTitle: "The Starry Night",
  },
  {
    id: "les-demoiselles-davignon",
    galleryId: "moma",
    title: "Les Demoiselles d'Avignon",
    artist: "Pablo Picasso",
    year: 1907,
    yearDisplay: "1907",
    movements: ["cubism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "Five nude figures in a brothel, their bodies flattened into sharp, angular planes and two faces replaced with mask-like forms inspired by Iberian and African sculpture — a violent break from centuries of perspective painting.",
    history:
      "Picasso worked on it in secret for months and initially kept it hidden even from fellow artists, unsettled by his own experiment. It wasn't publicly exhibited until 1916, nearly a decade later, and is now considered the painting that launched Cubism.",
    wikiTitle: "Les Demoiselles d'Avignon",
  },
  {
    id: "persistence-of-memory",
    galleryId: "moma",
    title: "The Persistence of Memory",
    artist: "Salvador Dalí",
    year: 1931,
    yearDisplay: "1931",
    movements: ["surrealism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "Four melting pocket watches drape over a barren dreamscape, one crawling with ants, another beside a strange fleshy form some read as a distorted self-portrait — a small canvas, barely larger than a sheet of paper, with an outsized cultural footprint.",
    history:
      "Dalí said the soft watches were inspired by watching a wheel of Camembert cheese melt in the sun. MoMA acquired the piece in 1934, a year that also marked Dalí's first major exposure to American audiences.",
    wikiTitle: "The Persistence of Memory",
  },
  {
    id: "campbells-soup-cans",
    galleryId: "moma",
    title: "Campbell's Soup Cans",
    artist: "Andy Warhol",
    year: 1962,
    yearDisplay: "1962",
    movements: ["pop-art"],
    category: "painting",
    medium: "Synthetic polymer paint on 32 canvases",
    description:
      "Thirty-two nearly identical canvases, one for every variety of Campbell's soup sold at the time, each screen-printed with the same deadpan commercial-label precision — mass production presented, without irony, as fine art.",
    history:
      "Shown first at a Los Angeles gallery in 1962 to a bewildered reception, the work became a founding statement of American Pop Art. MoMA displays the full set of 32 canvases together, exactly as Warhol intended.",
    wikiTitle: "Campbell's Soup Cans",
  },
  {
    id: "christinas-world",
    galleryId: "moma",
    title: "Christina's World",
    artist: "Andrew Wyeth",
    year: 1948,
    yearDisplay: "1948",
    movements: ["realism"],
    category: "painting",
    medium: "Tempera on panel",
    description:
      "A woman in a pale pink dress lies in a dry field, propped up on one arm, gazing up a long slope toward a weathered farmhouse in the distance — her twisted posture only later reveals itself as a study in physical struggle, not repose.",
    history:
      "The woman is Christina Olson, Wyeth's neighbor in Maine, who had lost the use of her legs to a degenerative condition and dragged herself across the grounds by her arms. MoMA bought the painting the same year it was completed.",
    wikiTitle: "Christina's World",
  },
  {
    id: "dance-i",
    galleryId: "moma",
    title: "Dance (I)",
    artist: "Henri Matisse",
    year: 1909,
    yearDisplay: "1909",
    movements: ["fauvism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "Five nude figures, reduced to flat orange-red silhouettes, join hands in a wild circular dance against fields of pure blue sky and green earth — color used not to describe the world but to charge it with energy.",
    history:
      "This is Matisse's preliminary study for a much larger mural commission from Russian collector Sergei Shchukin; the finished, even more intensely colored version now hangs in the State Hermitage Museum.",
    wikiTitle: "Dance (I)",
  },
  {
    id: "one-number-31",
    galleryId: "moma",
    title: "One: Number 31, 1950",
    artist: "Jackson Pollock",
    year: 1950,
    yearDisplay: "1950",
    movements: ["abstract-expressionism"],
    category: "painting",
    medium: "Oil and enamel on canvas",
    description:
      "A monumental, nearly 9-meter-wide field of dripped and flung black, white, and rust-colored paint, layered with no single focal point — meant to be experienced by standing close enough that it fills the entire field of vision.",
    history:
      "Pollock made it by laying the raw canvas flat on his studio floor and moving around and over it, flicking paint from sticks and hardened brushes rather than touching canvas to brush in the traditional sense.",
    wikiTitle: "One: Number 31, 1950",
  },

  // ---- Uffizi Gallery ----
  {
    id: "birth-of-venus",
    galleryId: "uffizi",
    title: "The Birth of Venus",
    artist: "Sandro Botticelli",
    year: 1485,
    yearDisplay: "c. 1485",
    movements: ["renaissance"],
    category: "painting",
    medium: "Tempera on canvas",
    description:
      "A nude Venus stands on an open scallop shell as she drifts ashore, her modesty covered only by her own windblown hair, while attendants rush to wrap her in a flowered cloak — one of the first large-scale nude female figures in Western painting since antiquity.",
    history:
      "Likely commissioned by the Medici family, the painting draws on classical poetry describing Venus's birth from sea foam. It was painted on canvas rather than the more common wood panel, unusual for its time.",
    wikiTitle: "The Birth of Venus",
  },
  {
    id: "primavera",
    galleryId: "uffizi",
    title: "Primavera",
    artist: "Sandro Botticelli",
    year: 1480,
    yearDisplay: "c. 1480",
    movements: ["renaissance"],
    category: "painting",
    medium: "Tempera on panel",
    description:
      "Nine mythological figures — Venus, the Three Graces, Mercury, and more — gather in an orange grove dense with over 500 individually botanically accurate plant species, all frozen mid-gesture in an allegory of spring.",
    history:
      "Painted for a member of the Medici family, its exact program of meaning has never been fully agreed upon by scholars, which has only fed centuries of continued fascination with the painting.",
    wikiTitle: "Primavera (Botticelli)",
  },
  {
    id: "doni-tondo",
    galleryId: "uffizi",
    title: "Doni Tondo",
    artist: "Michelangelo",
    year: 1506,
    yearDisplay: "c. 1506–1508",
    movements: ["renaissance"],
    category: "painting",
    medium: "Tempera on panel",
    description:
      "The Holy Family twists together in a tight, sculptural knot at the center of a circular panel, with a group of nude youths lounging in the background — Michelangelo painting bodies the way he carved them, as muscular forms in space.",
    history:
      "Commissioned to celebrate a Florentine banker's marriage, it's the only easel painting by Michelangelo, a sculptor first and foremost, that survives in a fully finished state.",
    wikiTitle: "Doni Tondo",
  },
  {
    id: "annunciation-leonardo",
    galleryId: "uffizi",
    title: "Annunciation",
    artist: "Leonardo da Vinci",
    year: 1474,
    yearDisplay: "c. 1472–1476",
    movements: ["renaissance"],
    category: "painting",
    medium: "Oil and tempera on panel",
    description:
      "The angel Gabriel kneels before a serene Mary in a walled garden, delivering the news of her divine pregnancy, while a meticulously rendered landscape of hazy blue mountains recedes into the distance behind them.",
    history:
      "Painted while Leonardo was still in his twenties, likely with contributions from his teacher Verrocchio's workshop, it already shows his early command of atmospheric perspective and closely observed botanical detail.",
    wikiTitle: "Annunciation (Leonardo)",
  },
  {
    id: "venus-of-urbino",
    galleryId: "uffizi",
    title: "Venus of Urbino",
    artist: "Titian",
    year: 1538,
    yearDisplay: "1538",
    movements: ["renaissance"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A nude woman reclines on a rumpled bed, gazing directly out at the viewer with unusual frankness, while maids search a chest in the background — a domestic Venetian bedroom recast, through her title alone, as the goddess of love.",
    history:
      "Its casual, direct sensuality — a marked departure from the mythological distance of earlier reclining nudes — made it hugely influential; Manet's controversial Olympia, three centuries later, directly quotes its pose.",
    wikiTitle: "Venus of Urbino",
  },
  {
    id: "medusa-caravaggio",
    galleryId: "uffizi",
    title: "Medusa",
    artist: "Caravaggio",
    year: 1597,
    yearDisplay: "c. 1597",
    movements: ["baroque"],
    category: "painting",
    medium: "Oil on canvas mounted on a wooden shield",
    description:
      "Painted on a convex ceremonial shield, Medusa's severed head shrieks in the very instant of decapitation, snakes still writhing, blood still spraying — a moment of maximum shock rendered with startling physical immediacy.",
    history:
      "Caravaggio reportedly used his own face as the model for Medusa's terrified expression, studying it in a mirror. The shield was a gift from a cardinal to Ferdinando I de' Medici, Grand Duke of Tuscany.",
    wikiTitle: "Medusa (Caravaggio)",
  },

  // ---- State Hermitage Museum ----
  {
    id: "danae",
    galleryId: "hermitage",
    title: "Danaë",
    artist: "Rembrandt",
    year: 1636,
    yearDisplay: "1636, reworked c. 1640s–1650s",
    movements: ["baroque"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A nude woman reclines on a canopied bed, one arm raised in welcome toward an unseen golden light entering the room — the mythological princess Danaë, receiving Zeus disguised as a shower of gold.",
    history:
      "Rembrandt continued reworking the painting years after its initial completion. In 1985, a visitor threw sulfuric acid on the canvas and slashed it twice with a knife; a painstaking twelve-year restoration returned it to public view in 1997.",
    wikiTitle: "Danaë (Rembrandt)",
  },
  {
    id: "return-of-the-prodigal-son",
    galleryId: "hermitage",
    title: "The Return of the Prodigal Son",
    artist: "Rembrandt",
    year: 1668,
    yearDisplay: "c. 1668",
    movements: ["baroque"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A ragged, barefoot son kneels into his father's embrace, his shaved head and worn sandals speaking of the poverty he's returned from, while the father's weathered hands rest on his back with quiet, unshowy tenderness.",
    history:
      "Painted in the final years of Rembrandt's life, after his own bankruptcy and personal losses, it's widely read as one of his most emotionally direct and autobiographical late works.",
    wikiTitle: "The Return of the Prodigal Son (Rembrandt)",
  },
  {
    id: "benois-madonna",
    galleryId: "hermitage",
    title: "Benois Madonna",
    artist: "Leonardo da Vinci",
    year: 1478,
    yearDisplay: "c. 1478–1480",
    movements: ["renaissance"],
    category: "painting",
    medium: "Oil on canvas, transferred from panel",
    description:
      "A young Mary, still almost girlish, laughs as she offers a small flower to the infant Christ on her lap, who studies it with intense, serious focus — a moment of ordinary maternal play rendered with Leonardo's early, careful naturalism.",
    history:
      "One of only two paintings in the Hermitage firmly attributed to Leonardo, it takes its name from the Benois family, who owned it before it was acquired by the museum in 1914.",
    wikiTitle: "Benois Madonna",
  },
  {
    id: "madonna-litta",
    galleryId: "hermitage",
    title: "Madonna Litta",
    artist: "Leonardo da Vinci (workshop)",
    year: 1490,
    yearDisplay: "c. 1490–1491",
    movements: ["renaissance"],
    category: "painting",
    medium: "Tempera on canvas, transferred from panel",
    description:
      "Mary nurses the infant Christ in profile against a dark, plain background and a pair of small arched windows, her downcast eyes and softly modeled features typical of Leonardo's sfumato approach to the sacred.",
    history:
      "Named for the Litta family of Milan, who once owned it, the attribution has long been debated among scholars, with many crediting significant workshop involvement alongside Leonardo's own hand.",
    wikiTitle: "Madonna Litta",
  },
  {
    id: "the-lute-player",
    galleryId: "hermitage",
    title: "The Lute Player",
    artist: "Caravaggio",
    year: 1596,
    yearDisplay: "c. 1596",
    movements: ["baroque"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "An androgynous young musician sits before sheet music, fruit, and a vase of flowers, mid-note on a lute — every petal, string, and drop of dew on the fruit rendered with the same startling clarity as the figure's face.",
    history:
      "Caravaggio painted several versions of this subject for different patrons; this one, with its exceptionally detailed still life, is generally considered the finest and entered the Hermitage's collection in the 1800s.",
    wikiTitle: "The Lute Player (Caravaggio)",
  },
  {
    id: "dance-ii",
    galleryId: "hermitage",
    title: "The Dance",
    artist: "Henri Matisse",
    year: 1910,
    yearDisplay: "1910",
    movements: ["fauvism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "Five figures, flattened to pure vermilion silhouettes, whirl hand-in-hand across a mural-scaled canvas of green earth and blue sky — a larger, even more saturated realization of the composition Matisse first tested in Dance (I).",
    history:
      "Commissioned by Russian textile magnate Sergei Shchukin as one of a pair with Music, it was considered so radical that Shchukin briefly hesitated before installing it in his Moscow mansion's stairwell.",
    wikiTitle: "The Dance (Matisse)",
  },

  // ---- Rijksmuseum ----
  {
    id: "night-watch",
    galleryId: "rijksmuseum",
    title: "The Night Watch",
    artist: "Rembrandt",
    year: 1642,
    yearDisplay: "1642",
    movements: ["baroque"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A civic militia company bursts into motion — muskets raised, a drummer mid-beat, a flag unfurling — instead of standing in the stiff formal rows typical of group portraits of the era. A girl in golden light drifts through the crowd for reasons still debated by scholars.",
    history:
      "Its true title is simply Militia Company of District II under the Command of Captain Frans Banninck Cocq; centuries of grime darkened the varnish enough that 18th-century viewers mistook a daytime scene for a nocturnal one, and the nickname stuck.",
    wikiTitle: "The Night Watch",
  },
  {
    id: "the-milkmaid",
    galleryId: "rijksmuseum",
    title: "The Milkmaid",
    artist: "Johannes Vermeer",
    year: 1658,
    yearDisplay: "c. 1658–1661",
    movements: ["baroque"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A kitchen maid pours milk in an unbroken, silent stream, absorbed entirely in the small task at hand — a moment of total ordinariness elevated by Vermeer's precise handling of light falling across bread, cloth, and a plain whitewashed wall.",
    history:
      "Vermeer painted slowly and left behind fewer than forty known works in his lifetime. Technical analysis has shown he built up the crusty texture of the bread using thick dabs of paint mixed with sand.",
    wikiTitle: "The Milkmaid (Vermeer)",
  },
  {
    id: "woman-reading-a-letter",
    galleryId: "rijksmuseum",
    title: "Woman Reading a Letter",
    artist: "Johannes Vermeer",
    year: 1663,
    yearDisplay: "c. 1663",
    movements: ["baroque"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A pregnant-looking young woman in a blue jacket stands absorbed in a letter, lit by an unseen window to her left, a map of the Netherlands hanging on the wall behind her — the room otherwise stripped of anecdote or distraction.",
    history:
      "X-ray analysis has revealed Vermeer originally included a map with a large ship motif and painted over other background details, gradually simplifying the composition to heighten focus on the woman herself.",
    wikiTitle: "Woman Reading a Letter (Vermeer)",
  },
  {
    id: "self-portrait-as-the-apostle-paul",
    galleryId: "rijksmuseum",
    title: "Self-Portrait as the Apostle Paul",
    artist: "Rembrandt",
    year: 1661,
    yearDisplay: "1661",
    movements: ["baroque"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "An aging Rembrandt looks out from beneath a turban, a sword's hilt and a manuscript tucked into his robe — the traditional attributes of Saint Paul — his lined, unflattering face lit with the same unsparing honesty he gave his other late self-portraits.",
    history:
      "Painted eight years before his death, in a period of financial hardship following his 1656 bankruptcy, it's one of nearly ninety self-portraits Rembrandt made across his career, more than almost any artist before the modern era.",
    wikiTitle: "Self-Portrait as the Apostle Paul",
  },
  {
    id: "the-jewish-bride",
    galleryId: "rijksmuseum",
    title: "The Jewish Bride",
    artist: "Rembrandt",
    year: 1665,
    yearDisplay: "c. 1665–1669",
    movements: ["baroque"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A couple stands close together, the man's arm draped across the woman's chest in a gesture of tender protection, their identities and the scene's exact subject never conclusively settled — possibly a biblical couple, possibly a real pair of newlyweds.",
    history:
      "Van Gogh once said he would give ten years of his life to sit before this painting with just a dry crust of bread for a fortnight. Its actual subject and the reason for its nickname remain genuinely unresolved.",
    wikiTitle: "The Jewish Bride",
  },
  {
    id: "the-merry-family",
    galleryId: "rijksmuseum",
    title: "The Merry Family",
    artist: "Jan Steen",
    year: 1668,
    yearDisplay: "1668",
    movements: ["baroque"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A boisterous, chaotic family dinner spills across the canvas — parents drinking and singing, children mimicking them with pipes and instruments of their own — a comic warning about raising children badly, disguised as a lively tavern scene.",
    history:
      "A banderole in the painting reads 'as the old sing, so the young pipe twitter,' a Dutch proverb about children imitating their parents' bad habits — the moral point of what looks, at first glance, like pure celebration.",
    wikiTitle: "The Happy Family (painting)",
  },

  // ---- Museo del Prado ----
  {
    id: "las-meninas",
    galleryId: "prado",
    title: "Las Meninas",
    artist: "Diego Velázquez",
    year: 1656,
    yearDisplay: "1656",
    movements: ["baroque"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "The young Infanta Margarita stands surrounded by her maids of honor, a dog, and dwarfs, while Velázquez himself appears at a giant canvas on the left — and, in a mirror on the back wall, the king and queen appear too, seemingly standing where the viewer stands.",
    history:
      "The painting's puzzle of who is looking at whom, and from where, has made it one of the most analyzed images in Western art history — Picasso alone made 58 separate variations on it in 1957.",
    wikiTitle: "Las Meninas",
  },
  {
    id: "third-of-may-1808",
    galleryId: "prado",
    title: "The Third of May 1808",
    artist: "Francisco Goya",
    year: 1814,
    yearDisplay: "1814",
    movements: ["romanticism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A man in a white shirt throws his arms wide before a firing squad, lit by a single lantern on the ground, moments from execution — his pose deliberately echoing depictions of the crucifixion, turning a specific atrocity into a universal one.",
    history:
      "It commemorates Spanish civilians executed by Napoleon's occupying troops after an uprising in Madrid. Goya painted it six years after the events, once the Spanish monarchy had been restored, explicitly to memorialize the dead.",
    wikiTitle: "The Third of May 1808",
  },
  {
    id: "garden-of-earthly-delights",
    galleryId: "prado",
    title: "The Garden of Earthly Delights",
    artist: "Hieronymus Bosch",
    year: 1495,
    yearDisplay: "c. 1490–1500",
    movements: ["northern-renaissance"],
    category: "painting",
    medium: "Oil on panel",
    description:
      "A three-panel triptych moving from Eden, to an overcrowded garden of nude figures engaged in increasingly strange pleasures, to a nightmarish hellscape of torture by giant musical instruments and bird-headed demons — one of the most inventively bizarre paintings ever made.",
    history:
      "Its intended meaning is still debated: is it a moral warning against sin, or something closer to a vision of paradise before the Fall? No contemporary document explains the artist's own intentions.",
    wikiTitle: "The Garden of Earthly Delights",
  },
  {
    id: "saturn-devouring-his-son",
    galleryId: "prado",
    title: "Saturn Devouring His Son",
    artist: "Francisco Goya",
    year: 1821,
    yearDisplay: "c. 1819–1823",
    movements: ["romanticism"],
    category: "painting",
    medium: "Mixed media mural, transferred to canvas",
    description:
      "A wild-eyed, monstrous Saturn grips the bloodied body of his child mid-bite, painted directly onto the plaster wall of Goya's own house in raw, thick brushstrokes with almost no color beyond black, brown, and blood-red.",
    history:
      "One of fourteen so-called 'Black Paintings' Goya painted directly onto the walls of his home in his seventies, deaf and disillusioned, never intending them for public exhibition. They were later transferred to canvas and given to the Prado.",
    wikiTitle: "Saturn Devouring His Son",
  },
  {
    id: "triumph-of-death",
    galleryId: "prado",
    title: "The Triumph of Death",
    artist: "Pieter Bruegel the Elder",
    year: 1562,
    yearDisplay: "c. 1562",
    movements: ["northern-renaissance"],
    category: "painting",
    medium: "Oil on panel",
    description:
      "An army of skeletons overruns a scorched landscape, herding the living — kings, lovers, cardinals, peasants — toward a giant coffin-shaped trap, with no one, regardless of rank, spared from the sweep of scythes and skeletal horses.",
    history:
      "Painted in the wake of recurring plague outbreaks across 16th-century Europe, its relentless, almost cartographic cataloguing of ways to die reflects the era's obsession with the Danse Macabre tradition.",
    wikiTitle: "The Triumph of Death",
  },
  {
    id: "las-hilanderas",
    galleryId: "prado",
    title: "Las Hilanderas (The Spinners)",
    artist: "Diego Velázquez",
    year: 1657,
    yearDisplay: "c. 1657",
    movements: ["baroque"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "Working women spin thread in a shadowy foreground workshop, while in a brightly lit background room, a scene from the myth of Arachne — the weaver who challenged Athena — plays out, blurring the line between everyday labor and myth.",
    history:
      "For centuries read simply as a genre scene of a royal tapestry workshop, the painting's mythological background scene was only fully recognized as a retelling of Ovid's Arachne story in the 20th century.",
    wikiTitle: "Las Hilanderas",
  },

  // ---- Solomon R. Guggenheim Museum ----
  {
    id: "composition-8",
    galleryId: "guggenheim-nyc",
    title: "Composition 8",
    artist: "Wassily Kandinsky",
    year: 1923,
    yearDisplay: "1923",
    movements: ["abstract-art"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "Circles, triangles, and sharp diagonal lines collide across the canvas in a precise, almost musical arrangement of pure form and color, entirely free of any recognizable subject — abstraction as its own self-sufficient language.",
    history:
      "Kandinsky considered it a high point of his postwar career and painted it while teaching at the Bauhaus. Solomon Guggenheim bought it in 1929, the first work of fully non-objective art to enter his collection.",
    wikiTitle: "Composition 8",
  },
  {
    id: "mountains-at-saint-remy",
    galleryId: "guggenheim-nyc",
    title: "Mountains at Saint-Rémy",
    artist: "Vincent van Gogh",
    year: 1889,
    yearDisplay: "1889",
    movements: ["post-impressionism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "Jagged mountain ridges roll and buckle like waves under a turbulent sky, painted in the same thick, urgent brushstrokes Van Gogh used for The Starry Night, made during the same stay at the Saint-Paul asylum.",
    history:
      "Part of the Thannhauser Collection, a bequest from dealer Justin K. Thannhauser that brought Van Gogh, Picasso, Degas, and Manet into the Guggenheim's holdings; it has been on view there since 1965.",
    wikiTitle: "Mountains at Saint-Rémy",
  },
  {
    id: "yellow-cow",
    galleryId: "guggenheim-nyc",
    title: "Yellow Cow",
    artist: "Franz Marc",
    year: 1911,
    yearDisplay: "1911",
    movements: ["expressionism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "An enormous, brilliant yellow cow leaps joyfully across a landscape of jagged blue mountains and pink and green fields — Marc's belief that colors carried spiritual and emotional meaning, quite apart from realistic depiction.",
    history:
      "Marc co-founded Der Blaue Reiter (The Blue Rider) group in Munich in 1911 with Kandinsky, using animals as vessels for a purer, less corrupted way of seeing the world than he felt human subjects allowed.",
    wikiTitle: "Yellow Cow",
  },
  {
    id: "black-lines",
    galleryId: "guggenheim-nyc",
    title: "Black Lines",
    artist: "Wassily Kandinsky",
    year: 1913,
    yearDisplay: "1913",
    movements: ["abstract-art"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "Loose washes of color explode across the canvas beneath a scaffolding of sharp black lines, painted the same year Kandinsky pushed furthest into pure abstraction, just before the outbreak of the First World War interrupted his career.",
    history:
      "Kandinsky believed painting could achieve the same direct emotional effect as music without depicting anything at all — a theory he'd laid out a few years earlier in his treatise Concerning the Spiritual in Art.",
    wikiTitle: "Black Lines",
  },
  {
    id: "woman-with-yellow-hair",
    galleryId: "guggenheim-nyc",
    title: "Woman with Yellow Hair",
    artist: "Pablo Picasso",
    year: 1931,
    yearDisplay: "1931",
    movements: ["surrealism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A sleeping woman's face and body dissolve into soft, curving, biomorphic shapes in golden yellow and rose — a tender, quietly sensuous departure from the sharper geometry of Picasso's earlier Cubist work.",
    history:
      "The model was Marie-Thérèse Walter, Picasso's secret lover at the time and the inspiration for many of his softest, most curvilinear paintings of the early 1930s. It came to the Guggenheim through the Thannhauser bequest.",
    wikiTitle: "Woman with Yellow Hair",
  },

  // ---- Hirshhorn Museum and Sculpture Garden ----
  {
    id: "sleeping-muse",
    galleryId: "hirshhorn",
    title: "Sleeping Muse I",
    artist: "Constantin Brancusi",
    year: 1910,
    yearDisplay: "1909–1910",
    movements: ["modernism"],
    category: "sculpture",
    medium: "Bronze",
    description:
      "A woman's head, eyes closed, reduced to a smooth, egg-like bronze oval resting directly on its side — facial features barely suggested rather than modeled, pushing portraiture as close to pure abstract form as it can go while still reading as a face.",
    history:
      "Brancusi made multiple versions of this head in marble and bronze across his career, treating it as an ongoing meditation. It reflects his lifelong effort to carve away everything inessential from a subject.",
    wikiTitle: "Sleeping Muse",
  },
  {
    id: "eleven-am",
    galleryId: "hirshhorn",
    title: "Eleven A.M.",
    artist: "Edward Hopper",
    year: 1926,
    yearDisplay: "1926",
    movements: ["realism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A nude woman sits alone in an armchair by a window, staring out at an unseen street, her stillness and the room's flat morning light building the same quiet sense of urban isolation found throughout Hopper's work.",
    history:
      "Hopper rarely explained his paintings, preferring their mood to remain ambiguous. The scene gives no indication of who the woman is or what she's waiting for, only the specific, unglamorous hour on the clock.",
    wikiTitle: "Eleven A.M.",
  },
  {
    id: "la-county-museum-on-fire",
    galleryId: "hirshhorn",
    title: "The Los Angeles County Museum on Fire",
    artist: "Ed Ruscha",
    year: 1968,
    yearDisplay: "1965–1968",
    movements: ["pop-art"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A cool, poster-flat rendering of LACMA's actual Wilshire Boulevard building, engulfed in orange flame and black smoke rising into an otherwise calm blue sky — deadpan commercial-art style applied to institutional catastrophe.",
    history:
      "Ruscha, associated with the West Coast Pop Art scene, painted several 'burning building' works in the late 1960s, using the detached style of advertising illustration to depict violence with unsettling calm.",
    wikiTitle: "The Los Angeles County Museum on Fire",
  },
  {
    id: "legs",
    galleryId: "hirshhorn",
    title: "Legs",
    artist: "Louise Bourgeois",
    year: 1986,
    yearDisplay: "1986, cast 2008",
    movements: ["surrealism"],
    category: "sculpture",
    medium: "Bronze",
    description:
      "A pair of disembodied legs hangs suspended from the ceiling, cut off just above the hip, in stark bronze relief — a fragment of a body left dangling in space, quietly unsettling in its incompleteness.",
    history:
      "Bourgeois worked with fragmented body parts throughout her long career, often processing childhood trauma and family history through sculptures that read as both vulnerable and defiantly strange.",
    wikiTitle: "Louise Bourgeois",
  },
  {
    id: "untitled-big-man",
    galleryId: "hirshhorn",
    title: "Untitled (Big Man)",
    artist: "Ron Mueck",
    year: 2000,
    yearDisplay: "2000",
    movements: ["hyperrealism"],
    category: "sculpture",
    medium: "Mixed media",
    description:
      "A massive, crouching nude man, over two meters tall, rendered with pore-by-pore hyperrealistic detail — every vein, wrinkle, and hair accounted for — his hunched, wary posture making an already imposing figure feel strangely defenseless.",
    history:
      "Mueck, a former model-maker for film and television, brings that industry's obsessive technical precision to gallery sculpture, deliberately distorting scale (either far larger or far smaller than life) to unsettle a viewer's sense of familiarity with the human body.",
    wikiTitle: "Ron Mueck",
  },

  // ---- Centre Pompidou ----
  {
    id: "fountain",
    galleryId: "pompidou",
    title: "Fountain",
    artist: "Marcel Duchamp",
    year: 1917,
    yearDisplay: "1917 (1964 replica)",
    movements: ["dadaism"],
    category: "sculpture",
    medium: "Porcelain urinal",
    description:
      "A standard porcelain urinal, tipped on its back and signed 'R. Mutt 1917' — submitted to an open exhibition under a pseudonym, rejected by its organizers, and photographed by Alfred Stieglitz before the original disappeared.",
    history:
      "Duchamp's 'readymade' — an ordinary manufactured object designated as art simply by the artist's choice — detonated the idea that art required skilled craftsmanship at all. The original was lost; numbered replicas Duchamp authorized in 1964 are now held by major museums worldwide.",
    wikiTitle: "Fountain (Duchamp)",
  },
  {
    id: "la-blouse-roumaine",
    galleryId: "pompidou",
    title: "La Blouse Roumaine",
    artist: "Henri Matisse",
    year: 1940,
    yearDisplay: "1940",
    movements: ["modernism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A woman poses in a white embroidered blouse patterned with bold red and black folk motifs, her features simplified to a few confident lines and flat planes of color, decades into Matisse's lifelong pursuit of pictorial simplicity.",
    history:
      "The blouse itself is inspired by traditional Romanian folk embroidery, part of a costume collection Matisse kept in his studio and drew on repeatedly for its bold decorative patterning.",
    wikiTitle: "La Blouse Roumaine",
  },
  {
    id: "yellow-red-blue",
    galleryId: "pompidou",
    title: "Yellow-Red-Blue",
    artist: "Wassily Kandinsky",
    year: 1925,
    yearDisplay: "1925",
    movements: ["abstract-art"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A wide canvas divided roughly into three color zones — a yellow rectangle at left, active clusters of small geometric shapes at center, and a calm blue field at right — Kandinsky mapping color and shape into what he considered a precise emotional register.",
    history:
      "Painted during Kandinsky's Bauhaus period, when his style shifted from the looser gestures of his earlier work toward the tighter geometric vocabulary he developed teaching alongside Paul Klee.",
    wikiTitle: "Yellow-Red-Blue",
  },
  {
    id: "the-frame",
    galleryId: "pompidou",
    title: "The Frame",
    artist: "Frida Kahlo",
    year: 1938,
    yearDisplay: "1938",
    movements: ["surrealism"],
    category: "painting",
    medium: "Oil on aluminum, in a painted glass frame",
    description:
      "Kahlo paints her own self-portrait on a sheet of aluminum bought in a Oaxaca market, then frames it herself with a hand-painted glass border of flowers, birds, and folk motifs — the frame itself becoming as much a part of the artwork as the portrait inside it.",
    history:
      "Exhibited in Paris in 1939 with a preface by Surrealist poet André Breton, the painting was purchased by the French state that year — the first work by a 20th-century Mexican artist acquired by a major international museum. Kahlo herself resisted being labeled a Surrealist.",
    wikiTitle: "The Frame (painting)",
  },

  // ---- Guggenheim Museum Bilbao ----
  {
    id: "the-matter-of-time",
    galleryId: "guggenheim-bilbao",
    title: "The Matter of Time",
    artist: "Richard Serra",
    year: 2005,
    yearDisplay: "1994–2005",
    movements: ["minimalism"],
    category: "sculpture",
    medium: "Weathering steel",
    description:
      "Eight enormous spiraling and coiling steel plates, each several meters tall, fill the museum's 130-meter Arcelor Gallery — walking through their curving, disorienting corridors, rather than viewing them from outside, is the actual point of the work.",
    history:
      "Serra's rusted steel plates are left to weather naturally, their surfaces continuing to change color with exposure. This is the only permanent installation in the museum and the largest work in its entire collection.",
    wikiTitle: "The Matter of Time",
  },
  {
    id: "puppy",
    galleryId: "guggenheim-bilbao",
    title: "Puppy",
    artist: "Jeff Koons",
    year: 1992,
    yearDisplay: "1992",
    movements: ["pop-art"],
    category: "sculpture",
    medium: "Stainless steel, soil, and flowering plants",
    description:
      "A 12-meter-tall West Highland terrier, its entire surface covered in thousands of live flowering plants, sits in the plaza outside the museum's entrance — oversized cuteness rendered at a scale that becomes almost overwhelming.",
    history:
      "Originally built for a 1992 exhibition in Germany, Puppy proved popular enough that the Guggenheim acquired it permanently for the Bilbao plaza, where its flowers are replanted several times a year.",
    wikiTitle: "Puppy (Koons)",
  },
  {
    id: "maman",
    galleryId: "guggenheim-bilbao",
    title: "Maman",
    artist: "Louise Bourgeois",
    year: 1999,
    yearDisplay: "1999",
    movements: ["surrealism"],
    category: "sculpture",
    medium: "Bronze, stainless steel, and marble",
    description:
      "A spider over 9 meters tall looms on spindly steel legs, a sac of marble eggs cradled beneath its body — an image of ferocious protectiveness rather than menace, according to the artist's own account of the work.",
    history:
      "Bourgeois said the spider was a tribute to her mother, a tapestry restorer whose weaving work she associated with the spider's own patient, protective craft. Editions of the sculpture stand outside museums worldwide.",
    wikiTitle: "Maman (sculpture)",
  },
  {
    id: "large-blue-anthropometry",
    galleryId: "guggenheim-bilbao",
    title: "Large Blue Anthropometry",
    artist: "Yves Klein",
    year: 1960,
    yearDisplay: "1960",
    movements: ["nouveau-realisme"],
    category: "painting",
    medium: "Pigment on paper mounted on canvas",
    description:
      "Ghostly human silhouettes in a single, intense ultramarine blue press across a wide canvas, left behind not by brushes but by nude models Klein directed to coat themselves in paint and press their bodies directly onto the surface.",
    history:
      "Klein staged these 'living brush' sessions as public performances, conducting the models like an orchestra while a string ensemble played in the room. He patented the specific blue pigment used, known as International Klein Blue.",
    wikiTitle: "Anthropometry (Yves Klein)",
  },
  {
    id: "man-from-naples",
    galleryId: "guggenheim-bilbao",
    title: "Man from Naples",
    artist: "Jean-Michel Basquiat",
    year: 1982,
    yearDisplay: "1982",
    movements: ["neo-expressionism"],
    category: "painting",
    medium: "Mixed media on canvas",
    description:
      "A raw, crowned figure sprawls across the canvas amid scrawled text, anatomical fragments, and Basquiat's characteristic frantic mark-making — raw energy and graffiti-derived urgency colliding with a painter's command of composition.",
    history:
      "Painted at the height of Basquiat's meteoric early-1980s rise from street artist to gallery phenomenon, the work carries the layered, text-and-image density that made his combination of graffiti and Neo-Expressionist painting so influential.",
    wikiTitle: "Jean-Michel Basquiat",
  },
  {
    id: "installation-for-bilbao",
    galleryId: "guggenheim-bilbao",
    title: "Installation for Bilbao",
    artist: "Jenny Holzer",
    year: 1997,
    yearDisplay: "1997",
    movements: ["conceptual-art"],
    category: "installation",
    medium: "LED signs",
    description:
      "Nine tall LED columns stream Holzer's own aphoristic text — fragments in Basque, Spanish, and English — in continuous rivers of red and blue light through one of the museum's ground-floor galleries.",
    history:
      "Holzer has produced text-based public works since the late 1970s, often anonymous-sounding statements ('Protect me from what I want') designed to unsettle viewers used to advertising's more familiar use of the same electronic-signage format.",
    wikiTitle: "Jenny Holzer",
  },

  // ---- National Museum of Western Art (Tokyo) ----
  {
    id: "the-thinker",
    galleryId: "nmwa-tokyo",
    title: "The Thinker",
    artist: "Auguste Rodin",
    year: 1902,
    yearDisplay: "1881–82 model, 1902–03 enlarged, 1926 cast",
    movements: ["realism"],
    category: "sculpture",
    medium: "Bronze",
    description:
      "A muscular nude man sits hunched forward, chin resting on one hand, locked in what looks like agonized concentration — originally conceived as a small figure of the poet Dante contemplating Hell, later enlarged and cast independently.",
    history:
      "This bronze cast belongs to the Matsukata Collection, assembled by Japanese industrialist Matsukata Kōjirō in the early 20th century and now displayed, alongside The Gates of Hell, in the museum's courtyard sculpture garden.",
    wikiTitle: "The Thinker",
  },
  {
    id: "the-gates-of-hell",
    galleryId: "nmwa-tokyo",
    title: "The Gates of Hell",
    artist: "Auguste Rodin",
    year: 1917,
    yearDisplay: "c. 1880–1917 model, 1930–33 cast",
    movements: ["realism"],
    category: "sculpture",
    medium: "Bronze",
    description:
      "A monumental bronze doorway crowded with more than 200 writhing, tormented figures pulled from Dante's Inferno, including a smaller version of The Thinker seated above the lintel, surveying the chaos below.",
    history:
      "Rodin worked on the commission, originally meant as a museum entrance that was never built, for nearly four decades without ever declaring it finished. This cast was the first ever made, at the personal request of collector Matsukata Kōjirō.",
    wikiTitle: "The Gates of Hell",
  },
  {
    id: "water-lilies-nmwa",
    galleryId: "nmwa-tokyo",
    title: "Water Lilies",
    artist: "Claude Monet",
    year: 1916,
    yearDisplay: "1916",
    movements: ["impressionism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "Lily pads and their reflections dissolve into loose, overlapping strokes of green, violet, and pink across the water's surface, with no horizon line or shore to anchor the eye — one of the hundreds of variations Monet painted of his own garden pond at Giverny.",
    history:
      "Monet painted water lilies obsessively for nearly three decades, his eyesight worsening with cataracts as the series grew increasingly abstract. This canvas is part of the Matsukata Collection acquired directly from the artist's circle in the 1910s.",
    wikiTitle: "Water Lilies (Monet series)",
  },

  // ---- Museu de Arte de São Paulo (MASP) ----
  {
    id: "resurrection-of-christ",
    galleryId: "masp",
    title: "The Resurrection of Christ",
    artist: "Raphael",
    year: 1502,
    yearDisplay: "c. 1499–1502",
    movements: ["renaissance"],
    category: "painting",
    medium: "Oil on panel",
    description:
      "Christ rises above his own tomb in a burst of radiant light, banner in hand, while startled soldiers below scramble and shield their eyes — an early work, painted while Raphael was still a teenager working in Umbria.",
    history:
      "One of Raphael's earliest known paintings, it's the only work by the artist held anywhere in the Southern Hemisphere, giving MASP a genuine rarity within its European collection.",
    wikiTitle: "The Resurrection of Christ (Raphael)",
  },
  {
    id: "pink-and-blue",
    galleryId: "masp",
    title: "Pink and Blue (The Cahen d'Anvers Girls)",
    artist: "Pierre-Auguste Renoir",
    year: 1881,
    yearDisplay: "1881",
    movements: ["impressionism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "Two young sisters in matching pale dresses — one in pink, one in blue — stand close together against a soft, undefined background, their identical poses and near-identical faces making the painting read almost as a study in mirrored color rather than portraiture.",
    history:
      "The girls are Elisabeth and Alice Cahen d'Anvers, daughters of a Jewish banking family who commissioned the double portrait. It has been in MASP's collection since 1952 and is often cited as the museum's single most popular painting.",
    wikiTitle: "Pink and Blue (Renoir)",
  },
  {
    id: "a-walk-at-twilight",
    galleryId: "masp",
    title: "A Walk at Twilight",
    artist: "Vincent van Gogh",
    year: 1889,
    yearDisplay: "1889–1890",
    movements: ["post-impressionism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A couple strolls beneath an enormous crescent moon and a looming, flame-shaped cypress tree, the ground painted in the same restless, curling brushstrokes Van Gogh used for the sky in The Starry Night, made during the same period at Saint-Rémy.",
    history:
      "Painted using his recurring cypress and crescent-moon motifs, the canvas is considered one of the strongest works from the final, most productive and most turbulent stretch of Van Gogh's life.",
    wikiTitle: "A Walk at Twilight",
  },

  // ---- Zeitz MOCAA ----
  {
    id: "iimpundulu-zonke-ziyandilandela",
    galleryId: "zeitz-mocaa",
    title: "iimpundulu zonke ziyandilandela",
    artist: "Nicholas Hlobo",
    year: 2011,
    yearDisplay: "2011",
    movements: ["contemporary-art"],
    category: "sculpture",
    medium: "Rubber inner tubing, ribbon, and animal skull",
    description:
      "A massive bird-like form, stitched together from black rubber inner tubing and threaded with colorful ribbon, hovers in the museum's soaring glass-topped atrium — a physical presence built around the impundulu, the shapeshifting 'lightning bird' of Xhosa mythology.",
    history:
      "First made for the 2011 Venice Biennale, the piece's Xhosa title translates roughly to 'all the lightning birds are after me.' It has hung in Zeitz MOCAA's atrium since the museum's 2017 opening, one of the largest single commissions the building has ever housed.",
    wikiTitle: "Nicholas Hlobo",
  },
  {
    id: "midst-of-chaos-opportunity",
    galleryId: "zeitz-mocaa",
    title: "In the Midst of Chaos, There Is Opportunity",
    artist: "Mary Sibande",
    year: 2017,
    yearDisplay: "2017",
    movements: ["contemporary-art"],
    category: "sculpture",
    medium: "Mixed media, fiberglass and fabric",
    description:
      "A larger-than-life figure derived from Sibande's recurring alter ego Sophie, dressed in an elaborate, sculptural purple Victorian-style gown, caught in a dynamic pose that fuses domestic-worker uniform history with a defiant, almost superheroic stance.",
    history:
      "Sibande's Sophie character, based on generations of women in the artist's own family who worked as domestic laborers, reimagines that history through costume and myth rather than documentary portraiture.",
    wikiTitle: "Mary Sibande",
  },
  {
    id: "more-sweetly-play-the-dance",
    galleryId: "zeitz-mocaa",
    title: "More Sweetly Play the Dance",
    artist: "William Kentridge",
    year: 2015,
    yearDisplay: "2015",
    movements: ["contemporary-art"],
    category: "installation",
    medium: "8-channel video installation with sound",
    description:
      "A silhouetted procession of dancers, musicians, refugees, and skeletal figures marches endlessly across eight adjoining screens spanning some 40 meters, set to a live brass band soundtrack — part parade, part funeral march.",
    history:
      "Kentridge, working from his studio in Johannesburg, built the procession from charcoal drawings and torn-paper silhouettes filmed frame by frame, a technique he has used across decades of work grappling with South African history.",
    wikiTitle: "William Kentridge",
  },
  {
    id: "faces-and-phases",
    galleryId: "zeitz-mocaa",
    title: "Faces and Phases",
    artist: "Zanele Muholi",
    year: 2006,
    yearDisplay: "2006–ongoing",
    movements: ["contemporary-art"],
    category: "photography",
    medium: "Silver gelatin print series",
    description:
      "An ever-growing series of black-and-white portraits, each a direct, unadorned gaze into the camera, documenting Black lesbian, transgender, and gender-nonconforming individuals across South Africa — a collective visual archive built one face at a time.",
    history:
      "Muholi, who identifies as a visual activist rather than simply a photographer, began the series in 2006 partly in response to violence against South Africa's LGBTQ+ community, and has continued adding new portraits to it for nearly two decades.",
    wikiTitle: "Zanele Muholi",
  },

  // ---- The Louvre (batch 2) ----
  {
    id: "seated-scribe",
    galleryId: "louvre",
    title: "The Seated Scribe",
    artist: "Unknown Egyptian sculptor",
    year: -2600,
    yearDisplay: "c. 2600–2350 BCE",
    movements: ["ancient-egyptian"],
    category: "sculpture",
    medium: "Painted limestone, rock crystal, copper-arsenic alloy",
    description:
      "A scribe sits cross-legged with a half-unrolled papyrus across his lap, his soft, well-fed body signaling the status that came with literacy in Old Kingdom Egypt. His inlaid rock-crystal eyes, rimmed in copper, catch the light so convincingly that visitors often feel watched.",
    history:
      "Unearthed at Saqqara in 1850, the statue's original owner was never identified, so it has been known simply by his occupation ever since entering the Louvre. Only a handful of officials could read and write in ancient Egypt, making scribes a privileged professional class.",
    wikiTitle: "The Seated Scribe",
  },
  {
    id: "code-of-hammurabi",
    galleryId: "louvre",
    title: "Code of Hammurabi",
    artist: "Unknown Babylonian sculptor",
    year: -1754,
    yearDisplay: "c. 1754 BCE",
    movements: ["ancient-near-eastern"],
    category: "sculpture",
    medium: "Basalt stele",
    description:
      "A 2.25-meter basalt pillar carved with 282 legal rulings in cuneiform script, topped by a relief of King Hammurabi receiving the laws from the seated sun god Shamash. The dense columns of text below cover everything from wages and trade to family and property disputes.",
    history:
      "Carved around 1754 BCE for the Babylonian king Hammurabi, the stele was later carried off as war plunder by an Elamite king and buried at Susa, in modern Iran, where French archaeologists found it in 1902. It remains one of the oldest and most complete legal codes to survive from antiquity.",
    wikiTitle: "Code of Hammurabi",
  },
  {
    id: "lamassu-of-khorsabad",
    galleryId: "louvre",
    title: "Lamassu of Khorsabad",
    artist: "Unknown Assyrian sculptor",
    year: -713,
    yearDisplay: "c. 713–706 BCE",
    movements: ["ancient-near-eastern"],
    category: "sculpture",
    medium: "Gypsum alabaster",
    description:
      "A colossal winged bull with a bearded human head and a horned crown, carved with five legs so that it appears to stand guard when viewed from the front and to stride forward when seen from the side. Once one of a pair flanking a palace gateway, it towers over visitors at more than four meters tall.",
    history:
      "Excavated in 1843–44 from the palace of the Assyrian king Sargon II at Khorsabad, in what is now northern Iraq, these guardian figures were believed to ward off evil from the throne room they protected. The Louvre's Near Eastern Antiquities department holds one of the finest surviving pairs.",
    wikiTitle: "Lamassu",
  },
  {
    id: "great-sphinx-of-tanis",
    galleryId: "louvre",
    title: "Great Sphinx of Tanis",
    artist: "Unknown Egyptian sculptor",
    year: -2600,
    yearDisplay: "c. 2600 BCE (inscribed by later pharaohs)",
    movements: ["ancient-egyptian"],
    category: "sculpture",
    medium: "Pink granite",
    description:
      "Carved from a single block of granite, this lion-bodied, pharaoh-headed sphinx stretches nearly five meters long and is one of the largest sphinxes outside Egypt itself. Later pharaohs added their own names to its surface over the centuries, layering the monument with more than a thousand years of royal history.",
    history:
      "Discovered in 1825 among the ruins of the Temple of Amun at Tanis, it entered the Louvre's collection in 1826 through Jean-François Champollion, the scholar who deciphered Egyptian hieroglyphs. Its exact original owner is debated, since it bears the inscribed names of at least three different kings.",
    wikiTitle: "Great Sphinx of Tanis",
  },
  {
    id: "statue-of-gudea",
    galleryId: "louvre",
    title: "Statue of Gudea, Prince of Lagash",
    artist: "Unknown Sumerian sculptor",
    year: -2120,
    yearDisplay: "c. 2120 BCE",
    movements: ["ancient-near-eastern"],
    category: "sculpture",
    medium: "Diorite",
    description:
      "A seated, smooth-polished diorite figure of Gudea, ruler of the Sumerian city-state of Lagash, hands clasped in a gesture of prayer. The stone's hardness meant the sculptor had to polish rather than carve fine detail, giving the figure its serene, compact solidity.",
    history:
      "Gudea commissioned dozens of statues of himself to be placed in temples as permanent stand-ins for his devotion to the gods; the Louvre now holds the largest group of them, excavated at Tello (ancient Girsu) in southern Iraq. Diorite had to be imported from as far away as Oman, underscoring the wealth Gudea commanded.",
    wikiTitle: "Statues of Gudea",
  },
  {
    id: "borghese-gladiator",
    galleryId: "louvre",
    title: "Borghese Gladiator",
    artist: "Agasias of Ephesus",
    year: -100,
    yearDisplay: "c. 100 BCE",
    movements: ["hellenistic"],
    category: "sculpture",
    medium: "Marble",
    description:
      "A nude male warrior lunges forward mid-combat, shield arm raised, in a pose so anatomically taut it was copied by generations of art students. Despite the traditional name, the figure is now understood to be a foot soldier fighting a mounted opponent, not a gladiator at all.",
    history:
      "Signed on its base by the otherwise-unrecorded sculptor Agasias, it was unearthed before 1611 near Anzio, Italy, on the site of a seaside palace once owned by the emperor Nero. It became one of the most admired and reproduced sculptures of the 18th century before entering the Louvre with the rest of the Borghese collection.",
    wikiTitle: "Borghese Gladiator",
  },
  {
    id: "diana-of-versailles",
    galleryId: "louvre",
    title: "Diana of Versailles",
    artist: "Roman copy after Leochares",
    year: 100,
    yearDisplay: "1st–2nd century CE (after a Greek bronze of c. 325 BCE)",
    movements: ["ancient-roman"],
    category: "sculpture",
    medium: "Marble",
    description:
      "The huntress goddess Diana strides forward with a deer at her side, her raised arm once reaching to draw an arrow from a quiver on her back. The sense of forward motion, frozen mid-stride, gives the marble an unusually dynamic silhouette for a cult statue.",
    history:
      "A Roman copy of a lost bronze attributed to the Greek sculptor Leochares, it was gifted to King Henry II of France by Pope Paul IV in 1556 and later gave its name to a gallery at the Palace of Versailles before settling permanently at the Louvre.",
    wikiTitle: "Diana of Versailles",
  },
  {
    id: "sleeping-hermaphroditus",
    galleryId: "louvre",
    title: "Sleeping Hermaphroditus",
    artist: "Unknown Roman sculptor, mattress by Gian Lorenzo Bernini",
    year: 100,
    yearDisplay: "2nd century CE (mattress added 1620)",
    movements: ["ancient-roman"],
    category: "sculpture",
    medium: "Marble",
    description:
      "Viewed from one side, the reclining figure reads as a sleeping woman; walk around it and the body reveals male anatomy as well, a deliberate surprise rooted in the myth of Hermaphroditus. The illusion is heightened by the marble mattress beneath the figure, carved a full generation later to look convincingly soft and dented under the sleeper's weight.",
    history:
      "A Roman copy of a lost Hellenistic bronze, it was found near Santa Maria della Vittoria in Rome in 1618 and entered the Borghese collection, where the young Gian Lorenzo Bernini carved its uncannily lifelike mattress. Napoleon's brother-in-law sold it to France in 1807, and it has been in the Louvre since 1809.",
    wikiTitle: "Sleeping Hermaphroditus",
  },
  {
    id: "dying-slave",
    galleryId: "louvre",
    title: "The Dying Slave",
    artist: "Michelangelo",
    year: 1513,
    yearDisplay: "1513–1516",
    movements: ["renaissance"],
    category: "sculpture",
    medium: "Marble",
    description:
      "A young male nude sinks into what looks like a deep, untroubled sleep, one arm raised behind his head, his body only half-emerged from the block of marble it was carved from. The unfinished roughness around his base contrasts with the polished smoothness of his torso.",
    history:
      "Carved for the never-completed tomb of Pope Julius II, Michelangelo gave both this figure and its companion, the Rebellious Slave, to his host Roberto Strozzi around 1546 as thanks for hospitality during an illness. Strozzi later gifted them to the French king, and they have remained in France ever since.",
    wikiTitle: "Dying Slave",
  },
  {
    id: "rebellious-slave",
    galleryId: "louvre",
    title: "The Rebellious Slave",
    artist: "Michelangelo",
    year: 1513,
    yearDisplay: "1513",
    movements: ["renaissance"],
    category: "sculpture",
    medium: "Marble",
    description:
      "Twisting hard against unseen bonds, this figure's whole body is thrown into strain, muscles clenched and head thrown back, in stark contrast to the serene pose of its companion piece, the Dying Slave. The unresolved tension of the pose has made it one of the most studied examples of Michelangelo's unfinished, \"non-finito\" carving style.",
    history:
      "Like the Dying Slave, it was originally intended for Pope Julius II's tomb and never installed there; Michelangelo instead gave both sculptures away to a Florentine host in Rome. They passed through French royal hands before becoming permanent fixtures of the Louvre's sculpture collection.",
    wikiTitle: "Rebellious Slave",
  },
  {
    id: "psyche-revived-by-cupids-kiss",
    galleryId: "louvre",
    title: "Psyche Revived by Cupid's Kiss",
    artist: "Antonio Canova",
    year: 1787,
    yearDisplay: "1787–1793",
    movements: ["neoclassicism"],
    category: "sculpture",
    medium: "Marble",
    description:
      "Cupid cradles the lifeless Psyche in his arms, his wings spread wide as he leans down to revive her with a kiss, her arms curving up around his head in a composition built almost entirely from crossing diagonals. The cool, polished marble somehow reads as tender rather than cold.",
    history:
      "Commissioned in 1787 by a Scottish colonel who never took delivery, the finished group eventually passed to Napoleon's brother-in-law Joachim Murat before entering the Louvre in 1824. It remains one of the most reproduced Neoclassical sculptures in the world.",
    wikiTitle: "Psyche Revived by Cupid's Kiss",
  },
  {
    id: "oath-of-the-horatii",
    galleryId: "louvre",
    title: "Oath of the Horatii",
    artist: "Jacques-Louis David",
    year: 1784,
    yearDisplay: "1784–1785",
    movements: ["neoclassicism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "Three brothers raise their arms in unison toward their father, swearing to fight to the death for Rome, while the women of their family collapse in grief off to the side. The rigid verticals of the arches behind them echo the brothers' resolve, set against the women's slumped, curving despair.",
    history:
      "Painted in Rome and shown at the 1785 Salon, the painting became an instant sensation and a rallying image of civic duty and self-sacrifice just years before the French Revolution, even though it was commissioned by the royal government it would later come to symbolize opposing.",
    wikiTitle: "Oath of the Horatii",
  },
  {
    id: "intervention-of-the-sabine-women",
    galleryId: "louvre",
    title: "The Intervention of the Sabine Women",
    artist: "Jacques-Louis David",
    year: 1799,
    yearDisplay: "1799",
    movements: ["neoclassicism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "Hersilia throws herself between her Roman husband and her Sabine father as their armies clash, babies placed on the ground between the combatants to force a stop to the fighting. David staged the male warriors nearly nude, in the manner of classical statuary, to emphasize the timelessness of the plea for peace.",
    history:
      "David began the painting in prison after his estranged wife visited him following the fall of Robespierre, conceiving it as a tribute to her and an allegory for national reconciliation after the Terror. Its 1799 exhibition drew 50,000 paying visitors, an extraordinary number for the time.",
    wikiTitle: "The Intervention of the Sabine Women",
  },
  {
    id: "grande-odalisque",
    galleryId: "louvre",
    title: "Grande Odalisque",
    artist: "Jean-Auguste-Dominique Ingres",
    year: 1814,
    yearDisplay: "1814",
    movements: ["neoclassicism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A reclining concubine turns to look over her bare back at the viewer, her elongated spine and hips stretched well beyond anatomical accuracy in service of a single unbroken curve. Critics at the time complained she seemed to have extra vertebrae, but the distortion is exactly what gives the pose its languid sweep.",
    history:
      "Commissioned by Napoleon's sister, Queen Caroline Murat of Naples, and completed in 1814, the painting's cool departure from academic realism marked a turning point for Ingres and signaled the pull that Romantic and Orientalist subject matter would exert on even the most classically trained painters.",
    wikiTitle: "Grande Odalisque",
  },
  {
    id: "the-turkish-bath",
    galleryId: "louvre",
    title: "The Turkish Bath",
    artist: "Jean-Auguste-Dominique Ingres",
    year: 1862,
    yearDisplay: "1862",
    movements: ["neoclassicism"],
    category: "painting",
    medium: "Oil on canvas, mounted on wood",
    description:
      "Dozens of nude women crowd a harem bathhouse in a composition Ingres crammed into a circular tondo, packing overlapping bodies, mirrors, and instruments into a claustrophobic, dreamlike density. He was in his eighties when he finished it, still refining the same voluptuous curves he had painted for half a century.",
    history:
      "Ingres based the scene partly on a published 1717 account of a Turkish harem by the English traveler Lady Mary Wortley Montagu, though he had never visited one himself. First sold into a diplomat's private erotica collection, the painting only entered the Louvre in 1911 as a gift funded by public subscription.",
    wikiTitle: "The Turkish Bath",
  },
  {
    id: "death-of-sardanapalus",
    galleryId: "louvre",
    title: "The Death of Sardanapalus",
    artist: "Eugène Delacroix",
    year: 1827,
    yearDisplay: "1827",
    movements: ["romanticism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A besieged Assyrian king reclines on his bed ordering the destruction of everything he owns, including his horses, treasures, and concubines, rather than let them fall to the enemy. The canvas is a churning diagonal of red drapery, flailing limbs, and gleaming gold, painted with almost violent brushwork.",
    history:
      "Inspired by Lord Byron's 1821 play about the legendary Assyrian ruler, the painting scandalized the 1827 Salon with its chaotic violence and broke sharply from the calm compositional order of Neoclassicism, cementing Delacroix's reputation as the leading voice of French Romanticism.",
    wikiTitle: "The Death of Sardanapalus",
  },
  {
    id: "napoleon-in-the-pesthouse-at-jaffa",
    galleryId: "louvre",
    title: "Napoleon Visiting the Plague-Stricken at Jaffa",
    artist: "Antoine-Jean Gros",
    year: 1804,
    yearDisplay: "1804",
    movements: ["romanticism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "Napoleon strides into a plague ward and touches the sores of a dying soldier while his own officers recoil, covering their faces against the contagion. The scene deliberately echoes depictions of Christ healing lepers, casting Napoleon's gesture as an act of near-sacred courage.",
    history:
      "Commissioned by Napoleon himself to counter rumors that he had ordered plague-stricken soldiers poisoned during the retreat from Jaffa in 1799, the huge canvas was exhibited at the 1804 Salon as calculated propaganda, though its dramatic intensity helped push French painting toward Romanticism.",
    wikiTitle: "Bonaparte Visiting the Plague Victims of Jaffa",
  },
  {
    id: "officer-of-the-imperial-horse-guards-charging",
    galleryId: "louvre",
    title: "An Officer of the Imperial Horse Guards Charging",
    artist: "Théodore Géricault",
    year: 1812,
    yearDisplay: "1812",
    movements: ["romanticism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A mounted cavalry officer twists back over his shoulder, sword raised, as his horse rears beneath him in a swirl of smoke and motion. Painted when Géricault was only twenty, it was his first exhibited work and immediately announced a break from the calm, static portraiture of the previous generation.",
    history:
      "Shown at the 1812 Salon as a portrait of the artist's friend Alexandre Dieudonné, an officer in Napoleon's Imperial Guard, the painting's dramatic diagonal thrust and loose brushwork made it an early landmark of French Romantic painting, years before Géricault's more famous Raft of the Medusa.",
    wikiTitle: "The Charging Chasseur",
  },
  {
    id: "cheat-with-the-ace-of-diamonds",
    galleryId: "louvre",
    title: "The Cheat with the Ace of Diamonds",
    artist: "Georges de La Tour",
    year: 1636,
    yearDisplay: "c. 1636–1638",
    movements: ["baroque"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A wealthy young man loses at cards while, unseen by him, a card sharp pulls a hidden ace from behind his back and a serving woman and a courtesan exchange a knowing glance. The pointed, theatrical lighting and frozen expressions turn a simple con into a tableau of silent conspiracy.",
    history:
      "La Tour painted two nearly identical versions of this scene; the Louvre's, bought in 1972, is generally considered the finer of the pair, the other being in the Kimbell Art Museum in Texas. Little is known about who commissioned it, though its moralizing subject was a popular one in 17th-century France.",
    wikiTitle: "The Card Sharp with the Ace of Diamonds",
  },
  {
    id: "pilgrimage-to-cythera",
    galleryId: "louvre",
    title: "Pilgrimage to Cythera",
    artist: "Antoine Watteau",
    year: 1717,
    yearDisplay: "1717",
    movements: ["rococo"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "Couples in silk finery linger on a wooded hillside before departing by golden barge for Cythera, the mythical birthplace of Venus, cupids fluttering above them in hazy afternoon light. The painting invented an entire genre, the fête galante, of aristocratic figures at leisurely, idealized outdoor gatherings.",
    history:
      "Watteau submitted the painting to the French Royal Academy in 1717 as his reception piece, and its dreamy, theatrical treatment of courtship helped define the light, ornamental Rococo style that dominated French art for the following decades.",
    wikiTitle: "The Embarkation for Cythera",
  },
  {
    id: "the-lacemaker-vermeer",
    galleryId: "louvre",
    title: "The Lacemaker",
    artist: "Johannes Vermeer",
    year: 1669,
    yearDisplay: "c. 1669–1671",
    movements: ["baroque"],
    category: "painting",
    medium: "Oil on canvas, mounted on panel",
    description:
      "A young woman bends in total concentration over a bobbin-lace pillow, her yellow bodice glowing against a plain background reduced almost to abstraction. At under 25 centimeters tall, it is the smallest of all Vermeer's paintings, yet one of his most intensely focused.",
    history:
      "Vermeer may have studied the scene through a camera obscura, since the deliberately blurred foreground threads mimic an out-of-focus lens in a way unusual for Dutch painting of the era. It entered the Louvre in 1870 and was reportedly considered by Renoir to be the most beautiful painting in the world.",
    wikiTitle: "The Lacemaker (Vermeer)",
  },
  {
    id: "virgin-of-chancellor-rolin",
    galleryId: "louvre",
    title: "The Virgin of Chancellor Rolin",
    artist: "Jan van Eyck",
    year: 1435,
    yearDisplay: "c. 1435",
    movements: ["northern-renaissance"],
    category: "painting",
    medium: "Oil on panel",
    description:
      "The Burgundian chancellor Nicolas Rolin kneels in prayer before the Virgin and Child, dressed in sumptuous brocade and framed by an elaborately tiled loggia that opens onto a panoramic river landscape. Van Eyck renders every fold of fabric and distant rooftop with the same obsessive, jewel-like precision.",
    history:
      "Painted for Rolin's parish church in Autun around 1435, the panel is one of the earliest examples of a private donor depicted at equal scale beside the Virgin rather than as a small, subordinate figure. It moved to the Louvre in 1805 after Rolin's church burned down.",
    wikiTitle: "Madonna of Chancellor Rolin",
  },
  {
    id: "portrait-of-the-artist-holding-a-thistle",
    galleryId: "louvre",
    title: "Self-Portrait at Twenty-Two",
    artist: "Albrecht Dürer",
    year: 1493,
    yearDisplay: "1493",
    movements: ["northern-renaissance"],
    category: "painting",
    medium: "Oil on parchment, mounted on canvas",
    description:
      "A young Dürer gazes out with self-assured composure, holding a sprig of thistle, a flower historically linked to marital fidelity, in a portrait believed to mark his engagement. It is thought to be the earliest independent self-portrait by any Northern European artist.",
    history:
      "Painted in Strasbourg the year before Dürer married Agnes Frey, the small panel carries a Latin inscription reading \"My affairs follow the course allotted to them on high.\" The Louvre acquired it in 1922.",
    wikiTitle: "Portrait of the Artist Holding a Thistle",
  },
  {
    id: "man-with-a-glove-titian",
    galleryId: "louvre",
    title: "Man with a Glove",
    artist: "Titian",
    year: 1520,
    yearDisplay: "c. 1520",
    movements: ["renaissance"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A young Venetian nobleman leans against a stone ledge, one gloved hand resting easily near a second, ungloved glove, emerging from a dark, undefined background. The sitter's identity has never been confirmed, but the quiet self-possession of his pose made the portrait one of the most influential in European painting.",
    history:
      "Once owned by the executed English king Charles I, the canvas passed through a Cologne banker's collection before reaching Louis XIV and, eventually, the Louvre in 1792. Its loose, atmospheric brushwork became a touchstone for later portraitists from Rembrandt to Van Dyck.",
    wikiTitle: "Man with a Glove",
  },
  {
    id: "la-belle-jardiniere",
    galleryId: "louvre",
    title: "La Belle Jardinière",
    artist: "Raphael",
    year: 1507,
    yearDisplay: "1507",
    movements: ["renaissance"],
    category: "painting",
    medium: "Oil on panel",
    description:
      "The Virgin Mary sits in a flowering meadow with the infant Christ and young John the Baptist gathered close around her knees, the pyramidal grouping borrowed directly from Leonardo da Vinci's compositions. Her modest, almost rustic dress gave the painting its 18th-century nickname, \"the beautiful gardener.\"",
    history:
      "Signed and dated 1507, it was painted during Raphael's Florentine years, when he was closely studying the innovations of Leonardo and Michelangelo, and is regarded as the summit of his early style just before his move to Rome.",
    wikiTitle: "La belle jardinière",
  },
  {
    id: "portrait-of-baldassare-castiglione",
    galleryId: "louvre",
    title: "Portrait of Baldassare Castiglione",
    artist: "Raphael",
    year: 1514,
    yearDisplay: "c. 1514–1515",
    movements: ["renaissance"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "The diplomat and writer Baldassare Castiglione, author of The Book of the Courtier, is shown half-length in muted greys and blacks, his calm gaze meeting the viewer directly. The restrained palette and quiet dignity of the pose owe an evident debt to the Mona Lisa, which Raphael had seen in Rome.",
    history:
      "Painted around 1514–1515 during Raphael's friendship with Castiglione, the portrait became a benchmark for portraiture that later painters including Rembrandt, Rubens, and even Matisse and Cézanne openly admired and studied. Louis XIV acquired it in 1661 from the heirs of Cardinal Mazarin.",
    wikiTitle: "Portrait of Baldassare Castiglione",
  },
  {
    id: "virgin-and-child-with-st-anne",
    galleryId: "louvre",
    title: "The Virgin and Child with Saint Anne",
    artist: "Leonardo da Vinci",
    year: 1503,
    yearDisplay: "c. 1503–1519",
    movements: ["renaissance"],
    category: "painting",
    medium: "Oil on panel",
    description:
      "Mary sits on the lap of her mother, Saint Anne, reaching down toward the infant Christ as he plays with a lamb, the three figures interlocking in a spiraling pyramid of tenderness. The soft, hazy sfumato blurring the landscape behind them is unmistakably Leonardo's.",
    history:
      "Left unfinished at Leonardo's death in 1519, the panel had preoccupied him for years as he reworked the composition through multiple drawn cartoons. It entered the French royal collection, and in 2008 a Louvre curator discovered faint sketches hidden on its reverse side.",
    wikiTitle: "The Virgin and Child with Saint Anne",
  },
  {
    id: "st-john-the-baptist-leonardo",
    galleryId: "louvre",
    title: "St. John the Baptist",
    artist: "Leonardo da Vinci",
    year: 1513,
    yearDisplay: "c. 1513–1516",
    movements: ["renaissance"],
    category: "painting",
    medium: "Oil on walnut panel",
    description:
      "John the Baptist emerges from a wall of darkness, one hand pointing upward toward heaven, his androgynous face lit with the same enigmatic half-smile as the Mona Lisa. The deep chiaroscuro leaves almost nothing of the setting visible, concentrating attention entirely on the figure's ambiguous expression.",
    history:
      "Believed to be Leonardo's last completed painting before his death in 1519, it demonstrates his mature sfumato technique pushed to its furthest extreme. A ten-month cleaning in 2016 removed layers of discolored varnish that had darkened the panel since 1802.",
    wikiTitle: "St. John the Baptist (Leonardo)",
  },

  // ---- MoMA (batch 2) ----
  {
    id: "girl-before-a-mirror",
    galleryId: "moma",
    title: "Girl before a Mirror",
    artist: "Pablo Picasso",
    year: 1932,
    yearDisplay: "March 14, 1932",
    movements: ["cubism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A young woman gazes into a mirror, her lit profile rendered in soft pastels while her reflection appears darker, more angular, and almost mask-like. Picasso based the figure on his young lover Marie-Thérèse Walter, splitting her into two simultaneous views in a single canvas.",
    history:
      "Painted in a single day in March 1932, at the height of Picasso's most productive period with Walter, the work entered MoMA's collection in 1938 and, according to the museum's founding director, was a painting Picasso said he preferred over almost anything else he made.",
    wikiTitle: "Girl before a Mirror",
  },
  {
    id: "the-red-studio",
    galleryId: "moma",
    title: "The Red Studio",
    artist: "Henri Matisse",
    year: 1911,
    yearDisplay: "fall 1911",
    movements: ["fauvism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "Matisse coats his entire studio, floor, walls, furniture, in one flat expanse of Venetian red, leaving only his own paintings, sculptures, and ceramics rendered in their true colors and outlined against it. A handless grandfather clock at the center suggests a space where ordinary time has stopped.",
    history:
      "The room had actually been painted in blue, pink, and yellow tones, but Matisse chose to override reality with a single saturated hue, a radical decision that baffled early viewers and only later came to be seen as a founding statement of modern studio painting. MoMA acquired it in 1949.",
    wikiTitle: "The Red Studio",
  },
  {
    id: "the-birth-of-the-world",
    galleryId: "moma",
    title: "The Birth of the World",
    artist: "Joan Miró",
    year: 1925,
    yearDisplay: "late summer–fall 1925",
    movements: ["surrealism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "Miró poured and flung thinned paint across an unevenly primed canvas, letting it soak and pool at random, then added a handful of deliberately placed lines and shapes on top: a balloon, a kite, a floating white-headed figure. The effect suggests something being formed out of pure chance and gesture, a genesis rather than a scene.",
    history:
      "The painting marked Miró's decisive break from his earlier, more detailed style toward a looser, more automatic process linked to the Surrealists' interest in chance and the unconscious. MoMA built a major 2019 exhibition around the canvas.",
    wikiTitle: "The Birth of the World",
  },
  {
    id: "the-menaced-assassin",
    galleryId: "moma",
    title: "The Menaced Assassin",
    artist: "René Magritte",
    year: 1927,
    yearDisplay: "1927",
    movements: ["surrealism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A dressed murderer pauses beside a phonograph, listening to music while a nude, blood-smeared victim lies on a couch behind him, unaware that two bowler-hatted men wait in ambush by the door. Magritte borrows the staging directly from pulp crime films, freezing an absurd, tension-filled narrative mid-scene.",
    history:
      "Inspired by the pre-World War I crime serial Fantômas, this is one of Magritte's largest and most theatrical early Surrealist compositions. After hanging for years in a Belgian coastal casino, it was acquired by MoMA in 1966.",
    wikiTitle: "The Menaced Assassin",
  },
  {
    id: "le-dejeuner-en-fourrure",
    galleryId: "moma",
    title: "Object (Le Déjeuner en fourrure)",
    artist: "Meret Oppenheim",
    year: 1936,
    yearDisplay: "1936",
    movements: ["surrealism"],
    category: "sculpture",
    medium: "Fur-covered cup, saucer, and spoon",
    description:
      "An ordinary porcelain teacup, saucer, and spoon are entirely wrapped in the speckled fur of a Chinese gazelle, transforming a genteel ritual object into something unsettling to imagine putting to your lips. The joke lands precisely because the craftsmanship is so careful and the everyday object so recognizable.",
    history:
      "Oppenheim reportedly made the piece after a café conversation with Pablo Picasso and Dora Maar about covering objects in fur; she bought the cup, saucer, and spoon soon after and wrapped them herself. It became the first work by a woman artist acquired by MoMA for its permanent collection.",
    wikiTitle: "Le Déjeuner en fourrure",
  },
  {
    id: "broadway-boogie-woogie",
    galleryId: "moma",
    title: "Broadway Boogie Woogie",
    artist: "Piet Mondrian",
    year: 1942,
    yearDisplay: "1942–1943",
    movements: ["abstract-art"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "Mondrian breaks his usual solid black grid lines into staccato sequences of red, blue, and yellow squares, creating a flickering, syncopated rhythm across the canvas that mimics both New York traffic and the boogie-woogie jazz he had discovered after moving to the city.",
    history:
      "Painted after Mondrian fled wartime Europe for New York in 1940, it was his final completed painting and a striking departure from the rigid, monochrome grids of his earlier Neoplasticist work, energized by his newfound love of the city and its music.",
    wikiTitle: "Broadway Boogie Woogie",
  },
  {
    id: "woman-i-de-kooning",
    galleryId: "moma",
    title: "Woman I",
    artist: "Willem de Kooning",
    year: 1950,
    yearDisplay: "1950–1952",
    movements: ["abstract-expressionism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A wide-eyed, toothy female figure looms out of slashing, multidirectional brushstrokes, part goddess, part pinup, part nightmare. De Kooning built up and scraped away layers of paint over nearly two years before arriving at this final, aggressively unresolved image.",
    history:
      "The first in a series of six paintings de Kooning made obsessively reworking a single female figure, it startled the art world on its 1953 debut for returning to the human body just as pure abstraction dominated American painting. MoMA's acquisitions committee reportedly found the picture \"quite frightening\" but bought it in 1953 regardless.",
    wikiTitle: "Woman I",
  },
  {
    id: "no-3-no-13-rothko",
    galleryId: "moma",
    title: "No. 3/No. 13 (Magenta, Black, Green on Orange)",
    artist: "Mark Rothko",
    year: 1949,
    yearDisplay: "1949",
    movements: ["abstract-expressionism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "Three soft-edged rectangles of magenta, black, and green float against a glowing orange ground, their blurred boundaries making the color blocks seem to hover just above the canvas surface rather than sit flat on it. The scale is large enough that a viewer standing close is meant to feel enveloped by color alone.",
    history:
      "Painted the year after the death of Rothko's mother, it is an early instance of the stacked, luminous color-field format he would return to for the rest of his career. It entered MoMA's collection through the bequest of Rothko's estate.",
    wikiTitle: "No. 3/No. 13 (Magenta, Black, Green on Orange)",
  },
  {
    id: "vir-heroicus-sublimis",
    galleryId: "moma",
    title: "Vir Heroicus Sublimis",
    artist: "Barnett Newman",
    year: 1950,
    yearDisplay: "1950–1951",
    movements: ["abstract-expressionism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A nearly eighteen-foot expanse of deep red is broken by five narrow vertical \"zips\" of varying width and color, the artist's signature device for structuring an otherwise unbroken field. Newman intended the painting to be viewed up close, so the sheer scale of color surrounds the viewer's entire field of vision.",
    history:
      "Newman's Latin title translates as \"man, heroic and sublime,\" reflecting his ambition to create an overwhelming, almost bodily experience of scale and color rather than a picture to be observed from a distance. It was his first painting at this monumental eight-by-eighteen-foot size.",
    wikiTitle: "Vir Heroicus Sublimis",
  },
  {
    id: "gold-marilyn-monroe",
    galleryId: "moma",
    title: "Gold Marilyn Monroe",
    artist: "Andy Warhol",
    year: 1962,
    yearDisplay: "1962",
    movements: ["pop-art"],
    category: "painting",
    medium: "Silkscreen ink and synthetic polymer paint on canvas",
    description:
      "A single silkscreened image of Marilyn Monroe's face, cropped from a publicity still, floats at the center of an otherwise empty field of hand-painted gold, echoing the gold backgrounds of Byzantine religious icons. The effect turns a Hollywood publicity photograph into something closer to a devotional image.",
    history:
      "Warhol made the painting within months of Monroe's death in August 1962, part of his first-ever New York gallery exhibition of paintings, which sold out entirely and helped establish his reputation. He later donated it to MoMA.",
    wikiTitle: "Gold Marilyn Monroe",
  },
  {
    id: "drowning-girl",
    galleryId: "moma",
    title: "Drowning Girl",
    artist: "Roy Lichtenstein",
    year: 1963,
    yearDisplay: "1963",
    movements: ["pop-art"],
    category: "painting",
    medium: "Oil and synthetic polymer paint on canvas",
    description:
      "A woman sinks beneath a stylized, comic-book wave, a tear on her cheek and a thought bubble declaring, \"I don't care! I'd rather sink than call Brad for help!\" Lichtenstein renders the scene in his signature enlarged Ben-Day dots, blowing a throwaway romance-comic panel up to gallery scale.",
    history:
      "Adapted from a 1962 DC Comics romance title illustrated by Tony Abruzzo, Lichtenstein cropped the original panel to isolate the woman alone against the wave, intensifying its melodrama. MoMA acquired it in 1971, and it remains one of his most reproduced images.",
    wikiTitle: "Drowning Girl",
  },
  {
    id: "flag-jasper-johns",
    galleryId: "moma",
    title: "Flag",
    artist: "Jasper Johns",
    year: 1954,
    yearDisplay: "1954–1955",
    movements: ["pop-art"],
    category: "painting",
    medium: "Encaustic, oil, and collage on fabric mounted on plywood",
    description:
      "Johns built up the American flag's stripes and stars from strips of newspaper and cloth dipped in hot pigmented wax, so the painting's surface stays visibly textured and process-driven rather than smooth. Because the subject is a flat, universally recognized symbol, the painting hovers ambiguously between depicting a flag and simply being one.",
    history:
      "\"It all began... with my painting a picture of an American flag,\" Johns later said of the work that first announced his break from Abstract Expressionist gesture toward cool, everyday imagery, a shift that helped set the stage for Pop Art.",
    wikiTitle: "Flag (painting)",
  },
  {
    id: "bird-in-space-moma",
    galleryId: "moma",
    title: "Bird in Space",
    artist: "Constantin Brâncuși",
    year: 1928,
    yearDisplay: "1928 (this cast)",
    movements: ["modernism"],
    category: "sculpture",
    medium: "Bronze",
    description:
      "A single, unbroken curve of polished bronze rises and tapers to a point, evoking a bird's soaring flight without depicting a single feather, wing, or beak. Brâncuși stripped the subject down until only the pure sensation of upward movement remained.",
    history:
      "Brâncuși made around nine versions of Bird in Space in marble, bronze, and plaster between the 1920s and 1940s; a 1926 bronze cast became the subject of a landmark U.S. customs case after officials refused to classify it as art. MoMA now holds two of the bronze casts.",
    wikiTitle: "Bird in Space",
  },
  {
    id: "i-and-the-village",
    galleryId: "moma",
    title: "I and the Village",
    artist: "Marc Chagall",
    year: 1911,
    yearDisplay: "1911",
    movements: ["cubism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A green-faced man and a large-eyed goat gaze at each other nose to nose, while a tiny milkmaid, an inverted house, and a scythe-carrying peasant float around them in overlapping, dreamlike circles. Chagall fractures the space in a way indebted to Cubism but fills it with the folk memories of his Belarusian childhood rather than geometric still life.",
    history:
      "Painted the year after Chagall settled in Paris, the canvas fuses the avant-garde language he encountered there with nostalgic imagery from the Hasidic village of Vitebsk he had left behind, becoming one of the defining images of his career.",
    wikiTitle: "I and the Village",
  },
  {
    id: "bicycle-wheel-duchamp",
    galleryId: "moma",
    title: "Bicycle Wheel",
    artist: "Marcel Duchamp",
    year: 1951,
    yearDisplay: "1951 (third version, after a lost 1913 original)",
    movements: ["dadaism"],
    category: "sculpture",
    medium: "Metal wheel mounted on painted wood stool",
    description:
      "A plain bicycle wheel is bolted upside down onto a kitchen stool, an ordinary object rendered strange simply by combining it with another and calling it art. Duchamp encouraged viewers to spin the wheel themselves, making it one of the earliest works of kinetic sculpture.",
    history:
      "The original 1913 version, since lost, is considered Duchamp's first readymade and predates his coining of that term by two years; this replica was remade in 1951 for a New York gallery exhibition after the original disappeared.",
    wikiTitle: "Bicycle Wheel",
  },
  {
    id: "water-lilies-moma",
    galleryId: "moma",
    title: "Water Lilies",
    artist: "Claude Monet",
    year: 1914,
    yearDisplay: "1914–1926",
    movements: ["impressionism"],
    category: "painting",
    medium: "Oil on canvas, three panels",
    description:
      "A mural-sized triptych spanning nearly 42 feet submerges the viewer in an unbroken field of water, lily pads, and reflected sky, painted with almost no horizon line to anchor the eye. Monet worked on the panels for over a decade, continually reworking the surface of the pond he had cultivated at his home in Giverny.",
    history:
      "Monet built a large studio specifically to accommodate these mural-scale panels late in his life, part of a project he called his grandes décorations. MoMA acquired this triptych in 1959, becoming the first American museum to hold one of his large-scale water lily panels.",
    wikiTitle: "Water Lilies (Monet series)",
  },
  {
    id: "painting-1946-bacon",
    galleryId: "moma",
    title: "Painting 1946",
    artist: "Francis Bacon",
    year: 1946,
    yearDisplay: "1946",
    movements: ["expressionism"],
    category: "painting",
    medium: "Oil and pastel on linen",
    description:
      "A grinning, dictatorial figure sits beneath an open umbrella, flanked by hanging carcasses arranged in the shape of a crucifixion, his bright yellow boutonniere the only cheerful note in an otherwise menacing composition. Bacon claimed the image emerged almost by accident from stray brushmarks meant to depict a bird landing in a field.",
    history:
      "Painted in the immediate aftermath of World War II, the umbrella and shuttered windows in the background evoke associations with Neville Chamberlain and photographs of Hitler's bunker, though Bacon resisted any single explanation for the picture's menace.",
    wikiTitle: "Painting 1946",
  },
  {
    id: "lobster-trap-and-fish-tail",
    galleryId: "moma",
    title: "Lobster Trap and Fish Tail",
    artist: "Alexander Calder",
    year: 1939,
    yearDisplay: "1939",
    movements: ["abstract-art"],
    category: "sculpture",
    medium: "Painted steel wire and sheet aluminum",
    description:
      "Suspended shapes suggesting a lobster trap, fish, and fins drift and rotate on wires whenever a current of air passes through the room, in one of the earliest mobiles to fully demonstrate the possibilities of Calder's invented art form. No motor drives it; the smallest breath of museum air keeps it turning.",
    history:
      "MoMA commissioned the piece directly for the stairwell of its new 1939 building on West 53rd Street, and it has hung there ever since, making it one of the only artworks in the collection permanently tied to a specific architectural space.",
    wikiTitle: "Lobster Trap and Fish Tail",
  },
  {
    id: "migrant-mother",
    galleryId: "moma",
    title: "Migrant Mother",
    artist: "Dorothea Lange",
    year: 1936,
    yearDisplay: "March 1936",
    movements: ["realism"],
    category: "photography",
    medium: "Gelatin silver print",
    description:
      "A weathered mother stares into the middle distance, two children burying their faces in her shoulders and an infant on her lap, in a migrant labor camp during the depths of the Great Depression. The image's tight framing and the mother's furrowed, anxious expression turned one family's hardship into a symbol for millions.",
    history:
      "Lange photographed Florence Owens Thompson and her children while working for the federal Resettlement Administration; the image was published within days and helped spur emergency food aid to the camp. MoMA holds a gelatin silver print made by Lange herself in 1949.",
    wikiTitle: "Migrant Mother",
  },
  {
    id: "the-steerage",
    galleryId: "moma",
    title: "The Steerage",
    artist: "Alfred Stieglitz",
    year: 1907,
    yearDisplay: "1907",
    movements: ["modernism"],
    category: "photography",
    medium: "Photogravure",
    description:
      "Stieglitz photographed down onto a ship's lower deck, where a gangplank, a raised hat, and a diagonal mast divide the crowded scene of steerage passengers into a tight geometric grid. The composition's flattened, almost abstract structure was as radical as its documentary subject.",
    history:
      "Stieglitz took the photograph while sailing to Europe in first class, after wandering the deck and noticing the compositional order of the crowd below. Published in his journal Camera Work in 1911, it is widely regarded as one of the first fully modernist photographs.",
    wikiTitle: "The Steerage",
  },
  {
    id: "identical-twins-roselle-new-jersey",
    galleryId: "moma",
    title: "Identical Twins, Roselle, New Jersey",
    artist: "Diane Arbus",
    year: 1967,
    yearDisplay: "1966–1967",
    movements: ["contemporary-art"],
    category: "photography",
    medium: "Gelatin silver print",
    description:
      "Two young sisters in matching corduroy dresses, headbands, and tights stand shoulder to shoulder, their nearly identical faces wearing subtly different expressions, one faintly smiling, the other more guarded. The unsettling doubling of the image has made it one of the most instantly recognizable photographs of the twentieth century.",
    history:
      "Arbus photographed the twins at a Christmas party in Roselle, New Jersey, and the image became the centerpiece of her breakthrough inclusion in MoMA's 1967 \"New Documents\" exhibition, which launched her into wider recognition.",
    wikiTitle: "Identical Twins, Roselle, New Jersey, 1967",
  },
  {
    id: "untitled-film-still-21",
    galleryId: "moma",
    title: "Untitled Film Still #21",
    artist: "Cindy Sherman",
    year: 1978,
    yearDisplay: "1978",
    movements: ["contemporary-art"],
    category: "photography",
    medium: "Gelatin silver print",
    description:
      "Sherman poses as a wary young career woman on a city street, styled after a Hitchcock-esque ingénue, in a black-and-white image staged to look exactly like a promotional still from a film that was never made. The fiction is entirely her own invention, costume, makeup, and expression all self-directed.",
    history:
      "This still is part of Sherman's landmark series of 69 photographs made between 1977 and 1980, in which she posed as an array of generic female film characters; MoMA acquired the complete series in 1995.",
    wikiTitle: "Untitled Film Still 21",
  },
  {
    id: "the-song-of-love",
    galleryId: "moma",
    title: "The Song of Love",
    artist: "Giorgio de Chirico",
    year: 1914,
    yearDisplay: "June–July 1914",
    movements: ["surrealism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A surgical rubber glove is pinned beside the plaster head of the classical Apollo Belvedere, a green ball resting on the ground below, all set against an empty arcade with a distant train silhouetted on the horizon. The illogical combination of objects, rendered with flat, dreamlike clarity, creates an unease that has no clear source.",
    history:
      "Painted a full decade before André Breton formally founded Surrealism, this \"metaphysical\" painting was deeply influential on the Surrealists who followed, who saw in de Chirico's uncanny juxtapositions an early blueprint for their own explorations of the unconscious.",
    wikiTitle: "The Song of Love",
  },
  {
    id: "the-palace-at-4am",
    galleryId: "moma",
    title: "The Palace at 4 a.m.",
    artist: "Alberto Giacometti",
    year: 1932,
    yearDisplay: "1932",
    movements: ["surrealism"],
    category: "sculpture",
    medium: "Wood, glass, wire, and string",
    description:
      "A spindly, cage-like structure of thin wooden struts encloses a skeletal bird form, a hanging spine-like shape, and a sheet of glass balanced precariously within its open rooms. The whole fragile construction looks as though it could collapse at the slightest touch.",
    history:
      "Giacometti described the piece as growing out of a six-month relationship with a woman who \"transported my every moment into a state of enchantment,\" calling it a fantastical palace built at night from matchsticks. He gave it to MoMA himself in 1940.",
    wikiTitle: "The Palace at 4 a.m.",
  },
  {
    id: "the-dream-rousseau",
    galleryId: "moma",
    title: "The Dream",
    artist: "Henri Rousseau",
    year: 1910,
    yearDisplay: "1910",
    movements: ["post-impressionism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A nude woman reclines on a Victorian sofa improbably placed in the middle of a dense jungle, surrounded by lions, an elephant, birds, and a snake charmer playing a flute among giant lotus flowers. Rousseau, who never left France, invented the entire tropical scene from imagination, botanical garden visits, and picture books.",
    history:
      "Rousseau's last completed painting before his death in 1910, it depicts his childhood memory of a former Polish lover, Yadwigha, transplanted into a fantastical landscape. Nelson Rockefeller donated it to MoMA to mark the museum's 25th anniversary.",
    wikiTitle: "The Dream (Rousseau)",
  },
  {
    id: "unique-forms-of-continuity-in-space",
    galleryId: "moma",
    title: "Unique Forms of Continuity in Space",
    artist: "Umberto Boccioni",
    year: 1913,
    yearDisplay: "1913 (this cast 1931)",
    movements: ["futurism"],
    category: "sculpture",
    medium: "Bronze",
    description:
      "A faceless, armless figure strides forward, its muscular torso and legs streaming backward into wind-blown, flame-like ridges of bronze that seem to trail behind the body's motion. Boccioni wanted to capture the sensation of movement itself rather than a body caught in a single frozen instant.",
    history:
      "Boccioni died in 1916 without ever seeing the sculpture cast in bronze; the first casts were made fifteen years later, based on his original plaster. It has since become the emblem of Italian Futurism, appearing even on Italy's 20-cent euro coin.",
    wikiTitle: "Unique Forms of Continuity in Space",
  },
  {
    id: "house-by-the-railroad",
    galleryId: "moma",
    title: "House by the Railroad",
    artist: "Edward Hopper",
    year: 1925,
    yearDisplay: "1925",
    movements: ["realism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A grand, ornate Victorian house stands isolated behind a bare stretch of railroad track, lit by a flat late-afternoon glow that makes the scene feel emptied of time and human presence. The tracks slice across the foreground like a barrier, cutting the house off from the viewer entirely.",
    history:
      "Acquired by MoMA in 1930, it was among the first works to enter the museum's collection and later became a widely cited visual source for the brooding house in Alfred Hitchcock's Psycho.",
    wikiTitle: "House by the Railroad",
  },

  // ---- Uffizi Gallery (batch 2) ----
  {
    id: "diptych-duke-and-duchess-of-urbino",
    galleryId: "uffizi",
    title: "Diptych of Federico da Montefeltro and Battista Sforza",
    artist: "Piero della Francesca",
    year: 1473,
    yearDisplay: "c. 1473–1475",
    movements: ["renaissance"],
    category: "painting",
    medium: "Oil and tempera on panel",
    description:
      "The Duke and Duchess of Urbino face each other in strict profile, painted with unflinching precision, including the duke's broken nose and the bump on its bridge, souvenirs of a jousting accident that also cost him his right eye. Behind them stretches a hazy, panoramic view of the rolling landscape they ruled.",
    history:
      "The panels' reverse sides depict the couple riding in ancient-style triumphal chariots accompanied by personified virtues, celebrating the pair's moral character. Battista Sforza had already died by the time the portraits were likely completed, making Federico's panel a memorial as much as a likeness.",
    wikiTitle: "Diptych of Federico da Montefeltro and Battista Sforza",
  },
  {
    id: "madonna-and-child-with-two-angels-lippi",
    galleryId: "uffizi",
    title: "Madonna and Child with Two Angels",
    artist: "Fra Filippo Lippi",
    year: 1465,
    yearDisplay: "c. 1460–1465",
    movements: ["renaissance"],
    category: "painting",
    medium: "Tempera on panel",
    description:
      "The Virgin, shown in profile with an almost melancholy expression, gazes at her son as two grinning angels hold him up toward her, one glancing mischievously out at the viewer. The delicate linear grace of Mary's face became one of the most imitated models for Madonna paintings in the following generation.",
    history:
      "Painted mostly without workshop assistance, unusually for Lippi, tradition holds that he modeled the Virgin on Lucrezia Buti, a nun he fell in love with and who later became his companion. Sandro Botticelli, Lippi's pupil, drew directly on this composition for his own Madonnas.",
    wikiTitle: "Madonna and Child (Lippi)",
  },
  {
    id: "madonna-of-the-goldfinch",
    galleryId: "uffizi",
    title: "Madonna of the Goldfinch",
    artist: "Raphael",
    year: 1506,
    yearDisplay: "c. 1505–1506",
    movements: ["renaissance"],
    category: "painting",
    medium: "Oil on panel",
    description:
      "The infant John the Baptist offers the infant Christ a small goldfinch, a bird whose red facial marking was believed to come from Christ's blood, foretelling the Crucifixion even within this tender, pyramid-shaped family scene. The soft landscape and gentle light show Raphael absorbing Leonardo's influence during his Florentine years.",
    history:
      "Painted around 1506 as a wedding gift, the panel was smashed into seventeen pieces when a landslide destroyed its owner's house in 1547; a meticulous decade-long restoration completed in 2008 pieced the fragments back together.",
    wikiTitle: "Madonna del Cardellino",
  },
  {
    id: "portrait-of-pope-leo-x",
    galleryId: "uffizi",
    title: "Portrait of Pope Leo X with Two Cardinals",
    artist: "Raphael",
    year: 1518,
    yearDisplay: "c. 1518–1520",
    movements: ["renaissance"],
    category: "painting",
    medium: "Oil on panel",
    description:
      "Pope Leo X sits absorbed in an illuminated manuscript, a magnifying glass and an ornate silver bell on the table before him, flanked by two watchful cardinals. A convex mirror reflection glinting off the golden finial beside his chair shows Raphael's virtuosic attention to optical detail.",
    history:
      "The sitter, born Giovanni de' Medici, was the first Medici to become pope; Raphael broke with tradition by giving him a strikingly individual, unidealized likeness rather than a generic image of papal authority. A major technical study completed in 2020 confirmed the two cardinal portraits were painted by Raphael himself, not added later.",
    wikiTitle: "Portrait of Leo X (Raphael)",
  },
  {
    id: "self-portrait-raphael",
    galleryId: "uffizi",
    title: "Self-Portrait",
    artist: "Raphael",
    year: 1506,
    yearDisplay: "c. 1504–1506",
    movements: ["renaissance"],
    category: "painting",
    medium: "Oil on poplar panel",
    description:
      "A young Raphael, still in his early twenties, looks out from beneath a simple black cap against a plain brown ground, his expression composed and faintly appraising. The restrained palette and quiet self-assurance already hint at the psychological depth of his later portraiture.",
    history:
      "Painted during Raphael's Florentine period and long kept in the ducal collection at Urbino, the small panel's attribution was only conclusively confirmed through technical investigations conducted in 1983.",
    wikiTitle: "Self-portrait (Raphael)",
  },
  {
    id: "madonna-of-the-harpies",
    galleryId: "uffizi",
    title: "Madonna of the Harpies",
    artist: "Andrea del Sarto",
    year: 1517,
    yearDisplay: "1517",
    movements: ["renaissance"],
    category: "painting",
    medium: "Oil on panel",
    description:
      "The Virgin stands on a pedestal decorated with clawed, winged creatures, flanked by two saints, her weight shifted into an easy classical contrapposto that blends Raphael's pyramidal grouping with Michelangelo's sculptural solidity. The eerie carved figures at her feet gave the altarpiece its enduring nickname.",
    history:
      "Commissioned in 1515 for a convent of Franciscan nuns, the \"harpies\" on the pedestal are now generally thought to represent apocalyptic locusts rather than the mythological monsters the painting's traditional title suggests. Giorgio Vasari praised it as del Sarto's finest achievement.",
    wikiTitle: "Madonna of the Harpies",
  },
  {
    id: "bacchus-caravaggio",
    galleryId: "uffizi",
    title: "Bacchus",
    artist: "Caravaggio",
    year: 1596,
    yearDisplay: "c. 1596",
    movements: ["baroque"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A flush-cheeked young Bacchus reclines against a couch, grapevine leaves woven through his hair, offering a shallow goblet of wine directly out toward the viewer. His dirty fingernails and the overripe, spotted fruit in the bowl before him puncture any classical idealization of the wine god.",
    history:
      "Rediscovered in Uffizi storerooms only in 1913 and attributed to Caravaggio by the art historian Roberto Longhi, the painting was made for Caravaggio's early patron Cardinal Francesco Maria del Monte, who later gave it as a wedding gift to the Medici family.",
    wikiTitle: "Bacchus (Caravaggio)",
  },
  {
    id: "sacrifice-of-isaac-caravaggio",
    galleryId: "uffizi",
    title: "Sacrifice of Isaac",
    artist: "Caravaggio",
    year: 1603,
    yearDisplay: "c. 1603–1604",
    movements: ["baroque"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "An angel grips Abraham's wrist just as his knife is about to fall on his bound son Isaac, whose scream is caught mid-breath under the full force of Caravaggio's raking, spotlight-like illumination. The angel's other hand points off-canvas toward a ram, the substitute sacrifice, cutting the tension in a single decisive gesture.",
    history:
      "Commissioned around 1603 by the future Pope Urban VIII, the painting later passed through the Barberini and Colonna di Sciarra collections in Rome before an English collector donated it to the Uffizi in 1917.",
    wikiTitle: "Sacrifice of Isaac (Caravaggio)",
  },
  {
    id: "adoration-of-the-magi-leonardo",
    galleryId: "uffizi",
    title: "Adoration of the Magi",
    artist: "Leonardo da Vinci",
    year: 1481,
    yearDisplay: "1481–1482 (unfinished)",
    movements: ["renaissance"],
    category: "painting",
    medium: "Underdrawing in charcoal, ink, and watercolor on panel",
    description:
      "The Virgin and Child form the calm center of a swirling crowd of kneeling magi and onlookers, while in the background horsemen battle and workers scale the ruins of a pagan building, an unusually turbulent backdrop for a nativity scene. A young man on the far right, gazing outward, is widely believed to be a self-portrait of Leonardo.",
    history:
      "Commissioned in 1481 by Augustinian monks in Florence, Leonardo left only the underdrawing before departing for Milan the following year, and it was never completed by him or anyone else. Modern technical analysis has confirmed that none of the visible paint layer was applied by Leonardo himself.",
    wikiTitle: "Adoration of the Magi (Leonardo)",
  },
  {
    id: "baptism-of-christ-verrocchio",
    galleryId: "uffizi",
    title: "The Baptism of Christ",
    artist: "Andrea del Verrocchio and Leonardo da Vinci",
    year: 1475,
    yearDisplay: "c. 1470–1475",
    movements: ["renaissance"],
    category: "painting",
    medium: "Oil and tempera on panel",
    description:
      "John the Baptist pours water over Christ's head as two kneeling angels look on, one of them painted with a delicacy so far beyond the rest of the panel that, according to Vasari, it stunned Verrocchio himself. The soft, luminous landscape behind the figures is now largely credited to the young Leonardo as well.",
    history:
      "Verrocchio ran one of Florence's leading workshops, and Leonardo was his apprentice when this altarpiece was underway; legend holds that Verrocchio was so humbled by his student's angel that he abandoned painting for sculpture afterward, though the story is likely embellished.",
    wikiTitle: "The Baptism of Christ (Verrocchio and Leonardo)",
  },
  {
    id: "battle-of-san-romano-uffizi",
    galleryId: "uffizi",
    title: "The Battle of San Romano",
    artist: "Paolo Uccello",
    year: 1438,
    yearDisplay: "c. 1435–1440",
    movements: ["renaissance"],
    category: "painting",
    medium: "Tempera on panel",
    description:
      "Niccolò da Tolentino leads the Florentine cavalry into a stiff, almost toylike clash of lances, fallen soldiers, and rearing horses, all locked into a rigorous perspectival grid that Uccello was famously obsessed with mastering. Broken lances litter the ground at precise, converging angles that pull the eye toward a single vanishing point.",
    history:
      "This is the central panel of a three-part cycle commemorating a 1432 Florentine military victory; its companion panels now hang in London's National Gallery and the Louvre. It is the only one of the three signed by Uccello.",
    wikiTitle: "The Battle of San Romano",
  },
  {
    id: "pallas-and-the-centaur",
    galleryId: "uffizi",
    title: "Pallas and the Centaur",
    artist: "Sandro Botticelli",
    year: 1482,
    yearDisplay: "c. 1482",
    movements: ["renaissance"],
    category: "painting",
    medium: "Tempera on canvas",
    description:
      "A woman armed with a halberd grips a centaur by the hair, holding him half-subdued rather than slaying him outright, her flowing dress patterned with the Medici family's three-ring emblem. The pairing of a civilizing human figure with a half-animal creature reads as an allegory of reason restraining base instinct.",
    history:
      "Likely commissioned as a wedding gift connected to the Medici family, the female figure was identified in early inventories first as the huntress Camilla and later as the goddess Pallas Athena, and the shifting identification still shapes how scholars read the painting's meaning.",
    wikiTitle: "Pallas and the Centaur",
  },
  {
    id: "adoration-of-the-magi-botticelli",
    galleryId: "uffizi",
    title: "Adoration of the Magi",
    artist: "Sandro Botticelli",
    year: 1475,
    yearDisplay: "c. 1475–1476",
    movements: ["renaissance"],
    category: "painting",
    medium: "Tempera on panel",
    description:
      "Members of the Medici family appear as the three kings and their retinue paying homage to the infant Christ, a bold substitution of Florence's ruling dynasty into a sacred scene. Botticelli included himself among the onlookers, a blond young man in a golden cloak staring directly out at the viewer from the painting's right edge.",
    history:
      "Painted early in Botticelli's career for a Florentine banker, the work signaled a new confidence among artists, who increasingly saw themselves as intellectual peers of their powerful patrons rather than mere craftsmen for hire.",
    wikiTitle: "Adoration of the Magi (Botticelli)",
  },
  {
    id: "madonna-of-the-magnificat",
    galleryId: "uffizi",
    title: "Madonna of the Magnificat",
    artist: "Sandro Botticelli",
    year: 1481,
    yearDisplay: "c. 1480–1481",
    movements: ["renaissance"],
    category: "painting",
    medium: "Tempera on panel",
    description:
      "Mary writes the words of the Magnificat canticle into an open book as the infant Christ guides her hand, while a ring of wingless angels crown her with a diadem and hold an inkwell steady. Christ's fingers rest on a pomegranate, its red seeds a quiet foreshadowing of the blood he would later shed.",
    history:
      "The circular tondo format enjoyed enormous popularity in Florence, and this composition proved so admired that Botticelli's workshop produced numerous variants and copies of it during his lifetime.",
    wikiTitle: "Madonna of the Magnificat",
  },
  {
    id: "fortitude-botticelli",
    galleryId: "uffizi",
    title: "Fortitude",
    artist: "Sandro Botticelli",
    year: 1470,
    yearDisplay: "1470",
    movements: ["renaissance"],
    category: "painting",
    medium: "Tempera on panel",
    description:
      "A young woman in polished armor over a flowing dress sits enthroned, gripping a ruler's scepter with a distracted, faraway expression rather than a warrior's resolve. She was meant to personify the virtue of Fortitude as part of a larger civic commission.",
    history:
      "This was Botticelli's first documented independent commission, painted at around age twenty-five as the sole panel he contributed to a cycle of the Seven Virtues otherwise executed by Piero del Pollaiuolo, after political string-pulling secured him the job over the elder artist's objections.",
    wikiTitle: "Fortitude (Botticelli)",
  },
  {
    id: "madonna-with-the-long-neck",
    galleryId: "uffizi",
    title: "Madonna with the Long Neck",
    artist: "Parmigianino",
    year: 1535,
    yearDisplay: "c. 1535–1540, unfinished",
    movements: ["mannerism"],
    category: "painting",
    medium: "Oil on panel",
    description:
      "The Virgin's neck, fingers, and torso stretch to unnatural, elegant extremes as she gazes down at an oddly adult-proportioned, sleeping Christ child sprawled across her lap. A lone, disproportionately tiny column stands in the background beside a distant, unfinished figure holding a scroll, deepening the painting's dreamlike strangeness.",
    history:
      "Parmigianino left the altarpiece incomplete at his death in 1540, having spent years reworking it beyond its original five-month deadline; its willful distortion of Renaissance proportion helped define the Mannerist style that followed.",
    wikiTitle: "Madonna with the Long Neck",
  },
  {
    id: "portrait-of-eleonora-of-toledo",
    galleryId: "uffizi",
    title: "Portrait of Eleonora of Toledo with Her Son Giovanni",
    artist: "Bronzino",
    year: 1545,
    yearDisplay: "c. 1545",
    movements: ["mannerism"],
    category: "painting",
    medium: "Oil on panel",
    description:
      "The Duchess of Florence stands rigidly upright in a dress of dense brocade patterning worked in real gold and silver thread, her two-year-old son Giovanni resting a hand on her waist. The saturated lapis lazuli-blue background, one of the most expensive pigments available, elevates the portrait to something close to a sacred image.",
    history:
      "Painted as state propaganda to project the wealth, fertility, and authority of Cosimo I de' Medici's new duchess, the portrait remains among the most celebrated examples of Mannerist court portraiture for its cold, jewel-like precision.",
    wikiTitle: "Portrait of Eleanor of Toledo",
  },
  {
    id: "moses-defending-the-daughters-of-jethro",
    galleryId: "uffizi",
    title: "Moses Defending the Daughters of Jethro",
    artist: "Rosso Fiorentino",
    year: 1523,
    yearDisplay: "1523–1524",
    movements: ["mannerism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "Moses wades into a chaotic tangle of nude shepherds at a well, fists flying as he drives them off to protect Jethro's daughters, while Zipporah looks on from above with a serene, statuesque poise entirely at odds with the brawl below. The compressed, twisting bodies push against the edges of the canvas with barely contained violence.",
    history:
      "Commissioned around 1523, the painting later traveled with Rosso Fiorentino to the French court of Francis I before eventually returning to Florence, where it has remained since the seventeenth century.",
    wikiTitle: "Moses Defending the Daughters of Jethro",
  },
  {
    id: "portinari-altarpiece",
    galleryId: "uffizi",
    title: "Portinari Altarpiece",
    artist: "Hugo van der Goes",
    year: 1475,
    yearDisplay: "c. 1475–1476",
    movements: ["northern-renaissance"],
    category: "painting",
    medium: "Oil on panel, triptych",
    description:
      "Shepherds crowd in to adore the newborn Christ with expressions of raw, unidealized wonder, kneeling beside a still-life of flowers rich with symbolic meaning, while the altarpiece's donor and his family appear at a strikingly larger scale on the side panels than most Italian conventions would allow. The intense, minutely observed realism was unlike anything Florentine painters had attempted before.",
    history:
      "Commissioned by the Italian banker Tommaso Portinari for a hospital chapel in Florence, its 1483 arrival from Bruges stunned local artists with its technical mastery of oil paint and naturalistic detail, directly influencing the following generation of Florentine painting.",
    wikiTitle: "Portinari Altarpiece",
  },
  {
    id: "flora-titian",
    galleryId: "uffizi",
    title: "Flora",
    artist: "Titian",
    year: 1515,
    yearDisplay: "c. 1515–1517",
    movements: ["renaissance"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A young woman turns toward the viewer, her chemise slipping loose from one shoulder as she holds out a handful of flowers, her strawberry-blonde hair falling in loose waves. The identity of the sitter, and whether she represents the goddess Flora, a bride, or simply an idealized beauty, has never been settled.",
    history:
      "Painted early in Titian's career, the canvas exemplifies the sensuous half-length female portraits that Venetian painters made fashionable in the early sixteenth century. It arrived at the Uffizi in 1793 through an exchange with the Imperial Gallery in Vienna.",
    wikiTitle: "Flora (Titian)",
  },
  {
    id: "rest-on-the-flight-into-egypt-with-st-francis",
    galleryId: "uffizi",
    title: "Rest on the Flight into Egypt with Saint Francis",
    artist: "Correggio",
    year: 1520,
    yearDisplay: "c. 1520",
    movements: ["renaissance"],
    category: "painting",
    medium: "Oil on panel",
    description:
      "Mary sits beneath a tree with the infant Christ on her lap as Joseph offers fruit and Saint Francis of Assisi kneels in devotion nearby, the soft, golden light and gentle interactions between the figures typical of Correggio's tender, intimate religious scenes. The anachronistic presence of Francis, born more than a millennium after the Holy Family, was a common devotional convention of the period.",
    history:
      "Commissioned around 1520 for a family burial chapel dedicated to Saint Francis, the panel was acquired by the Medici and hung prominently in the Uffizi's Tribuna gallery alongside the collection's most prized masterpieces.",
    wikiTitle: "Rest on the Flight into Egypt with Saint Francis",
  },
  {
    id: "venus-de-medici",
    galleryId: "uffizi",
    title: "Venus de' Medici",
    artist: "Unknown Hellenistic sculptor",
    year: -100,
    yearDisplay: "1st century BCE",
    movements: ["hellenistic"],
    category: "sculpture",
    medium: "Marble",
    description:
      "Aphrodite emerges as if stepping from a bath, caught in a modest, twisting gesture as she shields herself with both hands, her weight settled naturally onto one leg. A dolphin at her feet, ridden by playful cupids, hints that she has just risen from the sea.",
    history:
      "Discovered fragmented in Rome in the early sixteenth century and purchased by the Medici, it was seized by Napoleon's forces in 1802 and displayed in Paris until 1815, when it returned to Florence. Conservation work in 2012 revealed traces of the statue's original gilding and pigment, evidence it was once brightly painted.",
    wikiTitle: "Venus de' Medici",
  },
  {
    id: "the-wrestlers-uffizi",
    galleryId: "uffizi",
    title: "The Wrestlers",
    artist: "Unknown Roman sculptor, after a lost Hellenistic bronze",
    year: -100,
    yearDisplay: "1st-century-BCE copy of a 3rd-century-BCE original",
    movements: ["hellenistic"],
    category: "sculpture",
    medium: "Marble",
    description:
      "Two muscular young men grapple on the ground in the ancient sport of pankration, their limbs locked in a tight, interwoven mass of straining anatomy. The sculptor captured the exact instant of a decisive hold, freezing peak physical tension in stone.",
    history:
      "Unearthed near Rome's Porta San Giovanni in 1583 alongside the sculptures now known as the Niobids, the group so impressed Cardinal Ferdinando de' Medici that he purchased it for his Roman villa before it was later moved to Florence.",
    wikiTitle: "Wrestlers (sculpture)",
  },
  {
    id: "arrotino",
    galleryId: "uffizi",
    title: "Arrotino (The Knife Grinder)",
    artist: "Unknown Hellenistic-Roman sculptor",
    year: -100,
    yearDisplay: "Hellenistic-era Roman copy",
    movements: ["hellenistic"],
    category: "sculpture",
    medium: "Marble",
    description:
      "A crouching man sharpens a blade on a whetstone, his face tilted upward with a tense, watchful expression, as though listening for something happening just out of view. Long thought to depict a Scythian slave, the figure is now understood as part of a lost group showing Apollo's punishment of the satyr Marsyas.",
    history:
      "Found in Rome and purchased by Cardinal Ferdinando de' Medici in 1561, the sculpture has stood in the Uffizi's octagonal Tribuna room, reserved for the gallery's most prized ancient works, since the eighteenth century.",
    wikiTitle: "Arrotino",
  },
  // ---- State Hermitage Museum (batch 2) ----
  {
    id: "venus-tauride",
    galleryId: "hermitage",
    title: "Venus Tauride",
    artist: "Unknown (Greek, Hellenistic period)",
    year: -200,
    yearDisplay: "3rd–2nd century BC",
    movements: ["hellenistic"],
    category: "sculpture",
    medium: "Marble",
    description:
      "A life-size marble figure of Aphrodite rising from her bath, her hairstyle and ankle bracelet still intact though both arms were lost in antiquity and her nose has been restored.",
    history:
      "Given to Peter the Great by Pope Clement XI in 1719 in exchange for the relics of St. Bridget of Sweden, it was the first work of classical antiquity to reach Russia; long thought a 2nd-century AD Roman copy, recent scholarship argues it is in fact a Greek original of the 3rd or 2nd century BC.",
    wikiTitle: "Venus Tauride",
  },
  {
    id: "crouching-boy-michelangelo",
    galleryId: "hermitage",
    title: "Crouching Boy",
    artist: "Michelangelo",
    year: 1530,
    yearDisplay: "c. 1530–1534",
    movements: ["renaissance"],
    category: "sculpture",
    medium: "Marble",
    description:
      "An unfinished marble figure of a nude boy hunched over himself, seemingly tending to his own foot, its rough, non finito surface leaving tool marks visible alongside the finished passages of face and hair.",
    history:
      "Carved for the Medici Chapel tombs in Florence but never installed there, it later entered the London collection of Lyde Browne, which Catherine the Great purchased in 1785; it is the only sculpture by Michelangelo in the Hermitage, entering the museum's collection in 1851.",
    wikiTitle: "Crouching Boy",
  },
  {
    id: "conestabile-madonna",
    galleryId: "hermitage",
    title: "Conestabile Madonna",
    artist: "Raphael",
    year: 1504,
    yearDisplay: "c. 1502–1504",
    movements: ["renaissance"],
    category: "painting",
    medium: "Oil on canvas (transferred from panel)",
    description:
      "A small circular (tondo) devotional painting of the Virgin Mary holding the infant Christ, both absorbed in a book she holds, set within an elaborately carved original frame.",
    history:
      "Painted for the Conestabile della Staffa family of Perugia, it was purchased by Tsar Alexander II in 1871 and, after transfer from its original wood panel to canvas revealed an underdrawing showing Mary originally held a pomegranate, entered the Hermitage's public display in 1880.",
    wikiTitle: "Conestabile Madonna",
  },
  {
    id: "judith-giorgione",
    galleryId: "hermitage",
    title: "Judith",
    artist: "Giorgione",
    year: 1504,
    yearDisplay: "c. 1504",
    movements: ["renaissance"],
    category: "painting",
    medium: "Oil on canvas (transferred from panel)",
    description:
      "The biblical heroine Judith stands in a landscape with sword in hand, one bare foot resting almost gently atop the severed head of Holofernes.",
    history:
      "Once misattributed to Raphael, it entered the Hermitage in 1772 as part of Catherine the Great's mass purchase of the Paris-based collector Pierre Crozat's paintings, and is one of only a handful of works universally accepted as autograph Giorgiones; a 1967–1971 restoration removed old varnish and uncovered previously hidden landscape details.",
    wikiTitle: "Judith (Giorgione)",
  },
  {
    id: "perseus-and-andromeda-rubens",
    galleryId: "hermitage",
    title: "Perseus and Andromeda",
    artist: "Peter Paul Rubens",
    year: 1622,
    yearDisplay: "c. 1622",
    movements: ["baroque"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "Perseus, fresh from slaying the Gorgon, is crowned by the goddess Victory while putti free the chained Andromeda and bear his helmet, shield, and the winged horse Pegasus above the vanquished sea monster Cetus.",
    history:
      "The painting appears to have remained in Rubens's own house until his death and later belonged to the Dresden minister Heinrich von Brühl, from whose collection the Hermitage acquired it in 1769; it now hangs in the museum's dedicated Rubens Hall.",
    wikiTitle: "Perseus and Andromeda (Rubens)",
  },
  {
    id: "saint-sebastian-titian",
    galleryId: "hermitage",
    title: "Saint Sebastian",
    artist: "Titian",
    year: 1575,
    yearDisplay: "c. 1570s",
    movements: ["renaissance"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A nearly life-size, muscular Saint Sebastian stands bound to a tree stump against a darkened, fire-lit landscape, his body pierced by arrows yet his expression one of serene endurance rather than agony.",
    history:
      "Painted in Titian's final years using the loose, expressive brushwork of his late style, the canvas was acquired by the Hermitage in 1850 as part of a major purchase from the Barbarigo family's Venetian gallery.",
    wikiTitle: "Saint Sebastian (Titian, Hermitage)",
  },

  // ---- Rijksmuseum (batch 2) ----
  {
    id: "vermeer-the-little-street",
    galleryId: "rijksmuseum",
    title: "The Little Street",
    artist: "Johannes Vermeer",
    year: 1658,
    yearDisplay: "c. 1658",
    movements: ["baroque"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A quiet view of a modest brick house and adjoining alley in Delft, where a woman sits sewing in the doorway, another works in the passage beyond, and two children crouch playing on the pavement.",
    history:
      "One of only three known Vermeer townscapes, it was bought at auction in 1921 for 625,000 guilders by oil magnate Henri Deterding, who donated it to the Dutch state for the Rijksmuseum; in 2015 archival research pinpointed its exact location on Delft's Vlamingstraat, and technical imaging for the museum's 2023 Vermeer exhibition revealed he originally painted the doorway closed before repainting it open.",
    wikiTitle: "The Little Street",
  },
  {
    id: "avercamp-winter-landscape-with-skaters",
    galleryId: "rijksmuseum",
    title: "Winter Landscape with Skaters",
    artist: "Hendrick Avercamp",
    year: 1608,
    yearDisplay: "c. 1608",
    movements: ["baroque"],
    category: "painting",
    medium: "Oil on oak panel",
    description:
      "A frozen river teeming with more than two hundred small figures of every social class skating, playing kolf, sledding, chatting, and falling on the ice beneath a pale winter sky.",
    history:
      "Painted when Avercamp was about 23, this is among his earliest works and helped establish him as the first Dutch painter to specialize in winter scenes; deaf and unable to speak, he was known in his lifetime as 'de Stomme van Kampen' (the Mute of Kampen).",
    wikiTitle: "Winter Landscape with Skaters",
  },
  {
    id: "asselijn-the-threatened-swan",
    galleryId: "rijksmuseum",
    title: "The Threatened Swan",
    artist: "Jan Asselijn",
    year: 1650,
    yearDisplay: "c. 1650",
    movements: ["baroque"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A life-size mute swan rears up with wings spread wide, hissing as it defends its nest of eggs against an approaching dog.",
    history:
      "Purchased in 1800, it was the very first painting acquired by the Rijksmuseum and later had inscriptions added identifying the swan as Grand Pensionary Johan de Witt defending the Dutch state against its enemies, turning a nature study into a patriotic political allegory.",
    wikiTitle: "The Threatened Swan",
  },
  {
    id: "hals-the-merry-drinker",
    galleryId: "rijksmuseum",
    title: "The Merry Drinker",
    artist: "Frans Hals",
    year: 1629,
    yearDisplay: "c. 1628–1630",
    movements: ["baroque"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A man in a leather jerkin and lace collar, floppy hat tipped at an angle, raises a glass of white wine while gesturing toward the viewer as if mid-toast.",
    history:
      "Painted with Hals's characteristic rapid, criss-crossing 'rough manner' brushwork that suggests movement and spontaneity, the painting's exact subject has long been debated by scholars as either a genre scene or a candid portrait, and it remains one of the Rijksmuseum's most popular works for its energy and immediacy.",
    wikiTitle: "The Merry Drinker",
  },
  {
    id: "ruisdael-windmill-at-wijk-bij-duurstede",
    galleryId: "rijksmuseum",
    title: "The Windmill at Wijk bij Duurstede",
    artist: "Jacob van Ruisdael",
    year: 1670,
    yearDisplay: "c. 1670",
    movements: ["baroque"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A monumental windmill dominates a riverside town on the Lek, its sails catching the light against dark, roiling storm clouds while the river flows past in the foreground.",
    history:
      "Owned by the Amsterdam Museum, the painting has been on long-term loan to the Rijksmuseum since 1885 and consistently ranks among the museum's most popular images in postcard and print sales, trailing only Rembrandt's The Night Watch and Vermeer's View of Delft.",
    wikiTitle: "Windmill at Wijk bij Duurstede",
  },
  {
    id: "pieneman-the-battle-of-waterloo",
    galleryId: "rijksmuseum",
    title: "The Battle of Waterloo",
    artist: "Jan Willem Pieneman",
    year: 1824,
    yearDisplay: "1824",
    movements: ["romanticism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A vast, crowded battlefield scene centers on the Duke of Wellington mounted on his horse Copenhagen as he learns of the arriving Prussian reinforcements, while the wounded Prince of Orange is carried away on a stretcher in the foreground.",
    history:
      "Pieneman traveled to London in 1821, where the Duke of Wellington gave him a studio at Apsley House, sat for his own portrait, and arranged sittings with other Waterloo commanders and even his horse; the finished painting was purchased by King William I as a gift for his son the Prince of Orange, and at 567 x 823 cm it remains the largest painting in the Rijksmuseum's collection.",
    wikiTitle: "The Battle of Waterloo (Pieneman painting)",
  },

  // ---- Museo del Prado (batch 2) ----
  {
    id: "descent-from-the-cross-weyden",
    galleryId: "prado",
    title: "The Descent from the Cross",
    artist: "Rogier van der Weyden",
    year: 1435,
    yearDisplay: "c. 1435",
    movements: ["northern-renaissance"],
    category: "painting",
    medium: "Oil on oak panel",
    description:
      "Christ's lifeless body is lowered from the cross by Joseph of Arimathea and Nicodemus, while the swooning Virgin Mary collapses below in a pose that mirrors her son's, surrounded by mourning figures crowded into a shallow, gilded niche-like space.",
    history:
      "Painted for the Leuven crossbowmen's guild, the panel was acquired in the 16th century by Mary of Hungary and passed into the Spanish royal collection under Philip II; it was evacuated to Geneva for safekeeping during the Spanish Civil War before returning to the Prado, and a major structural restoration was carried out in the early 1990s to address cracking in the panel.",
    wikiTitle: "The Descent from the Cross (van der Weyden)",
  },
  {
    id: "three-graces-rubens",
    galleryId: "prado",
    title: "The Three Graces",
    artist: "Peter Paul Rubens",
    year: 1635,
    yearDisplay: "c. 1630–1635",
    movements: ["baroque"],
    category: "painting",
    medium: "Oil on panel",
    description:
      "The mythological Graces — Aglaea, Euphrosyne, and Thalia — stand in a wooded clearing in a circular embrace, their soft, fleshy nudes rendered with Rubens's characteristic luminous, tactile handling of skin.",
    history:
      "Rubens kept the painting in his own personal collection until his death in 1640, prizing it highly; it was later bought for Philip IV of Spain and entered the Spanish royal collection before passing to the Prado, where it remains one of the most celebrated late works of the artist's career.",
    wikiTitle: "The Three Graces (Rubens, Madrid)",
  },
  {
    id: "self-portrait-durer-1498",
    galleryId: "prado",
    title: "Self-Portrait",
    artist: "Albrecht Dürer",
    year: 1498,
    yearDisplay: "1498",
    movements: ["northern-renaissance"],
    category: "painting",
    medium: "Oil on panel",
    description:
      "A 26-year-old Dürer presents himself half-length in fashionable striped cap, curled hair, and grey kidskin gloves, gazing confidently out at the viewer beneath a stone arch inscribed with the date and his age.",
    history:
      "Painted shortly after Dürer's first trip to Italy, it is the earliest of his three painted self-portraits to survive with a documented Spanish provenance: it was gifted as a pair with his father's portrait to Charles I of England in 1636 before being acquired by Philip IV of Spain in 1654, after which it entered the royal, and later Prado, collection.",
    wikiTitle: "Self-Portrait (Dürer, Madrid)",
  },
  {
    id: "la-maja-desnuda-goya",
    galleryId: "prado",
    title: "La maja desnuda",
    artist: "Francisco Goya",
    year: 1800,
    yearDisplay: "c. 1797–1800",
    movements: ["romanticism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A woman reclines nude on a bed of pillows, gazing directly at the viewer with an unusually frank, unidealized pose that broke from the mythological pretexts typically used to justify nude painting at the time.",
    history:
      "Probably commissioned by the statesman Manuel Godoy for a private cabinet of nude paintings, it was later seized by the Spanish Inquisition, which summoned Goya in 1815 to account for the 'obscene' work; it entered the Prado's collection in 1901 and is traditionally displayed alongside its clothed companion piece, La maja vestida.",
    wikiTitle: "La maja desnuda",
  },
  {
    id: "equestrian-portrait-charles-v-titian",
    galleryId: "prado",
    title: "Equestrian Portrait of Charles V",
    artist: "Titian",
    year: 1548,
    yearDisplay: "1548",
    movements: ["renaissance"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "Holy Roman Emperor Charles V is shown alone on horseback in gleaming armor, silhouetted against a smoky dawn landscape, commemorating his 1547 victory over the Schmalkaldic League at the Battle of Mühlberg.",
    history:
      "Commissioned by Mary of Austria, Queen of Hungary, and painted by Titian at the imperial court in Augsburg in 1548, the portrait established the enduring convention of the heroic royal equestrian portrait; the actual armor and horse tack depicted survive today in Madrid's Royal Armoury, and the painting entered the Prado's collection in 1827.",
    wikiTitle: "Equestrian Portrait of Charles V",
  },
  {
    id: "charles-iv-family-goya",
    galleryId: "prado",
    title: "Charles IV of Spain and His Family",
    artist: "Francisco Goya",
    year: 1801,
    yearDisplay: "1800–1801",
    movements: ["romanticism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A life-sized group portrait of King Charles IV, Queen Maria Luisa, and thirteen other members of the royal family in fine dress and jewels, with Goya himself visible at his easel in the shadows to the left, in explicit homage to Velázquez's Las Meninas.",
    history:
      "Completed in 1801 as Goya's grandest commission as First Chamber Painter, the work has long provoked debate over whether its unflattering, almost caricatured likenesses constitute a veiled satire of the royal family or simple, unsparing realism; it has remained in the former royal collection, now the Prado, ever since.",
    wikiTitle: "Charles IV of Spain and His Family",
  },

  // ---- Solomon R. Guggenheim Museum (batch 2) ----
  {
    id: "le-moulin-de-la-galette-picasso",
    galleryId: "guggenheim-nyc",
    title: "Le Moulin de la Galette",
    artist: "Pablo Picasso",
    year: 1900,
    yearDisplay: "1900",
    movements: ["post-impressionism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A crowded night scene inside the Parisian dance hall Moulin de la Galette, rendered in loose, glowing brushwork under gaslight, with dancers, top-hatted onlookers, and women seated at a table in the foreground.",
    history:
      "Painted during the 19-year-old Picasso's first trip to Paris, it entered the collection of Berlin banker Paul von Mendelssohn-Bartholdy before dealer Justin K. Thannhauser gave it to the Guggenheim; in 2023 technical imaging of the canvas revealed previously unknown figures hidden beneath the paint surface.",
    wikiTitle: "Le Moulin de la Galette (Picasso)",
  },
  {
    id: "woman-ironing-picasso",
    galleryId: "guggenheim-nyc",
    title: "Woman Ironing",
    artist: "Pablo Picasso",
    year: 1904,
    yearDisplay: "1904",
    movements: ["expressionism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "An emaciated laundress with hollowed eyes and a bent, angular frame bears down on an iron, painted in the cool blue-gray palette characteristic of Picasso's Blue Period.",
    history:
      "A 1989 infrared examination revealed a hidden portrait of an unknown man beneath the surface, since Picasso reused canvases during his impoverished early years. In 2023 heirs of the Adler family, who sold the work to dealer Justin Thannhauser in 1938 while fleeing Nazi Germany, sued the Guggenheim for its return or up to $200 million; a New York judge dismissed the claim in June 2024, finding no evidence the sale had been made under duress.",
    wikiTitle: "Woman Ironing",
  },
  {
    id: "green-violinist-chagall",
    galleryId: "guggenheim-nyc",
    title: "Green Violinist",
    artist: "Marc Chagall",
    year: 1923,
    yearDisplay: "1923–1924",
    movements: ["cubism", "expressionism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A green-skinned fiddler dances above the rooftops of a small, mist-gray village, a recurring figure drawn from the Hasidic folk culture of Chagall's native Vitebsk.",
    history:
      "This is a later reworking of a fiddler theme Chagall had painted during his second Russian period, completed after his return to Paris. The image is widely credited as the visual inspiration for the title of the 1964 musical Fiddler on the Roof.",
    wikiTitle: "Green Violinist",
  },
  {
    id: "the-tilled-field-miro",
    galleryId: "guggenheim-nyc",
    title: "The Tilled Field",
    artist: "Joan Miró",
    year: 1923,
    yearDisplay: "1923–1924",
    movements: ["surrealism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A crowded, dreamlike view of Miró's family farm at Mont-roig del Camp, populated by hybrid animal-plant forms, a lizard in a conical hat, a farmer behind a plough, and a tree sprouting an eye and an ear.",
    history:
      "Painted as Miró moved away from the detailed realism of his earlier work The Farm, it is considered one of his first Surrealist paintings and a pivotal transitional work, created around the same time as his more fully abstracted Catalan Landscape.",
    wikiTitle: "The Tilled Field",
  },
  {
    id: "grrrrrrrrrrr-lichtenstein",
    galleryId: "guggenheim-nyc",
    title: "Grrrrrrrrrrr!!",
    artist: "Roy Lichtenstein",
    year: 1965,
    yearDisplay: "1965",
    movements: ["pop-art"],
    category: "painting",
    medium: "Oil and Magna on canvas",
    description:
      "A snarling white dog fills the canvas head-on against a flat blue ground, its growl spelled out in a yellow comic-book speech balloon reading \"Grrrrrrrrrrr!!\"",
    history:
      "Lichtenstein based the image on a panel from the 1962 war comic Our Fighting Forces, blowing up its dot-screen printing technique into fine art. The painting entered the Guggenheim through a bequest honoring a pledge Lichtenstein made in 1992, and was featured on the cover of ARTnews in November 1993.",
    wikiTitle: "Grrrrrrrrrrr!!",
  },
  {
    id: "woman-with-parakeet-renoir",
    galleryId: "guggenheim-nyc",
    title: "Woman with Parakeet",
    artist: "Pierre-Auguste Renoir",
    year: 1871,
    yearDisplay: "1871",
    movements: ["impressionism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "Renoir's frequent model and companion Lise Tréhot stands in an elegant interior wearing a black taffeta dress with a red sash, holding a parakeet on her raised hand.",
    history:
      "Painted just after Renoir returned from service in the Franco-Prussian War, it was never shown at the Paris Salon since no Salon was held that year. Long dated to 1865, scholars later redated it to 1871; dealer Justin K. Thannhauser acquired it in 1927 and donated it to the Guggenheim in 1978.",
    wikiTitle: "Woman with Parakeet (Renoir)",
  },
  {
    id: "brooklyn-bridge-gleizes",
    galleryId: "guggenheim-nyc",
    title: "Brooklyn Bridge",
    artist: "Albert Gleizes",
    year: 1915,
    yearDisplay: "1915",
    movements: ["cubism"],
    category: "painting",
    medium: "Oil and gouache on canvas",
    description:
      "New York's Brooklyn Bridge is broken into interlocking arcs, cables, and sharp diagonals, abstracted almost to the point of pure geometry while still suggesting the span's cables and towers.",
    history:
      "Painted soon after Gleizes arrived in New York in 1915, it was the first in a series of three Brooklyn Bridge canvases and was shown at the Montross Gallery in 1916 alongside works by Marcel Duchamp and other émigré avant-gardists nicknamed \"The Four Musketeers\" by the press. Collector John Quinn bought it at that show; it sold for a mere $60 at the 1927 auction of Quinn's estate before entering the Guggenheim's founding collection.",
    wikiTitle: "Brooklyn Bridge (Gleizes)",
  },

  // ---- Guggenheim Museum Bilbao (batch 2) ----
  {
    id: "tulips-koons-bilbao",
    galleryId: "guggenheim-bilbao",
    title: "Tulips",
    artist: "Jeff Koons",
    year: 2004,
    yearDisplay: "1995–2004",
    movements: ["pop-art"],
    category: "sculpture",
    medium: "Mirror-polished stainless steel with transparent color coating",
    description:
      "A bouquet of seven oversized balloon-like tulips rendered in gleaming, mirror-polished stainless steel, each bloom swelling to monumental scale as if inflated and impossibly weightless.",
    history:
      "Part of Koons's 'Celebration' series and, per the artist, his most technically complex work to date, it exists in five unique versions — one of which is Guggenheim Bilbao's own, originally sited on the outdoor terrace before moving indoors to Gallery 303 for the museum's 25th-anniversary rehang; a different edition sold at auction in 2012 for roughly $33.6 million.",
    wikiTitle: "Tulips (Koons)",
  },

  // ---- Hirshhorn Museum and Sculpture Garden (batch 2) ----
  {
    id: "burghers-of-calais",
    galleryId: "hirshhorn",
    title: "The Burghers of Calais",
    artist: "Auguste Rodin",
    year: 1889,
    yearDisplay: "1884–1889 (this cast 1943)",
    movements: ["realism"],
    category: "sculpture",
    medium: "Bronze",
    description:
      "Six life-size bronze figures depict the burghers of Calais, ropes around their necks, walking out to surrender themselves to English forces during the Hundred Years' War — their faces and postures showing anguish, resignation, and quiet heroism rather than triumphant idealism.",
    history:
      "Rodin broke with convention by depicting all six volunteers rather than a single hero, drawing controversy from the Calais committee that commissioned it in 1884. The Hirshhorn's bronze is one of only twelve casts authorized under French law, cast in 1943 and installed in the museum's sculpture garden after Joseph Hirshhorn's collection formed the museum's founding gift.",
    wikiTitle: "The Burghers of Calais",
  },
  {
    id: "cubi-xii",
    galleryId: "hirshhorn",
    title: "Cubi XII",
    artist: "David Smith",
    year: 1963,
    yearDisplay: "1963",
    movements: ["abstract-expressionism"],
    category: "sculpture",
    medium: "Stainless steel",
    description:
      "A tall abstract sculpture of geometric cubes and rectangular boxes welded together at their corners, balanced atop a narrow post so the forms seem to hover; Smith's signature swirling grinder marks on the polished surface shift with the light.",
    history:
      "Part of Smith's late Cubi series (1961–65), made in the final years before his death in a 1965 car accident. The Hirshhorn purchased the piece from Smith's estate in 1968 through the Marlborough-Gerson Gallery.",
    wikiTitle: "Cubi XII",
  },
  {
    id: "sky-hooks-calder",
    galleryId: "hirshhorn",
    title: "Sky Hooks",
    artist: "Alexander Calder",
    year: 1962,
    yearDisplay: "1962",
    movements: ["abstract-art"],
    category: "sculpture",
    medium: "Painted sheet steel",
    description:
      "A large abstract standing sculpture of curving, hook-like steel forms painted black, reaching upward and outward in the biomorphic vocabulary Calder developed for his monumental stabiles.",
    history:
      "Created in 1962 as Calder shifted increasing attention from his hanging mobiles toward large-scale outdoor stabiles. It has long stood in the Hirshhorn's outdoor sculpture garden, part of Joseph Hirshhorn's deep early patronage of Calder's work.",
    wikiTitle: "Sky Hooks",
  },
  {
    id: "agricola-i",
    galleryId: "hirshhorn",
    title: "Agricola I",
    artist: "David Smith",
    year: 1952,
    yearDisplay: "1952",
    movements: ["abstract-expressionism"],
    category: "sculpture",
    medium: "Steel (assembled farm implement parts)",
    description:
      "An abstract welded-steel figure assembled from repurposed antique farm machinery parts, its angular forms suggesting a farmer with tools in hand.",
    history:
      "One of the earliest works in Smith's Agricola series, begun after he found old agricultural tools on his property in Bolton Landing, New York. Joseph Hirshhorn purchased the piece in 1962 and donated it to the museum bearing his name in 1966.",
    wikiTitle: "Agricola I",
  },
  {
    id: "are-years-what-di-suvero",
    galleryId: "hirshhorn",
    title: "Are Years What? (for Marianne Moore)",
    artist: "Mark di Suvero",
    year: 1967,
    yearDisplay: "1967",
    movements: ["abstract-expressionism"],
    category: "sculpture",
    medium: "Steel I-beams",
    description:
      "A massive, dynamically cantilevered sculpture of nine welded red-orange steel I-beams, roughly 40 feet across, that seems to gesture and lean into open space like a piece of calligraphy in three dimensions.",
    history:
      "Its title references poet Marianne Moore's 'What Are Years,' reflecting di Suvero's habit of dedicating works to writers he admired. The Hirshhorn acquired the sculpture and installed it in its sculpture garden on June 13, 1999.",
    wikiTitle: "Are Years What? (for Marianne Moore)",
  },
  {
    id: "lunar-bird-miro",
    galleryId: "hirshhorn",
    title: "Lunar Bird",
    artist: "Joan Miró",
    year: 1967,
    yearDisplay: "1945/1966–67 (modeled/enlarged and cast)",
    movements: ["surrealism"],
    category: "sculpture",
    medium: "Bronze",
    description:
      "A monumental bronze form fusing bird and bull-like anatomy, with a crescent shape atop its head standing in for the moon — one half of a pair with Miró's companion piece 'Solar Bird.'",
    history:
      "Miró first modeled the figure in plaster in 1945 after returning to Spain during World War II, later enlarging it and having it cast in bronze in the mid-1960s. It has been a fixture of the Hirshhorn's sculpture garden collection.",
    wikiTitle: "Lunar Bird",
  },
  {
    id: "untitled-ellsworth-kelly-1986",
    galleryId: "hirshhorn",
    title: "Untitled",
    artist: "Ellsworth Kelly",
    year: 1986,
    yearDisplay: "1986",
    movements: ["minimalism"],
    category: "sculpture",
    medium: "Stainless steel",
    description:
      "A large curved stainless steel sculpture reducing form to a single simplified arcing shape, its polished surface catching and reflecting light and the surrounding garden.",
    history:
      "The sculpture translates the flat, hard-edged shapes of Kelly's paintings into freestanding three-dimensional form, part of his decades-long exploration of pure shape and negative space. It is installed at the Hirshhorn Museum and Sculpture Garden.",
    wikiTitle: "Untitled (Ellsworth Kelly)",
  },

  // ---- Centre Pompidou (batch 2) ----
  {
    id: "sorrows-of-the-king-matisse",
    galleryId: "pompidou",
    title: "The Sorrows of the King",
    artist: "Henri Matisse",
    year: 1952,
    yearDisplay: "1952",
    movements: ["modernism"],
    category: "painting",
    medium: "Gouache-painted paper cutouts mounted on canvas",
    description:
      "A large, brilliantly colored composition made from cut paper shapes showing a black-clad king figure plucking a guitar-like instrument beside a dancing woman and a nude female musician, set against a golden, garden-like background.",
    history:
      "Made when failing health had confined Matisse largely to bed, it is widely read as his final self-portrait — the artist recast as an aging King David surrounded by music and dance. It exemplifies the paper cutout technique he pioneered in his last decade, after abandoning easel painting around 1950.",
    wikiTitle: "The Sorrows of the King",
  },
  {
    id: "new-york-city-mondrian-pompidou",
    galleryId: "pompidou",
    title: "New York City",
    artist: "Piet Mondrian",
    year: 1942,
    yearDisplay: "1942",
    movements: ["abstract-art", "modernism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A grid of intersecting red, blue, and yellow painted lines on a white ground, without Mondrian's usual black lines, evoking the energy and structure of Manhattan's street grid.",
    history:
      "Painted after Mondrian settled in New York City in 1940, this finished, correctly-oriented canvas became the key comparison piece in 2022 when scholars used it to prove that a closely related, unsigned companion work, 'New York City I' in Düsseldorf, had been displayed upside-down since the 1940s.",
    wikiTitle: "New York City (painting)",
  },
  {
    id: "la-coiffeuse-picasso",
    galleryId: "pompidou",
    title: "La Coiffeuse (The Hairdresser)",
    artist: "Pablo Picasso",
    year: 1911,
    yearDisplay: "1911",
    movements: ["cubism"],
    category: "painting",
    medium: "Oil on canvas",
    description:
      "A small, muted brown-and-grey Analytical Cubist painting fragmenting a woman seated for a haircut into overlapping geometric planes, her form barely legible amid the faceted composition.",
    history:
      "Stolen from a Centre Pompidou storeroom in 2001, the painting vanished for fourteen years until it turned up in 2015 inside a FedEx package shipped from Belgium to Newark, New Jersey, falsely declared as a '$37 art craft/toy.' After authentication and restoration, it was returned to the museum.",
    wikiTitle: "La Coiffeuse",
  },
  {
    id: "ant-82-blue-age-anthropometry-klein",
    galleryId: "pompidou",
    title: "ANT 82, Blue Age Anthropometry",
    artist: "Yves Klein",
    year: 1960,
    yearDisplay: "1960",
    movements: ["nouveau-realisme"],
    category: "painting",
    medium: "Pure pigment and synthetic resin on paper mounted on canvas",
    description:
      "Ghostly blue imprints of nude female torsos and limbs are pressed directly onto a pale ground in Klein's signature International Klein Blue pigment, arranged in a loose horizontal frieze.",
    history:
      "Created during Klein's notorious 1960 'Anthropometry' performances, in which nude models coated in IKB pigment pressed their bodies onto paper under the artist's direction before an audience in evening dress, accompanied by a live orchestra. The Musée National d'Art Moderne acquired the work in 1984.",
    wikiTitle: "ANT 82, Blue Age Anthropometry",
  },
  {
    id: "noire-et-blanche-man-ray",
    galleryId: "pompidou",
    title: "Noire et Blanche",
    artist: "Man Ray",
    year: 1926,
    yearDisplay: "1926",
    movements: ["surrealism"],
    category: "photography",
    medium: "Gelatin silver print",
    description:
      "A stark black-and-white photograph showing the face of model Kiki de Montparnasse lying on its side next to an African Baule mask she holds upright, pairing the two ovoid forms as visual echoes of each other.",
    history:
      "First published in French Vogue in May 1926 under the title 'Visage de nacre et masque d'ébène,' the image became one of the most reproduced photographs of the Surrealist era; the Centre Pompidou holds a period print (and glass-plate negative) in its collection, one of several prints of the image held across major museums.",
    wikiTitle: "Noire et Blanche",
  },
];
