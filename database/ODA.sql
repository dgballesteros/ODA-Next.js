--
-- PostgreSQL database dump
--

\restrict ozqUiLijgvxLbHkYTm94yUK4TNM2QO6YnbTkYapPMlUTrcTTQswXN7nu08ywulG

-- Dumped from database version 17.7
-- Dumped by pg_dump version 17.7

-- Started on 2026-01-28 21:23:13

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 222 (class 1259 OID 16453)
-- Name: colecciones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.colecciones (
    id integer NOT NULL,
    usuario_id integer NOT NULL,
    obra_id integer NOT NULL,
    fecha_agregado timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.colecciones OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16452)
-- Name: colecciones_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.colecciones_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.colecciones_id_seq OWNER TO postgres;

--
-- TOC entry 4926 (class 0 OID 0)
-- Dependencies: 221
-- Name: colecciones_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.colecciones_id_seq OWNED BY public.colecciones.id;


--
-- TOC entry 220 (class 1259 OID 16444)
-- Name: obras; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.obras (
    id integer NOT NULL,
    titulo character varying(200) NOT NULL,
    autor character varying(150) NOT NULL,
    anio character varying(50),
    movimiento character varying(150),
    tecnica character varying(150),
    dimensiones character varying(100),
    ubicacion character varying(200),
    descripcion text,
    imagen character varying(200)
);


ALTER TABLE public.obras OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16443)
-- Name: obras_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.obras_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.obras_id_seq OWNER TO postgres;

--
-- TOC entry 4927 (class 0 OID 0)
-- Dependencies: 219
-- Name: obras_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.obras_id_seq OWNED BY public.obras.id;


--
-- TOC entry 218 (class 1259 OID 16431)
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    email character varying(150) NOT NULL,
    password text NOT NULL,
    rol character varying(20) NOT NULL,
    fecha_creacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT usuarios_rol_check CHECK (((rol)::text = ANY ((ARRAY['docente'::character varying, 'alumno'::character varying])::text[])))
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16430)
-- Name: usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.usuarios_id_seq OWNER TO postgres;

--
-- TOC entry 4928 (class 0 OID 0)
-- Dependencies: 217
-- Name: usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;


--
-- TOC entry 4755 (class 2604 OID 16456)
-- Name: colecciones id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.colecciones ALTER COLUMN id SET DEFAULT nextval('public.colecciones_id_seq'::regclass);


--
-- TOC entry 4754 (class 2604 OID 16447)
-- Name: obras id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.obras ALTER COLUMN id SET DEFAULT nextval('public.obras_id_seq'::regclass);


--
-- TOC entry 4752 (class 2604 OID 16434)
-- Name: usuarios id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);


--
-- TOC entry 4920 (class 0 OID 16453)
-- Dependencies: 222
-- Data for Name: colecciones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.colecciones (id, usuario_id, obra_id, fecha_agregado) FROM stdin;
\.


