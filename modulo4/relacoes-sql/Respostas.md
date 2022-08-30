### Exercício 1
a)  Chave estrangeira é o campo de uma tabela que define seu relacionamento
com outra tabela.

b)
```
INSERT INTO Rating VALUES
("okm", "Achei top", 9, "002"),
("ijn", "Filme legal", 8, "003"),
("uhb", "Muito engraçado!", 9.5, "004");
```

c)  A query não pode ser executada pois a tabela Rating tem uma restrição na
sua chave estrangeira que deve referenciar um id existente na tabela Movie.

d)
```
ALTER TABLE Movie DROP COLUMN rating;
```

e)  Não é possível deletar o item da tabela pois seu id é referenciado em outra tabela.


### Exercício 2
a)  Essa tabela cria uma relação N:M da tabela Movie com a tabela Actor.

b)  
```
INSERT INTO MovieCast VALUES
("002", "001"),
("002", "007"),
("002", "006"),
("003", "001"),
("003", "003"),
("003", "005"),
("004", "004"),
("004", "003"),
("004", "1661405643895"),
("004", "001");
```

c)  A query não pode ser executada pois a tabela tem uma restrição nas
suas chaves estrangeiras que devem referenciar um id existente na tabela 
Movie e na tabela Actor.

d)  Não é possível deletar o item da tabela pois seu id é referenciado na tabela criada.


### Exercício 3
a)  O operador ON define a condição para juntar as tabelas.

b)
```
SELECT name, Movie.id, rate FROM Movie
INNER JOIN Rating
ON Movie.id = Rating.movie_id;
```


### Exercício 4
a)
```
SELECT m.id, m.name, r.rate, r.comment FROM Movie m
INNER JOIN Rating r
ON m.id = r.movie_id;
```

b)
```
SELECT m.id as movie_id, m.name, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
```

c)
```
SELECT AVG(r.rate), m.id, m.name FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);
```