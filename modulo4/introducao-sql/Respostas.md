### Exercício 1
a)  O comando 'CREATE TABLE Actor' cria uma tabela de nome Actor e dentro do parêntesis são colocados os
atributos da tabela. 'VARCHAR(255)' significa que aquele atributo guarda uma string de até 255 caracteres,
'DATE' é um atributo do tipo data. PRIMARY KEY significa que aquele atributo é a chave primária da tabela,
e NOT NULL significa que o aquele atributo deve ter um valor e não pode ser deixado em branco.

b)  O comando 'SHOW DATABASES' e 'SHOW TABLES' mostra os bancos de dados e as tabelas de um usuário.

c)  O comando 'DESCRIBE Actor' mostrou todos os detalhes da tabela Actor.


### Exercício 2
a) 
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);
```

b)  O erro ocorre por tentar inserir um dado duplicado no banco. Chaves primárias devem ser únicas.

c)  Os atributos da tabela devem estar escritos e bater com os valores a serem inseridos.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d)  O atributo 'name' deve ter um valor.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```

e)  O tipo do valor de 'birth_date' está incorreto. Deve ser escrito entre aspas.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

f)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Rodrigo Santoro",
  1000000,
  "1975-08-22", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Marina Ruy Barbosa",
  1000000,
  "1995-06-30", 
  "female"
);
```

### Exercício 3

a)
```
SELECT * FROM Actor WHERE gender = "female";
```

b)
```
SELECT salary FROM Actor WHERE name = "Tony Ramos";
```

c)  Foi devolvida uma tabela com todos os atributos nulos, porque não existe nenhum ator com o gender = "invalid".
```
SELECT * FROM Actor WHERE gender = "invalid";
```

d)
```
SELECT id, name, salary FROM Actor WHERE salary <= 500000;
```

e)  Não existe o atributo 'nome' na tabela Actor.
```
SELECT id, name from Actor WHERE id = "002";
```

### Exercício 4

a)  Ela busca todos os elementos da tabela Actor cujo atributo 'name' começa com 'A' ou 'J'
e cujo atributo 'salary' é maior que 300000.

b)
```
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
```

c)
```
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";
```

d)
```
SELECT * FROM Actor
WHERE 
    (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%")
AND salary BETWEEN 350000 AND 900000;
```

### Exercício 5

a)  A query cria a tabela declarando seu atributos e respectivos tipos.
```
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
```
);

b)
```
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES (
    "001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
    "2006-01-06",
    7
);
```

c)
```
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES (
    "002",
    "Doce De Mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
    "2012-12-27",
    10
);
```

d)
```
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES (
    "003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
```

e)
```
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES (
	"004",
    "O Duelo",
    "O comandante Vasco Moscoso de Aragão (Joaquim de Almeida) está cansado da sua vida aventureira em alto mar, e busca um lugar tranquilo para viver. É assim que ele chega até a vila de Periperi, uma cidadezinha costeira, e logo conquista a todos no local. Aragão ganha a admiração dos homens que se juntam para ouvir suas histórias fantásticas, e conquista as mulheres, com seus ares românticos da Europa. Só que o fiscal Chico Pacheco (José Wilker), até então o homem mais admirado da cidade, desconfia de Aragão e começa a investigar a vida do forasteiro, querendo saber se tudo que ele diz é verdade ou não.",
    "2015-03-19",
    7
);
```

### Exercício 6

a)  
```
SELECT id, name, rating FROM Movie WHERE id = "004";
```

b)
```
SELECT * FROM Movie WHERE name = "O Duelo";
```

c)
```
SELECT id, name, synopsis FROM Movie WHERE rating >= 7;
```

### Exercício 7

a)
```
SELECT * FROM Movie WHERE name LIKE "%vida%";
```

b)
```
SELECT * FROM Movie
WHERE name LIKE "%duelo%" OR synopsis LIKE "%duelo%";
```
c)
```
SELECT * FROM Movie
WHERE release_date < "2022-08-22";
```
d)
```
SELECT * FROM Movie
WHERE release_date < CURDATE() AND (name LIKE "%vida%" OR synopsis LIKE "%vida%") AND rating > 7;
```