--
-- TOC entry 4918 (class 0 OID 16444)
-- Dependencies: 220
-- Data for Name: obras; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.obras (id, titulo, autor, anio, movimiento, tecnica, dimensiones, ubicacion, descripcion, imagen) FROM stdin;
1	The School of Athens	Raffaello Sanzio	1510-1511	Italian Renaissance	Fresco painting	500 cm × 770 cm	Vatican Museums, Vatican City	A fresco representing the greatest philosophers of antiquity, centered on Plato and Aristotle, symbolizing Renaissance humanism.	escuela-atenas.webp
2	The Birth of Venus	Sandro Botticelli	1484-1486	Italian Renaissance	Tempera on canvas	172.5 cm × 278.5 cm	Uffizi Gallery, Florence	Depicts the goddess Venus emerging from the sea, symbol of beauty and divine love.	nacimiento-venus.webp
3	Girl with a Pearl Earring	Johannes Vermeer	1665	Dutch Baroque	Oil on canvas	44.5 cm × 39 cm	Mauritshuis, The Hague	A tronie portraying a young woman with an enigmatic expression and a pearl earring.	joven-perla.webp
4	The Starry Night	Vincent van Gogh	1889	Post-Impressionism	Oil on canvas	73.7 cm × 92.1 cm	MoMA, New York	Depicts a swirling night sky over a village, expressing emotion through movement and color.	noche-estrellada.webp
5	Las Meninas	Diego Velázquez	1656	Spanish Baroque	Oil on canvas	318 cm × 276 cm	Prado Museum, Madrid	A complex composition exploring perspective, reality and the role of the artist.	las-meninas.webp
6	The Creation of Adam	Michelangelo Buonarroti	1508-1512	Italian Renaissance	Fresco painting	280 cm × 570 cm	Sistine Chapel, Vatican City	Depicts the moment God gives life to Adam, one of the most iconic images in art history.	creacion-adam.webp
7	Mona Lisa	Leonardo da Vinci	1503–1506	Renaissance	Oil on panel	77 × 53 cm	Louvre, Paris	Portrait known for its enigmatic smile.	monalisa.webp
8	The Last Supper	Leonardo da Vinci	1495–1498	Renaissance	Tempera on gesso	460 × 880 cm	Santa Maria delle Grazie, Milan	Depicts the last meal of Jesus with his apostles.	last-supper.webp
9	Guernica	Pablo Picasso	1937	Cubism	Oil on canvas	349 × 776 cm	Museo Reina Sofía	Anti-war painting depicting the bombing of Guernica.	guernica.webp
10	The Persistence of Memory	Salvador Dalí	1931	Surrealism	Oil on canvas	24 × 33 cm	MoMA, New York	Melting clocks representing time distortion.	memory.webp
11	The Scream	Edvard Munch	1893	Expressionism	Oil, tempera, pastel	91 × 73 cm	National Museum, Oslo	Symbol of existential anguish.	scream.webp
12	American Gothic	Grant Wood	1930	Regionalism	Oil on beaverboard	78 × 65 cm	Art Institute of Chicago	Iconic portrait of rural America.	gothic.webp
13	The Kiss	Gustav Klimt	1907–1908	Art Nouveau	Oil and gold leaf	180 × 180 cm	Österreichische Galerie	Lovers wrapped in golden ornamentation.	kiss.webp
14	Girl with a Mandolin	Pablo Picasso	1910	Cubism	Oil on canvas	100 × 73 cm	MoMA	Analytical cubist portrait.	mandolin.webp
15	The Night Watch	Rembrandt	1642	Baroque	Oil on canvas	363 × 437 cm	Rijksmuseum	Dynamic group portrait of a militia.	nightwatch.webp
16	Water Lilies	Claude Monet	1916	Impressionism	Oil on canvas	200 × 180 cm	Orangerie Museum	Series depicting Monet’s garden.	waterlilies.webp
17	The Thinker	Auguste Rodin	1904	Modern Sculpture	Bronze	186 cm	Rodin Museum	Symbol of philosophy and reflection.	thinker.webp
18	David	Michelangelo	1504	Renaissance	Marble	517 cm	Florence	Idealized male nude sculpture.	david.webp
19	Venus de Milo	Unknown	130 BC	Hellenistic	Marble	203 cm	Louvre	Classical Greek sculpture of Aphrodite.	venus.webp
20	Campbell Soup Cans	Andy Warhol	1962	Pop Art	Synthetic polymer	51 × 41 cm	MoMA	Commentary on mass production.	soup.webp
21	The Great Wave	Hokusai	1831	Ukiyo-e	Woodblock print	25 × 37 cm	British Museum	Iconic Japanese wave print.	wave.webp
22	Impression, Sunrise	Claude Monet	1872	Impressionism	Oil on canvas	48 × 63 cm	Musée Marmottan	Gave name to Impressionism.	sunrise.webp
23	Liberty Leading the People	Delacroix	1830	Romanticism	Oil on canvas	260 × 325 cm	Louvre	Allegory of the French Revolution.	liberty.webp
24	The Arnolfini Portrait	Jan van Eyck	1434	Northern Renaissance	Oil on panel	82 × 60 cm	National Gallery	Symbolic double portrait.	arnolfini.webp
25	Nighthawks	Edward Hopper	1942	Realism	Oil on canvas	84 × 152 cm	Art Institute of Chicago	Urban loneliness at night.	nighthawks.webp
26	The Garden of Earthly Delights	Hieronymus Bosch	1505	Early Netherlandish	Oil on panel	220 × 389 cm	Prado Museum	Surreal triptych of heaven and hell.	garden.webp
27	The Hay Wain	John Constable	1821	Romanticism	Oil on canvas	130 × 185 cm	National Gallery, London	Pastoral landscape showing rural England.	haywain.webp
28	Whistler’s Mother	James McNeill Whistler	1871	Realism	Oil on canvas	144 × 162 cm	Musée d’Orsay	Iconic portrait of the artist’s mother.	whistler.webp
29	Bal du moulin de la Galette	Pierre-Auguste Renoir	1876	Impressionism	Oil on canvas	131 × 175 cm	Musée d’Orsay	Joyful Parisian social scene.	galette.webp
30	The Sleeping Gypsy	Henri Rousseau	1897	Naïve Art	Oil on canvas	129 × 200 cm	MoMA	Dreamlike scene with lion and sleeping woman.	gypsy.webp
31	Composition VII	Wassily Kandinsky	1913	Abstract Art	Oil on canvas	200 × 300 cm	Tretyakov Gallery	Abstract composition of colors and shapes.	composition7.webp
32	Black Square	Kazimir Malevich	1915	Suprematism	Oil on canvas	79 × 79 cm	Tretyakov Gallery	Radical abstract painting.	blacksquare.webp
33	Broadway Boogie Woogie	Piet Mondrian	1943	De Stijl	Oil on canvas	127 × 127 cm	MoMA	Abstract representation of New York.	boogie.webp
34	Christina’s World	Andrew Wyeth	1948	Realism	Tempera on panel	82 × 121 cm	MoMA	Woman lying in a field looking at a house.	christina.webp
35	No. 5, 1948	Jackson Pollock	1948	Abstract Expressionism	Oil on fiberboard	243 × 122 cm	Private collection	Drip painting masterpiece.	pollock.webp
36	Marilyn Diptych	Andy Warhol	1962	Pop Art	Silkscreen	205 × 289 cm	Tate Modern	Repetition of Marilyn Monroe.	marilyn.webp
37	The Son of Man	René Magritte	1964	Surrealism	Oil on canvas	116 × 89 cm	Private collection	Man with apple covering his face.	sonofman.webp
38	A Sunday Afternoon on the Island of La Grande Jatte	Georges Seurat	1886	Pointillism	Oil on canvas	207 × 308 cm	Art Institute of Chicago	Pointillist park scene.	grandjatte.webp
39	Olympia	Édouard Manet	1863	Realism	Oil on canvas	130 × 190 cm	Musée d’Orsay	Controversial reclining nude.	olympia.webp
40	The Swing	Jean-Honoré Fragonard	1767	Rococo	Oil on canvas	81 × 64 cm	Wallace Collection	Playful aristocratic scene.	swing.webp
41	Self-Portrait with Bandaged Ear	Vincent van Gogh	1889	Post-Impressionism	Oil on canvas	60 × 49 cm	Courtauld Gallery	Self-portrait after ear injury.	ear.webp
42	The Gleaners	Jean-François Millet	1857	Realism	Oil on canvas	83 × 111 cm	Musée d’Orsay	Peasant women collecting grain.	gleaners.webp
43	The Sleeping Venus	Giorgione	1510	Renaissance	Oil on canvas	108 × 175 cm	Gemäldegalerie	First reclining nude in art.	venus_sleep.webp
44	The Third of May 1808	Francisco Goya	1814	Romanticism	Oil on canvas	268 × 347 cm	Prado Museum	Execution of Spanish rebels.	may3.webp
45	The Card Players	Paul Cézanne	1895	Post-Impressionism	Oil on canvas	97 × 130 cm	Musée d’Orsay	Men playing cards.	cards.webp
46	The Kiss (Brâncuși)	Constantin Brâncuși	1907	Modern Sculpture	Stone	90 cm	Philadelphia Museum	Minimalist sculpture of lovers.	kiss_brancusi.webp
47	The Physical Impossibility of Death	Damien Hirst	1991	Contemporary Art	Mixed media	213 × 518 cm	Tate Modern	Shark preserved in formaldehyde.	hirst.webp
48	Balloon Dog	Jeff Koons	1994	Contemporary Art	Stainless steel	307 cm	Various	Sculpture resembling balloon animal.	balloon.webp
49	Guernica (Study)	Picasso	1937	Cubism	Oil on canvas	Various	Museo Reina Sofía	Study for Guernica.	guernica_study.webp
50	The Lovers	René Magritte	1928	Surrealism	Oil on canvas	54 × 73 cm	MoMA	Couple with faces covered.	lovers.webp
51	Rain, Steam and Speed	J.M.W. Turner	1844	Romanticism	Oil on canvas	91 × 122 cm	National Gallery	Train moving through mist.	turner.webp
52	The Basket of Apples	Paul Cézanne	1893	Post-Impressionism	Oil on canvas	65 × 80 cm	Art Institute of Chicago	Still life with distorted perspective.	apples.webp
53	The Tower of Babel	Pieter Bruegel the Elder	1563	Renaissance	Oil on panel	114 × 155 cm	Kunsthistorisches Museum	Biblical tower scene.	babel.webp
54	Ophelia	John Everett Millais	1852	Pre-Raphaelite	Oil on canvas	76 × 112 cm	Tate Britain	Shakespearean tragic scene.	ophelia.webp
55	The Red Vineyard	Vincent van Gogh	1888	Post-Impressionism	Oil on canvas	73 × 93 cm	Pushkin Museum	Only painting sold during his lifetime.	vineyard.webp
\.


