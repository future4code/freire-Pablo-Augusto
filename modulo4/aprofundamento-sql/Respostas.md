### Exercício 1

a) A query vai apagar o atributo 'salary' de todos os atores.

b) A query renomea o atributo 'gender' para 'sex'.

c) A query muda o tipo do atributo que era VARCHAR(6) para VARCHAR(255).

d)
``` 
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 2

a)
``` 
UPDATE Actor
SET name = "Morena Baccarin", birth_date = "1979-06-02" WHERE id = "003";
```

b)
```
UPDATE Actor
SET name = "JULIANA PAES" WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes" WHERE name = "JULIANA PAES";
```

c)
```
UPDATE Actor
SET name = "Wagner Moura", birth_date = "1976-06-27", salary = 1200000, gender = "male" WHERE id = "005";
```

### Exercício 3

a)
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

b)
```
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```

### Exercício 4

a)
```
SELECT MAX(salary) FROM Actor;
```

b)
```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

c)
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

d)
```
SELECT SUM(salary) FROM Actor;
```

### Exercício 5

a)  O resultado retornado foi a quantidade de elementos da tabela agrupados por 'gender'.
Um número x de elementos tem o 'gender' = 'male' e um número y, o 'gender' = 'female'.

b)
```
SELECT id, name FROM Actor
ORDER BY name DESC;
```

c)
```
SELECT * FROM Actor
ORDER BY salary;
```

d)
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

e)
```
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

### Exercício 6

a)
```
ALTER TABLE Movie ADD playing_limit_date DATE;
```

b)
```
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

c)
```
UPDATE Movie SET playing_limit_date = "2022-08-10" WHERE id = "001";
UPDATE Movie SET playing_limit_date = "2022-08-31" WHERE id = "003";
```

d) A query funciona mas não afeta nada no banco de dados pois não existe mais um elemento com o id = "001".
```
DELETE FROM Movie WHERE id = "001"
UPDATE Movie SET synopsis = "Teste exercício 6" WHERE id = "001";
```

### Exercício 7

a) 
```
SELECT COUNT(*) FROM Movie WHERE release_date <= CURDATE() AND playing_limit_date >= CURDATE() AND rating > 7.5;
```

b)
```
SELECT AVG(rating) FROM Movie;
```

c)
```
SELECT COUNT(*) FROM Movie WHERE release_date <= CURDATE() AND playing_limit_date >= CURDATE();
```
 
d)
```
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();
```
 
e)
```
SELECT MAX(rating) FROM Movie;
```
 
f)
```
SELECT MIN(rating) FROM Movie;
```
 
### Exercício 8

a)
```
SELECT * FROM Movie ORDER BY name;
```
 
b)
```
SELECT * FROM Movie ORDER BY name DESC LIMIT 5;
```
 
c)
```
SELECT * FROM Movie WHERE release_date <= CURDATE() AND playing_limit_date >= CURDATE() ORDER BY release_date LIMIT 3;
```
 
d)
```
SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;
```