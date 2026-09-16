<script id="exdata" type="application/json">[{"id": "hello", "cat": 1, "rank": 1, "quoi": "Affiche \"Hello World!\" a l'ecran. Le tout premier spawn, comme le didacticiel avant la vraie game.", "ex": "go run . -> Hello World!", "strat": "Plan de jeu : t'as pas besoin de viser, juste `fmt.Println(\"Hello World!\")` dans ton `main()`. C'est le check d'arme avant le vrai match.", "concept": "fmt.Println", "hint": "", "quiz": {"call": "go run .", "correct": "Hello World!", "wrong": ["hELLO wORLD!", "!dlroW olleH"]}, "code": ["func main() {", "\tfmt.Println(\"Hello World!\")", "}"]}, {"id": "printstr", "cat": 1, "rank": 1, "quoi": "Affiche un string caractere par caractere, un par un, comme si tu tapais lettre par lettre.", "ex": "PrintStr(\"yo\") -> y o", "strat": "Plan de jeu : boucle `for i, r := range s` sur le string et fais un `fmt.Printf(\"%c\", r)` a chaque tour. Range te sort deja chaque caractere (rune), utilise-le direct.", "concept": "for range + rune", "hint": "range decoupe deja le string caractere par caractere, pas besoin d'indexer toi-meme", "quiz": {"call": "PrintStr(\"yo\")", "correct": "y o", "wrong": ["Y O", "o y"]}, "code": ["func PrintStr(s string) {", "\tfor _, r := range s {", "\t\tfmt.Printf(\"%c\", r)", "\t}", "}"]}, {"id": "printnbr", "cat": 1, "rank": 2, "quoi": "Affiche un int a l'ecran (meme les negatifs et les valeurs extremes), sans le convertir en int64.", "ex": "PrintNbr(-42) -> -42", "strat": "Plan de jeu : gere le signe a part (si n<0, affiche '-' puis bosse sur la valeur positive), puis extrait les chiffres un par un avec %10 et /10, mais attention : ca sort a l'envers donc faut soit empiler soit passer par la recursion pour remettre dans l'ordre. Piege classique : le minimum int (-2147483648) n'a pas d'opposé positif representable direct, faut ruser.", "concept": "recursion / division-modulo", "hint": "le cas du MinInt est le piege a boss ici, teste-le en premier", "quiz": {"call": "PrintNbr(-42)", "correct": "-42", "wrong": ["-41", "42"]}, "code": ["func PrintNbr(n int) {", "\tif n < 0 {", "\t\tfmt.Print(\"-\")", "\t}", "\tfmt.Print(abs(n))", "}"]}, {"id": "printnbrbase", "cat": 1, "rank": 3, "quoi": "Affiche un int dans la base donnee (genre hexa ou binaire). Si la base est pourrie, ca affiche NV.", "ex": "PrintNbrBase(42,\"01\") -> 101010", "strat": "Plan de jeu : verifie d'abord que la base est valide (pas de doublons, au moins 2 caracteres). Ensuite meme logique que printnbr mais au lieu de %10/10 tu fais %len(base)/len(base), et tu piges le caractere correspondant dans la string base.", "concept": "conversion de base", "hint": "reutilise ta logique de printnbr, change juste le diviseur", "quiz": {"call": "PrintNbrBase(42,\"01\")", "correct": "101010", "wrong": ["101011", "-101010"]}, "code": ["func PrintNbrBase(n int, base string) {", "\tif n >= len(base) {", "\t\tPrintNbrBase(n/len(base), base)", "\t}", "\tfmt.Printf(\"%c\", base[n%len(base)])", "}"]}, {"id": "printalphabet", "cat": 1, "rank": 1, "quoi": "Affiche tout l'alphabet en minuscule, sur une seule ligne, comme un ult qui balance tout d'un coup.", "ex": "go run . -> abcdefghijklmnopqrstuvwxyz", "strat": "Plan de jeu : boucle `for c := 'a'; c <= 'z'; c++` et affiche chaque rune. Les runes en Go sont juste des nombres, tu peux les comparer et les incrementer comme des int.", "concept": "arithmetique sur runes", "hint": "", "quiz": {"call": "go run .", "correct": "abcdefghijklmnopqrstuvwxyz", "wrong": ["zyxwvutsrqponmlkjihgfedcba", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"]}, "code": ["func main() {", "\tfor c := 'a'; c <= 'z'; c++ {", "\t\tfmt.Printf(\"%c\", c)", "\t}", "}"]}, {"id": "printreversealphabet", "cat": 1, "rank": 1, "quoi": "Pareil que printalphabet mais a l'envers, de z a a. Interdiction d'utiliser un casting.", "ex": "go run . -> zyxwvu...a", "strat": "Plan de jeu : boucle a l'envers `for c := 'z'; c >= 'a'; c--`. Pas de cast requis puisque tu bosses direct avec des runes du debut a la fin.", "concept": "arithmetique sur runes", "hint": "", "quiz": {"call": "go run .", "correct": "zyxwvutsrqponmlkjihgfedcba", "wrong": ["abcdefghijklmnopqrstuvwxyz", "ZYXWVUTSRQPONMLKJIHGFEDCBA"]}, "code": ["func main() {", "\tfor c := 'z'; c >= 'a'; c-- {", "\t\tfmt.Printf(\"%c\", c)", "\t}", "}"]}, {"id": "displaya", "cat": 1, "rank": 1, "quoi": "Cherche le premier 'a' dans un string et l'affiche. Si y'a pas de 'a', ca affiche quand meme un 'a' par defaut.", "ex": "displaya \"salut\" -> a", "strat": "Plan de jeu : boucle sur le string, des que tu trouves un 'a' tu l'affiches et tu return direct. Si t'as fini la boucle sans rien trouve, tu affiches quand meme 'a' a la fin.", "concept": "recherche + early return", "hint": "", "quiz": {"call": "displaya \"salut\"", "correct": "a", "wrong": ["A", "a?"]}, "code": ["func main() {", "\ts := os.Args[1]", "\tfor _, r := range s {", "\t\tif r == 'a' {", "\t\t\tfmt.Println(\"a\")", "\t\t\treturn", "\t\t}", "\t}", "\tfmt.Println(\"a\")", "}"]}, {"id": "displayz", "cat": 1, "rank": 1, "quoi": "Meme principe que displaya mais avec la lettre 'z'.", "ex": "displayz \"zoo\" -> z", "strat": "Plan de jeu : copie colle la strategie de displaya, remplace juste la lettre cherchee par 'z'.", "concept": "recherche + early return", "hint": "", "quiz": {"call": "displayz \"zoo\"", "correct": "z", "wrong": ["Z", "z?"]}, "code": ["func main() {", "\ts := os.Args[1]", "\tfor _, r := range s {", "\t\tif r == 'z' {", "\t\t\tfmt.Println(\"z\")", "\t\t\treturn", "\t\t}", "\t}", "\tfmt.Println(\"z\")", "}"]}, {"id": "onlya", "cat": 1, "rank": 1, "quoi": "Le programme le plus simple du piscine: il affiche juste 'a', point final.", "ex": "go run . -> a", "strat": "Plan de jeu : `fmt.Print(\"a\")`, sans meme de retour a la ligne. Loot facile, prends-le et avance.", "concept": "fmt.Print", "hint": "", "quiz": {"call": "go run .", "correct": "a", "wrong": ["A", "a?"]}, "code": ["func main() {", "\tfmt.Print(\"a\")", "}"]}, {"id": "onlyz", "cat": 1, "rank": 1, "quoi": "Meme delire que onlya mais avec 'z'.", "ex": "go run . -> z", "strat": "Plan de jeu : `fmt.Print(\"z\")`. Meme chose que onlya.", "concept": "fmt.Print", "hint": "", "quiz": {"call": "go run .", "correct": "z", "wrong": ["Z", "z?"]}, "code": ["func main() {", "\tfmt.Print(\"z\")", "}"]}, {"id": "displayalpham", "cat": 1, "rank": 2, "quoi": "Affiche l'alphabet en alternant majuscule/minuscule (pair en majuscule, impair en minuscule).", "ex": "-> aBcDeF...", "strat": "Plan de jeu : boucle sur l'alphabet en comptant la position (0,1,2...). Si la position est paire affiche en minuscule, sinon en majuscule (ou l'inverse, check bien l'exemple). Utilise `unicode.ToUpper` ou joue avec les codes ASCII.", "concept": "modulo + casse", "hint": "", "quiz": {"call": "displayalpham", "correct": "aBcDeF...", "wrong": ["AbCdEf...", "...FeDcBa"]}, "code": ["func main() {", "\tfor i, c := 0, 'a'; c <= 'z'; i, c = i+1, c+1 {", "\t\tif i%2 == 0 {", "\t\t\tfmt.Printf(\"%c\", c-32)", "\t\t} else {", "\t\t\tfmt.Printf(\"%c\", c)", "\t\t}", "\t}", "}"]}, {"id": "displayalrevm", "cat": 1, "rank": 2, "quoi": "Meme chose que displayalpham mais a l'envers (de z a a).", "ex": "-> zYxWv...", "strat": "Plan de jeu : meme logique que displayalpham, mais tu pars de 'z' et tu descends jusqu'a 'a'.", "concept": "modulo + casse", "hint": "", "quiz": {"call": "displayalrevm", "correct": "zYxWv...", "wrong": ["ZyXwV...", "...vWxYz"]}, "code": ["func main() {", "\tfor i, c := 0, 'z'; c >= 'a'; i, c = i+1, c-1 {", "\t\tif i%2 == 0 {", "\t\t\tfmt.Printf(\"%c\", c-32)", "\t\t} else {", "\t\t\tfmt.Printf(\"%c\", c)", "\t\t}", "\t}", "}"]}, {"id": "printdigits", "cat": 1, "rank": 1, "quoi": "Affiche les chiffres de 0 a 9 sur une seule ligne. Le combo le plus facile du jeu.", "ex": "go run . -> 0123456789", "strat": "Plan de jeu : boucle `for c := '0'; c <= '9'; c++`, tu affiches direct. Loot gris mais ca compte pour ton rang.", "concept": "arithmetique sur runes", "hint": "", "quiz": {"call": "go run .", "correct": "0123456789", "wrong": ["123456790", "-123456789"]}, "code": ["func main() {", "\tfor c := '0'; c <= '9'; c++ {", "\t\tfmt.Printf(\"%c\", c)", "\t}", "}"]}, {"id": "printhex", "cat": 1, "rank": 3, "quoi": "Convertit un nombre en base 10 vers de l'hexadecimal (base 16), en minuscules.", "ex": "printhex 255 -> ff", "strat": "Plan de jeu : recupere l'argument, convertis-le en int (`strconv.Atoi`), gere les erreurs et cas negatifs demandes, puis divise successivement par 16 en piochant les chiffres dans \"0123456789abcdef\" (meme logique que printnbrbase avec une base fixe).", "concept": "conversion de base fixe", "hint": "", "quiz": {"call": "printhex 255", "correct": "ff", "wrong": ["FF", "f"]}, "code": ["func main() {", "\tn, _ := strconv.Atoi(os.Args[1])", "\tfmt.Printf(\"%x\\n\", n)", "}"]}, {"id": "printbits", "cat": 1, "rank": 3, "quoi": "Affiche un nombre en binaire (que des 0 et des 1), sans retour a la ligne a la fin.", "ex": "printbits 5 -> 00000101", "strat": "Plan de jeu : convertis l'argument en int, puis pour chaque bit de poids fort a poids faible (8 bits) fais un AND avec un masque qui se decale (`1 << i`) pour savoir si le bit est a 0 ou 1.", "concept": "operateurs bit a bit", "hint": "", "quiz": {"call": "printbits 5", "correct": "00000101", "wrong": ["102", "-101"]}, "code": ["func main() {", "\tn, _ := strconv.Atoi(os.Args[1])", "\tfor i := 7; i >= 0; i-- {", "\t\tfmt.Print((n >> i) & 1)", "\t}", "}"]}, {"id": "tabmult", "cat": 1, "rank": 2, "quoi": "Affiche la table de multiplication d'un nombre, comme a l'ecole primaire mais en Go.", "ex": "tabmult 3 -> 3 6 9 12...27", "strat": "Plan de jeu : boucle `for i := 1; i <= 9; i++`, affiche `n*i` a chaque tour avec un espace entre chaque valeur.", "concept": "boucle simple", "hint": "", "quiz": {"call": "tabmult 3", "correct": "3 6 9 12...27", "wrong": ["3 6 9 12...27 (bis)", "72...21 9 6 3"]}, "code": ["func main() {", "\tn, _ := strconv.Atoi(os.Args[1])", "\tfor i := 1; i <= 9; i++ {", "\t\tfmt.Println(n, \"*\", i, \"=\", n*i)", "\t}", "}"]}, {"id": "paramcount", "cat": 2, "rank": 1, "quoi": "Compte et affiche le nombre d'arguments passes au programme dans le terminal.", "ex": "go run . a b c -> 3", "strat": "Plan de jeu : `os.Args` contient tous les arguments, mais le premier (index 0) c'est le nom du programme lui-meme, pas un vrai argument. Fais `len(os.Args) - 1`.", "concept": "os.Args", "hint": "os.Args[0] c'est toujours le nom du programme, jamais un argument utilisateur", "quiz": {"call": "go run . a b c", "correct": "3", "wrong": ["4", "-3"]}, "code": ["func main() {", "\tfmt.Println(len(os.Args) - 1)", "}"]}, {"id": "printparams", "cat": 2, "rank": 1, "quoi": "Affiche chaque argument recu, un par ligne. Comme la liste des joueurs dans ton squad.", "ex": "go run . a b c -> a\\nb\\nc", "strat": "Plan de jeu : boucle sur `os.Args[1:]` (donc en sautant le nom du programme) et affiche chaque element avec Println.", "concept": "os.Args + slicing", "hint": "", "quiz": {"call": "go run . a b c", "correct": "a\\nb\\nc", "wrong": ["A\\NB\\NC", "cn\\bn\\a"]}, "code": ["func main() {", "\tfor _, a := range os.Args[1:] {", "\t\tfmt.Println(a)", "\t}", "}"]}, {"id": "revparams", "cat": 2, "rank": 1, "quoi": "Pareil que printparams mais dans l'ordre inverse (le dernier arg en premier).", "ex": "go run . a b c -> c\\nb\\na", "strat": "Plan de jeu : meme base que printparams, mais boucle a l'envers sur `os.Args[1:]`, du dernier index au premier.", "concept": "os.Args + boucle inversee", "hint": "", "quiz": {"call": "go run . a b c", "correct": "c\\nb\\na", "wrong": ["C\\NB\\NA", "an\\bn\\c"]}, "code": ["func main() {", "\tfor i := len(os.Args) - 1; i >= 1; i-- {", "\t\tfmt.Println(os.Args[i])", "\t}", "}"]}, {"id": "sortparams", "cat": 2, "rank": 2, "quoi": "Affiche les arguments tries dans l'ordre ASCII (majuscules avant minuscules, chiffres avant lettres).", "ex": "go run . b a 1 -> 1 a b", "strat": "Plan de jeu : recupere `os.Args[1:]`, utilise `sort.Strings()` du package `sort` pour trier directement en ordre ASCII, puis affiche.", "concept": "package sort", "hint": "sort.Strings existe deja, pas besoin de coder ton propre tri ici", "quiz": {"call": "go run . b a 1", "correct": "1 a b", "wrong": ["1 A B", "b a 1"]}, "code": ["func main() {", "\targs := os.Args[1:]", "\tsort.Strings(args)", "\tfmt.Println(strings.Join(args, \" \"))", "}"]}, {"id": "displayfirstparam", "cat": 2, "rank": 1, "quoi": "Affiche uniquement le premier argument recu, s'il y en a un.", "ex": "go run . foo bar -> foo", "strat": "Plan de jeu : verifie que `len(os.Args) > 1` avant d'afficher `os.Args[1]`, sinon rien ne s'affiche.", "concept": "os.Args + verification de longueur", "hint": "", "quiz": {"call": "go run . foo bar", "correct": "foo", "wrong": ["FOO", "oof"]}, "code": ["func main() {", "\tif len(os.Args) > 1 {", "\t\tfmt.Println(os.Args[1])", "\t}", "}"]}, {"id": "displaylastparam", "cat": 2, "rank": 1, "quoi": "Affiche uniquement le dernier argument recu, s'il y en a un.", "ex": "go run . foo bar -> bar", "strat": "Plan de jeu : meme verification que displayfirstparam, mais tu affiches `os.Args[len(os.Args)-1]`.", "concept": "os.Args + index final", "hint": "", "quiz": {"call": "go run . foo bar", "correct": "bar", "wrong": ["BAR", "rab"]}, "code": ["func main() {", "\tif len(os.Args) > 1 {", "\t\tfmt.Println(os.Args[len(os.Args)-1])", "\t}", "}"]}, {"id": "printprogramname", "cat": 2, "rank": 1, "quoi": "Affiche le nom du programme lui-meme (son propre nom de fichier binaire).", "ex": "./printprogramname -> printprogramname", "strat": "Plan de jeu : `os.Args[0]` donne le chemin complet, utilise `filepath.Base(os.Args[0])` du package `path/filepath` pour ne garder que le nom du fichier.", "concept": "path/filepath", "hint": "", "quiz": {"call": "./printprogramname", "correct": "printprogramname", "wrong": ["PRINTPROGRAMNAME", "emanmargorptnirp"]}, "code": ["func main() {", "\tfmt.Println(filepath.Base(os.Args[0]))", "}"]}, {"id": "concatparams", "cat": 2, "rank": 2, "quoi": "Colle tous les arguments ensemble avec un saut de ligne entre chaque et renvoie le string final.", "ex": "ConcatParams(\"a\",\"b\") -> a\\nb", "strat": "Plan de jeu : boucle sur les arguments recus par la fonction, concatene chaque element a un string accumulateur en ajoutant '\\n' entre chaque (mais pas apres le dernier, check l'exemple du README).", "concept": "concatenation de string", "hint": "", "quiz": {"call": "ConcatParams(\"a\",\"b\")", "correct": "a\\nb", "wrong": ["A\\NB", "bn\\a"]}, "code": ["func ConcatParams(args []string) string {", "\tresult := \"\"", "\tfor i, a := range args {", "\t\tresult += a", "\t\tif i != len(args)-1 {", "\t\t\tresult += \"\\n\"", "\t\t}", "\t}", "\treturn result", "}"]}, {"id": "concat", "cat": 2, "rank": 1, "quoi": "Colle deux strings ensemble et renvoie le resultat (comme une fusion de deux items dans l'inventaire).", "ex": "Concat(\"go\",\"pher\") -> gopher", "strat": "Plan de jeu : en Go, `+` entre deux strings fait deja la concatenation direct : `return str1 + str2`.", "concept": "operateur +", "hint": "", "quiz": {"call": "Concat(\"go\",\"pher\")", "correct": "gopher", "wrong": ["GOPHER", "rehpog"]}, "code": ["func Concat(str1 string, str2 string) string {", "\treturn str1 + str2", "}"]}, {"id": "basicjoin", "cat": 2, "rank": 2, "quoi": "Prend une liste de strings et les colle tous ensemble en un seul gros string.", "ex": "BasicJoin([\"go\",\"pher\"]) -> gopher", "strat": "Plan de jeu : boucle sur la slice, ajoute chaque element a un accumulateur avec `+=`.", "concept": "boucle + accumulateur", "hint": "", "quiz": {"call": "BasicJoin([\"go\",\"pher\"])", "correct": "gopher", "wrong": ["GOPHER", "rehpog"]}, "code": ["func BasicJoin(elems []string) string {", "\tresult := \"\"", "\tfor _, e := range elems {", "\t\tresult += e", "\t}", "\treturn result", "}"]}, {"id": "join", "cat": 2, "rank": 3, "quoi": "Comme basicjoin mais avec un separateur entre chaque element (genre une virgule).", "ex": "Join([\"a\",\"b\"], \",\") -> a,b", "strat": "Plan de jeu : boucle sur la slice, ajoute chaque element a l'accumulateur, et ajoute le separateur seulement si c'est pas le dernier element (sinon t'auras un separateur en trop a la fin).", "concept": "boucle + condition sur index", "hint": "attention au separateur en trop apres le dernier element, c'est le piege classique", "quiz": {"call": "Join([\"a\",\"b\"], \",\")", "correct": "a,b", "wrong": ["A,B", "b,a"]}, "code": ["func Join(strs []string, sep string) string {", "\tresult := \"\"", "\tfor i, s := range strs {", "\t\tresult += s", "\t\tif i != len(strs)-1 {", "\t\t\tresult += sep", "\t\t}", "\t}", "\treturn result", "}"]}, {"id": "flags", "cat": 2, "rank": 4, "quoi": "Gere des flags type --insert/-i et --order/-o sur un string, un peu comme des options de commande.", "ex": "flags -i X -o \"cba\" -> abcX  (insere puis trie)", "strat": "Plan de jeu : parcours `os.Args` et repere si `--insert`/`-i` ou `--order`/`-o` sont presents. Applique l'insertion (concatener le string donne au bon endroit) puis le tri si demande. Traite les flags dans l'ordre ou ils sont donnes.", "concept": "parsing d'arguments", "hint": "traite bien les flags dans l'ordre d'apparition, pas un ordre fixe", "quiz": {"call": "flags -i X -o \"cba\"", "correct": "abcX  (insere puis trie)", "wrong": ["ABCx  (INSERE PUIS TRIE)", ")eirt siup eresni(  Xcba"]}, "code": ["func main() {", "\t// repere --insert/-i et --order/-o dans os.Args", "\t// insere le string donne, puis trie si -o est present", "\tfmt.Println(result)", "}"]}, {"id": "doop", "cat": 2, "rank": 4, "quoi": "Fait une operation (+ - / * %) entre deux valeurs recues en argument, en gerant les divisions par 0 et les erreurs.", "ex": "doop 5 + 3 -> 8", "strat": "Plan de jeu : convertis les deux valeurs en int (verifie qu'elles sont valides), utilise un switch sur l'operateur recu, et gere le cas division/modulo par 0 en n'affichant rien (pas de panic).", "concept": "switch + strconv", "hint": "verifie toujours que les 3 arguments sont bien la avant de calculer quoi que ce soit", "quiz": {"call": "doop 5 + 3", "correct": "8", "wrong": ["9", "-8"]}, "code": ["func main() {", "\ta, _ := strconv.Atoi(os.Args[1])", "\top := os.Args[2]", "\tb, _ := strconv.Atoi(os.Args[3])", "\tswitch op {", "\tcase \"+\": fmt.Println(a + b)", "\tcase \"-\": fmt.Println(a - b)", "\t}", "}"]}, {"id": "cat", "cat": 2, "rank": 3, "quoi": "Recree la commande cat: affiche le contenu d'un ou plusieurs fichiers, ou lit l'entree standard si y'a pas de fichier.", "ex": "cat fichier.txt -> (affiche le contenu du fichier)", "strat": "Plan de jeu : si `len(os.Args)==1`, lis `os.Stdin` avec un `bufio.Scanner` et affiche chaque ligne. Sinon, ouvre chaque fichier des arguments avec `os.ReadFile` et affiche son contenu.", "concept": "os.Stdin / os.ReadFile", "hint": "", "quiz": {"call": "cat fichier.txt", "correct": "(affiche le contenu du fichier)", "wrong": ["(AFFICHE LE CONTENU DU FICHIER)", ")reihcif ud unetnoc el ehciffa("]}, "code": ["func main() {", "\tif len(os.Args) == 1 {", "\t\t// lire os.Stdin ligne par ligne", "\t} else {", "\t\tfor _, f := range os.Args[1:] {", "\t\t\tdata, _ := os.ReadFile(f)", "\t\t\tfmt.Print(string(data))", "\t\t}", "\t}", "}"]}, {"id": "ztail", "cat": 2, "rank": 5, "quoi": "Recree une version simplifiee de la commande tail avec l'option -c (nombre de caracteres a la fin).", "ex": "ztail -c 3 fichier.txt -> (les 3 derniers caracteres)", "strat": "Plan de jeu : recupere le nombre apres `-c`, lis chaque fichier suivant avec `os.ReadFile`, puis affiche les N derniers octets du contenu. Si plusieurs fichiers, affiche le nom du fichier entre chaque avec un saut de ligne, et gere les erreurs sans stopper le programme.", "concept": "os.ReadFile + gestion d'erreurs", "hint": "traite tous les fichiers meme si un seul plante, c'est le piege ici", "quiz": {"call": "ztail -c 3 fichier.txt", "correct": "(les 3 derniers caracteres)", "wrong": ["(LES 3 DERNIERS CARACTERES)", ")seretcarac sreinred 3 sel("]}, "code": ["func main() {", "\tn, _ := strconv.Atoi(os.Args[2])", "\tdata, _ := os.ReadFile(os.Args[3])", "\tfmt.Print(string(data[len(data)-n:]))", "}"]}, {"id": "displayfile", "cat": 2, "rank": 2, "quoi": "Affiche le contenu d'un fichier passe en argument, directement dans le terminal.", "ex": "displayfile note.txt -> (affiche tout le contenu)", "strat": "Plan de jeu : `os.ReadFile(os.Args[1])` recupere le contenu en bytes, convertis en string avec `string(...)` et affiche.", "concept": "os.ReadFile", "hint": "", "quiz": {"call": "displayfile note.txt", "correct": "(affiche tout le contenu)", "wrong": ["(AFFICHE TOUT LE CONTENU)", ")unetnoc el tuot ehciffa("]}, "code": ["func main() {", "\tdata, _ := os.ReadFile(os.Args[1])", "\tfmt.Print(string(data))", "}"]}, {"id": "nbrconvertalpha", "cat": 2, "rank": 3, "quoi": "Convertit un chiffre en la lettre correspondante dans l'alphabet (1=a, 2=b...), avec un flag --upper pour les majuscules.", "ex": "nbrconvertalpha 1 -> a", "strat": "Plan de jeu : verifie d'abord si le premier argument est `--upper`, puis pour chaque argument restant convertis-le en int et calcule la lettre avec `'a' + (n-1)`. Gere les valeurs hors de 1-26 en affichant un espace.", "concept": "arithmetique sur runes + flag", "hint": "", "quiz": {"call": "nbrconvertalpha 1", "correct": "a", "wrong": ["A", "a?"]}, "code": ["func main() {", "\tn, _ := strconv.Atoi(os.Args[1])", "\tif n < 1 || n > 26 {", "\t\tfmt.Print(\" \")", "\t\treturn", "\t}", "\tfmt.Printf(\"%c\", 'a'+n-1)", "}"]}, {"id": "strlen", "cat": 3, "rank": 1, "quoi": "Compte le nombre de runes (caracteres) d'un string et renvoie ce compte.", "ex": "StrLen(\"salut\") -> 5", "strat": "Plan de jeu : boucle `for range s` et incremente un compteur a chaque tour (ne fais pas `len(s)` direct, ca compte les bytes pas les runes, piege classique avec les accents).", "concept": "range sur string", "hint": "len(s) compte les bytes, pas les runes -> danger avec les accents/emojis", "quiz": {"call": "StrLen(\"salut\")", "correct": "5", "wrong": ["6", "-5"]}, "code": ["func StrLen(s string) int {", "\tcount := 0", "\tfor range s {", "\t\tcount++", "\t}", "\treturn count", "}"]}, {"id": "strrev", "cat": 3, "rank": 2, "quoi": "Renverse un string et renvoie le resultat, lettre par lettre a l'envers.", "ex": "StrRev(\"salut\") -> tulas", "strat": "Plan de jeu : convertis le string en slice de runes (`[]rune(s)`), puis boucle du dernier index au premier pour construire le resultat inverse.", "concept": "[]rune conversion", "hint": "", "quiz": {"call": "StrRev(\"salut\")", "correct": "tulas", "wrong": ["TULAS", "salut"]}, "code": ["func StrRev(s string) string {", "\tr := []rune(s)", "\tresult := []rune{}", "\tfor i := len(r) - 1; i >= 0; i-- {", "\t\tresult = append(result, r[i])", "\t}", "\treturn string(result)", "}"]}, {"id": "revwstr", "cat": 3, "rank": 3, "quoi": "Affiche les MOTS d'un string dans l'ordre inverse (pas les lettres, les mots entiers).", "ex": "revwstr \"je suis la\" -> la suis je", "strat": "Plan de jeu : split le string en mots avec `strings.Fields()` ou `strings.Split(s,\" \")`, puis boucle la slice de mots a l'envers pour les afficher.", "concept": "strings.Split + boucle inversee", "hint": "", "quiz": {"call": "revwstr \"je suis la\"", "correct": "la suis je", "wrong": ["LA SUIS JE", "ej sius al"]}, "code": ["func main() {", "\twords := strings.Fields(os.Args[1])", "\tfor i := len(words) - 1; i >= 0; i-- {", "\t\tfmt.Print(words[i], \" \")", "\t}", "}"]}, {"id": "capitalize", "cat": 3, "rank": 2, "quoi": "Met une majuscule au debut de chaque mot et minuscule sur le reste.", "ex": "Capitalize(\"BONJOUR la terre\") -> Bonjour La Terre", "strat": "Plan de jeu : split en mots, pour chaque mot mets la 1ere rune en majuscule (`unicode.ToUpper`) et le reste en minuscule, puis recolle avec des espaces.", "concept": "unicode.ToUpper / ToLower", "hint": "", "quiz": {"call": "Capitalize(\"BONJOUR la terre\")", "correct": "Bonjour La Terre", "wrong": ["bONJOUR lA tERRE", "erreT aL ruojnoB"]}, "code": ["func Capitalize(s string) string {", "\twords := strings.Fields(s)", "\tfor i, w := range words {", "\t\twords[i] = strings.ToUpper(w[:1]) + strings.ToLower(w[1:])", "\t}", "\treturn strings.Join(words, \" \")", "}"]}, {"id": "tolower", "cat": 3, "rank": 1, "quoi": "Met toutes les lettres d'un string en minuscule.", "ex": "ToLower(\"SALUT\") -> salut", "strat": "Plan de jeu : boucle sur chaque rune, applique `unicode.ToLower(r)`, reconstruis le string.", "concept": "unicode.ToLower", "hint": "", "quiz": {"call": "ToLower(\"SALUT\")", "correct": "salut", "wrong": ["SALUT", "tulas"]}, "code": ["func ToLower(s string) string {", "\tresult := []rune(s)", "\tfor i, r := range result {", "\t\tresult[i] = unicode.ToLower(r)", "\t}", "\treturn string(result)", "}"]}, {"id": "toupper", "cat": 3, "rank": 1, "quoi": "Met toutes les lettres d'un string en majuscule.", "ex": "ToUpper(\"salut\") -> SALUT", "strat": "Plan de jeu : meme logique que tolower mais avec `unicode.ToUpper(r)`.", "concept": "unicode.ToUpper", "hint": "", "quiz": {"call": "ToUpper(\"salut\")", "correct": "SALUT", "wrong": ["salut", "TULAS"]}, "code": ["func ToUpper(s string) string {", "\tresult := []rune(s)", "\tfor i, r := range result {", "\t\tresult[i] = unicode.ToUpper(r)", "\t}", "\treturn string(result)", "}"]}, {"id": "switchcase", "cat": 3, "rank": 2, "quoi": "Inverse la casse de chaque lettre: les majuscules deviennent minuscules et vice versa.", "ex": "switchcase \"SaLuT\" -> sAlUt", "strat": "Plan de jeu : boucle sur chaque rune, si c'est une majuscule (`unicode.IsUpper`) tu la mets en minuscule et inversement, sinon tu la laisses telle quelle.", "concept": "unicode.IsUpper / IsLower", "hint": "", "quiz": {"call": "switchcase \"SaLuT\"", "correct": "sAlUt", "wrong": ["SaLuT", "tUlAs"]}, "code": ["func main() {", "\tfor _, r := range os.Args[1] {", "\t\tif unicode.IsUpper(r) {", "\t\t\tfmt.Printf(\"%c\", unicode.ToLower(r))", "\t\t} else {", "\t\t\tfmt.Printf(\"%c\", unicode.ToUpper(r))", "\t\t}", "\t}", "}"]}, {"id": "rot13", "cat": 3, "rank": 3, "quoi": "Decale chaque lettre de 13 positions dans l'alphabet (le fameux chiffrement ROT13).", "ex": "rot13 \"abc\" -> nop", "strat": "Plan de jeu : pour chaque lettre, calcule sa position dans l'alphabet (0-25), ajoute 13, fais un modulo 26 pour boucler si ca depasse 'z', puis reconvertis en lettre. Garde la casse d'origine.", "concept": "modulo + arithmetique sur runes", "hint": "le modulo 26 est indispensable sinon tu sors de l'alphabet apres 'm'", "quiz": {"call": "rot13 \"abc\"", "correct": "nop", "wrong": ["NOP", "pon"]}, "code": ["func main() {", "\tfor _, r := range os.Args[1] {", "\t\tfmt.Printf(\"%c\", rotate(r, 13))", "\t}", "}"]}, {"id": "rot14", "cat": 3, "rank": 3, "quoi": "Meme principe que rot13 mais avec un decalage de 14 lettres.", "ex": "rot14(\"abc\") -> opq", "strat": "Plan de jeu : copie la logique de rot13, change juste le decalage a 14.", "concept": "modulo + arithmetique sur runes", "hint": "", "quiz": {"call": "rot14(\"abc\")", "correct": "opq", "wrong": ["OPQ", "qpo"]}, "code": ["func Rot14(s string) string {", "\tresult := []rune(s)", "\tfor i, r := range result {", "\t\tresult[i] = rotate(r, 14)", "\t}", "\treturn string(result)", "}"]}, {"id": "alphamirror", "cat": 3, "rank": 3, "quoi": "Remplace chaque lettre par son opposee dans l'alphabet (a<->z, b<->y, etc), comme un miroir.", "ex": "alphamirror \"abc\" -> zyx", "strat": "Plan de jeu : pour une minuscule, la formule est `'z' - (r - 'a')`. Meme logique en majuscule avec 'Z' et 'A'. Les autres caracteres restent inchanges.", "concept": "arithmetique sur runes", "hint": "", "quiz": {"call": "alphamirror \"abc\"", "correct": "zyx", "wrong": ["ZYX", "xyz"]}, "code": ["func main() {", "\tfor _, r := range os.Args[1] {", "\t\tif r >= 'a' && r <= 'z' {", "\t\t\tfmt.Printf(\"%c\", 'z'-(r-'a'))", "\t\t}", "\t}", "}"]}, {"id": "alphacount", "cat": 3, "rank": 1, "quoi": "Compte uniquement les lettres de l'alphabet latin dans un string, ignore chiffres et symboles.", "ex": "AlphaCount(\"Hello 78!\") -> 5", "strat": "Plan de jeu : boucle sur chaque rune, verifie si c'est une lettre avec `unicode.IsLetter(r)`, incremente un compteur si oui.", "concept": "unicode.IsLetter", "hint": "", "quiz": {"call": "AlphaCount(\"Hello 78!\")", "correct": "5", "wrong": ["6", "-5"]}, "code": ["func AlphaCount(s string) int {", "\tcount := 0", "\tfor _, r := range s {", "\t\tif unicode.IsLetter(r) {", "\t\t\tcount++", "\t\t}", "\t}", "\treturn count", "}"]}, {"id": "isalpha", "cat": 3, "rank": 1, "quoi": "Verifie si un string ne contient que des lettres/chiffres (alphanumerique) ou est vide.", "ex": "IsAlpha(\"abc123\") -> true", "strat": "Plan de jeu : boucle sur chaque rune, si une seule n'est ni lettre ni chiffre (`unicode.IsLetter` ou `unicode.IsDigit`), renvoie false direct. Si t'arrives au bout, renvoie true.", "concept": "unicode.IsLetter / IsDigit", "hint": "", "quiz": {"call": "IsAlpha(\"abc123\")", "correct": "true", "wrong": ["false", "0"]}, "code": ["func IsAlpha(s string) bool {", "\tfor _, r := range s {", "\t\tif !unicode.IsLetter(r) && !unicode.IsDigit(r) {", "\t\t\treturn false", "\t\t}", "\t}", "\treturn true", "}"]}, {"id": "islower", "cat": 3, "rank": 1, "quoi": "Verifie si un string ne contient que des minuscules.", "ex": "IsLower(\"abc\") -> true", "strat": "Plan de jeu : boucle sur chaque rune, des qu'une n'est pas minuscule (`unicode.IsLower`) renvoie false, sinon true a la fin.", "concept": "unicode.IsLower", "hint": "", "quiz": {"call": "IsLower(\"abc\")", "correct": "true", "wrong": ["false", "0"]}, "code": ["func IsLower(s string) bool {", "\tfor _, r := range s {", "\t\tif !unicode.IsLower(r) {", "\t\t\treturn false", "\t\t}", "\t}", "\treturn true", "}"]}, {"id": "isupper", "cat": 3, "rank": 1, "quoi": "Verifie si un string ne contient que des majuscules.", "ex": "IsUpper(\"ABC\") -> true", "strat": "Plan de jeu : meme logique que islower mais avec `unicode.IsUpper`.", "concept": "unicode.IsUpper", "hint": "", "quiz": {"call": "IsUpper(\"ABC\")", "correct": "true", "wrong": ["false", "0"]}, "code": ["func IsUpper(s string) bool {", "\tfor _, r := range s {", "\t\tif !unicode.IsUpper(r) {", "\t\t\treturn false", "\t\t}", "\t}", "\treturn true", "}"]}, {"id": "isnumeric", "cat": 3, "rank": 1, "quoi": "Verifie si un string ne contient que des chiffres.", "ex": "IsNumeric(\"123\") -> true", "strat": "Plan de jeu : boucle sur chaque rune, verifie `unicode.IsDigit(r)` pour chacune.", "concept": "unicode.IsDigit", "hint": "", "quiz": {"call": "IsNumeric(\"123\")", "correct": "true", "wrong": ["false", "0"]}, "code": ["func IsNumeric(s string) bool {", "\tfor _, r := range s {", "\t\tif !unicode.IsDigit(r) {", "\t\t\treturn false", "\t\t}", "\t}", "\treturn true", "}"]}, {"id": "isprintable", "cat": 3, "rank": 2, "quoi": "Verifie si un string ne contient que des caracteres affichables (pas de caracteres invisibles/bizarres).", "ex": "IsPrintable(\"abc\") -> true", "strat": "Plan de jeu : boucle sur chaque rune et verifie `unicode.IsPrint(r)`. Renvoie false si une seule rune n'est pas affichable.", "concept": "unicode.IsPrint", "hint": "", "quiz": {"call": "IsPrintable(\"abc\")", "correct": "true", "wrong": ["false", "0"]}, "code": ["func IsPrintable(s string) bool {", "\tfor _, r := range s {", "\t\tif !unicode.IsPrint(r) {", "\t\t\treturn false", "\t\t}", "\t}", "\treturn true", "}"]}, {"id": "firstrune", "cat": 3, "rank": 1, "quoi": "Renvoie la toute premiere rune (caractere) d'un string.", "ex": "FirstRune(\"salut\") -> s", "strat": "Plan de jeu : convertis en `[]rune(s)` et renvoie l'index 0. Gere le cas string vide pour pas planter.", "concept": "[]rune conversion", "hint": "", "quiz": {"call": "FirstRune(\"salut\")", "correct": "s", "wrong": ["S", "s?"]}, "code": ["func FirstRune(s string) rune {", "\tr := []rune(s)", "\treturn r[0]", "}"]}, {"id": "lastrune", "cat": 3, "rank": 1, "quoi": "Renvoie la toute derniere rune d'un string.", "ex": "LastRune(\"salut\") -> t", "strat": "Plan de jeu : convertis en `[]rune(s)` et renvoie le dernier index (`len-1`).", "concept": "[]rune conversion", "hint": "", "quiz": {"call": "LastRune(\"salut\")", "correct": "t", "wrong": ["T", "t?"]}, "code": ["func LastRune(s string) rune {", "\tr := []rune(s)", "\treturn r[len(r)-1]", "}"]}, {"id": "nrune", "cat": 3, "rank": 2, "quoi": "Renvoie la rune a la position n d'un string. Si ca depasse, renvoie 0.", "ex": "NRune(\"salut\", 2) -> l", "strat": "Plan de jeu : convertis en `[]rune(s)`, verifie que n est dans les bornes (0 a len-1), sinon renvoie 0.", "concept": "[]rune + verification de bornes", "hint": "", "quiz": {"call": "NRune(\"salut\", 2)", "correct": "l", "wrong": ["L", "l?"]}, "code": ["func NRune(s string, n int) rune {", "\tr := []rune(s)", "\tif n < 0 || n >= len(r) {", "\t\treturn 0", "\t}", "\treturn r[n]", "}"]}, {"id": "rostring", "cat": 3, "rank": 4, "quoi": "Fait tourner un string d'un mot vers la gauche: le premier mot devient le dernier.", "ex": "rostring \"un deux trois\" -> deux trois un", "strat": "Plan de jeu : split en mots, prends le mot d'index 0 et remets-le a la fin de la slice, puis rejoins avec des espaces.", "concept": "strings.Split + rotation de slice", "hint": "", "quiz": {"call": "rostring \"un deux trois\"", "correct": "deux trois un", "wrong": ["DEUX TROIS UN", "nu siort xued"]}, "code": ["func main() {", "\twords := strings.Fields(os.Args[1])", "\tfirst := words[0]", "\twords = append(words[1:], first)", "\tfmt.Println(strings.Join(words, \" \"))", "}"]}, {"id": "expandstr", "cat": 3, "rank": 2, "quoi": "Reecrit un string avec exactement 3 espaces entre chaque mot, sans espace au debut/fin.", "ex": "expandstr \" a  b \" -> a   b", "strat": "Plan de jeu : split le string avec `strings.Fields()` (ca vire deja tous les espaces en trop et les bords), puis rejoins les mots avec `strings.Join(mots, \"   \")` (3 espaces).", "concept": "strings.Fields + strings.Join", "hint": "strings.Fields fait deja tout le nettoyage pour toi, pas besoin de coder ca a la main", "quiz": {"call": "expandstr \" a  b \"", "correct": "a   b", "wrong": ["A   B", "b   a"]}, "code": ["func main() {", "\twords := strings.Fields(os.Args[1])", "\tfmt.Println(strings.Join(words, \"   \"))", "}"]}, {"id": "cleanstr", "cat": 3, "rank": 2, "quoi": "Nettoie un string: un seul espace entre les mots, rien au debut ni a la fin.", "ex": "cleanstr \"  a   b  \" -> a b", "strat": "Plan de jeu : meme technique qu'expandstr mais tu rejoins avec un seul espace : `strings.Join(strings.Fields(s), \" \")`.", "concept": "strings.Fields + strings.Join", "hint": "", "quiz": {"call": "cleanstr \"  a   b  \"", "correct": "a b", "wrong": ["A B", "b a"]}, "code": ["func main() {", "\twords := strings.Fields(os.Args[1])", "\tfmt.Println(strings.Join(words, \" \"))", "}"]}, {"id": "wdmatch", "cat": 3, "rank": 5, "quoi": "Verifie si tu peux ecrire le 1er string en piochant des lettres dans le 2eme, dans l'ordre.", "ex": "wdmatch \"abc\" \"aabbcc\" -> abc", "strat": "Plan de jeu : garde un index sur le 1er string, parcours le 2eme string caractere par caractere. Des que ca matche avec la lettre courante du 1er, tu avances ton index. Si t'as parcouru tout le 1er string a la fin, c'est un match.", "concept": "double pointeur / two-pointer", "hint": "c'est une technique 'two-pointer' classique, tres utile a retenir pour plein d'autres exos", "quiz": {"call": "wdmatch \"abc\" \"aabbcc\"", "correct": "abc", "wrong": ["ABC", "cba"]}, "code": ["func main() {", "\ts1, s2 := os.Args[1], os.Args[2]", "\ti := 0", "\tfor _, r := range s2 {", "\t\tif i < len(s1) && rune(s1[i]) == r { i++ }", "\t}", "\tif i == len(s1) { fmt.Println(s1) }", "}"]}, {"id": "piglatin", "cat": 3, "rank": 5, "quoi": "Transforme un string en Pig Latin: regle de langage codee sur les voyelles/consonnes.", "ex": "piglatin \"hello\" -> ellohay", "strat": "Plan de jeu : split en mots. Pour chaque mot, si la 1ere lettre est une voyelle, ajoute juste 'ay' a la fin. Sinon, trouve toutes les consonnes avant la 1ere voyelle, deplace-les a la fin du mot et ajoute 'ay'. Si aucune voyelle, affiche 'No vowels'.", "concept": "boucle + decoupe de string", "hint": "traite un mot a la fois, teste d'abord sur des mots simples avant les cas complexes", "quiz": {"call": "piglatin \"hello\"", "correct": "ellohay", "wrong": ["ELLOHAY", "yaholle"]}, "code": ["func main() {", "\tw := os.Args[1]", "\tif isVowel(w[0]) {", "\t\tfmt.Println(w + \"ay\")", "\t} else {", "\t\ti := firstVowelIndex(w)", "\t\tfmt.Println(w[i:] + w[:i] + \"ay\")", "\t}", "}"]}, {"id": "reversestrcap", "cat": 3, "rank": 3, "quoi": "Met la derniere lettre de chaque mot en majuscule et le reste en minuscule.", "ex": "reversestrcap \"bonjour\" -> bonjouR", "strat": "Plan de jeu : split en mots, pour chaque mot mets tout en minuscule sauf la derniere lettre en majuscule, puis rejoins.", "concept": "strings.Split + manipulation de rune", "hint": "", "quiz": {"call": "reversestrcap \"bonjour\"", "correct": "bonjouR", "wrong": ["BONJOUr", "Ruojnob"]}, "code": ["func main() {", "\tfor _, arg := range os.Args[1:] {", "\t\twords := strings.Fields(arg)", "\t\tfor i, w := range words {", "\t\t\twords[i] = strings.ToLower(w[:len(w)-1]) + strings.ToUpper(w[len(w)-1:])", "\t\t}", "\t\tfmt.Println(strings.Join(words, \" \"))", "\t}", "}"]}, {"id": "repeatalpha", "cat": 3, "rank": 4, "quoi": "Repete chaque lettre alphabetique autant de fois que sa position dans l'alphabet (a=1x, b=2x...).", "ex": "RepeatAlpha(\"abe\") -> abbeeeee", "strat": "Plan de jeu : pour chaque lettre, calcule sa position (`r - 'a' + 1` ou equivalent en majuscule), puis boucle ce nombre de fois pour l'ajouter au resultat.", "concept": "arithmetique sur runes + boucle imbriquee", "hint": "", "quiz": {"call": "RepeatAlpha(\"abe\")", "correct": "abbeeeee", "wrong": ["ABBEEEEE", "eeeeebba"]}, "code": ["func RepeatAlpha(s string) string {", "\tresult := \"\"", "\tfor _, r := range s {", "\t\tn := int(unicode.ToLower(r)-'a') + 1", "\t\tresult += strings.Repeat(string(r), n)", "\t}", "\treturn result", "}"]}, {"id": "hiddenp", "cat": 3, "rank": 5, "quoi": "Verifie si les lettres du 1er string se retrouvent dans le 2eme, dans le meme ordre, pas forcement collees.", "ex": "hiddenp \"ace\" \"abcde\" -> 1", "strat": "Plan de jeu : exactement la meme technique two-pointer que wdmatch. Un index sur s1, tu parcours s2, tu avances l'index de s1 des que ca matche. String vide = toujours cache donc 1.", "concept": "double pointeur / two-pointer", "hint": "meme algo que wdmatch, si t'as compris l'un t'as compris l'autre", "quiz": {"call": "hiddenp \"ace\" \"abcde\"", "correct": "1", "wrong": ["2", "-1"]}, "code": ["func main() {", "\ts1, s2 := os.Args[1], os.Args[2]", "\ti := 0", "\tfor _, r := range s2 {", "\t\tif i < len(s1) && rune(s1[i]) == r { i++ }", "\t}", "\tfmt.Println(boolToInt(i == len(s1)))", "}"]}, {"id": "searchreplace", "cat": 3, "rank": 2, "quoi": "Remplace toutes les occurrences d'une lettre par une autre dans un string.", "ex": "searchreplace \"salut\" a e -> selut", "strat": "Plan de jeu : boucle sur chaque rune du string, si elle correspond a la lettre a remplacer tu mets la nouvelle a la place, sinon tu gardes l'originale.", "concept": "boucle + comparaison de rune", "hint": "", "quiz": {"call": "searchreplace \"salut\" a e", "correct": "selut", "wrong": ["SELUT", "tules"]}, "code": ["func main() {", "\ts, old, new := os.Args[1], os.Args[2], os.Args[3]", "\tfmt.Println(strings.ReplaceAll(s, old, new))", "}"]}, {"id": "firstword", "cat": 3, "rank": 1, "quoi": "Renvoie le premier mot d'un string.", "ex": "FirstWord(\"salut toi\") -> salut", "strat": "Plan de jeu : `strings.Fields(s)` te sort une slice de mots, renvoie l'index 0 (avec verification si la slice est vide).", "concept": "strings.Fields", "hint": "", "quiz": {"call": "FirstWord(\"salut toi\")", "correct": "salut", "wrong": ["SALUT", "tulas"]}, "code": ["func FirstWord(s string) string {", "\twords := strings.Fields(s)", "\tif len(words) == 0 {", "\t\treturn \"\"", "\t}", "\treturn words[0]", "}"]}, {"id": "lastword", "cat": 3, "rank": 2, "quoi": "Renvoie le dernier mot d'un string.", "ex": "LastWord(\"salut toi\") -> toi", "strat": "Plan de jeu : `strings.Fields(s)`, renvoie le dernier index de la slice de mots.", "concept": "strings.Fields", "hint": "", "quiz": {"call": "LastWord(\"salut toi\")", "correct": "toi", "wrong": ["TOI", "iot"]}, "code": ["func LastWord(s string) string {", "\twords := strings.Fields(s)", "\tif len(words) == 0 {", "\t\treturn \"\"", "\t}", "\treturn words[len(words)-1]", "}"]}, {"id": "loafofbread", "cat": 3, "rank": 5, "quoi": "Decoupe un string en morceaux de 5 caracteres, en sautant le caractere juste apres chaque tranche.", "ex": "LoafOfBread(\"abcdefghij\") -> abcde\\nghij", "strat": "Plan de jeu : avance dans le string par blocs de 6 : prends 5 caracteres (en ignorant les espaces au milieu, faut continuer a chercher le prochain caractere), affiche-les, saute le caractere suivant, repete. Si le reste fait moins de 5, affiche \"Invalid Output\".", "concept": "boucle avec index manuel", "hint": "note bien la regle exacte du README, c'est un exo a piege sur les espaces", "quiz": {"call": "LoafOfBread(\"abcdefghij\")", "correct": "abcde\\nghij", "wrong": ["ABCDE\\NGHIJ", "jihgn\\edcba"]}, "code": ["func LoafOfBread(str string) string {", "\t// avance par blocs de 5 caracteres non-espaces", "\t// saute le caractere juste apres chaque bloc", "\treturn result", "}"]}, {"id": "atoi", "cat": 4, "rank": 3, "quoi": "Transforme un string en int (comme la fonction Atoi de Go), gere les signes + et -, renvoie 0 si invalide.", "ex": "Atoi(\"-42\") -> -42", "strat": "Plan de jeu : ignore les espaces au debut, gere un signe +/- au tout debut, puis accumule les chiffres avec `n = n*10 + int(r-'0')`. Des qu'un caractere n'est pas un chiffre en plein milieu, renvoie 0.", "concept": "parsing manuel", "hint": "attention aux signes doubles comme '++' ou '--', c'est invalide, ca doit renvoyer 0", "quiz": {"call": "Atoi(\"-42\")", "correct": "-42", "wrong": ["-41", "42"]}, "code": ["func Atoi(s string) int {", "\tn, sign := 0, 1", "\tfor _, r := range s {", "\t\tif r == '-' { sign = -1; continue }", "\t\tif r < '0' || r > '9' { return 0 }", "\t\tn = n*10 + int(r-'0')", "\t}", "\treturn n * sign", "}"]}, {"id": "atoibase", "cat": 4, "rank": 4, "quoi": "Convertit un string represantant un nombre dans une base donnee, vers un int en base 10.", "ex": "AtoiBase(\"101\",\"01\") -> 5", "strat": "Plan de jeu : pour chaque caractere du string, trouve sa position dans la base (avec `strings.IndexRune`), et accumule avec `n = n*len(base) + position`.", "concept": "conversion de base + strings.IndexRune", "hint": "c'est l'inverse exact de printnbrbase, meme logique a l'envers", "quiz": {"call": "AtoiBase(\"101\",\"01\")", "correct": "5", "wrong": ["6", "-5"]}, "code": ["func AtoiBase(s string, base string) int {", "\tn := 0", "\tfor _, r := range s {", "\t\tpos := strings.IndexRune(base, r)", "\t\tn = n*len(base) + pos", "\t}", "\treturn n", "}"]}, {"id": "basicatoi", "cat": 4, "rank": 2, "quoi": "Version simplifiee de atoi: le string est toujours valide et ne contient que des chiffres.", "ex": "BasicAtoi(\"123\") -> 123", "strat": "Plan de jeu : boucle sur chaque caractere, accumule avec `n = n*10 + int(r-'0')`. Pas besoin de gerer les erreurs ici, c'est le mode facile.", "concept": "parsing manuel", "hint": "", "quiz": {"call": "BasicAtoi(\"123\")", "correct": "123", "wrong": ["124", "-123"]}, "code": ["func BasicAtoi(s string) int {", "\tn := 0", "\tfor _, r := range s {", "\t\tn = n*10 + int(r-'0')", "\t}", "\treturn n", "}"]}, {"id": "basicatoi2", "cat": 4, "rank": 3, "quoi": "Version un peu plus corsee de atoi: le string peut contenir des trucs invalides a filtrer.", "ex": "BasicAtoi2(\"12a3\") -> 0", "strat": "Plan de jeu : meme base que basicatoi, mais des qu'un caractere n'est pas un chiffre tu arretes de lire (ou tu renvoies 0 selon la regle exacte du README, verifie bien).", "concept": "parsing manuel + validation", "hint": "", "quiz": {"call": "BasicAtoi2(\"12a3\")", "correct": "0", "wrong": ["1", "-1"]}, "code": ["func BasicAtoi2(s string) int {", "\tn := 0", "\tfor _, r := range s {", "\t\tif r < '0' || r > '9' { return 0 }", "\t\tn = n*10 + int(r-'0')", "\t}", "\treturn n", "}"]}, {"id": "trimatoi", "cat": 4, "rank": 3, "quoi": "Extrait les chiffres caches dans un string et les transforme en int, gere le signe -.", "ex": "TrimAtoi(\"abc-42def\") -> -42", "strat": "Plan de jeu : parcours le string, ignore tout ce qui n'est pas chiffre jusqu'a trouver le premier chiffre (en captant un '-' juste avant s'il y en a un), puis accumule les chiffres qui suivent jusqu'au premier non-chiffre.", "concept": "parsing manuel + signe", "hint": "", "quiz": {"call": "TrimAtoi(\"abc-42def\")", "correct": "-42", "wrong": ["-41", "42"]}, "code": ["func TrimAtoi(s string) int {", "\tn, sign, started := 0, 1, false", "\tfor _, r := range s {", "\t\tif r == '-' && !started { sign = -1; continue }", "\t\tif r >= '0' && r <= '9' { started = true; n = n*10 + int(r-'0') } else if started { break }", "\t}", "\treturn n * sign", "}"]}, {"id": "divmod", "cat": 4, "rank": 3, "quoi": "Divise deux int et stocke le resultat ET le reste dans deux pointeurs donnes.", "ex": "DivMod(10,3,&d,&m) -> d=3 m=1", "strat": "Plan de jeu : `*div = a / b` et `*mod = a % b`. Direct, deux lignes.", "concept": "pointeurs + division", "hint": "", "quiz": {"call": "DivMod(10,3,&d,&m)", "correct": "d=3 m=1", "wrong": ["D=3 M=1", "1=m 3=d"]}, "code": ["func DivMod(a int, b int, div *int, mod *int) {", "\t*div = a / b", "\t*mod = a % b", "}"]}, {"id": "ultimatedivmod", "cat": 4, "rank": 4, "quoi": "Pareil que divmod mais les deux nombres a diviser sont eux-memes passes par pointeur.", "ex": "a=10,b=3 -> a devient 3, b devient 1", "strat": "Plan de jeu : dereference `a` et `b` avec `*a` et `*b` pour recuperer les valeurs, calcule division et modulo, puis stocke le resultat dans `*a` et le reste dans `*b`.", "concept": "pointeurs imbriques", "hint": "attention a l'ordre : calcule d'abord les deux resultats AVANT de reecrire *a, sinon tu perds la valeur originale", "quiz": {"call": "a=10,b=3", "correct": "a devient 3, b devient 1", "wrong": ["A DEVIENT 3, B DEVIENT 1", "1 tneived b ,3 tneived a"]}, "code": ["func UltimateDivMod(a *int, b *int) {", "\tdiv := *a / *b", "\tmod := *a % *b", "\t*a = div", "\t*b = mod", "}"]}, {"id": "gcd", "cat": 4, "rank": 3, "quoi": "Calcule le PGCD (plus grand commun diviseur) de deux nombres positifs.", "ex": "GCD(12, 18) -> 6", "strat": "Plan de jeu : implemente l'algorithme d'Euclide : tant que b != 0, fais `a, b = b, a%b`, renvoie a a la fin. Ou fais-le en recursif, les deux marchent.", "concept": "algorithme d'Euclide", "hint": "", "quiz": {"call": "GCD(12, 18)", "correct": "6", "wrong": ["7", "-6"]}, "code": ["func GCD(a, b uint) uint {", "\tfor b != 0 {", "\t\ta, b = b, a%b", "\t}", "\treturn a", "}"]}, {"id": "isprime", "cat": 4, "rank": 2, "quoi": "Verifie si un int est un nombre premier.", "ex": "IsPrime(7) -> true", "strat": "Plan de jeu : si n < 2 renvoie false. Boucle de 2 jusqu'a la racine carree de n, si un diviseur existe renvoie false, sinon true.", "concept": "boucle jusqu'a racine carree", "hint": "tester jusqu'a sqrt(n) suffit, pas besoin d'aller jusqu'a n", "quiz": {"call": "IsPrime(7)", "correct": "true", "wrong": ["false", "0"]}, "code": ["func IsPrime(nb int) bool {", "\tif nb < 2 { return false }", "\tfor i := 2; i*i <= nb; i++ {", "\t\tif nb%i == 0 { return false }", "\t}", "\treturn true", "}"]}, {"id": "fprime", "cat": 4, "rank": 4, "quoi": "Affiche tous les facteurs premiers d'un nombre, tries et separes par des *.", "ex": "fprime 12 -> 2*2*3", "strat": "Plan de jeu : boucle un diviseur d de 2 vers le haut, tant que d divise n, affiche d et fais n /= d, sinon incremente d. Continue jusqu'a n==1.", "concept": "factorisation en nombres premiers", "hint": "", "quiz": {"call": "fprime 12", "correct": "2*2*3", "wrong": ["2*2*3 (bis)", "3*2*2"]}, "code": ["func main() {", "\tn, _ := strconv.Atoi(os.Args[1])", "\tfor d := 2; n > 1; d++ {", "\t\tfor n%d == 0 {", "\t\t\tfmt.Printf(\"%d*\", d)", "\t\t\tn /= d", "\t\t}", "\t}", "}"]}, {"id": "findnextprime", "cat": 4, "rank": 4, "quoi": "Trouve le premier nombre premier superieur ou egal a un nombre donne (faut que ce soit rapide, pas de timeout).", "ex": "FindNextPrime(8) -> 11", "strat": "Plan de jeu : reutilise ta fonction isprime, boucle a partir de n et incremente jusqu'a trouver un premier. Assure-toi que ton isprime est optimise (boucle jusqu'a sqrt), sinon ca timeout sur les gros nombres.", "concept": "boucle + isprime optimise", "hint": "", "quiz": {"call": "FindNextPrime(8)", "correct": "11", "wrong": ["12", "-11"]}, "code": ["func FindNextPrime(nb int) int {", "\tfor !IsPrime(nb) {", "\t\tnb++", "\t}", "\treturn nb", "}"]}, {"id": "findprevprime", "cat": 4, "rank": 3, "quoi": "Trouve le premier nombre premier inferieur ou egal a un nombre donne.", "ex": "FindPrevPrime(8) -> 7", "strat": "Plan de jeu : meme logique que findnextprime mais tu decremptes au lieu d'incrementer. Renvoie 0 si tu descends sous 2 sans rien trouver.", "concept": "boucle + isprime optimise", "hint": "", "quiz": {"call": "FindPrevPrime(8)", "correct": "7", "wrong": ["8", "-7"]}, "code": ["func FindPrevPrime(nb int) int {", "\tfor nb >= 2 {", "\t\tif IsPrime(nb) { return nb }", "\t\tnb--", "\t}", "\treturn 0", "}"]}, {"id": "addprimesum", "cat": 4, "rank": 3, "quoi": "Additionne tous les nombres premiers inferieurs ou egaux a un nombre donne.", "ex": "addprimesum 5 -> 10", "strat": "Plan de jeu : boucle de 2 a n, verifie chaque nombre avec isprime, additionne-le a un total si c'est premier.", "concept": "boucle + isprime", "hint": "", "quiz": {"call": "addprimesum 5", "correct": "10", "wrong": ["11", "-10"]}, "code": ["func main() {", "\tn, _ := strconv.Atoi(os.Args[1])", "\tsum := 0", "\tfor i := 2; i <= n; i++ {", "\t\tif IsPrime(i) { sum += i }", "\t}", "\tfmt.Println(sum)", "}"]}, {"id": "ispowerof2", "cat": 4, "rank": 2, "quoi": "Verifie si un nombre est une puissance de 2 (genre 4, 8, 16...).", "ex": "ispowerof2 16 -> true", "strat": "Plan de jeu : divise n par 2 en boucle tant qu'il est pair et > 1. Si tu tombes pile sur 1, c'est une puissance de 2. Astuce bit a bit : `n & (n-1) == 0` marche aussi direct.", "concept": "boucle ou astuce bit a bit", "hint": "n & (n-1) == 0 est le combo le plus rapide si tu connais les bits", "quiz": {"call": "ispowerof2 16", "correct": "true", "wrong": ["false", "0"]}, "code": ["func main() {", "\tn, _ := strconv.Atoi(os.Args[1])", "\tfmt.Println(n&(n-1) == 0)", "}"]}, {"id": "isnegative", "cat": 4, "rank": 1, "quoi": "Affiche T si le nombre est negatif, F sinon.", "ex": "IsNegative(-5) -> T", "strat": "Plan de jeu : simple `if nb < 0` puis affiche 'T' ou 'F' selon le cas.", "concept": "condition simple", "hint": "", "quiz": {"call": "IsNegative(-5)", "correct": "T", "wrong": ["F", "true"]}, "code": ["func IsNegative(nb int) {", "\tif nb < 0 {", "\t\tfmt.Println(\"T\")", "\t} else {", "\t\tfmt.Println(\"F\")", "\t}", "}"]}, {"id": "countdown", "cat": 4, "rank": 1, "quoi": "Affiche tous les chiffres en ordre decroissant, de 9 a 0.", "ex": "go run . -> 9876543210", "strat": "Plan de jeu : boucle `for c := '9'; c >= '0'; c--`, affiche chaque caractere.", "concept": "arithmetique sur runes", "hint": "", "quiz": {"call": "go run .", "correct": "9876543210", "wrong": ["9876543211", "-9876543210"]}, "code": ["func main() {", "\tfor c := '9'; c >= '0'; c-- {", "\t\tfmt.Printf(\"%c\", c)", "\t}", "}"]}, {"id": "collatzcountdown", "cat": 4, "rank": 4, "quoi": "Compte le nombre d'etapes pour atteindre 1 avec la fameuse conjecture de Collatz.", "ex": "CollatzCountdown(6) -> 8", "strat": "Plan de jeu : si start <= 0 renvoie -1. Sinon boucle : si n est pair, n = n/2, sinon n = 3n+1, incremente un compteur d'etapes a chaque tour jusqu'a n==1.", "concept": "boucle + condition pair/impair", "hint": "", "quiz": {"call": "CollatzCountdown(6)", "correct": "8", "wrong": ["9", "-8"]}, "code": ["func CollatzCountdown(start int) int {", "\tif start <= 0 { return -1 }", "\tsteps := 0", "\tfor start != 1 {", "\t\tif start%2 == 0 { start /= 2 } else { start = 3*start + 1 }", "\t\tsteps++", "\t}", "\treturn steps", "}"]}, {"id": "convertbase", "cat": 4, "rank": 4, "quoi": "Convertit un nombre d'une base vers une autre (genre binaire vers hexa).", "ex": "ConvertBase(\"ff\",\"0123456789abcdef\",\"01\") -> 11111111", "strat": "Plan de jeu : deux etapes. D'abord convertis le string de la base source vers un int en base 10 (comme atoibase). Ensuite convertis cet int vers la base cible (comme printnbrbase mais en renvoyant un string).", "concept": "combo atoibase + printnbrbase", "hint": "c'est litteralement la fusion de deux exos que t'as deja fait, reutilise ton code", "quiz": {"call": "ConvertBase(\"ff\",\"0123456789abcdef\",\"01\")", "correct": "11111111", "wrong": ["11111112", "-11111111"]}, "code": ["func ConvertBase(nbr, baseFrom, baseTo string) string {", "\tn := AtoiBase(nbr, baseFrom)", "\treturn PrintNbrBaseStr(n, baseTo)", "}"]}, {"id": "romannumbers", "cat": 4, "rank": 4, "quoi": "Convertit un nombre en chiffres romains, limite a 4000, avec gestion d'erreur.", "ex": "rn 2024 -> MMXXIV", "strat": "Plan de jeu : cree une table de correspondance (valeurs decroissantes : 1000=M, 900=CM, 500=D, 400=CD... jusqu'a 1=I). Parcours cette table dans l'ordre, tant que n >= valeur, soustrais et ajoute le symbole au resultat.", "concept": "algorithme glouton avec table de correspondance", "hint": "la table doit inclure les cas soustractifs comme 900=CM et 40=XL, pas juste les valeurs de base", "quiz": {"call": "rn 2024", "correct": "MMXXIV", "wrong": ["mmxxiv", "VIXXMM"]}, "code": ["func main() {", "\tvals := []int{1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1}", "\tsyms := []string{\"M\",\"CM\",\"D\",\"CD\",\"C\",\"XC\",\"L\",\"XL\",\"X\",\"IX\",\"V\",\"IV\",\"I\"}", "\tfor i, v := range vals {", "\t\tfor n >= v { fmt.Print(syms[i]); n -= v }", "\t}", "}"]}, {"id": "reversebits", "cat": 4, "rank": 4, "quoi": "Prend un byte et renverse ses bits un par un (le premier devient le dernier).", "ex": "ReverseBits(1) -> 128", "strat": "Plan de jeu : boucle sur les 8 bits, pour chaque bit i du nombre d'origine, place-le a la position (7-i) dans le resultat en utilisant des masques et des decalages (`<<` et `>>`).", "concept": "operateurs bit a bit", "hint": "", "quiz": {"call": "ReverseBits(1)", "correct": "128", "wrong": ["129", "-128"]}, "code": ["func ReverseBits(oct byte) byte {", "\tvar result byte", "\tfor i := 0; i < 8; i++ {", "\t\tresult |= ((oct >> i) & 1) << (7 - i)", "\t}", "\treturn result", "}"]}, {"id": "swapbits", "cat": 4, "rank": 4, "quoi": "Prend un byte et echange sa premiere moitie avec sa deuxieme moitie.", "ex": "SwapBits(240) -> 15", "strat": "Plan de jeu : isole les 4 bits de gauche avec un masque et un decalage a droite, isole les 4 bits de droite avec un masque, puis recombine en decalant celle de droite vers la gauche et vice versa.", "concept": "operateurs bit a bit + masques", "hint": "", "quiz": {"call": "SwapBits(240)", "correct": "15", "wrong": ["16", "-15"]}, "code": ["func SwapBits(octet byte) byte {", "\tleft := (octet & 0xF0) >> 4", "\tright := (octet & 0x0F) << 4", "\treturn left | right", "}"]}, {"id": "point", "cat": 4, "rank": 3, "quoi": "Exercice sur les pointeurs et structs: corriger un code donne pour qu'il fonctionne avec setPoint().", "ex": "setPoint(&p) -> p.x devient 42", "strat": "Plan de jeu : le code de base a des bugs (souvent un type qui devrait etre un pointeur mais qui ne l'est pas). Repere ou la fonction devrait modifier la struct originale et corrige les types/passages par pointeur.", "concept": "pointeurs + struct", "hint": "", "quiz": {"call": "setPoint(&p)", "correct": "p.x devient 42", "wrong": ["P.X DEVIENT 42", "24 tneived x.p"]}, "code": ["func setPoint(ptr *point) {", "\tptr.x = 42", "\tptr.y = 42", "}"]}, {"id": "pointone", "cat": 4, "rank": 2, "quoi": "Prend un pointeur sur un int et lui donne la valeur 1 (modification directe en memoire).", "ex": "n := 5; PointOne(&n) -> n vaut 1", "strat": "Plan de jeu : `*n = 1`. Une ligne, tu dereferences le pointeur pour ecrire directement dans la case memoire visee.", "concept": "dereferencement de pointeur", "hint": "", "quiz": {"call": "n := 5; PointOne(&n)", "correct": "n vaut 1", "wrong": ["N VAUT 1", "1 tuav n"]}, "code": ["func PointOne(n *int) {", "\t*n = 1", "}"]}, {"id": "ultimatepointone", "cat": 4, "rank": 5, "quoi": "Comme pointone mais avec un pointeur de pointeur de pointeur (*** ), le boss final des pointeurs.", "ex": "n := 5; UltimatePointOne(&&&n) -> n vaut 1", "strat": "Plan de jeu : dereference 3 fois pour atteindre l'int final : `***n = 1`. Chaque `*` enleve un niveau d'indirection, comme ouvrir 3 coffres emboites pour choper le loot a l'interieur.", "concept": "triple dereferencement", "hint": "chaque etoile = un niveau de coffre a ouvrir, ***n atteint direct le tresor final", "quiz": {"call": "n := 5; UltimatePointOne(&&&n)", "correct": "n vaut 1", "wrong": ["N VAUT 1", "1 tuav n"]}, "code": ["func UltimatePointOne(n ***int) {", "\t***n = 1", "}"]}, {"id": "swap", "cat": 4, "rank": 2, "quoi": "Prend deux pointeurs sur des int et echange leur contenu.", "ex": "a,b := 1,2; Swap(&a,&b) -> a=2 b=1", "strat": "Plan de jeu : utilise une variable temporaire : `tmp := *a; *a = *b; *b = tmp`.", "concept": "pointeurs + variable temporaire", "hint": "", "quiz": {"call": "a,b := 1,2; Swap(&a,&b)", "correct": "a=2 b=1", "wrong": ["A=2 B=1", "1=b 2=a"]}, "code": ["func Swap(a *int, b *int) {", "\ttmp := *a", "\t*a = *b", "\t*b = tmp", "}"]}, {"id": "max", "cat": 4, "rank": 1, "quoi": "Renvoie la valeur max d'une liste d'entiers (0 si la liste est vide).", "ex": "Max([3,7,2]) -> 7", "strat": "Plan de jeu : si la slice est vide renvoie 0. Sinon initialise max avec le premier element, boucle sur le reste et remplace max si tu trouves plus grand.", "concept": "boucle + comparaison", "hint": "", "quiz": {"call": "Max([3,7,2])", "correct": "7", "wrong": ["8", "-7"]}, "code": ["func Max(a []int) int {", "\tif len(a) == 0 { return 0 }", "\tm := a[0]", "\tfor _, v := range a {", "\t\tif v > m { m = v }", "\t}", "\treturn m", "}"]}, {"id": "abort", "cat": 4, "rank": 3, "quoi": "Renvoie la mediane (valeur du milieu) de 5 int donnes.", "ex": "Abort(2,3,8,5,7) -> 5", "strat": "Plan de jeu : mets les 5 valeurs dans une slice, trie-la (`sort.Ints`), renvoie l'element du milieu (index 2).", "concept": "sort.Ints", "hint": "", "quiz": {"call": "Abort(2,3,8,5,7)", "correct": "5", "wrong": ["6", "-5"]}, "code": ["func Abort(a, b, c, d, e int) int {", "\ttab := []int{a, b, c, d, e}", "\tsort.Ints(tab)", "\treturn tab[2]", "}"]}, {"id": "printnbrinorder", "cat": 4, "rank": 4, "quoi": "Affiche les chiffres d'un int dans l'ordre croissant (pas l'ordre d'origine).", "ex": "PrintNbrInOrder(321) -> 123", "strat": "Plan de jeu : extrait chaque chiffre du nombre (avec %10 et /10) dans une slice, trie cette slice, puis affiche chaque chiffre.", "concept": "extraction de chiffres + sort.Ints", "hint": "", "quiz": {"call": "PrintNbrInOrder(321)", "correct": "123", "wrong": ["124", "-123"]}, "code": ["func PrintNbrInOrder(n int) {", "\tdigits := []int{}", "\tfor n > 0 { digits = append(digits, n%10); n /= 10 }", "\tsort.Ints(digits)", "\tfor _, d := range digits { fmt.Print(d) }", "}"]}, {"id": "addfront", "cat": 5, "rank": 2, "quoi": "Ajoute un string au tout debut d'une slice de strings et renvoie la nouvelle slice.", "ex": "AddFront(\"hi\",[\"a\"]) -> [hi a]", "strat": "Plan de jeu : si le string est vide, renvoie la slice telle quelle. Sinon, cree une nouvelle slice qui commence par ton string suivi de `append` avec la slice d'origine, ou utilise `append([]string{s}, slice...)`.", "concept": "append avec spread", "hint": "", "quiz": {"call": "AddFront(\"hi\",[\"a\"])", "correct": "[hi a]", "wrong": ["[a hi]", "[]"]}, "code": ["func AddFront(s string, slice []string) []string {", "\tif s == \"\" { return slice }", "\treturn append([]string{s}, slice...)", "}"]}, {"id": "appendrange", "cat": 5, "rank": 3, "quoi": "Cree une slice avec toutes les valeurs entre min (inclus) et max (exclu), sans utiliser make.", "ex": "AppendRange(5,10) -> [5 6 7 8 9]", "strat": "Plan de jeu : si min >= max renvoie nil. Sinon cree une slice vide `var result []int` et boucle de min a max-1 en faisant `result = append(result, i)` a chaque tour.", "concept": "append en boucle", "hint": "", "quiz": {"call": "AppendRange(5,10)", "correct": "[5 6 7 8 9]", "wrong": ["[9 8 7 6 5]", "[]"]}, "code": ["func AppendRange(min, max int) []int {", "\tif min >= max { return nil }", "\tvar result []int", "\tfor i := min; i < max; i++ {", "\t\tresult = append(result, i)", "\t}", "\treturn result", "}"]}, {"id": "makerange", "cat": 5, "rank": 2, "quoi": "Meme resultat que appendrange (une slice de min a max), mais sans la contrainte 'pas de make'.", "ex": "MakeRange(5,10) -> [5 6 7 8 9]", "strat": "Plan de jeu : tu peux utiliser `make([]int, max-min)` pour preallouer la taille exacte, puis remplir chaque case avec une boucle indexee.", "concept": "make + boucle indexee", "hint": "", "quiz": {"call": "MakeRange(5,10)", "correct": "[5 6 7 8 9]", "wrong": ["[9 8 7 6 5]", "[]"]}, "code": ["func MakeRange(min, max int) []int {", "\tif min >= max { return nil }", "\tresult := make([]int, max-min)", "\tfor i := range result {", "\t\tresult[i] = min + i", "\t}", "\treturn result", "}"]}, {"id": "fromto", "cat": 5, "rank": 3, "quoi": "Renvoie un string listant tous les nombres de deux bornes, formates avec des 0 devant si besoin.", "ex": "FromTo(8,11) -> 08, 09, 10, 11", "strat": "Plan de jeu : verifie les bornes (0-99 sinon 'Invalid'), boucle de min a max, formate chaque nombre sur 2 chiffres avec `fmt.Sprintf(\"%02d\", i)`, colle avec des virgules-espaces.", "concept": "fmt.Sprintf avec padding", "hint": "", "quiz": {"call": "FromTo(8,11)", "correct": "08, 09, 10, 11", "wrong": ["08, 09, 10, 11 (bis)", "11 ,01 ,90 ,80"]}, "code": ["func FromTo(from int, to int) string {", "\tresult := \"\"", "\tfor i := from; i <= to; i++ {", "\t\tresult += fmt.Sprintf(\"%02d\", i)", "\t\tif i != to { result += \", \" }", "\t}", "\treturn result + \"\\n\"", "}"]}, {"id": "chunk", "cat": 5, "rank": 4, "quoi": "Decoupe une slice en plusieurs petites slices de taille size chacune.", "ex": "Chunk([1,2,3,4],2) -> [[1 2][3 4]]", "strat": "Plan de jeu : boucle sur la slice par pas de `size`, a chaque tour decoupe un sous-slice avec `slice[i:i+size]` (attention a la derniere tranche qui peut etre plus courte) et ajoute-le au resultat.", "concept": "slicing par blocs", "hint": "", "quiz": {"call": "Chunk([1,2,3,4],2)", "correct": "[[1 2][3 4]]", "wrong": ["[4] 2][3 [1]", "[]"]}, "code": ["func Chunk(slice []int, size int) [][]int {", "\tvar result [][]int", "\tfor i := 0; i < len(slice); i += size {", "\t\tend := min(i+size, len(slice))", "\t\tresult = append(result, slice[i:end])", "\t}", "\treturn result", "}"]}, {"id": "split", "cat": 5, "rank": 3, "quoi": "Decoupe un string en une slice de strings, en se basant sur un separateur donne.", "ex": "Split(\"a,b,c\",\",\") -> [a b c]", "strat": "Plan de jeu : parcours le string caractere par caractere, accumule dans un mot temporaire, des que tu croises le separateur tu ajoutes le mot accumule a la slice resultat et tu reinitialises.", "concept": "parsing manuel avec separateur", "hint": "n'oublie pas d'ajouter le dernier mot apres la boucle, il reste souvent coince dans l'accumulateur", "quiz": {"call": "Split(\"a,b,c\",\",\")", "correct": "[a b c]", "wrong": ["[c b a]", "[]"]}, "code": ["func Split(s, sep string) []string {", "\tvar result []string", "\tword := \"\"", "\tfor _, r := range s {", "\t\tif string(r) == sep { result = append(result, word); word = \"\" } else { word += string(r) }", "\t}", "\treturn append(result, word)", "}"]}, {"id": "splitwhitespaces", "cat": 5, "rank": 2, "quoi": "Decoupe un string en mots, en se basant sur les espaces/tabulations/retours a la ligne.", "ex": "SplitWhitespaces(\"a  b\\tc\") -> [a b c]", "strat": "Plan de jeu : `strings.Fields(s)` fait exactement ca nativement, gere tout seul les espaces/tabs/newlines multiples.", "concept": "strings.Fields", "hint": "", "quiz": {"call": "SplitWhitespaces(\"a  b\\tc\")", "correct": "[a b c]", "wrong": ["[c b a]", "[]"]}, "code": ["func SplitWhiteSpaces(s string) []string {", "\treturn strings.Fields(s)", "}"]}, {"id": "sortintegertable", "cat": 5, "rank": 2, "quoi": "Trie une slice d'int par ordre croissant.", "ex": "SortIntegerTable([3,1,2]) -> [1 2 3]", "strat": "Plan de jeu : `sort.Ints(table)` trie direct en place, ou code un tri a bulles si l'exo demande de le faire a la main.", "concept": "sort.Ints ou tri a bulles", "hint": "", "quiz": {"call": "SortIntegerTable([3,1,2])", "correct": "[1 2 3]", "wrong": ["[3 2 1]", "[]"]}, "code": ["func SortIntegerTable(table []int) {", "\tsort.Ints(table)", "}"]}, {"id": "sortwordarr", "cat": 5, "rank": 2, "quoi": "Trie une slice de strings par ordre ASCII.", "ex": "SortWordArr([\"banane\",\"abricot\"]) -> [abricot banane]", "strat": "Plan de jeu : `sort.Strings(a)` trie direct en place la slice de strings en ordre ASCII.", "concept": "sort.Strings", "hint": "", "quiz": {"call": "SortWordArr([\"banane\",\"abricot\"])", "correct": "[abricot banane]", "wrong": ["[banane abricot]", "[]"]}, "code": ["func SortWordArr(a []string) {", "\tsort.Strings(a)", "}"]}, {"id": "issorted", "cat": 5, "rank": 3, "quoi": "Verifie si une slice d'int est triee, selon une fonction de comparaison que tu ecris toi-meme.", "ex": "IsSorted([1,2,3], f) -> true", "strat": "Plan de jeu : boucle sur la slice de i=0 a len-2, appelle `f(a[i], a[i+1])` a chaque paire. Si un seul appel renvoie un resultat positif (mauvais ordre), renvoie false.", "concept": "function comme parametre", "hint": "", "quiz": {"call": "IsSorted([1,2,3], f)", "correct": "true", "wrong": ["false", "0"]}, "code": ["func IsSorted(f func(a, b int) int, a []int) bool {", "\tfor i := 0; i < len(a)-1; i++ {", "\t\tif f(a[i], a[i+1]) > 0 { return false }", "\t}", "\treturn true", "}"]}, {"id": "union", "cat": 5, "rank": 3, "quoi": "Affiche, sans doublons, tous les caracteres qui apparaissent dans l'un OU l'autre des deux strings.", "ex": "union \"abc\" \"bcd\" -> abcd", "strat": "Plan de jeu : parcours les deux strings dans l'ordre, pour chaque caractere verifie s'il est deja dans ton resultat (avec `strings.ContainsRune`), si non ajoute-le.", "concept": "strings.ContainsRune", "hint": "", "quiz": {"call": "union \"abc\" \"bcd\"", "correct": "abcd", "wrong": ["ABCD", "dcba"]}, "code": ["func main() {", "\tresult := \"\"", "\tfor _, r := range os.Args[1] + os.Args[2] {", "\t\tif !strings.ContainsRune(result, r) { result += string(r) }", "\t}", "\tfmt.Println(result)", "}"]}, {"id": "inter", "cat": 5, "rank": 3, "quoi": "Affiche, sans doublons, les caracteres qui apparaissent dans les DEUX strings.", "ex": "inter \"abc\" \"bcd\" -> bc", "strat": "Plan de jeu : parcours le 1er string, pour chaque caractere verifie s'il existe dans le 2eme string ET s'il n'est pas deja dans ton resultat, si les deux sont vrais ajoute-le.", "concept": "strings.ContainsRune x2", "hint": "", "quiz": {"call": "inter \"abc\" \"bcd\"", "correct": "bc", "wrong": ["BC", "cb"]}, "code": ["func main() {", "\tresult := \"\"", "\tfor _, r := range os.Args[1] {", "\t\tif strings.ContainsRune(os.Args[2], r) && !strings.ContainsRune(result, r) {", "\t\t\tresult += string(r)", "\t\t}", "\t}", "\tfmt.Println(result)", "}"]}, {"id": "unmatch", "cat": 5, "rank": 4, "quoi": "Trouve l'element d'une slice qui n'a pas de paire correspondante (renvoie -1 si tout est pair).", "ex": "Unmatch([1,2,1]) -> 2", "strat": "Plan de jeu : utilise un XOR sur tous les elements de la slice. Deux nombres identiques s'annulent avec XOR (`n ^ n == 0`), donc a la fin il ne reste que le nombre sans paire. Si le resultat est 0, renvoie -1.", "concept": "XOR bit a bit", "hint": "le XOR est LA technique a connaitre pour ce genre de probleme, ultra rapide et elegant", "quiz": {"call": "Unmatch([1,2,1])", "correct": "2", "wrong": ["3", "-2"]}, "code": ["func Unmatch(a []int) int {", "\tresult := 0", "\tfor _, v := range a {", "\t\tresult ^= v", "\t}", "\tif result == 0 { return -1 }", "\treturn result", "}"]}, {"id": "countif", "cat": 5, "rank": 3, "quoi": "Compte combien d'elements d'une slice de strings font renvoyer true a une fonction f donnee.", "ex": "CountIf(IsNumeric, [\"1\",\"a\",\"2\"]) -> 2", "strat": "Plan de jeu : boucle sur la slice, appelle `f(element)` a chaque tour, incremente un compteur si ca renvoie true.", "concept": "function comme parametre", "hint": "", "quiz": {"call": "CountIf(IsNumeric, [\"1\",\"a\",\"2\"])", "correct": "2", "wrong": ["3", "-2"]}, "code": ["func CountIf(f func(string) bool, tab []string) int {", "\tcount := 0", "\tfor _, s := range tab {", "\t\tif f(s) { count++ }", "\t}", "\treturn count", "}"]}, {"id": "index", "cat": 5, "rank": 2, "quoi": "Trouve la position d'un sous-string dans un string (comme la fonction Index de Go).", "ex": "Index(\"hello\",\"ll\") -> 2", "strat": "Plan de jeu : boucle sur chaque position possible de depart dans s, verifie si le sous-string a partir de cette position matche toFind (avec un slicing ou une comparaison caractere par caractere). Renvoie -1 si rien trouve.", "concept": "recherche de sous-string", "hint": "", "quiz": {"call": "Index(\"hello\",\"ll\")", "correct": "2", "wrong": ["3", "-2"]}, "code": ["func Index(s string, toFind string) int {", "\tfor i := 0; i+len(toFind) <= len(s); i++ {", "\t\tif s[i:i+len(toFind)] == toFind { return i }", "\t}", "\treturn -1", "}"]}, {"id": "compare", "cat": 5, "rank": 2, "quoi": "Compare deux strings et renvoie -1, 0 ou 1 selon lequel est plus grand.", "ex": "Compare(\"abc\",\"abd\") -> -1", "strat": "Plan de jeu : compare caractere par caractere jusqu'a trouver une difference, renvoie -1 ou 1 selon le sens. Si un string finit avant l'autre, le plus court est 'plus petit'. Egaux = 0.", "concept": "comparaison lexicographique", "hint": "", "quiz": {"call": "Compare(\"abc\",\"abd\")", "correct": "-1", "wrong": ["0", "1"]}, "code": ["func Compare(a, b string) int {", "\tif a < b { return -1 }", "\tif a > b { return 1 }", "\treturn 0", "}"]}, {"id": "boolean", "cat": 5, "rank": 3, "quoi": "Exercice de correction de code: adapter un programme donne pour qu'il compile et tourne.", "ex": "go build . -> le programme compile et tourne", "strat": "Plan de jeu : lis le code fourni attentivement, compile pour voir les erreurs une par une (`go build`), corrige chaque probleme de type ou de logique jusqu'a ce que ca tourne comme prevu.", "concept": "debug de code existant", "hint": "go build te donne les erreurs une par une, corrige-les dans l'ordre sans paniquer", "quiz": {"call": "go build .", "correct": "le programme compile et tourne", "wrong": ["LE PROGRAMME COMPILE ET TOURNE", "enruot te elipmoc emmargorp el"]}, "code": ["func printStr(s string) {", "\tfor _, r := range s {", "\t\tz01.PrintRune(r)", "\t}", "}", "// corrige les erreurs de compilation du reste du fichier"]}, {"id": "any", "cat": 5, "rank": 3, "quoi": "Renvoie true si AU MOINS un element d'une slice de strings valide une fonction f donnee.", "ex": "Any(IsNumeric, [\"a\",\"1\"]) -> true", "strat": "Plan de jeu : boucle sur la slice, appelle `f(element)`, des qu'un renvoie true tu renvoies true direct (pas besoin de continuer). Si t'as tout parcouru sans succes, renvoie false.", "concept": "function comme parametre + early return", "hint": "", "quiz": {"call": "Any(IsNumeric, [\"a\",\"1\"])", "correct": "true", "wrong": ["false", "0"]}, "code": ["func Any(f func(string) bool, a []string) bool {", "\tfor _, s := range a {", "\t\tif f(s) { return true }", "\t}", "\treturn false", "}"]}, {"id": "map", "cat": 5, "rank": 4, "quoi": "Applique une fonction sur chaque element d'une slice d'int et renvoie une nouvelle slice de bool.", "ex": "Map(IsNumeric, [\"1\",\"a\"]) -> [true false]", "strat": "Plan de jeu : cree une nouvelle slice de bool de meme taille, boucle sur la slice d'int, applique `f(element)` a chaque case et stocke le resultat dans la nouvelle slice a la meme position.", "concept": "function comme parametre + nouvelle slice", "hint": "", "quiz": {"call": "Map(IsNumeric, [\"1\",\"a\"])", "correct": "[true false]", "wrong": ["[false true]", "[]"]}, "code": ["func Map(f func(int) bool, a []int) []bool {", "\tresult := make([]bool, len(a))", "\tfor i, v := range a {", "\t\tresult[i] = f(v)", "\t}", "\treturn result", "}"]}, {"id": "foreach", "cat": 5, "rank": 3, "quoi": "Applique une fonction sur chaque element d'une slice d'int, sans rien renvoyer (juste executer).", "ex": "ForEach(fmt.Println, [1,2,3]) -> affiche 1 puis 2 puis 3", "strat": "Plan de jeu : boucle simple sur la slice, appelle `f(element)` a chaque tour, sans stocker de resultat.", "concept": "function comme parametre", "hint": "", "quiz": {"call": "ForEach(fmt.Println, [1,2,3])", "correct": "affiche 1 puis 2 puis 3", "wrong": ["AFFICHE 1 PUIS 2 PUIS 3", "3 siup 2 siup 1 ehciffa"]}, "code": ["func ForEach(f func(int), a []int) {", "\tfor _, v := range a {", "\t\tf(v)", "\t}", "}"]}, {"id": "reduceint", "cat": 5, "rank": 4, "quoi": "Applique une fonction cumulative sur une slice d'int (genre additionner tout au fur et a mesure).", "ex": "ReduceInt([1,2,3], Add) -> affiche 1, 3, 6", "strat": "Plan de jeu : initialise un accumulateur avec le premier element (ou 0), boucle sur le reste en faisant `acc = f(acc, element)`, affiche a chaque etape ou a la fin selon la regle exacte du README.", "concept": "accumulateur + function callback", "hint": "", "quiz": {"call": "ReduceInt([1,2,3], Add)", "correct": "affiche 1, 3, 6", "wrong": ["AFFICHE 1, 3, 6", "6 ,3 ,1 ehciffa"]}, "code": ["func ReduceInt(a []int, f func(int, int) int) {", "\tacc := a[0]", "\tfor _, v := range a[1:] {", "\t\tacc = f(acc, v)", "\t\tfmt.Println(acc)", "\t}", "}"]}, {"id": "foldint", "cat": 5, "rank": 5, "quoi": "Comme reduceint mais avec un accumulateur de depart donne en parametre.", "ex": "FoldInt(Add, [1,2,3], 10) -> affiche 11, 13, 16", "strat": "Plan de jeu : meme logique que reduceint, sauf que ton accumulateur `n` de depart est deja fourni au lieu de partir du premier element de la slice.", "concept": "accumulateur + function callback", "hint": "", "quiz": {"call": "FoldInt(Add, [1,2,3], 10)", "correct": "affiche 11, 13, 16", "wrong": ["AFFICHE 11, 13, 16", "61 ,31 ,11 ehciffa"]}, "code": ["func FoldInt(f func(int, int) int, a []int, n int) {", "\tacc := n", "\tfor _, v := range a {", "\t\tacc = f(acc, v)", "\t\tfmt.Println(acc)", "\t}", "}"]}, {"id": "descendcomb", "cat": 5, "rank": 4, "quoi": "Affiche, en ordre decroissant, toutes les combinaisons de deux nombres a deux chiffres differents.", "ex": "descendcomb -> 98,97,...,10,09,...", "strat": "Plan de jeu : double boucle imbriquee de 99 a 10 pour chaque chiffre, avec la condition que le 1er soit different du 2eme (souvent 1er > 2eme selon la regle), affiche chaque paire separee par une virgule.", "concept": "boucles imbriquees", "hint": "", "quiz": {"call": "descendcomb", "correct": "98,97,...,10,09,...", "wrong": ["98,97,...,10,09,... (bis)", "...,90,01,...,79,89"]}, "code": ["func DescendComb() {", "\tfor i := 99; i >= 10; i-- {", "\t\tfor j := i - 1; j >= 10; j-- {", "\t\t\tfmt.Printf(\"%d%d, \", i, j)", "\t\t}", "\t}", "}"]}, {"id": "printcomb", "cat": 5, "rank": 4, "quoi": "Affiche, en ordre croissant, toutes les combinaisons uniques de 3 chiffres differents (1er < 2eme < 3eme).", "ex": "printcomb -> 012, 013, ..., 789", "strat": "Plan de jeu : triple boucle imbriquee, la 2eme boucle commence apres la 1ere (i+1) et la 3eme apres la 2eme (j+1), pour garantir l'ordre croissant sans repetition.", "concept": "boucles imbriquees avec bornes decalees", "hint": "faire commencer chaque boucle apres l'index precedent evite les doublons, c'est LE truc a retenir", "quiz": {"call": "printcomb", "correct": "012, 013, ..., 789", "wrong": ["012, 013, ..., 789 (bis)", "987 ,... ,310 ,210"]}, "code": ["func PrintComb() {", "\tfor i := 0; i <= 7; i++ {", "\t\tfor j := i + 1; j <= 8; j++ {", "\t\t\tfor k := j + 1; k <= 9; k++ {", "\t\t\t\tfmt.Printf(\"%d%d%d, \", i, j, k)", "\t\t\t}", "\t\t}", "\t}", "}"]}, {"id": "printcomb2", "cat": 5, "rank": 4, "quoi": "Meme principe que printcomb mais avec des nombres a deux chiffres au lieu d'un seul.", "ex": "printcomb2 -> 1023, 1024, ...", "strat": "Plan de jeu : meme structure de boucles que descendcomb mais en ordre croissant cette fois.", "concept": "boucles imbriquees", "hint": "", "quiz": {"call": "printcomb2", "correct": "1023, 1024, ...", "wrong": ["1023, 1024, ... (bis)", "... ,4201 ,3201"]}, "code": ["func PrintComb2() {", "\tfor i := 10; i <= 98; i++ {", "\t\tfor j := i + 1; j <= 99; j++ {", "\t\t\tfmt.Printf(\"%d%d, \", i, j)", "\t\t}", "\t}", "}"]}, {"id": "printwordstables", "cat": 5, "rank": 1, "quoi": "Affiche chaque element d'une slice de strings sur sa propre ligne.", "ex": "PrintWordsTables([\"a\",\"b\"]) -> a\\nb", "strat": "Plan de jeu : boucle simple `for _, mot := range a`, affiche chaque mot avec Println.", "concept": "range sur slice", "hint": "", "quiz": {"call": "PrintWordsTables([\"a\",\"b\"])", "correct": "a\\nb", "wrong": ["A\\NB", "bn\\a"]}, "code": ["func PrintWordsTables(a []string) {", "\tfor _, w := range a {", "\t\tfmt.Println(w)", "\t}", "}"]}, {"id": "printmemory", "cat": 5, "rank": 5, "quoi": "Affiche le contenu memoire brut d'un tableau de 10 bytes, puis les caracteres ASCII lisibles (les autres deviennent des points).", "ex": "PrintMemory(arr) -> hex des 10 bytes puis version lisible", "strat": "Plan de jeu : affiche chaque byte en hexadecimal avec `fmt.Printf(\"%02x \", b)`, puis dans une deuxieme passe affiche chaque byte comme caractere si `unicode.IsPrint(rune(b))`, sinon affiche un point.", "concept": "%x formatting + unicode.IsPrint", "hint": "regarde bien l'exemple exact du README pour le format d'affichage attendu", "quiz": {"call": "PrintMemory(arr)", "correct": "hex des 10 bytes puis version lisible", "wrong": ["HEX DES 10 BYTES PUIS VERSION LISIBLE", "elbisil noisrev siup setyb 01 sed xeh"]}, "code": ["func PrintMemory(arr [10]byte) {", "\tfor _, b := range arr { fmt.Printf(\"%02x \", b) }", "\tfmt.Println()", "\tfor _, b := range arr {", "\t\tif unicode.IsPrint(rune(b)) { fmt.Printf(\"%c\", b) } else { fmt.Print(\".\") }", "\t}", "}"]}, {"id": "fooddeliverytime", "cat": 5, "rank": 4, "quoi": "Calcule le temps total de preparation d'une commande (burger/frites/nuggets) en utilisant des structs.", "ex": "FoodDeliveryTime(\"burger,chips\") -> 25", "strat": "Plan de jeu : cree une map ou une struct qui associe chaque item a son temps de cuisson (burger=15, chips=10, nuggets=12). Split le string de commande, additionne le temps de chaque item trouve, renvoie 404 si un item n'existe pas dans le menu.", "concept": "struct/map + parsing", "hint": "", "quiz": {"call": "FoodDeliveryTime(\"burger,chips\")", "correct": "25", "wrong": ["26", "-25"]}, "code": ["func FoodDeliveryTime(order string) int {", "\tmenu := map[string]int{\"burger\": 15, \"chips\": 10, \"nuggets\": 12}", "\ttotal := 0", "\tfor _, item := range strings.Split(order, \",\") {", "\t\ttotal += menu[item]", "\t}", "\treturn total", "}"]}]</script>
<script>(function(){
"use strict";

var EX = JSON.parse(document.getElementById('exdata').textContent);

var ZONES = {
  1:{week:"CHAPITRE 1", name:"ZONE D'ATTERRISSAGE", sub:"Le tout premier drop — on apprend à courir avant de looter"},
  2:{week:"CHAPITRE 2", name:"LE QG", sub:"Ton squad t'attend, ramasse ton loadout d'arguments"},
  3:{week:"CHAPITRE 3", name:"L'ATELIER DES STRINGS", sub:"Zone dense, faut manier le texte comme une arme"},
  4:{week:"CHAPITRE 4", name:"LE LABO DES NOMBRES", sub:"Terrain technique, précision exigée"},
  5:{week:"CHAPITRE 5", name:"LE REPAIRE DU BOSS", sub:"Dernière zone avant la Zone Interdite. Bonne chance."}
};
var ZONE_ORDER = [1,2,3,4,5];

var RANKS = {
  1:{key:"common", label:"COMMUNE", color:"var(--common)", xp:10},
  2:{key:"rare", label:"RARE", color:"var(--rare)", xp:20},
  3:{key:"epic", label:"ÉPIQUE", color:"var(--epic)", xp:35},
  4:{key:"legendary", label:"LÉGENDAIRE", color:"var(--legendary)", xp:55},
  5:{key:"boss", label:"RELIQUE DU BOSS", color:"var(--boss)", xp:80}
};

var TIERS = [
  {min:0,   name:"FER",     sub:"Tu viens de spawn", item:null, theme:["rgba(154,163,180,0.12)","rgba(154,163,180,0.08)"]},
  {min:10,  name:"BRONZE",  sub:"Ça commence à rentrer", item:{icon:"🎖️", name:"Bannière Recrue"}, theme:["rgba(180,120,60,0.14)","rgba(120,80,40,0.10)"]},
  {min:25,  name:"ARGENT",  sub:"Solide sur les bases", item:{icon:"🥩", name:"Bœuf de Kobé Runé"}, theme:["rgba(180,190,210,0.14)","rgba(140,150,170,0.10)"]},
  {min:45,  name:"OR",      sub:"Tu gères la moitié de la piscine", item:{icon:"🐱", name:"Chaton Tacticien"}, theme:["rgba(255,196,60,0.16)","rgba(255,150,40,0.10)"]},
  {min:65,  name:"PLATINE", sub:"Sérieux niveau", item:{icon:"🎯", name:"Précision Chirurgicale"}, theme:["rgba(120,220,255,0.16)","rgba(80,160,255,0.10)"]},
  {min:85,  name:"DIAMANT", sub:"Presque full clear", item:{icon:"🎇", name:"Pack Emote Victoire"}, theme:["rgba(150,120,255,0.18)","rgba(255,70,170,0.10)"]},
  {min:100, name:"RADIANT", sub:"Piscine 100% explorée, comme un urbex réussi", item:{icon:"🏚️", name:"Clé de l'Exploration Finale"}, theme:["rgba(255,215,94,0.22)","rgba(255,106,26,0.16)"]}
];

var STORAGE_KEY = "zone01_piscine_progress_v3";
var CODE_KEY = "zone01_piscine_code_v1";
var CLEARED_KEY = "zone01_piscine_cleared_v1";
var progress = {};
var codeDone = {};
var cleared = {};
try{
  var raw = localStorage.getItem(STORAGE_KEY);
  if(raw) progress = JSON.parse(raw);
}catch(e){ progress = {}; }
try{
  var rawc = localStorage.getItem(CODE_KEY);
  if(rawc) codeDone = JSON.parse(rawc);
}catch(e){ codeDone = {}; }
try{
  var rawcl = localStorage.getItem(CLEARED_KEY);
  if(rawcl) cleared = JSON.parse(rawcl);
}catch(e){ cleared = {}; }

function saveProgress(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }catch(e){}
}
function saveCodeDone(){
  try{ localStorage.setItem(CODE_KEY, JSON.stringify(codeDone)); }catch(e){}
}
function saveCleared(){
  try{ localStorage.setItem(CLEARED_KEY, JSON.stringify(cleared)); }catch(e){}
}

var TROPHIES = [
  {icon:"🍗", name:"Chicken Dinner Coder"},
  {icon:"🥩", name:"Bœuf de Kobé Debuggé"},
  {icon:"🔥", name:"On Fire (zéro bug)"},
  {icon:"🧠", name:"200 IQ Play"},
  {icon:"🎯", name:"Headshot Logique"},
  {icon:"🚀", name:"Boosté comme un Octane"},
  {icon:"🐱", name:"Chaton Debuggeur Junior"},
  {icon:"⚡", name:"Vitesse Lumière"},
  {icon:"🏹", name:"Sniper de Syntaxe"},
  {icon:"🎮", name:"GG EZ avec les Potes"},
  {icon:"🥇", name:"MVP de la Manche"},
  {icon:"🌪️", name:"Tornade de Code"},
  {icon:"🦾", name:"Bras Robotique"},
  {icon:"🔑", name:"Clé Maître"},
  {icon:"🃏", name:"Joker Inattendu"},
  {icon:"🐐", name:"Le GOAT"},
  {icon:"🏚️", name:"Urbex du Terminal"},
  {icon:"🏴‍☠️", name:"Pirate du Terminal"},
  {icon:"🦅", name:"Œil de Faucon"},
  {icon:"💥", name:"Combo Explosif"}
];
function trophyFor(id){
  var h = 0;
  for(var i=0;i<id.length;i++){ h = (h*31 + id.charCodeAt(i)) | 0; }
  return TROPHIES[Math.abs(h) % TROPHIES.length];
}

var state = { cat: "all", q: "" };

function itemsOfCat(c){
  return EX.filter(function(e){return e.cat === c;});
}
function doneCountIn(items){
  return items.filter(function(e){return progress[e.id];}).length;
}
function pctOfCat(c){
  var items = itemsOfCat(c);
  if(items.length === 0) return 100;
  return Math.round((doneCountIn(items) / items.length) * 100);
}

function totalXP(){
  var xp = 0;
  EX.forEach(function(e){ if(progress[e.id]) xp += RANKS[e.rank].xp; });
  EX.forEach(function(e){ if(codeDone[e.id]) xp += 8; });
  return xp;
}
function maxXP(){
  var xp = 0;
  EX.forEach(function(e){ xp += RANKS[e.rank].xp + 8; });
  return xp;
}
function pctGlobal(){
  var done = Object.keys(progress).filter(function(k){return progress[k];}).length;
  return Math.round((done / EX.length) * 100);
}
function currentTierIndex(p){
  var idx = 0;
  for(var i=0;i<TIERS.length;i++){ if(p >= TIERS[i].min) idx = i; }
  return idx;
}

function shieldSVG(color){
  return '<svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M8 2 L16 2 L22 12 L16 22 L8 22 L2 12 Z" ' +
    'fill="' + color + '22" stroke="' + color + '" stroke-width="1.6" stroke-linejoin="round"/>' +
    '<path d="M8.2 12.2 L10.6 14.6 L15.8 9.2" fill="none" stroke="' + color + '" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>' +
    '</svg>';
}

function renderStat(){
  var p = pctGlobal();
  var idx = currentTierIndex(p);
  var tier = TIERS[idx];
  var doneCount = Object.keys(progress).filter(function(k){return progress[k];}).length;
  var iconColor = tier.name === "RADIANT" ? "#ffd75e" : "#ff6a1a";
  document.getElementById('rankIcon').outerHTML = shieldSVG(iconColor).replace('<svg ', '<svg id="rankIcon" ');
  document.getElementById('rankName').textContent = tier.name;
  document.getElementById('rankSub').textContent = doneCount + " / " + EX.length + " compris — " + tier.sub;
  document.getElementById('xpVal').textContent = totalXP() + " / " + maxXP() + " XP";
  document.getElementById('progBar').style.width = p + "%";
  document.getElementById('progLabel').textContent = p + "%";
  document.getElementById('stickyHudRank').textContent = tier.name;
  document.getElementById('stickyHudBarInner').style.width = p + "%";
  document.getElementById('stickyHudXp').textContent = totalXP() + " XP";
  document.body.style.setProperty('--themeA', tier.theme[0]);
  document.body.style.setProperty('--themeB', tier.theme[1]);
  renderLoadout(idx);
  if(typeof maybeShowUrbex === 'function') maybeShowUrbex();
  if(typeof maybeShowStoryBeat === 'function'){
    for(var c=1;c<=5;c++) maybeShowStoryBeat(c);
  }
}

function renderLoadout(unlockedIdx){
  var box = document.getElementById('loadout');
  var html = '';
  for(var i=1;i<TIERS.length;i++){
    var t = TIERS[i];
    var unlocked = i <= unlockedIdx;
    html += '<div class="loadout-item ' + (unlocked?'unlocked':'locked') + '" title="' +
      (unlocked ? t.item.name : ("Débloque à " + t.min + "% — " + t.item.name)) + '" data-idx="'+i+'">' +
      (unlocked ? t.item.icon : '🔒') + '</div>';
  }
  html += '<span class="loadout-more" id="openInv">voir le casier complet →</span>';
  html += '<span class="loadout-more" id="openTrophy">🏅 trophées de mission →</span>';
  box.innerHTML = html;
  document.getElementById('openInv').addEventListener('click', openInventory);
  document.getElementById('openTrophy').addEventListener('click', openTrophies);
}

function openInventory(){
  var p = pctGlobal();
  var idx = currentTierIndex(p);
  var grid = document.getElementById('invGrid');
  var html = '';
  for(var i=1;i<TIERS.length;i++){
    var t = TIERS[i];
    var unlocked = i <= idx;
    html += '<div class="invCard ' + (unlocked?'':'locked') + '">' +
      '<div class="invIcon">' + (unlocked ? t.item.icon : '🔒') + '</div>' +
      '<div class="invName">' + t.item.name + '</div>' +
      '<div class="invReq">Rang ' + t.name + ' — ' + t.min + '%</div>' +
      '</div>';
  }
  grid.innerHTML = html;
  document.getElementById('invOverlay').classList.add('open');
}
document.getElementById('invCloseX').addEventListener('click', function(){
  document.getElementById('invOverlay').classList.remove('open');
});
document.getElementById('invOverlay').addEventListener('click', function(ev){
  if(ev.target === this) this.classList.remove('open');
});

function openTrophies(){
  var grid = document.getElementById('trophyGrid');
  var html = '';
  EX.forEach(function(e){
    var isCleared = !!cleared[e.id];
    var t = trophyFor(e.id);
    html += '<div class="invCard ' + (isCleared?'':'locked') + '" data-id="'+e.id+'" style="'+(isCleared?'cursor:pointer;':'')+'">' +
      '<div class="invIcon">' + (isCleared ? t.icon : '🔒') + '</div>' +
      '<div class="invName">' + (isCleared ? t.name : '???') + '</div>' +
      '<div class="invReq">' + e.id + '</div>' +
      '</div>';
  });
  grid.innerHTML = html;
  Array.prototype.forEach.call(grid.querySelectorAll('.invCard'), function(card){
    var id = card.getAttribute('data-id');
    if(cleared[id]){
      card.addEventListener('click', function(){
        document.getElementById('trophyOverlay').classList.remove('open');
        openFiche(id);
      });
    }
  });
  document.getElementById('trophyOverlay').classList.add('open');
}
document.getElementById('trophyCloseX').addEventListener('click', function(){
  document.getElementById('trophyOverlay').classList.remove('open');
});
document.getElementById('trophyOverlay').addEventListener('click', function(ev){
  if(ev.target === this) this.classList.remove('open');
});

function spawnConfetti(){
  var zone = document.getElementById('confettiZone');
  zone.innerHTML = '';
  var colors = ['#ff6a1a','#ff4655','#4fa3ff','#b168ff','#ffd75e','#3ddc8c'];
  for(var i=0;i<40;i++){
    var d = document.createElement('div');
    d.className = 'confetti';
    d.style.left = (Math.random()*100) + '%';
    d.style.background = colors[Math.floor(Math.random()*colors.length)];
    d.style.animationDuration = (0.8 + Math.random()*0.9) + 's';
    d.style.animationDelay = (Math.random()*0.3) + 's';
    d.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    zone.appendChild(d);
  }
}

function checkFullClear(id){
  if(progress[id] && codeDone[id] && !cleared[id]){
    cleared[id] = true;
    saveCleared();
    showVictory(id);
  }
}

function showVictory(id){
  activeVictoryId = id;
  var t = trophyFor(id);
  document.getElementById('victoryIcon').textContent = t.icon;
  document.getElementById('victoryTrophyName').textContent = t.name;
  var subs = [
    "Débloqué sur « " + id + " » — code assemblé + Round validé. Clean sweep, précis comme un headshot.",
    "Débloqué sur « " + id + " » — aussi satisfaisant qu'un bœuf de Kobé parfaitement cuit.",
    "Débloqué sur « " + id + " » — t'as exploré ce code comme un urbex trouve la pièce secrète.",
    "Débloqué sur « " + id + " » — GG, appelle tes potes pour leur montrer.",
    "Débloqué sur « " + id + " » — plus mignon qu'un chaton, presque."
  ];
  document.getElementById('victorySub').textContent = pick(id, subs);
  spawnConfetti();
  setBuddy(BUDDY_LINES.victory);
  document.getElementById('victoryOverlay').classList.add('open');
}
document.getElementById('victoryClose').addEventListener('click', function(){
  document.getElementById('victoryOverlay').classList.remove('open');
});

function openFiche(id){
  var e = EX.find(function(x){return x.id === id;});
  if(!e) return;
  var r = RANKS[e.rank];
  var t = trophyFor(id);
  document.getElementById('ficheTag').textContent = r.label;
  document.getElementById('ficheTag').style.color = r.color;
  document.getElementById('ficheModal').style.setProperty('--rc', r.color);
  document.getElementById('ficheTitle').textContent = id;
  document.getElementById('ficheTrophyLine').textContent = t.icon + " Trophée obtenu : " + t.name;
  document.getElementById('ficheQuoi').textContent = e.quoi;
  document.getElementById('ficheStrat').textContent = e.strat;

  var conceptRow = document.getElementById('ficheConceptRow');
  if(e.concept){
    document.getElementById('ficheConcept').textContent = "🧠 " + e.concept;
    conceptRow.style.display = 'block';
  } else {
    conceptRow.style.display = 'none';
  }

  var codeBox = document.getElementById('ficheCode');
  codeBox.innerHTML = '';
  e.code.forEach(function(line){
    var l = document.createElement('div');
    l.className = 'fcLine';
    l.textContent = line;
    codeBox.appendChild(l);
    var w = document.createElement('div');
    w.className = 'fcWhy';
    w.textContent = '💬 ' + explainLine(line);
    codeBox.appendChild(w);
  });

  document.getElementById('victoryOverlay').classList.remove('open');
  document.getElementById('ficheOverlay').classList.add('open');
}
document.getElementById('victoryFiche').addEventListener('click', function(){
  if(activeVictoryId) openFiche(activeVictoryId);
});
document.getElementById('ficheCloseX').addEventListener('click', function(){
  document.getElementById('ficheOverlay').classList.remove('open');
});
document.getElementById('ficheOverlay').addEventListener('click', function(ev){
  if(ev.target === this) this.classList.remove('open');
});

function renderTabs(){
  var tabs = document.getElementById('tabs');
  var html = '<div class="tab' + (state.cat==='all'?' active':'') + '" data-cat="all">TOUS LES CHAPITRES</div>';
  for(var c=1;c<=5;c++){
    var pct = pctOfCat(c);
    var badge = pct === 100 ? ' ✅' : '';
    html += '<div class="tab' + (state.cat==c?' active':'') + '" data-cat="'+c+'">'+ZONES[c].week+badge+'</div>';
  }
  tabs.innerHTML = html;
  Array.prototype.forEach.call(tabs.querySelectorAll('.tab'), function(el){
    el.addEventListener('click', function(){
      state.cat = this.getAttribute('data-cat') === 'all' ? 'all' : parseInt(this.getAttribute('data-cat'),10);
      renderAll();
    });
  });
}

function cardHTML(e){
  var r = RANKS[e.rank];
  var isDone = !!progress[e.id];
  var isCoded = !!codeDone[e.id];
  return '<div class="card' + (isDone?' done':'') + (isCoded?' coded':'') + '" style="--rc:'+r.color+'" data-id="'+e.id+'">' +
    '<div class="check">✓</div>' +
    '<div class="check2">💻</div>' +
    '<div class="cid">'+e.id+'</div>' +
    '<div class="ctag">'+r.label+'</div>' +
    '</div>';
}

function renderZones(){
  var container = document.getElementById('zones');
  var q = state.q.trim().toLowerCase();
  var cats = state.cat === 'all' ? [1,2,3,4,5] : [state.cat];
  var html = '';
  var totalShown = 0;

  cats.forEach(function(c){
    var items = EX.filter(function(e){
      return e.cat === c && (q === '' || e.id.toLowerCase().indexOf(q) !== -1);
    });
    if(items.length === 0) return;
    totalShown += items.length;
    var doneInCat = itemsOfCat(c).filter(function(e){return progress[e.id];}).length;
    var totalInCat = itemsOfCat(c).length;
    var pct = pctOfCat(c);
    var badge = pct === 100 ? '<span class="qbadge">QUÊTE TERMINÉE ✅</span>' : '<span class="qbadge">'+pct+'%</span>';

    html += '<div class="zone-head"><h2>'+ZONES[c].week+' — '+ZONES[c].name+badge+'<br><span style="color:var(--ink-dim);font-weight:500;font-size:14px;">'+ZONES[c].sub+'</span></h2>' +
      '<span class="zcount">'+doneInCat+' / '+totalInCat+'</span></div>';

    html += '<div class="grid">' + items.map(cardHTML).join('') + '</div>';
  });

  if(totalShown === 0){
    html = '<div class="empty-state">Aucune mission ne matche ta recherche. Même le radar Apex trouve rien ici 🔎</div>';
  }

  container.innerHTML = html;
  Array.prototype.forEach.call(container.querySelectorAll('.card'), function(el){
    el.addEventListener('click', function(){
      openModal(this.getAttribute('data-id'));
    });
  });
}

function renderAll(){
  renderTabs();
  renderZones();
  renderStat();
}

var activeId = null;
var activeVictoryId = null;
var hintShown = false;
var quizAnswered = false;
var chronoStart = null;
var chronoTimer = null;

function shuffle(arr){
  var a = arr.slice();
  for(var i=a.length-1;i>0;i--){
    var j = Math.floor(Math.random()*(i+1));
    var tmp = a[i]; a[i]=a[j]; a[j]=tmp;
  }
  return a;
}

function startChrono(){
  chronoStart = Date.now();
  clearInterval(chronoTimer);
  chronoTimer = setInterval(function(){
    var s = Math.floor((Date.now()-chronoStart)/1000);
    var el = document.getElementById('chrono');
    if(el) el.textContent = s + "s";
  }, 500);
}
function stopChrono(){
  clearInterval(chronoTimer);
}

/* ---------- MINI-JEU DE PRÉCISION (FPS warm-up) ---------- */
var PRECISION_KEY = "zone01_piscine_precision_best_v1";
var precisionRound = 0;
var precisionScore = 0;
var precisionTargetTimer = null;
var precisionSpawnTime = 0;
var PRECISION_ROUNDS = 6;

function getBestPrecision(){
  try{ return parseInt(localStorage.getItem(PRECISION_KEY) || "0", 10); }catch(e){ return 0; }
}
function setBestPrecision(v){
  try{ localStorage.setItem(PRECISION_KEY, String(v)); }catch(e){}
}

document.getElementById('precisionOpenBtn').addEventListener('click', function(){
  document.getElementById('precisionOverlay').classList.add('open');
  resetPrecisionUI();
});
document.getElementById('precisionCloseX').addEventListener('click', function(){
  document.getElementById('precisionOverlay').classList.remove('open');
  clearTimeout(precisionTargetTimer);
});
document.getElementById('precisionOverlay').addEventListener('click', function(ev){
  if(ev.target === this){ this.classList.remove('open'); clearTimeout(precisionTargetTimer); }
});

function resetPrecisionUI(){
  document.getElementById('precisionResult').style.display = 'none';
  document.getElementById('precisionStartBtn').style.display = 'block';
  document.getElementById('precisionStartBtn').textContent = '▶ Lancer le calibrage';
  document.getElementById('precisionScoreHud').style.display = 'none';
  var arena = document.getElementById('precisionArena');
  Array.prototype.forEach.call(arena.querySelectorAll('.precisionTarget'), function(t){ t.remove(); });
}

document.getElementById('precisionStartBtn').addEventListener('click', function(){
  precisionRound = 0;
  precisionScore = 0;
  document.getElementById('precisionStartBtn').style.display = 'none';
  document.getElementById('precisionResult').style.display = 'none';
  document.getElementById('precisionScoreHud').style.display = 'block';
  spawnPrecisionTarget();
});

function spawnPrecisionTarget(){
  var arena = document.getElementById('precisionArena');
  Array.prototype.forEach.call(arena.querySelectorAll('.precisionTarget'), function(t){ t.remove(); });
  if(precisionRound >= PRECISION_ROUNDS){
    finishPrecision();
    return;
  }
  precisionRound++;
  document.getElementById('precisionRound').textContent = precisionRound;
  document.getElementById('precisionScoreLive').textContent = precisionScore;

  var target = document.createElement('div');
  target.className = 'precisionTarget';
  target.textContent = '🎯';
  var arenaW = arena.clientWidth, arenaH = arena.clientHeight;
  var size = 40;
  var x = Math.random() * (arenaW - size - 10) + 5;
  var y = Math.random() * (arenaH - size - 40) + 35;
  target.style.left = x + 'px';
  target.style.top = y + 'px';
  precisionSpawnTime = Date.now();
  target.addEventListener('click', function(ev){
    ev.stopPropagation();
    var reaction = Date.now() - precisionSpawnTime;
    var pts = Math.max(10, 1000 - reaction);
    precisionScore += Math.round(pts);
    clearTimeout(precisionTargetTimer);
    spawnPrecisionTarget();
  });
  arena.appendChild(target);

  clearTimeout(precisionTargetTimer);
  precisionTargetTimer = setTimeout(function(){
    // cible ratée (pas cliquée à temps) : 0 point, on passe au round suivant
    spawnPrecisionTarget();
  }, 1400);
}

function finishPrecision(){
  document.getElementById('precisionScoreHud').style.display = 'none';
  var best = getBestPrecision();
  var isNewBest = precisionScore > best;
  if(isNewBest) setBestPrecision(precisionScore);

  var grade;
  if(precisionScore >= 5000) grade = "🏆 RADIANT AIM — précision de sniper Apex";
  else if(precisionScore >= 4000) grade = "💎 DIAMOND AIM — sacrément propre";
  else if(precisionScore >= 3000) grade = "🥇 GOLD AIM — solide";
  else if(precisionScore >= 1500) grade = "🥈 SILVER AIM — ça vient";
  else grade = "🥉 BRONZE AIM — warm-up recommandé";

  var resultEl = document.getElementById('precisionResult');
  resultEl.style.display = 'block';
  resultEl.innerHTML = grade + '<br>Score : ' + precisionScore +
    (isNewBest ? ' — 🆕 NOUVEAU RECORD !' : ' (record : ' + best + ')');

  var btn = document.getElementById('precisionStartBtn');
  btn.style.display = 'block';
  btn.textContent = '↺ Recalibrer';
}

/* ---------- SALLE SECRÈTE URBEX (100% clear) ---------- */
var URBEX_SHOWN_KEY = "zone01_piscine_urbex_shown_v1";
function maybeShowUrbex(){
  if(pctGlobal() < 100) return;
  var alreadyShown = false;
  try{ alreadyShown = localStorage.getItem(URBEX_SHOWN_KEY) === "1"; }catch(e){}
  if(alreadyShown) return;
  try{ localStorage.setItem(URBEX_SHOWN_KEY, "1"); }catch(e){}
  setTimeout(openUrbex, 1400);
}
function openUrbex(){
  var doneCount = Object.keys(progress).filter(function(k){return progress[k];}).length;
  var codedCount = Object.keys(codeDone).filter(function(k){return codeDone[k];}).length;
  var clearedCount = Object.keys(cleared).filter(function(k){return cleared[k];}).length;
  var best = getBestPrecision();
  var grid = document.getElementById('urbexStatsGrid');
  grid.innerHTML =
    '<div class="urbexStat"><div class="uVal">' + doneCount + '/120</div><div class="uLabel">Missions comprises</div></div>' +
    '<div class="urbexStat"><div class="uVal">' + codedCount + '/120</div><div class="uLabel">Codes assemblés</div></div>' +
    '<div class="urbexStat"><div class="uVal">' + clearedCount + '/120</div><div class="uLabel">Trophées obtenus</div></div>' +
    '<div class="urbexStat"><div class="uVal">' + best + '</div><div class="uLabel">Record précision</div></div>';
  document.getElementById('urbexOverlay').classList.add('open');
}
document.getElementById('urbexCloseX').addEventListener('click', function(){
  document.getElementById('urbexOverlay').classList.remove('open');
});
document.getElementById('urbexCloseBtn').addEventListener('click', function(){
  document.getElementById('urbexOverlay').classList.remove('open');
});
document.getElementById('urbexOverlay').addEventListener('click', function(ev){
  if(ev.target === this) this.classList.remove('open');
});


/* ---------- DÉFENSE TACTIQUE (jeu vidéo canvas) ---------- */
var TACTICAL_BEST_KEY = "zone01_piscine_tactical_best_v1";
var tac = {
  canvas: null, ctx: null, enemies: [], running: false, raf: null,
  wave: 1, hp: 5, score: 0, spawned: 0, toSpawn: 0, spawnTimer: 0, lastTs: 0
};

document.getElementById('tacticalOpenBtn').addEventListener('click', function(){
  document.getElementById('tacticalOverlay').classList.add('open');
  showTacticalStart();
});
document.getElementById('tacticalCloseX').addEventListener('click', function(){
  stopTactical();
  document.getElementById('tacticalOverlay').classList.remove('open');
});
document.getElementById('tacticalOverlay').addEventListener('click', function(ev){
  if(ev.target === this){ stopTactical(); this.classList.remove('open'); }
});

function getTacticalBest(){
  try{ return parseInt(localStorage.getItem(TACTICAL_BEST_KEY) || "0", 10); }catch(e){ return 0; }
}
function setTacticalBest(v){
  try{ localStorage.setItem(TACTICAL_BEST_KEY, String(v)); }catch(e){}
}

function showTacticalStart(){
  document.getElementById('tacticalStart').style.display = 'block';
  document.getElementById('tacticalPlayWrap').style.display = 'none';
  document.getElementById('tacticalDefuse').style.display = 'none';
  document.getElementById('tacticalEnd').style.display = 'none';
  var best = getTacticalBest();
  document.getElementById('tacticalBest').textContent = best > 0 ? ("Meilleur score : " + best + " pts") : "Pas encore de run enregistrée.";
}

document.getElementById('tacticalStartBtn').addEventListener('click', startTactical);
document.getElementById('tacticalReplayBtn').addEventListener('click', startTactical);

function startTactical(){
  document.getElementById('tacticalStart').style.display = 'none';
  document.getElementById('tacticalEnd').style.display = 'none';
  document.getElementById('tacticalDefuse').style.display = 'none';
  document.getElementById('tacticalPlayWrap').style.display = 'block';

  tac.canvas = document.getElementById('tacticalCanvas');
  tac.ctx = tac.canvas.getContext('2d');
  tac.enemies = [];
  tac.wave = 1; tac.hp = 5; tac.score = 0;
  startWave();

  tac.canvas.onclick = function(ev){
    var rect = tac.canvas.getBoundingClientRect();
    var scaleX = tac.canvas.width / rect.width, scaleY = tac.canvas.height / rect.height;
    var mx = (ev.clientX - rect.left) * scaleX, my = (ev.clientY - rect.top) * scaleY;
    for(var i=tac.enemies.length-1;i>=0;i--){
      var e = tac.enemies[i];
      var dx = e.x - mx, dy = e.y - my;
      if(Math.sqrt(dx*dx+dy*dy) < 16){
        tac.enemies.splice(i,1);
        tac.score += 10;
        updateTacticalHud();
        break;
      }
    }
  };

  tac.running = true;
  tac.lastTs = performance.now();
  cancelAnimationFrame(tac.raf);
  tac.raf = requestAnimationFrame(tacticalLoop);
}

function startWave(){
  tac.spawned = 0;
  tac.toSpawn = 3 + tac.wave * 2;
  tac.spawnTimer = 0;
  updateTacticalHud();
}

function updateTacticalHud(){
  document.getElementById('tacticalWave').textContent = "Vague " + tac.wave;
  document.getElementById('tacticalHp').textContent = "❤️".repeat(Math.max(0, tac.hp)) + "🖤".repeat(Math.max(0, 5 - tac.hp));
  document.getElementById('tacticalScore').textContent = "Score " + tac.score;
}

function spawnEnemy(){
  var side = Math.floor(Math.random()*4);
  var x, y;
  var w = tac.canvas.width, h = tac.canvas.height;
  if(side === 0){ x = 0; y = Math.random()*h; }
  else if(side === 1){ x = w; y = Math.random()*h; }
  else if(side === 2){ x = Math.random()*w; y = 0; }
  else { x = Math.random()*w; y = h; }
  var cx = w/2, cy = h/2;
  var angle = Math.atan2(cy - y, cx - x);
  var speed = 0.35 + tac.wave * 0.05;
  tac.enemies.push({x:x, y:y, dx:Math.cos(angle)*speed, dy:Math.sin(angle)*speed});
}

function tacticalLoop(ts){
  if(!tac.running) return;
  var dt = ts - tac.lastTs;
  tac.lastTs = ts;
  var ctx = tac.ctx, w = tac.canvas.width, h = tac.canvas.height, cx = w/2, cy = h/2;

  // spawn
  if(tac.spawned < tac.toSpawn){
    tac.spawnTimer -= dt;
    if(tac.spawnTimer <= 0){
      spawnEnemy();
      tac.spawned++;
      tac.spawnTimer = Math.max(250, 900 - tac.wave*40);
    }
  }

  // move enemies
  for(var i=tac.enemies.length-1;i>=0;i--){
    var e = tac.enemies[i];
    e.x += e.dx * dt; e.y += e.dy * dt;
    var d = Math.sqrt((e.x-cx)*(e.x-cx) + (e.y-cy)*(e.y-cy));
    if(d < 18){
      tac.enemies.splice(i,1);
      tac.hp--;
      updateTacticalHud();
      if(tac.hp <= 0){ endTactical(); return; }
    }
  }

  // draw
  ctx.clearRect(0,0,w,h);
  ctx.strokeStyle = "rgba(255,255,255,0.05)";
  for(var gx=0; gx<w; gx+=40){ ctx.beginPath(); ctx.moveTo(gx,0); ctx.lineTo(gx,h); ctx.stroke(); }
  for(var gy=0; gy<h; gy+=40){ ctx.beginPath(); ctx.moveTo(0,gy); ctx.lineTo(w,gy); ctx.stroke(); }

  // objectif central
  ctx.save();
  ctx.translate(cx,cy);
  ctx.strokeStyle = "#da2c38"; ctx.lineWidth = 2;
  ctx.beginPath();
  for(var s=0;s<6;s++){
    var a = Math.PI/3*s - Math.PI/2;
    var px = Math.cos(a)*22, py = Math.sin(a)*22;
    if(s===0) ctx.moveTo(px,py); else ctx.lineTo(px,py);
  }
  ctx.closePath(); ctx.stroke();
  ctx.fillStyle = "rgba(218,44,56,0.15)"; ctx.fill();
  ctx.font = "16px sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
  ctx.fillStyle = "#fff"; ctx.fillText("🖥️", 0, 1);
  ctx.restore();

  // enemies
  tac.enemies.forEach(function(e){
    ctx.save();
    ctx.translate(e.x, e.y);
    ctx.fillStyle = "#ff4655";
    ctx.beginPath();
    ctx.arc(0,0,9,0,Math.PI*2);
    ctx.fill();
    ctx.fillStyle = "#fff"; ctx.font="10px sans-serif"; ctx.textAlign="center"; ctx.textBaseline="middle";
    ctx.fillText("!", 0, 0);
    ctx.restore();
  });

  // wave clear ?
  if(tac.spawned >= tac.toSpawn && tac.enemies.length === 0){
    tac.running = false;
    if(tac.wave % 3 === 0){
      startDefuse();
    } else {
      tac.wave++;
      setTimeout(function(){ tac.running = true; tac.lastTs = performance.now(); startWave(); tac.raf = requestAnimationFrame(tacticalLoop); }, 500);
    }
    return;
  }

  tac.raf = requestAnimationFrame(tacticalLoop);
}

var defuseTimerInterval = null;
function startDefuse(){
  document.getElementById('tacticalDefuse').style.display = 'block';
  var e = EX[Math.floor(Math.random()*EX.length)];
  document.getElementById('defuseCall').textContent = e.quiz.call;
  var opts = shuffle([
    {text: e.quiz.correct, ok:true},
    {text: e.quiz.wrong[0], ok:false},
    {text: e.quiz.wrong[1], ok:false}
  ]);
  var optsBox = document.getElementById('defuseOpts');
  optsBox.innerHTML = '';
  var answered = false;
  opts.forEach(function(o){
    var btn = document.createElement('button');
    btn.className = 'quizOpt';
    btn.textContent = o.text;
    btn.addEventListener('click', function(){
      if(answered) return;
      answered = true;
      clearInterval(defuseTimerInterval);
      if(o.ok){
        tac.hp = Math.min(5, tac.hp + 1);
        tac.score += 50;
        setBuddy(["Désamorcé. +1 PV, +50 points, propre.", "Nickel, fragment neutralisé.", "GG, terminal sauvé pour cette fois."]);
      } else {
        setBuddy(["Raté, mais bon, le terminal tient encore le coup.", "Pas grave, prochaine vague.", "Ça arrive, on continue."]);
      }
      finishDefuse();
    });
    optsBox.appendChild(btn);
  });

  var timeLeft = 8;
  document.getElementById('defuseTimer').textContent = timeLeft;
  clearInterval(defuseTimerInterval);
  defuseTimerInterval = setInterval(function(){
    timeLeft--;
    document.getElementById('defuseTimer').textContent = timeLeft;
    if(timeLeft <= 0){
      clearInterval(defuseTimerInterval);
      if(!answered){ answered = true; finishDefuse(); }
    }
  }, 1000);
}
function finishDefuse(){
  document.getElementById('tacticalDefuse').style.display = 'none';
  tac.wave++;
  updateTacticalHud();
  tac.running = true;
  tac.lastTs = performance.now();
  startWave();
  tac.raf = requestAnimationFrame(tacticalLoop);
}

function stopTactical(){
  tac.running = false;
  cancelAnimationFrame(tac.raf);
  clearInterval(defuseTimerInterval);
}

function endTactical(){
  stopTactical();
  var best = getTacticalBest();
  var isNew = tac.score > best;
  if(isNew) setTacticalBest(tac.score);

  var grade;
  if(tac.score >= 400) grade = "🏆 RADIANT OPS";
  else if(tac.score >= 250) grade = "💎 DIAMOND OPS";
  else if(tac.score >= 150) grade = "🥇 GOLD OPS";
  else if(tac.score >= 70) grade = "🥈 SILVER OPS";
  else grade = "🥉 BRONZE OPS";

  document.getElementById('tacticalPlayWrap').style.display = 'none';
  document.getElementById('tacticalEnd').style.display = 'block';
  document.getElementById('tacticalEndTitle').textContent = grade;
  document.getElementById('tacticalEndScore').textContent =
    "Vague " + tac.wave + " atteinte · Score " + tac.score + (isNew ? " — 🆕 NOUVEAU RECORD !" : " (record : " + best + ")");
  setBuddy(["Terminal tombé. GG quand même, t'as tenu " + tac.wave + " vagues.", "Défaite honorable. Retente, tu feras mieux."]);
}


var STORY_ROOMS = [
  {cat:1, icon:"🥩", name:"Zone d'Atterrissage", game:"vending"},
  {cat:2, icon:"🗝️", name:"Le QG", game:null},
  {cat:3, icon:"🐱", name:"Atelier des Strings", game:"kittens"},
  {cat:4, icon:"📓", name:"Labo des Nombres", game:null},
  {cat:5, icon:"🚪", name:"Repaire du Boss", game:null}
];

document.getElementById('storyMapOpenBtn').addEventListener('click', function(){
  renderMapGrid();
  document.getElementById('mapDetail').style.display = 'none';
  document.getElementById('mapGrid').style.display = 'grid';
  document.getElementById('storyMapOverlay').classList.add('open');
});
document.getElementById('storyMapCloseX').addEventListener('click', function(){
  document.getElementById('storyMapOverlay').classList.remove('open');
});
document.getElementById('storyMapOverlay').addEventListener('click', function(ev){
  if(ev.target === this) this.classList.remove('open');
});
document.getElementById('mapBack').addEventListener('click', function(){
  document.getElementById('mapDetail').style.display = 'none';
  document.getElementById('mapGrid').style.display = 'grid';
});

function isUrbexUnlocked(){
  try{ return localStorage.getItem(URBEX_SHOWN_KEY) === "1"; }catch(e){ return false; }
}

function renderMapGrid(){
  var seen = getStorySeen();
  var grid = document.getElementById('mapGrid');
  var html = '';
  STORY_ROOMS.forEach(function(room){
    var unlocked = !!seen[room.cat];
    html += '<div class="mapNode' + (unlocked?'':' locked') + '" data-cat="'+room.cat+'">' +
      '<div class="mnIcon">' + (unlocked ? room.icon : '🔒') + '</div>' +
      '<div class="mnName">' + (unlocked ? room.name : '???') + '</div>' +
      '<div class="mnStatus">' + (unlocked ? 'Explorée' : pctOfCat(room.cat) + '% pour débloquer') + '</div>' +
      '</div>';
  });
  var secretUnlocked = isUrbexUnlocked();
  html += '<div class="mapNode secret' + (secretUnlocked?'':' locked') + '" data-cat="secret">' +
    '<div class="mnIcon">' + (secretUnlocked ? '🏚️' : '🔒') + '</div>' +
    '<div class="mnName">' + (secretUnlocked ? 'Zone Interdite' : '???') + '</div>' +
    '<div class="mnStatus">' + (secretUnlocked ? 'Explorée' : '100% pour débloquer') + '</div>' +
    '</div>';
  grid.innerHTML = html;
  Array.prototype.forEach.call(grid.querySelectorAll('.mapNode:not(.locked)'), function(el){
    el.addEventListener('click', function(){ openMapDetail(this.getAttribute('data-cat')); });
  });
}

function openMapDetail(catKey){
  document.getElementById('mapGrid').style.display = 'none';
  document.getElementById('mapDetail').style.display = 'block';
  var gameBox = document.getElementById('mapDetailGame');
  gameBox.innerHTML = '';

  if(catKey === 'secret'){
    document.getElementById('mapDetailEyebrow').textContent = "ZONE INTERDITE";
    document.getElementById('mapDetailIcon').textContent = "🏚️";
    document.getElementById('mapDetailText').innerHTML = "100% de la piscine explorée. Derrière la trappe : rien qu'un vieux poste de contrôle poussiéreux, tes stats affichées sur un écran cassé, et un post-it final du buddy : « GG. Sérieux. »";
    return;
  }

  var room = STORY_ROOMS.find(function(r){ return r.cat == catKey; });
  var beat = STORY_BEATS[room.cat];
  document.getElementById('mapDetailEyebrow').textContent = beat.eyebrow;
  document.getElementById('mapDetailIcon').textContent = beat.icon;
  document.getElementById('mapDetailText').innerHTML = beat.text;

  if(room.game === 'vending') renderVendingGame(gameBox);
  if(room.game === 'kittens') renderKittenGame(gameBox);
}

/* --- Mini-jeu : craquer le code du distributeur de Kobé --- */
var VENDING_KEY = "zone01_piscine_vending_solved_v1";
var VENDING_CODE = "418";
function renderVendingGame(container){
  var solved = false;
  try{ solved = localStorage.getItem(VENDING_KEY) === "1"; }catch(e){}
  var box = document.createElement('div');
  box.className = 'vendingGame';
  if(solved){
    box.innerHTML = '<div class="vendingFeedback vendingWin">🥩 CODE CRAQUÉ : le distributeur s\'ouvre enfin. À l\'intérieur : une canette vide et un ticket de caisse de 2019. C\'était pas grand-chose, mais t\'as quand même réussi.</div>';
    container.appendChild(box);
    return;
  }
  box.innerHTML =
    '<div style="font-size:12.5px;color:var(--ink-dim);margin-bottom:10px;">Le clavier du distributeur a 3 chiffres à trouver (0-9 chacun). Tape un essai, le buddy te dit si t\'es chaud ou froid.</div>' +
    '<div class="vendingRow">' +
      '<input class="vendingInput" maxlength="1" id="vd0" inputmode="numeric">' +
      '<input class="vendingInput" maxlength="1" id="vd1" inputmode="numeric">' +
      '<input class="vendingInput" maxlength="1" id="vd2" inputmode="numeric">' +
      '<button class="btn primary" id="vendingTry" style="width:auto;padding:0 16px;">Essayer</button>' +
    '</div>' +
    '<div class="vendingFeedback" id="vendingFeedback">3 essais et tu commences à piger le pattern normalement.</div>';
  container.appendChild(box);

  document.getElementById('vendingTry').addEventListener('click', function(){
    var guess = (document.getElementById('vd0').value || '?') + (document.getElementById('vd1').value || '?') + (document.getElementById('vd2').value || '?');
    var fb = document.getElementById('vendingFeedback');
    if(guess.length !== 3 || guess.indexOf('?') !== -1){
      fb.textContent = "Faut remplir les 3 cases, chef.";
      return;
    }
    if(guess === VENDING_CODE){
      try{ localStorage.setItem(VENDING_KEY, "1"); }catch(e){}
      box.innerHTML = '<div class="vendingFeedback vendingWin">🥩 CODE CRAQUÉ : le distributeur s\'ouvre enfin. À l\'intérieur : une canette vide et un ticket de caisse de 2019. C\'était pas grand-chose, mais t\'as quand même réussi.</div>';
      return;
    }
    var correctPos = 0, correctDigit = 0;
    var codeArr = VENDING_CODE.split(''), guessArr = guess.split('');
    var usedCode = [false,false,false], usedGuess = [false,false,false];
    for(var i=0;i<3;i++){ if(guessArr[i] === codeArr[i]){ correctPos++; usedCode[i]=true; usedGuess[i]=true; } }
    for(var i=0;i<3;i++){
      if(usedGuess[i]) continue;
      for(var j=0;j<3;j++){
        if(!usedCode[j] && guessArr[i] === codeArr[j]){ correctDigit++; usedCode[j]=true; break; }
      }
    }
    fb.textContent = "🔥 " + correctPos + " chiffre(s) bien placé(s) · 🧊 " + correctDigit + " chiffre(s) présent(s) mais mal placé(s). Retente.";
  });
}

/* --- Mini-jeu : sauvetage des chatons dans les gaines --- */
var KITTEN_KEY = "zone01_piscine_kittens_found_v1";
var KITTEN_POSITIONS = [1, 4, 7]; // index des vents qui cachent un chaton (sur 9)
function getKittensFound(){
  try{ return JSON.parse(localStorage.getItem(KITTEN_KEY) || '[]'); }catch(e){ return []; }
}
function saveKittensFound(arr){
  try{ localStorage.setItem(KITTEN_KEY, JSON.stringify(arr)); }catch(e){}
}
function renderKittenGame(container){
  var found = getKittensFound();
  var box = document.createElement('div');
  box.innerHTML =
    '<div style="font-size:12.5px;color:var(--ink-dim);margin:6px 0 4px;">9 gaines de ventilation. 3 cachent un chaton coincé. Clique pour chercher (les cases déjà cherchées restent ouvertes).</div>' +
    '<div class="kittenGrid" id="kittenGrid"></div>' +
    '<div class="kittenCount" id="kittenCount"></div>';
  container.appendChild(box);
  renderKittenGrid();

  function renderKittenGrid(){
    var grid = document.getElementById('kittenGrid');
    var revealed = getKittensFound();
    var html = '';
    for(var i=0;i<9;i++){
      var isKitten = KITTEN_POSITIONS.indexOf(i) !== -1;
      var wasRevealed = revealed.indexOf(i) !== -1;
      if(wasRevealed){
        html += '<div class="vent ' + (isKitten ? 'found' : 'empty') + '">' + (isKitten ? '🐱' : '·') + '</div>';
      } else {
        html += '<div class="vent" data-idx="'+i+'">🔩</div>';
      }
    }
    grid.innerHTML = html;
    var kittensFoundCount = revealed.filter(function(i){ return KITTEN_POSITIONS.indexOf(i) !== -1; }).length;
    document.getElementById('kittenCount').textContent = kittensFoundCount === 3
      ? "🐱 Les 3 chatons sont sauvés ! Ton buddy est officiellement en mode papa fier."
      : kittensFoundCount + " / 3 chatons trouvés";

    Array.prototype.forEach.call(grid.querySelectorAll('.vent[data-idx]'), function(el){
      el.addEventListener('click', function(){
        var idx = parseInt(this.getAttribute('data-idx'), 10);
        var rev = getKittensFound();
        if(rev.indexOf(idx) === -1){ rev.push(idx); saveKittensFound(rev); }
        renderKittenGrid();
      });
    });
  }
}

/* ---------- CINÉMATIQUE D'INTRO ---------- */
var CUTSCENE_KEY = "zone01_piscine_cutscene_seen_v1";
var CUTSCENE_SLIDES = [
  "<b>TRANSMISSION INTERCEPTÉE — RÉSEAU ZONE01 ROUEN.</b><br><br>Un signal bizarre remonte du sous-sol du campus. Une piscine condamnée depuis des années. Personne y retourne depuis « l'incident du distributeur de bœuf de Kobé » (personne veut en parler, encore aujourd'hui).",
  "Ta squad est envoyée en reconnaissance. Composition : toi, et ton pote de terminal — un chat tacticien qui parle beaucoup trop pour quelqu'un qui a pas de mains.",
  "Objectif : traverser 5 chapitres du complexe, désamorcer 120 fragments de code corrompu, et survivre à ce qui se planque tout en bas de la piscine — la Zone Interdite.",
  "Règle d'engagement : aucune zone n'est verrouillée. T'avances où tu veux, à ton rythme, dans l'ordre que tu veux. La seule règle, c'est que chaque round loupé fait une meilleure histoire à raconter après.",
  "Dernière chose : y'a des chatons coincés dans une gaine de ventilation quelque part là-dedans. Fais gaffe où tu marches.<br><br>Bon. Prêt à drop ?"
];
var cutsceneIdx = 0;

function renderCutsceneSlide(){
  document.getElementById('cutsceneText').innerHTML = CUTSCENE_SLIDES[cutsceneIdx];
  var dots = document.getElementById('cutsceneProgress');
  dots.innerHTML = CUTSCENE_SLIDES.map(function(_, i){
    return '<div class="dot' + (i <= cutsceneIdx ? ' on' : '') + '"></div>';
  }).join('');
  document.getElementById('cutsceneNext').textContent = (cutsceneIdx === CUTSCENE_SLIDES.length - 1) ? "C'est parti ➜" : "Suivant ➜";
}
function closeCutscene(){
  document.getElementById('cutsceneOverlay').classList.add('hidden');
  try{ localStorage.setItem(CUTSCENE_KEY, "1"); }catch(e){}
}
document.getElementById('cutsceneNext').addEventListener('click', function(){
  if(cutsceneIdx < CUTSCENE_SLIDES.length - 1){
    cutsceneIdx++;
    renderCutsceneSlide();
  } else {
    closeCutscene();
  }
});
document.getElementById('cutsceneSkip').addEventListener('click', closeCutscene);

(function initCutscene(){
  var seen = false;
  try{ seen = localStorage.getItem(CUTSCENE_KEY) === "1"; }catch(e){}
  if(seen){
    document.getElementById('cutsceneOverlay').classList.add('hidden');
  } else {
    renderCutsceneSlide();
  }
})();

/* ---------- STORY BEATS (fin de chapitre) ---------- */
var STORY_SEEN_KEY = "zone01_piscine_story_seen_v1";
var STORY_BEATS = {
  1: {icon:"🥩", eyebrow:"TRANSMISSION — CHAPITRE 1 SÉCURISÉ", text:"Zone d'Atterrissage nettoyée. Sous une dalle fissurée, tu trouves un vieux distributeur manuel : « BŒUF DE KOBÉ — RUPTURE DE STOCK DEPUIS 2019 ». Ton buddy renifle longuement et dit que c'est louche. On avance quand même."},
  2: {icon:"🗝️", eyebrow:"TRANSMISSION — CHAPITRE 2 SÉCURISÉ", text:"Le QG est vidé. Dans un tiroir de bureau : une carte d'accès et un post-it écrit à la main — « si tu lis ça, méfie-toi du chapitre 3, les strings mordent ». Personne sait ce que ça veut dire. On continue."},
  3: {icon:"🐱", eyebrow:"TRANSMISSION — CHAPITRE 3 SÉCURISÉ", text:"Atelier des strings terminé. T'entends un miaulement dans une gaine de ventilation au-dessus de toi. Tu notes la position sur la carte. On reviendra les chercher, promis (le buddy insiste beaucoup là-dessus)."},
  4: {icon:"📓", eyebrow:"TRANSMISSION — CHAPITRE 4 SÉCURISÉ", text:"Labo des nombres bouclé. Sous un vieux serveur, un carnet de notes qui parle d'un « signal Radiant » tout en bas du complexe. Ton buddy devient soudainement très motivé à continuer."},
  5: {icon:"🚪", eyebrow:"TRANSMISSION — CHAPITRE 5 SÉCURISÉ", text:"Repaire du Boss vidé. Derrière la dernière porte : une trappe scellée, rouillée, avec écrit dessus « ZONE INTERDITE ». C'est le moment. T'as pas fait tout ça pour reculer maintenant."}
};

function getStorySeen(){
  try{ return JSON.parse(localStorage.getItem(STORY_SEEN_KEY) || '{}'); }catch(e){ return {}; }
}
function setStorySeen(obj){
  try{ localStorage.setItem(STORY_SEEN_KEY, JSON.stringify(obj)); }catch(e){}
}
function maybeShowStoryBeat(cat){
  var beat = STORY_BEATS[cat];
  if(!beat) return;
  if(pctOfCat(cat) < 100) return;
  var seen = getStorySeen();
  if(seen[cat]) return;
  seen[cat] = true;
  setStorySeen(seen);
  document.getElementById('storyEyebrow').textContent = beat.eyebrow;
  document.getElementById('storyIcon').textContent = beat.icon;
  document.getElementById('storyText').innerHTML = beat.text;
  setTimeout(function(){
    document.getElementById('storyOverlay').classList.add('open');
  }, 400);
}
document.getElementById('storyCloseBtn').addEventListener('click', function(){
  document.getElementById('storyOverlay').classList.remove('open');
});
document.getElementById('storyOverlay').addEventListener('click', function(ev){
  if(ev.target === this) this.classList.remove('open');
});


function showEgg(icon, title, text){
  document.getElementById('eggIcon').textContent = icon;
  document.getElementById('eggTitle').textContent = title;
  document.getElementById('eggText').textContent = text;
  document.getElementById('eggOverlay').classList.add('open');
}
document.getElementById('eggCloseX').addEventListener('click', function(){
  document.getElementById('eggOverlay').classList.remove('open');
});
document.getElementById('eggOverlay').addEventListener('click', function(ev){
  if(ev.target === this) this.classList.remove('open');
});

var buddyClickCount = 0;
document.querySelector('.buddyIcon').addEventListener('click', function(){
  buddyClickCount++;
  if(buddyClickCount === 5){
    buddyClickCount = 0;
    showEgg("🐱‍👤", "BRISURE DU 4E MUR", "Ouais, ok, j'existe même pas vraiment, je suis juste un tableau de phrases piochées au hasard. Mais je crois quand même en toi. Retourne bosser (jouer).");
  } else {
    setBuddy(["Oui ?", "Quoi ?", "Ping reçu.", "Je suis juste un chat, pas un oracle."]);
  }
});

var eggSearchTriggered = false;
var EGG_TERMS = {
  "tdc": {icon:"👑", title:"TDC DANS LA PLACE", text:"Ouais on sait, c'est TOI le TDC. Légende vivante de la piscine, respecté même par le compilateur. Retourne à tes missions, champion."},
  "kobe": {icon:"🥩", title:"BŒUF DE KOBÉ DÉTECTÉ", text:"Un bœuf de Kobé bien élevé, masse tranquillement dans son pré, écoute du Mozart... et toi tu masses tranquillement tes exos. Même vibe, plus stylé."},
  "chat": {icon:"🐱", title:"CHATON EN APPROCHE", text:"Un chaton vient de traverser le terminal en marchant sur ton clavier. Il a accidentellement corrigé un bug. Bon chat."},
  "urbex": {icon:"🏚️", title:"ZONE EXPLORÉE", text:"T'as fouillé jusque dans la search bar. Respect total du niveau de curiosité. Y'a d'autres secrets planqués, cherche encore."}
};
document.getElementById('search').addEventListener('input', function(){
  var v = this.value.trim().toLowerCase();
  var egg = EGG_TERMS[v];
  if(egg && !eggSearchTriggered){
    eggSearchTriggered = true;
    showEgg(egg.icon, egg.title, egg.text);
  }
  if(!egg) eggSearchTriggered = false;
});


var BUDDY_LINES = {
  open: [
    "Nouvelle mission, TDC. Respire, vise juste, comme d'hab.",
    "On y va, calme et précis. Pas besoin de spray, un seul coup suffit.",
    "Nouveau contrat. Si tu bloques, mate le Plan de tactique, c'est fait pour ça.",
    "GO. Traite ça comme une ronde de warm-up avant la vraie game.",
    "Nouvelle zone à looter. Grouille pas, la ring rétrécit pas ici.",
    "Mission reçue. Un chat a déjà vérifié, c'est safe, tu peux y aller."
  ],
  codeWin: [
    "Clean. T'as assemblé ça plus vite qu'un reload en combat.",
    "Bien joué, code stable, zéro flinch.",
    "Nickel. Digne d'un highlight de fin de game.",
    "Assemblé nickel, plus précis qu'un bœuf de Kobé bien découpé."
  ],
  codeLose: [
    "Pas grave, même les pros whiff parfois. Relis les explications et repush.",
    "Raté cette fois — regarde le vert/rouge, ça te dit où ça a merdé.",
    "Ça arrive. Un bon joueur, c'est surtout quelqu'un qui update son plan après un fail.",
    "Even TDC rate des trucs de temps en temps (rarement, mais ça arrive)."
  ],
  quizWin: [
    "Confirmé. T'as capté le truc, pas juste deviné.",
    "GG, validé propre. Un bœuf de Kobé bien cuit, ça prend du temps aussi — patience.",
    "Nice, encore une notion qui rentre. Ça se voit que tu progresses.",
    "Validé. Le chaton du terminal est fier de toi."
  ],
  quizLose: [
    "Pas cette fois — retourne écouter le Brief, l'info est là.",
    "Raté, mais t'as pas perdu de rang pour ça, c'est pas du ranked.",
    "Cherche encore un peu, la réponse est cachée dans le Plan de tactique.",
    "Whiff. Ça arrive, respire, recharge, retente."
  ],
  victory: [
    "Mission clean-clear. T'as chassé cette fonction comme un urbexeur trouve la pièce secrète.",
    "GG, appelle tes potes et montre-leur le trophée.",
    "Propre. Encore une brique posée, le mur avance.",
    "TDC valide. La légende continue de grandir."
  ]
};
function setBuddy(pool){
  var bubble = document.getElementById('buddyBubble');
  if(bubble) bubble.textContent = pick(String(Date.now()%97) + pool[0], pool);
}

/* ---------- STEP TABS ---------- */
function switchStep(step){
  ['brief','code','quiz'].forEach(function(s){
    document.getElementById('pane-'+s).style.display = (s===step) ? 'block' : 'none';
  });
  Array.prototype.forEach.call(document.querySelectorAll('.steptab'), function(t){
    t.classList.toggle('active', t.getAttribute('data-step') === step);
  });
}
Array.prototype.forEach.call(document.querySelectorAll('.steptab'), function(t){
  t.addEventListener('click', function(){ switchStep(this.getAttribute('data-step')); });
});

/* ---------- EXPLICATEUR DE LIGNES (façon briefing Apex, avec vannes) ---------- */
function hashStr(s){
  var h = 0;
  for(var i=0;i<s.length;i++){ h = (h*31 + s.charCodeAt(i)) | 0; }
  return Math.abs(h);
}
function pick(line, variants){
  return variants[hashStr(line) % variants.length];
}

var LINE_PATTERNS = [
  [/^func main\(\)/, function(l){ return pick(l, [
    "Le spawn de la mission : tout commence ici, comme le compte à rebours avant le drop.",
    "Point d'entrée du programme — la zone de largage, rien ne se passe avant cette ligne."
  ]); }],
  [/^func \w+\(/, function(l){ return pick(l, [
    "La carte d'identité de la fonction : son nom + ce qu'elle prend en paramètre, genre ton loadout de départ.",
    "Déclaration de la fonction : c'est le briefing de mission, on annonce le nom et l'équipement fourni."
  ]); }],
  [/for .*range/, function(l){ return pick(l, [
    "Boucle qui scanne chaque élément un par un — comme ratisser toute la zone avant de push, rien n'est ignoré.",
    "On parcourt tout, caractère par caractère ou case par case. Full scan, aucun angle mort."
  ]); }],
  [/^for [^r]/, function(l){ return pick(l, [
    "Boucle avec compteur : on répète tant que la condition tient, comme un cooldown qui tourne jusqu'à 0.",
    "On boucle un nombre précis de fois — genre un timer de capacité qui décompte round après round."
  ]); }],
  [/^\s*if .*else/, function(l){ return pick(l, [
    "Fork tactique : deux chemins possibles selon la situation, comme choisir push ou rotate selon le call de l'IGL.",
    "Deux options ici, une seule sera prise. C'est littéralement un choix de rotation en live."
  ]); }],
  [/^\s*if /, function(l){ return pick(l, [
    "Check de situation : si c'est vrai, on part dans cette branche. Sinon on continue tout droit.",
    "Une condition à vérifier avant d'agir — comme peek un angle avant de s'engager, faut confirmer l'info d'abord."
  ]); }],
  [/^\s*}\s*else/, function(l){ return pick(l, [
    "Le plan B si la condition d'avant était fausse. Toujours avoir un fallback, comme en ranked.",
  ]); }],
  [/^\s*return/, function(l){ return pick(l, [
    "Extraction : on renvoie le résultat et on quitte la fonction, mission accomplie, exfil terminée.",
    "On livre le loot final à celui qui a appelé la fonction. GG, on rembarque."
  ]); }],
  [/append\(/, function(l){ return pick(l, [
    "On ajoute un item de plus dans l'inventaire (la slice) sans perdre ce qu'il y avait déjà dedans.",
    "Ramassage de loot : on empile un élément de plus dans la liste."
  ]); }],
  [/sort\.(Ints|Strings)/, function(l){ return pick(l, [
    "Un allié qui range tout dans l'ordre pour toi automatiquement — le pote qui call les rotations à ta place.",
  ]); }],
  [/strconv\.Atoi/, function(l){ return pick(l, [
    "Convertit du texte en vrai nombre exploitable, comme décoder un ping vocal en position précise sur la carte.",
  ]); }],
  [/os\.Args/, function(l){ return pick(l, [
    "Les arguments reçus au lancement du programme — ton inventaire de départ pour cette game.",
    "C'est ce que le joueur (toi) a tapé dans le terminal. Ton loadout initial, avant même que la partie commence."
  ]); }],
  [/fmt\.(Println|Print|Printf)/, function(l){ return pick(l, [
    "Affiche le résultat à l'écran — comme balancer l'info dans le chat d'équipe pour que tout le monde voie.",
    "On sort l'info côté joueur. Sans ça, tout le calcul reste invisible, un peu comme farmer sans killfeed."
  ]); }],
  [/unicode\.(IsUpper|IsLower|IsDigit|IsLetter|IsPrint|ToUpper|ToLower)/, function(l){ return pick(l, [
    "Check rapide sur le caractère (lettre ? majuscule ? chiffre ?) — un scan d'ennemi avant d'engager le combat.",
  ]); }],
  [/strings\.(Fields|Join|Split|ToUpper|ToLower|Contains|Repeat|ReplaceAll|IndexRune)/, function(l){ return pick(l, [
    "Un outil tout fait du package strings qui fait le sale boulot à ta place — comme une capacité passive gratuite.",
  ]); }],
  [/switch/, function(l){ return pick(l, [
    "Table de callouts : selon la valeur, un chemin précis est choisi parmi plusieurs. Un seul sera activé.",
  ]); }],
  [/^\s*case /, function(l){ return pick(l, [
    "Un des scénarios possibles du switch juste au-dessus — une des routes du plan de jeu.",
  ]); }],
  [/os\.ReadFile/, function(l){ return pick(l, [
    "On va chercher le contenu d'un fichier sur le disque, comme looter une caisse pour voir ce qu'il y a dedans.",
  ]); }],
  [/make\(/, function(l){ return pick(l, [
    "On réserve la place en mémoire à l'avance — comme préparer ton sac avant le drop pour pas perdre de temps après.",
  ]); }],
  [/^\s*\*\w+ ?=/, function(l){ return pick(l, [
    "On écrit direct dans la mémoire visée par le pointeur — un headshot qui modifie la vraie valeur, pas une copie.",
  ]); }],
  [/\^=/, function(l){ return pick(l, [
    "XOR : deux valeurs identiques s'annulent, ne reste que celle qui dépareille. Sournois et hyper efficace.",
  ]); }],
  [/>>|<</, function(l){ return pick(l, [
    "Décalage de bits : on fait glisser les 0 et 1 vers la gauche ou la droite, comme repositionner toute l'équipe d'un coup.",
  ]); }],
  [/%\s*\w|%\d/, function(l){ return pick(l, [
    "Modulo : on garde juste le reste de la division, hyper pratique pour boucler ou isoler un chiffre.",
  ]); }],
  [/^\s*}\s*$/, function(l){ return pick(l, [
    "Fin de bloc. On referme ce qu'on avait ouvert, comme sécuriser la zone avant de bouger ailleurs.",
  ]); }],
  [/var \w+|:=/, function(l){ return pick(l, [
    "On stocke une valeur dans une variable pour s'en resservir juste après, comme poser un beacon pour retrouver son chemin.",
  ]); }],
];

function explainLine(line){
  var trimmed = line.trim();
  if(trimmed === '' ) return '';
  for(var i=0;i<LINE_PATTERNS.length;i++){
    if(LINE_PATTERNS[i][0].test(line)){
      return LINE_PATTERNS[i][1](line);
    }
  }
  return pick(line, [
    "Une étape du plan — fais confiance au processus, chaque ligne a son rôle dans la stratégie globale.",
    "Un rouage de la machine. Pas le plus spectaculaire, mais sans lui rien ne tourne."
  ]);
}


var codeCorrectOrder = [];
var codeAssignedSlots = []; // index dans codeCorrectOrder ou null

function renderCodeGame(e){
  codeCorrectOrder = e.code;
  codeAssignedSlots = new Array(codeCorrectOrder.length).fill(null);
  var shuffled = shuffle(codeCorrectOrder.map(function(line, idx){ return {line: line, origIdx: idx}; }));

  var pool = document.getElementById('codePool');
  pool.innerHTML = '';
  shuffled.forEach(function(item){
    var chip = document.createElement('div');
    chip.className = 'codeChip';
    chip.textContent = item.line;
    chip.setAttribute('data-orig', item.origIdx);
    chip.addEventListener('click', function(){ placeCodeLine(item.origIdx, chip); });
    pool.appendChild(chip);
  });

  renderAssembledBox();
  document.getElementById('codeStatus').className = 'codeStatus';
  document.getElementById('codeStatus').textContent = '';
}

function renderAssembledBox(){
  var box = document.getElementById('codeAssembled');
  box.innerHTML = '';
  for(var i=0;i<codeCorrectOrder.length;i++){
    var wrap = document.createElement('div');
    var slotVal = codeAssignedSlots[i];
    if(slotVal === null){
      wrap.className = 'codeLine slot-empty';
      wrap.textContent = '// ligne ' + (i+1) + '...';
    } else {
      var isGood = slotVal === i;
      var lineTxt = codeCorrectOrder[slotVal];
      var codeSpan = document.createElement('div');
      codeSpan.className = 'codeLine ' + (isGood ? 'good' : 'bad');
      codeSpan.textContent = lineTxt;
      wrap.appendChild(codeSpan);
      var why = document.createElement('div');
      why.className = 'codeWhy';
      why.textContent = '💬 ' + explainLine(lineTxt);
      wrap.appendChild(why);
    }
    box.appendChild(wrap);
  }
}

function placeCodeLine(origIdx, chipEl){
  var nextSlot = codeAssignedSlots.indexOf(null);
  if(nextSlot === -1) return;
  codeAssignedSlots[nextSlot] = origIdx;
  chipEl.classList.add('used');
  renderAssembledBox();

  if(codeAssignedSlots.indexOf(null) === -1){
    var allGood = codeAssignedSlots.every(function(v,i){ return v === i; });
    var statusEl = document.getElementById('codeStatus');
    statusEl.classList.add('show');
    if(allGood){
      statusEl.className = 'codeStatus show win';
      statusEl.textContent = '✅ CODE ASSEMBLÉ ! T\'as littéralement écrit du Go, respect.';
      codeDone[activeId] = true;
      saveCodeDone();
      renderZones(); renderStat();
      checkFullClear(activeId);
      setBuddy(BUDDY_LINES.codeWin);
    } else {
      statusEl.className = 'codeStatus show pending';
      statusEl.textContent = '❌ Pas le bon ordre — regarde le vert/rouge, lis les explications, et repush.';
      setBuddy(BUDDY_LINES.codeLose);
    }
  }
}

document.getElementById('codeReset').addEventListener('click', function(){
  var e = EX.find(function(x){return x.id === activeId;});
  if(e) renderCodeGame(e);
});

function playReplay(call, result){
  var termCall = document.getElementById('termCall');
  var termOut = document.getElementById('termOut');
  var cursor = document.getElementById('termCursor');
  termCall.textContent = '';
  termOut.textContent = '';
  document.getElementById('replayBtn').disabled = true;
  document.getElementById('replayBtn').textContent = '⏳ Replay en cours...';

  var callText = '> ' + call;
  var i = 0;
  function typeCall(){
    if(i <= callText.length){
      termCall.textContent = callText.slice(0, i);
      i++;
      setTimeout(typeCall, 18);
    } else {
      setTimeout(typeOut, 400);
    }
  }
  var j = 0;
  function typeOut(){
    if(j <= result.length){
      termOut.textContent = result.slice(0, j);
      j++;
      setTimeout(typeOut, 22);
    } else {
      document.getElementById('replayBtn').disabled = false;
      document.getElementById('replayBtn').textContent = '↺ Rejouer le replay';
    }
  }
  typeCall();
}
document.getElementById('replayBtn').addEventListener('click', function(){
  var e = EX.find(function(x){return x.id === activeId;});
  if(e) playReplay(e.quiz.call, e.quiz.correct);
});

function openModal(id){
  var e = EX.find(function(x){return x.id === id;});
  if(!e) return;
  activeId = id;
  hintShown = false;
  quizAnswered = false;
  switchStep('brief');
  setBuddy(BUDDY_LINES.open);

  var r = RANKS[e.rank];
  document.getElementById('mTag').textContent = r.label;
  document.getElementById('mTag').style.color = r.color;
  document.getElementById('modal').style.setProperty('--rc', r.color);
  document.getElementById('mTitle').textContent = e.id;
  document.getElementById('mQuoi').textContent = e.quoi;
  document.getElementById('mStrat').textContent = e.strat || "Pas de plan detaille pour celui-la, fonce a l'instinct.";

  var conceptRow = document.getElementById('mConceptRow');
  if(e.concept){
    document.getElementById('mConcept').textContent = "🧠 " + e.concept;
    conceptRow.style.display = 'block';
  } else {
    conceptRow.style.display = 'none';
  }

  var hintZone = document.getElementById('hintZone');
  var hintBtn = document.getElementById('hintBtn');
  var hintBox = document.getElementById('hintBox');
  hintBox.style.display = 'none';
  if(e.hint && e.hint.trim() !== ''){
    hintZone.style.display = 'block';
    hintBtn.style.display = 'block';
    hintBtn.textContent = "🔓 Débloquer l'indice bonus";
    hintBox.textContent = "💡 " + e.hint;
  } else {
    hintZone.style.display = 'none';
  }

  renderCodeGame(e);

  // reset replay terminal
  document.getElementById('termCall').textContent = '';
  document.getElementById('termOut').textContent = '';
  document.getElementById('replayBtn').disabled = false;
  document.getElementById('replayBtn').textContent = '▶ Lancer le replay';

  // quiz
  document.getElementById('quizCall').textContent = e.quiz.call;
  var opts = shuffle([
    {text: e.quiz.correct, ok:true},
    {text: e.quiz.wrong[0], ok:false},
    {text: e.quiz.wrong[1], ok:false}
  ]);
  var optsBox = document.getElementById('quizOpts');
  optsBox.innerHTML = '';
  opts.forEach(function(o){
    var btn = document.createElement('button');
    btn.className = 'quizOpt';
    btn.textContent = o.text;
    btn.addEventListener('click', function(){ answerQuiz(o.ok, btn, optsBox); });
    optsBox.appendChild(btn);
  });
  document.getElementById('quizFeedback').textContent = '';
  document.getElementById('quizFeedback').className = 'quizFeedback';
  startChrono();

  updateToggleBtn();
  document.getElementById('overlay').classList.add('open');
  document.getElementById('modal').scrollTop = 0;
}

function answerQuiz(isCorrect, btn, optsBox){
  if(quizAnswered) return;
  quizAnswered = true;
  stopChrono();
  var elapsed = Math.floor((Date.now()-chronoStart)/1000);
  Array.prototype.forEach.call(optsBox.querySelectorAll('.quizOpt'), function(b){
    b.classList.add('disabled');
  });
  var fb = document.getElementById('quizFeedback');
  if(isCorrect){
    btn.classList.add('correct');
    progress[activeId] = true;
    saveProgress();
    var bonus = elapsed <= 8 ? " ⚡ CLUTCH BONUS, t'as même pas eu le temps de stresser !" : "";
    var okMsgs = ["✅ HEADSHOT ! Validé.", "✅ Team wipe, GG. Validé.", "✅ Clean win, aucun regret. Validé.", "✅ Ace. Validé, next."];
    fb.textContent = pick(activeId + elapsed, okMsgs) + bonus;
    fb.className = 'quizFeedback ok';
    renderZones(); renderStat(); renderTabs();
    updateToggleBtn();
    checkFullClear(activeId);
    setBuddy(BUDDY_LINES.quizWin);
  } else {
    btn.classList.add('wrong');
    var koMsgs = [
      "❌ Raté — t'as push sans info, retourne voir le Brief et retente.",
      "❌ Déso, c'était pas la bonne porte. Un coup d'oeil au Plan de tactique et ça repart.",
      "❌ Ça arrive même aux meilleurs (surtout aux meilleurs en fait). Retente."
    ];
    fb.textContent = pick(activeId, koMsgs);
    fb.className = 'quizFeedback ko';
    setBuddy(BUDDY_LINES.quizLose);
  }
}

function updateToggleBtn(){
  var btn = document.getElementById('toggleDone');
  if(progress[activeId]){
    btn.textContent = "Compris ✅ (retirer)";
  } else {
    btn.textContent = "Marquer compris quand même";
  }
}

function closeModal(){
  stopChrono();
  document.getElementById('overlay').classList.remove('open');
  activeId = null;
}

function goNextExercise(){
  if(!activeId) return;
  var idx = EX.findIndex(function(x){return x.id === activeId;});
  var nextIdx = (idx + 1) % EX.length;
  openModal(EX[nextIdx].id);
}

document.getElementById('closeX').addEventListener('click', closeModal);
document.getElementById('closeBtn').addEventListener('click', closeModal);
document.getElementById('nextBtn').addEventListener('click', goNextExercise);
document.getElementById('overlay').addEventListener('click', function(ev){
  if(ev.target === this) closeModal();
});

document.getElementById('hintBtn').addEventListener('click', function(){
  hintShown = !hintShown;
  document.getElementById('hintBox').style.display = hintShown ? 'block' : 'none';
  this.textContent = hintShown ? "🔒 Recacher l'indice" : "🔓 Débloquer l'indice bonus";
});

document.getElementById('toggleDone').addEventListener('click', function(){
  if(!activeId) return;
  progress[activeId] = !progress[activeId];
  if(!progress[activeId]) delete progress[activeId];
  saveProgress();
  updateToggleBtn();
  renderZones();
  renderStat();
  renderTabs();
});

document.getElementById('search').addEventListener('input', function(){
  state.q = this.value;
  renderZones();
});

document.addEventListener('keydown', function(ev){
  if(ev.key === 'Escape'){ closeModal(); document.getElementById('invOverlay').classList.remove('open'); }
});

/* ======================================================================
   COMPTES / SYNCHRO SERVEUR
   Remplis API_BASE avec l'URL de ton serveur Go une fois déployé sur
   AlwaysData (ex: "https://tonsouscompte.alwaysdata.net").
   Tant que c'est vide, le site tourne en local uniquement (comme avant).
   ====================================================================== */
var API_BASE = ""; // <-- mets ton URL ici une fois le serveur en ligne
var CRED_KEY = "zone01_piscine_cred_v1";
var localOnly = (API_BASE === "");
var syncTimer = null;

function apiCall(path, body){
  return fetch(API_BASE + path, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  }).then(function(res){
    return res.json().then(function(data){
      if(!res.ok) throw new Error(data.error || 'erreur serveur');
      return data;
    });
  });
}

function getCred(){
  try{
    var raw = localStorage.getItem(CRED_KEY);
    return raw ? JSON.parse(raw) : null;
  }catch(e){ return null; }
}
function setCred(username, password){
  try{ localStorage.setItem(CRED_KEY, JSON.stringify({username:username, password:password})); }catch(e){}
}
function clearCred(){
  try{ localStorage.removeItem(CRED_KEY); }catch(e){}
}

function bundleData(){
  return JSON.stringify({progress: progress, codeDone: codeDone, cleared: cleared});
}
function applyBundle(dataStr){
  try{
    var parsed = JSON.parse(dataStr || '{}');
    progress = parsed.progress || {};
    codeDone = parsed.codeDone || {};
    cleared = parsed.cleared || {};
    saveProgress(); saveCodeDone(); saveCleared();
  }catch(e){}
}

function syncToServer(){
  if(localOnly) return;
  var cred = getCred();
  if(!cred) return;
  clearTimeout(syncTimer);
  syncTimer = setTimeout(function(){
    apiCall('/api/progress/save', {username: cred.username, password: cred.password, data: bundleData()})
      .catch(function(){ /* echec silencieux, la sauvegarde locale reste valable */ });
  }, 600);
}

// on rebranche les 3 fonctions de sauvegarde pour qu'elles synchronisent aussi le serveur
var _origSaveProgress = saveProgress, _origSaveCodeDone = saveCodeDone, _origSaveCleared = saveCleared;
saveProgress = function(){ _origSaveProgress(); syncToServer(); };
saveCodeDone = function(){ _origSaveCodeDone(); syncToServer(); };
saveCleared = function(){ _origSaveCleared(); syncToServer(); };

function renderAccountBar(){
  var bar = document.getElementById('accountBar');
  var cred = getCred();
  if(localOnly){
    bar.innerHTML = 'Mode local (pas de compte configuré) — ta progression reste sur ce PC.';
  } else if(cred){
    bar.innerHTML = 'Connecté : <b>' + cred.username + '</b> · <span class="logoutLink" id="logoutLink">changer de compte</span>';
    var link = document.getElementById('logoutLink');
    if(link) link.addEventListener('click', function(){ clearCred(); location.reload(); });
  } else {
    bar.innerHTML = '';
  }
}

function showAuthOverlay(){ document.getElementById('authOverlay').classList.remove('hidden'); }
function hideAuthOverlay(){ document.getElementById('authOverlay').classList.add('hidden'); }

function switchAuthTab(tab){
  ['login','signup'].forEach(function(t){
    document.getElementById('authPane-'+t).style.display = (t===tab) ? 'flex' : 'none';
  });
  Array.prototype.forEach.call(document.querySelectorAll('.authTab'), function(b){
    b.classList.toggle('active', b.getAttribute('data-tab') === tab);
  });
  document.getElementById('authError').textContent = '';
}
Array.prototype.forEach.call(document.querySelectorAll('.authTab'), function(b){
  b.addEventListener('click', function(){ switchAuthTab(this.getAttribute('data-tab')); });
});

function bootApp(){
  hideAuthOverlay();
  renderAccountBar();
  renderAll();
}

document.getElementById('loginSubmit').addEventListener('click', function(){
  var username = document.getElementById('loginUser').value.trim();
  var password = document.getElementById('loginPass').value;
  var errEl = document.getElementById('authError');
  errEl.textContent = '';
  apiCall('/api/login', {username: username, password: password}).then(function(){
    return apiCall('/api/progress/load', {username: username, password: password});
  }).then(function(res){
    setCred(username, password);
    applyBundle(res.data);
    bootApp();
  }).catch(function(err){
    errEl.textContent = '❌ ' + err.message;
  });
});

document.getElementById('signupSubmit').addEventListener('click', function(){
  var username = document.getElementById('signupUser').value.trim();
  var password = document.getElementById('signupPass').value;
  var errEl = document.getElementById('authError');
  errEl.textContent = '';
  apiCall('/api/signup', {username: username, password: password}).then(function(){
    setCred(username, password);
    bootApp();
  }).catch(function(err){
    errEl.textContent = '❌ ' + err.message;
  });
});

document.getElementById('authSkip').addEventListener('click', function(){
  localOnly = true;
  bootApp();
});

/* ---------- BOOT ---------- */
if(localOnly){
  bootApp();
} else {
  var cred = getCred();
  if(cred){
    apiCall('/api/progress/load', {username: cred.username, password: cred.password}).then(function(res){
      applyBundle(res.data);
      bootApp();
    }).catch(function(){
      clearCred();
      showAuthOverlay();
    });
  } else {
    showAuthOverlay();
  }
}
})();
</script>