--
-- TOC entry 4916 (class 0 OID 16431)
-- Dependencies: 218
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (id, nombre, email, password, rol, fecha_creacion) FROM stdin;
\.


--
-- TOC entry 4929 (class 0 OID 0)
-- Dependencies: 221
-- Name: colecciones_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.colecciones_id_seq', 1, false);


--
-- TOC entry 4930 (class 0 OID 0)
-- Dependencies: 219
-- Name: obras_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.obras_id_seq', 55, true);


--
-- TOC entry 4931 (class 0 OID 0)
-- Dependencies: 217
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_id_seq', 1, false);


--
-- TOC entry 4765 (class 2606 OID 16459)
-- Name: colecciones colecciones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.colecciones
    ADD CONSTRAINT colecciones_pkey PRIMARY KEY (id);


--
-- TOC entry 4763 (class 2606 OID 16451)
-- Name: obras obras_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.obras
    ADD CONSTRAINT obras_pkey PRIMARY KEY (id);


--
-- TOC entry 4767 (class 2606 OID 16461)
-- Name: colecciones unica_obra_por_usuario; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.colecciones
    ADD CONSTRAINT unica_obra_por_usuario UNIQUE (usuario_id, obra_id);


--
-- TOC entry 4759 (class 2606 OID 16442)
-- Name: usuarios usuarios_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_email_key UNIQUE (email);


--
-- TOC entry 4761 (class 2606 OID 16440)
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);


--
-- TOC entry 4768 (class 2606 OID 16467)
-- Name: colecciones fk_obra; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.colecciones
    ADD CONSTRAINT fk_obra FOREIGN KEY (obra_id) REFERENCES public.obras(id) ON DELETE CASCADE;


--
-- TOC entry 4769 (class 2606 OID 16462)
-- Name: colecciones fk_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.colecciones
    ADD CONSTRAINT fk_usuario FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id) ON DELETE CASCADE;


-- Completed on 2026-01-28 21:23:13

--
-- PostgreSQL database dump complete
--

\unrestrict ozqUiLijgvxLbHkYTm94yUK4TNM2QO6YnbTkYapPMlUTrcTTQswXN7nu08ywulG

